import axios from 'axios'
import { useQuery } from 'react-query'

import api from '../utils/api'

interface Props {
  category: string
  search: string
}

const useItems = ({ category, search }: Props) => {
  return useQuery('items', async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${api}&q=${search}&category=${category}&image_type=photo&per_page=10&min_width=250`
    })
    return data
  })
}

export default useItems
