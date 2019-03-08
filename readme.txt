1. create vue cli without testing utils

2. clear project

3. use Jest testing framework
    a. easy to set up
    b. fast
    c. has great documentation
    d. install it: yarn add --dev jest
    e. add to package.json new command to run test: "test": "jest --no-cache"
    f. create jest.config.js

4. install vue-test-utils:
    yarn add --dev @vue/test-utils

5. in order jest to work correctly with imports we need to install babel-preset-env:
    yarn add @babel/preset-env --dev

    create .babelrc:
    {
        //set env check
        "env": {
            "development": {
            "presets": [
                "@vue/app"
            ]
            },
            "production": {
            "presets": [
                "@vue/app"
            ]
            },
            // pull special presets for test
            "test" : {
            "presets":[
                "env", 
                {"targets" : {"node" : "current"}}
            ]
            }
        }
    }

6. install vue-jest
7. set settings when installed in packge.json:
    "jest": {
        "moduleFileExtensions": [
            "js",
            "vue"
        ],
        "transform": {
            ".*\\.(vue)$": "vue-jest"
        }
    }

8. install babel-jest: yarn add --dev babel-jest
add to package.json jest config to: 
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"

9. add spread rest operator:
    yarn add --dev babel-plugin-transform-object-rest-spread

    add to .babelrc into test: 
    "plugins": [
        "transform-object-rest-spread"
    ]

Finally run test:
describe('test', () => {
  it('works', () => {
    // add to wrapper our component
    let wrapper = mount(TestComponent)

    // helper which render and return html
    expect(wrapper.html()).toContain('Hello vue')
  })
})

here we create test called 'test' 
which should do works assertion which should test whether component contain in html 'Hello vue' or not




In order to run single test we just need to specify name:
npm run test App.. where actually name is regexp which finds all matching tests

structure:
    structure of tests should be like, if you want to test component in base folder of component
    we create __tests__ folder where we create special files with same name as component for example AppHello
    in the file we describe again test with same name as component and test file itself, where inside each
    function we assign test with only one assertion and name it with its responsibillity, it('renders Hello text')



when we mount component to be tested we can pass as secong arg object with some data which should be passed to component:

let text = 'Home'
let wrapper = mount(AppHeader, {
    propsData: {
    text
    }
})


test whether component contains class we use:
    expect(wrapper.classes()).toContain('tag--dark') or
    expect(wrapper.classes()).toEqual(['tag'])


test clicking:
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


we can also test if passed through slot is exists:
    // add to wrapper our component and we can pass data as second arg
    let wrapper = mount(AppList, {
      slots: {
        // we pass to  default slot without name
        default: headerWrapper,
        // named  slot
        items: '<li>Item one</li>'
      }
    })

also we can pass component to it as above headerWrapper, here we render real vue component, not test component:
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


asserting event triggered correctly:
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


in order to test vue router we can use several methods:

  1. Simulate local Vue in test file with several attributes such as router:
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

    and then test something with above code insertion:
        it('renders button text', () => {
          // add to wrapper our component
          let wrapper = mount(AppButton, {
            localVue, // add local vue 
            router, // add local router
            propsData: {
              text: 'Dashboard',
              to: {
                name: 'dashboard'
              }
            }
          })

          expect(wrapper.find('a').text()).toContain('Dashboard')
        })

  
  2. Simulate vue router as routerlinkstub:
    import {mount, RouterLinkStub} from '@vue/test-utils'
    import AppSignIn from '../AppSignIn'

    const $route = {
      fullPath: '/dashboard'
    }


    and insert mock in test:
    
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


in order to test async things we use jest.mock() method, it should be identical as axios method in component:
jest.mock('axios', () => {
    return {
        get: () => Promise.resolve({
            data: {
                data: [
                    {
                        id: 1,
                        body: 'First notification'
                    },
                    {
                        id: 2,
                        body: 'Second notification'
                    }
                ]
            }
        })
    }
})


then we test but in order to process async method we wait next Dom update:
it ('renders a list of notifications', () => {
    let wrapper = mount(AppNotifications)

    wrapper.vm.$nextTick(() => {
        let items = wrapper.findAll('li')

        expect(items.at(0).text()).toContain('First notification')
        expect(items.at(1).text()).toContain('Second notification')
    })
})



