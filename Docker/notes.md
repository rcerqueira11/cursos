## Errors

### Got permission denied while trying...

```
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.26/containers/create: dial unix /var/run/docker.sock: connect: permission denied.
```

#### Solution

```
sudo usermod -a -G docker $USER
```

- logout or reboot after running the command