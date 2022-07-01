import type { GetServerSideProps, NextPage } from 'next'
import { oauthClient } from '../shared/intuit-oauth'

interface Props {
  token: Token
}

const LoggedIn: NextPage<Props> = ({ token }) => {
  return (
    <>
      <h1>You&apos;re logged in with Intuit!</h1>
      <div>
        <h2>Your Token:</h2>
        <code>{JSON.stringify(token)}</code>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  try {
    await oauthClient.createToken(context.req.url || '')
  } catch (e) {
    console.log(e)
  }
  return {
    props: {
      token: oauthClient.token.getToken(),
    },
  }
}

// eslint-disable-next-line import/no-default-export
export default LoggedIn
