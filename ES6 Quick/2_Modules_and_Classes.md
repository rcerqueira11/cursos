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