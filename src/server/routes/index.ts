import { Express } from "express"

export function handler(app: Express) {
  return app.get("/", (req, res) => {
    res.send("API connected successfully!")
  })
}
