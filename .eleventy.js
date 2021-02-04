module.exports = config =>  {
	config.addPassthroughCopy('src/js');
	config.addPassthroughCopy('src/scss');
	// 11ty defaults
	return {
		dir: {
			input: 'src',
			output: 'build'
		}
	};
};

