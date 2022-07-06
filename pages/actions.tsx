import { Box, Container, Heading, Text } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'

interface Action {
  id: string
  category: string
  description: string
  priority: number
}

type Actions = Action[]

const Home: NextPage<{ actions: Actions }> = ({ actions }) => {
  return (
    <Container>
      <Heading>Actions</Heading>
      {actions.map(({ id, description, priority, category }) => {
        return (
          <Box
            key={id}
            borderRadius="4"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.200"
            mb={2}
            p={2}
            background={'quickbooksSecondary.50'}
          >
            <Text fontStyle={'italic'} fontWeight={'bold'} color={'gray.400'}>
              {category}
            </Text>
            <Heading>{description}</Heading>
            <Text>Priority: {priority}</Text>
          </Box>
        )
      })}
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
