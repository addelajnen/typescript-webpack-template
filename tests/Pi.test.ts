import { PI } from "@/Pi";

test("hello world", () => {
	expect(PI).toBeCloseTo(3.14);
});
