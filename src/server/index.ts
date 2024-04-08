import { Express } from "express"
import { handler as index } from "./routes"
import { handler as user } from "./routes/user"

// import all your api endpoints here
const endpoints = [index, user]

export function registerRoutes(app: Express) {
  endpoints.forEach((fn) => {
    fn(app)
  })
}
