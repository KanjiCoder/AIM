

	require( "http" ).createServer( function( i_ask , i_giv ){
	
		i_giv.end( "hello world" );

	}).listen( process.env.PORT );