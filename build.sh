#!/bin/sh

if [ $# -ne 1 ]
then
  echo "Pass the version number. \n"
  echo "Systex: $0 <version to build>"
  exit 10
fi

docker build -t nodeapp:v$1 .
