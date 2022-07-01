interface JsonResponse {
  getJson: () => string
}
interface Token {
  token_type: string
  access_token: string
  expires_in: number
  refresh_token: string
  x_refresh_token_expires_in: number
  id_token: string
  createdAt: number
}

declare module 'intuit-oauth' {
  // eslint-disable-next-line import/no-default-export
  export default class OAuthClient {
    static scopes: {
      Accounting: string
      Payment: string
      Payroll: string
      TimeTracking: string
      Benefits: string
      Profile: string
      Email: string
      Phone: string
      Address: string
      OpenId: string
      Intuit_name: string
    }
    constructor(args: {
      clientId: string
      clientSecret: string
      environment: 'sandbox' | 'production'
      redirectUri: string
      logging?: boolean
    })

    authorizeUri: (options: {
      scope: OAuthClient.scopes[]
      state: string
    }) => string
    createToken: (redirectUrl: string) => Promise<JsonResponse>
    isAccessTokenValid: () => boolean
    refresh: () => Promise<JsonResponse>
    refreshUsingToken: (token: string) => Promise<JsonResponse>
    revoke: () => Promise<JsonResponse>

    token: {
      getToken: () => Token
    }
    setToken: (Token) => void
  }
}
