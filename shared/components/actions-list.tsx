import { Box, Heading, Text } from '@chakra-ui/react'
import { useActions } from '../contexts/actions_context'

const ActionsList: React.FC = () => {
  const { actions } = useActions()
  return (
    <>
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
    </>
  )
}

// eslint-disable-next-line import/no-default-export
export default ActionsList