In order to test value on each stage of life cycle of vue we can use wrapper's property vm:
it ('clears up when destroyed', () => {
    let wrapper = mount(AppPlayer)

    wrapper.destroy()
    expect(wrapper.vm.player).toBe(null)
})

it tests whether player is destroyed after component to be destroyed




In order to test if redirect page is correct we can use same logic as in AppButton but test final $route in SignIn:
  it ('redirects to dashboard after signin', () => {
      let wrapper = mount(SignIn, {
        localVue,
        router
      })

      wrapper.find('button').trigger('submit')

      expect(wrapper.vm.$route.path).toEqual('/dashboard')
  })


or we can test if page is reditected to redirect query param:
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



we can test if component contains child components: 
  it ('renders a list of parts', () => {
      let wrapper = mount(AppCoursePlaylist, {
          propsData: {
              course: {
                  parts: [
                      { id: 1, title: 'One' },
                      { id: 2, title: 'Two' },
                  ]
              }
          }
      })

      // expect that components in AppCoursePlaylist are exists
      expect(wrapper.findAll(AppCoursePart).length).toEqual(2)
  })



and also we can test if ceratain method is called:
  it ('plays a part when clicked', () => {
      let wrapper = mount(AppCoursePart, {
          propsData: {
              part: {
                  id: 1,
                  title: 'One'
              }
          }
      })

      //create jest function which we can mock
      let play = jest.fn()

      //add mock function as mock
      wrapper.setMethods({
          play
      })

      wrapper.find('a').trigger('click')

      // expect method played is called
      expect(play).toBeCalled()
  })




in order to use timers we use these methods: 
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppCountdown from '../AppCountdown'


// mock all timers
jest.useFakeTimers()

describe('AppCountdown', () => {
    it('renders the initial start value', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        expect(wrapper.html()).toContain('5')
    })

    it('sets an interval for the countdown', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })
        
        // expect our timer finished on some time
        expect(setInterval).toHaveBeenCalledWith(expect.any(Function), 1000)

        // clear all timers
        jest.clearAllTimers()
    })

    it('decrements the number', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        // we increment timer by 1 second
        jest.advanceTimersByTime(1000)

        expect(wrapper.html()).toContain('4')

        jest.clearAllTimers()
    })

    it('clears the interval when the timer is finished', () => {
        let wrapper = mount(AppCountdown, {
            propsData: {
                start: 5
            }
        })

        jest.advanceTimersByTime(5000)

        expect(clearInterval).toHaveBeenCalled()
        expect(wrapper.html()).toContain('0')

        jest.clearAllTimers()
    })
})



simulated using mixins:
it ('greets the user by their first name', () => {
        // mock mixin
        let auth = {
            computed: {
                $auth () {
                    return {
                        user: {
                            first_name: 'Alex'
                        }
                    }
                }
            }
        }

        // mount mixin in AppGreeting
        let wrapper = mount(AppGreeting, {
            mixins: [
                auth
            ]
        })

        expect(wrapper.html()).toContain('Hi, Alex')
    })




In order to use Vuex we need such steps:
  /* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount, createLocalVue } from '@vue/test-utils'
import Notifications from '../Notifications'
import Vuex from 'vuex'

//create mock vue instance
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Notifications', () => {
  it ('renders notifications', () => {
    // create mock vuex store, we don't care about real state, 
    // mutation, actions but we care about rendering notifications in component
    const store = new Vuex.Store({
      getters: {
        notifications: () => [
          {
            id: 1,
            body: 'First notification'
          },
          {
            id: 2,
            body: 'Second notification'
          }
        ]
      },
      // mock action, but it is important as we use actions in component
      actions: {
        getNotifications: () => []
      }
    })

    // wrap local vue and store
    let wrapper = mount(Notifications, {
      localVue,
      store
    })
    const items = wrapper.findAll('li')
    expect(items.at(0).text()).toContain('First notification')
    expect(items.at(1).text()).toContain('Second notification')
  })
})



