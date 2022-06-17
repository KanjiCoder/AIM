
	require("http").createServer( function( i_ask , i_giv ){

		i_giv.end( "[helloworld]" );

	}).listen( process.env.PORT || 5000 );