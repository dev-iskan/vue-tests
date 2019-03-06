/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppCoursePart from '../AppCoursePart'

describe('AppCoursePart', () => {
    it ('plays a part when clicked', () => {
        let wrapper = mount(AppCoursePart, {
            propsData: {
                part: {
                    id: 1,
                    title: 'One'
                }
            }
        })

        //create jest function which we can mock
        let play = jest.fn()

        //add mock function as mock
        wrapper.setMethods({
            play
        })

        wrapper.find('a').trigger('click')

        // expect method played is called
        expect(play).toBeCalled()
    })
})
