/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppReveal from '../AppReveal'


// run simple test
describe('AppReveal', () => {
  it('renders out text on click', () => {
    // add to wrapper our component and we can pass data as second arg
    let text = 'Reveal'
    let wrapper = mount(AppReveal, {
      propsData: {
        text
      }
    })

    // method find finds dom element and make it as wrapper, then we can get values of the anchor wrapper
    console.log(wrapper.find('a').text())

    // triggers click on anchor wrapper
    wrapper.find('a').trigger('click')

    expect(wrapper.html()).toContain(text)
    expect(wrapper.html()).not.toContain('Click to reveal') // expect anchor to be hidden
  })

  it('hides anchor on click', () => {
    // add to wrapper our component and we can pass data as second arg
    let text = 'Reveal'
    let wrapper = mount(AppReveal, {
      propsData: {
        text
      }
    })

    // method find finds dom element and make it as wrapper, then we can get values of the anchor wrapper
    console.log(wrapper.find('a').text())

    // triggers click on anchor wrapper
    wrapper.find('a').trigger('click')

    expect(wrapper.find('a').exists()).toBe(false) // after clicking anchor should be destroyed from virtual DOM thus it shouldn't be exists
  })
})