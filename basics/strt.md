# start redis using docker 

## Connect to redis server

```sh
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```
Now if you visit localhost:8001 it will take you to redis-stack

## To run redis on bash

```sh
docker exec -it <container_id> /bin/bash
```