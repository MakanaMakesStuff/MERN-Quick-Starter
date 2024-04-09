import { Router } from "express"
import { loginPost } from "../../controllers/auth"

const router = Router()

router.get("/api/auth/login", (req, res) => {
  res.send("Login Get Endpoint Hit!")
})
router.post("/api/auth/login", (req, res) => loginPost(req, res))

export { router }
