#!/bin/bash
service esquare-nuxt stop
git pull
npx nuxi cleanup
npx nuxi build
service esquare-nuxt start
