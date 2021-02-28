import axios from 'axios'
import { useQuery } from 'react-query'
import api from '../utils/api'

interface Props {
  search: string
}

const useItems = ({ search }: Props) => {
  return useQuery('items', async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${api}&q=${search}&image_type=photo`,
    })
    return data
  })
}

export default useItems
