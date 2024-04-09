import * as express from "express"
import * as cors from "cors"
import * as dotenv from "dotenv"
import { registerAuthMiddleware } from "./server/middleware/auth"
import routers from "./server/routes"
import * as path from "path"
dotenv.config({ path: path.resolve(__dirname, "../.env.local") })

const app = express()

app.use(express.json())
app.use(cors())

app.use((req, res, next) =>
  registerAuthMiddleware(req, res, next, ["/api/auth/login"])
)

app.use(routers)

app.listen(process.env.BACKEND_PORT || 8080, () => {
  console.log(
    `App is live on ${process.env.BASE_URL || "http://localhost"}:${
      process.env.BACKEND_PORT || 8080
    }${process.env.API_BASE || ""}`
  )
})

export default app
