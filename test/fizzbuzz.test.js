// Copyright (C) 2024 Vito Videtta. All rights reserved.
var fizzbuzz = require('../src/fizzbuzz');
describe("fizzbuzz tests", function () {
    test("fizzbuzz of 1 is 1", function () {
        expect(fizzbuzz.fizzbuzz(1)).toBe("1");
    });
});
