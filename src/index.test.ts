import { Greeter } from "."

test("test example", async () => {
	expect(new Greeter('hello world').greet()).toBe('hello world')
})
