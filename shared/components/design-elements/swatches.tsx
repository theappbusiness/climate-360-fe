import { Box, Heading, Text } from '@chakra-ui/react'
import { theme } from '../../theme'

export interface SwatchProps {
  color: string
}

const tones = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
export const Swatch: React.FC<SwatchProps> = ({ color }) => {
  return (
    <>
      {tones.map((tone) => {
        const colorName = `${color}.${tone}`
        return (
          <Box key={colorName} display="flex" m="4">
            <Box
              h="24"
              w="24"
              borderRadius="4"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.50"
              background={colorName}
            />
            <Box m={2} margin="auto">
              <Text>{colorName}</Text>
              <Text>{theme.colors[color][tone]}</Text>
            </Box>
          </Box>
        )
      })}
    </>
  )
}

export interface SwatchesProps {
  backgroundColor: string
  textColor: string
}

const {
  transparent: _transparent,
  current: _current,
  black: _black,
  white: _white,
  ...swatchableColors
} = theme.colors
export const swatchableColorNames = Object.keys(swatchableColors)
export const Swatches: React.FC<SwatchesProps> = ({
  backgroundColor,
  textColor,
}) => {
  return (
    <Box
      backgroundColor={backgroundColor}
      color={textColor}
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
    >
      {swatchableColorNames.map((color) => {
        return (
          <Box key={color}>
            <Heading fontSize={'xl'} m={2}>
              {color}
            </Heading>
            <Swatch color={color} />
          </Box>
        )
      })}
    </Box>
  )
}
