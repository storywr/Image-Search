import React from 'react'
import {
  Button,
  Flex,
  Heading
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import ThemeSelector from '../../components/ThemeSelector'

const Navbar = () => {
  const history = useHistory()

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      px='2rem'
      py='1rem'
    >
      <Flex
        align='center'
        mr={5}
        ml={2}
        onClick={() => history.replace('/')}
        cursor='pointer'
      >
        <Heading as='h1' size='lg'>
          Image Search
        </Heading>
      </Flex>

      <Flex mr='1rem' alignItems='center'>
        <ThemeSelector />
        <Button
          ml='1rem'
          variant='ghost'
          onClick={() => history.replace(`/my-items`)}
        >
          My Items
        </Button> 
      </Flex>
    </Flex>
  )
}

export default Navbar
