## Intro

- Testing Technologies
    - Testing frameworks
    - Assetion libraries
    - Helper libraries

- We'll test
    - React presentation components (react test util and enzyme)

## Testing Frameworks

- Mocha
    - highly configurable and has a large ecosystem of support
    - Mocha need an assetion libraries
        - Chai (uses chain base api)
        - expect (npm)
        -   |Chai|Expect|
            |--|--|
            |to.equal|toBe|
            |to.deep.equal|toEqual|
            |to.exist|toExist|
            |to.not.exist|toNotExist|
            |to.be.above|ToBeGreaterThan|
            |No spy|Spy buitl in|
- Jasmine
- Jest
- tape
    - simplest library of the bunch
- AVA
    - use babel

|Mocha|AVA|
|--|--|
|Serial|Concurrent|
|No assertions built in|Assertions built in|
|Use globals|No globals|
|No built-in ES6 support|Built-in ES6 support|
|Runs all test on save|Runs only impacted tests|
|Long stack trace upon error|Short specific error with marker|
|Proven, mature, with huge ecosystem|new|

## Helper Libraries

- Should we use a helper library?
- Which one?
    - React Test Utils
    - Enzyme

### React Test Utils

- React testing library
- Built by Facebook
- Verbose API

#### Two Rendering Options
|shallowRedner|renderIntoDocument|
|--|--|
|let us render just the component that we are testing withou rendein any of his children|when you need click and changes event|
|constrain yourself to testing a component as a unit|can use JSDOM|
|ensure that your test arent indirectly asserting on behavior of child components||
|Render single component|Render component and children|
|No DOM required|DOM Required|
|Fast and Simple |Supports simulating interactions|

#### DOM Interactions

- findRederedDOMComponentWithTag
    - useful for finding specific DOM elements by tag

- scryRenderedDomComponentsWithTag
    - funs components by tag name

- Simulate
    - once you have reference to a specific element, yu can simulate intreactions on the element using the Simulate funcion
    - Clicks
    - Keypresses
    - Etc.

### Enzyme

