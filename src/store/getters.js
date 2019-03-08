export default {
  notifications(state) {
    return state.notifications.filter(n => n.read === false)
  } 
}