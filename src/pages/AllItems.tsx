import React, { useState } from 'react'
import {
  Box,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Link,
  Select,
  Button,
  HStack,
  Heading,
  Text,
  StackDivider
} from '@chakra-ui/react'
import { 
  AddIcon,
  CloseIcon,
  EmailIcon,
  SearchIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons'
import Item from '../components/Item.tsx';
import { Order, Item as ItemType } from '../types'
import useItems from '../hooks/useItems'
import useSave from '../hooks/useSave'

const mockOrders = [
  { number: 5345636 },
  { number: 4358795 },
  { number: 2345624 },
]

const AllItems = () => {
  const [search, setSearch] = useState<string>('')
  const items = useItems({ search: search })
  const { savedItems, removeItem, saveItem }: any = useSave()

  return (
    <Box>
      <HStack
        divider={<StackDivider borderColor="gray.200" />}
      >
        <Box
          mr='2rem'
          w='450px'
        >
          <>
            <InputGroup mb='1rem'>
              <Input
                name='title'
                placeholder='Keyword...'
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search &&
                <InputRightElement>
                  <IconButton
                    variant='ghost'
                    aria-label="Clear search"
                    icon={<CloseIcon />}
                    onClick={() => setSearch('')}
                  />
                </InputRightElement>
              }
            </InputGroup>
          </>
          <Select
            placeholder='Category...'
            mb='1rem'
          >
            <option value='test'>test</option>
          </Select>
          <Button
            w='100%'
            mb='2rem'
            colorScheme='teal'
          >
            Search
          </Button>
          {items.data && items.data.hits && items.data.hits.map((item: ItemType) => (
            <Item
              key={item.id}
              saved={savedItems.includes(item.id)}
              saveItem={saveItem}
              removeItem={removeItem}
              id={item.id}
              tags={item.tags}
              webformatURL={item.webformatURL}
            />
          ))}
        </Box>
        <Box mb='auto' ml='2rem'>
          <Heading mb='1.5rem' size='md'>Saved</Heading>
          {savedItems.map((itemId: string) => (
            <Link color='teal' mb='0.5rem' display='flex' >
              <Text>#{itemId}</Text>
              <ExternalLinkIcon m='auto 0.5rem' />
            </Link>
          ))}
        </Box>
      </HStack>
    </Box>
  )
}

export default AllItems
