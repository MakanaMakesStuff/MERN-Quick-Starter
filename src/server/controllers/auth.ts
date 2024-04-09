import { Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

export function loginGet(req: Request, res: Response) {
  res.render("login")
}

export async function loginPost(req: Request, res: Response) {
  try {
    const users = [
      {
        _id: 1,
        email: "makana@clublisi.com",
        password: "11111",
        roles: ["admin", "editor", "viewer"],
      },
    ]

    const user = users?.find((u) => u.email === req.body.email)

    if (!user) throw new Error("Invalid Email or Password")

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) throw new Error("Invalid Password")

    const token = jwt.sign(
      {
        id: user._id,
        roles: user.roles,
      },
      "jwtPrivateKey",
      { expiresIn: "1m" }
    )

    res.send({ ok: true, token })
  } catch (error) {
    console.error("Failed to Authenticate user", error)
  }
}
