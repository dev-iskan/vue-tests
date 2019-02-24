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