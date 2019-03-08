import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notifications: []
  },
  getters: {
    notifications(state) {
      return state.notifications.filter(n => n.read === false)
    } 
  },
  mutations: {
    SET_NOTIFICATIONS (state, data) {
      state.notifications = data
    }
  },
  actions: {
    async getNotifications({commit}) {
      let response = await Axios.get('/notifications.json')
      // commit
      commit('SET_NOTIFICATIONS', response.data.data)
    }
  }
})
