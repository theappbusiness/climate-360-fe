import OAuthClient from 'intuit-oauth'

export const oauthClient = new OAuthClient({
  clientId: 'ABsSlwsvmLagLjPLpONoPevXFEAcSGLjZdiirqSNS2cvNwIMoT',
  clientSecret: 'trcmjwTxoO8A8BxS1uwUzdlJoT29MBtS3JxBAVdw',
  environment: 'sandbox',
  redirectUri: 'http://localhost:3000/logged-in',
})
