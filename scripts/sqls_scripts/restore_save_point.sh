SQLS_PATH="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"

#BD CREDENTIALS
echo "comunidadfeliz_development"
DB_NAME="comunidadfeliz_development"
DB_PASSWORD='comunidad-feliz'
DB_USER='comunidadfeliz'
DB_HOST='localhost'
DB_PORT='5432'

#SQL FILE SEARCH
PARAMETER=$1
NUMB=${PARAMETER:-1}
SQL_NAME=$(ls $SQLS_PATH -t | head -n$NUMB | tail -n 1)
SQL_PATH_NAME="$SQLS_PATH$SQL_NAME"


echo "Restaurando -> $SQL_NAME"

if PGPASSWORD=$DB_PASSWORD psql -lqt -h $DB_HOST -p $DB_PORT -U $DB_USER | cut -d \| -f 1 | grep -qw "$DB_NAME"; then
	echo "Borrando bd $DB_NAME porque ya existe"
	PGPASSWORD=$DB_PASSWORD dropdb -h $DB_HOST -p $DB_PORT -U $DB_USER "$DB_NAME"
fi

echo "Creando bd"
PGPASSWORD=$DB_PASSWORD createdb -h $DB_HOST -p $DB_PORT -U $DB_USER "$DB_NAME"

echo "Restaurando dump.sql de la bd"
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -p $DB_PORT -U $DB_USER "$DB_NAME" < "$SQL_PATH_NAME"







