## Intro 

- ModuleLoader/es6-module-loader    

## Module Basics

### import, export

```js
//File base.js
import { projectId } from 'module1.js'
console.log(projectId);

//File module1.js
export let projectId = 99;

//return
99
```

- we can import with an alias
```js 
import { projectId as id }
import { default as id }
```
- once we set an alias we need to use that alias
- import statements run firts

- without curly braces
        
    ```js
    //File base.js
    import someValue from 'module1.js'
    console.log(projectId);

    //File module1.js
    export let projectId = 99;
    let projectName = 'BuildIt'
    export default projectName
    //return
    99
    ```
- if not default defined it will return undefine
    - we can do something like 
    ```js
    //File Base
    import somevalue from module1
    //File Module1
    ...
    let projectId = 99
    export { projectId as default, projectName };

    console.log(somevalue) => return 99
    ```
- import with *
    - `import * as values from module1`
    - returns an object


## Named Exports in Modules 

- imported name can only be readed not replace
- if it is an object its properties can be changed
- when we modify a value of an object, the value between the modules stay in sync 
- we export the name as a function but no the function 

## Class Fundamentals

- `class Task {};typeof(Task)` : function
- `class Task {};let task = new Task(); typeof(task) ` : object
- `task instanceof Task`: true

- add a method to the class is similar to add it to the prototype object
    ```js
    class Task {
        showId(){
            console.log('99');
        }
    }

    let task = Task()
    console.log(task.showId === Task.prototype.showId) : true
    ```

- classes are not huisted
- if we define a contructor function it will be called when instaciated
- we can asing clases to variables `let asd = class Task {}; new asd()`
- we cannot call the class function with an object in order to change the this function
- when working with classes it will not be set in the windows object