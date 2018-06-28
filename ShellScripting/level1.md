## Intro

- shebang, sharpbang `#!`

## Running a shell script

- something need to change the persmion

```bash
$ chmod 755 script.sh

```

### Inicio del script
- after the `#!` what follows is the command interpreter
```bash
#!/bin/bash
#!/bin/csh
#!/bin/ksh
#!/bin/zsh
```

- with this `#!/bin/bash` the process running is `/bin/bash ./scriptname.sh`

#### Python script
```py
#!/usr/bin/python
print "This is a python script"
```

- chmod 755 hi.py
- ./hi.py

### Variables

#### Define
`VARIABLE_NAME="Value"`
- No usar espacios entre `=`

#### Use

```bash
echo "asd $VARIABLE_NAME asd"
echo "asd ${VARIABLE_NAME} asd"

```
- ${VARIABLE_NAME} works for adding something more to the data of the variable
```bash
VARIABLE_NAME="Bash"
echo "${VARIABLE_NAME}ing"

```

#### Output of a command

```bash
SERVER_NAME=$(hostname)
#En viejos scrips se utilizaba esta sintaxis
SERVER_NAME=`hostname`
```

#### Variable names

**Valid**
- FISRT3LETTERS
- FIRST_THREE_LETTER
- First_tree_letter

**Invalid**
- 3LETTERS
- first-tree-laters
- first@tree@letters

### Tests

#### Sintax

```bash
[ condition-to-test-for ]

#example

[ -e /etc/passwd ]
```
> See tests file with `man test`

#### File Operators Test
|Operator|Description|
|--|--|
|-d FILE| True is file is a directory|
|-e FILE|True if file exist|
|-f FILE|True if file exist and is a regular file|
|-r FILE| True if file is readeable by you|
|-s FILE| True if file exist and is not empty |
|-w FILE| True if the file is writable by you|
|-x FILE| True if file is executable by you |

#### String Operators Test
|Operator|Description|
|--|--|
|-z String| True if string is empty |
|-n String| True if string is NOT empty|
|STRING1 = STRING2| True if the strings are equal|
|STRING1 != STRING2| True if the strings are NOT equal|

#### Arithmetic Operators Test
|Operator|Description|
|--|--|
|arg1 -eq arg2| True if arg1 is equal to arg2 |
|arg1 -ne arg2| True if arg1 is  NOT equal to arg2 |
|arg1 -lt arg2| True if arg1 is less than arg2 |
|arg1 -le arg2| True if arg1 is less than or equal to arg2 |
|arg1 -gt arg2| True if arg1 is greater than arg2 |
|arg1 -ge arg2| True if arg1 is greater than or equal to arg2 |