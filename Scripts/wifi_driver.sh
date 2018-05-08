#!/usr/bin/env bash

echo "####################################"
echo "#"
echo "#		Instalando Drivers Wifi"
echo "#"
echo "####################################"

echo "deb http://httpredir.debian.org/debian/ stretch main contrib non-free" | tee -a /etc/apt/sources.list
apt-get update && apt-get install firmware-iwlwifi
modprobe -r iwlwifi ; modprobe iwlwifi
