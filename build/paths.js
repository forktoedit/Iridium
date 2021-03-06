var path = require('path');
module.exports = {
	distFolder: path.resolve(__dirname, '../dist'),
	projectRoot: path.dirname(__dirname),
	coverageFolder: path.resolve(__dirname, '../coverage'),

	buildFiles: ["typings/tsd.d.ts", "lib/**/*.ts", "index.ts"],
	testFiles: ["typings/tsd.d.ts", "test/**/*.ts"],
	cleanFiles: ["coverage", "dist"],

	builtTestFiles: 'dist/test/*.js',
	builtFiles: ["dist/lib/**/*.js", "dist/index.js"],
	testSupportFiles: ['dist/test/support/chai'],

	docSourceFiles: [
		"typings/tsd.d.ts",
		"lib/Core.ts",
		"lib/Model.ts",
		"lib/Instance.ts",

		"lib/Decorators.ts",

		"lib/Plugins.ts",
		"lib/Schema.ts",
		"lib/Cache.ts",
		"lib/CacheDirector.ts",
		"lib/ModelOptions.ts",
		"lib/Configuration.ts",
		"lib/Hooks.ts",
		"lib/Transforms.ts",

		"lib/caches/MemoryCache.ts",
		"lib/caches/NoOpCache.ts",

		"lib/cacheControllers/IDDirector.ts",

		"lib/utils/ObjectID.ts"
	]
};