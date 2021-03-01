import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import AllItems from '../pages/AllItems'
import UserItems from '../pages/UserItems'
import Item from '../pages/Item'

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
