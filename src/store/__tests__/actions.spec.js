/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import actions from '../actions'
import flushPromises from 'flush-promises'

let mock_get_payload = [
  {
    id: 1,
    body: 'one'
  }
]

jest.mock('axios', () => {
  return {
    get () {
      return Promise.resolve({
        data: {
          data: mock_get_payload
        }
      })
    }
  }
})

describe('actions', () => {
  it('can get notifications', async () => {
    // when testing actions we can test if it calls correct mutation

    // we mock commit and pass to actions.method
    let commit = jest.fn()

    // we need to install flush promises to flush some actions
    actions.getNotifications({commit})
    await flushPromises()

    // we expect commit to be called exact name and mock payload
    expect(commit).toBeCalledWith('SET_NOTIFICATIONS', mock_get_payload)
  })

  it('can mark notification as read', async () => {
    // when testing actions we can test if it calls correct mutation

    // we mock commit and pass to actions.method
    let commit = jest.fn()

    let notification = {
      id: 1,
      body: 'one',
      read: 'false'
    }

    // we need to install flush promises
    actions.markNotificationRead({commit}, notification)
    await flushPromises()

    expect(commit).toBeCalledWith('SET_NOTIFICATION_READ', notification)
  })
})