export default class Greeter {
	public async greet(message: string, speed = 120): Promise<void> {
		if (speed > 0) {
			for (let i = 0; i < message.length; i++) {
				const ch = message[i]

				process.stdout.write(ch)
				await new Promise(resolve => setTimeout(resolve, speed))
			}
			process.stdout.write("\n\n")
		} else {
			console.log(message)
		}
	}
}

const g = new Greeter()
g.greet("Hello World")
