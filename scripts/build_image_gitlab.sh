#!/bin/sh

# Login gitlab
docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY

if [ $1 = "prod" ]; then
  IMAGE_PRD=$IMAGE:$IMAGE_TAG

  docker build -t $IMAGE_PRD -f $DOCKER_PATH . --no-cache
  docker push $IMAGE_PRD
elif [ $1 = "dev" ]; then
  IMAGE_DEV=$IMAGE:dev

  docker --debug build -t $IMAGE_DEV -f $DOCKER_PATH . --build-arg NODE_ENV=development --no-cache
  docker push $IMAGE_DEV
fi
