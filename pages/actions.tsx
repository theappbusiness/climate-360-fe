import { Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import ActionsList from '../shared/components/actions-list'
interface Action {
  id: string
  category: string
  description: string
  priority: number
}
type Actions = Action[]

const Home: NextPage = () => {
  return (
    <Container>
      <ActionsList />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<{
  actions: Actions
}> = async () => {
  const actions: Actions = await (
    await fetch('http://localhost:3001/actions')
  ).json()

  return { props: { actions } }
}

// eslint-disable-next-line import/no-default-export
export default Home
