const delayPromise = ms => new Promise(resolve => setTimeout(()=>resolve(), ms));

module.exports = (func, config = {}) => {
	let delay = config.delay || 1000,
		maxAttempts = config.maxAttempts || 5;

	return (async () => {
		let attempts = 0;

		do {
			try {
				return await func(attempts);
			} catch (error) {
				if (attempts >= maxAttempts) {
					throw error;
				}

				await delayPromise(typeof delay === 'number' ? delay : delay(attempts));
			}
		} while (++attempts);
	})();
};