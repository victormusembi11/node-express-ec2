#!/bin/bash

cd /usr/src/app

# migrate database
npx prisma migrate dev --name init

# Build the app
npm run build

# Run the app
npm start
