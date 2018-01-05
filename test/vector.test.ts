import { expect } from 'chai';

import { Vector } from '../src';

describe('Vector', () => {

	let vector = new Vector<number>();

	it('push_back()', () => {
		vector.push_back(10);
		vector.push_back(20);
		const result = vector.toString();
		expect(result).to.equal('10,20');
	});

	it('front()', () => {
		const result = vector.front();
		expect(result).to.equal(10);
	});

	it('back()', () => {
		const result = vector.back();
		expect(result).to.equal(20);
	});

	it('pop_back()', () => {
		vector.pop_back();
		const result = vector.toString();
		expect(result).to.equal('10');
	});

});
