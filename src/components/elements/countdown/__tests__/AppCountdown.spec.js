/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppCountdown from '../AppCountdown'


// mock all timers
jest.useFakeTimers()

describe('AppCountdown', () => {
    it('renders the initial start value', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        expect(wrapper.html()).toContain('5')
    })

    it('sets an interval for the countdown', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })
        
        // expect our timer finished on some time
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000)

        // clear all timers
        jest.clearAllTimers()
    })

    it('decrements the number', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        // we increment timer by 1 second
        jest.advanceTimersByTime(1000)

        expect(wrapper.html()).toContain('4')

        jest.clearAllTimers()
    })

    it('clears the interval when the timer is finished', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        jest.advanceTimersByTime(5000)

        expect(clearInterval).toHaveBeenCalled()
        expect(wrapper.html()).toContain('0')

        jest.clearAllTimers()
    })
})
