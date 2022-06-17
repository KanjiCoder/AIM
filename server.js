

	require("http").createServer( function( i_ask , i_giv ){

		i_giv.end( "[HELLOWORLD]" );

	}).listen( process.env.PORT || 5000 );