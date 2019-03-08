import {clone} from 'lodash'

export default {
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
}