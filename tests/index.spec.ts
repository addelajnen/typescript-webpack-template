import ExampleClass from "@/index"

test("tests pi", () => {
	expect(3.14).toBe(new ExampleClass().PI)
})
