import React, { useState } from 'react'
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Home from './pages/Home'
import { Item } from './types';

const queryClient = new QueryClient()
export const UserContext = React.createContext({
  savedItems: [],
  saveItem: (item: Item) => {},
  removeItem: (item: Item) => {}
})

export const App = () => {
  const [items, setItems] = useState<[]>([])
  const saveItem = (item: Item) => setItems((prevState: any) => prevState.concat([item]))
  const removeItem = (item: Item) => setItems((prevState: any) => prevState.filter((savedItem: Item) => savedItem.id !== item.id))

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{ savedItems: items, saveItem, removeItem }}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen />
          <Router>
            <Switch>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </QueryClientProvider>
      </UserContext.Provider>
    </ChakraProvider>
  )
}
