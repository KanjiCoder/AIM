
const LIB_URL = require( "url" );
const LIB_Q_S = require( "node:querystring" );

require( "http" ).createServer( function( i_ask , i_giv ){

    var sob ={
        ask : i_ask 
    ,   giv : i_giv
    ,   url : LIB_URL.parse( i_ask.url , 1 ).pathname 
    ,   pam : LIB_Q_S.parse( i_ask.url , 1 ).query
    ,   seg : [ "URL_PATH_SEGMENTS_NOT_LOADED_YET]" ]
    };;

    sob.url = sob.url.toUpperCase();                //:#MRCI#://
    
    i_giv.end( sob.url );

}).listen(process.env.PORT);

/** COMMENTS_ARE_READ_LAST_OR_NEVER ************************ ***

    #MRCI# : Make Routing Case Insensitive

*** ******************************************************** **/