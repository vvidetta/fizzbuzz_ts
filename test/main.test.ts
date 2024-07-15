// Copyright (C) 2024 Vito Videtta. All rights reserved.

import { main, USAGE } from "../src/main"

describe("main", () => {
  test("it prints usage to stderr if insufficient args are passed", () => {
    const errorSpy = jest.spyOn(console, "error");

    main([]);
    expect(errorSpy).toHaveBeenCalledWith(USAGE);
  });
});