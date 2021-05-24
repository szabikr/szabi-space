#!/bin/bash
branchName="bug/fixing-index"
branchName=$(sed 's/\//_/g' <<<$branchName)

major="3"
minor="10"
patch="87"

mkdir build_${branchName}
mkdir build_${major}.${minor}.${patch}

unzip build_${branchName}.zip -d build_${branchName}
unzip build_${major}.${minor}.${patch}.zip -d build_${major}.${minor}.${patch}
