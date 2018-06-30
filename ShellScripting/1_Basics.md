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
|arg1 -ge arg2| True if arg1 is greater than or equal to  arg2 |

## If Statemets

### if
```bash
if [ condition-is-true ]
then
    command 1
    command 2
    command 3
fi
```

### else
```bash
if [ condition-is-true ]
then
    command n
else
    command n
fi
```

### elif
```bash
if [ condition-is-true ]
then
    command n
elif [ condition-is-true ]
then
    command n
else
    command n
fi
```

### Example

```bash
MY_SHELL="csh"

if [ "$MYSHEL" = "bash" ]
then
    echo "You seem to like the bash shell."
elif [ "$MYSHEL" = "csh" ]
then
    echo "You seem to like the csh shell."
else
    echo "You dont seem to like the bash shell."
fi
```

## For Loop

```bash

for VARIABLE_NAME in ITEM_1 ITEM_N
do
    command 1
    command 2
    command 3
done

```

### Example

```bash
#!/bin/bash

for COLOR in red green blue
do
    echo "Color: $COLOR"
done

## Best Practice

COLOR="red freen blue"

for COLOR in $COLORS
do
    echo "COLOR: $COLOR"
done
```

Rename All pictures with the date in front

```bash
#!/bin/bash
PICTURES=$(ls *.jpg)
DATE=$(date +%F)

for PICTURE in $PICTURES
do
    echo "Renaming ${PICTURE} to ${DATE}-${PICTURE}"
    mv ${PICTURE} ${DATE}-${PICTURE}
done
```

## Positional Paramethers

```bash
$ script.sh parameter1 parameter2 parameter3
```

- $0: "script.sh"
- $1: "parameter1"
- $2: "parameter2"
- $3: "parameter3"


Example

```bash
#!/bin/bash

USER=$1

echo "Executin script: $0"
echo "Archiving user: $USER"

# Lock the account
passwd -l $USER

# Create an archive of the home directory.
tar cf /archives/${USER}.tar.gz home/${USER}

```

- Access all the comands `$@`

```bash
#!/bin/bash

echo "Executin script: $0"
for USER in $@
do
    echo "Archivin user: $USER"

    # Lock the account
    passwd -l $USER

    # Create an archive of the home directory.
    tar cf /archives/${USER}.tar.gz home/${USER}
done
```

### Accepting User Input (STDIN)

- The read command accepts STDIN

Syntax:
```bash
    read -p "PROMPT" VARIABLE
```


Example askin for user input

```bash
#!/bin/bash

read -p "Enter a user name: " USER

echo "Archiving user: $USER"

# Lock the account
passwd -l $USER

# Create an archive of the home directory.
tar cf /archives/${USER}.tar.gz home/${USER}

```

## Summary


### Variable
- start with `#!/path/to/interpreter`
- declaration `VARIABLE_NAME="Value"`
- Access to value
    - `$VARIABLE_NAME`
    - `${VARIABLE_NAME}` to appeed info data
- Asing output `VARIABLE_NAME=$(command)`


### If statements
```bash
if [ condition-is-true ]
then
    command n
elif [ condition-is-true ]
then
    command n
else
    command n
fi
```


### For Loops

```bash
for VARIABLE_NAME in ITEM_1 ITEM_N
do
    command 1
    command 2
    command 3
done
```

### Access data in the command line

- $0, $1, $2 .. $9
- Para acceder a todos los parametros comenzando desde $1 usar `$@`

### Comments

- with #

### Read to accept input

`read -p "Some text: " VARIABLE_NAME`