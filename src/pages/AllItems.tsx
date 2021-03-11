import React, { useEffect, useState, ChangeEvent } from 'react'
import {
  Box,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Link,
  Select,
  HStack,
  Heading,
  Text,
  StackDivider,
  Flex,
  Tooltip
} from '@chakra-ui/react'
import { 
  CloseIcon,
  SearchIcon,
  ExternalLinkIcon,
  DeleteIcon,
} from '@chakra-ui/icons'
import { Link as ReactRouterLink } from 'react-router-dom'

import Item from '../components/Item';
import useDebouncedValue from '../hooks/useDebouncedValue'
import useItems from '../hooks/useItems'
import useSave from '../hooks/useSave'
import { Item as ItemType } from '../types'
import availableCategories from '../utils/categories'

const AllItems = () => {
  const [search, setSearch] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const debouncedCategory = useDebouncedValue(category, 250)
  const debouncedSearch = useDebouncedValue(search, 250)
  const items = useItems({ category, search: search.trim() })
  const { savedItems, removeItem, saveItem, clear }: any = useSave()

  useEffect(() => {
    items.refetch()
  }, [debouncedCategory, debouncedSearch])

  const capitalize = ([firstLetter, ...restOfWord]: any) =>
    firstLetter.toUpperCase() + restOfWord.join('')

  return (
    <Box>
      <HStack
        divider={<StackDivider borderColor="gray.400" />}
      >
        <Box mr='2rem'>
          <>
            <FormLabel><SearchIcon /> Keyword</FormLabel>
            <InputGroup mb='1rem'>
              <Input
                name='title'
                placeholder='Keyword...'
                value={search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
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
          <FormLabel>Category</FormLabel>
          <Select
            placeholder='All'
            mb='2rem'
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          >
            {availableCategories.map((option: string) => (
              <option key={option} value={option}>{capitalize(option)}</option>
            ))}
          </Select>
          {items.data && items.data.hits && items.data.hits.map((item: ItemType) => (
            <Item
              key={item.id}
              item={item}
              saved={savedItems.some((savedItem: ItemType) => savedItem.id === item.id)}
              saveItem={saveItem}
              removeItem={removeItem}
            />
          ))}
        </Box>
        <Box 
          mb='auto' 
          ml='2rem'
        >
          <Flex alignItems='baseline'>
            <Heading 
              mb='6'
              mr='2'
              size='md'
            >
              Saved
            </Heading>
            {savedItems.length > 0 && (
              <Tooltip
                label='clear'
                placement='right-start'
              >
                <IconButton
                  variant='ghost'
                  aria-label='clear'
                  size='md'
                  onClick={() => clear()}
                  icon={<DeleteIcon />}
                />
              </Tooltip>
            )}
          </Flex>
          {savedItems.map((item: ItemType) => (
            <Link
              as={ReactRouterLink}
              to={`/items/${item.id}`}
              color='teal'
              mb='0.5rem'
              display='flex'
            >
              <Text>#{item.id}</Text>
              <ExternalLinkIcon m='auto 0.5rem' />
            </Link>
          ))}
        </Box>
      </HStack>
    </Box>
  )
}

export default AllItems
