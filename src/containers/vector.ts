export class Vector <T> {

	private elements: T[];

	constructor() {
		this.elements = [];
	}

	public back(): T {
		return this.elements[this.elements.length - 1];
	}

	public front(): T {
		return this.elements[0];
	}

	public push_back(element: T): void {
		this.elements.push(element);
	}

	public pop_back(): void {
		this.elements.pop();
	}

	toString(): string {
		return this.elements.toString();
	}

}
