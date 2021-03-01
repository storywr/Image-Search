import React from 'react'
import { Box } from '@chakra-ui/react'

import useSave from '../hooks/useSave'

const UserItems = () => {
  const { savedItems, removeItem, saveItem }: any = useSave()

  return (
    <Box>
      {savedItems.map((item: any) => item)}
    </Box>
  )
}

export default UserItems
