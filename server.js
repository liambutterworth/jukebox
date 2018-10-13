//
// Server
//

const express = require( 'express' );
const port    = process.env.PORT || 3000;
const env     = process.env.NODE_ENV || 'development';
const app     = express();

if ( env === 'development' ) {
	const webpack = require( 'webpack' );
	const config = webpack( require( './webpack.dev.js' ) );
	app.use( require( 'webpack-dev-middleware' )( config ) );
}

app.use( express.static( 'dist' ) );

app.get( '/', ( req, res ) => {
	res.sendFile( 'dist' );
} );

app.listen( port, () => {
	console.log( `Listening on port ${ port }` );
} );
