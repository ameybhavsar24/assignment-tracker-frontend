const fs = require('fs');
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

	config.addPassthroughCopy('./src/assets');

	config.setBrowserSyncConfig({
		callbacks: {
			ready: function(err, bs) {
				bs.addMiddleware("*", (req, res) => {
					const content_404 = fs.readFileSync('build/404.html');
					// Add 404 http status code in request header.
					res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
					// Provides the 404 content without redirect.
					res.write(content_404);
					res.end();
				});
			}
		}
	});
	
	// 11ty defaults
	return {
		dir: {
			input: 'src',
			output: 'build'
		}
	};
};

