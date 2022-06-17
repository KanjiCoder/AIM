

	require( "http" ).createServer( function( i_ask , i_giv ){

		i_giv( "hello world" );

	}).listen( process.env.PORT );