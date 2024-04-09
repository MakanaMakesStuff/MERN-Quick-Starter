### Getting Started
- run `yarn install` to install all dependencies
- run `yarn dev` to see app running on port http://localhost:3000
- Note: The express server will run on port 8080 by default

#### Fetching Data(Work in Progress)
```typescript
// File location: src/client/pages/home.tsx
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
```

In this example I imported the axios instance `api` and logged the response of the endpoint at `/`.

Ideally this functionality will be handled by a custom api plugin(in the client folder) that makes the query process more streamlined. i.e:

```typescript
// File location: src/client/includes/store.ts
export default class User extends Resource {
  async getUser(id: string) {
    try {
      const { data } = await this.api.get('/user', { params: { foo: 'bar' }})
  
      return data
    } catch(error) {
      console.error("Failed to fetch user: " + id, error)
    }
  }
}
```
