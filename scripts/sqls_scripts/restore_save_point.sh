
echo "comunidadfeliz_development"
nombre_bd="comunidadfeliz_development"
sqls_path="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"
PARAMETER=$1
NUMB=${PARAMETER+1}
nombre_sql=$(ls $sqls_path -t | head -n$NUMB | tail -n 1)
sql_path_name="$sqls_path$nombre_sql"
echo $sql_path_name
local_pass='comunidad-feliz'

if PGPASSWORD='comunidad-feliz' psql -lqt -h localhost -p 5432 -U comunidadfeliz | cut -d \| -f 1 | grep -qw "$nombre_bd"; then
	echo "Borrando bd $nombre_bd porque ya existe"
	PGPASSWORD='comunidad-feliz' dropdb -h localhost -p 5432 -U comunidadfeliz "$nombre_bd"
fi

echo "Creando bd"
PGPASSWORD='comunidad-feliz' createdb -h localhost -p 5432 -U comunidadfeliz "$nombre_bd"

echo "Restaurando dump.sql de la bd"
PGPASSWORD='comunidad-feliz' psql -h localhost -p 5432 -U comunidadfeliz "$nombre_bd" < "$sql_path_name"




