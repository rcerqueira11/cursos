nombre_bd="fintech_ecosystem" 

PGPASSWORD='123456' pg_dump -h localhost -p 5432 -U postgres "$nombre_bd" > dump_"$nombre_bd".sql