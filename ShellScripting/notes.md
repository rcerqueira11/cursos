## kill 3000 port

```bash
alias kill3000="fuser -k -n tcp 3000"
```

## Get all extensions of files in a folder

find . -type f | perl -ne 'print $1 if m/\.([^.\/]+)$/' | sort -u