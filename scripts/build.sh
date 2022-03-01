#!/bin/bash

set -e

yarn

yarn lint

export NODE_ENV=production

yarn build

yarn export
