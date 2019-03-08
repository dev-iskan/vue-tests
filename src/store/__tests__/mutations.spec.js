/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import mutations from '../mutations'

describe('mutations', () => {
  it('can set notifications', () => {
    let state = {
      notifications: []
    }

    mutations.SET_NOTIFICATIONS(state, [{id: 1}])

    expect(state.notifications.length).toEqual(1)
  })

  it('can set notifications read', () => {
    const notification = {
      id: 1,
      body: "First notification",
      read: false
    }

    const state = {
      notifications: [
        notification
      ]
    }

    mutations.SET_NOTIFICATION_READ(state, notification)

    expect(state.notifications[0].read).toBe(true)
  })
})