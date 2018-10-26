import * as types from '@/store/mutationType'
import router from '@/router'

export default {
  addUser: ({ state, commit }, user) => {
    user.id = state.users.length + 1
    commit(types.addUser, user)
    router.push('/')
  },
  deleteUser: ({ state, commit}, id) => {
    const users = state.users.filter(user => {
      return user.id !== id
    })
    commit(types.deleteUser, users)
  },
  updateUser: ({ commit}, user) => {
    commit(types.updateUser, user)
    router.push('/')
  }
}