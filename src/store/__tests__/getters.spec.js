/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import getters from '../getters'

describe('getters', () => {
  it('only returns unread notifications', () => {
    // mock vuex state
    let state = {
      notifications: [
        {
          "id": 1,
          "body": "First notification",
          "read": true
        },
        {
          "id": 2,
          "body": "Second notification",
          "read": false
        }
      ]
    }
    // expect unread notification to be equal 1
    expect(getters.notifications(state).length).toEqual(1)
  })
})