import { get } from './base'

export const User = {
  getUsers: async () => {
    try {
      const response = await get('/users')
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
