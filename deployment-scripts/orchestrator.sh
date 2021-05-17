#!/bin/bash
yarn run build
bash deployment-scripts/build-artifacts.sh
bash deployment-scripts/copy-artifacts.sh

cd workspace

bash ../deployment-scripts/extract-artifacts.sh
