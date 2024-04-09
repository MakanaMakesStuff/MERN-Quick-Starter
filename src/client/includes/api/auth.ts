import api from "../../../server/includes/api"

export async function login({
  email,
  password,
}: {
  email: string
  password: string
}) {
  try {
    const { data } = await api.post(
      "/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (!data?.ok) throw new Error(data?.error)

    return true
  } catch (error) {
    console.error("Failed to authenticate user", error)
    return false
  }
}
