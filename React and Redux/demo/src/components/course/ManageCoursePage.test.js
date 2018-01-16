import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';


describe('Manage Course Page', () => {
    it('sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => {return Promise.resolve();}},
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' }
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        // the save button is the last input
        // we could grab it by class or id as well if it have any
        const saveButton = wrapper.find('input').last();
        //confirmar que es el button
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
    });

    
});