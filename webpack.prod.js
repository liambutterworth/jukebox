const merge                   = require( 'webpack-merge' );
const config                  = require( './webpack.config.js' );
const OptimizeCssAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const UglifyJsPlugin          = require( 'uglifyjs-webpack-plugin' );

module.exports = merge( config, {
	mode:    'production',
	devtool: 'source-map',

	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin( {} ),
			new UglifyJsPlugin( { cache: true, parallel: true } ),
		],
	},
} );
