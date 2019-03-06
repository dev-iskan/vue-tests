/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { mount } from '@vue/test-utils'
import AppCoursePlaylist from '../AppCoursePlaylist'
import AppCoursePart from '../AppCoursePart'

describe('AppCoursePlaylist', () => {
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
})
