#!/usr/bin/env node
// Copyright (C) 2024 Vito Videtta. All rights reserved.

const process = require('node:process');

const USAGE = "node fizzbuzz_ts <number>"

function fizzbuzz(number) {
    return number
}

function main(args) {
    if (args.length != 3) {
        console.error(USAGE)
        return 1
    }
    number = parseInt(args[2])
    result = fizzbuzz(number)
    console.log(result)
    return 0
}

process.exit(main(process.argv))
