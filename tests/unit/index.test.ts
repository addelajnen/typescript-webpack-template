import Greeter from "@/index"

test("tests greeter", async () => {
	const g = new Greeter()
	await g.greet("testing")
})
