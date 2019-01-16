## kill 3000 port

```bash
alias kill3000="fuser -k -n tcp 3000"
```

## Get all extensions of files in a folder

```bash
find . -type f | perl -ne 'print $1 if m/\.([^.\/]+)$/' | sort -u
```

## Create folder with parents

```bash
mkdir -p /tmp/parent/bak
```

## Copiar que te diga cuando termina

```bash
cp -v /source1 /source2
```

## basename command

- Quita cualquier componente de directorio lider y devuelve solo el nombre del archivo

```bash
$(basename ${1})
```