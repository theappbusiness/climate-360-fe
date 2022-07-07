import { Container } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { withDefaultLayout } from '../shared/components/layouts/default'
import ActionsList from '../shared/components/actions-list'

const Actions: NextPage = () => {
  return (
    <Container>
      <ActionsList />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const actions = await (await fetch('http://localhost:3001/actions')).json()

  return { props: { actions } }
}

// eslint-disable-next-line import/no-default-export
export default withDefaultLayout(Actions)
