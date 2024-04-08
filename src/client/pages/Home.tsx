import api from "../../server/includes/api"
import { useEffect } from "react"

export default function Home() {
  async function fetchHomeMessage() {
    try {
      const { data } = await api.get("/")

      return data
    } catch (error) {
      console.error("Failed to fetch home message", error)
    }
  }

  useEffect(() => {
    fetchHomeMessage().then((res) => console.log(res))
  }, [])
  return <h1>Hello World!!</h1>
}
