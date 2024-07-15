"use strict";
// Copyright (C) 2024 Vito Videtta. All rights reserved.
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzbuzz = fizzbuzz;
function fizzbuzz(n) {
    if (n % 15 === 0) {
        return "fizzbuzz";
    }
    else if (n % 3 === 0) {
        return "fizz";
    }
    else if (n % 5 === 0) {
        return "buzz";
    }
    return n.toString();
}
