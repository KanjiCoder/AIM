

require( "http" ).createServer( function( i_ask , i_giv ){

    var sob ={
        ask : i_ask 
    ,   giv : i_giv
    ,   url : URL.parse( i_ask.url , 1 ).pathname.toUpperCase()
    ,   pam : Q_S.parse( i_ask.url , 1 ).query
    ,   seg : [ "URL_PATH_SEGMENTS_NOT_LOADED_YET]" ]
    };;
    
    i_giv.setHeader( "Content-Type" , "application/json" );
    i_giv.end( JSON.stringify( sob );

}).listen(process.env.PORT);