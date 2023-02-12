#!/bin/sh

LOCAL_ENV_FILE=./.env
TEMPLATE_PUBLIC_CONFIG_FILE_IN_BUILD=./build/template-config.js
TEMPLATE_PUBLIC_CONFIG_FILE=./public/template-config.js
PUBLIC_CONFIG_FILE=./public/config.js

cp $TEMPLATE_PUBLIC_CONFIG_FILE $PUBLIC_CONFIG_FILE

# Replace ENV
while read -r line; do
  KEY=$(echo "$line" | cut -d'=' -f1)
  VALUE=$(echo "$line" | cut -d'=' -f2)

  if [ -z "$KEY" ]; then
    continue
  fi

  sed -i "s|<$KEY>|$VALUE|g" $PUBLIC_CONFIG_FILE
done <"$LOCAL_ENV_FILE"

yarn react-scripts build

rm $PUBLIC_CONFIG_FILE
rm $TEMPLATE_PUBLIC_CONFIG_FILE_IN_BUILD
