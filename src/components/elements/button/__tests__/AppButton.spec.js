/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component


// long way to implement vue router
import {mount, createLocalVue} from '@vue/test-utils'
import AppButton from '../AppButton'
import VueRouter from 'vue-router'

let localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'dashboard',
      path: '/dashboard'
    }
  ]
})

// run simple test
describe('AppButton', () => {
  it('renders button text', () => {
    // add to wrapper our component
    let wrapper = mount(AppButton, {
      localVue,
      router,
      propsData: {
        text: 'Dashboard',
        to: {
          name: 'dashboard'
        }
      }
    })

    expect(wrapper.find('a').text()).toContain('Dashboard')
  })

  it('renders link correctly', () => {
    // add to wrapper our component
    let wrapper = mount(AppButton, {
      localVue,
      router,
      propsData: {
        text: 'Dashboard',
        to: {
          name: 'dashboard'
        }
      }
    })

    expect(wrapper.find('a').attributes().href).toContain('/dashboard')
  })
})