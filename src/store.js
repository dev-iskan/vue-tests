import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import {clone} from 'lodash'
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
    },

    SET_NOTIFICATION_READ (state, notification) {
      //override entire object rather than update!! Vuex best practice
      let notifications = clone(state.notifications)

      state.notifications = notifications.map(n => {
        if(n.id === notification.id) {
          n.read = true
          return n
        }

        return n
      })

    }
  },
  actions: {
    async getNotifications({commit}) {
      let response = await Axios.get('/notifications.json')
      // commit
      commit('SET_NOTIFICATIONS', response.data.data)
    },

    async markNotificationRead({commit}, notification) {
      await Axios.get('/notifications.json')

      commit('SET_NOTIFICATION_READ', notification)

    }
  }
})
