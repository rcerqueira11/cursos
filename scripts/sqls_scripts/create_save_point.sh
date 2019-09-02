
SQLS_PATH="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"


#BD CREDENTIALS
echo "comunidadfeliz_development"
DB_NAME="comunidadfeliz_development"
DB_PASSWORD='comunidad-feliz'
DB_USER='comunidadfeliz'
DB_HOST='localhost'
DB_PORT='5432'

#DUMP DIR AND NAME
FECHA=$(date +%Y%m%d_%H%M%S)
[ -d $SQLS_PATH ] || mkdir $SQLS_PATH
DUMP_NAME='dump_'$DB_NAME'_'$FECHA'.sql'
DUMP_NAME_DIR=$SQLS_PATH$DUMP_NAME

echo "Bajando dump de $DB_NAME"
PGPASSWORD=$DB_PASSWORD pg_dump -h $DB_HOST -p 5432 -U $DB_USER "$DB_NAME" > $DUMP_NAME_DIR && echo "Creado $DUMP_NAME"

