import React from 'react'
import { Avatar, Box, Image, Flex } from '@chakra-ui/react';
import { StarIcon, CheckIcon } from '@chakra-ui/icons'

const Item = ({ item }: any) => (
  <Box
    maxW='md'
    borderWidth='1px'
    borderRadius='lg'
    overflow='hidden'
    mb='8'
  >
    <Image src={item.webformatURL} alt='image' />
    <Flex align='center' p='6'>
      <Flex 
        fontWeight='semibold' 
        align='center'
      >
        <Avatar 
          mr='3' 
          name="user" 
          src={item.userImageURL}
        />
        {item.user}
      </Flex>
      <Flex ml='auto' align='center'>
        <Flex align='center'>
          {item.likes}
          <CheckIcon ml='2' />
        </Flex>
        <Flex align='center' ml='4'>
          {item.favorites}
          <StarIcon ml='2' />
        </Flex>
      </Flex>
    </Flex>
  </Box>
)

export default Item
