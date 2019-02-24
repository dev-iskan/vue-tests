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