import assert from 'assert';
import atmpt from '../.index.babel';
import Promise from 'bluebird';

describe('atmpt', () => {
	describe('async retries', () => {
		it('it should return 42', async function () {
			let result = await atmpt(async attempt => {
				if (attempt < 3) {
					throw new Error('test');
				}

				await Promise.delay(100);

				return 42;
			}, {delay: 5});

			assert.equal(result, 42);
		});
	});

	describe('sync retries', () => {
		it('it should return 42', async function () {
			let result = await atmpt(attempt => {
				if (attempt < 3) {
					throw new Error('test');
				}

				return 42;
			}, {delay: 5});

			assert.equal(result, 42);
		});
	});

	describe('dynamic delay', () => {
		it('it should return 42', async function () {
			let result = await atmpt(async attempt => {
				if (attempt < 3) {
					throw new Error('test');
				}

				return 42;
			}, {delay: attempt => attempt * 50});

			assert.equal(result, 42);
		});
	});

	describe('maxRetries', () => {
		it('it should return 42', async function () {
			let result = await atmpt(async attempt => {
				if (attempt < 10) {
					throw new Error('test');
				}

				return 42;
			}, {maxAttempts: 10, delay: 5});

			assert.equal(result, 42);
		});
	});
});