// Copyright (C) 2024 Vito Videtta. All rights reserved.
const fizzbuzz = require('./fizzbuzz');

export const USAGE = "node fizzbuzz_ts <number>"

export function main(args: Array<string>): number {
    if (args.length != 3) {
        console.error(USAGE)
        return 1
    }
    let n: number = parseInt(args[2])
    let result: string = fizzbuzz.fizzbuzz(n)
    console.log(result)
    return 0
}
