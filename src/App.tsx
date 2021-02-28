import React, { useState, createContext } from 'react'
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home'
import { Item } from './types'

const queryClient = new QueryClient()
const UserContext = React.createContext({})

export const App = () => {
  const [items, setItems] = useState<Item[]>([])

  const saveSearch = (targetItems: Item[]) => setItems(targetItems)

  return (
    <ChakraProvider theme={theme}>
      <UserContext.Provider value={{ currentSearch: items, saveSearch }}>
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
