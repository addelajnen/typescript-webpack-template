export class Greeter {
	private greeting: string

	public constructor(greeting: string) {
		this.greeting = greeting
	}

	public greet() {
		return this.greeting
	}
}

