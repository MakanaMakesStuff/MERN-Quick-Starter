import { Router } from "express"

const router = Router()

router.get("/api/", (req, res) => {
  res.send("Your API is working!")
})

export { router }
