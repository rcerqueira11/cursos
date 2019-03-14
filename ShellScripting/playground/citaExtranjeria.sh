INIT_DATE="2019-03-04"
END_DATE="2019-03-11"
AAAA="$(curl 'https://reservahora.extranjeria.gob.cl/reservarHora/cargaDatosReserva.action' -H 'Cookie: _ga=GA1.3.335223261.1546495169; BIGipServerJBoss6_FrontEnd=1641942282.20480.0000; _gid=GA1.3.840333823.1551060455; JSESSIONID=FAFl+5OnwvFkbxXbw4oJS667.jboss6-03-N2; TS01084325=0110551a83261d606c9ecfbe7b3a4a5c32b0f8118a38adbc82877e185b93330a6c9416c2cb9f1780f606b4aa7da342cb735685469c93ab8e8c8a7a215d00a2ee764841a5c6b06711531c85a059ba9a4ec98c4d88ad; _gat=1' -H 'Origin: https://reservahora.extranjeria.gob.cl' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,es-419;q=0.8,es;q=0.7' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: https://reservahora.extranjeria.gob.cl/paginaPrincipal' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --data 'fechaCalendario=2019-03-04' --compressed)"

JSOWANS=$(curl -s 'https://reservahora.extranjeria.gob.cl/reservarHora/cargaEventosDeReserva.action?start=2019-03-12&end=2019-03-19&_=1551071318878' -H 'Cookie: _ga=GA1.3.335223261.1546495169; BIGipServerJBoss6_FrontEnd=1641942282.20480.0000; _gid=GA1.3.840333823.1551060455; JSESSIONID=FAFl+5OnwvFkbxXbw4oJS667.jboss6-03-N2; TS01084325=0110551a83261d606c9ecfbe7b3a4a5c32b0f8118a38adbc82877e185b93330a6c9416c2cb9f1780f606b4aa7da342cb735685469c93ab8e8c8a7a215d00a2ee764841a5c6b06711531c85a059ba9a4ec98c4d88ad; _gat=1' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,es-419;q=0.8,es;q=0.7' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: https://reservahora.extranjeria.gob.cl/paginaPrincipal' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed)

# FIND_RESULT=$( $JSOWANS | grep "yellow" )

echo $JSOWANS
# if [ $JSOWANS | grep "yellow" ]
# then
# echo "there is!"
# fi


curl 'https://reservahora.extranjeria.gob.cl/reservarHora/cargaEventosDeReserva.action?start=2019-02-25&end=2019-03-04&_=1551075577877' -H 'Cookie: _ga=GA1.3.335223261.1546495169; BIGipServerJBoss6_FrontEnd=1641942282.20480.0000; _gid=GA1.3.840333823.1551060455; JSESSIONID=pIfSWU7vc+UxeKzCC71FTnWo.jboss6-03-N2; TS01084325=0110551a8325921345604e8b202ddc25317b965ea7e6dc0ad1a5b34d73cee322aced932b6eb9bb6805595b820e5978b110934dfaf957e07f4d8c899d401d843d2aaf1f9e28c619716417f44dcc2b57a2b31631d08f' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: en-US,en;q=0.9,es-419;q=0.8,es;q=0.7' -H 'User-Agent: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Mobile Safari/537.36' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Referer: https://reservahora.extranjeria.gob.cl/paginaPrincipal' -H 'X-Requested-With: XMLHttpRequest' -H 'Connection: keep-alive' --compressed
