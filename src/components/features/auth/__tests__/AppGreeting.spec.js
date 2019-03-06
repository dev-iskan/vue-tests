/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppGreeting from '../AppGreeting'

describe('AppGreeting', () => {
    it ('greets the user by their first name', () => {
        // mock mixin
        let auth = {
            computed: {
                $auth () {
                    return {
                        user: {
                            first_name: 'Alex'
                        }
                    }
                }
            }
        }

        // mount mixin in AppGreeting
        let wrapper = mount(AppGreeting, {
            mixins: [
                auth
            ]
        })

        expect(wrapper.html()).toContain('Hi, Alex')
    })
})
