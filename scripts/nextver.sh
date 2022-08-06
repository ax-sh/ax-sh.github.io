#!/usr/bin/bash

echo $(yarn standard-version --dry-run | grep "release v" | awk '{ print $4 }' | sed 's/[\"v]//g' | tr -d '[[:space:]]')
