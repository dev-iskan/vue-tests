/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppFormInput from '../AppFormInput'


// run simple test
describe('AppFormInput', () => {
  it('assert initial value', () => {
    // add to wrapper our component and we can pass data as second arg
    let wrapper = mount(AppFormInput, {
      propsData: {
        modelValue: 'cats'
      }
    })

    // expect wrapper to  find input tag get it element's value
    expect(wrapper.find('input').element.value).toEqual('cats')
  })

  it('emits input to be truthy', () => {
    // add to wrapper our component and we can pass data as second arg
    let wrapper = mount(AppFormInput)
    let input = wrapper.find('input')

    //trigger event
    input.trigger('input')

    // test if input event emitted
    expect(wrapper.emitted().input).toBeTruthy()
  }) 

  it('emits the current input value', () => {
    // add to wrapper our component and we can pass data as second arg
    let wrapper = mount(AppFormInput)
    let input = wrapper.find('input')
    input.element.value = 'cats'

    //trigger event
    input.trigger('input')
    console.log(wrapper.emitted().input)
    // test if input event emitted
    expect(wrapper.emitted().input[0][0]).toEqual('cats')
  }) 
})