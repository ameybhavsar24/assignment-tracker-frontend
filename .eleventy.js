const dev = global.dev  = (process.env.ELEVENTY_ENV === 'dev');

module.exports = config =>  {

	/* --- TRANSFORMS -- */

	// inline assets
	config.addTransform('inline', require('./lib/transforms/inline'));

	// minify HTML
	config.addTransform('htmlminify', require('./lib/transforms/htmlminify'));

	// CSS processing
	config.addTransform('postcss', require('./lib/transforms/postcss'));
  	
	/* --- WATCH FOLDERS --- */

	config.addWatchTarget('./src/scss/');
	config.addWatchTarget('./src/js/');

	
	// 11ty defaults
	return {
		dir: {
			input: 'src',
			output: 'build'
		}
	};
};

