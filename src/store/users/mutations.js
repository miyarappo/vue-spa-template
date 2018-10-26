import * as types from '@/store/mutationType'

export default {
  [types.addUser](state, payload) {
    state.users.push(payload)
  },
  [types.deleteUser](state, payload) {
    state.users = payload
  },
  [types.updateUser](state, payload) {
    state.users[payload.id] = payload
  }
}