ASD=$(sudo lsof -i @localhost:9600)
echo $ASD
QWE=${ASD/root*}
ASD=${QWE/COMMAND/ }
QWE=${ASD/PID/ }
ASD=${QWE/USER/ }
QWE=${ASD/FD/ }
ASD=${QWE/TYPE/ }
QWE=${ASD/DEVICE/ }
ASD=${QWE/SIZEOFF/ }
QWE=${ASD/NODE/ }
ASD=${QWE/NAME/ }
echo "$ASD"