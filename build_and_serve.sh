#!/usr/bin/env bash

echo "Building Angular App"


if ! npm install ; then
    echo "Build Failed"
    exit 1
fi
echo "App Built Successfully"


echo "Serving App"
if ! ng serve --open --port 4000 ; then
    echo "Serving App Failed"
    exit 1
fi

