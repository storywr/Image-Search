import React from 'react'
import useSave from '../hooks/useSave'
import { Box } from '@chakra-ui/react'

const UserItems = () => {
  const { savedItems, removeItem, saveItem }: any = useSave()

  return (
    <Box>
      {savedItems.map((item: any) => item)}
    </Box>
  )
}

export default UserItems
