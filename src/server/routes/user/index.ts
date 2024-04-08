import { Express } from "express"

export function handler(app: Express) {
  return app.get("/user", (req, res) => {
    res.send("API endpoint for user")
  })
}
