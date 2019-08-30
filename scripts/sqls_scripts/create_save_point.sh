
nombre_bd="comunidadfeliz_development"
fecha=$(date +%Y%m%d_%H%M%S)
sqls_path="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"
[ -d $sqls_path ] || mkdir $sqls_path

echo "Bajando dump de $nombre_bd"
PGPASSWORD='comunidad-feliz' pg_dump -h localhost -p 5432 -U comunidadfeliz "$nombre_bd" > $sqls_path"dump_"$nombre_bd"_"$fecha".sql

