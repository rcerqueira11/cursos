## Functions

- cannot be executed with sh scriptname.sh
## Creating a function

There is two ways:

```bash
function functionName(){
    # Code goes here.
}
```

```bash
functionName(){
    # Code goes here.
}
```
## Calling a function

- does not work with parentesis
- a function can call another function
```bash
#!/bin/bash
function hello(){
    echo "Hello!"
}

hello
```

## Positional Parameters

- the first parameter is stored in $1
- the second parameter is stored in $2, etc.
- $@ contains all of the parameters
- Just lie shell scripts
    - $0 = the script itself, not a funciton name

#### Example
```bash
#!/bin/bash

function hello() {
    echo "Hello $1"
}

hello Jason
# Output is
# Hello Jason
```

