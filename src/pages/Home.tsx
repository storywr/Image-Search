import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import AllItems from '../pages/AllItems'
import Item from '../pages/Item'
import UserItems from '../pages/UserItems'

const Home = () => (
  <Flex minH='100vh' flexDirection='column'>
    <Navbar />
    <Flex ml='3rem'>
      <Switch>
        <Route exact path='/' component={AllItems} />
        <Route exact path='/my-items' component={UserItems} />
        <Route exact path='/items/:id' component={Item} />
      </Switch>
    </Flex>
  </Flex>
)

export default Home
