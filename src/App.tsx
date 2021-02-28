import React, { useState, createContext } from 'react'
import {
  ChakraProvider,
  theme
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Home from './pages/Home'

const queryClient = new QueryClient()
export const UserContext = React.createContext({
  savedItems: [],
  saveItem: (id: string) => {},
  removeItem: (id: string) => {}
})

export const App = () => {
  const [items, setItems] = useState<[]>([])
  const saveItem = (id: string) => setItems((prevState: any) => prevState.concat([id]))
  const removeItem = (id: string) => setItems((prevState: any) => prevState.filter((itemId: string) => itemId !== id))

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
