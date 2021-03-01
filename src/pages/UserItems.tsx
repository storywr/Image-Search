import React from 'react'
import { Box } from '@chakra-ui/react'

import useSave from '../hooks/useSave'
import ItemCard from '../components/ItemCard';

const UserItems = () => {
  const { savedItems }: any = useSave()

  return (
    <Box>
      {savedItems.map((item: any) => (
        <ItemCard item={item} />
      ))}
    </Box>
  )
}

export default UserItems
