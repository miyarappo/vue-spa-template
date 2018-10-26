import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: {
    users: [
      {
        id: 1,
        name: '福沢諭吉',
        age: 50
      },
      {
        id: 2,
        name: '野口英世',
        age: 30
      }
    ]
  },
  getters,
  mutations,
  actions
}