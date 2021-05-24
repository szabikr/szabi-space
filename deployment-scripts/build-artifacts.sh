#!/bin/bash
mkdir artifacts

branchName="bug/fixing-index"

branchName=$(sed 's/\//_/g' <<<$branchName)

echo "Branch name: $branchName"
zip -r artifacts/build_${branchName}.zip .next/

major="3"
minor="10"
patch="87"

echo "Major: ${major}"
echo "Minor: ${minor}"
echo "Patch: ${patch}"

zip -r artifacts/build_${major}.${minor}.${patch}.zip .next/
