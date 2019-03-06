/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount, createLocalVue } from '@vue/test-utils'
import SignIn from '../SignIn'
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

describe('SignIn', () => {
  it ('redirects to dashboard after signin', () => {
      let wrapper = mount(SignIn, {
        localVue,
        router
      })

      wrapper.find('button').trigger('submit')

      expect(wrapper.vm.$route.path).toEqual('/dashboard')
  })

  it ('redirects to redirect query', () => {
    router.push({
      query: {
        redirect: '/'
      }
    })
    let wrapper = mount(SignIn, {
      localVue,
      router
    })

    wrapper.find('button').trigger('submit')

    expect(wrapper.vm.$route.path).toEqual('/')
  })
})