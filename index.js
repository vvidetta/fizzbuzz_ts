#!/usr/bin/env node
// Copyright (C) 2024 Vito Videtta. All rights reserved.
var fizzbuzz = require('./src/fizzbuzz');
//const process = require('node:process');
var USAGE = "node fizzbuzz_ts <number>";
function main(args) {
    if (args.length != 3) {
        console.error(USAGE);
        return 1;
    }
    var n = parseInt(args[2]);
    var result = fizzbuzz.fizzbuzz(n);
    console.log(result);
    return 0;
}
process.exit(main(process.argv));
