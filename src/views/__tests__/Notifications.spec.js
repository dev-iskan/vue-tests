/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount, createLocalVue } from '@vue/test-utils'
import Notifications from '../Notifications'
import Vuex from 'vuex'

//create mock vue instance
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Notifications', () => {
  it ('renders notifications', () => {
    // create mock vuex store, we don't care about real state, 
    // mutation, actions but we care about rendering notifications in component
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          {
            id: 1,
            body: 'First notification'
          },
          {
            id: 2,
            body: 'Second notification'
          }
        ]
      },
      // mock action, but it is important as we use actions in component
      actions: {
        getNotifications: () => []
      }
    })

    // wrap local vue and store
    let wrapper = mount(Notifications, {
      localVue,
      store
    })
    const items = wrapper.findAll('li')
    expect(items.at(0).text()).toContain('First notification')
    expect(items.at(1).text()).toContain('Second notification')
  })

  it ('triggers click to mark read', () => {
    let notification = {
      id: 1,
      body: 'First notification',
      read: false
    }
    // simulate function
    let markNotificationRead = jest.fn()
    // create mock vuex store, we don't care about real state, 
    // mutation, actions but we care about rendering notifications in component
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          notification
        ]
      },
      // mock action, but it is important as we use actions in component
      actions: {
        getNotifications: () => [],
        markNotificationRead
      }
    })

    // wrap local vue and store
    let wrapper = mount(Notifications, {
      localVue,
      store
    })

    wrapper.findAll('a').at(0).trigger('click')

    // expect(markNotificationRead).toBeCalled()


    // we take payload of method calls and expect it to be our mock notification
    expect(markNotificationRead.mock.calls[0][1]).toEqual(notification)


  })
})
