// Copyright (C) 2024 Vito Videtta. All rights reserved.

import { main, USAGE } from "../src/main"
import { fizzbuzz } from "../src/fizzbuzz"

const fizzbuzz_sentinel = "fizzbuzz_sentinel";
jest.mock("../src/fizzbuzz", () => {
  const originalModule = jest.requireActual("../src/fizzbuzz")

  return {
    __esModule: true,
    ...originalModule,
    fizzbuzz: jest.fn((number: number): string => fizzbuzz_sentinel),
  }
});

describe("main", () => {
  it.each([
    [[]],
    [["path/to/node",]],
    [["path/to/node", "path/to/script",]],
  ])("prints usage to stderr if insufficient args are passed", (args: Array<string>) => {
    const errorSpy = jest.spyOn(console, "error");

    let returnCode: number = main(args);
    expect(errorSpy).toHaveBeenCalledWith(USAGE);
    expect(returnCode).toBe(1);
  });

  it("invokes fizzbuzz function and prints result to stdout", ()=>{
    const logSpy = jest.spyOn(console, "log");
    const args: Array<string> = ["path/to/node", "path/to/script", "42"];

    const returnCode: number = main(args);

    expect(fizzbuzz).toHaveBeenCalledWith(42);
    expect(logSpy).toHaveBeenCalledWith(fizzbuzz_sentinel);
    expect(returnCode).toBe(0);
  })
});