const { clean, override } = abuser(__filename);

describe('lib/unadded', () => {
	let unadded;

	before(() => {
		clean('.');
add 'apps/post/index.js'
		override('../../helpers/spawn', () => `remove '.gitattributes'
add 'new file.txt'
`);

		unadded = require('.');
	});

	after(() => clean('.'));

	it('should convert dry-run add to a file list', async() => {
		const list = await unadded();
		expect(list).to.deep.equal([
			'.gitattributes',
			'apps/post/index.js',
			'new file.txt',
		]);
	});
});