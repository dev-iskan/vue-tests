/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppHello from '../AppHello'


// run simple test
describe('AppHello', () => {
  it('renders out hello text', () => {
    // add to wrapper our component
    let wrapper = mount(AppHello)

    // helper which render and return html
    expect(wrapper.html()).toContain('Hello')
  })
})