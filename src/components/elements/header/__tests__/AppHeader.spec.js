/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppHeader from '../AppHeader'


// run simple test
describe('AppHeader', () => {
  it('renders out hello text', () => {
    // add to wrapper our component and we can pass data as second arg
    let text = 'Home'
    let wrapper = mount(AppHeader, {
      propsData: {
        text
      }
    })

    // expect text should be in html
    expect(wrapper.html()).toContain(text)

  })
})