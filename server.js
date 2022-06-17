

	require( "http" ).createServer( function( i_ask , i_giv ){

		i_giv.end( "[helllooo fucking world]" );

	}).listen( process.env.PORT );