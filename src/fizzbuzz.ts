// Copyright (C) 2024 Vito Videtta. All rights reserved.

export function fizzbuzz(n: number): string {
    if (n === 3) {
        return "fizz";
    } else if (n === 5) {
        return "buzz";
    }
    return n.toString();
}
