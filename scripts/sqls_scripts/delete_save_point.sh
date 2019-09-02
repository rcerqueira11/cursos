
SQLS_PATH="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"

PARAMETER=$1
NUMB=${PARAMETER:-1}
SQL_NAME=$(ls $SQLS_PATH -t | head -n$NUMB | tail -n 1)
SQL_PATH_NAME="$SQLS_PATH$SQL_NAME"

echo "Seguro que quieres eliminar -> $SQL_NAME ?"
read -r line || [[ -n "$line" ]]
rm $SQL_PATH_NAME && echo " Eliminado $SQL_NAME"









