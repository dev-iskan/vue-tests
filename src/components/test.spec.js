/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import TestComponent from './TestComponent'


// run simple test
describe('test', () => {
  it('works', () => {
    // add to wrapper our component
    let wrapper = mount(TestComponent)

    // helper which render and return html
    expect(wrapper.html()).toContain('Hello vue')
  })
})