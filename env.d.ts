declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string
      API_BASE: string
      BACKEND_PORT: string
      FRONTEND_PORT: string
      SECRET_KEY: string
    }
  }
}

export {}
