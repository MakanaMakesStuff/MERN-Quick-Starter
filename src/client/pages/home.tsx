import { FormEvent } from "react"
import { login } from "../includes/api/auth"

export default function Home() {
  function formSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data: any = {}

    for (const [k, v] of formData.entries()) {
      data[k] = v
    }

    login(data).then((authed) => console.log(authed ? "Authed" : "Unauthed"))
  }
  return (
    <>
      <h1>Hello World!!</h1>

      <form onSubmit={formSubmit}>
        <label>
          <input type="email" name="email" placeholder="Email" />
        </label>

        <label>
          <input type="password" name="password" placeholder="Password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  )
}
