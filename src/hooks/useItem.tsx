import axios from 'axios'
import { useQuery } from 'react-query'

import api from '../utils/api'

const useItem = (id: string | number) => {
  return useQuery('item', async () => {
    const { data } = await axios({
      method: 'GET',
      url: `${api}&id=${id}&image_type=photo`
    })
    return data
  })
}

export default useItem
