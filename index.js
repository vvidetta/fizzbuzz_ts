#!/usr/bin/env node
// Copyright (C) 2024 Vito Videtta. All rights reserved.

const process = require('node:process');

function main(args) {
    console.log(args)
    return 1;
}

process.exit(main(process.argv))
