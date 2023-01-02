#!/bin/sh

TYPE=$1
NAME=$2
COLLECT_COVERAGE_PATH=**/$NAME

if [ $TYPE = "-f" ]; then
  COLLECT_COVERAGE_PATH=**/$NAME/**/*
elif [ $TYPE = "-ts" ]; then
  COLLECT_COVERAGE_PATH=**/$NAME.ts
  NAME=$NAME.test
elif [ $TYPE = "-tsx" ]; then
  COLLECT_COVERAGE_PATH=**/$NAME.tsx
  NAME=$NAME.test
else
  NAME=$TYPE.test
  COLLECT_COVERAGE_PATH=**/$TYPE.tsx
fi

IGNORE_SNAPSHOTS=!src/**/__snapshots__/**/*
COLLECT_PATH="[\"$COLLECT_COVERAGE_PATH\",\"$IGNORE_SNAPSHOTS\"]"

yarn test:cv:msg -u --collectCoverageFrom=$COLLECT_PATH --testPathPattern $NAME
