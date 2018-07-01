HOST="google.com"
# we tell to the ping command to send just one package
ping -c 1 $HOST
if [ "$?" -eq "0" ]
then
    echo "$HOST reachable."
else
    echo "$HOST unreachable."
fi


## Otro ejemplo de solo decir cuando no se encuentra

if [ "$?" -ne "0" ]
then
    echo "$HOST unreachable."
fi