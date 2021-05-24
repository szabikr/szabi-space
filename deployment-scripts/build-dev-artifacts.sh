#!/bin/bash

if [ -z "$1" ]
then
  echo "please give a branch name as first parameter for this script"
fi

# mkdir artifacts
branchName=$1

branchName=$(sed 's/\//_/g' <<<$branchName)

mkdir artifacts

echo "artifacts/build_${branchName}.zip"

zip -r artifacts/build_${branchName}.zip .next/

echo "artifact created"