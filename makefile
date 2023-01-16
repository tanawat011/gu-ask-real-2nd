# local developemnt
build:
	docker-compose build
start:
	docker-compose up -d
stop:
	docker-compose down
exec:
	docker exec -it app_local sh
log:
	docker logs -f app_local

# test production mode
clean-dev:
	docker rm -f app_dev && docker rmi -f registry.gitlab.com/...:development
build-dev:
	docker --debug build -t registry.gitlab.com/...:development -f ./docker/Dockerfile . --build-arg NODE_ENV=development --no-cache
start-dev:
	docker run -i -t --name app_dev -p 80:80 registry.gitlab.com/...:development
stop-dev:
	docker rm -f app_dev
exec-dev:
	docker exec -it app_dev sh
log-dev:
	docker logs -f app_dev
