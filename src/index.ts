export class HelloWorld {
	private msg: string;

	public constructor() {
		this.msg = "Hello World";
	}

	public get message(): string {
		return this.msg;
	}
}
