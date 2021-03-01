import React from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react';

import useItem from '../hooks/useItem'
import ItemCard from '../components/ItemCard'

const Item = () => {
  const { id }: any = useParams()
  const { data: item } = useItem(id)

  return (
    item ? <ItemCard item={item.hits[0]} /> : <Spinner />
  )
}

export default Item
