/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppPlayer from '../AppPlayer'

describe('AppPlayer', () => {
  it ('clears up when destroyed', () => {
      let wrapper = mount(AppPlayer)

      wrapper.destroy()
      expect(wrapper.vm.player).toBe(null)
  })
})