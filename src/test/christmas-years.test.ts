import { describe, expect, it } from "vitest";
import { CHRISTMAS_OUTREACH_YEARS } from "@/lib/site";

describe("Christmas outreach years", () => {
  it("keeps the original outreach in 2023", () => {
    expect(CHRISTMAS_OUTREACH_YEARS.original).toBe(2023);
  });
  it("assigns the newly uploaded meal photos to 2024", () => {
    expect(CHRISTMAS_OUTREACH_YEARS.meal).toBe(2024);
  });
  it("corrects the existing four-photo celebration to 2025", () => {
    expect(CHRISTMAS_OUTREACH_YEARS.celebration).toBe(2025);
  });
});