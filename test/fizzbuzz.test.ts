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
  ])("of '%s' is '%s'", (input: number, expected_output: string) => {
    expect(fizzbuzz(input)).toBe(expected_output);
  })
});
