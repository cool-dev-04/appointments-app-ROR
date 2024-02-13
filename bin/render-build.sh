#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
yarn policies set-version 3.4.1
# curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
# export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
yarn install --check-files

./bin/rails db:create
./bin/rails db:migrate
./bin/rails db:seed

# yarn build:css
# yarn build

./bin/rails assets:precompile
./bin/rails assets:clean
