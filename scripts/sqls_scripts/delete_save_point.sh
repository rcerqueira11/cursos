
SQLS_PATH="/home/rcerqueira/Proyectos/ComunidadFeliz/scripts/sqls/"

PARAMETER=$1
NUMB=${PARAMETER:-1}
SQL_NAME=$(ls $SQLS_PATH -t | head -n$NUMB | tail -n 1)
SQL_PATH_NAME="$SQLS_PATH$SQL_NAME"

read -r -p "Seguro que quieres eliminar -> $SQL_NAME ? [y/N] " response
case "$response" in
    [yY][eE][sS]|[yY])
        rm $SQL_PATH_NAME && echo "Eliminado $SQL_NAME"
        ;;
    *)
        echo "CANCELED"
        ;;
esac


