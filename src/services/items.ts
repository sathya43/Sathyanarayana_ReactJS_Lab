import axios from 'axios'
import { IProduct } from '../models/IProduct'

export const getItems = async () => {
  const response = await axios.get(`http://localhost:3001/items`)
  return response.data
}

export const postItem = async (newItem: Omit<IProduct, 'id'>) => {
  const response = await axios
    .post<IProduct>(`http://localhost:3001/items`, newItem, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.data)
  return response
}
