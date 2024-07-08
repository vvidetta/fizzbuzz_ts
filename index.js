#!/usr/bin/env node
// Copyright (C) 2024 Vito Videtta. All rights reserved.

const process = require('node:process');

const USAGE = "node fizzbuzz_ts <number>"

function main(args) {
    if (args.length != 3) {
        console.error(USAGE)
        return 1
    }
    return 0
}

process.exit(main(process.argv))
