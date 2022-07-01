import OAuthClient from 'intuit-oauth'
import type { GetServerSideProps, NextPage } from 'next'
import { Button } from '../shared/components/button'
import { oauthClient } from '../shared/intuit-oauth'

const Home: NextPage = () => {
  return (
    <>
      <h1>Climate 360 🥳</h1>
      <form method="POST">
        <Button type="submit">Log in with Intuit</Button>
      </form>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<{
  token: Token
}> = async (context) => {
  if (context.req.method === 'POST') {
    if (!oauthClient.isAccessTokenValid()) {
      return {
        redirect: {
          permanent: false,
          destination: oauthClient.authorizeUri({
            scope: [OAuthClient.scopes.Email, OAuthClient.scopes.OpenId],
            state: 'test',
          }),
        },
      }
    }
    return {
      redirect: {
        permanent: false,
        destination: '/logged-in',
      },
    }
  }

  return {
    props: {
      token: oauthClient.token.getToken(),
    },
  }
}

// eslint-disable-next-line import/no-default-export
export default Home
