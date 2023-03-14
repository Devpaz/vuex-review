import { SET_USERS } from '@/store/mutationType'
import { User as UserApi } from '@/api/user'

const state = () => ({
  users: []
})
const actions = {
  async getUsers ({ commit }) {
    try {
      const users = await UserApi.getUsers()
      commit(SET_USERS, users)
    } catch (error) {
      throw new Error(error)
    }
  }
}

const mutations = {
  [SET_USERS] (state, users) {
    state.users = users
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
