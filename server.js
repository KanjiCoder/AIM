
require("http").createServer(function( i_ask , i_giv ){

	i_giv.end( "[HELLO_FUCKING_WORLD]" );

}).listen( process.env.PORT || 5000 );