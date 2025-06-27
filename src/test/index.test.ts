// src/test/index.test.ts

import { describe, it, expect } from "vitest"; // ✅ Explicitly import globals

import { fromSrc } from "../index.js"; // ✅ Correct .js extension for NodeNext

describe("fromSrc", () => {
  it("should return the correct greeting", () => {
    expect(fromSrc()).toBe("👋 Hello from the src workspace!");
  });
});
