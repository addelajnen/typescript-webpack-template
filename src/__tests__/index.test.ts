import { HelloWorld } from "..";

test("hello world", () => {
	const hello = new HelloWorld();
	expect(hello.message).toBe("Hello World");
});
