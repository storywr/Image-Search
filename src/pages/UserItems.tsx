import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

import useSave from '../hooks/useSave'
import ItemCard from '../components/ItemCard'
import { Item } from '../types'

const UserItems = () => {
  const { savedItems }: any = useSave()

  return (
    savedItems.length > 0 ?
      <Box>
        {savedItems.map((item: Item) => (
          <ItemCard item={item} />
        ))}
      </Box>
    : <Heading size='md'>No images saved</Heading>
  )
}

export default UserItems
