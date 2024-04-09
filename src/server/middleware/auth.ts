import { NextFunction, Response } from "express"
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import * as path from "path"
dotenv.config({ path: path.resolve(__dirname, "../../../.env.local") })

/**
 * Authentication middleware to add a layer of security between our endpoints and network requests
 * @param req Express Request
 * @param res Express Response
 * @param next Express NextFunction
 * @param whitelist Array of whitelisted paths to exclude from authentication
 * @returns
 */
export function registerAuthMiddleware(
  req: any,
  res: Response,
  next: NextFunction,
  whitelist: string[] = []
) {
  const SECRET_KEY = process.env.SECRET_KEY

  if (!SECRET_KEY || SECRET_KEY == null) {
    return res.status(401).send({
      ok: false,
      error: 'Missing required env var "SECRET_KEY"',
    })
  }

  const token = req.header("x-auth-token")

  // check if current path is whitelisted
  const isWhitelisted = whitelist.includes(req.path)

  if (isWhitelisted) return next()

  if (!token) {
    return res.status(401).send({
      ok: false,
      error: "Access Denied. No Token Provided",
    })
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY as jwt.Secret)
    req.user = decoded
  } catch (error) {
    return res.status(401).send({
      ok: false,
      error: "Token Expired",
    })
  }
}
