/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppTag from '../AppTag'


// run simple test
describe('AppTag', () => {
  it('renders out tag text', () => {
    // add to wrapper our component
    let wrapper = mount(AppTag, {
      propsData: {
        text: 'Vue'
      }
    })

    // helper classes to show all classes
    // expect(wrapper.classes()).toContain('tag--dark') // here we want to test class tag and dark
    expect(wrapper.html()).toContain('Vue') //another method  
  })

  it('renders the plain theme by default', () => {
    // add to wrapper our component
    let wrapper = mount(AppTag, {
      propsData: {
        text: 'Vue'
      }
    })

    // helper classes to show all classes
    // expect(wrapper.classes()).toContain('tag--dark') // here we want to test class tag and dark
    expect(wrapper.classes()).toEqual(['tag']) //another method  
  })

  it('renders the plain theme by default', () => {
    // add to wrapper our component
    let wrapper = mount(AppTag, {
      propsData: {
        text: 'Vue',
        dark: true
      }
    })

    // helper classes to show all classes
    expect(wrapper.classes()).toContain('tag--dark') // here we want to test class tag and dark
  })
})