/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// import vue component
import {mount} from '@vue/test-utils'
import AppList from '../AppList'
import AppHeader from '../../header/AppHeader'


// run simple test
describe('AppList', () => {
  it('renders default content slot', () => {
    // in case we want to pass component:
    let headerWrapper = {
      render(h) {
        return h(AppHeader, {
          props: {
            text: 'Home'
          }
        })
      }
    }


    // add to wrapper our component and we can pass data as second arg
    let wrapper = mount(AppList, {
      slots: {
        // we pass to  default slot without name
        default: headerWrapper,
        // named  slot
        items: '<li>Item one</li>'
      }
    })

    expect(wrapper.html()).toContain('Home')
  })
})