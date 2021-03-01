import React from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Box, Image, Flex, Spinner } from '@chakra-ui/react';
import { StarIcon, CheckIcon } from '@chakra-ui/icons'

import useItem from '../hooks/useItem'

const Item = () => {
  const { id }: any = useParams()
  const { data: item } = useItem(id)

  return (
    item ? (
      <Box
        maxW='md'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      >
        <Image src={item.hits[0].webformatURL} alt='image' />
        <Flex align='center' p='6'>
          <Flex 
            fontWeight='semibold' 
            align='center'
          >
            <Avatar 
              mr='3' 
              name="user" 
              src={item.hits[0].userImageURL}
            />
            {item.hits[0].user}
          </Flex>
          <Flex ml='auto' align='center'>
            <Flex align='center'>
              {item.hits[0].likes}
              <CheckIcon ml='2' />
            </Flex>
            <Flex align='center' ml='4'>
              {item.hits[0].favorites}
              <StarIcon ml='2' />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    ) : <Spinner />
  )
}

export default Item
