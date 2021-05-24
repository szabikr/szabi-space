#!/bin/bash
mkdir workspace

branchName="bug/fixing-index"
branchName=$(sed 's/\//_/g' <<<$branchName)
cp artifacts/build_${branchName}.zip workspace/build_${branchName}.zip

major="3"
minor="10"
patch="87"
cp artifacts/build_${major}.${minor}.${patch}.zip workspace/build_${major}.${minor}.${patch}.zip
