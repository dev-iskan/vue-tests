import Axios from 'axios';

export default {
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