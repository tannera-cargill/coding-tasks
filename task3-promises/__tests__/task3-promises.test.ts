import { tokenGetter } from "../task3-promises";

describe("task3", () => {
  it("tokenGetter returns the token", async () => {
    const token = await tokenGetter();

    expect(token).toBe("abc");
  });
});
