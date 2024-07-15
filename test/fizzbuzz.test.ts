// Copyright (C) 2024 Vito Videtta. All rights reserved.

import { fizzbuzz } from '../src/fizzbuzz';

describe("fizzbuzz", () =>{
  it.each([
    [1, "1"],
    [2, "2"],
    [3, "fizz"],
    [4, "4"],
    [5, "buzz"],
    [6, "fizz"],
    [7, "7"],
    [8, "8"],
    [9, "fizz"],
    [10, "buzz"],
    [11, "11"],
    [12, "fizz"],
    [13, "13"],
    [14, "14"],
  ])("of '%s' is '%s'", (input: number, expected_output: string) => {
    expect(fizzbuzz(input)).toBe(expected_output);
  })
});
