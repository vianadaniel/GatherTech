#!/bin/bash

vagrant up

vagrant ssh -c "cd /vagrant; npm run start"
