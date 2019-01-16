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

```bash
#!/bin/bash

function hello() {
    for NAME un $@
    do
        echo "Hello $NAME"
    done
}

hello Jason Dan Ryan
# Output is
# Hello Jason
# Hello Dan
# Hello Ryan
```

## Variable Scope

- By default, variables are global
- Variables have to be defined before used
- if a global_var is defined in a function will be available when the functions run

## Local Variables

- Can only be accesse within the function
- Create using the `local` keyword
  - `local LOCAL_VAR=1`
- Only functions can have local variables
- Best practice to keep variables local in functions


## Exit Status(Return Codes)

- Functions have exit status
- Explicitly
  - return <RETURN_CODE>
- Implicity
  - the exit status of the las command executed in the function
- Valid code ranges from `0` to `255`
- `0` = success
- `$?` = the exit status

## Summary

- DRY
- Global and local variables
- Parameters
- Exit statuses