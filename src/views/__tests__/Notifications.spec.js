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
})
