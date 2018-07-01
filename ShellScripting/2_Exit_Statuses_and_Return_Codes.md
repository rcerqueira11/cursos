## Exits status/ Return code

- Every command returns an exit status
- Range from 0 to 255
- 0 = success
- Other than 0 = error condition
- Use for error chechking
- Use man or info to find meaning of exit status

### Checking the exit status

- `$?` contains the return code of the previously executed command

####example

```bash
ls /not/here
echo "$?"
```

```bash
HOST="google.com"
# we tell to the ping command to send just one package
ping -c 1 $HOST
if [ "$?" -eq "0" ]
then
    echo "$HOST reachable."
else
    echo "$HOST unreachable."
fi
```

We can add the retur code to a variable
```bash
## Otro ejemplo de solo decir cuando no se encuentra
HOST="google.com"

ping -c 1 $HOST

RETURN_CODE=$?

if [ "$RETURN_CODE" -ne "0" ]
then
    echo "$HOST unreachable."
fi
```


## && and ||

- && = AND
    - solo se ejecutara si el comando anterior su exit status fue 0, es decir, que funciono
```bash
mkdir /tmp/bak && cp test.txt /tmp/bak
```


- || = OR
    - one of the two commands will be successfully executed
    - el segundo comando se ejecutara solo si el primer comando su exit status fue diferente de 0
```bash
cp test.txt /tmp/bak || cp test.txt /tmp
```


#### example

```bash
#!/bin/bash

HOST="google.com"
#&&
ping -c 1 $HOST && echo "$HOST reachable."
#||
ping -c 1 $HOST || echo "$HOST unreachable."

```

## The Semicolon

- separate command with a semicolon to ensure they all get executed

```bash
cp text.txt /temp/back/ ; cp test.txt /temp
#Same as
cp text.txt /temp/back/
cp test.txt /temp
```

## Exit Command
- Explicitly define the return code
    - exit 0
    - exit 1
    - exit 2
    - exit 255
    - etc

- The default value is the exit status of the previously command executed
    - exit

- When the exit command is reach the shell script will stop running

#### Example
```bash
#!/bin/bash
HOST="google.com"
ping -c 1 $HOST
if [ "$?" -ne "0" ]
then
    echo "$HOST unreachable."
    exit 1
fi
exit 0

```

- with this a shell script can verify the output of another shell script and work according to this exit

## Summary

- All comand return an exit status
- 0 - 255
- 0 = success
- Other than 0 = error condition
- `$?` contains the exit status
- Desision makin -if, &&, ||
- exit