import React from 'react'
import {
  Badge,
  Box,
  IconButton,
  SimpleGrid,
  Text,
  Flex,
  Image
} from '@chakra-ui/react'
import {
  CheckIcon,
  StarIcon 
} from '@chakra-ui/icons'

const mockTags = [
  'kitten',
  'cat',
  'cute',
  'white'
]

const Item = () => {
  return (
    <Box display='flex'>
      <Box mr='1rem'>
        <Image src='https://media.istockphoto.com/photos/a-bored-french-bulldog-lying-down-and-resting-on-sofa-looking-outside-picture-id1249480163?b=1&k=6&m=1249480163&s=170667a&w=0&h=HamYm0gKRDwP_1p04f3GLwD4IMXOVSchxMmr92RFHzw=' alt='dog' />
      </Box>
      <Box ml='auto' h='800px' display='block'>
        <SimpleGrid mb='auto' columns={2} spacing={3}>
          {mockTags.map(tag => (
            <Badge align='center' colorScheme='teal'>{tag}</Badge>
          ))}
        </SimpleGrid>
        <Flex height='150px' mt='auto' display='flex'>
        </Flex>
      </Box>
    </Box>
  )
}

export default Item
