#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn install

./bin/rails db:create
./bin/rails db:migrate
