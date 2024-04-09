// import all your routes here for a final conglomerate export
import { router as index } from "./api"
import { router as auth } from "./api/auth"

const routers = [index, auth]

export default routers
