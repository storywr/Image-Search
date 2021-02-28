import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import Navbar from '../components/Navbar'
import AllItems from '../pages/AllItems'
import UserItems from '../pages/UserItems'

const Home = () => (
  <Flex minH='100vh' flexDirection='column'>
    <Navbar />
    <Flex ml='3rem'>
      <Switch>
        <Route exact path='/' component={AllItems} />
        <Route exact path='/my-items' component={UserItems} />
      </Switch>
    </Flex>
  </Flex>
)

export default Home