- [Github](https://github.com/airbnb/enzyme)

#### Ensyme is an Abstraction
- Behind the scenes
    - React Test Utils
    - JSDOM (In-memory DOM)
    - Cheerio (Fast jQuery style selectors)

- Put this tree tools working together
- We dont have to open our browser, our test just run in memory via Node.

### Comparasion

||React Test Utils|JSDOM|Cheerio|Enzyme|
|--|--|--|--|--|
|Run test in|Node|Node|Node|Node|
|Dependencies|None|None|None|JSDOM,Cheerios,React Test Utils|
|Selectors|Wordy|DOM|JQuery|Terse|
|Interactions|Yes|Yes|No|Yes|
|Ease|Clunky|Okay|Easy|Easy|
|Speed|Varies|Okay|Fast|Varies|

## Where to Test

- Browser
    - Karma (popular test runner for running tests in a real deal browser)
- Headless Browser
    - Phantom JS
- In-memory DOM
    - JSDOM simulates an actual browser by creating a DOM in memory that we can interact with
    - fast
    - quick to set up
    - allows us to just run our test via Node

### Naming Test Files
- fileName.spec.js
- fileName.test.js

### Where Do Test Files Belong?

- Mocha default: /test
- We'll place test alongside the file under test. Why?
    - Easy import. Always ./filenameUnderTests
    - Clear visibility
    - Convenient to open
    - Move files and testo together

### Our Plan

- **What**: React components and Redux
- **How**: Mocha with Expect
- **Where**: In-memory DOM via JSDOM
- **Helper**: Enzyme

## Testing React with React Test Utils

### Testng Presentation Components

 - Enzyme labels render into document as mount, but in the background calls react test utils

### Rendering Options
|Shallow Render|Render into Document|
|--|--|
|Fast|Slower|
|Test in isolation|Test set of components|
|No refs or interactions yet|Test refs and interactions|
|Recommended for the future||

### Test Component with Shallow Rendering
- First with React test Utils
- Later wuth Enzyme

> change mocha from progress to spec at the start of our test to see better the this, progress is more silently

#### Making the test

1. we create a file in the folder course to test course form `CourseForm.test.js`

2. we import what we need
    ```js
    import expect from 'expect';
    import React from 'react';
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';
    ```

3. add the describe block
    - use in mocha to gropu and label our test, so tou can nest multiple tests inside

    ```js
    describe('CourseForm via React Test Utils',() => {

    });
    ```

    - can use an arrow function or a anonymous function

4. helpful to create a setup function that will return us the output of rendering the component under test

    ```js
    function setup() {
    //declare our props outside the render to see them better
    let props = {
        course: {}, saving:false, errors:{},
        onSave: () => {},
        onChange:() => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    //to return the output of the render
    let output = renderer.getRenderOutput();

    // return an object with the props that we passed
    // the output
    // and the renderer in case we need it
    return {
        props,
        output,
        renderer
    };
    }
    ```

5. Create the test

    ```js
    describe('CourseForm via React Test Utils',() => {
        //it functios wich allows me to specify what im trying to test
        it('renders form and h1', () => {
            const { output } = setup();
            // see if the top level tag is form
            expect(output.type).toBe('form');
            let [ h1 ] = output.props.children;
            expect(h1.type).toBe('h1');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const {output} = setup(false);
            const submitButton = output.props.children[5];
            //value of the submit button
            expect(submitButton.props.value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const {output} = setup(true);
            const submitButton = output.props.children[5];
            //value of the submit button
            expect(submitButton.props.value).toBe('Saving...');
        });
    });
    ```


## Test React with Enzyme

1. import the necessary things
    ```js
    import expect from 'expect';
    import React from 'react';
    import {mount, shallow} from 'enzyme';
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';
    ```

    - `import TestUtils from 'react-addons-test-utils'` Test utils is used by enzyme but not necessary need to be explicitly imported


2. create the setup function
    ```js
    function setup(saving) {
        const props = {
            course: {}, saving: saving, errors: {},
            onSave: () => {},
            onChange: () => {}
        };

        return shallow(<CourseForm {...props} />);
    }
    ```

3. create the test
    ```js
    describe('CourseForm via Enzyme',() => {
        it('renders form and h1', ()=> {
            const wrapper = setup(false);
            //expect to find just on form
            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('h1').text()).toEqual('Manage Course');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const wrapper = setup(false);
            expect(wrapper.find('input').props().value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const wrapper = setup(true);
            expect(wrapper.find('input').props().value).toBe('Saving...');
        });
    });
    ```

4. the complete test file `CourseForm.Enzyme.test.js
    - test:watch dont see new files

    ```js
    import expect from 'expect';
    import React from 'react';
    import {mount, shallow} from 'enzyme';
    // Test utils is used by enzyme but not necessary explicitly imported
    import TestUtils from 'react-addons-test-utils';
    import CourseForm from './CourseForm';

    function setup(saving) {
        const props = {
            course: {}, saving: saving, errors: {},
            onSave: () => {},
            onChange: () => {}
        };

        return shallow(<CourseForm {...props} />);
    }

    describe('CourseForm via Enzyme',() => {
        it('renders form and h1', ()=> {
            const wrapper = setup(false);
            //expect to find just on form
            expect(wrapper.find('form').length).toBe(1);
            expect(wrapper.find('h1').text()).toEqual('Manage Course');
        });

        it('Save button is labeled "Save" when not saving', () => {
            const wrapper = setup(false);
            expect(wrapper.find('input').props().value).toBe('Save');
        });

        it('Save button is labeled "Saving..." when saving', () => {
            const wrapper = setup(true);
            expect(wrapper.find('input').props().value).toBe('Saving...');
        });
    });
    ```


## Summary

### **Testing Approach**
    - Mocha, Expect, React Test Utils, and Enzyme
    - In-memory DOM via Node

### **Tested**
    - React presentation components