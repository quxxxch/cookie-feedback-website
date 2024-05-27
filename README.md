## Docker build

```shell
docker build -f Dockerfile -t website:latest .
```

## Docker run

```shell
docker run -d -it --rm -p 3000:3000 --name my_website website:latest
```

## start Sonarqube

```shell
docker compose up
```