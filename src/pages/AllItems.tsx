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
import { Order } from '../types'
import useItems from '../hooks/useItems'

const mockOrders = [
  { number: 5345636 },
  { number: 4358795 },
  { number: 2345624 },
]

const AllItems = () => {
  const [search, setSearch] = useState<string>('')
  const items = useItems({ search: search })

  console.log(items)
  
  return (
    <Box height='400px'>
      <HStack
        divider={<StackDivider height='400px' borderColor="gray.200" />}
      >
        <Box
          mr='1rem'
          w='400px'
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
          <Item />
        </Box>
        <Box mb='auto' ml='1rem'>
          <Heading mb='1.5rem' size='md'>Saved</Heading>
          {mockOrders.map((order: Order) => (
            <Link color='teal' mb='0.5rem' display='flex' >
              <Text>#{order.number}</Text>
              <ExternalLinkIcon m='auto 0.5rem' />
            </Link>
          ))}
        </Box>
      </HStack>
    </Box>
  )
}

export default AllItems
