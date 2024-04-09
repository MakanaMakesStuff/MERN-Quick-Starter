### Getting Started
- run `yarn install` to install all dependencies
- run `yarn dev` to see app running on port http://localhost:3000
- Note: The express server will run on port 8080 by default

#### Fetching Data(Work in Progress)
```typescript
// File location: src/client/pages/home.tsx
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
```

In this example I imported the axios instance `api` and logged the response of the endpoint at `/`.

Ideally this functionality will be handled by a custom api plugin(in the client folder) that makes the connection process more streamlined. i.e:

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
