import React, { useContext } from 'react'
import {
  Badge,
  Box,
  IconButton,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Tooltip
} from '@chakra-ui/react'
import {
  CheckIcon,
  StarIcon 
} from '@chakra-ui/icons'
import useSave from '../../hooks/useSave'

const mockTags = [
  'kitten',
  'cat',
  'cute',
  'white'
]

interface Props {
  id: string
  likes: number
  favorites: number
  tags: string
  webformatURL: string
  saved: any
  saveItem: any
  removeItem: any
}

const Item = ({ id, tags, webformatURL, saved, saveItem, removeItem, likes, favorites }: Props) => {
  return (
    <Box
      mb='2rem'
      display='flex'
    >
      <Box
        cursor='pointer'
        _hover={{
          boxShadow: '0 12px 18px -1px rgba(0, 0, 0, 0.2), 0 6px 12px -1px rgba(0, 0, 0, 0.12)'
        }}
        onClick={() => saved ? removeItem(id) : saveItem(id)}
      >
        <Tooltip label={saved ? 'Remove from Saved' : 'Save Image'} placement='right'>
          <Image maxWidth={250} src={webformatURL} alt='dog' />
        </Tooltip>
        {saved && <Box align='center' bg='teal'>Saved</Box>}
      </Box>
      <Flex flexDirection='column' justifyContent='space-between' ml='2rem'>
        <SimpleGrid columns={2} spacing={3}>
          {tags.split(',').map(tag => (
            <Badge align='center' colorScheme='teal'>{tag}</Badge>
          ))}
        </SimpleGrid>
        <Flex align='center'>
          <Flex align='center'>
            {likes}
            <CheckIcon ml='2' />
          </Flex>
          <Flex align='center' ml='4'>
            {favorites}
            <StarIcon ml='2' />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Item
