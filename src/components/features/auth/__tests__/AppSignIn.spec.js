/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {mount, RouterLinkStub} from '@vue/test-utils'
import AppSignIn from '../AppSignIn'

const $route = {
  fullPath: '/dashboard'
}
// run simple test
describe('AppSignIn', () => {
  it('renders link correctly', () => {
    // add to wrapper our component
    let wrapper = mount(AppSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      mocks: {
        $route: $route
      }
    })

    expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
  })


  it('has redirect path', () => {
    // add to wrapper our component
    let wrapper = mount(AppSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      },

      mocks: {
        $route: $route
      }
    })

    expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
  })

  it('redirect to path', () => {
    // add to wrapper our component
    let wrapper = mount(AppSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      },

      mocks: {
        $route
      }
    })
    expect(wrapper.find('a').props().to.query.redirect).toEqual('/dashboard')
  })
})