// Copyright (C) 2024 Vito Videtta. All rights reserved.

import { main, USAGE } from "../src/main"

describe("main", () => {
  it.each([
    [[]],
  ])("prints usage to stderr if insufficient args are passed", (args: Array<string>) => {
    const errorSpy = jest.spyOn(console, "error");

    let returnCode: number = main(args);
    expect(errorSpy).toHaveBeenCalledWith(USAGE);
    expect(returnCode).toBe(1);
  });
});