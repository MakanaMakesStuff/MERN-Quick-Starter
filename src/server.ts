import * as express from "express"
import * as cors from "cors"
import { registerRoutes } from "./server/index"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(cors())

registerRoutes(app)

app.listen(process.env.BACKEND_PORT || 8080, () => {
  console.log(
    `App is live on ${process.env.BASE_URL || "http://localhost"}:${
      process.env.BACKEND_PORT || 8080
    }${process.env.API_BASE || ""}`
  )
})

export default app
