#!/bin/bash

cd ..

zip -r gather.zip . -x "node_modules/*" -x "dist/*" -x "scripts/*" -x "dist/*"
