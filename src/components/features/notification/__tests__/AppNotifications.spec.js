/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppNotifications from '../AppNotifications'
import flushPromises from 'flush-promises'
jest.mock('axios', () => {
    return {
        get: () => Promise.resolve({
            data: {
                data: [
                    {
                        id: 1,
                        body: 'First notification'
                    },
                    {
                        id: 2,
                        body: 'Second notification'
                    }
                ]
            }
        })
    }
})

describe('AppNotifications', () => {
    it ('renders a list of notifications', async () => {
        let wrapper = mount(AppNotifications)
        // flush promises in order component has li attributes
        await flushPromises()
        let items = wrapper.findAll('li')

        expect(items.at(0).text()).toContain('First notification')
        expect(items.at(1).text()).toContain('Second notification')
    })
})
