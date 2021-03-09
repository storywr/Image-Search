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
import ls from './utils/localstorage'

const queryClient = new QueryClient()
export const UserContext = React.createContext({
  savedItems: [],
  saveItem: (item: Item) => {},
  removeItem: (item: Item) => {}
})

export const App = () => {
  const [items, setItems] = useState<[]>(JSON.parse(ls.get('items')) || [])
  const updateLocal = (newItems: Item[]) => ls.set('items', JSON.stringify(newItems))
  const saveItem = (item: Item) => setItems((prevState: any) => {
    const newState = prevState.concat([item])
    updateLocal(newState)
    return newState
  })
  const removeItem = (item: Item) => setItems((prevState: any) => {
    const newState = prevState.filter((savedItem: Item) => savedItem.id !== item.id)
    updateLocal(newState)
    return newState 
  })

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
