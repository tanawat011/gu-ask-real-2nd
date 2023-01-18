#!/bin/sh

envsubst <.env.example >.env.temp

INPUT_PATH=./.env.temp
DEPLOYMENT_PATH=./k8s/deployment.yaml

# Replace ENV
while read -r line; do
  KEY=$(echo "$line" | cut -d'=' -f1)
  VALUE=$(echo "$line" | cut -d'=' -f2)

  if [ -z "$KEY" ]; then
    continue
  fi

  sed -i "s|<$KEY>|$VALUE|g" $DEPLOYMENT_PATH
done <"$INPUT_PATH"

# Replace k8s environment
sed -i "s|<APP_NAME>|$APP_NAME|g" $DEPLOYMENT_PATH
sed -i "s|<IMAGE>|$IMAGE|g" $DEPLOYMENT_PATH
sed -i "s|<IMAGE_TAG>|$IMAGE_TAG|g" $DEPLOYMENT_PATH
sed -i "s|<NAMESPACE>|$K8S_NAMESPACE|g" $DEPLOYMENT_PATH
sed -i "s|<REPLICAS>|$K8S_REPLICAS|g" $DEPLOYMENT_PATH
sed -i "s|<CPU_LIMIT>|$K8S_CPU_LIMIT|g" $DEPLOYMENT_PATH
sed -i "s|<MEMORY_LIMIT>|$K8S_MEMORY_LIMIT|g" $DEPLOYMENT_PATH
sed -i "s|<CPU_REQUEST>|$K8S_CPU_REQUEST|g" $DEPLOYMENT_PATH
sed -i "s|<MEMORY_REQUEST>|$K8S_MEMORY_REQUEST|g" $DEPLOYMENT_PATH
sed -i "s|<DOMAIN_NAME>|$K8S_DOMAIN_NAME|g" $DEPLOYMENT_PATH

# Apple k8s
cat $DEPLOYMENT_PATH
kubectl apply -f $DEPLOYMENT_PATH

# Restart pod
kubectl rollout restart deployment/$APP_NAME --namespace=$K8S_NAMESPACE
