// Copyright (C) 2024 Vito Videtta. All rights reserved.

import { fizzbuzz } from '../src/fizzbuzz';

describe("fizzbuzz tests", () =>{
  test("fizzbuzz of 1 is 1", () =>{
    expect(fizzbuzz(1)).toBe("1");
  })
});
