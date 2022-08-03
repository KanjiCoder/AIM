//:IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII://
//:INDEX_SECTION_HOTEL13:IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII://
/** ******************************************************** ***

        [ CTRL_F_HELP  ] : Hackish Google Search === CTRL+F
        [ BOMB_TYPES   ] : Use CTRL+F For More Info
        [ DEVEL_TODO   ] : Developer Todo Notes
        [ BASIC_LAYOUT ] : Basic Data Layout Of Hotel13
        [ HASHTAG_SEC  ] : 90% of comments are here.
                         : Always append new notes to the
                         : BOTTOM OF THIS SECTION.

*** ******************************************************** **/
//:IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII:INDEX_SECTION_HOTEL13://
//:IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII://
//:MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM://
//:MONKEY_WRENCH_MACROS_HOTEL13:MMMMMMMMMMMMMMMMMMMMMMMMMMMMM://



    const HEADERS_RECIEVED = "[TYPO_FIX:HEADERS_RECEIVED]" ;



//:MMMMMMMMMMMMMMMMMMMMMMMMMMMMM:MONKEY_WRENCH_MACROS_HOTEL13://
//:MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM://
//:----------------------------------------------------------://
//:EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE://
//:ENVIRONMENT_SECTION_HOTEL13:EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE://

    //:HOTEL13_ENVIORNMENT_DETECTION:====================://
    {
        let yes =( "undefined" === typeof window );               
        let not =( "undefined"  != typeof window ); 
        var d_hotel13_yesnode =( yes ? 1:0 );
        var d_hotel13_notnode =( not ? 1:0 );
    }
    //:====================:HOTEL13_ENVIORNMENT_DETECTION://
    //:HOTEL13_ARE_YOU_ALONE:============================://
    //:                                                  ://
    //:    Is this code currently a part of our          ://
    //:    [ Atomic Ivy MMO ]AKA[ BOOM MMO ] ?           ://
    //:    SEE[ www.tinyurl.com/BOMB-GAME-TUTORIAL ]     ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        //: Hotel13 Integrated Into Larger Project ? :- -://

            const d_hotel13_yes_aim =(( 0
            ||  (!( "undefined" === typeof notnode ))  
            ||  (!( "undefined" === typeof yesnode ))  
            ) ? 1 : 0 );;
            const d_hotel13_not_aim =((
                (!d_hotel13_yes_aim)  
            ) ? 1 : 0 );;
            
        //: Hotel13 as stand alone server ?  :- - - - - -://

            const d_hotel13_h13node =(( 1
            &&    d_hotel13_not_aim
            &&    d_hotel13_yesnode
            ) ? 1 : 0 );;
    //:============================:HOTEL13_ARE_YOU_ALONE://

//:EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:ENVIRONMENT_SECTION_HOTEL13://
//:EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE://
//:----------------------------------------------------------://
//:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD://
//:DATA_ONLY_SECTION_HOTEL13:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD://

    //:HOTEL13_MIMETYPES:================================://
    if( d_hotel13_not_aim ){
        
        //:#_DONT_UPLICATE_CONTENT_TYPES_IF_PART_OF_AIM_#://

        let c_t =( "Content-Type" ); //:#JS_DYNA_KEY#://
        var d_jso = { [c_t]: "application/json"         } ;
        var d_txt = { [c_t]: "text/plain"               } ;
        var d_png = { [c_t]: "image/png"                } ;
        var d_htm = { [c_t]: "text/html"                } ;
        var d_js  = { [c_t]: "text/javascript"          } ;
        var d_exe = { [c_t]: "application/x-msdownload" } ;
        var d_css = { [c_t]: "text/css"                 } ;
    };;
    //:================================:HOTEL13_MIMETYPES://
    //:HOTEL13_DATABASE.DATA:============================://
    if( d_hotel13_yesnode ){

        //:#_CAN_EXIST_IN_ALL_NODE_JS_ENVIRONMENTS_#://

        let n =( "\n" ); //:TempNewlineMacro://
    
        //:::::::::::::::::::::::::::::::::::::::::::://
        //: @d_hotel13_dbu@ : Database URL           ://
        //: @d_hotel13_cin@ : Connection_INfo        ://
        //: @d_hotel13_dcp@ : DB_Connection_Pool     ://
        //:::::::::::::::::::::::::::::::::::::::::::://

        var d_hotel13_dbu = process.env.DATABASE_URL ;       
        var d_hotel13_cin ={                                 
            connectionString : d_hotel13_dbu                 
        ,   ssl : { rejectUnauthorized : false }     
        };;                                          
        var d_hotel13_dcp = "[nil][d_hotel13_dcp]"   ;       

        //:::::::::::::::::::::::::::::::::::::::::::://
        //: DATA.CreateTableStatement.TABle.HOTEL13  ://   
        //:::::::::::::::::::::::::::::::::::::::::::://

        var d_cts_tab_hotel13 =( "                   "+n 
        +"                                           "+n
        +"  CREATE TABLE IF NOT EXISTS tab_hotel13(  "+n 
        +"                                           "+n
        +"       iid SERIAL PRIMARY KEY              "+n 
        +"                                           "+n
        +"  ,  col_coohash  VARCHAR( 11 )            "+n 
        +"                                           "+n
        +"  ,  col_verni32  INT                      "+n
        +"                  CHECK( col_verni32 >= 0 )"+n   
        +"                                           "+n
        +"  ,  col_png_url  VARCHAR( 32 )            "+n
        +"                                           "+n
        +"      /** Coordinate Hash And Version **/  "+n
        +"      /** Number Should Be Unique     **/  "+n
        +"      /** Combination.                **/  "+n
        +"  ,   CONSTRAINT con_hotel13 UNIQUE        "+n
        +"      ( col_coohash , col_verni32 )        "+n
        +"                                           "+n
        +"  );;                                      "+n           
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    

        //:::::::::::::::::::::::::::::::::::::::::::://
        //: DATA.InsertIntoStatement.TABle.HOTEL13   ://
        //:::::::::::::::::::::::::::::::::::::::::::://
                 
        var d_iis_tab_hotel13 =( "                   "+n   
        +"                                           "+n  
        +"      INSERT INTO tab_hotel13              "+n  
        +"      (                                    "+n
        +"            col_coohash                    "+n
        +"        ,   col_verni32                    "+n
        +"        ,   col_png_url                    "+n
        +"      )VALUES                              "+n
        +"      (                                    "+n
        +"            '[i_coohash]'                  "+n
        +"        ,    [i_verni32]                   "+n
        +"        ,   '[i_png_url]'                  "+n
        +"      );;                                  "+n    
        +"                                           "+n  
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  

        //:::::::::::::::::::::::::::::::::::::::::::://
        //: DATA.Select.TABle.HOTEL13 :::::::::::::::://
        //:::::::::::::::::::::::::::::::::::::::::::://

        var d_sel_tab_hotel13 =( "                   "+n
        +"                                           "+n
        +"      /** SELECT TOP 10 **/                "+n
        +"                                           "+n
        +"      SELECT *                             "+n
        +"      FROM     tab_hotel13                 "+n
        +"      WHERE    col_coohash = '[i_coohash]' "+n
        +"      ORDER BY col_verni32 DESC            "+n
        +"      LIMIT 10                             "+n
        +"      ;;                                   "+n
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

        //:::::::::::::::::::::::::::::::::::::::::::://
        //: DATA.DropTableStatement.HOTEL13 :::::::::://
        //:::::::::::::::::::::::::::::::::::::::::::://
        var d_dts_tab_hotel13 =( "                   "+n   
        +"                                           "+n   
        +"  DROP TABLE IF EXISTS tab_hotel13 ;       "+n   
        +"                                           "+n   
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;   
    };;
    //:============================:HOTEL13_DATABASE.DATA://

//:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD:DATA_ONLY_SECTION_HOTEL13://
//:DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD://
//:LIBRARY_SECTION_HOTEL13:LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL://
//:LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL://

    if( d_hotel13_h13node /** #_HOTEL13_SERVER_ONLY_# **/ ){

        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: l_pg : Add This To Your[ package.json ]      ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://
        /** ******************************************** ***    
            { 
                "//" : "KANJICODER_NEEDS_A_DATABASE"
            ,   "dependencies": { "pg" : "8.7.3" } 
            }
        *** ******************************************** **/
 
        var l_pg     = require( "pg"               );   
        var l_fs     = require( "fs"               );   
        var l_url    = require( "url"              );   
        var l_qs     = require( "node:querystring" );   
        /// l_http   = require( "http"             );
        var l_https  = require( "https"            );
        /// l_buffer = require( "node:buffer"      );
    };;
//:LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL:LIBRARY_SECTION_HOTEL13://
//:LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL://



    //# BELOW : Not sectioned. #//



    //:HOTEL13_XMLHTTPREQUEST_WIREUP_HACK:===============://
    //:HOTEL13_PHONE_HOME:===============================://
    //:                                                  ://
    //:    [TODO]: Make it so  HOTEL13's server          ://
    //:          : MERGES with AIM's server when         ://
    //:          : HOTEL13's code pasted into either     ://
    //:          : top or bottom of file.                ://
    //:          : (not sure which one yet)              ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        const d_hotel13_wcx_i_x_def = "[wmc:NOT:wcx]" ;
        const d_hotel13_wcy_i_y_def = "[wmc:NOT:wcy]" ;
        const d_hotel13_wcx_i_x     = "[wmc:NOT:wcx]" ;
        const d_hotel13_wcy_i_y     = "[wmc:NOT:wcy]" ;
        const d_hotel13_wcx_s_x     = "[wmc:NOT:wcx]" ;
        const d_hotel13_wcy_s_y     = "[wmc:NOT:wcy]" ;

    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://
    if( d_hotel13_notnode /**ClientSideOnly**/ )
    {
        if(!d_url){ var d_url = "[DURLNOTSET]" ; };

        var               d_hotel13_urlsite    =(                                 
            "[BLACK_MAGIC:d_hotel13_urlsite]"                    
        );;                                              
        var               d_hotel13_urlsite_o_k=(                              
            "[BLACK_MAGIC:d_hotel13_urlsite_o_k]"                
        );;       

        //:@wmc@:WorldMapCoord ::::::::::::::::::://
        //:@wmc_s_x@     : wmc - string - x      ://
        //:@wmc_s_y@     : wmc - string - y      :// 
        //:@wmc_o_k@     : wmc - Okay?           ://
        //:@wmc_i_x@     : wmc - integer- x      ://
        //:@wmc_i_y@     : wmc - integer- y      ://
        //:@wmc_i_x_def@ : DEFAULT x             ://
        //:@wmc_i_y_def@ : DEFAULT y             ://
        //:::::::::::::::::::::::::::::::::::::::://
        var d_hotel13_wmc_i_x_def =(   0     );
        var d_hotel13_wmc_i_y_def =(   0     );
        var d_hotel13_wmc_i_z_def =(   0     );
        var d_hotel13_wmc_i_x     =( 0 - 404 );
        var d_hotel13_wmc_i_y     =( 0 - 404 );
        var d_hotel13_wmc_i_z     =( 0 - 404 );

        var               d_hotel13_wmc_s_x =(
            "[BLACK_MAGIC:d_hotel13_wmc_s_x]" );;
        var               d_hotel13_wmc_s_y =(
            "[BLACK_MAGIC:d_hotel13_wmc_s_y]" );;
        var               d_hotel13_wmc_s_z =(
            "[BLACK_MAGIC:d_hotel13_wmc_s_z]" );;
        var               d_hotel13_wmc_o_k =(
            "[BLACK_MAGIC:d_hotel13_wmc_o_k]" );;
        if( "[YES_O_K]" ==d_hotel13_wmc_o_k ){

            d_hotel13_wmc_i_x =( Number.parseInt( 
            d_hotel13_wmc_s_x ));;

            d_hotel13_wmc_i_y =( Number.parseInt( 
            d_hotel13_wmc_s_y ));;

            d_hotel13_wmc_i_z =( Number.parseInt( 
            d_hotel13_wmc_s_z ));;
        };;

        if( "[YES_O_K]" == d_hotel13_urlsite_o_k ){

            d_url =( d_hotel13_urlsite );
        }else
        if( "[NOT_O_K]" == d_hotel13_urlsite_o_k 
        &&  "[YES_O_K]" ==         d_urlsite_o_k
        ){
            d_url =(         d_urlsite );
        }else{

            F_PRIVATE_HOTEL13_ERR(
                "[HOTEL13_CANT_PHONE_HOME]" 
            );;
        };;
    }
    //:===============================:HOTEL13_PHONE_HOME://
    //:===============:HOTEL13_XMLHTTPREQUEST_WIREUP_HACK://
    //:STOLENFROM:#BGT#:=================================://
    //:FUNC_XML_HTTP_REQUEST:[061]:======================://
                                                          //
        const   F_HOTEL13_XHR = function                  //
        PRIVATE_F_HOTEL13_XHR(                            //
            i_asktype  /** @asktype@  **/                 //
        ,   i_urlpath  /** @urlpath@  **/                 //
        ){                                                //
            var o_promise = new Promise( function         //
            EXECUTO_F_HOTEL13_XHR( o_k_yes , wontsay ){   //
                                                          //
                var emp , urlfull , xhr_ask ;             //
                                                          //
                    emp = "" ; /**EmptyString**/          //
                urlfull = "[REQUEST_URL_NOT_SET]" ;       //
                                                          //
                if( "/" != i_urlpath[ 0 ] ){              //
                                                          //
                    urlfull = d_url + "/" + i_urlpath ;   //
                }else{                                    //
                    urlfull = d_url + emp + i_urlpath ;   //
                };;                                       //
                                                          //
                xhr_ask = new XMLHttpRequest();           //
                xhr_ask.open( i_asktype , urlfull );      //
                xhr_ask.send();                           //
                xhr_ask.onreadystatechange=(evt_xhr)=>{   //
                if( xhr_ask.readyState === 4 ){           //
                                                          //
                    console.log("DONE");                  //
                    o_k_yes( xhr_ask.responseText );      //
                                                          //
                };;};;                                    //
                                                          //
            });; return( o_promise );                     //
        };;                                               //
    //:======================:FUNC_XML_HTTP_REQUEST:[061]://
    //:=================================:STOLENFROM:#BGT#://
    //:HOTEL13_XML_GET:==================================://

        const   F_HOTEL13_XHR_GET = "[TRY:XHR_GET_PNG]" ;
        const   F_HOTEL13_GET_XHR = "[TRY:XHR_GET_PNG]" ;

        const   F_HOTEL13_XHR_GET_PNG = function
        PRIVATE_F_HOTEL13_XHR_GET_PNG(

            i_urlpath
        ){
            var o_promise = new Promise( function          
            EXECUTO_F_HOTEL13_XHR_GET_PNG( 

                o_k_yes 
            ,   wontsay
            ){
                                                           
                var emp , urlfull , xhr_ask ;              
                                                           
                    emp = "" ; /**EmptyString**/           
                urlfull = "[REQUEST_URL_NOT_SET]" ;        
                                                           
                if( "/" != i_urlpath[ 0 ] ){               
                                                           
                    urlfull = d_url + "/" + i_urlpath ;    
                }else{                                     
                    urlfull = d_url + emp + i_urlpath ;    
                };;                                        
                                                           
                xhr_ask = new XMLHttpRequest();            
                xhr_ask.open( "GET" , urlfull );  
                xhr_ask.responseType = "arraybuffer" ;  //:<<<<<<<<<<<<<< NOTICE_ME_SENPAI
                xhr_ask.send();                            
                xhr_ask.onreadystatechange=(evt_xhr)=>{    
                if( xhr_ask.readyState === 4 ){            
                                                           
                    console.log("[DONE:XHR_GET_PNG]");                   
                    o_k_yes(  xhr_ask );                                      
                };;};;                                     
                                                           
            });; return( o_promise );                      
        };;
    //:==================================:HOTEL13_XML_GET://
    //:HOTEL13_XML_POST:=================================://

        const   F_HOTEL13_XHR_POST = function                   
        PRIVATE_F_HOTEL13_XHR_POST(                                          
            i_urlpath  /** @urlpath@  **/   
        ,   i_payload  /** @payload@  **/
        ){                                                 
            var o_promise = new Promise( function          
            EXECUTO_F_HOTEL13_XHR_POST(                    
                o_k_yes                                    
            ,   wontsay                                    
            ){                                                                                     
                var emp , urlfull , xhr_ask ;              
                                                           
                    emp = "" ; /**EmptyString**/           
                urlfull = "[REQUEST_URL_NOT_SET]" ;        
                                                           
                if( "/" != i_urlpath[ 0 ] ){               
                                                           
                    urlfull = d_url + "/" + i_urlpath ;    
                }else{                                     
                    urlfull = d_url + emp + i_urlpath ;    
                };;                                        
                                                           
                xhr_ask = new XMLHttpRequest();            
                xhr_ask.open( "POST" , urlfull );   

                //:create_png_filename:------------------://

                    d_pngname =( F_HOTEL13_XYZ_PNGNAME( 

                        d_hotel13_wmc_i_x    //: wmc.i_x ://
                    ,   d_hotel13_wmc_i_y    //: wmc.i_y ://
                    ,   d_hotel13_wmc_i_z    //: wmc.i_z ://
                    ));;
                //:------------------:create_png_filename://
                //:#set_request_header#:-----------------://

                    xhr_ask.setRequestHeader(

                        "nsh_pngname" //:@nsh_pngname@://
                    ,    d_pngname
                    );;
                //:-----------------:#set_request_header#://        
    
                xhr_ask.send( i_payload );   
                         
                xhr_ask.onreadystatechange=(evt_xhr)=>{    
                if( xhr_ask.readyState === 4 ){            
                                                           
                    console.log("DONE");                   
                    o_k_yes( xhr_ask.responseText );       
                                                           
                };;};;                                     
                                                           
            });; return( o_promise );                      
        };;                                                

    //:=================================:HOTEL13_XML_POST://
    //:HOTEL13_CLIENT_SIDE_TODO_LIST:====================://    
    if( d_hotel13_notnode >= 1 ){

        console.log( "[HOTEL13_SAYS:isnt_node_js_env]" );
    
        let w_a =( window.alert );
    
        w_a( "[Heroku_Endpoint_For_Save_Load]"          );
        w_a( "[ d_fps ==> c_fps ]"                      );
        w_a( "[#_TILE_EXTRA_BITS_RENDER_#]"             );
        w_a( "[TODO:FLAME_TRIP_ADJUSTMENT]"             );
        w_a( "[TRIPPED_BOMBS_MUST_ANIMATE_FIRST]"       );
        w_a( "[Create OBE : fractal_OBliteratE_Tile]"   );
        w_a( "[make laser propegantion _DET func 1st]"  );
    };;
    //:====================:HOTEL13_CLIENT_SIDE_TODO_LIST://
    //:000_3RD:UPNG_LIB:=================================://
    //:                                                  ://
    //: WEB_URL : github.com/photopea/UPNG.js            ://
    //: SSH_URL : git@github.com:photopea/UPNG.js.git    ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

/////////////////////////////////////////////////////////////////////////////////////////////



var UZIP = {};
if(typeof module == "object") module.exports = UZIP;


UZIP["parse"] = function(buf, onlyNames)	// ArrayBuffer
{
	var rUs = UZIP.bin.readUshort, rUi = UZIP.bin.readUint, o = 0, out = {};
	var data = new Uint8Array(buf);
	var eocd = data.length-4;
	
	while(rUi(data, eocd)!=0x06054b50) eocd--;
	
	var o = eocd;
	o+=4;	// sign  = 0x06054b50
	o+=4;  // disks = 0;
	var cnu = rUs(data, o);  o+=2;
	var cnt = rUs(data, o);  o+=2;
			
	var csize = rUi(data, o);  o+=4;
	var coffs = rUi(data, o);  o+=4;
	
	o = coffs;
	for(var i=0; i<cnu; i++)
	{
		var sign = rUi(data, o);  o+=4;
		o += 4;  // versions;
		o += 4;  // flag + compr
		o += 4;  // time
		
		var crc32 = rUi(data, o);  o+=4;
		var csize = rUi(data, o);  o+=4;
		var usize = rUi(data, o);  o+=4;
		
		var nl = rUs(data, o), el = rUs(data, o+2), cl = rUs(data, o+4);  o += 6;  // name, extra, comment
		o += 8;  // disk, attribs
		
		var roff = rUi(data, o);  o+=4;
		o += nl + el + cl;
		
		UZIP._readLocal(data, roff, out, csize, usize, onlyNames);
	}
	//console.log(out);
	return out;
}

UZIP._readLocal = function(data, o, out, csize, usize, onlyNames)
{
	var rUs = UZIP.bin.readUshort, rUi = UZIP.bin.readUint;
	var sign  = rUi(data, o);  o+=4;
	var ver   = rUs(data, o);  o+=2;
	var gpflg = rUs(data, o);  o+=2;
	//if((gpflg&8)!=0) throw "unknown sizes";
	var cmpr  = rUs(data, o);  o+=2;
	
	var time  = rUi(data, o);  o+=4;
	
	var crc32 = rUi(data, o);  o+=4;
	//var csize = rUi(data, o);  o+=4;
	//var usize = rUi(data, o);  o+=4;
	o+=8;
		
	var nlen  = rUs(data, o);  o+=2;
	var elen  = rUs(data, o);  o+=2;
		
	var name =  UZIP.bin.readUTF8(data, o, nlen);  o+=nlen;  //console.log(name);
	o += elen;
			
	//console.log(sign.toString(16), ver, gpflg, cmpr, crc32.toString(16), "csize, usize", csize, usize, nlen, elen, name, o);
	if(onlyNames) {  out[name]={size:usize, csize:csize};  return;  }   
	var file = new Uint8Array(data.buffer, o);
	if(false) {}
	else if(cmpr==0) out[name] = new Uint8Array(file.buffer.slice(o, o+csize));
	else if(cmpr==8) {
		var buf = new Uint8Array(usize);  UZIP.inflateRaw(file, buf);
		/*var nbuf = pako["inflateRaw"](file);
		if(usize>8514000) {
			//console.log(PUtils.readASCII(buf , 8514500, 500));
			//console.log(PUtils.readASCII(nbuf, 8514500, 500));
		}
		for(var i=0; i<buf.length; i++) if(buf[i]!=nbuf[i]) {  console.log(buf.length, nbuf.length, usize, i);  throw "e";  }
		*/
		out[name] = buf;
	}
	else throw "unknown compression method: "+cmpr;
}

UZIP.inflateRaw = function(file, buf) {  return UZIP.F.inflate(file, buf);  }
UZIP.inflate    = function(file, buf) { 
	var CMF = file[0], FLG = file[1];
	var CM = (CMF&15), CINFO = (CMF>>>4);
	//console.log(CM, CINFO,CMF,FLG);
	return UZIP.inflateRaw(new Uint8Array(file.buffer, file.byteOffset+2, file.length-6), buf);  
}
UZIP.deflate    = function(data, opts/*, buf, off*/) {
	if(opts==null) opts={level:6};
	var off=0, buf=new Uint8Array(50+Math.floor(data.length*1.1));
	buf[off]=120;  buf[off+1]=156;  off+=2;
	off = UZIP.F.deflateRaw(data, buf, off, opts.level);
	var crc = UZIP.adler(data, 0, data.length);
	buf[off+0]=((crc>>>24)&255); 
	buf[off+1]=((crc>>>16)&255); 
	buf[off+2]=((crc>>> 8)&255); 
	buf[off+3]=((crc>>> 0)&255); 	
	return new Uint8Array(buf.buffer, 0, off+4);
}
UZIP.deflateRaw = function(data, opts) {
	if(opts==null) opts={level:6};
	var buf=new Uint8Array(50+Math.floor(data.length*1.1));
	var off = UZIP.F.deflateRaw(data, buf, off, opts.level);
	return new Uint8Array(buf.buffer, 0, off);
}


UZIP.encode = function(obj, noCmpr) {
	if(noCmpr==null) noCmpr=false;
	var tot = 0, wUi = UZIP.bin.writeUint, wUs = UZIP.bin.writeUshort;
	var zpd = {};
	for(var p in obj) {  var cpr = !UZIP._noNeed(p) && !noCmpr, buf = obj[p], crc = UZIP.crc.crc(buf,0,buf.length); 
		zpd[p] = {  cpr:cpr, usize:buf.length, crc:crc, file: (cpr ? UZIP.deflateRaw(buf) : buf)  };  }
	
	for(var p in zpd) tot += zpd[p].file.length + 30 + 46 + 2*UZIP.bin.sizeUTF8(p);
	tot +=  22;
	
	var data = new Uint8Array(tot), o = 0;
	var fof = []
	
	for(var p in zpd) {
		var file = zpd[p];  fof.push(o);
		o = UZIP._writeHeader(data, o, p, file, 0);
	}
	var i=0, ioff = o;
	for(var p in zpd) {
		var file = zpd[p];  fof.push(o);
		o = UZIP._writeHeader(data, o, p, file, 1, fof[i++]);		
	}
	var csize = o-ioff;
	
	wUi(data, o, 0x06054b50);  o+=4;
	o += 4;  // disks
	wUs(data, o, i);  o += 2;
	wUs(data, o, i);  o += 2;	// number of c d records
	wUi(data, o, csize);  o += 4;
	wUi(data, o, ioff );  o += 4;
	o += 2;
	return data.buffer;
}
// no need to compress .PNG, .ZIP, .JPEG ....
UZIP._noNeed = function(fn) {  var ext = fn.split(".").pop().toLowerCase();  return "png,jpg,jpeg,zip".indexOf(ext)!=-1;  }

UZIP._writeHeader = function(data, o, p, obj, t, roff)
{
	var wUi = UZIP.bin.writeUint, wUs = UZIP.bin.writeUshort;
	var file = obj.file;
	
	wUi(data, o, t==0 ? 0x04034b50 : 0x02014b50);  o+=4; // sign
	if(t==1) o+=2;  // ver made by
	wUs(data, o, 20);  o+=2;	// ver
	wUs(data, o,  0);  o+=2;    // gflip
	wUs(data, o,  obj.cpr?8:0);  o+=2;	// cmpr
		
	wUi(data, o,  0);  o+=4;	// time		
	wUi(data, o, obj.crc);  o+=4;	// crc32
	wUi(data, o, file.length);  o+=4;	// csize
	wUi(data, o, obj.usize);  o+=4;	// usize
		
	wUs(data, o, UZIP.bin.sizeUTF8(p));  o+=2;	// nlen
	wUs(data, o, 0);  o+=2;	// elen
	
	if(t==1) {
		o += 2;  // comment length
		o += 2;  // disk number
		o += 6;  // attributes
		wUi(data, o, roff);  o+=4;	// usize
	}
	var nlen = UZIP.bin.writeUTF8(data, o, p);  o+= nlen;	
	if(t==0) {  data.set(file, o);  o += file.length;  }
	return o;
}





UZIP.crc = {
	table : ( function() {
	   var tab = new Uint32Array(256);
	   for (var n=0; n<256; n++) {
			var c = n;
			for (var k=0; k<8; k++) {
				if (c & 1)  c = 0xedb88320 ^ (c >>> 1);
				else        c = c >>> 1;
			}
			tab[n] = c;  }    
		return tab;  })(),
	update : function(c, buf, off, len) {
		for (var i=0; i<len; i++)  c = UZIP.crc.table[(c ^ buf[off+i]) & 0xff] ^ (c >>> 8);
		return c;
	},
	crc : function(b,o,l)  {  return UZIP.crc.update(0xffffffff,b,o,l) ^ 0xffffffff;  }
}
UZIP.adler = function(data,o,len) {
	var a = 1, b = 0;
	var off = o, end=o+len;
	while(off<end) {
		var eend = Math.min(off+5552, end);
		while(off<eend) {
			a += data[off++];
			b += a;
		}
		a=a%65521;
		b=b%65521;
	}
    return (b << 16) | a;
}

UZIP.bin = {
	readUshort : function(buff,p)  {  return (buff[p]) | (buff[p+1]<<8);  },
	writeUshort: function(buff,p,n){  buff[p] = (n)&255;  buff[p+1] = (n>>8)&255;  },
	readUint   : function(buff,p)  {  return (buff[p+3]*(256*256*256)) + ((buff[p+2]<<16) | (buff[p+1]<< 8) | buff[p]);  },
	writeUint  : function(buff,p,n){  buff[p]=n&255;  buff[p+1]=(n>>8)&255;  buff[p+2]=(n>>16)&255;  buff[p+3]=(n>>24)&255;  },
	readASCII  : function(buff,p,l){  var s = "";  for(var i=0; i<l; i++) s += String.fromCharCode(buff[p+i]);  return s;    },
	writeASCII : function(data,p,s){  for(var i=0; i<s.length; i++) data[p+i] = s.charCodeAt(i);  },
	pad : function(n) { return n.length < 2 ? "0" + n : n; },
	readUTF8 : function(buff, p, l) {
		var s = "", ns;
		for(var i=0; i<l; i++) s += "%" + UZIP.bin.pad(buff[p+i].toString(16));
		try {  ns = decodeURIComponent(s); }
		catch(e) {  return UZIP.bin.readASCII(buff, p, l);  }
		return  ns;
	},
	writeUTF8 : function(buff, p, str) {
		var strl = str.length, i=0;
		for(var ci=0; ci<strl; ci++)
		{
			var code = str.charCodeAt(ci);
			if     ((code&(0xffffffff-(1<< 7)+1))==0) {  buff[p+i] = (     code     );  i++;  }
			else if((code&(0xffffffff-(1<<11)+1))==0) {  buff[p+i] = (192|(code>> 6));  buff[p+i+1] = (128|((code>> 0)&63));  i+=2;  }
			else if((code&(0xffffffff-(1<<16)+1))==0) {  buff[p+i] = (224|(code>>12));  buff[p+i+1] = (128|((code>> 6)&63));  buff[p+i+2] = (128|((code>>0)&63));  i+=3;  }
			else if((code&(0xffffffff-(1<<21)+1))==0) {  buff[p+i] = (240|(code>>18));  buff[p+i+1] = (128|((code>>12)&63));  buff[p+i+2] = (128|((code>>6)&63));  buff[p+i+3] = (128|((code>>0)&63)); i+=4;  }
			else throw "e";
		}
		return i;
	},
	sizeUTF8 : function(str) {
		var strl = str.length, i=0;
		for(var ci=0; ci<strl; ci++)
		{
			var code = str.charCodeAt(ci);
			if     ((code&(0xffffffff-(1<< 7)+1))==0) {  i++ ;  }
			else if((code&(0xffffffff-(1<<11)+1))==0) {  i+=2;  }
			else if((code&(0xffffffff-(1<<16)+1))==0) {  i+=3;  }
			else if((code&(0xffffffff-(1<<21)+1))==0) {  i+=4;  }
			else throw "e";
		}
		return i;
	}
}





UZIP.F = {};

UZIP.F.deflateRaw = function(data, out, opos, lvl) {	
	var opts = [
	/*
		 ush good_length; /* reduce lazy search above this match length 
		 ush max_lazy;    /* do not perform lazy search above this match length 
         ush nice_length; /* quit search above this match length 
	*/
	/*      good lazy nice chain */
	/* 0 */ [ 0,   0,   0,    0,0],  /* store only */
	/* 1 */ [ 4,   4,   8,    4,0], /* max speed, no lazy matches */
	/* 2 */ [ 4,   5,  16,    8,0],
	/* 3 */ [ 4,   6,  16,   16,0],

	/* 4 */ [ 4,  10,  16,   32,0],  /* lazy matches */
	/* 5 */ [ 8,  16,  32,   32,0],
	/* 6 */ [ 8,  16, 128,  128,0],
	/* 7 */ [ 8,  32, 128,  256,0],
	/* 8 */ [32, 128, 258, 1024,1],
	/* 9 */ [32, 258, 258, 4096,1]]; /* max compression */
	
	var opt = opts[lvl];
	
	
	var U = UZIP.F.U, goodIndex = UZIP.F._goodIndex, hash = UZIP.F._hash, putsE = UZIP.F._putsE;
	var i = 0, pos = opos<<3, cvrd = 0, dlen = data.length;
	
	if(lvl==0) {
		while(i<dlen) {   var len = Math.min(0xffff, dlen-i);
			putsE(out, pos, (i+len==dlen ? 1 : 0));  pos = UZIP.F._copyExact(data, i, len, out, pos+8);  i += len;  }
		return pos>>>3;
	}

	var lits = U.lits, strt=U.strt, prev=U.prev, li=0, lc=0, bs=0, ebits=0, c=0, nc=0;  // last_item, literal_count, block_start
	if(dlen>2) {  nc=UZIP.F._hash(data,0);  strt[nc]=0;  }
	var nmch=0,nmci=0;
	
	for(i=0; i<dlen; i++)  {
		c = nc;
		//*
		if(i+1<dlen-2) {
			nc = UZIP.F._hash(data, i+1);
			var ii = ((i+1)&0x7fff);
			prev[ii]=strt[nc];
			strt[nc]=ii;
		} //*/
		if(cvrd<=i) {
			if((li>14000 || lc>26697) && (dlen-i)>100) {
				if(cvrd<i) {  lits[li]=i-cvrd;  li+=2;  cvrd=i;  }
				pos = UZIP.F._writeBlock(((i==dlen-1) || (cvrd==dlen))?1:0, lits, li, ebits, data,bs,i-bs, out, pos);  li=lc=ebits=0;  bs=i;
			}
			
			var mch = 0;
			//if(nmci==i) mch= nmch;  else 
			if(i<dlen-2) mch = UZIP.F._bestMatch(data, i, prev, c, Math.min(opt[2],dlen-i), opt[3]);
			/*
			if(mch!=0 && opt[4]==1 && (mch>>>16)<opt[1] && i+1<dlen-2) {
				nmch = UZIP.F._bestMatch(data, i+1, prev, nc, opt[2], opt[3]);  nmci=i+1;
				//var mch2 = UZIP.F._bestMatch(data, i+2, prev, nnc);  //nmci=i+1;
				if((nmch>>>16)>(mch>>>16)) mch=0;
			}//*/
			var len = mch>>>16, dst = mch&0xffff;  //if(i-dst<0) throw "e";
			if(mch!=0) { 
				var len = mch>>>16, dst = mch&0xffff;  //if(i-dst<0) throw "e";
				var lgi = goodIndex(len, U.of0);  U.lhst[257+lgi]++; 
				var dgi = goodIndex(dst, U.df0);  U.dhst[    dgi]++;  ebits += U.exb[lgi] + U.dxb[dgi]; 
				lits[li] = (len<<23)|(i-cvrd);  lits[li+1] = (dst<<16)|(lgi<<8)|dgi;  li+=2;
				cvrd = i + len;  
			}
			else {	U.lhst[data[i]]++;  }
			lc++;
		}
	}
	if(bs!=i || data.length==0) {
		if(cvrd<i) {  lits[li]=i-cvrd;  li+=2;  cvrd=i;  }
		pos = UZIP.F._writeBlock(1, lits, li, ebits, data,bs,i-bs, out, pos);  li=0;  lc=0;  li=lc=ebits=0;  bs=i;
	}
	while((pos&7)!=0) pos++;
	return pos>>>3;
}
UZIP.F._bestMatch = function(data, i, prev, c, nice, chain) {
	var ci = (i&0x7fff), pi=prev[ci];  
	//console.log("----", i);
	var dif = ((ci-pi + (1<<15)) & 0x7fff);  if(pi==ci || c!=UZIP.F._hash(data,i-dif)) return 0;
	var tl=0, td=0;  // top length, top distance
	var dlim = Math.min(0x7fff, i);
	while(dif<=dlim && --chain!=0 && pi!=ci /*&& c==UZIP.F._hash(data,i-dif)*/) {
		if(tl==0 || (data[i+tl]==data[i+tl-dif])) {
			var cl = UZIP.F._howLong(data, i, dif);
			if(cl>tl) {  
				tl=cl;  td=dif;  if(tl>=nice) break;    //* 
				if(dif+2<cl) cl = dif+2;
				var maxd = 0; // pi does not point to the start of the word
				for(var j=0; j<cl-2; j++) {
					var ei =  (i-dif+j+ (1<<15)) & 0x7fff;
					var li = prev[ei];
					var curd = (ei-li + (1<<15)) & 0x7fff;
					if(curd>maxd) {  maxd=curd;  pi = ei; }
				}  //*/
			}
		}
		
		ci=pi;  pi = prev[ci];
		dif += ((ci-pi + (1<<15)) & 0x7fff);
	}
	return (tl<<16)|td;
}
UZIP.F._howLong = function(data, i, dif) {
	if(data[i]!=data[i-dif] || data[i+1]!=data[i+1-dif] || data[i+2]!=data[i+2-dif]) return 0;
	var oi=i, l = Math.min(data.length, i+258);  i+=3;
	//while(i+4<l && data[i]==data[i-dif] && data[i+1]==data[i+1-dif] && data[i+2]==data[i+2-dif] && data[i+3]==data[i+3-dif]) i+=4;
	while(i<l && data[i]==data[i-dif]) i++;
	return i-oi;
}
UZIP.F._hash = function(data, i) {
	return (((data[i]<<8) | data[i+1])+(data[i+2]<<4))&0xffff;
	//var hash_shift = 0, hash_mask = 255;
	//var h = data[i+1] % 251;
	//h = (((h << 8) + data[i+2]) % 251);
	//h = (((h << 8) + data[i+2]) % 251);
	//h = ((h<<hash_shift) ^ (c) ) & hash_mask;
	//return h | (data[i]<<8);
	//return (data[i] | (data[i+1]<<8));
}
//UZIP.___toth = 0;
UZIP.saved = 0;
UZIP.F._writeBlock = function(BFINAL, lits, li, ebits, data,o0,l0, out, pos) {
	var U = UZIP.F.U, putsF = UZIP.F._putsF, putsE = UZIP.F._putsE;
	
	//*
	var T, ML, MD, MH, numl, numd, numh, lset, dset;  U.lhst[256]++;
	T = UZIP.F.getTrees(); ML=T[0]; MD=T[1]; MH=T[2]; numl=T[3]; numd=T[4]; numh=T[5]; lset=T[6]; dset=T[7];
	
	var cstSize = (((pos+3)&7)==0 ? 0 : 8-((pos+3)&7)) + 32 + (l0<<3);
	var fxdSize = ebits + UZIP.F.contSize(U.fltree, U.lhst) + UZIP.F.contSize(U.fdtree, U.dhst);
	var dynSize = ebits + UZIP.F.contSize(U.ltree , U.lhst) + UZIP.F.contSize(U.dtree , U.dhst);
	dynSize    += 14 + 3*numh + UZIP.F.contSize(U.itree, U.ihst) + (U.ihst[16]*2 + U.ihst[17]*3 + U.ihst[18]*7);
	
	for(var j=0; j<286; j++) U.lhst[j]=0;   for(var j=0; j<30; j++) U.dhst[j]=0;   for(var j=0; j<19; j++) U.ihst[j]=0;
	//*/
	var BTYPE = (cstSize<fxdSize && cstSize<dynSize) ? 0 : ( fxdSize<dynSize ? 1 : 2 );
	putsF(out, pos, BFINAL);  putsF(out, pos+1, BTYPE);  pos+=3;
	
	var opos = pos;
	if(BTYPE==0) {
		while((pos&7)!=0) pos++;
		pos = UZIP.F._copyExact(data, o0, l0, out, pos);
	}
	else {
		var ltree, dtree;
		if(BTYPE==1) {  ltree=U.fltree;  dtree=U.fdtree;  }
		if(BTYPE==2) {	
			UZIP.F.makeCodes(U.ltree, ML);  UZIP.F.revCodes(U.ltree, ML);
			UZIP.F.makeCodes(U.dtree, MD);  UZIP.F.revCodes(U.dtree, MD);
			UZIP.F.makeCodes(U.itree, MH);  UZIP.F.revCodes(U.itree, MH);
			
			ltree = U.ltree;  dtree = U.dtree;
			
			putsE(out, pos,numl-257);  pos+=5;  // 286
			putsE(out, pos,numd-  1);  pos+=5;  // 30
			putsE(out, pos,numh-  4);  pos+=4;  // 19
			
			for(var i=0; i<numh; i++) putsE(out, pos+i*3, U.itree[(U.ordr[i]<<1)+1]);   pos+=3* numh;
			pos = UZIP.F._codeTiny(lset, U.itree, out, pos);
			pos = UZIP.F._codeTiny(dset, U.itree, out, pos);
		}
		
		var off=o0;
		for(var si=0; si<li; si+=2) {
			var qb=lits[si], len=(qb>>>23), end = off+(qb&((1<<23)-1));
			while(off<end) pos = UZIP.F._writeLit(data[off++], ltree, out, pos);
			
			if(len!=0) {
				var qc = lits[si+1], dst=(qc>>16), lgi=(qc>>8)&255, dgi=(qc&255);
				pos = UZIP.F._writeLit(257+lgi, ltree, out, pos);
				putsE(out, pos, len-U.of0[lgi]);  pos+=U.exb[lgi];
				
				pos = UZIP.F._writeLit(dgi, dtree, out, pos);
				putsF(out, pos, dst-U.df0[dgi]);  pos+=U.dxb[dgi];  off+=len;
			}
		}
		pos = UZIP.F._writeLit(256, ltree, out, pos);
	}
	//console.log(pos-opos, fxdSize, dynSize, cstSize);
	return pos;
}
UZIP.F._copyExact = function(data,off,len,out,pos) {
	var p8 = (pos>>>3);
	out[p8]=(len);  out[p8+1]=(len>>>8);  out[p8+2]=255-out[p8];  out[p8+3]=255-out[p8+1];  p8+=4;
	out.set(new Uint8Array(data.buffer, off, len), p8);
	//for(var i=0; i<len; i++) out[p8+i]=data[off+i];
	return pos + ((len+4)<<3);
}
/*
	Interesting facts:
	- decompressed block can have bytes, which do not occur in a Huffman tree (copied from the previous block by reference)
*/

UZIP.F.getTrees = function() {
	var U = UZIP.F.U;
	var ML = UZIP.F._hufTree(U.lhst, U.ltree, 15);
	var MD = UZIP.F._hufTree(U.dhst, U.dtree, 15);
	var lset = [], numl = UZIP.F._lenCodes(U.ltree, lset);
	var dset = [], numd = UZIP.F._lenCodes(U.dtree, dset);
	for(var i=0; i<lset.length; i+=2) U.ihst[lset[i]]++;
	for(var i=0; i<dset.length; i+=2) U.ihst[dset[i]]++;
	var MH = UZIP.F._hufTree(U.ihst, U.itree,  7);
	var numh = 19;  while(numh>4 && U.itree[(U.ordr[numh-1]<<1)+1]==0) numh--;
	return [ML, MD, MH, numl, numd, numh, lset, dset];
}
UZIP.F.getSecond= function(a) {  var b=[];  for(var i=0; i<a.length; i+=2) b.push  (a[i+1]);  return b;  }
UZIP.F.nonZero  = function(a) {  var b= "";  for(var i=0; i<a.length; i+=2) if(a[i+1]!=0)b+=(i>>1)+",";  return b;  }
UZIP.F.contSize = function(tree, hst) {  var s=0;  for(var i=0; i<hst.length; i++) s+= hst[i]*tree[(i<<1)+1];  return s;  }
UZIP.F._codeTiny = function(set, tree, out, pos) {
	for(var i=0; i<set.length; i+=2) {
		var l = set[i], rst = set[i+1];  //console.log(l, pos, tree[(l<<1)+1]);
		pos = UZIP.F._writeLit(l, tree, out, pos);
		var rsl = l==16 ? 2 : (l==17 ? 3 : 7);
		if(l>15) {  UZIP.F._putsE(out, pos, rst, rsl);  pos+=rsl;  }
	}
	return pos;
}
UZIP.F._lenCodes = function(tree, set) {
	var len=tree.length;  while(len!=2 && tree[len-1]==0) len-=2;  // when no distances, keep one code with length 0
	for(var i=0; i<len; i+=2) {
		var l = tree[i+1], nxt = (i+3<len ? tree[i+3]:-1),  nnxt = (i+5<len ? tree[i+5]:-1),  prv = (i==0 ? -1 : tree[i-1]);
		if(l==0 && nxt==l && nnxt==l) {
			var lz = i+5;
			while(lz+2<len && tree[lz+2]==l) lz+=2;
			var zc = Math.min((lz+1-i)>>>1, 138);
			if(zc<11) set.push(17, zc-3);
			else set.push(18, zc-11);
			i += zc*2-2;
		}
		else if(l==prv && nxt==l && nnxt==l) {
			var lz = i+5;
			while(lz+2<len && tree[lz+2]==l) lz+=2;
			var zc = Math.min((lz+1-i)>>>1, 6);
			set.push(16, zc-3);
			i += zc*2-2;
		}
		else set.push(l, 0);
	}
	return len>>>1;
}
UZIP.F._hufTree   = function(hst, tree, MAXL) {
	var list=[], hl = hst.length, tl=tree.length, i=0;
	for(i=0; i<tl; i+=2) {  tree[i]=0;  tree[i+1]=0;  }	
	for(i=0; i<hl; i++) if(hst[i]!=0) list.push({lit:i, f:hst[i]});
	var end = list.length, l2=list.slice(0);
	if(end==0) return 0;  // empty histogram (usually for dist)
	if(end==1) {  var lit=list[0].lit, l2=lit==0?1:0;  tree[(lit<<1)+1]=1;  tree[(l2<<1)+1]=1;  return 1;  }
	list.sort(function(a,b){return a.f-b.f;});
	var a=list[0], b=list[1], i0=0, i1=1, i2=2;  list[0]={lit:-1,f:a.f+b.f,l:a,r:b,d:0};
	while(i1!=end-1) {
		if(i0!=i1 && (i2==end || list[i0].f<list[i2].f)) {  a=list[i0++];  }  else {  a=list[i2++];  }
		if(i0!=i1 && (i2==end || list[i0].f<list[i2].f)) {  b=list[i0++];  }  else {  b=list[i2++];  }
		list[i1++]={lit:-1,f:a.f+b.f, l:a,r:b};
	}
	var maxl = UZIP.F.setDepth(list[i1-1], 0);
	if(maxl>MAXL) {  UZIP.F.restrictDepth(l2, MAXL, maxl);  maxl = MAXL;  }
	for(i=0; i<end; i++) tree[(l2[i].lit<<1)+1]=l2[i].d;
	return maxl;
}

UZIP.F.setDepth  = function(t, d) {
	if(t.lit!=-1) {  t.d=d;  return d;  }
	return Math.max( UZIP.F.setDepth(t.l, d+1),  UZIP.F.setDepth(t.r, d+1) );
}

UZIP.F.restrictDepth = function(dps, MD, maxl) {
	var i=0, bCost=1<<(maxl-MD), dbt=0;
	dps.sort(function(a,b){return b.d==a.d ? a.f-b.f : b.d-a.d;});
	
	for(i=0; i<dps.length; i++) if(dps[i].d>MD) {  var od=dps[i].d;  dps[i].d=MD;  dbt+=bCost-(1<<(maxl-od));  }  else break;
	dbt = dbt>>>(maxl-MD);
	while(dbt>0) {  var od=dps[i].d;  if(od<MD) {  dps[i].d++;  dbt-=(1<<(MD-od-1));  }  else  i++;  }
	for(; i>=0; i--) if(dps[i].d==MD && dbt<0) {  dps[i].d--;  dbt++;  }  if(dbt!=0) console.log("debt left");
}

UZIP.F._goodIndex = function(v, arr) {
	var i=0;  if(arr[i|16]<=v) i|=16;  if(arr[i|8]<=v) i|=8;  if(arr[i|4]<=v) i|=4;  if(arr[i|2]<=v) i|=2;  if(arr[i|1]<=v) i|=1;  return i;
}
UZIP.F._writeLit = function(ch, ltree, out, pos) {
	UZIP.F._putsF(out, pos, ltree[ch<<1]);
	return pos+ltree[(ch<<1)+1];
}








UZIP.F.inflate = function(data, buf) {
	var u8=Uint8Array;
	if(data[0]==3 && data[1]==0) return (buf ? buf : new u8(0));
	var F=UZIP.F, bitsF = F._bitsF, bitsE = F._bitsE, decodeTiny = F._decodeTiny, makeCodes = F.makeCodes, codes2map=F.codes2map, get17 = F._get17;
	var U = F.U;
	
	var noBuf = (buf==null);
	if(noBuf) buf = new u8((data.length>>>2)<<3);
	
	var BFINAL=0, BTYPE=0, HLIT=0, HDIST=0, HCLEN=0, ML=0, MD=0; 	
	var off = 0, pos = 0;
	var lmap, dmap;
	
	while(BFINAL==0) {		
		BFINAL = bitsF(data, pos  , 1);
		BTYPE  = bitsF(data, pos+1, 2);  pos+=3;
		//console.log(BFINAL, BTYPE);
		
		if(BTYPE==0) {
			if((pos&7)!=0) pos+=8-(pos&7);
			var p8 = (pos>>>3)+4, len = data[p8-4]|(data[p8-3]<<8);  //console.log(len);//bitsF(data, pos, 16), 
			if(noBuf) buf=UZIP.F._check(buf, off+len);
			buf.set(new u8(data.buffer, data.byteOffset+p8, len), off);
			//for(var i=0; i<len; i++) buf[off+i] = data[p8+i];
			//for(var i=0; i<len; i++) if(buf[off+i] != data[p8+i]) throw "e";
			pos = ((p8+len)<<3);  off+=len;  continue;
		}
		if(noBuf) buf=UZIP.F._check(buf, off+(1<<17));  // really not enough in many cases (but PNG and ZIP provide buffer in advance)
		if(BTYPE==1) {  lmap = U.flmap;  dmap = U.fdmap;  ML = (1<<9)-1;  MD = (1<<5)-1;   }
		if(BTYPE==2) {
			HLIT  = bitsE(data, pos   , 5)+257;  
			HDIST = bitsE(data, pos+ 5, 5)+  1;  
			HCLEN = bitsE(data, pos+10, 4)+  4;  pos+=14;
			
			var ppos = pos;
			for(var i=0; i<38; i+=2) {  U.itree[i]=0;  U.itree[i+1]=0;  }
			var tl = 1;
			for(var i=0; i<HCLEN; i++) {  var l=bitsE(data, pos+i*3, 3);  U.itree[(U.ordr[i]<<1)+1] = l;  if(l>tl)tl=l;  }     pos+=3*HCLEN;  //console.log(itree);
			makeCodes(U.itree, tl);
			codes2map(U.itree, tl, U.imap);
			
			lmap = U.lmap;  dmap = U.dmap;
			
			pos = decodeTiny(U.imap, (1<<tl)-1, HLIT+HDIST, data, pos, U.ttree);
			var mx0 = F._copyOut(U.ttree,    0, HLIT , U.ltree);  ML = (1<<mx0)-1;
			var mx1 = F._copyOut(U.ttree, HLIT, HDIST, U.dtree);  MD = (1<<mx1)-1;
			
			//var ml = decodeTiny(U.imap, (1<<tl)-1, HLIT , data, pos, U.ltree); ML = (1<<(ml>>>24))-1;  pos+=(ml&0xffffff);
			makeCodes(U.ltree, mx0);
			codes2map(U.ltree, mx0, lmap);
			
			//var md = decodeTiny(U.imap, (1<<tl)-1, HDIST, data, pos, U.dtree); MD = (1<<(md>>>24))-1;  pos+=(md&0xffffff);
			makeCodes(U.dtree, mx1);
			codes2map(U.dtree, mx1, dmap);
		}
		//var ooff=off, opos=pos;
		while(true) {
			var code = lmap[get17(data, pos) & ML];  pos += code&15;
			var lit = code>>>4;  //U.lhst[lit]++;  
			if((lit>>>8)==0) {  buf[off++] = lit;  }
			else if(lit==256) {  break;  }
			else {
				var end = off+lit-254;
				if(lit>264) { var ebs = U.ldef[lit-257];  end = off + (ebs>>>3) + bitsE(data, pos, ebs&7);  pos += ebs&7;  }
				//UZIP.F.dst[end-off]++;
				
				var dcode = dmap[get17(data, pos) & MD];  pos += dcode&15;
				var dlit = dcode>>>4;
				var dbs = U.ddef[dlit], dst = (dbs>>>4) + bitsF(data, pos, dbs&15);  pos += dbs&15;
				
				//var o0 = off-dst, stp = Math.min(end-off, dst);
				//if(stp>20) while(off<end) {  buf.copyWithin(off, o0, o0+stp);  off+=stp;  }  else
				//if(end-dst<=off) buf.copyWithin(off, off-dst, end-dst);  else
				//if(dst==1) buf.fill(buf[off-1], off, end);  else
				if(noBuf) buf=UZIP.F._check(buf, off+(1<<17));
				while(off<end) {  buf[off]=buf[off++-dst];    buf[off]=buf[off++-dst];  buf[off]=buf[off++-dst];  buf[off]=buf[off++-dst];  }   
				off=end;
				//while(off!=end) {  buf[off]=buf[off++-dst];  }
			}
		}
		//console.log(off-ooff, (pos-opos)>>>3);
	}
	//console.log(UZIP.F.dst);
	//console.log(tlen, dlen, off-tlen+tcnt);
	return buf.length==off ? buf : buf.slice(0,off);
}
UZIP.F._check=function(buf, len) {
	var bl=buf.length;  if(len<=bl) return buf;
	var nbuf = new Uint8Array(Math.max(bl<<1,len));  nbuf.set(buf,0);
	//for(var i=0; i<bl; i+=4) {  nbuf[i]=buf[i];  nbuf[i+1]=buf[i+1];  nbuf[i+2]=buf[i+2];  nbuf[i+3]=buf[i+3];  }
	return nbuf;
}

UZIP.F._decodeTiny = function(lmap, LL, len, data, pos, tree) {
	var bitsE = UZIP.F._bitsE, get17 = UZIP.F._get17;
	var i = 0;
	while(i<len) {
		var code = lmap[get17(data, pos)&LL];  pos+=code&15;
		var lit = code>>>4; 
		if(lit<=15) {  tree[i]=lit;  i++;  }
		else {
			var ll = 0, n = 0;
			if(lit==16) {
				n = (3  + bitsE(data, pos, 2));  pos += 2;  ll = tree[i-1];
			}
			else if(lit==17) {
				n = (3  + bitsE(data, pos, 3));  pos += 3;
			}
			else if(lit==18) {
				n = (11 + bitsE(data, pos, 7));  pos += 7;
			}
			var ni = i+n;
			while(i<ni) {  tree[i]=ll;  i++; }
		}
	}
	return pos;
}
UZIP.F._copyOut = function(src, off, len, tree) {
	var mx=0, i=0, tl=tree.length>>>1;
	while(i<len) {  var v=src[i+off];  tree[(i<<1)]=0;  tree[(i<<1)+1]=v;  if(v>mx)mx=v;  i++;  }
	while(i<tl ) {  tree[(i<<1)]=0;  tree[(i<<1)+1]=0;  i++;  }
	return mx;
}

UZIP.F.makeCodes = function(tree, MAX_BITS) {  // code, length
	var U = UZIP.F.U;
	var max_code = tree.length;
	var code, bits, n, i, len;
	
	var bl_count = U.bl_count;  for(var i=0; i<=MAX_BITS; i++) bl_count[i]=0;
	for(i=1; i<max_code; i+=2) bl_count[tree[i]]++;
	
	var next_code = U.next_code;	// smallest code for each length
	
	code = 0;
	bl_count[0] = 0;
	for (bits = 1; bits <= MAX_BITS; bits++) {
		code = (code + bl_count[bits-1]) << 1;
		next_code[bits] = code;
	}
	
	for (n = 0; n < max_code; n+=2) {
		len = tree[n+1];
		if (len != 0) {
			tree[n] = next_code[len];
			next_code[len]++;
		}
	}
}
UZIP.F.codes2map = function(tree, MAX_BITS, map) {
	var max_code = tree.length;
	var U=UZIP.F.U, r15 = U.rev15;
	for(var i=0; i<max_code; i+=2) if(tree[i+1]!=0)  {
		var lit = i>>1;
		var cl = tree[i+1], val = (lit<<4)|cl; // :  (0x8000 | (U.of0[lit-257]<<7) | (U.exb[lit-257]<<4) | cl);
		var rest = (MAX_BITS-cl), i0 = tree[i]<<rest, i1 = i0 + (1<<rest);
		//tree[i]=r15[i0]>>>(15-MAX_BITS);
		while(i0!=i1) {
			var p0 = r15[i0]>>>(15-MAX_BITS);
			map[p0]=val;  i0++;
		}
	}
}
UZIP.F.revCodes = function(tree, MAX_BITS) {
	var r15 = UZIP.F.U.rev15, imb = 15-MAX_BITS;
	for(var i=0; i<tree.length; i+=2) {  var i0 = (tree[i]<<(MAX_BITS-tree[i+1]));  tree[i] = r15[i0]>>>imb;  }
}

// used only in deflate
UZIP.F._putsE= function(dt, pos, val   ) {  val = val<<(pos&7);  var o=(pos>>>3);  dt[o]|=val;  dt[o+1]|=(val>>>8);                        }
UZIP.F._putsF= function(dt, pos, val   ) {  val = val<<(pos&7);  var o=(pos>>>3);  dt[o]|=val;  dt[o+1]|=(val>>>8);  dt[o+2]|=(val>>>16);  }

UZIP.F._bitsE= function(dt, pos, length) {  return ((dt[pos>>>3] | (dt[(pos>>>3)+1]<<8)                        )>>>(pos&7))&((1<<length)-1);  }
UZIP.F._bitsF= function(dt, pos, length) {  return ((dt[pos>>>3] | (dt[(pos>>>3)+1]<<8) | (dt[(pos>>>3)+2]<<16))>>>(pos&7))&((1<<length)-1);  }
/*
UZIP.F._get9 = function(dt, pos) {
	return ((dt[pos>>>3] | (dt[(pos>>>3)+1]<<8))>>>(pos&7))&511;
} */
UZIP.F._get17= function(dt, pos) {	// return at least 17 meaningful bytes
	return (dt[pos>>>3] | (dt[(pos>>>3)+1]<<8) | (dt[(pos>>>3)+2]<<16) )>>>(pos&7);
}
UZIP.F._get25= function(dt, pos) {	// return at least 17 meaningful bytes
	return (dt[pos>>>3] | (dt[(pos>>>3)+1]<<8) | (dt[(pos>>>3)+2]<<16) | (dt[(pos>>>3)+3]<<24) )>>>(pos&7);
}
UZIP.F.U = function(){
	var u16=Uint16Array, u32=Uint32Array;
	return {
		next_code : new u16(16),
		bl_count  : new u16(16),
		ordr : [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ],
		of0  : [3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],
		exb  : [0,0,0,0,0,0,0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,  4,  5,  5,  5,  5,  0,  0,  0,  0],
		ldef : new u16(32),
		df0  : [1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577, 65535, 65535],
		dxb  : [0,0,0,0,1,1,2, 2, 3, 3, 4, 4, 5, 5,  6,  6,  7,  7,  8,  8,   9,   9,  10,  10,  11,  11,  12,   12,   13,   13,     0,     0],
		ddef : new u32(32),
		flmap: new u16(  512),  fltree: [],
		fdmap: new u16(   32),  fdtree: [],
		lmap : new u16(32768),  ltree : [],  ttree:[],
		dmap : new u16(32768),  dtree : [],
		imap : new u16(  512),  itree : [],
		//rev9 : new u16(  512)
		rev15: new u16(1<<15),
		lhst : new u32(286), dhst : new u32( 30), ihst : new u32(19),
		lits : new u32(15000),
		strt : new u16(1<<16),
		prev : new u16(1<<15)
	};  
} ();

(function(){	
	var U = UZIP.F.U;
	var len = 1<<15;
	for(var i=0; i<len; i++) {
		var x = i;
		x = (((x & 0xaaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));
		x = (((x & 0xcccccccc) >>> 2) | ((x & 0x33333333) << 2));
		x = (((x & 0xf0f0f0f0) >>> 4) | ((x & 0x0f0f0f0f) << 4));
		x = (((x & 0xff00ff00) >>> 8) | ((x & 0x00ff00ff) << 8));
		U.rev15[i] = (((x >>> 16) | (x << 16)))>>>17;
	}
	
	function pushV(tgt, n, sv) {  while(n--!=0) tgt.push(0,sv);  }
	
	for(var i=0; i<32; i++) {  U.ldef[i]=(U.of0[i]<<3)|U.exb[i];  U.ddef[i]=(U.df0[i]<<4)|U.dxb[i];  }
	
	pushV(U.fltree, 144, 8);  pushV(U.fltree, 255-143, 9);  pushV(U.fltree, 279-255, 7);  pushV(U.fltree,287-279,8);
	/*
	var i = 0;
	for(; i<=143; i++) U.fltree.push(0,8);
	for(; i<=255; i++) U.fltree.push(0,9);
	for(; i<=279; i++) U.fltree.push(0,7);
	for(; i<=287; i++) U.fltree.push(0,8);
	*/
	UZIP.F.makeCodes(U.fltree, 9);
	UZIP.F.codes2map(U.fltree, 9, U.flmap);
	UZIP.F.revCodes (U.fltree, 9)
	
	pushV(U.fdtree,32,5);
	//for(i=0;i<32; i++) U.fdtree.push(0,5);
	UZIP.F.makeCodes(U.fdtree, 5);
	UZIP.F.codes2map(U.fdtree, 5, U.fdmap);
	UZIP.F.revCodes (U.fdtree, 5)
	
	pushV(U.itree,19,0);  pushV(U.ltree,286,0);  pushV(U.dtree,30,0);  pushV(U.ttree,320,0);
	/*
	for(var i=0; i< 19; i++) U.itree.push(0,0);
	for(var i=0; i<286; i++) U.ltree.push(0,0);
	for(var i=0; i< 30; i++) U.dtree.push(0,0);
	for(var i=0; i<320; i++) U.ttree.push(0,0);
	*/
})()

/////////////////////////////////////////////////////////////////////////////////////////////

        var UPNG = {};

	

UPNG.toRGBA8 = function(out)
{
	var w = out.width, h = out.height;
	if(out.tabs.acTL==null) return [UPNG.toRGBA8.decodeImage(out.data, w, h, out).buffer];
	
	var frms = [];
	if(out.frames[0].data==null) out.frames[0].data = out.data;
	
	var len = w*h*4, img = new Uint8Array(len), empty = new Uint8Array(len), prev=new Uint8Array(len);
	for(var i=0; i<out.frames.length; i++)
	{
		var frm = out.frames[i];
		var fx=frm.rect.x, fy=frm.rect.y, fw = frm.rect.width, fh = frm.rect.height;
		var fdata = UPNG.toRGBA8.decodeImage(frm.data, fw,fh, out);
		
		if(i!=0) for(var j=0; j<len; j++) prev[j]=img[j];
		
		if     (frm.blend==0) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 0);
		else if(frm.blend==1) UPNG._copyTile(fdata, fw, fh, img, w, h, fx, fy, 1);
		
		frms.push(img.buffer.slice(0));
		
		if     (frm.dispose==0) {}
		else if(frm.dispose==1) UPNG._copyTile(empty, fw, fh, img, w, h, fx, fy, 0);
		else if(frm.dispose==2) for(var j=0; j<len; j++) img[j]=prev[j];
	}
	return frms;
}
UPNG.toRGBA8.decodeImage = function(data, w, h, out)
{
	var area = w*h, bpp = UPNG.decode._getBPP(out);
	var bpl = Math.ceil(w*bpp/8);	// bytes per line

	var bf = new Uint8Array(area*4), bf32 = new Uint32Array(bf.buffer);
	var ctype = out.ctype, depth = out.depth;
	var rs = UPNG._bin.readUshort;
	
	//console.log(ctype, depth);
	var time = Date.now();

	if     (ctype==6) { // RGB + alpha
		var qarea = area<<2;
		if(depth== 8) for(var i=0; i<qarea;i+=4) {  bf[i] = data[i];  bf[i+1] = data[i+1];  bf[i+2] = data[i+2];  bf[i+3] = data[i+3]; }
		if(depth==16) for(var i=0; i<qarea;i++ ) {  bf[i] = data[i<<1];  }
	}
	else if(ctype==2) {	// RGB
		var ts=out.tabs["tRNS"];
		if(ts==null) {
			if(depth== 8) for(var i=0; i<area; i++) {  var ti=i*3;  bf32[i] = (255<<24)|(data[ti+2]<<16)|(data[ti+1]<<8)|data[ti];  }
			if(depth==16) for(var i=0; i<area; i++) {  var ti=i*6;  bf32[i] = (255<<24)|(data[ti+4]<<16)|(data[ti+2]<<8)|data[ti];  }
		}
		else {  var tr=ts[0], tg=ts[1], tb=ts[2];
			if(depth== 8) for(var i=0; i<area; i++) {  var qi=i<<2, ti=i*3;  bf32[i] = (255<<24)|(data[ti+2]<<16)|(data[ti+1]<<8)|data[ti];
				if(data[ti]   ==tr && data[ti+1]   ==tg && data[ti+2]   ==tb) bf[qi+3] = 0;  }
			if(depth==16) for(var i=0; i<area; i++) {  var qi=i<<2, ti=i*6;  bf32[i] = (255<<24)|(data[ti+4]<<16)|(data[ti+2]<<8)|data[ti];
				if(rs(data,ti)==tr && rs(data,ti+2)==tg && rs(data,ti+4)==tb) bf[qi+3] = 0;  }
		}
	}
	else if(ctype==3) {	// palette
		var p=out.tabs["PLTE"], ap=out.tabs["tRNS"], tl=ap?ap.length:0;
		//console.log(p, ap);
		if(depth==1) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>3)]>>(7-((i&7)<<0)))& 1), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==2) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>2)]>>(6-((i&3)<<1)))& 3), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==4) for(var y=0; y<h; y++) {  var s0 = y*bpl, t0 = y*w;
			for(var i=0; i<w; i++) { var qi=(t0+i)<<2, j=((data[s0+(i>>1)]>>(4-((i&1)<<2)))&15), cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
		}
		if(depth==8) for(var i=0; i<area; i++ ) {  var qi=i<<2, j=data[i]                      , cj=3*j;  bf[qi]=p[cj];  bf[qi+1]=p[cj+1];  bf[qi+2]=p[cj+2];  bf[qi+3]=(j<tl)?ap[j]:255;  }
	}
	else if(ctype==4) {	// gray + alpha
		if(depth== 8)  for(var i=0; i<area; i++) {  var qi=i<<2, di=i<<1, gr=data[di];  bf[qi]=gr;  bf[qi+1]=gr;  bf[qi+2]=gr;  bf[qi+3]=data[di+1];  }
		if(depth==16)  for(var i=0; i<area; i++) {  var qi=i<<2, di=i<<2, gr=data[di];  bf[qi]=gr;  bf[qi+1]=gr;  bf[qi+2]=gr;  bf[qi+3]=data[di+2];  }
	}
	else if(ctype==0) {	// gray
		var tr = out.tabs["tRNS"] ? out.tabs["tRNS"] : -1;
		for(var y=0; y<h; y++) {
			var off = y*bpl, to = y*w;
			if     (depth== 1) for(var x=0; x<w; x++) {  var gr=255*((data[off+(x>>>3)]>>>(7 -((x&7)   )))& 1), al=(gr==tr*255)?0:255;  bf32[to+x]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
			else if(depth== 2) for(var x=0; x<w; x++) {  var gr= 85*((data[off+(x>>>2)]>>>(6 -((x&3)<<1)))& 3), al=(gr==tr* 85)?0:255;  bf32[to+x]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
			else if(depth== 4) for(var x=0; x<w; x++) {  var gr= 17*((data[off+(x>>>1)]>>>(4 -((x&1)<<2)))&15), al=(gr==tr* 17)?0:255;  bf32[to+x]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
			else if(depth== 8) for(var x=0; x<w; x++) {  var gr=data[off+     x], al=(gr                 ==tr)?0:255;  bf32[to+x]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
			else if(depth==16) for(var x=0; x<w; x++) {  var gr=data[off+(x<<1)], al=(rs(data,off+(x<<1))==tr)?0:255;  bf32[to+x]=(al<<24)|(gr<<16)|(gr<<8)|gr;  }
		}
	}
	//console.log(Date.now()-time);
	return bf;
}



UPNG.decode = function(buff)
{
	var data = new Uint8Array(buff), offset = 8, bin = UPNG._bin, rUs = bin.readUshort, rUi = bin.readUint;
	var out = {tabs:{}, frames:[]};
	var dd = new Uint8Array(data.length), doff = 0;	 // put all IDAT data into it
	var fd, foff = 0;	// frames
	
	var mgck = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
	for(var i=0; i<8; i++) if(data[i]!=mgck[i]) throw "The input is not a PNG file!";

	while(offset<data.length)
	{
		var len  = bin.readUint(data, offset);  offset += 4;
		var type = bin.readASCII(data, offset, 4);  offset += 4;
		//console.log(type,len);
		
		if     (type=="IHDR")  {  UPNG.decode._IHDR(data, offset, out);  }
		else if(type=="CgBI")  {  out.tabs[type] = data.slice(offset,offset+4);  }
		else if(type=="IDAT") {
			for(var i=0; i<len; i++) dd[doff+i] = data[offset+i];
			doff += len;
		}
		else if(type=="acTL")  {
			out.tabs[type] = {  num_frames:rUi(data, offset), num_plays:rUi(data, offset+4)  };
			fd = new Uint8Array(data.length);
		}
		else if(type=="fcTL")  {
			if(foff!=0) {  var fr = out.frames[out.frames.length-1];
				fr.data = UPNG.decode._decompress(out, fd.slice(0,foff), fr.rect.width, fr.rect.height);  foff=0;
			}
			var rct = {x:rUi(data, offset+12),y:rUi(data, offset+16),width:rUi(data, offset+4),height:rUi(data, offset+8)};
			var del = rUs(data, offset+22);  del = rUs(data, offset+20) / (del==0?100:del);
			var frm = {rect:rct, delay:Math.round(del*1000), dispose:data[offset+24], blend:data[offset+25]};
			//console.log(frm);
			out.frames.push(frm);
		}
		else if(type=="fdAT") {
			for(var i=0; i<len-4; i++) fd[foff+i] = data[offset+i+4];
			foff += len-4;
		}
		else if(type=="pHYs") {
			out.tabs[type] = [bin.readUint(data, offset), bin.readUint(data, offset+4), data[offset+8]];
		}
		else if(type=="cHRM") {
			out.tabs[type] = [];
			for(var i=0; i<8; i++) out.tabs[type].push(bin.readUint(data, offset+i*4));
		}
		else if(type=="tEXt" || type=="zTXt") {
			if(out.tabs[type]==null) out.tabs[type] = {};
			var nz = bin.nextZero(data, offset);
			var keyw = bin.readASCII(data, offset, nz-offset);
			var text, tl=offset+len-nz-1;
			if(type=="tEXt") text = bin.readASCII(data, nz+1, tl);
			else {
				var bfr = UPNG.decode._inflate(data.slice(nz+2,nz+2+tl));
				text = bin.readUTF8(bfr,0,bfr.length);
			}
			out.tabs[type][keyw] = text;
		}
		else if(type=="iTXt") {
			if(out.tabs[type]==null) out.tabs[type] = {};
			var nz = 0, off = offset;
			nz = bin.nextZero(data, off);
			var keyw = bin.readASCII(data, off, nz-off);  off = nz + 1;
			var cflag = data[off], cmeth = data[off+1];  off+=2;
			nz = bin.nextZero(data, off);
			var ltag = bin.readASCII(data, off, nz-off);  off = nz + 1;
			nz = bin.nextZero(data, off);
			var tkeyw = bin.readUTF8(data, off, nz-off);  off = nz + 1;
			var text, tl=len-(off-offset);
			if(cflag==0) text  = bin.readUTF8(data, off, tl);
			else {
				var bfr = UPNG.decode._inflate(data.slice(off,off+tl));
				text = bin.readUTF8(bfr,0,bfr.length);
			}
			out.tabs[type][keyw] = text;
		}
		else if(type=="PLTE") {
			out.tabs[type] = bin.readBytes(data, offset, len);
		}
		else if(type=="hIST") {
			var pl = out.tabs["PLTE"].length/3;
			out.tabs[type] = [];  for(var i=0; i<pl; i++) out.tabs[type].push(rUs(data, offset+i*2));
		}
		else if(type=="tRNS") {
			if     (out.ctype==3) out.tabs[type] = bin.readBytes(data, offset, len);
			else if(out.ctype==0) out.tabs[type] = rUs(data, offset);
			else if(out.ctype==2) out.tabs[type] = [ rUs(data,offset),rUs(data,offset+2),rUs(data,offset+4) ];
			//else console.log("tRNS for unsupported color type",out.ctype, len);
		}
		else if(type=="gAMA") out.tabs[type] = bin.readUint(data, offset)/100000;
		else if(type=="sRGB") out.tabs[type] = data[offset];
		else if(type=="bKGD")
		{
			if     (out.ctype==0 || out.ctype==4) out.tabs[type] = [rUs(data, offset)];
			else if(out.ctype==2 || out.ctype==6) out.tabs[type] = [rUs(data, offset), rUs(data, offset+2), rUs(data, offset+4)];
			else if(out.ctype==3) out.tabs[type] = data[offset];
		}
		else if(type=="IEND") {
			break;
		}
		//else {  console.log("unknown chunk type", type, len);  out.tabs[type]=data.slice(offset,offset+len);  }
		offset += len;
		var crc = bin.readUint(data, offset);  offset += 4;
	}
	if(foff!=0) {  var fr = out.frames[out.frames.length-1];
		fr.data = UPNG.decode._decompress(out, fd.slice(0,foff), fr.rect.width, fr.rect.height);
	}	
	out.data = UPNG.decode._decompress(out, dd, out.width, out.height);
	
	delete out.compress;  delete out.interlace;  delete out.filter;
	return out;
}

UPNG.decode._decompress = function(out, dd, w, h) {
	var time = Date.now();
	var bpp = UPNG.decode._getBPP(out), bpl = Math.ceil(w*bpp/8), buff = new Uint8Array((bpl+1+out.interlace)*h);
	if(out.tabs["CgBI"]) dd = UPNG.inflateRaw(dd,buff);
	else                 dd = UPNG.decode._inflate(dd,buff);
	//console.log(dd.length, buff.length);
	//console.log(Date.now()-time);

	var time=Date.now();
	if     (out.interlace==0) dd = UPNG.decode._filterZero(dd, out, 0, w, h);
	else if(out.interlace==1) dd = UPNG.decode._readInterlace(dd, out);
	//console.log(Date.now()-time);
	return dd;
}

UPNG.decode._inflate = function(data, buff) {  var out=UPNG["inflateRaw"](new Uint8Array(data.buffer, 2,data.length-6),buff);  return out;  }
UPNG.inflateRaw=function(){var H={};H.H={};H.H.N=function(N,W){var R=Uint8Array,i=0,m=0,J=0,h=0,Q=0,X=0,u=0,w=0,d=0,v,C;
if(N[0]==3&&N[1]==0)return W?W:new R(0);var V=H.H,n=V.b,A=V.e,l=V.R,M=V.n,I=V.A,e=V.Z,b=V.m,Z=W==null;
if(Z)W=new R(N.length>>>2<<5);while(i==0){i=n(N,d,1);m=n(N,d+1,2);d+=3;if(m==0){if((d&7)!=0)d+=8-(d&7);
var D=(d>>>3)+4,q=N[D-4]|N[D-3]<<8;if(Z)W=H.H.W(W,w+q);W.set(new R(N.buffer,N.byteOffset+D,q),w);d=D+q<<3;
w+=q;continue}if(Z)W=H.H.W(W,w+(1<<17));if(m==1){v=b.J;C=b.h;X=(1<<9)-1;u=(1<<5)-1}if(m==2){J=A(N,d,5)+257;
h=A(N,d+5,5)+1;Q=A(N,d+10,4)+4;d+=14;var E=d,j=1;for(var c=0;c<38;c+=2){b.Q[c]=0;b.Q[c+1]=0}for(var c=0;
c<Q;c++){var K=A(N,d+c*3,3);b.Q[(b.X[c]<<1)+1]=K;if(K>j)j=K}d+=3*Q;M(b.Q,j);I(b.Q,j,b.u);v=b.w;C=b.d;
d=l(b.u,(1<<j)-1,J+h,N,d,b.v);var r=V.V(b.v,0,J,b.C);X=(1<<r)-1;var S=V.V(b.v,J,h,b.D);u=(1<<S)-1;M(b.C,r);
I(b.C,r,v);M(b.D,S);I(b.D,S,C)}while(!0){var T=v[e(N,d)&X];d+=T&15;var p=T>>>4;if(p>>>8==0){W[w++]=p}else if(p==256){break}else{var z=w+p-254;
if(p>264){var _=b.q[p-257];z=w+(_>>>3)+A(N,d,_&7);d+=_&7}var $=C[e(N,d)&u];d+=$&15;var s=$>>>4,Y=b.c[s],a=(Y>>>4)+n(N,d,Y&15);
d+=Y&15;while(w<z){W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a];W[w]=W[w++-a]}w=z}}}return W.length==w?W:W.slice(0,w)};
H.H.W=function(N,W){var R=N.length;if(W<=R)return N;var V=new Uint8Array(R<<1);V.set(N,0);return V};
H.H.R=function(N,W,R,V,n,A){var l=H.H.e,M=H.H.Z,I=0;while(I<R){var e=N[M(V,n)&W];n+=e&15;var b=e>>>4;
if(b<=15){A[I]=b;I++}else{var Z=0,m=0;if(b==16){m=3+l(V,n,2);n+=2;Z=A[I-1]}else if(b==17){m=3+l(V,n,3);
n+=3}else if(b==18){m=11+l(V,n,7);n+=7}var J=I+m;while(I<J){A[I]=Z;I++}}}return n};H.H.V=function(N,W,R,V){var n=0,A=0,l=V.length>>>1;
while(A<R){var M=N[A+W];V[A<<1]=0;V[(A<<1)+1]=M;if(M>n)n=M;A++}while(A<l){V[A<<1]=0;V[(A<<1)+1]=0;A++}return n};
H.H.n=function(N,W){var R=H.H.m,V=N.length,n,A,l,M,I,e=R.j;for(var M=0;M<=W;M++)e[M]=0;for(M=1;M<V;M+=2)e[N[M]]++;
var b=R.K;n=0;e[0]=0;for(A=1;A<=W;A++){n=n+e[A-1]<<1;b[A]=n}for(l=0;l<V;l+=2){I=N[l+1];if(I!=0){N[l]=b[I];
b[I]++}}};H.H.A=function(N,W,R){var V=N.length,n=H.H.m,A=n.r;for(var l=0;l<V;l+=2)if(N[l+1]!=0){var M=l>>1,I=N[l+1],e=M<<4|I,b=W-I,Z=N[l]<<b,m=Z+(1<<b);
while(Z!=m){var J=A[Z]>>>15-W;R[J]=e;Z++}}};H.H.l=function(N,W){var R=H.H.m.r,V=15-W;for(var n=0;n<N.length;
n+=2){var A=N[n]<<W-N[n+1];N[n]=R[A]>>>V}};H.H.M=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8};
H.H.I=function(N,W,R){R=R<<(W&7);var V=W>>>3;N[V]|=R;N[V+1]|=R>>>8;N[V+2]|=R>>>16};H.H.e=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8)>>>(W&7)&(1<<R)-1};
H.H.b=function(N,W,R){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)&(1<<R)-1};H.H.Z=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16)>>>(W&7)};
H.H.i=function(N,W){return(N[W>>>3]|N[(W>>>3)+1]<<8|N[(W>>>3)+2]<<16|N[(W>>>3)+3]<<24)>>>(W&7)};H.H.m=function(){var N=Uint16Array,W=Uint32Array;
return{K:new N(16),j:new N(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new N(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new W(32),J:new N(512),_:[],h:new N(32),$:[],w:new N(32768),C:[],v:[],d:new N(32768),D:[],u:new N(512),Q:[],r:new N(1<<15),s:new W(286),Y:new W(30),a:new W(19),t:new W(15e3),k:new N(1<<16),g:new N(1<<15)}}();
(function(){var N=H.H.m,W=1<<15;for(var R=0;R<W;R++){var V=R;V=(V&2863311530)>>>1|(V&1431655765)<<1;
V=(V&3435973836)>>>2|(V&858993459)<<2;V=(V&4042322160)>>>4|(V&252645135)<<4;V=(V&4278255360)>>>8|(V&16711935)<<8;
N.r[R]=(V>>>16|V<<16)>>>17}function n(A,l,M){while(l--!=0)A.push(0,M)}for(var R=0;R<32;R++){N.q[R]=N.S[R]<<3|N.T[R];
N.c[R]=N.p[R]<<4|N.z[R]}n(N._,144,8);n(N._,255-143,9);n(N._,279-255,7);n(N._,287-279,8);H.H.n(N._,9);
H.H.A(N._,9,N.J);H.H.l(N._,9);n(N.$,32,5);H.H.n(N.$,5);H.H.A(N.$,5,N.h);H.H.l(N.$,5);n(N.Q,19,0);n(N.C,286,0);
n(N.D,30,0);n(N.v,320,0)}());return H.H.N}()


UPNG.decode._readInterlace = function(data, out)
{
	var w = out.width, h = out.height;
	var bpp = UPNG.decode._getBPP(out), cbpp = bpp>>3, bpl = Math.ceil(w*bpp/8);
	var img = new Uint8Array( h * bpl );
	var di = 0;

	var starting_row  = [ 0, 0, 4, 0, 2, 0, 1 ];
	var starting_col  = [ 0, 4, 0, 2, 0, 1, 0 ];
	var row_increment = [ 8, 8, 8, 4, 4, 2, 2 ];
	var col_increment = [ 8, 8, 4, 4, 2, 2, 1 ];

	var pass=0;
	while(pass<7)
	{
		var ri = row_increment[pass], ci = col_increment[pass];
		var sw = 0, sh = 0;
		var cr = starting_row[pass];  while(cr<h) {  cr+=ri;  sh++;  }
		var cc = starting_col[pass];  while(cc<w) {  cc+=ci;  sw++;  }
		var bpll = Math.ceil(sw*bpp/8);
		UPNG.decode._filterZero(data, out, di, sw, sh);

		var y=0, row = starting_row[pass];
		while(row<h)
		{
			var col = starting_col[pass];
			var cdi = (di+y*bpll)<<3;

			while(col<w)
			{
				if(bpp==1) {
					var val = data[cdi>>3];  val = (val>>(7-(cdi&7)))&1;
					img[row*bpl + (col>>3)] |= (val << (7-((col&7)<<0)));
				}
				if(bpp==2) {
					var val = data[cdi>>3];  val = (val>>(6-(cdi&7)))&3;
					img[row*bpl + (col>>2)] |= (val << (6-((col&3)<<1)));
				}
				if(bpp==4) {
					var val = data[cdi>>3];  val = (val>>(4-(cdi&7)))&15;
					img[row*bpl + (col>>1)] |= (val << (4-((col&1)<<2)));
				}
				if(bpp>=8) {
					var ii = row*bpl+col*cbpp;
					for(var j=0; j<cbpp; j++) img[ii+j] = data[(cdi>>3)+j];
				}
				cdi+=bpp;  col+=ci;
			}
			y++;  row += ri;
		}
		if(sw*sh!=0) di += sh * (1 + bpll);
		pass = pass + 1;
	}
	return img;
}

UPNG.decode._getBPP = function(out) {
	var noc = [1,null,3,1,2,null,4][out.ctype];
	return noc * out.depth;
}

UPNG.decode._filterZero = function(data, out, off, w, h)
{
	var bpp = UPNG.decode._getBPP(out), bpl = Math.ceil(w*bpp/8), paeth = UPNG.decode._paeth;
	bpp = Math.ceil(bpp/8);
	
	var i,di, type=data[off], x=0;
	
	if(type>1) data[off]=[0,0,1][type-2];  
	if(type==3) for(x=bpp; x<bpl; x++) data[x+1] = (data[x+1] + (data[x+1-bpp]>>>1) )&255;

	for(var y=0; y<h; y++)  {
		i = off+y*bpl; di = i+y+1;
		type = data[di-1]; x=0;

		if     (type==0)   for(; x<bpl; x++) data[i+x] = data[di+x];
		else if(type==1) { for(; x<bpp; x++) data[i+x] = data[di+x];
						   for(; x<bpl; x++) data[i+x] = (data[di+x] + data[i+x-bpp]);  }
		else if(type==2) { for(; x<bpl; x++) data[i+x] = (data[di+x] + data[i+x-bpl]);  }
		else if(type==3) { for(; x<bpp; x++) data[i+x] = (data[di+x] + ( data[i+x-bpl]>>>1));
			               for(; x<bpl; x++) data[i+x] = (data[di+x] + ((data[i+x-bpl]+data[i+x-bpp])>>>1) );  }
		else             { for(; x<bpp; x++) data[i+x] = (data[di+x] + paeth(0, data[i+x-bpl], 0));
						   for(; x<bpl; x++) data[i+x] = (data[di+x] + paeth(data[i+x-bpp], data[i+x-bpl], data[i+x-bpp-bpl]) );  }
	}
	return data;
}

UPNG.decode._paeth = function(a,b,c)
{
	var p = a+b-c, pa = (p-a), pb = (p-b), pc = (p-c);
	if (pa*pa <= pb*pb && pa*pa <= pc*pc)  return a;
	else if (pb*pb <= pc*pc)  return b;
	return c;
}

UPNG.decode._IHDR = function(data, offset, out)
{
	var bin = UPNG._bin;
	out.width  = bin.readUint(data, offset);  offset += 4;
	out.height = bin.readUint(data, offset);  offset += 4;
	out.depth     = data[offset];  offset++;
	out.ctype     = data[offset];  offset++;
	out.compress  = data[offset];  offset++;
	out.filter    = data[offset];  offset++;
	out.interlace = data[offset];  offset++;
}

UPNG._bin = {
	nextZero   : function(data,p)  {  while(data[p]!=0) p++;  return p;  },
	readUshort : function(buff,p)  {  return (buff[p]<< 8) | buff[p+1];  },
	writeUshort: function(buff,p,n){  buff[p] = (n>>8)&255;  buff[p+1] = n&255;  },
	readUint   : function(buff,p)  {  return (buff[p]*(256*256*256)) + ((buff[p+1]<<16) | (buff[p+2]<< 8) | buff[p+3]);  },
	writeUint  : function(buff,p,n){  buff[p]=(n>>24)&255;  buff[p+1]=(n>>16)&255;  buff[p+2]=(n>>8)&255;  buff[p+3]=n&255;  },
	readASCII  : function(buff,p,l){  var s = "";  for(var i=0; i<l; i++) s += String.fromCharCode(buff[p+i]);  return s;    },
	writeASCII : function(data,p,s){  for(var i=0; i<s.length; i++) data[p+i] = s.charCodeAt(i);  },
	readBytes  : function(buff,p,l){  var arr = [];   for(var i=0; i<l; i++) arr.push(buff[p+i]);   return arr;  },
	pad : function(n) { return n.length < 2 ? "0" + n : n; },
	readUTF8 : function(buff, p, l) {
		var s = "", ns;
		for(var i=0; i<l; i++) s += "%" + UPNG._bin.pad(buff[p+i].toString(16));
		try {  ns = decodeURIComponent(s); }
		catch(e) {  return UPNG._bin.readASCII(buff, p, l);  }
		return  ns;
	}
}
UPNG._copyTile = function(sb, sw, sh, tb, tw, th, xoff, yoff, mode)
{
	var w = Math.min(sw,tw), h = Math.min(sh,th);
	var si=0, ti=0;
	for(var y=0; y<h; y++)
		for(var x=0; x<w; x++)
		{
			if(xoff>=0 && yoff>=0) {  si = (y*sw+x)<<2;  ti = (( yoff+y)*tw+xoff+x)<<2;  }
			else                   {  si = ((-yoff+y)*sw-xoff+x)<<2;  ti = (y*tw+x)<<2;  }
			
			if     (mode==0) {  tb[ti] = sb[si];  tb[ti+1] = sb[si+1];  tb[ti+2] = sb[si+2];  tb[ti+3] = sb[si+3];  }
			else if(mode==1) {
				var fa = sb[si+3]*(1/255), fr=sb[si]*fa, fg=sb[si+1]*fa, fb=sb[si+2]*fa; 
				var ba = tb[ti+3]*(1/255), br=tb[ti]*ba, bg=tb[ti+1]*ba, bb=tb[ti+2]*ba; 
				
				var ifa=1-fa, oa = fa+ba*ifa, ioa = (oa==0?0:1/oa);
				tb[ti+3] = 255*oa;  
				tb[ti+0] = (fr+br*ifa)*ioa;  
				tb[ti+1] = (fg+bg*ifa)*ioa;   
				tb[ti+2] = (fb+bb*ifa)*ioa;  
			}
			else if(mode==2){	// copy only differences, otherwise zero
				var fa = sb[si+3], fr=sb[si], fg=sb[si+1], fb=sb[si+2]; 
				var ba = tb[ti+3], br=tb[ti], bg=tb[ti+1], bb=tb[ti+2]; 
				if(fa==ba && fr==br && fg==bg && fb==bb) {  tb[ti]=0;  tb[ti+1]=0;  tb[ti+2]=0;  tb[ti+3]=0;  }
				else {  tb[ti]=fr;  tb[ti+1]=fg;  tb[ti+2]=fb;  tb[ti+3]=fa;  }
			}
			else if(mode==3){	// check if can be blended
				var fa = sb[si+3], fr=sb[si], fg=sb[si+1], fb=sb[si+2]; 
				var ba = tb[ti+3], br=tb[ti], bg=tb[ti+1], bb=tb[ti+2]; 
				if(fa==ba && fr==br && fg==bg && fb==bb) continue;
				//if(fa!=255 && ba!=0) return false;
				if(fa<220 && ba>20) return false;
			}
		}
	return true;
}





UPNG.encode = function(bufs, w, h, ps, dels, tabs, forbidPlte)
{
	if(ps==null) ps=0;
	if(forbidPlte==null) forbidPlte = false;

	var nimg = UPNG.encode.compress(bufs, w, h, ps, [false, false, false, 0, forbidPlte,false]);
	UPNG.encode.compressPNG(nimg, -1);
	
	return UPNG.encode._main(nimg, w, h, dels, tabs);
}

UPNG.encodeLL = function(bufs, w, h, cc, ac, depth, dels, tabs) {
	var nimg = {  ctype: 0 + (cc==1 ? 0 : 2) + (ac==0 ? 0 : 4),      depth: depth,  frames: []  };
	
	var time = Date.now();
	var bipp = (cc+ac)*depth, bipl = bipp * w;
	for(var i=0; i<bufs.length; i++)
		nimg.frames.push({  rect:{x:0,y:0,width:w,height:h},  img:new Uint8Array(bufs[i]), blend:0, dispose:1, bpp:Math.ceil(bipp/8), bpl:Math.ceil(bipl/8)  });
	
	UPNG.encode.compressPNG(nimg, 0, true);
	
	var out = UPNG.encode._main(nimg, w, h, dels, tabs);
	return out;
}

UPNG.encode._main = function(nimg, w, h, dels, tabs) {
	if(tabs==null) tabs={};
	var crc = UPNG.crc.crc, wUi = UPNG._bin.writeUint, wUs = UPNG._bin.writeUshort, wAs = UPNG._bin.writeASCII;
	var offset = 8, anim = nimg.frames.length>1, pltAlpha = false;
	
	var leng = 8 + (16+5+4) /*+ (9+4)*/ + (anim ? 20 : 0);
	if(tabs["sRGB"]!=null) leng += 8+1+4;
	if(tabs["pHYs"]!=null) leng += 8+9+4;
	if(nimg.ctype==3) {
		var dl = nimg.plte.length;
		for(var i=0; i<dl; i++) if((nimg.plte[i]>>>24)!=255) pltAlpha = true;
		leng += (8 + dl*3 + 4) + (pltAlpha ? (8 + dl*1 + 4) : 0);
	}
	for(var j=0; j<nimg.frames.length; j++)
	{
		var fr = nimg.frames[j];
		if(anim) leng += 38;
		leng += fr.cimg.length + 12;
		if(j!=0) leng+=4;
	}
	leng += 12; 
	
	var data = new Uint8Array(leng);
	var wr=[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
	for(var i=0; i<8; i++) data[i]=wr[i];
	
	wUi(data,offset, 13);     offset+=4;
	wAs(data,offset,"IHDR");  offset+=4;
	wUi(data,offset,w);  offset+=4;
	wUi(data,offset,h);  offset+=4;
	data[offset] = nimg.depth;  offset++;  // depth
	data[offset] = nimg.ctype;  offset++;  // ctype
	data[offset] = 0;  offset++;  // compress
	data[offset] = 0;  offset++;  // filter
	data[offset] = 0;  offset++;  // interlace
	wUi(data,offset,crc(data,offset-17,17));  offset+=4; // crc

	// 13 bytes to say, that it is sRGB
	if(tabs["sRGB"]!=null) {
		wUi(data,offset, 1);      offset+=4;
		wAs(data,offset,"sRGB");  offset+=4;
		data[offset] = tabs["sRGB"];  offset++;
		wUi(data,offset,crc(data,offset-5,5));  offset+=4; // crc
	}
	if(tabs["pHYs"]!=null) {
		wUi(data,offset, 9);      offset+=4;
		wAs(data,offset,"pHYs");  offset+=4;
		wUi(data,offset, tabs["pHYs"][0]);      offset+=4;
		wUi(data,offset, tabs["pHYs"][1]);      offset+=4;
		data[offset]=tabs["pHYs"][2];			offset++;
		wUi(data,offset,crc(data,offset-13,13));  offset+=4; // crc
	}

	if(anim) {
		wUi(data,offset, 8);      offset+=4;
		wAs(data,offset,"acTL");  offset+=4;
		wUi(data,offset, nimg.frames.length);     offset+=4;
		wUi(data,offset, tabs["loop"]!=null?tabs["loop"]:0);      offset+=4;
		wUi(data,offset,crc(data,offset-12,12));  offset+=4; // crc
	}

	if(nimg.ctype==3) {
		var dl = nimg.plte.length;
		wUi(data,offset, dl*3);  offset+=4;
		wAs(data,offset,"PLTE");  offset+=4;
		for(var i=0; i<dl; i++){
			var ti=i*3, c=nimg.plte[i], r=(c)&255, g=(c>>>8)&255, b=(c>>>16)&255;
			data[offset+ti+0]=r;  data[offset+ti+1]=g;  data[offset+ti+2]=b;
		}
		offset+=dl*3;
		wUi(data,offset,crc(data,offset-dl*3-4,dl*3+4));  offset+=4; // crc

		if(pltAlpha) {
			wUi(data,offset, dl);  offset+=4;
			wAs(data,offset,"tRNS");  offset+=4;
			for(var i=0; i<dl; i++)  data[offset+i]=(nimg.plte[i]>>>24)&255;
			offset+=dl;
			wUi(data,offset,crc(data,offset-dl-4,dl+4));  offset+=4; // crc
		}
	}
	
	var fi = 0;
	for(var j=0; j<nimg.frames.length; j++)
	{
		var fr = nimg.frames[j];
		if(anim) {
			wUi(data, offset, 26);     offset+=4;
			wAs(data, offset,"fcTL");  offset+=4;
			wUi(data, offset, fi++);   offset+=4;
			wUi(data, offset, fr.rect.width );   offset+=4;
			wUi(data, offset, fr.rect.height);   offset+=4;
			wUi(data, offset, fr.rect.x);   offset+=4;
			wUi(data, offset, fr.rect.y);   offset+=4;
			wUs(data, offset, dels[j]);   offset+=2;
			wUs(data, offset,  1000);   offset+=2;
			data[offset] = fr.dispose;  offset++;	// dispose
			data[offset] = fr.blend  ;  offset++;	// blend
			wUi(data,offset,crc(data,offset-30,30));  offset+=4; // crc
		}
				
		var imgd = fr.cimg, dl = imgd.length;
		wUi(data,offset, dl+(j==0?0:4));     offset+=4;
		var ioff = offset;
		wAs(data,offset,(j==0)?"IDAT":"fdAT");  offset+=4;
		if(j!=0) {  wUi(data, offset, fi++);  offset+=4;  }
		data.set(imgd,offset);
		offset += dl;
		wUi(data,offset,crc(data,ioff,offset-ioff));  offset+=4; // crc
	}

	wUi(data,offset, 0);     offset+=4;
	wAs(data,offset,"IEND");  offset+=4;
	wUi(data,offset,crc(data,offset-4,4));  offset+=4; // crc

	return data.buffer;
}

UPNG.encode.compressPNG = function(out, filter, levelZero) {
	for(var i=0; i<out.frames.length; i++) {
		var frm = out.frames[i], nw=frm.rect.width, nh=frm.rect.height;
		var fdata = new Uint8Array(nh*frm.bpl+nh);
		frm.cimg = UPNG.encode._filterZero(frm.img,nh,frm.bpp,frm.bpl,fdata, filter, levelZero);
	}
}



UPNG.encode.compress = function(bufs, w, h, ps, prms) // prms:  onlyBlend, minBits, forbidPlte
{
	//var time = Date.now();
	var onlyBlend = prms[0], evenCrd = prms[1], forbidPrev = prms[2], minBits = prms[3], forbidPlte = prms[4], dither=prms[5];
	
	var ctype = 6, depth = 8, alphaAnd=255
	
	for(var j=0; j<bufs.length; j++)  {  // when not quantized, other frames can contain colors, that are not in an initial frame
		var img = new Uint8Array(bufs[j]), ilen = img.length;
		for(var i=0; i<ilen; i+=4) alphaAnd &= img[i+3];
	}
	var gotAlpha = (alphaAnd!=255);
	
	//console.log("alpha check", Date.now()-time);  time = Date.now();
	
	//var brute = gotAlpha && forGIF;		// brute : frames can only be copied, not "blended"
	var frms = UPNG.encode.framize(bufs, w, h, onlyBlend, evenCrd, forbidPrev);
	//console.log("framize", Date.now()-time);  time = Date.now();
	
	var cmap={}, plte=[], inds=[]; 
	
	if(ps!=0) {
		var nbufs = [];  for(var i=0; i<frms.length; i++) nbufs.push(frms[i].img.buffer);
		
		var abuf = UPNG.encode.concatRGBA(nbufs), qres = UPNG.quantize(abuf, ps);
		
		for(var i=0; i<qres.plte.length; i++) plte.push(qres.plte[i].est.rgba);
		
		var cof = 0;
		for(var i=0; i<frms.length; i++) {  
			var frm=frms[i], bln=frm.img.length, ind = new Uint8Array(qres.inds.buffer, cof>>2, bln>>2);  inds.push(ind);
			var bb = new Uint8Array(qres.abuf,cof,bln);
			
			//console.log(frm.img, frm.width, frm.height);
			//var time = Date.now();
			if(dither) UPNG.encode.dither(frm.img, frm.rect.width, frm.rect.height, plte, bb, ind);
			//console.log(Date.now()-time);
			frm.img.set(bb);  cof+=bln;  
		}
		
		//console.log("quantize", Date.now()-time);  time = Date.now();
	}
	else {
		// what if ps==0, but there are <=256 colors?  we still need to detect, if the palette could be used
		for(var j=0; j<frms.length; j++)  {  // when not quantized, other frames can contain colors, that are not in an initial frame
			var frm = frms[j], img32 = new Uint32Array(frm.img.buffer), nw=frm.rect.width, ilen = img32.length;
			var ind = new Uint8Array(ilen);  inds.push(ind);
			for(var i=0; i<ilen; i++) {
				var c = img32[i];
				if     (i!=0 && c==img32[i- 1]) ind[i]=ind[i-1];
				else if(i>nw && c==img32[i-nw]) ind[i]=ind[i-nw];
				else {
					var cmc = cmap[c];
					if(cmc==null) {  cmap[c]=cmc=plte.length;  plte.push(c);  if(plte.length>=300) break;  }
					ind[i]=cmc;
				}
			}
		}
		//console.log("make palette", Date.now()-time);  time = Date.now();
	}
	
	var cc=plte.length; //console.log("colors:",cc);
	if(cc<=256 && forbidPlte==false) {
		if(cc<= 2) depth=1;  else if(cc<= 4) depth=2;  else if(cc<=16) depth=4;  else depth=8;
		depth =  Math.max(depth, minBits);
	}
	
	for(var j=0; j<frms.length; j++)
	{
		var frm = frms[j], nx=frm.rect.x, ny=frm.rect.y, nw=frm.rect.width, nh=frm.rect.height;
		var cimg = frm.img, cimg32 = new Uint32Array(cimg.buffer);
		var bpl = 4*nw, bpp=4;
		if(cc<=256 && forbidPlte==false) {
			bpl = Math.ceil(depth*nw/8);
			var nimg = new Uint8Array(bpl*nh);
			var inj = inds[j];
			for(var y=0; y<nh; y++) {  var i=y*bpl, ii=y*nw;
				if     (depth==8) for(var x=0; x<nw; x++) nimg[i+(x)   ]   =  (inj[ii+x]             );
				else if(depth==4) for(var x=0; x<nw; x++) nimg[i+(x>>1)]  |=  (inj[ii+x]<<(4-(x&1)*4));
				else if(depth==2) for(var x=0; x<nw; x++) nimg[i+(x>>2)]  |=  (inj[ii+x]<<(6-(x&3)*2));
				else if(depth==1) for(var x=0; x<nw; x++) nimg[i+(x>>3)]  |=  (inj[ii+x]<<(7-(x&7)*1));
			}
			cimg=nimg;  ctype=3;  bpp=1;
		}
		else if(gotAlpha==false && frms.length==1) {	// some next "reduced" frames may contain alpha for blending
			var nimg = new Uint8Array(nw*nh*3), area=nw*nh;
			for(var i=0; i<area; i++) { var ti=i*3, qi=i*4;  nimg[ti]=cimg[qi];  nimg[ti+1]=cimg[qi+1];  nimg[ti+2]=cimg[qi+2];  }
			cimg=nimg;  ctype=2;  bpp=3;  bpl=3*nw;
		}
		frm.img=cimg;  frm.bpl=bpl;  frm.bpp=bpp;
	}
	//console.log("colors => palette indices", Date.now()-time);  time = Date.now();
	
	return {ctype:ctype, depth:depth, plte:plte, frames:frms  };
}
UPNG.encode.framize = function(bufs,w,h,alwaysBlend,evenCrd,forbidPrev) {
	/*  DISPOSE
	    - 0 : no change
		- 1 : clear to transparent
		- 2 : retstore to content before rendering (previous frame disposed)
		BLEND
		- 0 : replace
		- 1 : blend
	*/
	var frms = [];
	for(var j=0; j<bufs.length; j++) {
		var cimg = new Uint8Array(bufs[j]), cimg32 = new Uint32Array(cimg.buffer);
		var nimg;
		
		var nx=0, ny=0, nw=w, nh=h, blend=alwaysBlend?1:0;
		if(j!=0) {
			var tlim = (forbidPrev || alwaysBlend || j==1 || frms[j-2].dispose!=0)?1:2, tstp = 0, tarea = 1e9;
			for(var it=0; it<tlim; it++)
			{
				var pimg = new Uint8Array(bufs[j-1-it]), p32 = new Uint32Array(bufs[j-1-it]);
				var mix=w,miy=h,max=-1,may=-1;
				for(var y=0; y<h; y++) for(var x=0; x<w; x++) {
					var i = y*w+x;
					if(cimg32[i]!=p32[i]) {
						if(x<mix) mix=x;  if(x>max) max=x;
						if(y<miy) miy=y;  if(y>may) may=y;
					}
				}
				if(max==-1) mix=miy=max=may=0;
				if(evenCrd) {  if((mix&1)==1)mix--;  if((miy&1)==1)miy--;  }
				var sarea = (max-mix+1)*(may-miy+1);
				if(sarea<tarea) {
					tarea = sarea;  tstp = it;
					nx = mix; ny = miy; nw = max-mix+1; nh = may-miy+1;
				}
			}
			
			// alwaysBlend: pokud zjistím, že blendit nelze, nastavím předchozímu snímku dispose=1. Zajistím, aby obsahoval můj obdélník.
			var pimg = new Uint8Array(bufs[j-1-tstp]);
			if(tstp==1) frms[j-1].dispose = 2;
			
			nimg = new Uint8Array(nw*nh*4);
			UPNG._copyTile(pimg,w,h, nimg,nw,nh, -nx,-ny, 0);
			
			blend =  UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, 3) ? 1 : 0;
			if(blend==1) UPNG.encode._prepareDiff(cimg,w,h,nimg,{x:nx,y:ny,width:nw,height:nh});
			else         UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, 0);
			//UPNG._copyTile(cimg,w,h, nimg,nw,nh, -nx,-ny, blend==1?2:0);
		}
		else nimg = cimg.slice(0);	// img may be rewritten further ... don't rewrite input
		
		frms.push({rect:{x:nx,y:ny,width:nw,height:nh}, img:nimg, blend:blend, dispose:0});
	}
	
	
	if(alwaysBlend) for(var j=0; j<frms.length; j++) {
		var frm = frms[j];  if(frm.blend==1) continue;
		var r0 = frm.rect, r1 = frms[j-1].rect
		var miX = Math.min(r0.x, r1.x), miY = Math.min(r0.y, r1.y);
		var maX = Math.max(r0.x+r0.width, r1.x+r1.width), maY = Math.max(r0.y+r0.height, r1.y+r1.height);
		var r = {x:miX, y:miY, width:maX-miX, height:maY-miY};
		
		frms[j-1].dispose = 1;
		if(j-1!=0) 
		UPNG.encode._updateFrame(bufs, w,h,frms, j-1,r, evenCrd);
		UPNG.encode._updateFrame(bufs, w,h,frms, j  ,r, evenCrd);
	}
	var area = 0;
	if(bufs.length!=1) for(var i=0; i<frms.length; i++) {
		var frm = frms[i];
		area += frm.rect.width*frm.rect.height;
		//if(i==0 || frm.blend!=1) continue;
		//var ob = new Uint8Array(
		//console.log(frm.blend, frm.dispose, frm.rect);
	}
	//if(area!=0) console.log(area);
	return frms;
}
UPNG.encode._updateFrame = function(bufs, w,h, frms, i, r, evenCrd) {
	var U8 = Uint8Array, U32 = Uint32Array;
	var pimg = new U8(bufs[i-1]), pimg32 = new U32(bufs[i-1]), nimg = i+1<bufs.length ? new U8(bufs[i+1]):null;
	var cimg = new U8(bufs[i]), cimg32 = new U32(cimg.buffer);
	
	var mix=w,miy=h,max=-1,may=-1;
	for(var y=0; y<r.height; y++) for(var x=0; x<r.width; x++) {
		var cx = r.x+x, cy = r.y+y;
		var j = cy*w+cx, cc = cimg32[j];
		// no need to draw transparency, or to dispose it. Or, if writing the same color and the next one does not need transparency.
		if(cc==0 || (frms[i-1].dispose==0 && pimg32[j]==cc && (nimg==null || nimg[j*4+3]!=0)) /**-**/ ) {}
		else {
			if(cx<mix) mix=cx;  if(cx>max) max=cx;
			if(cy<miy) miy=cy;  if(cy>may) may=cy;
		}
	}
	if(max==-1) mix=miy=max=may=0;
	if(evenCrd) {  if((mix&1)==1)mix--;  if((miy&1)==1)miy--;  }
	r = {x:mix, y:miy, width:max-mix+1, height:may-miy+1};
	
	var fr = frms[i];  fr.rect = r;  fr.blend = 1;  fr.img = new Uint8Array(r.width*r.height*4);
	if(frms[i-1].dispose==0) {
		UPNG._copyTile(pimg,w,h, fr.img,r.width,r.height, -r.x,-r.y, 0);
		UPNG.encode._prepareDiff(cimg,w,h,fr.img,r);
		//UPNG._copyTile(cimg,w,h, fr.img,r.width,r.height, -r.x,-r.y, 2);
	}
	else
		UPNG._copyTile(cimg,w,h, fr.img,r.width,r.height, -r.x,-r.y, 0);
}
UPNG.encode._prepareDiff = function(cimg, w,h, nimg, rec) {
	UPNG._copyTile(cimg,w,h, nimg,rec.width,rec.height, -rec.x,-rec.y, 2);
	/*
	var n32 = new Uint32Array(nimg.buffer);
	var og = new Uint8Array(rec.width*rec.height*4), o32 = new Uint32Array(og.buffer);
	UPNG._copyTile(cimg,w,h, og,rec.width,rec.height, -rec.x,-rec.y, 0);
	for(var i=4; i<nimg.length; i+=4) {
		if(nimg[i-1]!=0 && nimg[i+3]==0 && o32[i>>>2]==o32[(i>>>2)-1]) {
			n32[i>>>2]=o32[i>>>2];
			//var j = i, c=p32[(i>>>2)-1];
			//while(p32[j>>>2]==c) {  n32[j>>>2]=c;  j+=4;  }
		}
	}
	for(var i=nimg.length-8; i>0; i-=4) {
		if(nimg[i+7]!=0 && nimg[i+3]==0 && o32[i>>>2]==o32[(i>>>2)+1]) {
			n32[i>>>2]=o32[i>>>2];
			//var j = i, c=p32[(i>>>2)-1];
			//while(p32[j>>>2]==c) {  n32[j>>>2]=c;  j+=4;  }
		}
	}*/
}

UPNG.encode._filterZero = function(img,h,bpp,bpl,data, filter, levelZero)
{
	var fls = [], ftry=[0,1,2,3,4];
	if     (filter!=-1)             ftry=[filter];
	else if(h*bpl>500000 || bpp==1) ftry=[0];
	var opts;  if(levelZero) opts={level:0};
	
	//: @KANJI_EDIT@://
	//: var CMPR = (data.length>10e6 && UZIP!=null) ? UZIP : pako;
    var CMPR = UZIP ;
	
	var time = Date.now();
	for(var i=0; i<ftry.length; i++) {
		for(var y=0; y<h; y++) UPNG.encode._filterLine(data, img, y, bpl, bpp, ftry[i]);
		//var nimg = new Uint8Array(data.length);
		//var sz = UZIP.F.deflate(data, nimg);  fls.push(nimg.slice(0,sz));
		//var dfl = pako["deflate"](data), dl=dfl.length-4;
		//var crc = (dfl[dl+3]<<24)|(dfl[dl+2]<<16)|(dfl[dl+1]<<8)|(dfl[dl+0]<<0);
		//console.log(crc, UZIP.adler(data,2,data.length-6));
		fls.push(CMPR["deflate"](data,opts));
	}
	
	var ti, tsize=1e9;
	for(var i=0; i<fls.length; i++) if(fls[i].length<tsize) {  ti=i;  tsize=fls[i].length;  }
	return fls[ti];
}
UPNG.encode._filterLine = function(data, img, y, bpl, bpp, type)
{
	var i = y*bpl, di = i+y, paeth = UPNG.decode._paeth
	data[di]=type;  di++;

	if(type==0) {
		if(bpl<500) for(var x=0; x<bpl; x++) data[di+x] = img[i+x];
		else data.set(new Uint8Array(img.buffer,i,bpl),di);
	}
	else if(type==1) {
		for(var x=  0; x<bpp; x++) data[di+x] =  img[i+x];
		for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]-img[i+x-bpp]+256)&255;
	}
	else if(y==0) {
		for(var x=  0; x<bpp; x++) data[di+x] = img[i+x];

		if(type==2) for(var x=bpp; x<bpl; x++) data[di+x] = img[i+x];
		if(type==3) for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x] - (img[i+x-bpp]>>1) +256)&255;
		if(type==4) for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x] - paeth(img[i+x-bpp], 0, 0) +256)&255;
	}
	else {
		if(type==2) { for(var x=  0; x<bpl; x++) data[di+x] = (img[i+x]+256 - img[i+x-bpl])&255;  }
		if(type==3) { for(var x=  0; x<bpp; x++) data[di+x] = (img[i+x]+256 - (img[i+x-bpl]>>1))&255;
					  for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]+256 - ((img[i+x-bpl]+img[i+x-bpp])>>1))&255;  }
		if(type==4) { for(var x=  0; x<bpp; x++) data[di+x] = (img[i+x]+256 - paeth(0, img[i+x-bpl], 0))&255;
					  for(var x=bpp; x<bpl; x++) data[di+x] = (img[i+x]+256 - paeth(img[i+x-bpp], img[i+x-bpl], img[i+x-bpp-bpl]))&255;  }
	}
}

UPNG.crc = {
	table : ( function() {
	   var tab = new Uint32Array(256);
	   for (var n=0; n<256; n++) {
			var c = n;
			for (var k=0; k<8; k++) {
				if (c & 1)  c = 0xedb88320 ^ (c >>> 1);
				else        c = c >>> 1;
			}
			tab[n] = c;  }
		return tab;  })(),
	update : function(c, buf, off, len) {
		for (var i=0; i<len; i++)  c = UPNG.crc.table[(c ^ buf[off+i]) & 0xff] ^ (c >>> 8);
		return c;
	},
	crc : function(b,o,l)  {  return UPNG.crc.update(0xffffffff,b,o,l) ^ 0xffffffff;  }
}


UPNG.quantize = function(abuf, ps)
{	
	var sb = new Uint8Array(abuf), tb = sb.slice(0), tb32 = new Uint32Array(tb.buffer);
	
	var KD = UPNG.quantize.getKDtree(tb, ps);
	var root = KD[0], leafs = KD[1];
	
	var planeDst = UPNG.quantize.planeDst;
	var len=sb.length;
		
	var inds = new Uint8Array(len>>2), nd;
	if(sb.length<20e6)  // precise, but slow :(
		for(var i=0; i<len; i+=4) {
			var r=sb[i]*(1/255), g=sb[i+1]*(1/255), b=sb[i+2]*(1/255), a=sb[i+3]*(1/255);
			
			nd = UPNG.quantize.getNearest(root, r, g, b, a);
			inds[i>>2] = nd.ind;  tb32[i>>2] = nd.est.rgba;
		}
	else 
		for(var i=0; i<len; i+=4) {
			var r=sb[i]*(1/255), g=sb[i+1]*(1/255), b=sb[i+2]*(1/255), a=sb[i+3]*(1/255);
			
			nd = root;  while(nd.left) nd = (planeDst(nd.est,r,g,b,a)<=0) ? nd.left : nd.right;
			inds[i>>2] = nd.ind;  tb32[i>>2] = nd.est.rgba;
		}
	return {  abuf:tb.buffer, inds:inds, plte:leafs  };
}

UPNG.quantize.getKDtree = function(nimg, ps, err) {
	if(err==null) err = 0.0001;
	var nimg32 = new Uint32Array(nimg.buffer);
	
	var root = {i0:0, i1:nimg.length, bst:null, est:null, tdst:0, left:null, right:null };  // basic statistic, extra statistic
	root.bst = UPNG.quantize.stats(  nimg,root.i0, root.i1  );  root.est = UPNG.quantize.estats( root.bst );
	var leafs = [root];
	
	while(leafs.length<ps)
	{
		var maxL = 0, mi=0;
		for(var i=0; i<leafs.length; i++) if(leafs[i].est.L > maxL) {  maxL=leafs[i].est.L;  mi=i;  }
		if(maxL<err) break;
		var node = leafs[mi];
		
		var s0 = UPNG.quantize.splitPixels(nimg,nimg32, node.i0, node.i1, node.est.e, node.est.eMq255);
		var s0wrong = (node.i0>=s0 || node.i1<=s0);
		//console.log(maxL, leafs.length, mi);
		if(s0wrong) {  node.est.L=0;  continue;  }
		
		
		var ln = {i0:node.i0, i1:s0, bst:null, est:null, tdst:0, left:null, right:null };  ln.bst = UPNG.quantize.stats( nimg, ln.i0, ln.i1 );  
		ln.est = UPNG.quantize.estats( ln.bst );
		var rn = {i0:s0, i1:node.i1, bst:null, est:null, tdst:0, left:null, right:null };  rn.bst = {R:[], m:[], N:node.bst.N-ln.bst.N};
		for(var i=0; i<16; i++) rn.bst.R[i] = node.bst.R[i]-ln.bst.R[i];
		for(var i=0; i< 4; i++) rn.bst.m[i] = node.bst.m[i]-ln.bst.m[i];
		rn.est = UPNG.quantize.estats( rn.bst );
		
		node.left = ln;  node.right = rn;
		leafs[mi]=ln;  leafs.push(rn);
	}
	leafs.sort(function(a,b) {  return b.bst.N-a.bst.N;  });
	for(var i=0; i<leafs.length; i++) leafs[i].ind=i;
	return [root, leafs];
}

UPNG.quantize.getNearest = function(nd, r,g,b,a)
{
	if(nd.left==null) {  nd.tdst = UPNG.quantize.dist(nd.est.q,r,g,b,a);  return nd;  }
	var planeDst = UPNG.quantize.planeDst(nd.est,r,g,b,a);
	
	var node0 = nd.left, node1 = nd.right;
	if(planeDst>0) {  node0=nd.right;  node1=nd.left;  }
	
	var ln = UPNG.quantize.getNearest(node0, r,g,b,a);
	if(ln.tdst<=planeDst*planeDst) return ln;
	var rn = UPNG.quantize.getNearest(node1, r,g,b,a);
	return rn.tdst<ln.tdst ? rn : ln;
}
UPNG.quantize.planeDst = function(est, r,g,b,a) {  var e = est.e;  return e[0]*r + e[1]*g + e[2]*b + e[3]*a - est.eMq;  }
UPNG.quantize.dist     = function(q,   r,g,b,a) {  var d0=r-q[0], d1=g-q[1], d2=b-q[2], d3=a-q[3];  return d0*d0+d1*d1+d2*d2+d3*d3;  }

UPNG.quantize.splitPixels = function(nimg, nimg32, i0, i1, e, eMq)
{
	var vecDot = UPNG.quantize.vecDot;
	i1-=4;
	var shfs = 0;
	while(i0<i1)
	{
		while(vecDot(nimg, i0, e)<=eMq) i0+=4;
		while(vecDot(nimg, i1, e)> eMq) i1-=4;
		if(i0>=i1) break;
		
		var t = nimg32[i0>>2];  nimg32[i0>>2] = nimg32[i1>>2];  nimg32[i1>>2]=t;
		
		i0+=4;  i1-=4;
	}
	while(vecDot(nimg, i0, e)>eMq) i0-=4;
	return i0+4;
}
UPNG.quantize.vecDot = function(nimg, i, e)
{
	return nimg[i]*e[0] + nimg[i+1]*e[1] + nimg[i+2]*e[2] + nimg[i+3]*e[3];
}
UPNG.quantize.stats = function(nimg, i0, i1){
	var R = [0,0,0,0,  0,0,0,0,  0,0,0,0,  0,0,0,0];
	var m = [0,0,0,0];
	var N = (i1-i0)>>2;
	for(var i=i0; i<i1; i+=4)
	{
		var r = nimg[i]*(1/255), g = nimg[i+1]*(1/255), b = nimg[i+2]*(1/255), a = nimg[i+3]*(1/255);
		//var r = nimg[i], g = nimg[i+1], b = nimg[i+2], a = nimg[i+3];
		m[0]+=r;  m[1]+=g;  m[2]+=b;  m[3]+=a;
		
		R[ 0] += r*r;  R[ 1] += r*g;  R[ 2] += r*b;  R[ 3] += r*a;  
		               R[ 5] += g*g;  R[ 6] += g*b;  R[ 7] += g*a; 
		                              R[10] += b*b;  R[11] += b*a;  
		                                             R[15] += a*a;  
	}
	R[4]=R[1];  R[8]=R[2];  R[9]=R[6];  R[12]=R[3];  R[13]=R[7];  R[14]=R[11];
	
	return {R:R, m:m, N:N};
}
UPNG.quantize.estats = function(stats){
	var R = stats.R, m = stats.m, N = stats.N;
	
	// when all samples are equal, but N is large (millions), the Rj can be non-zero ( 0.0003.... - precission error)
	var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], iN = (N==0 ? 0 : 1/N);
	var Rj = [
		R[ 0] - m0*m0*iN,  R[ 1] - m0*m1*iN,  R[ 2] - m0*m2*iN,  R[ 3] - m0*m3*iN,  
		R[ 4] - m1*m0*iN,  R[ 5] - m1*m1*iN,  R[ 6] - m1*m2*iN,  R[ 7] - m1*m3*iN,
		R[ 8] - m2*m0*iN,  R[ 9] - m2*m1*iN,  R[10] - m2*m2*iN,  R[11] - m2*m3*iN,  
		R[12] - m3*m0*iN,  R[13] - m3*m1*iN,  R[14] - m3*m2*iN,  R[15] - m3*m3*iN 
	];
	
	var A = Rj, M = UPNG.M4;
	var b = [Math.random(),Math.random(),Math.random(),Math.random()], mi = 0, tmi = 0;
	
	if(N!=0)
	for(var i=0; i<16; i++) {
		b = M.multVec(A, b);  tmi = Math.sqrt(M.dot(b,b));  b = M.sml(1/tmi,  b);
		if(i!=0 && Math.abs(tmi-mi)<1e-9) break;  mi = tmi;
	}	
	//b = [0,0,1,0];  mi=N;
	var q = [m0*iN, m1*iN, m2*iN, m3*iN];
	var eMq255 = M.dot(M.sml(255,q),b);
	
	return {  Cov:Rj, q:q, e:b, L:mi,  eMq255:eMq255, eMq : M.dot(b,q),
				rgba: (((Math.round(255*q[3])<<24) | (Math.round(255*q[2])<<16) |  (Math.round(255*q[1])<<8) | (Math.round(255*q[0])<<0))>>>0)  };
}
UPNG.M4 = {
	multVec : function(m,v) {
			return [
				m[ 0]*v[0] + m[ 1]*v[1] + m[ 2]*v[2] + m[ 3]*v[3],
				m[ 4]*v[0] + m[ 5]*v[1] + m[ 6]*v[2] + m[ 7]*v[3],
				m[ 8]*v[0] + m[ 9]*v[1] + m[10]*v[2] + m[11]*v[3],
				m[12]*v[0] + m[13]*v[1] + m[14]*v[2] + m[15]*v[3]
			];
	},
	dot : function(x,y) {  return  x[0]*y[0]+x[1]*y[1]+x[2]*y[2]+x[3]*y[3];  },
	sml : function(a,y) {  return [a*y[0],a*y[1],a*y[2],a*y[3]];  }
}

UPNG.encode.concatRGBA = function(bufs) {
	var tlen = 0;
	for(var i=0; i<bufs.length; i++) tlen += bufs[i].byteLength;
	var nimg = new Uint8Array(tlen), noff=0;
	for(var i=0; i<bufs.length; i++) {
		var img = new Uint8Array(bufs[i]), il = img.length;
		for(var j=0; j<il; j+=4) {  
			var r=img[j], g=img[j+1], b=img[j+2], a = img[j+3];
			if(a==0) r=g=b=0;
			nimg[noff+j]=r;  nimg[noff+j+1]=g;  nimg[noff+j+2]=b;  nimg[noff+j+3]=a;  }
		noff += il;
	}
	return nimg.buffer;
}

UPNG.encode.dither = function(sb, w, h, plte, tb, oind) {
	
	function addErr(er, tg, ti, f) {
		tg[ti]+=(er[0]*f)>>4;  tg[ti+1]+=(er[1]*f)>>4;  tg[ti+2]+=(er[2]*f)>>4;  tg[ti+3]+=(er[3]*f)>>4;  
	}
	function N(x) {  return Math.max(0, Math.min(255, x));  }
	function D(a,b) {  var dr=a[0]-b[0], dg=a[1]-b[1], db=a[2]-b[2], da=a[3]-b[3];  return (dr*dr + dg*dg + db*db + da*da);  }
	
	
	var pc=plte.length, nplt = [], rads=[];
	for(var i=0; i<pc; i++) {
		var c = plte[i];
		nplt.push([((c>>>0)&255), ((c>>>8)&255), ((c>>>16)&255), ((c>>>24)&255)]);
	}
	for(var i=0; i<pc; i++) {
		var ne=0xffffffff, ni=0;
		for(var j=0; j<pc; j++) {  var ce=D(nplt[i],nplt[j]);  if(j!=i && ce<ne) {  ne=ce;  ni=j;  }  }
		var hd = Math.sqrt(ne)/2;
		rads[i] = ~~(hd*hd);
	}
		
	var tb32 = new Uint32Array(tb.buffer);
	var err = new Int16Array(w*h*4);
	
	for(var y=0; y<h; y++) {
		for(var x=0; x<w; x++) {
			var i = (y*w+x)*4;
			
			var cc = [N(sb[i]+err[i]), N(sb[i+1]+err[i+1]), N(sb[i+2]+err[i+2]), N(sb[i+3]+err[i+3])];
			
			var ni=0, nd = 0xffffff;
			for(var j=0; j<pc; j++) {
				var cd = D(cc,nplt[j]);
				if(cd<nd) {  nd=cd;  ni=j;  }
			}  
			
			//ni = oind[i>>2];
			var nc = nplt[ni];
			var er = [cc[0]-nc[0], cc[1]-nc[1], cc[2]-nc[2], cc[3]-nc[3]];
			
			//addErr(er, err, i+4, 16);
			
			//*
			if(x!=w-1) addErr(er, err, i+4    , 7);
			if(y!=h-1) {
				if(x!=  0) addErr(er, err, i+4*w-4, 3);
				           addErr(er, err, i+4*w  , 5);
				if(x!=w-1) addErr(er, err, i+4*w+4, 1);  //*/
			}
		
			oind[i>>2] = ni;  tb32[i>>2] = plte[ni];
		}
	}
}

    //:=================================:000_3RD:UPNG_LIB://
    //:HOTEL13_FRAMERATE_PERFORMANCE:====================://

        var d_hotel13_t_0 =( 0 ); //: Old Timestamp      ://
        var d_hotel13_t_1 =( 0 ); //: Current Timestamp  ://
        var d_hotel13_mil =( 0 ); //: Elapsed Millisec   ://

        var d_hotel13_tms =( 0 ); //: Target   Millisec  ://
        var d_hotel13_ams =( 0 ); //: Adjusted Millisec  ://

    //:====================:HOTEL13_FRAMERATE_PERFORMANCE://
    //:ITS_WRONG_CARL:===================================://
    
        const  ITS_WRONG_CARL = "[ITS_WRONG_CARL]"
        ////
        ,   d_hotel13_r13_rgx = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_r13_rgy = "[FIX:d_hotel13_r13_g_y]"  
        ////                                                 
        ,   d_hotel13_rid_rgx = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_rid_rgy = "[FIX:d_hotel13_r13_g_y]"  
        ////                                            
        ,   d_hotel13_g25_r16 = "[FIX:d_hotel13_g25_r13]"
        ,   d_hotel13_r16_g25 = "[FIX:d_hotel13_r13_g25]"
        ////
        ,   d_hotel13_rid_g_x = "[FIX:d_hotel13_r13_g_x]"  
        ,   d_hotel13_rid_g_y = "[FIX:d_hotel13_r13_g_y]"   
        ////
        ,   rid = "[FIX:r13:(r13==RoomID[0...12])]"
        ,   r16 = "[FIX:r13:(THIRTEEN_NOT_SIXTEEN_IDIOT)]"
        ,   gid = "[FIX:g25:(g25==GridID[0...24])]"
        ////
        ,   rgw = "[FIX:just_use:g_w(gridcell_width_)]"
        ,   rgh = "[FIX:just_use:g_h(gridcell_height)]"
        ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    //:===================================:ITS_WRONG_CARL://
    //:HOTEL13_CONSTANTS_LIKE_MACROS:====================://

        //:----------------------------------------------://
        //: @f30@ : 30FPS                                ://
        //: At 30-FPS , how many frames should flames    ://
        //: be visible for ?                             ://
        //:----------------------------------------------://
        const c_hotel13_f30_fad =( 8 );

            
        //:Bomb_Body_Style_Enums:------------------------://

        //: #SAB_DAM# ://

        const c_hotel13_bod_das =( 1 ); //:DAShed Boarder://

        const c_hotel13_bod_lef =( 2 ); //:LaserDiode:LEF://
        const c_hotel13_bod_rig =( 3 ); //:LaserDiode:RIG://
        const c_hotel13_bod_top =( 4 ); //:LaserDiode:TOP://
        const c_hotel13_bod_bot =( 5 ); //:LaserDiode:BOT://

        const c_hotel13_bod_cir =( 6 ); //:Circle_Bomb   ://
        const c_hotel13_bod_box =( 7 ); //:Boxxxy_Bomb   ://

        //:------------------------:Bomb_Body_Style_Enums://



        //:----------------------------------------------:// 
        //: @hexabaf@ : HEXA_for_Bombs_And_Fada          ://
        //:           : Hex colors to use both for       ://
        //:           : bombs and explosions. Have       ://
        //:           : explosion color match the        ://
        //:           : bomb color.                      ://
        //:                                              ://
        //: [B]: BOMB (normal style)    [V]:VERTICAL     ://
        //: [E]: ECHO (square bomb )    [H]:HORIZONTAL   ://
        //: [L]: LAZER/LASER            [F]:FOURWAY      ://
        //: [S]: SPARKPIN               [K]:INSTAKILL_BIG://
        //:                                              ://
        //: [f]:sparkpin forway         [L]:LEFT         ://
        //: [b]:sparkpin box            [R]:RIGHT        ://
        //: [r]:sparkpin ring           [T]:TOP (upward) ://
        //:                             [B]:BOT (down  ) ://
        //:                                              ://
        //:----------------------------------------------://    
        
        const hexabaf_laxcoma = "[hexabaf_laxcoma]"
        //// 
            c_hotel13_hexabaf_000= "#000000"   //:THEVOID://
        //// 
        //: DAMAGE_NONE : SPARKPIN(S) : #SAB_DAM#        ://
        //// 
        ,   c_hotel13_hexabaf_001= "#00FF00"   //:[S]:[f]://
        ,   c_hotel13_hexabaf_002= "#00FF00"   //:[S]:[b]://
        ,   c_hotel13_hexabaf_003= "#00FF00"   //:[S]:[r]://
        //// 
        //: DAMAGE_LOWE : LAZERBOX(S) : #SAB_DAM#        ://
        //// 
        ,   c_hotel13_hexabaf_004= "#FFFF00"   //:[L]:[L]://
        ,   c_hotel13_hexabaf_005= "#FFFF00"   //:[L]:[R]://
        ,   c_hotel13_hexabaf_006= "#FFFF00"   //:[L]:[T]://
        ,   c_hotel13_hexabaf_007= "#FFFF00"   //:[L]:[B]://
        //// 
        //: DAMAGE_MEDI : TENDRILB(S) : #SAB_DAM#        ://
        //// 
        ,   c_hotel13_hexabaf_008= "#FF8800"   //:[B]:[V]://    
        ,   c_hotel13_hexabaf_009= "#FF8800"   //:[B]:[H]://
        ,   c_hotel13_hexabaf_010= "#FF8800"   //:[B]:[F]://
        ,   c_hotel13_hexabaf_011= "#FF8800"   //:[B]:[K]://            
        ////                                 
        //: DAMAGE_HIGH : ECHOBOMB(S) : #SAB_DAM#        ://
        ////
        ,   c_hotel13_hexabaf_012= "#FF2200"   //:[E]:[V]://
        ,   c_hotel13_hexabaf_013= "#FF2200"   //:[E]:[H]://
        ,   c_hotel13_hexabaf_014= "#FF2200"   //:[E]:[F]://
        ,   c_hotel13_hexabaf_015= "#FF2200"   //:[E]:[K]://
        ////                                             
        ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

        const exs_cro = "[YOU_MEAN[exs_ten]TENDRILSTYLE]" ;

            /** **************************************** **/    
            /** CRO makes me think of "cross" but this   **/
            /** style is also used for classic vertical  **/
            /** and horizontal explosions, so call it    **/
            /** TEN for "tendrill style" because long    **/
            /** thin tentacles of the explosion.         **/
            /** **************************************** **/

        //: #SAB_DAM# : Explosion styles ordered by the  ://
        //: #-------# : strength of bomb they are to be  ://    
        //: #-------# : used with.                       ://    
                                                         
        const exs_bad =( 0 ); //: invalidexplosionstyle  ://
        const exs_rin =( 1 ); //: ring style explosion   ://
        const exs_laz =( 2 ); //: lazer style            ://
        const exs_ten =( 3 ); //: classic tendril style  ://
        const exs_box =( 4 ); //: echo box style         ://
       
    //:====================:HOTEL13_CONSTANTS_LIKE_MACROS://
    //:EXS_EXPLOSION_STYLE:==============================://
    {

        //: #_320_BLAZE_IT_#  #SAB_DAM# ://

        var d_bte_exs_lef_rig_top_bot = new Uint8Array([
        ///
            exs_bad ,(  0  ),(  0  ),(  0  ),(  0  )
        ///
        //: DAMAGE_NONE : SPARKPIN(S) : #SAB_DAM# :------://
        ///
        ,   exs_ten ,(  1  ),(  1  ),(  1  ),(  1  )   
        ,   exs_box ,(  1  ),(  1  ),(  1  ),(  1  )   
        ,   exs_rin ,(  1  ),(  1  ),(  1  ),(  1  ) 
        /// EXS_RIN :[  2  ],[  2  ],[  2  ],[  2  ]
        //: EXS_RIN :When first activated creates 5x5    ://
        //:         :blast that can set off adjacent     ://
        //:         :toggle sparkpins.                   ://
        ///
        //: DAMAGE_LOWE : LAZERBOX(S) : #SAB_DAM# :------://

        ,   exs_laz ,( 320 ),(  0  ),(  0  ),(  0  ) //:L://      
        ,   exs_laz ,(  0  ),( 320 ),(  0  ),(  0  ) //:R://
        ,   exs_laz ,(  0  ),(  0  ),( 320 ),(  0  ) //:T://
        ,   exs_laz ,(  0  ),(  0  ),(  0  ),( 320 ) //:B://
        ///
        //: DAMAGE_MEDI : TENDRILB(S) : #SAB_DAM# :------://
        ///
        ,   exs_ten ,(  0  ),(  0  ),(  5  ),(  5  ) 
        ,   exs_ten ,(  5  ),(  5  ),(  0  ),(  0  ) 
        ,   exs_ten ,(  1  ),(  1  ),(  1  ),(  1  ) 
        ,   exs_ten ,(  2  ),(  2  ),(  2  ),(  2  ) 
        ///
        //: DAMAGE_HIGH : ECHOBOMB(S) : #SAB_DAM# :------://
        ///
        ,   exs_box ,(  1  ),(  1  ),(  5  ),(  5  ) 
        ,   exs_box ,(  5  ),(  5  ),(  1  ),(  1  ) 
        ,   exs_box ,(  1  ),(  1  ),(  1  ),(  1  ) 
        ,   exs_box ,(  2  ),(  2  ),(  2  ),(  2  ) 
        ///
        ]);;
        if( 80 != d_bte_exs_lef_rig_top_bot.length ){
        var len = d_bte_exs_lef_rig_top_bot.length ;
            console.log( "[len]:" , len );
            window.alert( "[OH_FUCK_NO_2022]" );
            throw(        "[OH_FUCK_NO_2022]" );
        };;
    }
    //:==============================:EXS_EXPLOSION_STYLE://
    //:HOTEL13_BOMB_INNER_DECALS:========================://
    //:                                                  ://    
    //: 000 / ZEROOOO : Not A Bomb, Empty Space          ://    
    //: TEN / TENDRIL : Tendrill Style Explosion         ://    
    //: BOX / ECHOBLA : Box      Style Explosion         ://    
    //: LAZ / LAZEBLA : Laser    Style Explosion         ://    
    //: PIN / PINSPAR : SparkPIN Style Explosion         ://    
    //:                                                  ://    
    //:   :---------:---------:---------:---------:      ://    
    //:   | BOM_001 : BOM_004 : BOM_008 : BOM_012 |      ://    
    //:   | BOM_002 : BOM_005 : BOM_009 : BOM_013 |      ://    
    //:   | BOM_003 : BOM_006 : BOM_010 : BOM_014 |      ://    
    //:   |         : BOM_007 : BOM_011 : BOM_015 |      ://    
    //:   :---------:---------:---------:---------:      ://    
    //:   : PINSPAR : LAZEBLA : TENDRIL : ECHOBLA :      ://    
    //:   :---------:---------:---------:---------:      ://   
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://
    //:HOTEL13_BOMB_INNER_DECALS:- - - - - - - - - - - - ://
    //:                                                  ://
    //: S4W: Short 4Way                                  ://
    //: B4W: Big   4Way                                  ://
    //: -----------------------------------------------  ://
    //: VER:    008  012  |  LEF:    004  |           |  ://
    //: HOR:    009  013  |  RIG:    005  |  S4W:001  |  ://
    //: S4W:    010  014  |  TOP:    006  |  S4W:002  |  ://
    //: B4W:    011  015  |  BOT:    007  |  ***:003  |  ://
    //: -----------------------------------------------  ://
    //:         ...  ...             ...         ...     ://
    //:         TEN  BOX             LAZ         PIN     ://
    //:                                                  ://
    //:HOTEL13_BOMB_INNER_DECALS:- - - - - - - - - - - - ://

        //:----------------------------------------://
        //: @pat@     : Pattern                    ://
        //: @pat_bom@ : Pattern Of Bomb Layer Tile ://
        //: @dec@     : Decal                      ://
        //: @dec_bom@ : Decal   Of Bomb Layer Tile ://
        //:----------------------------------------://

        const d_hotel13_pat_bom_000 = "[USE:dec_bom_000]";
        const d_hotel13_pat_bom_001 = "[USE:dec_bom_001]";
        const d_hotel13_pat_bom_002 = "[USE:dec_bom_002]";
        const d_hotel13_pat_bom_003 = "[USE:dec_bom_003]";
        const d_hotel13_pat_bom_004 = "[USE:dec_bom_004]";
        const d_hotel13_pat_bom_005 = "[USE:dec_bom_005]";
        const d_hotel13_pat_bom_006 = "[USE:dec_bom_006]";
        const d_hotel13_pat_bom_007 = "[USE:dec_bom_007]";
        const d_hotel13_pat_bom_008 = "[USE:dec_bom_008]";
        const d_hotel13_pat_bom_009 = "[USE:dec_bom_009]";
        const d_hotel13_pat_bom_010 = "[USE:dec_bom_010]";
        const d_hotel13_pat_bom_011 = "[USE:dec_bom_011]";
        const d_hotel13_pat_bom_012 = "[USE:dec_bom_012]";
        const d_hotel13_pat_bom_013 = "[USE:dec_bom_013]";
        const d_hotel13_pat_bom_014 = "[USE:dec_bom_014]";
        const d_hotel13_pat_bom_015 = "[USE:dec_bom_015]";

        //: TAG[ bomb decals | bomb decal | bombdecals  ]://   
        //: TAG[ decals | decal | bomb icons | bomb icon]:// 
        //: TAG[ bombicon | bomicon | bomb patterns     ]://

        const d_hotel13_dec_bom_000 =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ://
        ,       0,0,0,0,0,0,0,0,0  //: 02 ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 ://
        ,       0,0,0,0,0,0,0,0,0  //: 05 ://
        ,       0,0,0,0,0,0,0,0,0  //: 06 ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ://
        ]);;//: 1 2 3 4 5 6 7 8 9

        //:---------------------:------------------------://
        //: NON-LETHAL PATTERNS : #SAB_DAM# #SAB_DAM_DEC#://        
        //:---------------------:------------------------://

        const d_hotel13_dec_pinslow =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 04 :             ://
        ,       0,0,0,1,1,1,0,0,0  //: 05 :-: pinslow :-://
        ,       0,0,0,0,1,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;
        const d_hotel13_dec_pinfast =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 03 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 04 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 05 :-: pinslow :-://
        ,       0,0,1,1,1,1,1,0,0  //: 06 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;
        const d_hotel13_dec_pinring =new Uint8Array([
 
                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 03 :             ://
        ,       0,0,1,0,0,0,1,0,0  //: 04 :             ://
        ,       0,0,1,0,1,0,1,0,0  //: 05 :-: pinring :-://
        ,       0,0,1,0,0,0,1,0,0  //: 06 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;

        const d_hotel13_dec_bom_001 =( //:-------:-------://
              d_hotel13_dec_pinslow    //:pinslow:-------:// 
        );;
        const d_hotel13_dec_bom_002 =( //:-------:-------://
              d_hotel13_dec_pinfast    //:pinfast:-------://
        );;
        const d_hotel13_dec_bom_003 =( //:-------:-------://
              d_hotel13_dec_pinring    //:pinring:-------:// 
        );;

        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: DEC[ LAZ_LEF , LAZ_RIG , LAZ_TOP , LAZ_BOT ] ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://

        //: #SAB_DAM# #SAB_DAM_DEC# :--------------------://   

        const d_hotel13_dec_laz_lef =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 :             ://
        ,       1,1,1,0,1,0,0,0,0  //: 05 :-: laz_lef :-://
        ,       0,0,0,0,0,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;
        const d_hotel13_dec_laz_rig =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 :             ://
        ,       0,0,0,0,1,0,1,1,1  //: 05 :-: laz_rig :-://
        ,       0,0,0,0,0,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;
        const d_hotel13_dec_laz_top =new Uint8Array([
 
                0,0,0,0,1,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,1,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 05 :-: laz_top :-://
        ,       0,0,0,0,0,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;
        const d_hotel13_dec_laz_bot =new Uint8Array([
 
                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 05 :-: laz_bot :-://
        ,       0,0,0,0,0,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 09 ::::::::::::::://
        ]);;

        const d_hotel13_dec_bom_004 =( //:LAZ_LEF:-------://
              d_hotel13_dec_laz_lef    //:laz_hor:-------://
        );;
        const d_hotel13_dec_bom_005 =( //:LAZ_RIG:-------://
              d_hotel13_dec_laz_rig    //:laz_hor:-------://
        );;
        const d_hotel13_dec_bom_006 =( //:LAZ_TOP:-------://
              d_hotel13_dec_laz_top    //:laz_ver:-------://
        );;
        const d_hotel13_dec_bom_007 =( //:LAZ_BOT:-------://
              d_hotel13_dec_laz_bot    //:laz_ver:-------://
        );;

        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: DEC[ DEC_VER , DEC_HOR , DEC_S4W , DEC_KIL ] ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://

        //: #SAB_DAM# #SAB_DAM_DEC# :--------------------://

        const d_hotel13_dec_bom_ver =new Uint8Array([  

                0,0,0,0,0,0,0,0,0   //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0   //: 02 :             ://
        ,       0,0,0,0,1,0,0,0,0   //: 03 :             ://
        ,       0,0,0,0,1,0,0,0,0   //: 04 :             ://
        ,       0,0,0,0,1,0,0,0,0   //: 05 :-: DEC_VER :-://                 
        ,       0,0,0,0,1,0,0,0,0   //: 06 :             ://
        ,       0,0,0,0,1,0,0,0,0   //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0   //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0   //: 09 ::::::::::::::://
        ]);;//: 1 2 3 4 5 6 7 8 9
        const d_hotel13_dec_bom_hor =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 04 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 05 :-: DEC_HOR :-:// 
        ,       0,0,0,0,0,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;//: 1 2 3 4 5 6 7 8 9
        const d_hotel13_dec_bom_s4w =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,0,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 04 :             ://
        ,       0,0,1,1,1,1,1,0,0  //: 05 :-: DEC_S4W :-:// 
        ,       0,0,0,0,1,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;//: 1 2 3 4 5 6 7 8 9
        const d_hotel13_dec_bom_kil =new Uint8Array([

                0,0,0,0,0,0,0,0,0  //: 01 ::::::::::::::://
        ,       0,0,0,0,1,0,0,0,0  //: 02 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 03 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 04 :             ://
        ,       0,1,0,1,1,1,0,1,0  //: 05 :-: DEC_KIL :-://
        ,       0,0,0,0,1,0,0,0,0  //: 06 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 07 :             ://
        ,       0,0,0,0,1,0,0,0,0  //: 08 :             ://
        ,       0,0,0,0,0,0,0,0,0  //: 09 ::::::::::::::://
        ]);;//: 1 2 3 4 5 6 7 8 9

        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: DEC[ DEC_VER , DEC_HOR , DEC_S4W , DEC_KIL ] ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://

        //: #SAB_DAM# #SAB_DAM_DEC# :--------------------://

        const d_hotel13_dec_bom_008 =( //:BOX_VER:-------://
              d_hotel13_dec_bom_ver    //:VERTICA:DEC_VER://    
        );;
        const d_hotel13_dec_bom_009 =( //:BOX_HOR:-------://
              d_hotel13_dec_bom_hor    //:HORIZON:DEC_HOR:// 
        );;
        const d_hotel13_dec_bom_010 =( //:BOX_CRO:-------://
              d_hotel13_dec_bom_s4w  //:FOURWAY:DEC_S4W:// 
        );;
        const d_hotel13_dec_bom_011 =( //:BOX_KIL:-------://
              d_hotel13_dec_bom_kil    //:INSTKIL:DEC_KIL:// 
        );;

        const d_hotel13_dec_bom_012 =( //:BOX_VER:-------://
              d_hotel13_dec_bom_ver  //:VERTICA:DEC_VER://    
        );;
        const d_hotel13_dec_bom_013 =( //:BOX_HOR:-------://
              d_hotel13_dec_bom_hor    //:HORIZON:DEC_HOR:// 
        );;
        const d_hotel13_dec_bom_014 =( //:BOX_CRO:-------://
              d_hotel13_dec_bom_s4w    //:FOURWAY:DEC_S4W:// 
        );;
        const d_hotel13_dec_bom_015 =( //:BOX_KIL:-------://
              d_hotel13_dec_bom_kil    //:INSTKIL:DEC_KIL:// 
        );;

        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: DEC[ _______ , _______ , DEC_S4W , DEC_KIL ] ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://

        //: #SAB_DAM# #SAB_DAM_DEC# :--------------------://

        //:----------------------------------------------://
        //: pinslow : doesn't kill. Small 4way explosion ://
        //:         : style that is harmless to player.  ://
        //:         :                                    ://
        //:         : We want this so we can emulate     ://
        //:         : a non-lethal version of Josh's     ://
        //:         : checker pattern.                   ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: pinfast : doesn't kill. Fast Box Bomb        ://
        //:         : explosion style that is harmless   ://
        //:         : to the player.                     ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        //: pinring : doesn't kill. Toggles on/off.      ://
        //:         : Emits A 5x5 emp pulse when first   ://
        //:         : triggered on , then stabilizes with://
        //:         : a 3x3 area with hole in the center ://
        //:         : while staying on.                  ://
        //:                                              ://
        //:                                              ://
        //:        [r]: pinring that is off.             ://
        //:        [R]: pinrigh that is exploding.       ://
        //:                                              ://
        //:            1  2  3  4  5                     ://
        //:        [ ][r][ ][R][ ][r][ ]  Initial Blast  ://
        //:----------------------------------------------://

        const d_hotel13_dec_bom_all = new Array( 16 );
        {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

        //:#SAB_DAM# #SAB_DAM_DEC# :---------------------://    

            let bom_all = d_hotel13_dec_bom_all ;

                bom_all[  0 ]=( d_hotel13_dec_bom_000 );
        
        //:DAMAGE_NONE : Sparkpins :---------------------://

                bom_all[  1 ]=( d_hotel13_dec_bom_001 );
                bom_all[  2 ]=( d_hotel13_dec_bom_002 );
                bom_all[  3 ]=( d_hotel13_dec_bom_003 );

        //:DAMAGE_LOWE : LaserBoxx :---------------------://

                bom_all[  4 ]=( d_hotel13_dec_bom_004 );
                bom_all[  5 ]=( d_hotel13_dec_bom_005 );
                bom_all[  6 ]=( d_hotel13_dec_bom_006 );
                bom_all[  7 ]=( d_hotel13_dec_bom_007 );

        //:DAMAGE_MEDI : Classic   :---------------------://

                bom_all[  8 ]=( d_hotel13_dec_bom_008 );
                bom_all[  9 ]=( d_hotel13_dec_bom_009 );
                bom_all[ 10 ]=( d_hotel13_dec_bom_010 );
                bom_all[ 11 ]=( d_hotel13_dec_bom_011 );

        //:DAMAGE_HIGH : ECHOBOX   :---------------------://

                bom_all[ 12 ]=( d_hotel13_dec_bom_012 );
                bom_all[ 13 ]=( d_hotel13_dec_bom_013 );
                bom_all[ 14 ]=( d_hotel13_dec_bom_014 );
                bom_all[ 15 ]=( d_hotel13_dec_bom_015 );
        };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    //:========================:HOTEL13_BOMB_INNER_DECALS://
    //:HOTEL13_BOMB_LAYER_RENDER_SETTINGS:===============://
    {
        //:TAG[ bomb style | bombstyle | bomb-style ]    ://

        //:----------------------------------------------://
        //: At this time, we don't need render settings  ://
        //: for "tile" (til) and "fada" (fad) layers.    ://
        //: Only the bomb layer.                         ://
        //:----------------------------------------------://    
    
        const d_hotel13_ren_til = "[no_need_at_this_time]";
        const d_hotel13_ren_fad = "[no_need_at_this_time]";

        const _0_ =( 0 );
        const ___ =( 0 ); //:    Unknown Slot    ://
        
        //:------------------------------------------://
        //: Body Design ::::: #SAB_DAM# #SAB_DAM_BOD#://    
        //:------------------------------------------://
        const DAS =( 1 ); //:Dashed Boarder          ://

        const LEF =( 2 ); //:Left   Pointing Laser   ://
        const RIG =( 3 ); //:Right  Pointing Laser   ://
        const TOP =( 4 ); //:Toppum Pointing Laser   ://
        const BOT =( 5 ); //:Bottom Pointing Laser   ://

        const CIR =( 6 ); //:Classic Circle Bomb Body://
        const BOX =( 7 ); //:Echobox Bomb Body       ://


        //:------------------------------------------://
        //: Insignia Design : #SAB_DAM# #SAB_DAM_SIG#://
        //:------------------------------------------://
        const PIN =( 1 ); //:Pin In Center Design://
        const S4W =( 2 ); //:Small CrossDesign   ://
        const VER =( 3 );
        const HOR =( 4 );
        const KIL =( 5 ); //:KILL  CrossDesign   ://
        

        if( (!( CIR === c_hotel13_bod_cir ))
        ||  (!( BOX === c_hotel13_bod_box ))

        ||  (!( LEF === c_hotel13_bod_lef ))
        ||  (!( RIG === c_hotel13_bod_rig ))
        ||  (!( TOP === c_hotel13_bod_top ))
        ||  (!( BOT === c_hotel13_bod_bot ))

        ||  (!( DAS === c_hotel13_bod_das ))
        ){
            window.alert("[HOTEL13:BADCONST:BODYSTYLE]");
                   throw("[HOTEL13:BADCONST:BODYSTYLE]");
        };;

        //:bomb_render_settings:-------------------------://

            var d_hotel13_ren_bom =[         //:#SAB_DAM#://

                _0_ , _0_  //:<-- Nothingness Entry ://

            //: #_SPARKPINS_#     :----:// //:DAMAGE_NONE://    
            //: #_NOPLASMA_HERE_# :----:// //[SAB_DAM_REN]//
            
            ,   DAS , PIN //:  BOM_001 ://
            ,   DAS , PIN //:  BOM_002 ://
            ,   DAS , PIN //:  BOM_003 ://

            //: LAZER(S)/LASER(S) :----:// //:DAMAGE_LOWE://
                                           //[SAB_DAM_REN]//
            ,   LEF , HOR  //: BOM_004 ://
            ,   RIG , HOR  //: BOM_005 ://
            ,   TOP , VER  //: BOM_006 ://
            ,   BOT , VER  //: BOM_007 ://

            //: BOMB(S) :--------------:// //:DAMAGE_MEDI://
                                           //[SAB_DAM_REN]//
            ,   CIR , VER  //: BOM_008 ://
            ,   CIR , HOR  //: BOM_009 ://
            ,   CIR , S4W  //: BOM_010 ://
            ,   CIR , KIL  //: BOM_011 ://

            //: ECHOBOX(S) :-----------:// //:DAMAGE_HIGH://
                                           //[SAB_DAM_REN]//
            ,   BOX , VER  //: BOM_012 ://
            ,   BOX , HOR  //: BOM_013 ://
            ,   BOX , S4W  //: BOM_014 ://
            ,   BOX , KIL  //: BOM_015 ://
            ];;

            if( 32 != d_hotel13_ren_bom.length ){
                
                window.alert( "[REN_BOM_CHECKSUM]" );
                       throw( "[REN_BOM_CHECKSUM]" );
            };;
        //:-------------------------:bomb_render_settings://
    }
    //:===============:HOTEL13_BOMB_LAYER_RENDER_SETTINGS://
    //:HOTEL13_COLOR_PALLET:=============================://    
    var d_hotel13_hcp_til =[                     //:H_C_P://
                                                 //:H_C_P://
        //:@HCP@ : Hotel13_Color_Pallet ://      //:H_C_P://
                                                 //:H_C_P://
        "#000000"   //: "BLACK"                  //:H_C_P://
                                                 //:H_C_P://
        //:----------------------------------:// //:H_C_P://
        //: Cut values in half to make       :// //:H_C_P://
        //: them all darker.                 :// //:H_C_P://
        //:----------------------------------:// //:H_C_P://
                                                 //:H_C_P://
        //: C3/2 ==> 61 DARK_VERSIONS ://        //:H_C_P://
        //: FF/2 ==> 7F DARK_VERSIONS ://        //:H_C_P://
        //: 88/2 ==> 44 DARK_VERSIONS ://        //:H_C_P://
        //: 44/2 ==> 22 DARK_VERSIONS ://        //:H_C_P://
                                                 //:H_C_P://

        //: AVOID THIS TILE TYPE:
        //:     "ANGLED TILE : Leaves Ladders"
        //:      It will cause problems if angled
        //:      tiles spawn ladders I think

        //: Cube lights don't auto tile and you ://
        //: break them 1 tile at a time. They   ://
        //: leave ladders behind. The other     ://
        //: light types do NOT leave ladders.   ://

    //: HEAD BASHABLE :------------------------------://

        //: #SAB_DAM# #SAB_DAM_HCP_TIL#       ://
        //: #_LIGHT_FIXTURES_ARE_THE_WEAKEST_#://

        //: Pastell     : STRENGTH_NONE :----------------://    

        ,   "#00FF66"   //: Glass_Light : VERTICAL       ://
        ,   "#00FF88"   //: Glass_Light : HORIZONTAL     ://
        ,   "#00FFFF"   //: Glass_Light : CUBE           ://
                                        
        //: Greens      : STRENGTH_LOWE :----------------://

        ,   "#00FF00"   //: Dirt Leaving Nothing         :// 
        ,   "#00FF44"   //: Bauxite Leaving Ladders      ://  
                
    //: BOMBABLES ( all head bashable are bombable ) ://
     
        //: PURPLES:    : STRENGTH_MEDI :----------------://

        ,   "#8800FF"   //: SQUARE TILE : Leaves Nothing :// 
        ,   "#8844FF"   //: ANGLED TILE :#LEAVES_PARTIAL#:// 
        ,   "#8888FF"   //: SQUARE TILE : Leaves Ladders :// 
                    
    //: INDESTRUCTABLES :----------------------------://
                
        //: GRAYS       : STRENGTH_HIGH :----------------://

            //: PROBABLY_MAKE_THEM_INDESTRUCTABLE :------://

        ,       "#995511"   //: Falling Marble (fimar)   ://
        ,       "#995522"   //: Falling Beam   (fibem)   ://
        ,       "#995533"   //: Falling Iron   (firon)   ://

            //: INDESTRUCTABLE :-------------------------://

        ,       "#995544"   //: Vents          :---------://
        ,       "#995555"   //: Dragonite      :---------://

    //: SPECIAL_DO_NOT_RENDER :----------------------://
    
        //: COLORLESS   ://

        ,   "#FFFFFF"   //: SPRITE_SPAWNER_REC:TOP_LEF   ://
        ,   "#888888"   //: SPRITE_SPAWNER_REC:BOT_RIG   ://
    ];;                   

    var d_hotel13_hcp_til_dam =[

        "#000000"
    ////
    ,   "#001111" //: DAMAGE_COLOR : Glass_Light : VERT  ://                
    ,   "#001111" //: DAMAGE_COLOR : Glass_Light : HORI  ://          
    ,   "#001111" //: DAMAGE_COLOR : Glass_Light : CUBE  ://          
    ////
    ,   "#001100" //: DAMAGE_COLOR : DIRT    :-----------://
    ,   "#001100" //: DAMAGE_COLOR : BAUXITE :-----------://
    ////
    ,   "#110022" //: DAMAGE_COLOR : SQUARE_LEAVE_NOTHING://
    ,   "#110022" //: DAMAGE_COLOR : ANGLED_LEAVE_PARTIAL://
    ,   "#110022" //: DAMAGE_COLOR : SQUARE_LEAVE_LADDERS://
    ////
        //: PROBABLY_MAKE_THEM_INDESTRUCTABLE :----------://
    ////
    ,   "#110500" //: DAMAGE_COLOR : FALLING_MARBLE      ://
    ,   "#110500" //: DAMAGE_COLOR : FALLING_BEAM        ://
    ,   "#110500" //: DAMAGE_COLOR : FALLING_IRON        ://
    ////
        //: INDESTRUCTABLE ://
    ////
    ,   "#110000" //: DAMAGE_COLOR : STRONGTILE_VENTS    ://
    ,   "#110000" //: DAMAGE_COLOR : STRONGTILE_DRAGONITE://
    ////
    ,   "#222222"
    ,   "#111111"
    ];;

                        
    var d_hotel13_hcp_bom =[    //:PASTEL://     //:H_C_P://
                                                 //:H_C_P://
        c_hotel13_hexabaf_000   //: "BLACK"      //:H_C_P://
                                                 //:H_C_P://
        //:-----------------------------------:////:H_C_P://
        //: All "00" channels got "99" to     :////:H_C_P://
        //: create pastel colors.             :////:H_C_P://
        //: #SAB_DAM# #SAB_DAM_HCP_BOM#       :////:H_C_P://
        //:-----------------------------------:////:H_C_P://
    //:                          :            :////:H_C_P://
    ,   c_hotel13_hexabaf_001  //: SPRK: FOUR :     H_C_P:// 
    ,   c_hotel13_hexabaf_002  //: SPRK: BOXX :     H_C_P:// 
    ,   c_hotel13_hexabaf_003  //: SPRK: RING :     H_C_P:// 
    //:                                       :     H_C_P://
    ,   c_hotel13_hexabaf_004  //: LAZR: LEFT :     H_C_P://  
    ,   c_hotel13_hexabaf_005  //: LAZR: RIGH :     H_C_P://  
    ,   c_hotel13_hexabaf_006  //: LAZR: UPPP :     H_C_P://  
    ,   c_hotel13_hexabaf_007  //: LAZR: DOWN :     H_C_P://
    //:                                             H_C_P://
    ,   c_hotel13_hexabaf_008  //: BOMB: VERT :     H_C_P://  
    ,   c_hotel13_hexabaf_009  //: BOMB: HORZ :     H_C_P://  
    ,   c_hotel13_hexabaf_010  //: BOMB: FOUR :     H_C_P://
    ,   c_hotel13_hexabaf_011  //: BOMB: SKUL :     H_C_P://
    //:                                       :     H_C_P://
    ,   c_hotel13_hexabaf_012  //: ECHO: VERT :     H_C_P://  
    ,   c_hotel13_hexabaf_013  //: ECHO: HORZ :     H_C_P://  
    ,   c_hotel13_hexabaf_014  //: ECHO: FOUR :     H_C_P://
    ,   c_hotel13_hexabaf_015  //: ECHO: SKUL :     H_C_P://
    //:                                             H_C_P://
    ];;                                          //:H_C_P://
    var d_hotel13_hcp_fad =[   //:FULLSAT://     //:H_C_P://
                                                 //:H_C_P://
        c_hotel13_hexabaf_000  //: "BLACK"       //:H_C_P://
                                                 //:H_C_P://
        //:----------------------------------:// //:H_C_P://
        //: Some of the original atomic alice:// //:H_C_P://
        //: colors from my notes.            :// //:H_C_P://
        //: #SAB_DAM# #SAB_DAM_HCP_FAD#      :// //:H_C_P://
        //:----------------------------------:// //:H_C_P://
                                                 //:H_C_P://
    ,   c_hotel13_hexabaf_001   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_002   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_003   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_004   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_005   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_006   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_007   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_008   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_009   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_010   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_011   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_012   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_013   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_014   //:              //:H_C_P://
    ,   c_hotel13_hexabaf_015   //:              //:H_C_P://
    ];;                                          //:H_C_P://
    //:=============================:HOTEL13_COLOR_PALLET://    



        
    const d_hotel13_sam =( d_hotel13_not_aim ? 
    {   laxcoma : "[HACK]"
    
    ,   hot_can : null  //: HOTel CANvas
    ,   hot_con : null  //: HOTel CONtext
    
    ,   vis_til : (1)   //: VISIBLE: TILE(S)
    ,   vis_bom : (1)   //: VISIBLE: BOMB(S)
    ,   vis_fad : (1)   //: VISIBLE: FADA(S)
    
    //- tik_fps : (30        )  #_TIK_FPS_REMOVED_#      -//
    //- tik_num : (60*60*1000)  #_TIME_NOSTART_ZERO_#    -//
    //+                         #_TIK_NUM_REMOVED_#      +//
    
        //:group_mouse_and_click:------------------------://
        //:                                              ://
    ,   mou_p_x :(0-1)  //: Last_Mouse_Move      Pixel_Y ://    
    ,   mou_p_y :(0-1)  //: Last_Mouse_Move      Pixel_X ://
        //:               :                              ://
    ,   clk_p_x :(0-1)  //: Last_Clicked         Pixel_X ://
    ,   clk_p_y :(0-1)  //: Last_Clicked         Pixel_Y ://
        //:               :                              ://
    ,   mou_g_x :(0-1)  //: Last_Mouse_Move  Grid_Cell_X ://
    ,   mou_g_y :(0-1)  //: Last_Mouse_Move  Grid_Cell_Y ://
        //:               :                              ://
    ,   clk_g_x :(0-1)  //: Last_Clicked     Grid_Cell_X ://
    ,   clk_g_y :(0-1)  //: Last_Clicked     Grid_Cell_Y ://
        //:               :                              ://
    ,   te7_clk_t_x : new Array( 7 )  //:ALL:     Tile_X ://
    ,   te7_clk_t_y : new Array( 7 )  //:ALL:     Tile_Y ://
        //:               :                              ://
    ,   te7_mou_t_x : new Array( 7 )  //:ALL:     Tile_X ://
    ,   te7_mou_t_y : new Array( 7 )  //:ALL:     Tile_Y ://
        //:               :                              ://
        //:------------------------:group_mouse_and_click://
    
    ,   edi_v16     :(13)  //: Editor Tile Value   ://
    ,   edi_te7     :( 5)  //: Editor Tile Size    ://
    ,   edi_la3     :( 1)  //: Editor Target Layer ://

    ,   edi_v16_min :(   1)//: AKA[ edi_ran_min ]  ://
    ,   edi_v16_max :(16-1)//: AKA[ edi_ran_max ]  ://

    ,   edi_te7_min :( 0)  //: AKA[ edi_ran_min ]  ://
    ,   edi_te7_max :( 4)  //: AKA[ edi_ran_max ]  ://
    
    ,   edi_mod_hol :( 1)  //: Hold Brush Down     ://
    ,   edi_mod_era :( 0)  //: Eraser Mode         ://
    ,   edi_mod_ran :( 1)  //: Randomize Brush Size://
    ,   edi_mod_mir :( 0)  //: Mirror Brush Strokes://
    ,   edi_mod_act :( 0)  //: Set Bombs Activated?://
    ,   edi_mod_nov :( 1)  //: NO-Overlap Mode     ://
    ,   edi_mod_obe :( 0)  //: OBLITERATION_MODE   ://

    ,   edi_ask_emp :( 0)  //: Editor Ask To Empty ://
    ,   edi_ask_fil :( 0)  //: Editor Ask To Fill  ://
    
    } : { } );;
    //: Object.seal( d_hotel13_sam.te7_clk_t_x );
    //: Object.seal( d_hotel13_sam.te7_clk_t_y );
    Object.seal( d_hotel13_sam             );
        
    const edi_c_x =( 1 /**TightlyCoupledToDataLayout**/ );
    const edi_c_y =( 1 /**TightlyCoupledToDataLayout**/ );

    const d_bugman_yes =( "[JUST_USE:d_bug]" );
    const d_bugdude_yes=( "[JUST_USE:d_bug]" );
    
    var d_bug =( 1 /**This Doesn't Need SYSTEM NAME**/ );
    
    if( d_hotel13_yes_aim ){
    
        if( 0
        ||  ( "undefined" == typeof d_tik )
        ||  ( !( d_tik >= (0-1) ) )
        ){
            //:Global Ticker, 30FPS ticker that keeps://    
            //:counting up 1 every frame. Use as     ://
            //:unsigned integer.                     ://
            
            ERR("[WHERE_THE_FUCK_IS_MY_TICKER:2022]");
        };;
    };;

    //:DEV_NOTES:========================================://
    
        //: #_MAKE_EXPLOSIVE_AUTOMATA_ON_E_Z_2D_CANVAS_# ://
        
    //:========================================:DEV_NOTES://
    //:SERVER_JS_POLYFILLS:==============================://
    
        function F_PRIVATE_HOTEL13_ERR( msg ){ 

            if( d_hotel13_notnode ){
                alert(       "[err:msg]:" + msg );
                throw(       "[err:msg]:" + msg );
            }else{
                console.log( "[err:msg]:" + msg );
                      throw( "[err:msg]:" + msg );
            };;
        };;
        function F_PRIVATE_HOTEL13_ASS( t_f , i_msg ){
            
            if( !t_f ){ 
                var msg = "[<NO_MSG>]";
                if( 2 == arguments.length ){
                    msg = i_msg ;
                };;
                F_PRIVATE_HOTEL13_ERR(
                    "[ASSERT_FAIL]:"+i_msg
                );;
            };;
            return( t_f );
        };;
        function F_PRIVATE_HOTEL13_LOG( msg , val ){
        
            console.log( 
                "[HOTEL13_LOG](" + msg + ":" + val + ")"
            );;
        };;
        function F_PRIVATE_HOTEL13_YEL( msg , val ){
        
            window.alert( 
                "[HOTEL13_YEL](" + msg + ":" + val + ")"
            );;
        };;
        function F_PRIVATE_HOTEL13_MSG( msg ){
        
            console.log( "[HOTEL13_MSG]:" + msg );
        };;
        function F_PRIVATE_HOTEL13_NOP( i_ignore ){

            //: a lazy way to comment out MSG & LOG :----://
            //: @NOP@ : No OPeration :--------------:----://
        };;
        
        //:----------------------------------------------://
        //:  d_pix2048 : Master Game Memory :------------://
        //:----------------------------------------------://
        //:  d_pix0512 : Static Temp Buffer to avoid the ://    
        //:  --------- : evils of the garbage collector. ://
        //:----------------------------------------------://
        if( !d_pix2048 ){
        
            var d_pix2048 = new Uint8Array( 2048*2048*4 );
        };;
        if( !d_pix0512 ){

            var d_pix0512 = new Uint8Array(   512*512*4 );
        };;

        if( !ERR ){ var ERR = F_PRIVATE_HOTEL13_ERR; };
        if( !ASS ){ var ASS = F_PRIVATE_HOTEL13_ASS; };
        if( !LOG ){ var LOG = F_PRIVATE_HOTEL13_LOG; };
        if( !YEL ){ var YEL = F_PRIVATE_HOTEL13_YEL; };
        if( !MSG ){ var MSG = F_PRIVATE_HOTEL13_MSG; };
        if( !NOP ){ var NOP = F_PRIVATE_HOTEL13_NOP; };
        
    //:==============================:SERVER_JS_POLYFILLS://

//:#_UN_NAMESPACED_GLOBALS_#:================================://

    //:TAG[ un namespaced globals | un-namespaced-globals ..]://
    //:TAG[ unnamespaacedglobals | no-name | no-namespace ..]://

    const c_opptrez =( 320 /**OnePixelPerTileRez**/ );
    ASS( 5 * 64 == 320               , "[UNG:001]" );
    ASS(  64 == c_opptrez /  5       , "[UNG:002]" );
    ASS(   5 == c_opptrez / 64       , "[UNG:003]" );
    
    const c_fiverez =( 1600 /** Five Pixels Per Tile **/ );
    ASS(  c_fiverez / 5 == c_opptrez , "[UNG:004]" );
    
                             //:         BIG == BIG/LARGE://
    const c_tendbig =( 5 );  //:Reach Of BIG Bomb Tendril://
    const c_tendlit =( 1 );  //:Reach Of LIT Bomb Tendril://
                             //:         LIT == LITTLE   ://
                             
    const ____data_locations_of_hotel_rooms____=
         "____data_locations_of_hotel_rooms____"
    ,     h_x_0 =(0);h_x_1=(1);h_x_2=(2);h_x_3=(3)
    ,     h_y_0 =(0);h_y_1=(1);h_y_2=(2);h_y_3=(3)
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
///   var ft0,ft1,ft2,ft3,ft4,ft5,ft6,ft7,ft8,ft9 ;
///   var fta,ftb,ftc,ftd,fte,ftf ;
///   ( ft0=ft1=ft2=ft3=ft4=ft5=ft6=ft7=ft8=ft9=
///     fta=ftb=ftc=ftd=ftf=()=>{
///       ERR("[NOT:FT:FLAMETYPE:YES:FD:FLAMEDAMAGE]");
///     }
///   );;
    
    const ____fd_types_flames_are_damage____=
         "____fd_types_flames_are_damage____"
    ,   fd0=( function(){ ERR("[#_why_ft0_bad_#]"); } )
    
    ,   fd1=( 0x1 ) //: VERTICAL    FLAME COLOR ://
    ,   fd2=( 0x2 ) //: HORIZONTAL  FLAME COLOR ://
    ,   fd3=( 0x3 ) //: SMALL 4_WAY FLAME COLOR ://
    ,   fd4=( 0x4 ) //: LARGE 4_WAY FLAME COLOR ://
    
    ,   fd5=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd6=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd7=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd8=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fd9=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fda=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )
    ,   fdb=( ()=>{ ERR("[Wait_Till_1st_Playable]"); } )

        //:------------------------------------------://
        //: DETON : Detonates bombs ?                ://
        //: KIL_T : Kills Tiles ?                    ://
        //: ANIME : Animated Effect In Shader ?      ://
        //:                                          ://
        //: fdc :  NOT DETON : NOT KIL_T : YES ANIME ://
        //: fdd :  YES DETON : NOT KIL_T : YES ANIME ://
        //: fde :  YES DETON : YES KIL_T : YES ANIME ://
        //: fdf :  YES DETON : YES KIL_T : NOT ANIME ://
        //:------------------------------------------://
    
    ,   fdc=( 0xC ) //: Anti_Gravity_Water       ://
    ,   fdd=( 0xD ) //: PLASMA : Safe To Touch   ://
    ,   fde=( 0xE ) //: PLASMA : Unsafe To Touch ://
    ,   fdf=( 0xF ) //: Always Existed Damage    ://
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    const ____bomb_types_in_last_nyble____=
         "____bomb_types_in_last_nyble____"
    ,   bt0=( function(){ ERR("[#_why_bt0_bad_#]"); } )
    
    //: 
    ,   bt1=( 0x1 ) //: BOMB_VERT : AA3 blast : 0x5 :----://
    ,   bt2=( 0x2 ) //: BOMB_HORZ : AA3 blast : 5x0 :----://
    ,   bt3=( 0x3 ) //: BOMB_FUSE : AA3 blast : 1x1 :----://
    ,   bt4=( 0x4 ) //: BOMB_SKUL : AA3 blast : 5x5 :----://
                                                    
    ,   bt5=( 0x5 ) //: BOMB_VERT : BOX blast : 0x5 :----://
    ,   bt6=( 0x6 ) //: BOMB_HORZ : BOX blast : 5x0 :----://
    ,   bt7=( 0x7 ) //: BOMB_FUSE : BOX blast : 1x1 :----://
    ,   bt8=( 0x8 ) //: BOMB_SKUL : BOX blast : 5x5 :----://
    
    //: #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_#
    //: IDEA: Infinte Laser ( vertical & horizontal )
    //:       Moves until it touches invincible tile.
    ,   bt9=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_1]"); }  )    
    ,   bta=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_2]"); }  )
    
    //: #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_#
    //: IDEA: Left,Right,Up,Down Cannons that emit
    //:       rolling flame type that propegates itself.
    ,   btb=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_3]"); }  )
    ,   btc=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_4]"); }  )
    ,   btd=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_5]"); }  )
    ,   bte=( ()=>{ ERR("[#NOMORE_TILL_1STPLAY#:E_6]"); }  )
    
    ,   btf=( ()=>{ ERR("[#_why_btf_bad_#]"); } )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

    const ____master_memory_block_indexes____=
         "____master_memory_block_indexes____"
    ,   mm0=( 0 ) , mm1=( 1 ) , mm2=( 2 ) , mm3=( 3 )
    ,   mm4=( 4 ) , mm5=( 5 ) , mm6=( 6 ) , mm7=( 7 )
    ,   mm8=( 8 ) , mm9=( 9 ) , mma=(10 ) , mmb=(11 )
    ,   mmc=(12 ) , mmd=(13 ) , mme=(14 ) , mmf=(15 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____the_13_rooms_of_one_hotel____=
         "____the_13_rooms_of_one_hotel____"
    ,                     r00=( 0 ) 
    ,           r01=( 1 ),r02=( 2 ),r03=( 3 )
    , r04=( 4 ),r05=( 5 ),r06=( 6 ),r07=( 7 ),r08=( 8 )
    ,           r09=( 9 ),r10=(10 ),r11=(11 )
    ,                     r12=(12 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____the_grid_space_of_the_13_rooms____ =
         "____the_grid_space_of_the_13_rooms____"
    , g00=( 0 ),g01=( 1 ),g02=( 2 ),g03=( 3 ),g04=( 4 )
    , g05=( 5 ),g06=( 6 ),g07=( 7 ),g08=( 8 ),g09=( 9 )
    , g10=(10 ),g11=(11 ),g12=(12 ),g13=(13 ),g14=(14 )
    , g15=(15 ),g16=(16 ),g17=(17 ),g18=(18 ),g19=(19 )
    , g20=(20 ),g21=(21 ),g22=(22 ),g23=(23 ),g24=(24 )
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    
    const ____25_5x5_gridcells_but_diamond_of_13_rooms____=    
         "____25_5x5_gridcells_but_diamond_of_13_rooms____"
    ,   g_x_0=(0),g_x_1=(1),g_x_2=(2),g_x_3=(3),g_x_4=(4)
    ,   g_y_0=(0),g_y_1=(1),g_y_2=(2),g_y_3=(3),g_y_4=(4)
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//:================================:#_UN_NAMESPACED_GLOBALS_#://

    //:MISC_HOTEL13_LOOKUP_TABLES:===========================://
    
        //:TAG[ lookup tables | lookuptables | lutsection   ]://
        //:TAG[ lookup-tables | lookuptable  | lut-section  ]://
        //:TAG[ lookup-table  | lookup table | lut_section  ]://
        //:TAG[ lookuptablesection | tablesection           ]://
        //:TAG[ lookup tables section | lut section         ]://

        //:BAC_BOMB_ANIMATION_COLORS:--------------------://   
        {
            let __black__ =( "#000000" );
            let __grey1__ =( "#222222" );
            let __grey2__ =( "#444444" );
            let __grey3__ =( "#666666" );
            let __grey4__ =( "#888888" );

            let __white__ =( "#FFFFFF" );
            let __yello__ =( "#FFFF00" );
            let __orang__ =( "#FF8800" );
            let __reddo__ =( "#FF0000" );
             

            var d_hotel13_bac =([
            //:  #123456
                __white__  
            ,               __black__  
            ,   __white__  
            ,               __grey1__  
            ,   __yello__  
            ,               __grey2__  
            ,   __orang__  
            ,               __grey3__  
            ,   __reddo__  
            ,               __grey4__     
            ]);;
        }
        //:--------------------:BAC_BOMB_ANIMATION_COLORS://
        //:TTD_TIME_TILL_DETONATION:GENERALLY:-----------://
        {
            //:----------------------------------://
            //: @triptik@ : Tripped  TIck frames ://
            //: @flastik@ : Flashing TIck frames ://
            //: SEE[ #TRIPTIK_AND_FLASTIK# ]     ://                        
            //:----------------------------------://
            //: @sparker@ : Times For Sparkpins  ://
            //: @lazbeam@ : Times For Lasers     ://
            //: @classic@ : Times For AA Bombs   ://
            //: @echobox@ : Times For Box Bombs  ://
            //: @instkil@ : Times For INSTANTKILL://
            //:----------------------------------://

            //:#_FRAME_DELAY_NOT_MSEC_DELAY_#://

            var d_hotel13_ttd_triptik_sparker =(   0 );
            var d_hotel13_ttd_flastik_sparker =(   1 );

            var d_hotel13_ttd_triptik_lazbeam =(   0 );
            var d_hotel13_ttd_flastik_lazbeam =(   1 );

            var d_hotel13_ttd_triptik_classic =(  30 );
            var d_hotel13_ttd_flastik_classic =(  10 );

            var d_hotel13_ttd_triptik_echobox =(  30 );
            var d_hotel13_ttd_flastik_echobox =(  10 );

            //: #_POSITIVE_LIVETIK_#   : : : : : : : ://                         
            var d_hotel13_ttd_triptik_instkil =(   0 );
            var d_hotel13_ttd_flastik_instkil =(   1 );

            let codefor_fps =( 30 );

            if( !d_fps ){ var d_fps =( codefor_fps ); };
            if(  d_fps ){ ASS(d_fps>=1,"[FPSCHECK]"); };

            d_hotel13_tms =( 1000 / d_fps );

            if( 30 != d_fps ){
            //:------------------------------------------://
            //: If we speed up game, these tick stamps   ://   
            //: will need to be adjusted. No adjusting   ://
            //: FPS mid-game. That will break things.    ://        
            //:------------------------------------------://
                var t_m =( d_fps / codefor_fps );//:@t_m@://
                
                d_hotel13_ttd_triptik_sparker *=( t_m );
                d_hotel13_ttd_flastik_sparker *=( t_m );
                
                d_hotel13_ttd_triptik_lazbeam *=( t_m );
                d_hotel13_ttd_flastik_lazbeam *=( t_m );
                
                d_hotel13_ttd_triptik_classic *=( t_m );
                d_hotel13_ttd_flastik_classic *=( t_m );
                
                d_hotel13_ttd_triptik_echobox *=( t_m );
                d_hotel13_ttd_flastik_echobox *=( t_m );
                
                d_hotel13_ttd_triptik_instkil *=( t_m );
                d_hotel13_ttd_flastik_instkil *=( t_m );
            };;
        }
        //:-----------:TTD_TIME_TILL_DETONATION:GENERALLY://
        //:TTD_TIME_TILL_DETONATION:LOOKUP_TABLES:-------://

            var d_hotel13_ttd_triptik = new Uint8Array([
            
                //:--------------------------------------://
                //: @triptik@ : How long does bomb stay  ://
                //:           : "tripped" for ? This is  ://
                //:           : meant to warn you that   ://
                //:           : the bomb has been        ://
                //:           : [ activated / turned on ]://
                //:--------------------------------------://

                0 //:INVALID_BOMB_VALUE://
    
            ,   d_hotel13_ttd_triptik_sparker //:SPARKPIN_S4W://
            ,   d_hotel13_ttd_triptik_sparker //:SPARKPIN_BOX://
            ,   d_hotel13_ttd_triptik_sparker //:SPARKPIN_RIN://

            ,   d_hotel13_ttd_triptik_lazbeam //:LAZER_LEFT  ://
            ,   d_hotel13_ttd_triptik_lazbeam //:LAZER_RIGHT ://
            ,   d_hotel13_ttd_triptik_lazbeam //:LAZER_TOP   ://
            ,   d_hotel13_ttd_triptik_lazbeam //:LAZER_BOTTOM://
    
            ,   d_hotel13_ttd_triptik_classic //:CLASSIC_VER ://
            ,   d_hotel13_ttd_triptik_classic //:CLASSIC_HOR ://
            ,   d_hotel13_ttd_triptik_classic //:CLASSIC_S4W ://
            ,   d_hotel13_ttd_triptik_instkil //:CLASSIC_KIL ://

            ,   d_hotel13_ttd_triptik_echobox //:ECHOBOX_VER ://
            ,   d_hotel13_ttd_triptik_echobox //:ECHOBOX_HOR ://
            ,   d_hotel13_ttd_triptik_echobox //:ECHOBOX_S4W ://
            ,   d_hotel13_ttd_triptik_instkil //:ECHOBOX_KIL ://

            ]);;
            var d_hotel13_ttd_flastik = new Uint8Array([

                //:--------------------------------------://
                //: @flastik@ : Flash Tick .             ://
                //:           : After a time, a turned on://
                //:           : bomb will begin to flash.://
                //:           : This signals to player   ://
                //:           : that it is urgent to     ://
                //:           : get away ASAP.           ://
                //:--------------------------------------://

                0 //:INVALID_BOMB_VALUE://

            ,   d_hotel13_ttd_flastik_sparker //:SPARKPIN_S4W://
            ,   d_hotel13_ttd_flastik_sparker //:SPARKPIN_BOX://
            ,   d_hotel13_ttd_flastik_sparker //:SPARKPIN_RIN://
                                             
            ,   d_hotel13_ttd_flastik_lazbeam //:LAZER_LEFT  ://
            ,   d_hotel13_ttd_flastik_lazbeam //:LAZER_RIGHT ://
            ,   d_hotel13_ttd_flastik_lazbeam //:LAZER_TOP   ://
            ,   d_hotel13_ttd_flastik_lazbeam //:LAZER_BOTTOM://
                                             
            ,   d_hotel13_ttd_flastik_classic //:CLASSIC_VER ://
            ,   d_hotel13_ttd_flastik_classic //:CLASSIC_HOR ://
            ,   d_hotel13_ttd_flastik_classic //:CLASSIC_S4W ://
            ,   d_hotel13_ttd_flastik_instkil //:CLASSIC_KIL ://
                                             
            ,   d_hotel13_ttd_flastik_echobox //:ECHOBOX_VER ://
            ,   d_hotel13_ttd_flastik_echobox //:ECHOBOX_HOR ://
            ,   d_hotel13_ttd_flastik_echobox //:ECHOBOX_S4W ://
            ,   d_hotel13_ttd_flastik_instkil //:ECHOBOX_KIL ://
            ]);;
            var d_hotel13_ttd_livetik = new Uint8Array([

                //:------------------------------------------://
                //:@livetik@ : Alive Ticks , how many frames ://
                //:          : does the [bomb/mine]exist     ://
                //:          : for before it is gone?        ://
                //:------------------------------------------://

                d_hotel13_ttd_triptik[ 0]     //:INVALID_BOMB://
               +d_hotel13_ttd_flastik[ 0]
            ,                          
                d_hotel13_ttd_triptik[ 1]     //:SPARKPIN_S4W://
               +d_hotel13_ttd_flastik[ 1]     //:SPARKPIN:S4W://     
            ,                                 
                d_hotel13_ttd_triptik[ 2]     //:SPARKPIN_BOX://
               +d_hotel13_ttd_flastik[ 2]     //:SPARKPIN:BOX://    
            ,                                 
                d_hotel13_ttd_triptik[ 3]     //:SPARKPIN_RIN://
               +d_hotel13_ttd_flastik[ 3]     //:SPARKPIN:RIN://     
            ,                                 
                d_hotel13_ttd_triptik[ 4]     //:LAZER_LEFT  ://
               +d_hotel13_ttd_flastik[ 4]     //:LAZER:LEFT  ://     
            ,                                 
                d_hotel13_ttd_triptik[ 5]     //:LAZER_RIGHT ://
               +d_hotel13_ttd_flastik[ 5]     //:LAZER:RIGHT ://    
            ,                                 
                d_hotel13_ttd_triptik[ 6]     //:LAZER_TOP   ://
               +d_hotel13_ttd_flastik[ 6]     //:LAZER:TOP   ://    
            ,                                 
                d_hotel13_ttd_triptik[ 7]     //:LAZER_BOTTOM://
               +d_hotel13_ttd_flastik[ 7]     //:LAZER:BOTTOM://     
            ,                                 
                d_hotel13_ttd_triptik[ 8]     //:CLASSIC_VER ://
               +d_hotel13_ttd_flastik[ 8]     //:CLASSIC:VER ://     
            ,                                 
                d_hotel13_ttd_triptik[ 9]     //:CLASSIC_HOR ://
               +d_hotel13_ttd_flastik[ 9]     //:CLASSIC:HOR ://     
            ,                                 
                d_hotel13_ttd_triptik[10]     //:CLASSIC_S4W ://
               +d_hotel13_ttd_flastik[10]     //:CLASSIC:S4W ://     
            ,                                 
                d_hotel13_ttd_triptik[11]     //:CLASSIC_KIL ://
               +d_hotel13_ttd_flastik[11]     //:CLASSIC:KIL ://     
            ,                                 
                d_hotel13_ttd_triptik[12]     //:ECHOBOX_VER ://
               +d_hotel13_ttd_flastik[12]     //:ECHOBOX:VER ://
            ,                                 
                d_hotel13_ttd_triptik[13]     //:ECHOBOX_HOR ://
               +d_hotel13_ttd_flastik[13]     //:ECHOBOX:HOR ://
            ,                                 
                d_hotel13_ttd_triptik[14]     //:ECHOBOX_S4W ://
               +d_hotel13_ttd_flastik[14]     //:ECHOBOX:S4W ://
            ,
                d_hotel13_ttd_triptik[15]     //:ECHOBOX_KIL ://
               +d_hotel13_ttd_flastik[15]     //:EHCOBOX:KIL ://
            ]);;

            console.log( "[d_hotel13_ttd_livetik__11_]:"
                        ,  d_hotel13_ttd_livetik[ 11 ] );;

            console.log( "[d_hotel13_ttd_livetik__15_]:"
                        ,  d_hotel13_ttd_livetik[ 15 ] );;

            //:#_POSITIVE_LIVETIK_#:---------------------://
            for( var livetik_dex = 1 
            ;        livetik_dex <=( 16 - 1 )
            ;        livetik_dex ++
            ){
                var livetik =(
                    d_hotel13_ttd_livetik[ livetik_dex ] );;
                var triptik =( 
                    d_hotel13_ttd_triptik[ livetik_dex ] );;

                if( livetik <= 0 ){
                    LOG("[livetik_dex]" , livetik_dex );
                    LOG("[livetik____]" , livetik     );
                    ERR("[livetik_must_be_positive]"  );
                };;

                LOG( "[triptik]:" , triptik );
            };;
            //:---------------------:#_POSITIVE_LIVETIK_#://
        //:-------:TTD_TIME_TILL_DETONATION:LOOKUP_TABLES://    
        //:SPARK_FADA:-----------------------------------://
        //:                                              ://
        //:  Went for walk and was thinking about        ://
        //:  how the system could support falling        ://
        //:  sparks using FADA layer. We can do so       ://
        //:  by "cleverly" having TWO fada types         ://
        //:  for each type of destruction possible.      ://
        //:                                              ://
        //:  type 1 : FADA destruction WITHOUT_SPARKS    ://
        //:  type 2 : FADA destruction WITH____SPARKS    ://
        //:                                              ://
        //:  It is a clever hack... But we have limited  ://
        //:  data to work with, so it will have to do.   ://
        //:  Want to pump 100% of what I can get out     ://
        //:  of the bits given to me.                    ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        {
            let t_s ; //:TileFad  ==> SparkFad
            let s_t ; //:SparkFad ==> TileFad

            //:------------------------------------------://    
            //:   DULL_FADA  |  SPARK_FADA | DESCRIPTION ://
            //:--------------+-------------+-------------://
            //:              +             +             ://
            //:       1      |       5     | Spark_Box   ://
            //:       2      |       6     | Lazer_Beam  ://
            //:       3      |       7     | ClassicBomb ://
            //:       4      |       8     | EchoboxBomb ://
            //:--------------+-------------+-------------://
    
            let a = 10 , b = 11 , c = 12 ; 
            let d = 13 , e = 14 , f = 15 ;
            let u = 0xFF ; //:UNUSED       ://
            let i = 0x00 ; //:Invalid Index://

            //:INN:0 1 2 3 4 5 6 7 8 9 A B C D E F ://    
            t_s =[ i,5,6,7,8,0,0,0,0,u,u,u,u,u,u,u ];
            s_t =[ i,0,0,0,0,1,2,3,4,u,u,u,u,u,u,u ];
            //:INN:0 1 2 3 4 5 6 7 8 9 A B C D E F ://  

            var d_hotel13_tilefad_sparkfad =(
                new Uint8Array( t_s )
            );;
            var d_hotel13_sparkfad_tilefad =(

                new Uint8Array( s_t )
            );;

            if( 16 != d_hotel13_tilefad_sparkfad.length
            ||  16 != d_hotel13_sparkfad_tilefad.length
            ){
                window.alert("[errin:t_s:orr:s_t]");
                       throw("[errin:t_s:orr:s_t]");
            };;
        }
        //:-----------------------------------:SPARK_FADA://
        //:Durability_And_Power:-------------------------://

        //: @dap_til_dur@ : TILe ==> DURability  value   ://
        //: @dap_fad_pow@ : FADa ==> destruction POWer   ://
        //: @dap_bom_fad@ : BOMb ==> FADa value to set   ://
    
        var d_hotel13_dap_til_dur = new Uint8Array([
        //:::::::                                        ://
            0 //: Invalid Tile Type : Zero               ://
        //:::::::                                        ://
        ,   1 //: Glass_Light : VERTICAL   Auto Tiles    ://    
        ,   1 //: Glass_Light : Horizontal Auto Tiles    ://    
        ,   1 //: Glass_Light : Glass Cube Auto Tiles    :// 
        //:::::::                                        ://
        ,   2 //: Head_Bashable : Leaves Nothing         ://
        ,   2 //: Head_Bashable : Leaves Platforms       ://
        //:::::::                                        ://
        ,   3 //: Purple_Bombable #1                     ://
        ,   3 //: Purple_Bombable #2                     ://
        ,   3 //: Purple_Bombable #3                     ://
        //:::::::                                        ://
        ,   4 //: Falling_Type    #1                     ://
        ,   4 //: Falling_Type    #2                     ://
        ,   4 //: Falling_Type    #3                     ://
        //:::::::                                        ://
        ,   5 //: Vents                                  ://
        ,   5 //: Dragonite                              ://
        //:::::::                                        ://
        ,   0 //: Sprite Spawner Rect Marker : TOP_LEF   ://
        ,   0 //: Sprite Spawner Rect Marker : TOP_RIG   ://
        ]);;
        var d_hotel13_dap_fad_pow = new Uint8Array([

            0 //: Invalid Fada Type : Zero
        ,   1 //:----------------------------------------://
        ,   2 //:                                        ://
        ,   3 //: For now just keep a 1:1 relationship   ://
        ,   4 //: between the FADA tile value and the    ://
        ,   5 //: power (destructive force) it has.      ://
        ,   6 //:                                        ://
        ,   7 //: We can change this later if design     ://
        ,   8 //: decisions require it. But for now      ://
        ,   9 //: keep as simple as possible.            ://
        ,  10 //:                                        ://
        ,  11 //:                                        ://
        ,  12 //:                                        ://
        ,  13 //:                                        ://
        ,  14 //:                                        ://
        ,  15 //:----------------------------------------://
        ]);;
        var d_hotel13_dap_bom_fad = new Uint8Array([

            0 //: Invalid Bomb Type : Zero ://

        //:----------------------------------------------://
        //: SparkBoxes : Cannot destroy anything, but    ://
        //:              can be used to set off bombs    ://
        //:              and lasers.                     ://
        //:----------------------------------------------://
        ,   1   //: SparkBox . Small Cross               ://
        ,   1   //: SparkBox . Small Box                 ://
        ,   1   //: SparkBox . Small Ring                ://
        //:----------------------------------------------://
        //: Lazer Boxes : Can only break things that     ://    
        //: Alice & Ivy can also break with their head.  ://    
        //:----------------------------------------------://
        ,   2   //: Laser Diode . Left                   ://
        ,   2   //: Laser Diode . Right                  ://
        ,   2   //: Laser Diode . Top                    ://
        ,   2   //: Laser Diode . Bottom                 ://
        //:----------------------------------------------://
        //: Classic Bombs : Can destroy everything       ://
        //: except the "falling block types" ,           ://
        //: "vents" and "dragonite".                     ://
        //:----------------------------------------------://
        ,   3   //: Classic Bomb : VERTICAL              ://
        ,   3   //: Classic Bomb : HORIZONTAL            ://
        ,   3   //: Classic Bomb : SMALL FOUR WAY        ://
        ,   3   //: Classic Bomb : INSTANT KILL          ://
        //:----------------------------------------------://
        //: EchoBox Bombs : Can destroy everything       ://
        //: except "vents" and "dragonite".              ://
        //: Echo boxes can even destroy FIRON and        ://
        //: other falling block types.                   ://
        //:----------------------------------------------://
        ,   4   //: Echobox Bomb : VERTICAL              ://
        ,   4   //: Echobox Bomb : HORIZONTAL            ://
        ,   4   //: Echobox Bomb : SMALL FOUR WAY        ://
        ,   4   //: Echobox Bomb : INSTANT KILL          ://
        //:----------------------------------------------://
        ]);;

            if( 16 != d_hotel13_dap_til_dur.length
            ||  16 != d_hotel13_dap_fad_pow.length
            ||  16 != d_hotel13_dap_bom_fad.length
            ){
                //:@DAP@:Durability_And_Power://
                window.alert("[bad_array_size:DAP]");
                       throw("[bad_array_size:DAP]");
            };;
        //:-------------------------:Durability_And_Power://
        //:at4_tab:--------------------------------------://

        //: @AT4@ : AutoTile_4_Sides_Check :             ://

        //:  CHECK_LOOKUP_ORDER[ (LEF),(RIG),(TOP),(BOT) ]:::://   
        var d_hotel13_at4_l_r =[ (0-1),(0+1),( 0 ),( 0 ) ];    
        var d_hotel13_at4_t_b =[ ( 0 ),( 0 ),(0-1),(0+1) ];

        //: D is for DIVIDE here, __NOT__ delta  :-------://
        var d_hotel13_at4_d_x =[ (12 ),(12 ),( 1 ),( 1 ) ];
        var d_hotel13_at4_d_y =[ ( 1 ),( 1 ),(12 ),(12 ) ];

        //: T is tor TRANSLATE here, __NOT__ tile :------://
        //: WHICH_GET_OFFSETTED[ (LEF),(RIG),(TOP),(BOT) ];
        var d_hotel13_at4_atx =[ ( 0 ),( 1 ),( 0 ),( 0 ) ];
        var d_hotel13_at4_aty =[ ( 0 ),( 0 ),( 0 ),( 1 ) ];

        //:--------------------------------------:at4_tab://
    
        //:------------------------------------------://
        //: Don't be redundant here. Lateral offset  ://
        //: is the size of current tilemap in tiles  ://
        //: No need for[ san ]lookup table.          ://
        //:------------------------------------------://
        
        const d_hotel13_te7_t_s = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_t_w = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_t_h = "[:::FIX:::te7_peb]" ;
        const d_hotel13_te7_wid = "[te7_lat||te7_peb]" ;
        const d_hotel13_te7_hig = "[te7_lat||te7_peb]" ;
        const d_hotel13_te7_san = "[te7_lat||te7_peb]" ;

        const d_hotel13_lat_l_x = "[MAYBE::::::la3_lmx]" ;
        const d_hotel13_lat_l_y = "[MAYBE::::::la3_lmy]" ;
        const d_hotel13_lat_lmx = "[MAYBE::::::la3_lmx]" ;
        const d_hotel13_lat_lmy = "[MAYBE::::::la3_lmy]" ;
        const d_hotel13_la3_l_x = "[DEFINITELY:la3_lmx]" ;
        const d_hotel13_la3_l_y = "[DEFINITELY:la3_lmy]" ;

        const d_hotel13_la3_dia = "[YOU_MEAN:te7_dia]" ;
        const d_hotel13_la3_lat = "[YOU_MEAN:te7_lat]" ;

        //:------------------------------------------://
        //: @la3_lmx@ : layer_to_lateral_multiplier_x://
        //: @la3_lmy@ : layer_to_lateral_multiplier_y://
        //:------------------------------------------://
  
        var d_hotel13_la3_lmx =[ 0 , 1 , 0 ];//:@lmx@://
        var d_hotel13_la3_lmy =[ 0 , 0 , 1 ];//:@lmy@://

        var d_hotel13_te7_peb =[
              1 ,   2 ,   4 ,   8 ,  16 ,  32 ,  64
        //: t_0 , t_1 , t_2 , t_3 , t_4 , t_5 , t_6  ://             
        ];;
        var d_hotel13_te7_lat =[
             64 ,  32 ,  16 ,   8 ,   4 ,   2 ,   1
        //: t_0 , t_1 , t_2 , t_3 , t_4 , t_5 , t_6  ://
        ];;
        
        var d_hotel13_te7_dia =[ 
            0                                //: t_0 ://
        ,   0 + 64                           //: t_1 ://
        ,   0 + 64 + 32                      //: t_2 ://
        ,   0 + 64 + 32 + 16                 //: t_3 ://
        ,   0 + 64 + 32 + 16 + 8             //: t_4 ://
        ,   0 + 64 + 32 + 16 + 8 + 4         //: t_5 ://
        ,   0 + 64 + 32 + 16 + 8 + 4 + 2     //: t_6 ://
        ];;
        
        Object.freeze( d_hotel13_te7_peb );
        Object.freeze( d_hotel13_te7_lat );
        Object.freeze( d_hotel13_te7_dia );
        
    //:===========================:MISC_HOTEL13_LOOKUP_TABLES://
    //:ADJACENT_ROOMS_LOOKUP_TABLE:==========================://
    //:                          <>                          ://  
    //:           +---+          <>          +---+           ://    
    //:           |000|          <>          |r00|           ://    
    //:           +---+          <>          +---+           ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:      |001||002||003|     <>     |r01||r02||r03|      ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://    
    //: |004||005||006||007||008|<>|r04||r05||r06||r07||r08| ://    
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:      |009||010||011|     <>     |r09||r10||r11|      ://    
    //:      +---++---++---+     <>     +---++---++---+      ://    
    //:           +---+          <>          +---+           ://    
    //:           |012|          <>          |r12|           ://    
    //:           +---+          <>          +---+           ://    
    //:  Room_ID ( r13 )         <> Room_ID ( r13 )          ://
    //:- - - - - - - - - - - - - -- - - - - - - - - - - - - -://
    //:  Grid_ID ( g25 )         <> Grid_ID ( g25 )          ://
    //:           +---+          <>          +---+           ://
    //:  000  001 |002| 003  004 <> g00  g01 |g02| g03  g04  ://
    //:           +---+          <>          +---+           ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:  005 |006||007||008| 009 <> g05 |g06||g07||g08| g09  ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://
    //: |010||011||012||013||014|<>|g10||g11||g12||g13||g14| ://
    //: +---++---++---++---++---+<>+---++---++---++---++---+ ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:  015 |016||017||018| 019 <> g15 |g16||g17||g18| g19  ://
    //:      +---++---++---+     <>     +---++---++---+      ://
    //:           +---+          <>          +---+           ://
    //:  020  021 |022| 023  024 <> g20  g21 |g22| g23  g24  ://
    //:           +---+          <>          +---+           ://
    //:- - - - - - - - - - - - - -- - - - - - - - - - - - - -://
    if( 1 == 1 ){
    
        let  _  =( 0-4040666 ) ;
        let ___ =( 0-333_666 ) ;
        
        var d_hotel13_g25_r13 =[ //: Grid_ID ==> Room_ID ://    
            
            ( _ ),( _ ),(r00),( _ ),( _ )
        ,   ( _ ),(r01),(r02),(r03),( _ )
        ,   (r04),(r05),(r06),(r07),(r08)
        ,   ( _ ),(r09),(r10),(r11),( _ )
        ,   ( _ ),( _ ),(r12),( _ ),( _ )
        ];;
        var d_hotel13_r13_g25 =[ //: Room_ID ==> Grid_ID ://    
                        (g02) 
        ,         (g06),(g07),(g08) 
        ,   (g10),(g11),(g12),(g13),(g14)
        ,         (g16),(g17),(g18) 
        ,               (g22) 
        ];;
        
        var d_hotel13_r13_h_x =[
                            (h_x_0) 
        ,           (h_x_1),(h_x_2),(h_x_3) 
        ,   (h_x_0),(h_x_1),(h_x_2),(h_x_3),(h_x_0)
        ,           (h_x_1),(h_x_2),(h_x_3) 
        ,                   (h_x_0) 
        ];;
        var d_hotel13_r13_h_y =[
                            (h_y_0) 
        ,           (h_y_0),(h_y_0),(h_y_0) 
        ,   (h_y_1),(h_y_1),(h_y_1),(h_y_1),(h_y_2)
        ,           (h_y_2),(h_y_2),(h_y_2) 
        ,                   (h_y_3) 
        ];;
        
        //:----------------------------------------------://
        //: #IMPOSSIBLE_LOOKUP_TABLE#                    ://
        //:                                              ://
        //: You can't convert from axis position to      ://
        //: axis position like these because :           ://
        //: gxy[ 2,0 ] ===> hxy[ 0,0 ]                   ://
        //: gxy[ 1,1 ] ===> hxy[ 0,1 ]                   ://
        //: gxy[ 2,1 ] ===> hxy[ 0,2 ]                   ://
        //:                                              ://
        //: [ g_y==1 ] ===> h_y[ 1 || 2 ]                ://
        //:----------------------------------------------://
        
        var d_hotel13_g_x_h_x = "[IMPOSSIBLE_LOOKUP_TABLE]";
        var d_hotel13_g_y_h_y = "[IMPOSSIBLE_LOOKUP_TABLE]";
        
        var d_hotel13_g25_h_x =[
            ( ___ ),( ___ ),(h_x_0),( ___ ),( ___ )
        ,   ( ___ ),(h_x_1),(h_x_2),(h_x_3),( ___ )
        ,   (h_x_0),(h_x_1),(h_x_2),(h_x_3),(h_x_0)
        ,   ( ___ ),(h_x_1),(h_x_2),(h_x_3),( ___ )
        ,   ( ___ ),( ___ ),(h_x_0),( ___ ),( ___ )
        ];;
        var d_hotel13_g25_h_y =[
            ( ___ ),( ___ ),(h_y_0),( ___ ),( ___ )
        ,   ( ___ ),(h_y_0),(h_y_0),(h_y_0),( ___ )
        ,   (h_y_1),(h_y_1),(h_y_1),(h_y_1),(h_y_2)
        ,   ( ___ ),(h_y_2),(h_y_2),(h_y_2),( ___ )
        ,   ( ___ ),( ___ ),(h_y_3),( ___ ),( ___ )
        ];;
        
        //: Adjactent( render-wise )Rooms ://
        var d_hotel13_adj =[
        //: SLF, L,R,T,B  ,  (LEF),(RIG),(TOP),(BOT)
            r00, 0,0,0,1  ,  ( _ ),( _ ),( _ ),(r02)  
        ,   r01, 0,1,0,1  ,  ( _ ),(r02),( _ ),(r05)  
        ,   r02, 1,1,1,1  ,  (r01),(r03),(r00),(r06)  
        ,   r03, 1,0,0,1  ,  (r02),( _ ),( _ ),(r07)  
        ,   r04, 0,1,0,0  ,  ( _ ),(r05),( _ ),( _ )  
        ,   r05, 1,1,1,1  ,  (r04),(r06),(r01),(r09)  
        ,   r06, 1,1,1,1  ,  (r05),(r07),(r02),(r10)  
        ,   r07, 1,1,1,1  ,  (r06),(r08),(r03),(r11)  
        ,   r08, 1,0,0,0  ,  (r07),( _ ),( _ ),( _ )  
        ,   r09, 0,1,1,0  ,  ( _ ),(r10),(r05),( _ )  
        ,   r10, 1,1,1,1  ,  (r09),(r11),(r06),(r12)  
        ,   r11, 1,0,1,0  ,  (r10),( _ ),(r07),( _ )  
        ,   r12, 0,0,1,0  ,  ( _ ),( _ ),(r10),( _ )    
        ];;
        
        let l,r,t,b ;
        
    //: RoomID ==> HasAdjacentRoom[ lef | rig | top | bot ]  ://
    l=[ ___,___,r01,r02,___,r04,r05,r06,r07,___,r09,r10,___ ];   
    r=[ ___,r02,r03,___,r05,r06,r07,r08,___,r10,r11,___,___ ];
    t=[ ___,___,r00,___,___,r01,r02,r03,___,r05,r06,r07,r10 ];
    b=[ r02,r05,r06,r07,___,r09,r10,r11,___,___,r12,___,___ ];
        
        var d_hotel13_r13_adj_lef=( l ); //: r13 ==> adj_lef ://
        var d_hotel13_r13_adj_rig=( r ); //: r13 ==> adj_rig ://
        var d_hotel13_r13_adj_top=( t ); //: r13 ==> adj_top ://
        var d_hotel13_r13_adj_bot=( b ); //: r13 ==> adj_bot ://
        
        var d_hotel13_r13_g_x =[  //: RoomID ==> Grid_X ://
                            (g_x_2) 
        ,           (g_x_1),(g_x_2),(g_x_3) 
        ,   (g_x_0),(g_x_1),(g_x_2),(g_x_3),(g_x_4)
        ,           (g_x_1),(g_x_2),(g_x_3) 
        ,                   (g_x_2)
        ];;
        var d_hotel13_r13_g_y =[  //: RoomID ==> Grid_Y ://
                            (g_y_0) 
        ,           (g_y_1),(g_y_1),(g_y_1) 
        ,   (g_y_2),(g_y_2),(g_y_2),(g_y_2),(g_y_2)
        ,           (g_y_3),(g_y_3),(g_y_3) 
        ,                   (g_y_4)
        ];;
        
        //: [A]==[T_L]
        //: [B]==[T_R]
        //: [C]==[B_L]
        //: [D]==[B_R]
        
        //: Kitty Corner Rooms( render-wise )://
        var d_hotel13_kit =[
        //: SLF, A,B,C,D  ,  (T_L),(T_R),(B_L),(B_R)              
            r00, 0,0,1,1  ,  ( _ ),( _ ),(r01),(r03)              
        ,   r01, 0,1,1,1  ,  ( _ ),(r00),(r04),(r06)              
        ,   r02, 0,0,1,1  ,  ( _ ),( _ ),(r05),(r07)              
        ,   r03, 1,0,1,1  ,  (r00),( _ ),(r06),(r08)              
        ,   r04, 0,1,0,1  ,  ( _ ),(r01),( _ ),(r09)              
        ,   r05, 0,1,0,1  ,  ( _ ),(r02),( _ ),(r10)              
        ,   r06, 1,1,1,1  ,  (r01),(r03),(r09),(r11)              
        ,   r07, 1,0,1,0  ,  (r02),( _ ),(r10),( _ )              
        ,   r08, 1,0,1,0  ,  (r03),( _ ),(r11),( _ )              
        ,   r09, 1,1,0,1  ,  (r04),(r06),( _ ),(r12)              
        ,   r10, 1,1,0,0  ,  (r05),(r07),( _ ),( _ )              
        ,   r11, 1,1,1,0  ,  (r06),(r08),(r12),( _ )              
        ,   r12, 1,1,0,0  ,  (r09),(r11),( _ ),( _ )              
        ];;  //: T T B B  ,  (T_L),(T_R),(B_L),(B_R) 
        //:::::: L R L R  ,  (T_L),(T_R),(B_L),(B_R) 

    let t_l,t_r,b_l,b_r ;
    t_l=[ ___,___,___,r00,___,___,r01,r02,r03,r04,r05,r06,r09 ];   
    t_r=[ ___,r00,___,___,r01,r02,r03,___,___,r06,r07,r08,r11 ];   
    b_l=[ r01,r04,r05,r06,___,___,r09,r10,r11,___,___,r12,___ ];   
    b_r=[ r03,r06,r07,r08,r09,r10,r11,___,___,r12,___,___,___ ];   
 
        d_hotel13_r13_kit_t_l =( t_l );      
        d_hotel13_r13_kit_t_r =( t_r );      
        d_hotel13_r13_kit_b_l =( b_l );      
        d_hotel13_r13_kit_b_r =( b_r );      
                                                                  
        Object.freeze( d_hotel13_adj         );                       
        Object.freeze( d_hotel13_kit         );
        Object.freeze( d_hotel13_g25_r13     );
        Object.freeze( d_hotel13_r13_g25     );
        
        Object.freeze( d_hotel13_r13_adj_lef );
        Object.freeze( d_hotel13_r13_adj_rig );
        Object.freeze( d_hotel13_r13_adj_top );
        Object.freeze( d_hotel13_r13_adj_bot );
    };;
    //:==========================:ADJACENT_ROOMS_LOOKUP_TABLE://
    //:HELPER_FUNCTION_SECTION_I_GUESS:==================://

        const   F_HOTEL13_STR_UPP = function
        PRIVATE_F_HOTEL13_STR_UPP(

            i_str
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: An uppercase method that wont explode    ://
            //: if given invalid input. DATE[2022_07_22] ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            if(!i_str){ i_str = "" ; };
        
            var o_str =( String.prototype.toUpperCase.call(
                i_str
            ));;
            return( o_str );
        };;

        const   F_TOG = function 
        PRIVATE_F_TOG(
        
            i_sam //: stand_alone_main object ://
        ,   i_nam //: name of value to toggle ://
        ){
            if( !!( i_sam[ i_nam ] ) ){
                    i_sam[ i_nam ]=( 0 );
            }else{  i_sam[ i_nam ]=( 1 ); };
            
            var dbg_val = i_sam[ i_nam ];
            console.log( "[dbg_val]:" , dbg_val );
        };;
        
        const   F_HOTEL13_GXY_YES = function
        PRIVATE_F_HOTEL13_GXY_YES(
        
            i_g_x //: GridCell X ://
        ,   i_g_y //: GridCell Y ://
        ){
            var o_yes =( 0 );
            if( i_g_x < 0 || i_g_x >(5-1) 
            ||  i_g_y < 0 || i_g_y >(5-1)
            ){
                o_yes =( 0 );
            }else{
                var g25 =( i_g_x + ( i_g_y * 5 ) );
                var r13 = d_hotel13_g25_r13[ g25 ] ;
                if( r13 >=( 0 ) ){ o_yes =( 1 ); };
                if( r13 <=(0-1) ){ o_yes =( 0 ); };
            };;
        
            return( o_yes );
        };;

        const   F_HOTEL13_RANDINT = function
        PRIVATE_F_HOTEL13_RANDINT(

            i_bou /** Input Upper Bound **/
        ){        //: #ATF_RANDINT#     ://
            var o_i32 =(
                Math.floor( 
                    Math.random() * (i_bou+1) ));;

            ASS( o_i32 >= 0     , "[o_i32:ASS_001]" );
            ASS( o_i32 <= i_bou , "[o_i32:ASS_002]" );
            return( o_i32 );
        };;

        const   F_MMR = function
        PRIVATE_F_MMR( //: @MMR@ : Min_Max_RANDOM ://
            i_bou_min
        ,   i_bou_max
        ){
            ASS( i_bou_min <= i_bou_max , "[MIN_LT_MAX]" );
            /// zer_min =( i_bou_min - i_bou_min );
            var zer_max =( i_bou_max - i_bou_min );

            var zer_got = F_HOTEL13_RANDINT( zer_max );

            var o_i32 =( i_bou_min + zer_got );
            return( o_i32 );
        };;

        const   F_MMC = function
        PRIVATE_F_MMC( //: @MMC@ : Min_Max_Cap ://
            i_sam
        ,   i_str_key_val
        ,   i_str_key_min
        ,   i_str_key_max
        ){
            var val = i_sam[ i_str_key_val ];
            var min = i_sam[ i_str_key_min ];
            var max = i_sam[ i_str_key_max ];

            if( val < min ){ val = min ; };
            if( val > max ){ val = max ; };

            i_sam[ i_str_key_val ]=( val );
        };;
                        

    //:==================:HELPER_FUNCTION_SECTION_I_GUESS://  
    //:TILEMAP_QUERY_FUNCTIONS:==========================://

        const   F_HOTEL13_HIT_R13_TE7_LA3_TI0 = function
        PRIVATE_F_HOTEL13_HIT_R13_TE7_LA3_TI0(

            i_r13  //: Room__Index , ENCODES[ h_x , h_y ]://
        ,   i_te7  //: TileSizeEXP , ENCODES[ dia & lat ]://
        ,   i_la3  //: Layer_Index , ENCODES[ lmx , lmy ]://
        ,   i_ti0  //: Tile__Index , ENCODES[ t_x , t_y ]://   

        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //:   Returns true if the position we have   ://
            //:   selected [ HIT[s]/collides/overlaps ]  ://
            //:   with ANY SIZED TILE on the given layer.://
            //:                                          ://
            //:   Bomb system will need to use this      ://
            //:   to make explosions of different        ://
            //:   sizes detonate bombs of different      ://
            //:   sizes. We currently are using this     ://
            //:   in editor to help make a @NEXI_FLAKES@ ://
            //:   style pattern generation.              ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            //:        #_FUTURE_TICKS_HIT_LATER_NOT_NOW_#  
            const i_tik = "[#_I_TAKE_IT_BACK_2022_07_09_#]";
            

            if( d_bug >= 1 ){
               
                let max =( (64*64)-1 );
                if(!(i_r13 >= 0 && i_r13 <= (13-1) )){

                    LOG( "[i_r13]" , i_r13                );
                    YEL( "[i_r13]" , i_r13                );
                    ERR( "[r13.H][OOB_KANGA_DISSONANCE]"  );
                };;
                ASS( i_te7 >= 0 && i_te7 <= ( 7-1) ,"[te7.H]");
                if(!(i_la3 >= 0 && i_la3 <= ( 3-1) )){

                    LOG( "[i_la3]" , i_la3                );
                    YEL( "[i_la3]" , i_la3                );
                    ERR( "[la3.H][OOB_KANGA_VITAL_SIGNS]" );
                };;
                ASS( i_ti0 >= 0 && i_ti0 <= ( max) ,"[ti0.H]");
            };;

            const h_x =(d_hotel13_r13_h_x[ i_r13 ] );
            const h_y =(d_hotel13_r13_h_y[ i_r13 ] );

            var   dia =(0-404);
            var   lat =(0-606);
            
            const lmx =(d_hotel13_la3_lmx[ i_la3 ] );
            const lmy =(d_hotel13_la3_lmy[ i_la3 ] );

                  lat =( d_hotel13_te7_lat[ i_te7 ]);
            const t_x =(          ( i_ti0 % lat )  );
            const t_y =(Math.floor( i_ti0 / lat )  );
            if( d_bug >= 1 ){

                if( (!( t_x >= 0 && t_x <=(64-1) ))
                ||  (!( t_y >= 0 && t_y <=(64-1) ))
                ){
                    ERR("[OOB:t_x___orr___t_y]");
                };;
            };;

            ///   la3       ;
            ///   dia       ; //: Diagonal @d_p@ Offset  ://
            ///   lat       ; //: Lateral  @d_p@ Offset  ://
            var   dpx       ; //: DataPixel     . X  :---://
            var   dpy       ; //: DataPixel     . Y  :---://
            var   dpi       ; //: DataPixel     . I  :---://
            var   dci       ; //: DataComponent . I :----://
            var   u32       ; //: Uint32 Pixel Value     ://
            var   v16       ; //: TileValue[0-to-15]     ://
            var   tik       ; //: Tick Value Of Tile     ://
            var   te7       ; //: Tile Size Exponent     ://
            var   chk       ; //: Check your work value. ://
            var   chk_002   ; //: Check your work 002    ://

            var   dibamis         ; //:#dibamis#@dibamis@://
            var   tx0 , tx1 , ttx ; //: #tx0_tx1_ttx#    ://
            var   ty0 , ty1 , tty ; //: #ty0_ty1_tty#    ://

            var ldx = ( 512 )+(128*h_x); //:@ldx@://
            var ldy = ( 512 )+(128*h_y); //:@ldy@://

            var o_hit =( 0 );

            //:check__here:------------------------------://
            if( o_hit <= 0 ){

                dia = d_hotel13_te7_dia[ i_te7 ];
                lat = d_hotel13_te7_lat[ i_te7 ];

                //:  LOOP_DIRECTION[ NONE ] ------------ ://
                for( te7 = i_te7 ;; ){
                    
                    dia = d_hotel13_te7_dia[ te7 ];
                    lat = d_hotel13_te7_lat[ te7 ];

                    //:almost_a_cutpaste:001_of_003:-----://

                    dpx =ldx+dia+(lmx*lat)+t_x;
                    dpy =ldy+dia+(lmy*lat)+t_y ;
                    dpi =( dpx + ( dpy * 2048 ) );
                    dci =( 4 * dpi );

                    u32=(( 0x00
                    |   ( d_pix2048[ dci + 0 ] << 24 )
                    |   ( d_pix2048[ dci + 1 ] << 16 )
                    |   ( d_pix2048[ dci + 2 ] <<  8 )
                    |   ( d_pix2048[ dci + 3 ] <<  0 )
                    )>>> 0 );;
                    //:...u32.&.0x12345678...............://    
                    v16 =( u32 & 0xF0000000 ) >>>( 28 );
                    tik =( u32 & 0x0FFFFFFF ) >>>(  0 );

                    if( v16 >(   0  )  ){

                        //: Difference between[ 0x0FFFFFFF ] ://
                        //:                AND[ 0x00000000 ]?:// 
                        //: SEE[ #_DIFFERENT_ZEROS_# ]-------://

                        o_hit =( 1 );

                    };;
                    //:---------:almost_a_cutpaste:001_of_003://
                
                break ;
                };;
            };;
            //:------------------------------:check__here://
            //: ******** #_BIGGER_TILES_FIRST_# ******** :// 
            //:check_above:------------------------------://    // [H_1_3]
            if( o_hit <= 0 ){                                   // [H_1_3]
                                                                // [H_1_3]
                //:#_DIBAMIS_DIV_#://                           // [H_1_3]
                                                                // [H_1_3]
                //:  LOOP_DIRECTION[ _UP_ ] ------------ ://    // [H_1_3]
                for( te7 = i_te7+1 ; te7 <=(7-1) ; te7++ ){     // [H_1_3]
                                                                // [H_1_3]
                    dia = d_hotel13_te7_dia[ te7 ];             // [H_1_3]
                    lat = d_hotel13_te7_lat[ te7 ];             // [H_1_3]
                                                                // [H_1_3]
                    chk    =(d_hotel13_te7_lat[6-(te7-i_te7)]); // [H_1_3]
                    dibamis=(d_hotel13_te7_peb[  (te7-i_te7)]); // [H_1_3]
                    ASS( chk === dibamis , "[chk:dibamis]");    // [H_1_3]
                                                                // [H_1_3]
                    //: ttx == tx0 == tx1                       // [H_1_3]
                    //: tty == ty0 == ty1                       // [H_1_3]
                    ttx = Math.floor( t_x / dibamis );          // [H_1_3]
                    tty = Math.floor( t_y / dibamis );          // [H_1_3]
                                                                // [H_1_3]
                //:NOLOOP:===============================://    // [H_1_3]
                //:NOLOOP:===============================://    // [H_1_3]
                                                                // [H_1_3]
                    //:almost_a_cutpaste:002_of_003:-----://    // [H_1_3]
                                                                // [H_1_3]
                    dpx =ldx+dia+(lmx*lat)+ttx ;                // [H_1_3]
                    dpy =ldy+dia+(lmy*lat)+tty ;                // [H_1_3]
                    dpi =( dpx + ( dpy * 2048 ) );              // [H_1_3]
                    dci =( 4 * dpi );                           // [H_1_3]
                                                                // [H_1_3]
                    u32=(( 0x00                                 // [H_1_3]
                    |   ( d_pix2048[ dci + 0 ] << 24 )          // [H_1_3]
                    |   ( d_pix2048[ dci + 1 ] << 16 )          // [H_1_3]
                    |   ( d_pix2048[ dci + 2 ] <<  8 )          // [H_1_3]
                    |   ( d_pix2048[ dci + 3 ] <<  0 )          // [H_1_3]
                    )>>> 0 );;                                  // [H_1_3]
                    //:...u32.&.0x12345678...............://    // [H_1_3]
                    v16 =( u32 & 0xF0000000 ) >>>( 28 );        // [H_1_3]
                    tik =( u32 & 0x0FFFFFFF ) >>>(  0 );        // [H_1_3]
                                                                // [H_1_3]
                    if( v16 >(   0  )  ){                       // [H_1_3]
                                                                // [H_1_3]
                        o_hit =( 1 );                           // [H_1_3]
                    };;                                         // [H_1_3]
                    //:-----:almost_a_cutpaste:002_of_003://    // [H_1_3]
                                                                // [H_1_3]
                //:===============================:NOLOOP://    // [H_1_3]
                //:===============================:NOLOOP://    // [H_1_3]
                };;                                             // [H_1_3]
            };;                                                 // [H_1_3]
            //:------------------------------:check_above://    // [H_1_3]
            //: ******** #_SMALLER_TILES_NEXT_# ******** :// 
            //:check_below:------------------------------://
            if( o_hit <= 0 ){

                //:#_DIBAMIS_MUL_#://

                //:  LOOP_DIRECTION[ DOWN ] ------------ ://
                for( te7 = i_te7-1 ; te7 >=( 0 ) ; te7-- ){

                    dia = d_hotel13_te7_dia[ te7 ];
                    lat = d_hotel13_te7_lat[ te7 ];

                    chk    =(d_hotel13_te7_lat[6-(i_te7-te7)]);
                    dibamis=(d_hotel13_te7_peb[  (i_te7-te7)]);
                    ASS( chk === dibamis , "[c02_dibamis]" );

                    if( d_bug >= 1 ){
    
                        chk_002 =( 
                            d_hotel13_te7_lat[   te7 ]  //:MORE_TILES://
                            /                   
                            d_hotel13_te7_lat[ i_te7 ]  //:LESS_TILES://
                        );;
                        ASS( chk == chk_002 , "[C2_A]");
                        ASS( chk == dibamis , "[C2_B]");
                    };;

                    //:------------------------------://
                    //: @PARANOID@ 2022_07_10        ://
                    //: Pretty sure this formula is  ://
                    //: correct. But had a note to   ://
                    //: fix it. All testing seems to ://
                    //: say it is correct.           ://
                    //:------------------------------://
                    tx0 = ( t_x * dibamis     );
                    ty0 = ( t_y * dibamis     );
                    tx1 = ( tx0 +(dibamis)-1  );
                    ty1 = ( ty0 +(dibamis)-1  );

                for( tty = ty0 ; tty<=ty1 ; tty++ ){
                for( ttx = tx0 ; ttx<=tx1 ; ttx++ ){
                    //:almost_a_cutpaste:003_of_003:-----://

                    dpx =ldx+dia+(lmx*lat)+ttx ;
                    dpy =ldy+dia+(lmy*lat)+tty ;
                    dpi =( dpx + ( dpy * 2048 ) );
                    dci =( 4 * dpi );

                    u32=(( 0x00
                    |   ( d_pix2048[ dci + 0 ] << 24 )
                    |   ( d_pix2048[ dci + 1 ] << 16 )
                    |   ( d_pix2048[ dci + 2 ] <<  8 )
                    |   ( d_pix2048[ dci + 3 ] <<  0 )
                    )>>> 0 );;
                    //:...u32.&.0x12345678...............://    
                    v16 =( u32 & 0xF0000000 ) >>>( 28 );
                    tik =( u32 & 0x0FFFFFFF ) >>>(  0 );

                    if( v16 >(   0  )  ){

                        o_hit =( 1 );
                    };;
                    //:-----:almost_a_cutpaste:003_of_003://
                };; //:NEXT[ ttx ]://
                };; //:NEXT[ tty ]://
                };; //:NEXT[ te7 ]://
            };;
            //:------------------------------:check_below://

            return( o_hit );
        };;

    //:==========================:TILEMAP_QUERY_FUNCTIONS://    

                
    const F_HOTEL13_EXP = "[FIX:F_HOTEL13_DET]" ;
    
    //:DEBUGGING_STUFF:==================================://
    if( d_bug >= 1 ){
    
        for( let i_te7 = 0 ; i_te7 <=(7-1) ; i_te7++ ){
        
            //: Lateral Offset
            var lat =( 1+( 0x3F >>> (i_te7) ) );   //:#LATOS#://
            var chk =( d_hotel13_te7_lat[ i_te7 ] );
            if( lat != chk ){ ERR("[no_agree]"); };
            console.log( i_te7 , " ==> " , lat );
        };;
        console.log( " " );
        for( let i_te7 = 0 ; i_te7 <=(7-1) ; i_te7++ ){
        
            //: Diagonal Offset #DIAGOS#
            var dia =( 128 - Math.pow( 2 , (7-i_te7) ) );
            var chk =( d_hotel13_te7_dia[ i_te7 ] );
            if( dia != chk ){ ERR("[no_agree]" ); };
            console.log( i_te7 , " ==> " , dia );
        };;
    };;
    //:==================================:DEBUGGING_STUFF://
    //:DOE___DETONATION_OVERFLOW_EDGE:===================://
    //:                                                  ://
    //:  SO goddammed simple it's like... Why is this    ://
    //:  a function? It is a function because couldn't   ://
    //:  wrap my head around what I was doing.           ://
    //:                                                  ://
    //:  When we EXTEND explosions into another          ://
    //:  adjacent room, make the explosion start at      ://
    //:  the edge of the room it is extended into,       ://
    //:  and have the blast direction pierce further     ://
    //:  in.                                             ://
    //:                                                  ://
    //:  We were doing it another way in a few places.   ://
    //:  ( Making the origin pierce adjacent room )      ://
    //:  ( and having explosion move back towards )      ://
    //:  ( the original room.                     )      ://
    //:  ( Confusing as fuck, and would BREAK if  )      ://
    //:  ( super long blast spans multiple rooms  )      ://
    //:  ( ...like the infinite blast you want... )      ://
    //:                                                  ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    //: BLAST_DIRECTION : BAK_LEF ://
                          /// LEF ///
        const   F_HOTEL13_DOE_LEF = function
        PRIVATE_F_HOTEL13_DOE_LEF(
        
            i_lat
        ){
            return( i_lat - 1 );
        };;
    //: BLAST_DIRECTION : FWD_RIG ://
                          /// RIG ///
        const   F_HOTEL13_DOE_RIG = function
        PRIVATE_F_HOTEL13_DOE_RIG(
        
            i_lat
        ){
            return(    0  );
        };;
    //: BLAST_DIRECTION : UPP_TOP ://
                          /// TOP ///
        const   F_HOTEL13_DOE_TOP = function
        PRIVATE_F_HOTEL13_DOE_TOP(
        
            i_lat
        ){
            return( i_lat - 1 );
        };;
    //: BLAST_DIRECTION : DOW_BOT ://
                          /// BOT ///
        const   F_HOTEL13_DOE_BOT = function
        PRIVATE_F_HOTEL13_DOE_BOT(
        
            i_lat
        ){
            return(    0  );
        };;
    //:===================:DOE___DETONATION_OVERFLOW_EDGE://
    //:DETONATION_FLAME_REMAINDER:=======================://
    //:                                                  ://    
    //: Also very simple calculations that could be      ://    
    //: inlined. But performance doesn't matter if       ://    
    //: you can't comprehend what you are doing and      ://    
    //: you write buggy code ( or never finish the code )://  
    //: DATE[ 2022_07_05 ]117AM 4th of july well spent.  ://
    //:                                                  ://    
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    //: BLAST_DIRECTION : BAK_LEF ://
                          /// LEF ///
        const   F_HOTEL13_REM_LEF = function
        PRIVATE_F_HOTEL13_REM_LEF(
        
            i_lat , i_dog_x , i_lef_t 
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_dog_x)-(    0    )+1 );
            var leakage =(  i_lef_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : FWD_RIG ://
                          /// RIG ///
        const   F_HOTEL13_REM_RIG = function
        PRIVATE_F_HOTEL13_REM_RIG(
        
            i_lat , i_dog_x , i_rig_t
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_lat - 1)-(i_dog_x)+1 );
            var leakage =(  i_rig_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : UPP_TOP ://
                          /// TOP ///
        const   F_HOTEL13_REM_TOP = function
        PRIVATE_F_HOTEL13_REM_TOP(
        
            i_lat , i_dog_y , i_top_t
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_dog_y)-(    0    )+1 );
            var leakage =(  i_top_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //: BLAST_DIRECTION : DOW_BOT )://
                          /// BOT ///
        const   F_HOTEL13_REM_BOT = function
        PRIVATE_F_HOTEL13_REM_BOT(
        
            i_lat , i_dog_y , i_bot_t 
        ){
            //:------------(max_____p)-(min_____p)-------://
            var used_up =( (i_lat - 1)-(i_dog_y)+1 );
            var leakage =(  i_bot_t     -used_up );
            var subself =(  leakage - 1 );   //:#SUBSELF#://
            
            if( d_bug >= 1 ){ ASS( subself >= 0 );};
            return( subself );
        };;
    //:=======================:DETONATION_FLAME_REMAINDER://    

    const      F_HOTEL13_PUT_ANY = function(){
    ERR( "[FIX:F_HOTEL13_U32_PUT_ANY]" ); };;
    
    const      F_HOTEL13_GET_LOC = function(){
    ERR( "[FIX:F_HOTEL13_DI8_DI1::::]" ); };;
    
    const   F_HOTEL13_DI8_DI1 = function
    PRIVATE_F_HOTEL13_DI8_DI1(
    
        i_san        //: <-- 512 or 2048 , pixel span    ://
                      
    ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO| d1,d2 | 03,04 | ://
    ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO| d3,d4 | 05,06 | ://
    ,   i_te7,i_la3  //:<--LOCA:EXPALAY| d5,d6 | 07,008| ://
    ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY| d7,d8 | 09,10 | ://
    ){               //:       @d1_d2_d3_d4_d5_d6_d7_d8@ ://
        if( d_bug ){
            if(  512 == i_san ){
            
                ASS( 0 == i_c_x );
                ASS( 0 == i_c_y );
            }else
            if( 2048 == i_san ){
            
                ASS( 1 == i_c_x , "[SEE:#DIA_CITY_2048#]" );
                ASS( 1 == i_c_y , "[SEE:#DIA_CITY_2048#]" );
            }else{
                ERR("[unsupported:i_san]");
            };;
        
            if( i_t_x < 0 || i_t_y < 0  ){ ERR("[x_y]"); };
            if( i_te7 < 0 || i_te7 >= 7 ){ ERR("[te7]"); };
            
            var txy_m_i = ( d_hotel13_te7_lat[ i_te7 ] - 1 );
            if( i_t_x > txy_m_i ){ ERR("[OOB:i_t_x]" ); };
            if( i_t_y > txy_m_i ){ ERR("[OOB:i_t_y]" ); };
        };;
    
        var o_di1 =( 0 ); //:Output:I coord://
        var   o_x =( 0 ); //:Output:X coord://
        var   o_y =( 0 ); //:Output:Y coord://
        var   dia =( 0 ); //:OFFSET : DIAGONAL://
        var   lat =( 0 ); //:OFFSET : LATERAL ://
        var   l_x =( 0 ); //:Lateral X
        var   l_y =( 0 ); //:Lateral Y
        
        dia =( d_hotel13_te7_dia[ i_te7 ] );   //:#DIAGO#://
        lat =( d_hotel13_te7_lat[ i_te7 ] );   //:#LATOS#://
        
        l_x =          ( i_la3 % 2 );
        l_y =Math.floor( i_la3 / 2 );
        
        o_x += ( 512 * i_c_x ); //:City Block Size Is    ://    
        o_y += ( 512 * i_c_y ); //:MasterMemoryCell      ://    
        
        o_x += ( 128 * i_h_x ); //:Levels are 64x64 game ://
        o_y += ( 128 * i_h_y ); //:tiles in @quarkmap@.  ://
                                //:64 tiles needs 128 san://
        o_x += ( dia );
        o_y += ( dia );
        
        o_x += ( l_x * lat );
        o_y += ( l_y * lat );
        
        o_x += ( i_t_x );
        o_y += ( i_t_y );
        
        o_di1 =( o_x + ( o_y * i_san ) );
        
        if( d_bug >= 1 ){
            if( i_t_x > (lat-1) ){ ERR("[OOB_ITX]"); };
            if( i_t_y > (lat-1) ){ ERR("[OOB_ITY]"); };
        };;
        return( o_di1 );
    };;


    const   F_HOTEL13_U32_GET_ANY = function
    PRIVATE_F_HOTEL13_U32_GET_ANY(
    
        i_pix,i_san  //:<--DATA:PIXELS | a1,a2 | 01,02 | ://
    ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO| a3,a4 | 03,04 | ://
    ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO| a5,a6 | 05,06 | ://
    ,   i_te7,i_la3  //:<--LOCA:EXPALAY| a7,tl | 07,008| ://
    ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY| tx,ty | 09,10 | ://
      
    ){
        //:[ATF]:----------------------------------------://
        //:                                              ://
        //: This is a cut+paste and refactor of          ://
        //: [ F_HOTEL13_U32_PUT_ANY ], modified          ://
        //: to GET the tile value instead of PUT.        ://
        //:                                              ://
        //:----------------------------------------:[ATF]://

        var o_u32 =( 0 );      //:Output Value Is Zero If://
                               //:We Go Out Of Bounds    ://

        if( d_bug >= 1 ){
            ASS( 10 == arguments.length            ,"[GA_A1]");
            
            if( i_pix.length ==(2048*2048*4) ){
            
                ASS( 2048 == i_san , "[GASAN:2048]" );
            }else
            if( i_pix.length ==( 512*512*4) ){
            
                ASS(  512 == i_san , "[GASAN:0512]" );
            }else{
                ERR("[GA:unsupported_pix_size]");
            };;
            
            if( i_san != 2048
            &&  i_san !=  512
            ){
                ERR("[GA:Bad_Input_Span]");
            };;
            
            ASS( i_c_x >= 0 && i_c_x <= ( 3-1) , "[GA_A3]");        
            ASS( i_c_y >= 0 && i_c_y <= ( 3-1) , "[GA_A4]");
            ASS( i_h_x >= 0 && i_h_x <= ( 4-1) , "[GA_A5]");
            ASS( i_h_y >= 0 && i_h_y <= ( 4-1) , "[GA_A6]");
            ASS( i_te7 >= 0 && i_te7 <= ( 7-1) , "[GA_A7]");
            ASS( i_t_x >= 0 && i_t_x <= (64-1) , "[GA_A8]");
            ASS( i_t_y >= 0 && i_t_y <= (64-1) , "[GA_A9]");   
        };;

        var skipme =( 0 );
        var di1    =(0-1); //:1D index of pixel data://

        //:INVALID_SIZE_IS_A_CRASH:----------------------://
        if( 512 != i_san && 2048 != i_san ){
            skipme=( 1 );
            ERR("[PU:DATA_IS_INVALID_SIZE:2022_07_12]");
        };;
        //:----------------------:INVALID_SIZE_IS_A_CRASH://
        //:SKIP_IF_BAD_CITY_BLOCK:-----------------------://
        //:                                              ://
        //:  REFERENCE[ #_AIM_MASTER_MEMORY_LAYOUT_# ]   ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( 512 == i_san ){
        
            if( i_c_x != 0 ){ skipme = 1 ; };
            if( i_c_y != 0 ){ skipme = 1 ; };
        }else
        if( 2048 == i_san ){

            if( (!( 1 == i_c_x ) )
            &&  (!( 1 == i_c_y ) )
            ){
                skipme = 1 ; //:NOT WITHIN CROSS://
            }else
            if( !( i_c_x >= 0 && i_c_x <=(3-1) )
            ||  !( i_c_y >= 0 && i_c_y <=(3-1) )
            ){
                skipme = 1 ; //:NOT WITHIN 3X3 AREA://
            };;
                
        }else{
            skipme=( 1 );
            ERR( "[PU:Designed_Only_For_These_Sizes]" );
        };;
        //:-----------------------:SKIP_IF_BAD_CITY_BLOCK://
        //:CITYBLOCK_TO_1D_INDEX:------------------------://
        if( (!skipme) && d_bug ){
          
            var chk = ( i_c_x + ( i_c_y * 4 ) );
            if( 0
            &&                chk != mm1 
            &&  chk != mm4 && chk != mm5 && chk != mm6
            &&                chk != mm9
            ){
                skipme=( 1 );
                ERR("[PU:PROGRAMMER_ERROR:2022_07_12]");
            };;
        };;
        //:------------------------:CITYBLOCK_TO_1D_INDEX://
        //:FIND_DATA_PIXEL_LOCATION_XY:------------------://
        if( !skipme ){
        
            di1 =( F_HOTEL13_DI8_DI1(
                
                i_san        //:<-- Pixel Span Of Data   ://
                             
            ,   i_c_x,i_c_y  //:<---CITYBLO| d1,d2 | --- ://
            ,   i_h_x,i_h_y  //:<---HOTELRO| d3,d4 | --- ://
            ,   i_te7,i_la3  //:<---EXPALAY| d5,d6 | --- ://
            ,   i_t_x,i_t_y  //:<---Tile_XY| d7,d8 | --- ://
            ));;             //:@d1_d2_d3_d4_d5_d6_d7_d8@://
        };;
        //:------------------:FIND_DATA_PIXEL_LOCATION_XY://
        //:SET_DATA_IN_PIXEL_BUFFER:---------------------://    
        if( !skipme ){
        
            ASS( di1 >= 0          , "[PUT_DI1:TOO_LOW]" );
            ASS( di1 < (2048*2048) , "[PUT_DI1:TOO_HIG]" );

            o_u32 =(( 0x00
            |    ( ( i_pix[ (4*di1)+0 ] )<< 24 )
            |    ( ( i_pix[ (4*di1)+1 ] )<< 16 )
            |    ( ( i_pix[ (4*di1)+2 ] )<<  8 )
            |    ( ( i_pix[ (4*di1)+3 ] )<<  0 )
            ) >>> 0 );;
        };;
        //:---------------------:SET_DATA_IN_PIXEL_BUFFER://

        return( o_u32 );
    };;

    const   F_HOTEL13_U32_PUT_ANY = function
    PRIVATE_F_HOTEL13_U32_PUT_ANY(
    
        i_pix,i_san  //:<--DATA:PIXELS | a1,a2 | 01,02 | ://
    ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO| a3,a4 | 03,04 | ://
    ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO| a5,a6 | 05,06 | ://
    ,   i_te7,i_la3  //:<--LOCA:EXPALAY| a7,tl | 07,008| ://
    ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY| tx,ty | 09,10 | ://
    ,   i_u32        //:<--VALU:TileVAL| tv    | 11,12 | ://
                     
    ){
        //: TAG[ put any | PUT ANY | any put | ANY PUT ] ://
        //: TAG[ anyput | putany ]                       ://

        if( d_bug >= 1 ){
            //:------------------------------------------://
            //: Try not to bog down code with debug      ://
            //: checks like this. Try to only write      ://
            //: these types of paranoid checks when      ://
            //: code is __NOT__ working. But don't       ://
            //: do heavy checks like this preemptively.  ://
            //:------------------------------------------://
            ASS( 11 == arguments.length            ,"[A1]");
            
            if( i_pix.length ==(2048*2048*4) ){
            
                ASS( 2048 == i_san , "[PUSAN:2048]" );
            }else
            if( i_pix.length ==( 512*512*4) ){
            
                ASS(  512 == i_san , "[PUSAN:0512]" );
            }else{
                ERR("[PU:unsupported_pix_size]");
            };;
            
            if( i_san != 2048
            &&  i_san !=  512
            ){
                ERR("[PU:Bad_Input_Span]");
            };;
            
            ASS( i_c_x >= 0 && i_c_x <= (3-1)      ,"[A3]");
            ASS( i_c_y >= 0 && i_c_y <= (3-1)      ,"[A4]");
            ASS( i_h_x >= 0 && i_h_x <= (4-1)      ,"[A5]");
            ASS( i_h_y >= 0 && i_h_y <= (4-1)      ,"[A6]");
            ASS( i_te7 >= 0 && i_te7 <= (7-1)      ,"[A7]");
            ASS( i_t_x >= 0 && i_t_x <= (64-1)     ,"[A8]");
            ASS( i_t_y >= 0 && i_t_y <= (64-1)     ,"[A9]");
            ASS( i_u32 >= 0 && i_u32 <=(0xFFFFFFFF),"[AA]");   
        };;
    
        //: If put operation would go out of bounds,
        //: skip without crashing. No crash because 
        //: when "painting" a stroke that hits some
        //: of [canvas/tilemap] I think it would be
        //: pain to have crash.
        var skipme =( 0 );
        var di1    =(0-1); //:1D index of pixel data://
        
        //:INVALID_SIZE_IS_A_CRASH:----------------------://
        if( 512 != i_san && 2048 != i_san ){
            skipme=( 1 );
            ERR("[DATA_IS_INVALID_SIZE:2022_07_04]");
        };;
        //:----------------------:INVALID_SIZE_IS_A_CRASH://
        //:SKIP_IF_BAD_CITY_BLOCK:-----------------------://
        if( 512 == i_san ){
        
            //: ---------------------------------------- ://
            //: A 512x512 indicates we are editing a     ://
            //: SINGLE level pack that we are probably   ://
            //: saving into a .PNG file.                 ://
            //: Each cityblock is 512x512 in size,       ://
            //: so this offset must be zero.             ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
        
            if( i_c_x != 0 ){ skipme = 1 ; };
            if( i_c_y != 0 ){ skipme = 1 ; };
        }else
        if( 2048 == i_san ){
        
            //: ---------------------------------------- ://
            //: SEE : #_AIM_MASTER_MEMORY_LAYOUT_#       ://
            //:     : for why certain areas must         ://
            //:     : be skipped over.                   ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
        
            if( (!( 1 == i_c_x ) )
            &&  (!( 1 == i_c_y ) )
            ){
                skipme = 1 ; //:NOT WITHIN CROSS://
            }else
            if( !( i_c_x >= 0 && i_c_x <=(3-1) )
            ||  !( i_c_y >= 0 && i_c_y <=(3-1) )
            ){
                skipme = 1 ; //:NOT WITHIN 3X3 AREA://
            };;
                
        }else{
            skipme=( 1 );
            ERR( "[Designed_Only_For_These_Sizes]" );
        };;
        //:-----------------------:SKIP_IF_BAD_CITY_BLOCK://
        //:CITYBLOCK_TO_1D_INDEX:------------------------://
        if( (!skipme) && d_bug ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -:// 
            //: 4X4 Grid of 512x512 Master Memory Cells  ://
            //:- - - - - - - - - - -- - - - - - - - - - -:// 
            
            var chk = ( i_c_x + ( i_c_y * 4 ) );
            if( 0
            &&                chk != mm1 
            &&  chk != mm4 && chk != mm5 && chk != mm6
            &&                chk != mm9
            ){
                skipme=( 1 );
                ERR("[PROGRAMMER_ERROR:2022_07_04]");
            };;
        };;
        //:------------------------:CITYBLOCK_TO_1D_INDEX://
        //:FIND_DATA_PIXEL_LOCATION_XY:------------------://
        if( !skipme ){
        
            di1 =( F_HOTEL13_DI8_DI1(
                
                i_san        //:<-- Pixel Span Of Data   ://
                             
            ,   i_c_x,i_c_y  //:<---CITYBLO| d1,d2 | --- ://
            ,   i_h_x,i_h_y  //:<---HOTELRO| d3,d4 | --- ://
            ,   i_te7,i_la3  //:<---EXPALAY| d5,d6 | --- ://
            ,   i_t_x,i_t_y  //:<---Tile_XY| d7,d8 | --- ://
            ));;             //:@d1_d2_d3_d4_d5_d6_d7_d8@://
        };;
        //:------------------:FIND_DATA_PIXEL_LOCATION_XY://
        //:SET_DATA_IN_PIXEL_BUFFER:---------------------://    
        if( !skipme ){
        
            ASS( di1 >= 0 && di1 < (2048*2048) , "[di1]" );
            
            i_pix[ (4*di1)+0 ]=( i_u32 >>> 24 )&(0xFF) ;
            i_pix[ (4*di1)+1 ]=( i_u32 >>> 16 )&(0xFF) ;
            i_pix[ (4*di1)+2 ]=( i_u32 >>>  8 )&(0xFF) ;
            i_pix[ (4*di1)+3 ]=( i_u32 >>>  0 )&(0xFF) ;
        };;
        //:---------------------:SET_DATA_IN_PIXEL_BUFFER://
    };;

    const c_lay_til =( 0 ); //: Tile Data LAY In HOTEL13 ://
    const c_lay_bom =( 1 ); //: Bomb Data LAY In HOTEL13 ://
    const c_lay_fad =( 2 ); //: Foda Data LAY In HOTEL13 ://
    const F_001 =( F_HOTEL13_U32_PUT_ANY );
    
    const   F_HOTEL13_U32_PUT_TIL = function
    PRIVATE_F_HOTEL13_U32_PUT_TIL(    /// TIL ///

            i_pix,i_san  //:<--DATA:PIXELS  :------------://
        ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :------------://
        ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :------------://
        ,   i_te7        //:<--LOCA:EXPALAY :------------://
        ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :------------://
        ,   i_u32        //:<--VALU:TileVAL :------------://
    ){
        //:REMOVE_BOMB_DAMAGE://

        F_HOTEL13_U32_PUT_ANY(
            i_pix,i_san  //:<--DATA:PIXELS  :------------://
        ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :------------://
        ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :------------://
        ,   i_te7,( 2 )  //:<--LOCA:EXPALAY :------------://
        ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :------------://
        ,   0x00000000   //:<--VALU:TileVAL :------------://
        );;

        //:PUT_THE_TILE_VALUE://
        
        F_HOTEL13_U32_PUT_ANY(
            i_pix,i_san  //:<--DATA:PIXELS  :------------://
        ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :------------://
        ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :------------://
        ,   i_te7,( 0 )  //:<--LOCA:EXPALAY :------------://
        ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :------------://
        ,   i_u32        //:<--VALU:TileVAL :------------://
        );;
    };; //:DATA__LOCA_______________________________VALU ://   

    const   F_HOTEL13_U32_PUT_BOM = function
    PRIVATE_F_HOTEL13_U32_PUT_BOM(    /// BOM ///

            i_pix,i_san  //:<--DATA:PIXELS  :------------://
        ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :------------://
        ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :------------://
        ,   i_te7        //:<--LOCA:EXPALAY :------------://
        ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :------------://

        ,   i_b16        //:<--VALU:BombVAL :------------://
        ,   i_ttd        //:<--VALU:T_T_D   :------------://
    ){
        ASS( i_b16 >= 0 && i_b16 <=(16-1)      ,"[B16]");
        ASS( i_ttd >= 0 && i_ttd <=(0x0FFFFFFF),"[TTD]");
        //:------------------------(0x12345678)----------://

        //:TAG[ set bombs|set bomb  |set-bombs |set-bomb]://
        //:TAG[ lay bombs|lay mines |laymines  |laymine ]://

        var u32_tik ;
        var u32_bom ; //: Bomb Value + Timestamp ://

        if( 0 == i_ttd ){

            u32_tik=( 0 );
        }else{

            //: #_TIME_TO_DIE_NOTES_# ://
            
            u32_tik =( d_tik );;;;; //+ CORRECT! + + +//
        };;

        u32_bom =(( 0x00
        |    ((  (   i_b16 & 0x0000000F ) << (  28) )>>>0)
        |    ((  ( u32_tik & 0x0FFFFFFF ) << (   0) )>>>0)
        )>>>0 ); //:( i_var & 0x12345678 )://
        ASS(    u32_bom >= 0 , "[VAL_GT0]" );
        var chk_b16 =(( u32_bom >>> (28) )&(0xF));
        var chk_ttd =(( u32_bom &( 0x0FFFFFFF )));
        if( chk_b16 !=   i_b16 ){ ERR("[CHK_B16]"); };
        if( chk_ttd != u32_tik ){ ERR("[U32_TIK]"); };

        if( i_ttd != 0 ){
        if( chk_ttd !=   d_tik ){ ERR("[NOTDTIK]"); };
        };;

        //:lay_bomb_on_tilemap:--------------------------://

            F_HOTEL13_U32_PUT_ANY(
                i_pix,i_san  //:<--DATA:PIXELS  :--------://
            ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :--------://
            ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :--------://
            ,   i_te7,( 1 )  //:<--LOCA:EXPALAY :--------://
            ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :--------://
            ,   u32_bom      //:<--VALU:TileVAL :--------://
            );;
        //:--------------------------:lay_bomb_on_tilemap://
        //:check_that_correct_values_were_put:-----------://

            var got_bom =(
                F_HOTEL13_U32_GET_ANY(

                    i_pix,i_san  //:<--DATA:PIXELS  :----://
                ,   i_c_x,i_c_y  //:<--LOCA:CITYBLO :----://
                ,   i_h_x,i_h_y  //:<--LOCA:HOTELRO :----://
                ,   i_te7,( 1 )  //:<--LOCA:EXPALAY :----://
                ,   i_t_x,i_t_y  //:<--LOCA:Tile_XY :----://
                ));;

            if( got_bom != u32_bom ){

                ERR("[GET_PUT_FAILURE]");
            };;
        //:-----------:check_that_correct_values_were_put://

    };;
    
/// const   F_HOTEL13_U32_PUT_BOM = function
/// PRIVATE_F_HOTEL13_U32_PUT_BOM(    /// BOM ///
///          a1,a2,a3,a4,a5,a6,a7,              tx,ty,tv
/// ){F_001( a1,a2,a3,a4,a5,a6,a7,  c_lay_bom  ,tx,ty,tv );;
/// //:    01,02,03,04,05,06,07,          008  ,09,10,11 ://    
/// };; //:DATA__LOCA_______________________________VALU :// 
    
    const   F_HOTEL13_U32_PUT_FAD = function
    PRIVATE_F_HOTEL13_U32_PUT_FAD(    /// FAD ///
             a1,a2,a3,a4,a5,a6,a7,              tx,ty,tv
    ){F_001( a1,a2,a3,a4,a5,a6,a7,  c_lay_fad  ,tx,ty,tv );;
    //:    01,02,03,04,05,06,07,          008  ,09,10,11 ://    
    };; //:DATA__LOCA_______________________________VALU :// 
    
    
    //: ------------------------------------------------ ://
    //: Eventually we can build upon what the 32 bit     ://
    //: values for TIL,BOM,FAD mean, but save that       ://
    //: until we have the basic game working.            ://
    //: ------------------------------------------------ ://    
    
    
    const   F_HOTEL13_PUT_TIL = function
    PRIVATE_F_HOTEL13_PUT_TIL( 
    
        the_only_argument_is_an_object
    //: expand_on_meaning_of:TIL:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_TIL]" );    
    };;
    
    const   F_HOTEL13_PUT_BOM = function
    PRIVATE_F_HOTEL13_PUT_BOM( 
    
        the_only_argument_is_an_object 
    //: expand_on_meaning_of:BOM:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_BOM]" );
    };;
    
    const   F_HOTEL13_PUT_FAD = function
    PRIVATE_F_HOTEL13_PUT_FAD( 
    
        the_only_argument_is_an_object
    //: expand_on_meaning_of:FAD:value ://
    ){
        ERR( "[#_EXPAND_AFTER_1ST_PLAYABLE_#:PUT_FAD]" );
    };;

    //:OBLITERATE_TILE_FUNCTION:=========================://
    //:                                                  ://
    //:     Fractally obliterate a given tile.           ://
    //:                                                  ://
    //:     Change must propegate UP_AND_DOWN!!!         ://
    //:                                                  ://
    //:     PROPEGATE_UPWARD   : Fracture Bigger Tiles   ://
    //:                        : Into smaller tiles.     ://
    //:                                                  ://
    //:     PROPEGATE_DOWNWARD : Emit smaller explosions ://
    //:                        : on top of tiles found   ://
    //:                        : under larger FADA tile  ://
    //:                        : we emitted.             ://
    //:                                                  ://
    //:obliterate_tile_function:- - - - - - - - - - - - -:// 

        const   F_HOTEL13_OBE = function    //:----------://
        PRIVATE_F_HOTEL13_OBE(              //:----------://
                                            //:----------://
            i_pix,i_san  //: <--DATA:PIXELS              ://
        ,   i_c_x,i_c_y  //: <--LOCA:CITYBLOCK           ://
        ,   i_h_x,i_h_y  //: <--LOCA:HOTELROOM           ://
        ,   i_te7        //: <--LOCA:EXPALAY             ://
        ,   i_t_x,i_t_y  //: <--LOCA:Tile_XY             ://
        ,   i_f16        //: <--VALU: FADA Damage Type   ://
        ){
            //:------------------------------------------://
            //:                                          ://
            //:   Going to be hard to verify upward      ://
            //:   damage propegation without some        ://
            //:   rudimentary auto-tiling in our         ://
            //:   renderer. Finish this function         ://
            //:   after that is implemented.             ://
            //:                                          ://
            //:------------------------------------------://
            YEL( "[need_rudimentary_auto_tiling_first]" );
            if( d_bug >= 1 ){
                if(  512 == i_san ){
                
                    ASS( 0 == i_c_x , "[OBE_ICX:0512]" );
                    ASS( 0 == i_c_y , "[OBE_ICY:0512]" );
                }else
                if( 2048 == i_san ){
                
                    ASS( 1 == i_c_x , "[OBE_ICX:2048]" );
                    ASS( 1 == i_c_y , "[OBE_ICY:2048]" );
                }else{
                    ERR("[unsupported:i_san]");
                };;
            };;

            //:DataPixel_Vars:---------------------------://
    
                //:@DatPix@ : Data_Pixel / Data Pixel ...://

                var     dpx ; //: DatPix . X (x-coord  ) ://
                var     dpy ; //: DatPix . Y (y-coord  ) ://
                var     dpi ; //: DatPix . I (index    ) ://
                var     dpc ; //: DatPix . C (component) ://
                var     dpu ; //: DatPix . U (unsigned ) ://

                var obe_dpx = new Uint8Array( 3 );
                var obe_dpy = new Uint8Array( 3 );
                var obe_dpi = new Uint8Array( 3 );
                var obe_dpc = new Uint8Array( 3 );
                var obe_dpu = new Uint8Array( 3 );

            //:---------------------------:DataPixel_Vars://
            //:Tile_Vars:--------------------------------://

                //: til_o_x == obe_o_x[ 0 ]
                //: til_o_y == obe_o_y[ 0 ]
                //:
                //: bom_o_x == obe_o_x[ 1 ]
                //: bom_o_y == obe_o_y[ 1 ]
                //:
                //: fad_o_x == obe_o_x[ 2 ]
                //: fad_o_y == obe_o_y[ 2 ]

                //: til_v16 == obe_v16[ 0 ]
                //: til_tik == obe_tik[ 0 ]
                //:
                //: bom_v16 == obe_v16[ 1 ]
                //: bom_tik == obe_tik[ 1 ]
                //:
                //: fad_v16 == obe_v16[ 2 ]
                //: fad_tik == obe_tik[ 2 ]

                var obe_v16 = new Uint8Array( 3 );
                var obe_tik = new Uint8Array( 3 );
                var obe_o_x = new Uint8Array( 3 );
                var obe_o_y = new Uint8Array( 3 );

                var t_b_f ; //: t == 0 === tile ://
                            //: b == 1 === bomb ://
                            //: f == 2 === fada ://
                            //: #_DIA_T_B_F_#   ://

                //:------------:0x12345678 :-------------://
                const msk_v16 = 0xF0000000 ;
                const msk_tik = 0x0FFFFFFF ;
                //:------------:0x12345678 :-------------://

            //:--------------------------------:Tile_Vars://

            var dia     = d_hotel13_te7_dia[ i_te7 ];
            var lat     = d_hotel13_te7_lat[ i_te7 ];

            var lev_o_x = ( 512*i_c_x)+(i_h_x*128) ;
            var lev_o_x = ( 512*i_c_y)+(i_h_y*128) ;

            //:       0   1   2
            //:#_DIA_TIL_BOM_FAD_#://
            //:      

            //:TIL://
            obe_o_x[0] =( 512*i_c_x)+(i_h_x*128)+dia+( 0 );
            obe_o_y[0] =( 512*i_c_y)+(i_h_y*128)+dia+( 0 );

            //:BOM://
            obe_o_x[1] =( 512*i_c_x)+(i_h_x*128)+dia+(lat);
            obe_o_y[1] =( 512*i_c_y)+(i_h_y*128)+dia+( 0 );

            //:FAD://
            obe_o_x[2] =( 512*i_c_x)+(i_h_x*128)+dia+( 0 );
            obe_o_y[2] =( 512*i_c_y)+(i_h_y*128)+dia+(lat);

            //:Current_Level:----------------------------://    
            for( t_b_f = 0 ; t_b_f <=(3-1) ; t_b_f++ ){

                dpx = obe_o_x[t_b_f] + i_t_x ;
                dpy = obe_o_y[t_b_f] + i_t_y ;
                dpi =( dpx + ( dpy * i_san ) );
                dpc =( dpi * 4 );
                dpu=(( 0x00
                |   ( d_pix2048[ dpc + 0 ] << 24 )
                |   ( d_pix2048[ dpc + 1 ] << 16 )
                |   ( d_pix2048[ dpc + 2 ] <<  8 )
                |   ( d_pix2048[ dpc + 3 ] <<  0 )
                )>>> 0 );;
                //:...u32.&.0x12345678...............://    
                obe_v16[t_b_f] =( dpu & msk_v16 ) >>>( 28 );
                obe_tik[t_b_f] =( dpu & msk_tik ) >>>(  0 );

                obe_dpx[t_b_f] =( dpx );
                obe_dpy[t_b_f] =( dpy );
                obe_dpi[t_b_f] =( dpi );
                obe_dpc[t_b_f] =( dpc );
                obe_dpu[t_b_f] =( dpu );

            };;
            //:----------------------------:Current_Level://

            //:TRIPPED_BOMBS_MUST_ANIMATE_FIRST://

        };;

    //:=========================:OBLITERATE_TILE_FUNCTION://

    const   F_HOTEL13_DET = function
    PRIVATE_F_HOTEL13_DET(
    
        i_g5x     //: GridCell Overlay X ://
    ,   i_g5y     //: GridCell Overlay Y ://
    ,   i_te7     //: What Tile Size Is The Bomb? ://
    
    ,   i_dog_x //:Detonation Point X (in room coords)
    ,   i_dog_y //:Detonation Point Y (in room coords)
    
    ,   i_lef_t //:Explosion  SPAN : LEFT
    ,   i_rig_t //:Explosion  SPAN : RIGHT
    ,   i_top_t //:Explosion  SPAN : TOP
    ,   i_bot_t //:Explosion  SPAN : BOTTOM
    
    ,   i_explo_box //:Is Box Filled Explosion?
    ,   i_recursive //:True if emitted by[ DET ]
                    //:function itself, needed to avoid
                    //:SFX being called more than once.
    ){
        ERR( "[TODO: i_explo_box must be refactored into explosion style enum]" );


        if( d_bug >=1 ){
            if( i_g5x < 0 || i_g5x >= 4 ){ERR("[ihx]"); };
            if( i_g5y < 0 || i_g5y >= 4 ){ERR("[ihy]"); };
            if( i_dog_x < 0 ){ ERR("[NEGDETON:X]"); };
            if( i_dog_y < 0 ){ ERR("[NEGDETON:Y]"); };
        };;
        
        let REM_LEF = F_HOTEL13_REM_LEF ;
        let REM_RIG = F_HOTEL13_REM_RIG ;
        let REM_TOP = F_HOTEL13_REM_TOP ;
        let REM_BOT = F_HOTEL13_REM_BOT ;
        
        const _____ =( 0 );
        
        const i_r13 = "[INDEX_WAS_A_BAD_IDEA:USE:h_x:h_y]" ;
        
        const not_box =( 0 );
        const yes_box =( 1 );
        
        //:#_BIG_BOMBS_DESIGN_DECISON_#://
        //:#_RECURSION_TO_SOLVE_OUT_OF_ROOM_PROBLEM_#://
    
        var lef,rig,top,bot;
        
        var ovr_lef ; //:flame OVeR_flow:LEFT  ://
        var ovr_rig ; //:flame OVeR_flow:RIGHT ://
        var ovr_top ; //:flame OVeR_flow:TOP   ://
        var ovr_bot ; //:flame OVeR_flow:BOTTOM://
        
        const recursive_yes =( 1 );
        
        //: #_WHY_COE_START_AT_512_#
        var coe_p_x = 512; //: @cen_of_exp_pix@ X ://    
        var coe_p_y = 512; //: @cen_of_exp_pix@ Y ://
        var coe_p_i ; //:centerofexplosionpixelindex://
        var     h_i = "[USE:r13:room_id]" ;
        var     g25 ; //:Grid ID://
        var     r13 ; //:Room ID://
        var     p_i ; //:pixelindex://
        var     c_i ; //:componentindex://
        
        const   r13_kit =( "[FIX:kit_r13]" );
        
        var     kit_r13 ; //:kitty corner room id
        var     kit_g5x ; //:kitty gridcell x
        var     kit_g5y ; //:kitty gridcell y
        
        var     adj_r13 ; //:adjacent_room_id
        var     adj_g5x ; //:adjacent_gridcell_x
        var     adj_g5y ; //:adjacent_gridcell_Y
        
        var     doe_x   ; //:Detonation_Overflow_Edge
        var     doe_y   ; //:Detonation_Overflow_Edge
        
        g25 = ( i_g5x + ( i_g5y * 5 ) );
        r13 = d_hotel13_g25_r13[ g25 ];
        h_x = d_hotel13_g25_h_x[ g25 ];
        h_y = d_hotel13_g25_h_y[ g25 ];
        ASS( r13 >= 0 );
        
        if( d_bug >= 1 ){
        
            var chk_h_x =           ( r13 % 4 );
            var chk_h_y = Math.floor( r13 / 4 );
            
            if( chk_h_x <( 0 ) ){ERR("[h_x:NEG]");};    
            if( chk_h_y <( 0 ) ){ERR("[h_y:NEG]");};
            if( chk_h_x >(4-1) ){ERR("[h_x:POS]");};
            if( chk_h_y >(4-1) ){ERR("[h_y:POS]");};
            
            if( chk_h_x != h_x ){ ERR("[CHECKFAIL:h_x]"); };    
            if( chk_h_y != h_y ){ ERR("[CHECKFAIL:h_y]"); };
        };;
        
        //:---------------------------------://
        //: @dia@ : Diagonal Offset In Data ://
        //: @lat@ : Lateral  Offset In Data ://
        //: @coe@ : Core_Of_Explosions      ://
        //: @coe_p_x@ : COE - Pixel X       ://
        //: @coe_p_y@ : COE - Pixel Y       ://
        //:---------------------------------://
        
        var dia =(d_hotel13_te7_dia[ i_te7 ] );    //:#DIAGO#://
        var lat =(d_hotel13_te7_lat[ i_te7 ] );    //:#LATOS#://
        
        coe_p_x +=( h_x * 128 );
        coe_p_y +=( h_y * 128 );
        
        coe_p_x +=( dia );
        coe_p_y +=( dia );
        
        coe_p_x +=( lat ); //: HardCoded To Access The   ://
        coe_p_y +=(  0  ); //: Bombs Layer( lay == 1 )   ://
        
        coe_p_x += dog_x ;
        coe_p_y += dog_y ;
        
        if( d_bug >= 1 ){
            if( dog_x >= lat ){ ERR("[POSDETON:X]"); };
            if( dog_y >= lat ){ ERR("[POSDETON:Y]"); };
        };;
        
        //:Find Last Cells Of Explosion://
        lef = ( dog_x - i_lef_t );
        rig = ( dog_x + i_rig_t );
        top = ( dog_y - i_top_t );
        bot = ( dog_y + i_bot_t );
        
        //:RECURSION_ZONE:-------------------------------://
        //:                                              ://
        //:  Truncate Explosion Size To Fit Witin Bounds ://
        //:  of current [ level / room ] and re-emit     ://
        //:  chopped-off explosions into respective      ://
        //:  adjacent rooms.                             ://
        //:                                              ://
        //:- - - - - - - - - - - - - - - - - - - - - - - ://
        if( i_explo_box <= 0 ){ //:Cross Explosion://
        
            if( lef <  (0) ){
            
                adj_r13 = d_hotel13_r13_adj_lef[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_LEF( lat )           );
                rem_x =(REM_LEF( lat , i_dog_x , i_lef_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( rem_x ),( _____ ),( _____ ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( rig >= lat ){
            
                adj_r13 = d_hotel13_r13_adj_rig[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_RIG( lat )           );
                rem_x =(REM_RIG( lat , i_dog_x , i_rig_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( _____ ),( rem_x ),( _____ ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( top <  (0) ){
            
                adj_r13 = d_hotel13_r13_adj_top[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =i_g5x ;
                adj_g5y =d_hotel13_r13_g_y[ adj_r13 ];
                    
                doe_y =(F_HOTEL13_DOE_TOP( lat )           );
                rem_y =(REM_TOP( lat , i_dog_y , i_top_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      )
                ,   ( _____ ),( _____ ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
            if( bot >= lat ){
            
                adj_r13 = d_hotel13_r13_adj_bot[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =i_g5x ;
                adj_g5y =d_hotel13_r13_g_y[ adj_r13 ];
                    
                doe_y =(F_HOTEL13_DOE_BOT( lat )           );
                rem_y =(REM_BOT( lat , i_dog_y , i_bot_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      )
                ,   ( _____ ),( _____ ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   not_box,recursive_yes
                );;                 
            };;};;
        }else
        if( i_explo_box >= 1 ){
        
            //: ---------------------------------------- ://
            //: Don't bother commeting this... This is   ://
            //: too confusing for even comments to help  ://
            //: us understand the math. We need to       ://
            //: document it with a code-review video.    ://
            //: ---------------------------------------- ://
        
            var oob_lef =!!( lef <   0  );
            var oob_rig =!!( rig >= lat );
            var oob_top =!!( top <   0  );
            var oob_bot =!!( bot >= lat );
            
            /////// LEF ////// TOP /////////////////////////////
            if( oob_lef && oob_top ){       //:OOB_CORNER:T_L://
            
                kit_r13 = d_hotel13_r13_kit_t_l[ r13 ];
                                        //: t_l == TOP+LEF   ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_LEF( lat );
                doe_y = F_HOTEL13_DOE_TOP( lat );
                
                rem_x = REM_LEF( lat , i_dog_x , i_lef_t );
                rem_y = REM_TOP( lat , i_dog_y , i_top_t );
                
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( rem_x ),( _____ ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// RIG ////// BOT /////////////////////////////
            if( oob_rig && oob_bot ){       //:OOB_CORNER:B_R://
            
                kit_r13 = d_hotel13_r13_kit_b_r[ r13 ];
                                        //: b_r ==BOT+RIG    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_RIG( lat );
                doe_y = F_HOTEL13_DOE_BOT( lat );
                
                rem_x = REM_RIG( lat , i_dog_x , i_rig_t );
                rem_y = REM_BOT( lat , i_dog_y , i_bot_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( _____ ),( rem_x ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// RIG ////// TOP /////////////////////////////
            if( oob_rig && oob_top ){       //:OOB_CORNER:T_R://
            
                kit_r13 = d_hotel13_r13_kit_t_r[ r13 ];
                                        //: t_r ==TOP+RIG    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_RIG( lat );
                doe_y = F_HOTEL13_DOE_TOP( lat );
                
                rem_x = REM_RIG( lat , i_dog_x , i_rig_t );
                rem_y = REM_TOP( lat , i_dog_y , i_top_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( _____ ),( rem_x ),( rem_y ),( _____ )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            /////// LEF ////// BOT /////////////////////////////
            if( oob_lef && oob_bot ){       //:OOB_CORNER:B_L://
            
                kit_r13 = d_hotel13_r13_kit_b_l[ r13 ];
                                        //: b_l ==BOT+LEF    ://
            if(            
                kit_r13 >= 0 //: KIT_ROOM_EXISTS ://    
            ){
                kit_g5x =d_hotel13_r13_g_x[ kit_r13 ];
                kit_g5y =d_hotel13_r13_g_y[ kit_r13 ];
                
                doe_x = F_HOTEL13_DOE_LEF( lat );
                doe_y = F_HOTEL13_DOE_BOT( lat );
                
                rem_x = REM_LEF( lat , i_dog_x , i_lef_t );
                rem_y = REM_BOT( lat , i_dog_y , i_bot_t );
                 
                F_HOTEL13_DET(
                    (    kit_g5x      ),(    kit_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(      doe_y      )
                ,   ( rem_x ),( _____ ),( _____ ),( rem_y )
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;
            };;};;
            
            if( oob_lef ){
            
                adj_r13 = d_hotel13_r13_adj_lef[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_LEF( lat )           );
                rem_x =(REM_LEF( lat , i_dog_x , i_lef_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( rem_x ),( _____ ),(i_top_t),(i_bot_t)
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
                
            if( oob_rig ){
            
                adj_r13 = d_hotel13_r13_adj_rig[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_x =(F_HOTEL13_DOE_RIG( lat )           );
                rem_x =(REM_RIG( lat , i_dog_x , i_rig_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (      doe_x      ),(    i_dog_y      )
                ,   ( _____ ),( rem_x ),(i_top_t),(i_bot_t)
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            
            if( oob_top ){
            
                adj_r13 = d_hotel13_r13_adj_top[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_y =(F_HOTEL13_DOE_TOP( lat )          );
                rem_y =(REM_TOP( lat , i_dog_x , i_top_t ));
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      ) 
                ,   (i_lef_t),(i_rig_t),( rem_y ),( _____ ) 
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            if( oob_bot ){
            
                adj_r13 = d_hotel13_r13_adj_bot[ r13 ];
                
            if( adj_r13>=( 0 )){ //:#_EMI_IF_ADJ_#://
                    
                adj_g5x =d_hotel13_r13_g_x[ adj_r13 ];
                adj_g5y =i_g5y ;
                    
                doe_y =(F_HOTEL13_DOE_BOT( lat )           );
                rem_y =(REM_BOT( lat , i_dog_x , i_bot_t ) );
                
                F_HOTEL13_DET(
                    (    adj_g5x      ),(    adj_g5y      )
                ,   (      i_te7      )
                ,   (    i_dog_x      ),(      doe_y      ) 
                ,   (i_lef_t),(i_rig_t),( _____ ),( rem_y ) 
                //: (  LEF  ),(  RIG  ),(  TOP  ),(  BOT  )  ://
                ,   yes_box,recursive_yes
                );;                 
            };;};;
            
            
        
        }else{
            ERR("[BadExplosionShape]");
        };;
        //:-------------------------------:RECURSION_ZONE://
        //:TRUNCATE_DETONATION_HERE:---------------------://
        //:                                              ://
        //:  Might look like we forgot a (+1) because    ://
        //:  we are doing math with two inclusive        ://
        //:  points here. But we are not, it is getting  ://
        //:  cancelled out by #SUBSELF#.                 ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        
            if(     oob_lef ){
                i_lef_t =( (i_dog_x)-(    0    ) );
            };;
            if(     oob_rig ){
                i_rig_t =( ( lat - 1 )-(i_dog_x) );
            };;
            if(     oob_top ){
                i_top_t =( (i_dog_y)-(    0    ) );
            };;
            if(     oob_bot ){
                i_bot_t =( ( lat - 1 )-(i_dog_y) );
            };;
        //:---------------------:TRUNCATE_DETONATION_HERE://
        //:ERROR_CHECKING_TRUNCATION_ZONE:---------------://
        //:                                              ://
        //:  Explosion should have been truncated to     ://
        //:  fit exactly within bounds of the current    ://
        //:  room. Any leakage into other rooms being    ://
        //:  fixed by recursive calls.                   ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( d_bug >= 1 ){
        
            var b_l,b_r,b_t,b_b;//:BOUNDS:lef,rig,top,bot://
            b_l =( i_dog_x - i_lef_t );
            b_r =( i_dog_x + i_rig_t );
            b_t =( i_dog_y - i_top_t );
            b_b =( i_dog_y + i_bot_t );
            if( !(b_l>=(    0)) ){ ERR("[@PIS@:001]"); };
            if( !(b_r<=(lat-1)) ){ ERR("[@PIS@:002]"); };
            if( !(b_t>=(    0)) ){ ERR("[@PIS@:003]"); };
            if( !(b_b>=(lat-1)) ){ ERR("[@PIS@:004]"); };
        };;
        //:---------------:ERROR_CHECKING_TRUNCATION_ZONE://
        //:What_Ticker_Are_We_Using:---------------------://
        {
            //: var tik_bom =( 0 );
            //: 
            //: if( d_hotel13_yes_aim ){
            //: 
            //:     tik_bom = d_tik ;//:Atomic_IVY_MMO:Ticker://
            //: }else
            //: if( d_hotel13_not_aim ){
            //: 
            //:     tik_bom = d_hotel13_sam.tik_num ;
            //: }else{
            //:     ERR("[WTF:TICKER]");
            //: };;

            tik_bom =( d_tik );
        }
        //:---------------------:What_Ticker_Are_We_Using://
        //:SET_FLAMES_ARE_DAMAGE_TIMESTAMPS:-------------://
        //:                                              ://    
        //: By this time, the explosion has been         ://    
        //: truncated to fit within the room, so         ://    
        //: we don't have to worry about out of bounds   ://    
        //: cell indexes here.                           ://    
        //:                                              ://    
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( i_explo_box <= 0 ){ //:Cross Explosion://
        
            let pix =( d_pix2048 );
            coe_p_i = coe_p_x +( coe_p_y * 2048 );
        
            //:Center Explosion://
            p_i = coe_p_i;
            pix[ (4*p_i)+0 ]=( (tik_bom >>> 24)&(0xFF) );
            pix[ (4*p_i)+1 ]=( (tik_bom >>> 16)&(0xFF) );
            pix[ (4*p_i)+2 ]=( (tik_bom >>>  8)&(0xFF) );
            pix[ (4*p_i)+3 ]=( (tik_bom >>>  0)&(0xFF) );
            
            for( lef = 1 ; lef <= i_lef_t ; lef ++ ){
            
                p_i = coe_p_i - lef ;
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( rig = 1 ; rig <= i_rig_t ; rig ++ ){
            
                p_i = coe_p_i + rig ;
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( top = 1 ; top <= i_top_t ; top ++ ){
            
                p_i = coe_p_i -(top*2048);
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
            for( bot = 1 ; bot <= i_bot_t ; bot ++ ){
            
                p_i = coe_p_i +(bot*2048);
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) );
            };;
        }else
        if( i_explo_box >= 1 ){ //:Box Explosion://
        
            let pix =( d_pix2048 );
            coe_p_i = coe_p_x +( coe_p_y * 2048 );
            
            var org ; //:origin pixel index://
            var wid =( i_lef_t+1+i_rig_t );
            var hig =( i_top_t+1+i_bot_t );
            
            //:----------------------------------------://
            //: org : Top left origin of box explosion ://   
            //:----------------------------------------://
            
            org =( coe_p_i 
                    -( i_lef_t        )
                    -( i_top_t * 2048 )
            );;
            
            p_i =( org - 2048 - 1 ); //:#_BLP_#://
            for( var o_y = 0 ; o_y <=(hig-1) ; o_y ++ ){
            p_i +=( 2048 );
            for( var o_x = 0 ; o_x <=(wid-1) ; o_x ++ ){
            p_i +=(    1 );
            
                c_i =(4*p_i);
                pix[ c_i+0 ]=( (tik_bom >>> 24)&(0xFF) );
                pix[ c_i+1 ]=( (tik_bom >>> 16)&(0xFF) );
                pix[ c_i+2 ]=( (tik_bom >>>  8)&(0xFF) );
                pix[ c_i+3 ]=( (tik_bom >>>  0)&(0xFF) ); 
            };;};;
        
        }else{
            ERR("[BADBOXFLAG]");
        };;
        //:-------------:SET_FLAMES_ARE_DAMAGE_TIMESTAMPS://
    };; //:END[ F_HOTEL_DET ]::::::::::::::::::::::::::::://


    const   F_HOTEL13_DET_BOM = function
    PRIVATE_F_HOTEL13_DET_BOM(

        i_g5x     //: GridCell Overlay X ://
    ,   i_g5y     //: GridCell Overlay Y ://
    ,   i_te7     //: What Tile Size Is The Bomb? ://
    
    ,   i_dog_x //:Detonation Point X (in room coords)
    ,   i_dog_y //:Detonation Point Y (in room coords)

    ,   i_bte     //: @bte@ : Bomb_Type_Enumeration ://
    ){

        let       lut = d_bte_exs_lef_rig_top_bot;

        var exs = lut[ (i_bte*5)+0 ]; //:ExplosionStyle  ://
        var lef = lut[ (i_bte*5)+1 ]; //:JUMPS_TO: LEFT  ://
        var rig = lut[ (i_bte*5)+2 ]; //:JUMPS_TO: RIGHT ://
        var top = lut[ (i_bte*5)+3 ]; //:JUMPS_TO: TOPPUM://
        var bot = lut[ (i_bte*5)+4 ]; //:JUMPS_TO: BOTTOM://
    
        F_HOTEL13_DET(

            i_g5x     //: GridCell Overlay X          :--://
        ,   i_g5y     //: GridCell Overlay Y          :--://
        ,   i_te7     //: What Tile Size Is The Bomb? :--://
        
        ,   i_dog_x   //: [DET] Point X (in room coords) ://
        ,   i_dog_y   //: [DET] Point Y (in room coords) ://

        ,     lef
        ,     rig
        ,     top
        ,     bot
        ,     exs     //: explosion style                ://

        ,   (   0   ) //: call not result of recursion   ://
        );;
    };;




    const   F_HOTEL13_TIK = function
    PRIVATE_F_HOTEL13_TIK(
    
        //:----------------------------------://
        //: No Arguments. Update Simulation. ://
        //:----------------------------------://
    ){
    
        //: -------------------------------------------- ://
        //: Simulation does NOT need to update tile      ://
        //: values, because the[ FADA ]are used          ://
        //: in shader code to decide if a tile has       ://
        //: been destroyed.                              ://
        //: -------------------------------------------- ://
        
        var  r13 ; //: One of 13 rooms being updated.    ://
        var  h_x ; //: Hotel Room X ( r13 as h_x & h_y ) ://
        var  h_y ; //: Hotel Room Y ( r13 as h_x & h_y ) ://
        
    //:[ LOOP : TILE ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //: ---------------------------------------- ://
            //: Tile Loop. Do NOTHING. Shader Code ..... ://
            //: determines if we should render as not    ://
            //: existing. We never physically remove     ://
            //: the tile.                                ://
            //: ---------------------------------------- ://
        };;
        
    //:[ LOOP : BOMB ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //: ---------------------------------------- ://    
            //: Find bombs with EXPIRED TIMERS and emit  ://
            //: flames by calling[ DET ]function.        ://    
            //: [ DET ]will propegate INVISIBLE DAMAGE   ://
            //: to smaller cells. So small bombs only    ://
            //: need to check for flames in THEIR TILE   ://
            //: or LARGER overlapping tile.              ://
            //: ---------------------------------------- ://
            
            h_x = ( r13 % 4 );
            h_y = Math.floor( r13 / 4 );
            
           // slfjlsfjlsjfldsk
            
        };;
        
        
    //:[ LOOP : FADA ]://
    
        for( r13 = 0 ; r13 <=(13-1) ; r13 ++ ){
        
            //:------------------------------------------://
            //:                                          ://
            //: DONT NEED DOUBLE BUFFER FOR LOGIC HERE.  ://
            //:                                          ://
            //: B1 : NOT-detonated bomb this frame.      ://
            //: EX : EX (explosion), detonated bomb.     ://
            //: B2 : DETONATED BOMB this frame.          ://
            //: ** : Explosion Flames.                   ://
            //:                                          ://
            //: B1 is NOT-detonated , EX update is after.://
            //: B2 is YES-detonated , EX update is before://
            //:                                          ://
            //: As long as bombs have a slight delay     ://
            //: between being tripped by flames and      ://
            //: detonation, we should be able to         ://
            //: __AVOID__ double buffering.              ://
            //:                                          ://
            //: SPECIFICALLY :                           ://
            //:     AVOID 2 PASS PROCESS OF :            ://
            //:     1. Emit All Flames From EBOMBS       ://
            //:     2. Trip New Bombs Using Flames       ://
            //:                                          ://
            //:     *EBOMBS == Exploded Bombs            ://
            //:                                          ://
            //:  v1  v2  v3  v4  v5 ( cell visit order ) ://
            //:  ||  ||  ||  ||  ||                      ://
            //:  ||  ||  ||  ||  ||                      ://
            //:  VV  VV  VV  VV  VV                      ://
            //: [**][**][EX][**][**] <-- SAME_LAYER      ://
            //: [B1]    [**]    [B2] <-- SAME_LAYER      ://
            //:                                          ://
            //:------------------------------------------://
        };;
    
        console.log("heyyyo");
    };;
    
   ////////// function TEST_SIMULATION_PERFORMANCE( ){
   ////////// 
   //////////     F_HOTEL13_TIK();
   //////////     
   //////////     
   //////////     window.setTimeout( 
   //////////         TEST_SIMULATION_PERFORMANCE
   //////////     ,  (1000 / 30) //:30FPS://
   //////////     );;
   ////////// 
   ////////// };;
   ////////// 
   ////////// TEST_SIMULATION_PERFORMANCE();

    //:HOTEL13_URL_TO_PNG_FILE_NAME:=====================://

        const   F_HOTEL13_URL_PNGNAME = function
        PRIVATE_F_HOTEL13_URL_PNGNAME(

            i_url
        ){
            var o_pngname =( "TODO.PNG" );

            ERR( "[use:F_HOTEL13_XYZ_PNGNAME]" );
            
            return( o_pngname );
        };;
    //:=====================:HOTEL13_URL_TO_PNG_FILE_NAME://
    //:HOTEL13_IS_3_DIGIT_NUMSTRING:=====================://

        const   F_HOTEL13_YES3DIG = function
        PRIVATE_F_HOTEL13_YES3DIG(

            i_str
        ){
            var o_yes =( 0 );
            if(!i_str){ i_str="" ; };

            if( 3 != i_str.length ){ o_yes =( 0-8675309 ); };

            if( o_yes > 0 ){

                for( var dex = 0 ; dex <=(3-1) ; dex++ ){

                    if( "0" === i_str[ dex ]
                    ||  "1" === i_str[ dex ]
                    ||  "2" === i_str[ dex ]
                    ||  "3" === i_str[ dex ]
                    ||  "4" === i_str[ dex ]
                    ||  "5" === i_str[ dex ]
                    ||  "6" === i_str[ dex ]
                    ||  "7" === i_str[ dex ]
                    ||  "8" === i_str[ dex ]
                    ||  "9" === i_str[ dex ]
                    ){
                        /** OK. Do nothing. **/
                    }else{
                        
                        o_yes =( 0 - 42069 );
                    };;
                };;
            }else
            if( (!(o_yes < 0)) ){
                /**Donothing**/
            }else{
                ERR("[unexpected_case]");
            };;

            return( o_yes );
        };;
    //:=====================:HOTEL13_IS_3_DIGIT_NUMSTRING://
    //:HOTEL13_XYZ_TO_PNG_FILE_NAME:=====================://

        const   F_HOTEL13_PAD_STR = function
        PRIVATE_F_HOTEL13_PAD_STR(

            i_str
        ){
            if( "string" != typeof i_str ){
                ERR("[BADINPUT:PAD_STR]");
            };;

            var o_str =( i_str );

            //:::::::::::::::::::::::::::://
            //: Add Leading Zeros        ://
            //:::::::::::::::::::::::::::://
            while( 1 == 1 ){
                if( 3 > o_str.length ){

                    o_str = "0" + o_str ;  //:<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI : extracted functionality. Is it correct?
                }else{
                    break;
                };;
            };;

            return( o_str );
        };;

        const   F_HOTEL13_I32_STR = function
        PRIVATE_F_HOTEL13_I32_STR(
        
            i_i32
        ){
            var o_str = "" ;
            if( "undefined" === typeof i_i32 ){
                o_str = "???" ;
            }else{

                o_str =( ""+i_i32+"" );
            };;

            o_str = F_HOTEL13_PAD_STR( o_str ); //:<<<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI : refactor site.

            return( o_str );
        };;

        const   F_HOTEL13_I32_S3D = function
        PRIVATE_F_HOTEL13_I32_S3D(

            i_i32
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://    
            //:  Convert Integer to 3 Digit String       ://
            //:  ( I32 ) ==============> ( S3D )         ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            if( "number" != typeof i_i32 ){
                ERR("[INVALID_INPUT:I32_S3D]");
            };;
            if( i_i32 < 0 || i_i32 >(512-1) ){
                LOG("[NUMBER_OUTSIDE_OF_ALLOWED_BOUNDS]");
                i_i32 =( 606 /** 606 : SIXOHSIX**/ );
                /** ************************************ **/
                /** Don't crash server if someone enters **/    
                /** out of bound value in address bar,   **/
                /** but change number to "606" to signal **/
                /** the nature of the problem.           **/
                /** ************************************ **/
            };;
            var o_str =( ""+i_i32+"" );
            var   nod =( o_str.length ); //:@nod@://
            var   miz =( 3 - nod      ); //:@miz@://

            while( 1 == 1 ){
                o_str =( "0" + o_str );
                miz -- ;
                if( miz <= 0 ){ break; };
            };;
            return( o_str );
        };;

        const   F_HOTEL13_XYZ_PNGNAME = function
        PRIVATE_F_HOTEL13_XYZ_PNGNAME(

            i_w_x  //: @i_w_x@ : world_levelpack_coord_x ://    
        ,   i_w_y  //: @i_w_y@ : world_levelpack_coord_y ://        
        ,   i_w_z  //: @i_w_z@ : world_levelpack_coord_z ://    
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: ( 1 , 2 , 3 )==> AIM_001_002_003.PNG     ://
            //:                                          ://
            //:------------------------------------:[ATF]://
            var o_str = "";

            o_str += "AIM_" ;
            o_str += F_HOTEL13_I32_STR( i_w_x );
            o_str += "_" ;
            o_str += F_HOTEL13_I32_STR( i_w_y );
            o_str += "_" ;
            o_str += F_HOTEL13_I32_STR( i_w_z );
            o_str += ".PNG"

            return( o_str );
        };;
    //:=====================:HOTEL13_XYZ_TO_PNG_FILE_NAME://
    //:HOTEL_XYZ_TO_PNG_FILE_PATH:=======================://
        const   F_HOTEL13_XYZ_PNGPATH = function
        PRIVATE_F_HOTEL13_XYZ_PNGPATH(

            i_w_x  //: @i_w_x@ : world_levelpack_coord_x ://    
        ,   i_w_y  //: @i_w_y@ : world_levelpack_coord_y ://        
        ,   i_w_z  //: @i_w_z@ : world_levelpack_coord_z ://    
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: ( 1 , 2 , 3 )==> "001/002/003"           ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            var o_str = "" ;

                o_str +=F_HOTEL13_I32_STR( i_w_x ); 
                o_str +=(                   "/"  );
                o_str +=F_HOTEL13_I32_STR( i_w_y );  
                o_str +=(                   "/"  );
                o_str +=F_HOTEL13_I32_STR( i_w_z );

            return( o_str );
        };;
    //:=======================:HOTEL_XYZ_TO_PNG_FILE_PATH://
    //:GET_READY_TO_SAVE_LEVEL:==========================://
    //:                                                  ://
    //:     d_pix2048 ==> d_pix0512                      ://
    //:     ( @SRC@ )     ( @DST@ )                      ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://         

        const   F_HOTEL13_2048_0512 = function
        PRIVATE_F_HOTEL13_2048_0512( 

            i_mcx //: Mastermemory_Cell_X ( READ__FROM ) ://   
        ,   i_mcy //: Mastermemory_Cell_Y ( READ__FROM ) ://
        ){
            if( d_bug ){ var infloop_chk =(0-1); };
            if( d_bug ){
                if( i_mcx != 1 && i_mcy != 1 ){
                    ERR("[#_R_W_R_T_U_O_M_B_#:001]");
                };;
            };;

            var i5h_x ; //:@i5h_x@ : index_5Hundred__x  ://
            var i5h_y ; //:@i5h_y@ : index_5Hundred__y  ://
            var i5h_i ; //:@i5h_i@ : index_5Hundred__i  ://
            var i2k_x ; //:@i2k_x@ : index_2THOUSAND_x  ://
            var i2k_y ; //:@i2k_y@ : index_2THOUSAND_y  ://
            var i2k_i ; //:@i2k_i@ : index_2THOUSAND_i  ://
 
            for(i5h_y = 0 ; i5h_y <=(512-1) ; i5h_y++ ){
            for(i5h_x = 0 ; i5h_x <=(512-1) ; i5h_x++ ){

                i2k_x =( (i_mcx*512) + i5h_x );
                i2k_y =( (i_mcy*512) + i5h_y );

                i5h_i =( i5h_x + ( i5h_y * 512 ) );
                i2k_i =( i2k_x + ( i2k_y *2048 ) );

                let p5h = d_pix0512 ; //:@DST@://
                let p2k = d_pix2048 ; //:@SRC@://
                p5h[ (4*i5h_i)+0 ]=p2k[ (4*i2k_i)+0 ];
                p5h[ (4*i5h_i)+1 ]=p2k[ (4*i2k_i)+1 ];
                p5h[ (4*i5h_i)+2 ]=p2k[ (4*i2k_i)+2 ];
                p5h[ (4*i5h_i)+3 ]=p2k[ (4*i2k_i)+3 ];

                if( d_bug ){ 
                    infloop_chk ++;
                    if( infloop_chk >=(512*512) ){
                        ERR("[OOB_BITCH:2048=>0512]");
                    };;
                };;

            };;};;

            console.log( "[2048_0512:DONE]" );
        };;
    //:==========================:GET_READY_TO_SAVE_LEVEL://
    //:GET_READY_TO_LOAD_LEVEL:==========================://
    //:                                                  ://
    //:     d_pix0512 ==> d_pix2048                      ://
    //:     ( @SRC@ )     ( @DST@ )                      ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://   

        //:TYPO:F_HOTEL13_0512_0248://
        const   F_HOTEL13_0512_0248 = "[FIX:0512_2048]" ;

        const   F_HOTEL13_0512_2048 = function
        PRIVATE_F_HOTEL13_0512_2048( 

            i_mcx //: Mastermemory_Cell_X ( WRITE___TO ) ://
        ,   i_mcy //: Mastermemory_Cell_Y ( WRITE___TO ) ://    
        ){
            if( d_bug ){ var infloop_chk =(0-1); };
            if( d_bug ){
                if( i_mcx != 1 && i_mcy != 1 ){
                    ERR("[#_R_W_R_T_U_O_M_B_#:002]");
                };;
            };;

            var i5h_x ; //:@i5h_x@ : index_5Hundred__x  ://
            var i5h_y ; //:@i5h_y@ : index_5Hundred__y  ://
            var i5h_i ; //:@i5h_i@ : index_5Hundred__i  ://
            var i2k_x ; //:@i2k_x@ : index_2THOUSAND_x  ://
            var i2k_y ; //:@i2k_y@ : index_2THOUSAND_y  ://
            var i2k_i ; //:@i2k_i@ : index_2THOUSAND_i  ://
 
            for(i5h_y = 0 ; i5h_y <=(512-1) ; i5h_y++ ){
            for(i5h_x = 0 ; i5h_x <=(512-1) ; i5h_x++ ){

                i2k_x =( (i_mcx*512) + i5h_x );
                i2k_y =( (i_mcy*512) + i5h_y );

                i5h_i =( i5h_x + ( i5h_y * 512 ) );
                i2k_i =( i2k_x + ( i2k_y *2048 ) );

                let p5h = d_pix0512 ; //:@SRC@://
                let p2k = d_pix2048 ; //:@DST@://
                p2k[ (4*i2k_i)+0 ] = p5h[ (4*i5h_i)+0 ];
                p2k[ (4*i2k_i)+1 ] = p5h[ (4*i5h_i)+1 ];
                p2k[ (4*i2k_i)+2 ] = p5h[ (4*i5h_i)+2 ];
                p2k[ (4*i2k_i)+3 ] = p5h[ (4*i5h_i)+3 ];

                if( d_bug ){ 
                    infloop_chk ++;
                    if( infloop_chk >=(512*512) ){
                        ERR("[OOB_BITCH:0512=>2048]");
                    };;
                };;
                
            };;};;
            console.log( "[0512_2048:DONE]" );
        };;
    //:==========================:GET_READY_TO_LOAD_LEVEL://
    //:SAVE_FILE_INDEX:==================================://
    //:LOAD_FILE_INDEX:==================================://
    //:                                                  ://
    //:   IMGUR_SAVE  ::::::::::: F_HOTEL13_IMGURAP_SAV  ://
    //:   IMGUR_LOAD  ::::::::::: F_HOTEL13_IMGURAP_LOD  ://
    //:                                                  ://
    //:   HEROKU_SAVE ::::::::::: F_HOTEL13_HEROKUA_SAV  ://
    //:   HEROKU_LOAD ::::::::::: F_HOTEL13_HEROKUA_LOD  ://
    //:                                                  ://
    //:   FILE_SAVE / SAVE_FILE : F_HOTEL13_FILESYS_SAV  ://
    //:   FILE_LOAD / LOAD_FILE : F_HOTEL13_FILESYS_LOD  ://
    //:                                                  ://
    //:==================================:SAVE_FILE_INDEX://
    //:TEMPORARY_DEVELOPMENT_DATA:=======================://

        var d_pngfile     = null ;;;;;;;;;;;;;;;;;;
        var d_pngname     ="[nil][d_pngname]"     ;
        var d_pngpath     ="[nil][d_pngpath]"     ;
        var d_pngpath_upp ="[nil][d_pngpath_upp]" ;
        var d_pngpath_dow ="[nil][d_pngpath_dow]" ;

    //:=======================:TEMPORARY_DEVELOPMENT_DATA://
    //:==================================:LOAD_FILE_INDEX://
    //:SEFFECT_SIDE_EFFECT_SET:==========================://

        const   F_HOTEL13_SEFFECT_PNGNAME_PNGPATH = function
        PRIVATE_F_HOTEL13_SEFFECT_PNGNAME_PNGPATH(

            /** NO ARGUMENTS. DONE VIA SIDE EFFECTS **/
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //:  Hotel13 is dedicated to the upload      ://
            //:  and download of :                       ://
            //:                                          ://
            //:     [ LEVELPACK(S)/HOTEL(S)]             ://
            //:                                          ://
            //:  As such, API is tightly coupled with    ://
            //:  the "levelpack" that the webpage        ://
            //:  thinks that it is.                      ://
            //:                                          ://
            //:  DATE[ 2022_07_19 ]                      ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            d_pngname =( F_HOTEL13_XYZ_PNGNAME( 

                d_hotel13_wmc_i_x  //: WorldMapCoord.i_x ://
            ,   d_hotel13_wmc_i_y  //: WorldMapCoord.i_y ://
            ,   d_hotel13_wmc_i_z  //: WorldMapCoord.i_z ://
            ));;
            d_pngpath =( F_HOTEL13_XYZ_PNGPATH(

                d_hotel13_wmc_i_x  //: WorldMapCoord.i_x ://
            ,   d_hotel13_wmc_i_y  //: WorldMapCoord.i_y ://
            ,   d_hotel13_wmc_i_z  //: WorldMapCoord.i_z ://
            ));;
        };;
    //:==========================:SEFFECT_SIDE_EFFECT_SET://
    //:HOTEL13_ANY_API:==================================://
    const   EXECUTO_F_HOTEL13_ANY_API_SAV = function
    PRIVATE_EXECUTO_F_HOTEL13_ANY_API_SAV(
            o_k_yes 
        ,   wontsay
    ){
        //:SIDE_EFFECT_NOTE:-----------------------------://
        //:                                              ://
        //:     Relies on setting[ d_pngpath_upp ]       ://
        //:                                              ://
        //:-----------------------------:SIDE_EFFECT_NOTE://
        //:[ATF]:----------------------------------------://
        //:                                              ://
        //:  Our HEROKU upload API and IMGUR upload      ://
        //:  API should be able to be called the         ://
        //:  EXACT SAME WAY from[ HOTEL13.JS ]client.    ://
        //:                                              ://
        //:  If this is the case, we can use this        ://
        //:  SHARED_EXECUTOR function.                   ://
        //:                                              ://
        //:  Q : Why do we want this?                    ://
        //:  A : Makes it easy to swap out who we        ://
        //:    : are uploading to by just changing       ://
        //:    : [ d_pngpath_upp ].                      ://
        //:                                              ://
        //:----------------------------------------:[ATF]://
        //:HOTEL_CLIENT_CALLING_HOTEL_SERVER:============://

            var o_k =( 1 );
            
            F_HOTEL13_2048_0512( 1 , 1 );
            
            LOG(  "[UPNG.encode]" , "[BEG]" );
            d_pngfile = UPNG.encode( 
            
                [d_pix0512] //:ArrayOf_Frames://
            ,   512         //:Width_InPixels://
            ,   512         //:HeightInPixels://
            ,   (0)         //:ZERO==LOSSLESS://
            );;
            LOG(  "[UPNG.encode]" , "[END]" );
            
            LOG( "[Need_To_Add_Heroku_Endpoint]" );



            //: EX[ d_pngname ]IS[ "AIM_101_202_303.PNG" ]
            //: EX[ d_pngpath ]IS[     "101/202/303"     ]
        
            //: d_pngpath_upp =( "UPLOAD/" + d_pngpath );
            
            F_HOTEL13_XHR_POST( 

                d_pngpath_upp //:EX["UPLOAD/101/202/303"]://          
            ,   d_pngfile     //:EX[some binary object  ]://

            ).then((i_saywhat)=>{                        
                                                        
                console.log( "[what?]:" + i_saywhat );  

                var job = JSON.parse( i_saywhat );
                if( job.m_o_k <= 0 ){

                    LOG( "[job]" , job );
                    YEL("[d_pngpath_upp]:",d_pngpath_upp);
                    ERR("[MY_SERVER_HATES_YOUR_GUTS]"); 
                    
                };;
    
                o_k_yes( i_saywhat );
            });;   
        //:============:HOTEL_CLIENT_CALLING_HOTEL_SERVER://
    };;
    //:==================================:HOTEL13_ANY_API://
    //:HOTEL13_FUNCS:IMGUR_API_SAVE:=====================://
    //:HOTEL13_FUNCS:IMGUR_API_LOAD:=====================://

        const   EXECUTO_F_HOTEL13_IMGURAP_SAV = function
        PRIVATE_EXECUTO_F_HOTEL13_IMGURAP_SAV(
            o_k_yes                                     
        ,   wontsay     
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://    
            //:  Function should be identical to         ://
            //:  [ EXECUTO_F_HOTEL13_HEROKUA_SAV ]       ://
            //:  EXECPT[ d_pngpath_upp ]is different.    ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            F_HOTEL13_SEFFECT_PNGNAME_PNGPATH();

            d_pngpath_upp =( 

                "API/3RD/UPP/IMGUR/" + d_pngpath 
            );;

            EXECUTO_F_HOTEL13_ANY_API_SAV( 
                o_k_yes
            ,   wontsay
            );;
        };;

        const   F_HOTEL13_IMGURAP_SAV = function
        PRIVATE_F_HOTEL13_IMGURAP_SAV(

            /** VOID **/
        ){
            var o_promise =( new Promise( 
            
                EXECUTO_F_HOTEL13_IMGURAP_SAV
            ));;
            return( o_promise );  
        };;
    
        const   F_HOTEL13_IMGURAP_LOD = function
        PRIVATE_F_HOTEL13_IMGURAP_LOD(

            /** VOID **/
        ){
            window.alert( "[TODO]" );
        };;
    //:=====================:HOTEL13_FUNCS:IMGUR_API_SAVE://
    //:=====================:HOTEL13_FUNCS:IMGUR_API_LOAD://
    //:HOTEL13_FUNCS:HEROKUA_SAVE:=======================://
    //:HOTEL13_FUNCS:HEROKUA_LOAD:=======================://

        const   EXECUTO_F_HOTEL13_HEROKUA_SAV = function
        PRIVATE_EXECUTO_F_HOTEL13_HEROKUA_SAV(
            o_k_yes                                     
        ,   wontsay     
        ){

            //:::::::::::::::::::::::::::::::://
            //: Side Effect Set : d_pngname  ://
            //: Side Effect Set : d_pngpath  ://
            //:::::::::::::::::::::::::::::::://
            F_HOTEL13_SEFFECT_PNGNAME_PNGPATH();
            
            //:::::::::::::::::::::::::::::::::::::::://
            //: This path only uploads to heroku.    ://
            //: It doesn't try to also upload to     ://
            //: IMGUR API.                           ://
            //:::::::::::::::::::::::::::::::::::::::://
            d_pngpath_upp =( "UPLOAD/" + d_pngpath );

            //:::::::::::::::::::::::::::::::::::::::://
            //:                                      ://
            //:  Shared executor function that should://
            //:  work for XMLHTTPREQ to any "save"   ://
            //:  api path in our server.             ://
            //:::::::::::::::::::::::::::::::::::::::://
            EXECUTO_F_HOTEL13_ANY_API_SAV( 
                o_k_yes
            ,   wontsay
            );;
                
            //:<<<<<<<<<<<< MOVED_TO: EXECUTO_F_HOTEL13_ANY_API_SAV
        };;

        const   F_HOTEL13_HEROKUA_SAV = function
        PRIVATE_F_HOTEL13_HEROKUA_SAV(

            /** VOID **/
        ){
            var o_promise =( new Promise( 
            
                EXECUTO_F_HOTEL13_HEROKUA_SAV
            ));;
            return( o_promise );                      
        };;

        const   F_HOTEL13_HERSYNC_LOD_PNG = function
        PRIVATE_F_HOTEL13_HERSYNC_LOD_PNG(

            i_pngfile //:AKA[ got_png ]
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: HERE : CLIENT                            ://
            //: SYNC : SYNCHRONOUS                       ://
            //:                                          ://
            //: Loads a binary .PNG file in ram stored   ://
            //: in[ i_pngfile ]into the game.            ://
            //:                                          ://
            //: i_pngfile is __NOT__ raw RGBA byte array!://
            //: i_pngfile    __IS___ .PNG file format.   ://   
            //:                                          ://
            //:------------------------------------:[ATF]://

            var o_k =( 1 );
            
            var got_png =( i_pngfile ); //:AKA[d_pngfile]://
            var arr_buf =(  null     );
            var pix_arr =(  null     );

            LOG( "[Need_To_Add_Heroku_Endpoint]" );

            //:Decode_PNG:-------------------------------://
            if( o_k >= 1 ){
            if( (null===got_png)||(!(got_png)) ){

                MSG( "[got_png:does_not_exist]");
                o_k=(0-1);
            }else{
                o_k=(0+1);
                var buf_3pc ; //:buffer:3rd_party_code://
                var img_3pc ; //:image::3rd_party_code://

                LOG(    "[UPNG.decode]" , "[BEG]" );
                buf_3pc = UPNG.decode(  got_png   );
                LOG(    "[UPNG.decode]" , "[END]" );

                img_3pc = UPNG.toRGBA8( buf_3pc );
                arr_buf =( img_3pc[ 0 ] );
            };;};;
            //:-------------------------------:Decode_PNG:// 
            //:Is_Array_Buffer_OK:-----------------------://
            if( o_k >= 1 ){
            if( (512*512*4) != arr_buf.byteLength ){
            
                YEL( "[BAD_LEN:arr_buf]" ); 
                console.log( "[arr_buf]:" , arr_buf );
            
                o_k=( 0 - 404 );
            }else{
                o_k=( 0 + 777 );
                pix_arr =new Uint8Array( arr_buf );
            };;};;
            //:-----------------------:Is_Array_Buffer_OK://
            //:Copy_Buf_Into_Our_512:--------------------://
            if( o_k >= 1 ){
            if( (512*512*4) != pix_arr.length ){

                YEL( "[BAD_LEN:pix_arr]" ); 
                console.log( "[pix_arr]:" , pix_arr );

                o_k =( 0 - 666 );
            }else{
                o_k =(0+2);

                var bin ; //:@bin@:BufferIndex://

                if( "undefined" === typeof pix_arr[ 0 ] ){
                    console.log( "[pix_arr]" , pix_arr );
                    ERR( "[YOUGOTITWRONG]");
                };;

                for(bin = 0 ; bin<=((512*512*4)-1) ; bin++ ){

                    d_pix0512[ bin ]=( pix_arr[ bin ] );

                };;
                pix_arr=( null );
            };;};;
            //:--------------------:Copy_Buf_Into_Our_512://   

            if( o_k >= 1 ){

                F_HOTEL13_0512_2048( 1 , 1 );
                LOG( "[HEROKUA_LOD:SUCCESS]" );
            }else{
                YEL( "[HEROKUA_LOD:FAILURE]" );
            };;

        };;

        const   EXECUTO_F_HOTEL13_HEROKUA_LOD = function
        PRIVATE_EXECUTO_F_HOTEL13_HEROKUA_LOD(
            o_k_yes                                     
        ,   wontsay  
        ){

            //:TODO: This should be a network access
            //:      thing right here. Or rather...
            //:      If we havent already saved to
            //:      ram, request from network.
            F_HOTEL13_HERSYNC_LOD_PNG(
                d_pngfile
            );;

            o_k_yes( "[PNG_FILE_LOADED_INTO_GAME]" );
        };;
    
        const   F_HOTEL13_HEROKUA_LOD = function
        PRIVATE_F_HOTEL13_HEROKUA_LOD(

            /** VOID **/
        ){
            var o_promise =( new Promise(

                EXECUTO_F_HOTEL13_HEROKUA_LOD
            ));;

            return( o_promise );
        };;
    //:=======================:HOTEL13_FUNCS:HEROKUA_SAVE://
    //:=======================:HOTEL13_FUNCS:HEROKUA_LOAD://
    //:HOTEL13_FUNCS:FILESYSTEM_SAVE:====================://
    //:HOTEL13_FUNCS:FILESYSTEM_LOAD:====================://
    //:                                                  ://
    //:   Security concerns make this impossible.        ://
    //:   Use heroku server or imgur only.               ://
    //:                                                  ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://

        const F_HOTEL13_FILESYS_SAVE = "[FIX:FILESYS_SAV]" ;
        const F_HOTEL13_FILESYS_LOAD = "[FIX:FILESYS_LOD]" ;
        const F_HOTEL13_FILESYS_LOA  = "[FIX:FILESYS_LOD]" ;
    
        const   F_HOTEL13_FILESYS_SAV = function
        PRIVATE_F_HOTEL13_FILESYS_SAV(

            /** VOID **/
        ){
            window.alert( "[IT_AINT_HAPPENIN]" );
        };;
    
        const   F_HOTEL13_FILESYS_LOD = function
        PRIVATE_F_HOTEL13_FILESYS_LOD(

            /** VOID **/
        ){
            window.alert( "[IT_AINT_HAPPENIN]" );
        };;
    //:====================:HOTEL13_FUNCS:FILESYSTEM_SAVE://
    //:====================:HOTEL13_FUNCS:FILESYSTEM_LOAD://

//:BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB://
//:BOTH_CLIENT_AND_SERVER_SECTION_HOTEL13:BBBBBBBBBBBBBBBBBBB://


    //:HOTEL13_TAR:(TASK_ARRAY):=========================://
    //:                                                  ://
    //:     #_TASK_ARRAY_MIGHT_BE_TOO_COMPLEX_#          ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        const   F_HOTEL13_NEW_TASKARR = "[USE:NEW_TAR]" ;
        const   F_HOTEL13_TAR_NEW     = "[USE:NEW_TAR]" ;

        const   F_HOTEL13_NEW_TAR = function
        PRIVATE_F_HOTEL13_NEW_TAR(

            /**VOID**/
        ){  //:::::::::::::::::::::::::::::::::::::::::::://
            //:[ATF]:Create New Task Array Runner   [ATF]://
            //:::::::::::::::::::::::::::::::::::::::::::://

            var o_tar ={ laxcoma:"[HACK]"
                             //::::::::::::::::::::::::::://
            ,   m_t_a : [ ]  //: Member:TaskArray        ://    
            ,   m_t_p :(0-1) //: Member:TaskPointer      ://    
            ,   m_end : null //: Member:END/DONE function://  
            ,   m_log : [ ]  //: Member:LoggingArray     ://
            };;              //::::::::::::::::::::::::::://
            Object.seal( o_tar );
            return(      o_tar );
        };;

        const F_HOTEL13_RUNLIST = "[USE:F_HOTEL13_TAR_RUN]" ;
        const F_HOTEL13_NEXTASK = "[USE:F_HOTEL13_TAR_NEX]" ;
        const F_HOTEL13_EXITASK = "[USE:F_HOTEL13_TAR_EXI]" ;
        const F_HOTEL13_RUNTASK = "[USE:F_HOTEL13_TAR_RUN]" ;
        const F_HOTEL13_TASKNEX = "[USE:F_HOTEL13_TAR_NEX]" ;
        const F_HOTEL13_RUNNEXT = "[USE:F_HOTEL13_TAR_NEX]" ;
        const F_HOTEL13_TAR_ERR = "[USE:F_HOTEL13_TAR_EXI]" ;
        const F_HOTEL13_TASKEXI = "[USE:F_HOTEL13_TAR_EXI]" ;
        const F_HOTEL13_TASKLOG = "[USE:F_HOTEL13_TAR_TAL]" ;
        const F_HOTEL13_TAR_LOG = "[USE:F_HOTEL13_TAR_TAL]" ;

        const   F_HOTEL13_TAR_RUN = function
        PRIVATE_F_HOTEL13_TAR_RUN(

            i_tar  
        ){
            var o_vod_promise = new Promise( function
            EXECUTO_F_HOTEL13_TAR_RUN(o_k_yes,wontsay ){

                //:#_THIS_IS_NOT_K_I_S_S_#://

                i_tar.m_t_p ++;
                ASS( 0 === i_tar.m_t_p , "[TAR_M_T_P]" );

                i_tar.m_end =( o_k_yes          );
                var taskcmd =( i_tar.m_t_a[ 0 ] );
                    taskcmd(   i_tar            );
            });;
            return( o_vod_promise );
        };;
        const   F_HOTEL13_TAR_NEX = function
        PRIVATE_F_HOTEL13_TAR_NEX(

            i_tar
        ){
            var m_i =( i_tar.m_t_a.length - 1 );
                i_tar.m_t_p ++;
            if( i_tar.m_t_p > m_i ){

                console.log( "[RESOLVING_PROMISE]" );
                i_tar.m_end( /** _void_ **/ );
            }else{
                var taskcmd = i_tar.m_t_a[ 
                              i_tar.m_t_p ];  
                    taskcmd(  i_tar       );
            };;
        };;
        const   F_HOTEL13_TAR_EXI = function
        PRIVATE_F_HOTEL13_TAR_EXI(

            i_tar  //:Input Task Array Object://
        ,   i_err_obj  //:Optional_Error_Object  ://
        ){
            console.log( "[EXITASK/EARLY_ABORT]" );
            if( i_err_obj ){
                console.log( i_err_obj );
            };;
            i_tar.m_log.push( ""+i_err_obj+"" );
            i_tar.m_end( /**   NO ARGS   **/  );
        };;
        const   F_HOTEL13_TAR_TAL = function
        PRIVATE_F_HOTEL13_TAR_TAL(

            i_tar //: Task Array Object     ://
        ,   i_msg //: Message To Add To Log ://
        ){
            if( !( "object" == typeof i_tar ) ){
                ERR("[WHERE_IS_THE_TAR?]");
            };;
            if( !( Array.isArray( i_tar.m_log ) ) ){
                console.log( "[i_tar.m_log]:" 
                            ,  i_tar.m_log );;
                ERR("[WHERE_IS_THE_LOG?]");
            };;

            console.log(      i_msg );
            i_tar.m_log.push( i_msg );
        };;
    //:=========================:HOTEL13_TAR:(TASK_ARRAY)://
    //:HOTEL13_CAS_TYPES:================================://

        const   F_HOTEL13_NEW_SCATPNG = function
        PRIVATE_F_HOTEL13_NEW_SCATPNG(

            /** VOID **/
        ){
            var o_scatpng ={ laxcoma:"[HACK]"
            ,       m_png  : null   //: .PNG Binary File ://
            ,       m_has  : (0)    //:  HAS .PNG File?  ://
            ,       m_ooi  :"[nil][m_ooi]"     //:@m_ooi@://
            ,       m_log  : [ ]    //: LoggingObject://
            };;
            Object.seal( o_scatpng );
            return(      o_scatpng );
        };;

        const c_hotel13_scatpng_ooi_heroku =(

            "[M_OOI.HEROKU:::::FILE_SYSTEM]"
        );;
        const c_hotel13_scatpng_ooi_imgur  =(

            "[M_OOI.IMGUR:::IMAGE_DOWNLOAD]"
        );;
        const c_hotel13_scatpng_ooi_none   =(

            "[M_OOI.NONE::::NO_IMAGE_FOUND]"
        );;

    //:================================:HOTEL13_CAS_TYPES://
    //:HOTEL13_CAS_FUNCTIONS:============================://
    //:                                                  ://
    //:  SEE[ #_ABOUT_CAS_FUNCTIONS_# ]                  ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

    //:CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC://
    ////////////////////////////////////////////////////////
    const   F_HOTEL13_CAS_COOHASH_SCATPNG = function
    PRIVATE_F_HOTEL13_CAS_COOHASH_SCATPNG(
    ////////////////////////////////////////////////////////

        i_coohash

    ////////////////////////////////////////////////////////
    ){if(      d_hotel13_notnode   ){ //////////////////////
    ////////////////////////////////////////////////////////
    return new Promise( function F01( o_k_yes , wontsay ){

        var o_scatpng =( F_HOTEL13_NEW_SCATPNG() );

        //:::::::::::::::::::::::::::::::::::::::::::://        
        //:EX[ www.app.com                          ]://        
        //:  [      /F_HOTEL13_CAS_COOHASH_SCATPNG  ]://
        //:  [      /001_001_001                    ]://
        //:::::::::::::::::::::::::::::::::::::::::::://
        if( "string" != typeof d_url ){

            YEL("[WHY_THE_FUCK_NO:d_url]");
            ERR("[WHY_THE_FUCK_NO:d_url]");
        };;
        var e_s =( "/" != d_url[d_url.length-1]?"/":"");
        var url =( ""
        +    d_url+e_s
        +    "F_HOTEL13_CAS_COOHASH_SCATPNG/"
        +    i_coohash
        );;
        console.log( "[SCATPNG_URL]:" , url );

        var ooi =( null /**Origin_Of_Image**/ );
        var xhr = new XMLHttpRequest();
            xhr.open( "GET" , url );
            xhr.responseType = "arraybuffer" ;
            xhr.send();
            xhr.onreadystatechange=(e)=>{
            if( xhr.readyState === xhr.HEADERS_RECEIVED 
            ||  xhr.readyState === (2)
            ){
                MSG( "[HEADERS_RECIEVED]" );

                ooi =( xhr.getResponseHeader( 
                    "nsh_ooi" ));;
            };;
            if( xhr.readyState === (4) ){



                if( "string" != typeof ooi ){
                    YEL( "[WHERE_THE_FUCK_IS_MY_HEADER]");
                    ERR( "[WHERE_THE_FUCK_IS_MY_HEADER]");
                };;
                
                if( 200 === xhr.status ){
                    o_scatpng.m_has =(  1           );
                    o_scatpng.m_png =( xhr.response );
                    o_scatpng.m_ooi =(     ooi      );
                    o_scatpng.m_log.push("[YES:200]");
                }else{
                    o_scatpng.m_has =( 0 - 420669   );
                    o_scatpng.m_png =(    null      );
                    o_scatpng.m_ooi =(     ooi      );
                    o_scatpng.m_log.push("[NOT:200]");
                };;

                o_k_yes( o_scatpng );
            };;};;
    });;
    ////////////////////////////////////////////////////////
    }else if(  d_hotel13_yesnode   ){ //////////////////////
    ////////////////////////////////////////////////////////    
    return new Promise( function F02( o_k_yes , wontsay ){

        var tar = F_HOTEL13_NEW_TAR(); //: NewTaskArray  ://
        let NEX = F_HOTEL13_TAR_NEX ;  //: NextTask      ://
        let EXI = F_HOTEL13_TAR_EXI ;  //: EarlyExit     ://
        let TAL = F_HOTEL13_TAR_TAL ;  //: TaskArr.LOG   ://

        var o_scatpng =( F_HOTEL13_NEW_SCATPNG() );
        var aimpath = F_HOTEL13_COOHASH_AIMPATH(i_coohash);

        let ooi_heroku = c_hotel13_scatpng_ooi_heroku ;
        let ooi_imgur  = c_hotel13_scatpng_ooi_imgur  ;
        let ooi_none   = c_hotel13_scatpng_ooi_none   ;

        var png_url =( "[nil][png_url]" );

        o_scatpng.m_ooi =( ooi_none );

        l_fs.readFile( aimpath , (i_err,i_cof)=>{

            if( i_err ){
                TAL( tar , "[PNG_404_HEROKU_DISK]" );

                let t_a = tar.m_t_a ;
                t_a.push( 
                        F02_GET_IMGUR_URL_FROM_DATABASE );;
                t_a.push( 
                        F02_TRY_TO_READ_FROM_IMGUR      );;

                F_HOTEL13_TAR_RUN( tar ).then((_void_)=>{

                    //:::::::::::::::::::::::::::::::://
                    //:Never Fail. Just Don't Return ://
                    //:Data Askef For If You Cant.   ://
                    //:::::::::::::::::::::::::::::::://   
                    o_scatpng.m_log.push( tar.m_log );
                    o_k_yes( o_scatpng );
                });;
            }else{
                TAL( tar , "[PNG_FOUND_ON_DISK]" );

                o_scatpng.m_has =(    1  );
                o_scatpng.m_png =( i_cof );
                o_scatpng.m_ooi =( ooi_heroku );

                o_scatpng.m_log.push( tar.m_log );
                o_k_yes( o_scatpng );
            };;
        });;
        function 
        F02_GET_IMGUR_URL_FROM_DATABASE( i_tar ){

            if( ! ( F_HOTEL13_ICH( i_coohash ))){
            
                EXI( i_tar , "[NOT_A_COORDHASH]" );
            }else{

                var sql_cmd =( d_sel_tab_hotel13 );
                sql_cmd = sql_cmd.replaceAll(

                    "[i_coohash]" , i_coohash
                );;
            
                d_hotel13_dcp.query( sql_cmd )
                .then( function( i_res ){ 
                    
                    png_url =( i_res.rows[ 0 ]
                              .col_png_url );;

                    TAL( i_tar , ""
                    +   "[-][png_url][-]:"
                    +   "("
                    +   ASS( png_url )
                    +   ")"
                    );;
                    NEX( i_tar );
                }).catch( function( i_err ){                  
                             
                    TAL( i_tar , "[i_err]"+i_err );
                    TAL( i_tar , "[BEG:SQL_CMD]" );
                    TAL( i_tar ,   sql_cmd       );
                    TAL( i_tar , "[END:SQL_CMD]" );
                    EXI( i_tar , "[QUERYFAIL]"   );          
                }) 
                ;;;;;;;;;;;;;;;;;;;;;;;;;;;
            };;
        };;
        function 
        F02_TRY_TO_READ_FROM_IMGUR( i_tar ){

            var arr_dat = [   ]; //:@arr_dat@://
            var cat_dat =(null); //:@cat_dat@://

            var ask = l_https.request({

                host     : "i.imgur.com"  
            ,   path     : ASS( png_url )
            ,   method   : "GET" 
            ,   headers  :
                {
                    accept : "image/png"
                }
            },( got )=>{ 

                //+ WILL_CORRUPT_YOUR_DATA!!!!!!!!!!!!!! +//
                //- DONT[  got.setEncoding( "utf8" );  ] -//        

                got.on( "data" , ( got_dat )=>{

                    TAL( i_tar , "[!GOT_DAT!]" );
                    arr_dat.push(   got_dat    );

                });;
                got.on( "error",(e)=>{ EXI( i_tar,e);        });
                got.on( "end"  ,( )=>{ TAL( i_tar,"[E001]"); });
                got.on( "close",( )=>{ 

                    cat_dat =( Buffer.concat( arr_dat ) );

                    o_scatpng.m_png=( cat_dat   );
                    o_scatpng.m_has=(  1        );
                    o_scatpng.m_ooi=( ooi_imgur );

                    NEX( i_tar  );        
                });
            });;
            ask.on( "error",(e)=>{ EXI( i_tar,e ); });
        //- ask.write( ); /** Only POST needs WRITE **/  -//        
            ask.end();
        };;
    });;
    ////////////////////////////////////////////////////////
    }else{ ERR("[NEITHER_ENVIRONMENT]"); };;};;
    ////////////////////////////////////////////////////////
    //:CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC://

    //:============================:HOTEL13_CAS_FUNCTIONS://

//:BBBBBBBBBBBBBBBBBBB:BOTH_CLIENT_AND_SERVER_SECTION_HOTEL13://
//:BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB://


    //:HOTEL13_FUNCS:ALL_RENDER_CODE:====================://
    //:HOTEL13_FUNCS:_DRAW_2D:===========================://
    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://

    //:TYPO:F_HOTEL13_DRAW_2D_REC://
    const   F_HOTEL13_DRAW_2D_REC =(
      "[FIX:F_HOTEL13_DRAW_2D_BOX]" );

    const   F_HOTEL13_DRAW_2D_BOX = function
    PRIVATE_F_HOTEL13_DRAW_2D_BOX(
        inn_ctx //:input : context ://
    ,   inn_x   //:input X
    ,   inn_y   //:Input Y
    ,   inn_w   //:Input Width
    ,   inn_h   //:Input Height
    ,   inn_r   //:Input Radius
    ){
        //: stackoverflow.com/questions/1255512 ://

        var x = inn_x;
        var y = inn_y;
        var w = inn_w;
        var h = inn_h;
        var r = inn_r;
        
        if (w < 2 * r) r = w / 2;
        if (h < 2 * r) r = h / 2;
        inn_ctx.beginPath();
        inn_ctx.moveTo(x+r, y);
        inn_ctx.arcTo( x+w, y,   x+w, y+h, r);
        inn_ctx.arcTo( x+w, y+h, x,   y+h, r);
        inn_ctx.arcTo( x,   y+h, x,   y,   r);
        inn_ctx.arcTo( x,   y,   x+w, y,   r);
        inn_ctx.closePath();

        inn_ctx.stroke();
    }
    
    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://
    
    const   F_HOTEL13_DRAW_2D_CIR = function
    PRIVATE_F_HOTEL13_DRAW_2D_CIR(
        i_ctx //: Context  ://
    ,   i_c_x //: Center.X ://
    ,   i_c_y //: Center.Y ://
    ,   i_dia //: DIAMETER ://
    ){

        var rad = ( i_dia / 2 );

        i_ctx.beginPath();
        i_ctx.arc( i_c_x , i_c_y 
                 ,   rad , 0 , 2*Math.PI , false );;

        i_ctx.lineWidth = 1;
        i_ctx.stroke();
    };;

    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://
    
    const   F_HOTEL13_DRAW_2D_TIL = function
    PRIVATE_F_HOTEL13_DRAW_2D_TIL(
    
        /** NO ARGS **/
    ){
        //:TAG[ render tile | rendertile | render_tile ] ://
        //:TAG[ render-tile | drawtiles | draw-tiles   ] ://
        //:TAG[ draw_tiles  | hide the fada tiles      ] ://
        //:TAG[ dont draw tiles under fada             ] ://
        
        //: Render Bigger Tiles First                    ://

        let sam =( d_hotel13_sam         );    //:@MACRO@://
        let ctx =( d_hotel13_sam.hot_con );    //:@MACRO@://
        
        var g_w =( sam.hot_can.width / 5 ); //:GridCell.W://
        var g_h =( sam.hot_can.height/ 5 ); //:GridCell.H://
        
        var peb_m_x =( g_w / 64 );  //: peb multiplier x ://
        var peb_m_y =( g_w / 64 );  //: peb multiplier y ://
        
        var dpx ; //: @dpx@ : Data Pixel X :-------------://
        var dpy ; //: @dpy@ : Data Pixel Y :-------------://
        
        var dtx ; //: @dtx@ : Data TILE  X , extends(dpx)://
        var dty ; //: @dty@ : Data TILE  Y , extends(dpy)://
        var dti ; //: @dti@ : Data TILE  I , indexofdata ://
        var dtu ; //: @dtu@ : Data TILE  Uint32 Value    ://

               
            //:DAMAGE_RENDERING://

            var dpx_fad ; //: #_HIDE_DAMAGED_TILES_# ://
            var dpy_fad ; //: #_HIDE_DAMAGED_TILES_# :// 

            var dtx_fad ; //: #_HIDE_DAMAGED_TILES_# ://
            var dty_fad ; //: #_HIDE_DAMAGED_TILES_# :// 
            var dti_fad ; //: #_HIDE_DAMAGED_TILES_# :// 
            var c_i_fad ; //: #_HIDE_DAMAGED_TILES_# ://
            var dtu_fad ; //: #_HIDE_DAMAGED_TILES_# ://  

            var t_v_fad ; //: #_HIDE_DAMAGED_TILES_# ://  
            var t_t_fad ; //: #_HIDE_DAMAGED_TILES_# ://  


            //:AUTO_TILE_RENDERING:TILE://

            var dtx_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
            var dty_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
            var dti_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
            var c_i_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
            var dtu_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
                        
            var t_v_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://
            var t_t_ata ; //: #_SEE_FRACTAL_DAMAGE_# ://

            //:AUTO_TILE_RENDERING:FADA://

            var dtx_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
            var dty_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
            var dti_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
            var c_i_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
            var dtu_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
 
            var t_v_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://
            var t_t_atf ; //: #_DONT_LATCH_TO_DAMAGED_#  ://

            //:AUTO_TILE_RENDERING:5_BIT_TILE_VALUES:----://

            var t32     ; //: 5 bit tile value           ://
            var a32     ; //: 5 bit adjacent tile value  ://
        
        var h4x ; //: @h4x@ : HotelRoomX (DATALAYOUT)    ://
        var h4y ; //: @h4y@ : HotelRoomY (DATALAYOUT)    ://
                                                         
        var lat ; //: @lat@ : lateral  offset to data.   ://
        var dia ; //: @dia@ : diagonal offset to data.   ://
        var san ; //: @san@ : Span In Tiles (wid==hig)   ://
        
        var t_x ; //: @t_x@ : tile x ( @DATA_EQ_VIEW@ )  ://    
        var t_y ; //: @t_y@ : tile y ( @DATA_EQ_VIEW@ )  ://   
        var t_v ; //: @t_v@ : tile v ( v == VALUE/TYPE)  ://
        var t_w ; //: @t_w@ : tile w ( WIDTH IN PIXELS)  ://
        var t_h ; //: @t_h@ : tile h ( HEIGHT   PIXELS)  ://
        /// t_s ; //: @t_s@ : tile s ( HEIGHT===WIDTH )  ://
        var t_t ; //: @t_t@ : tile t ( TIK value )       ://
        
        var peb ; //: @peb@ : Size In Pebbles :----------://

        var c_i ; //: @c_i@ : component index of pixel.  ://
        
        var clk_t_x ; //: Clicked   Tile , x coord :-----://
        var clk_t_y ; //: Clicked   Tile , y coord :-----://
                                                   
        var mou_t_x ; //: MouseMove Tile , x coord :-----://
        var mou_t_y ; //: MouseMove Tile , y coord :-----://
        
        var clk     ; //:clicked? boolean://
        var mou     ; //:moused ? boolean://

        mou_t_x = sam.te7_mou_t_x[ sam.edi_te7 ];
        mou_t_y = sam.te7_mou_t_y[ sam.edi_te7 ];

        for( var te7 =(7-1); te7 >=(  0 ) ; te7 -- ){
        
            peb = d_hotel13_te7_peb[ te7 ]
            t_w = ( peb * peb_m_x );
            t_h = ( peb * peb_m_y );
            
            clk_t_x = sam.te7_clk_t_x[ te7 ];
            clk_t_y = sam.te7_clk_t_y[ te7 ];
        
        for( var r13 =( 0 ); r13 <=(13-1) ; r13 ++ ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: @g_x@ : Grid Cell Where Room Could Be X  ://
            //: @g_y@ : Grid Cell Where Room Could Be Y  ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            var g_x = d_hotel13_r13_g_x[ r13 ];
            var g_y = d_hotel13_r13_g_y[ r13 ];
            ASS( g_x >= 0 );
            ASS( g_y >= 0 );
            
            var o_x =( g_x * g_w );
            var o_y =( g_y * g_h );
            
            if( (7-1) == te7 ){
            
                //:------------------------------------://
                //: only do for first te7 loop so that ://
                //: we don't erase stuff further down. ://
                //:------------------------------------://
                
                if( sam.clk_g_x === g_x 
                &&  sam.clk_g_y === g_y
                ){
                    ctx.fillStyle = "BLACK" ;  
                    ctx.fillRect(o_x, o_y, g_w, g_h); 

                    //: Render boundry around level ://
                    //: #_WHY_LINES_LOOK_UNEVEN_#   ://
                    ctx.lineWidth =(  2 );
                    ctx.strokeStyle = "#FFFFFF"  
                    ctx.strokeRect(o_x, o_y, g_w, g_h); 
                    ctx.lineWidth =(  1 );
                }else{
                    ctx.fillStyle = "BLACK"   ;
                    ctx.fillRect(o_x, o_y, g_w, g_h); 
                };;
                
            };;
            
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: Draw all tiles of given tile size.       ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            
            dpx = 512 ;   //: Active Level Data Origin X ://
            dpy = 512 ;   //: Active Level Data Origin Y ://
            
            h4x =(           ( r13 % 4 ) );  //:@r13_h4x@://
            h4y =( Math.floor( r13 / 4 ) );  //:@r13_h4y@://
            
            lat = d_hotel13_te7_lat[ te7 ];
            dia = d_hotel13_te7_dia[ te7 ];
            
            dpx += ( 128 * h4x ); //:Now in correct room ://
            dpy += ( 128 * h4y ); //:of data to render   ://
            
            dpx += dia ; //: Now at correct[ te7 ]tile   ://
            dpy += dia ; //: size of data to render.     ://
            
            san = lat ;  //: SPAN_IN_TILES == LATERAL_OS ://

            dpx_fad =( dpx + (0) ); //:tile render varies://
            dpy_fad =( dpy + lat ); //:depending on FADA ://
                                    //: +-----+-----+    ://
                                    //: | TIL | BOM |    ://
                                    //: +-----+-----+    ://
                                    //: | FAD |     |    ://
                                    //: +-----+-----+    ://
                                    //:------------------://
        
        for( t_y = 0 ; t_y <=(san-1) ; t_y ++ ){
        for( t_x = 0 ; t_x <=(san-1) ; t_x ++ ){
            
            dtx = dpx + t_x ; dtx_fad = dpx_fad + t_x ;
            dty = dpy + t_y ; dty_fad = dpy_fad + t_y ;

            dti     = ( dtx     + ( dty     * 2048 ) );  
            dti_fad = ( dtx_fad + ( dty_fad * 2048 ) );
  
            c_i =(    4 * dti     ); //: @COMDEX@ : tile ://
            c_i_fad=( 4 * dti_fad ); //: @COMDEX@ : fada ://

            dtu =(( 0x0
            | ( d_pix2048[ c_i     + 0 ] << 24 )//:#GFDI0123#://
            | ( d_pix2048[ c_i     + 1 ] << 16 )//:#GFDI0123#://
            | ( d_pix2048[ c_i     + 2 ] <<  8 )//:#GFDI0123#://
            | ( d_pix2048[ c_i     + 3 ] <<  0 )//:#GFDI0123#://
            )>>>0);

            dtu_fad=(( 0x0
            | ( d_pix2048[ c_i_fad + 0 ] << 24 )     
            | ( d_pix2048[ c_i_fad + 1 ] << 16 )     
            | ( d_pix2048[ c_i_fad + 2 ] <<  8 )     
            | ( d_pix2048[ c_i_fad + 3 ] <<  0 )     
            )>>>0);

            t_v     =( dtu     >>> 28 )&(0xF);  //:#TV4B#://
            t_t     =( dtu     & 0x0FFFFFFF );
            //:---------:0x12345678----------------------://
            t_v_fad =( dtu_fad >>> 28 )&(0xF);  //:#TV4B#://
            t_t_fad =( dtu_fad & 0x0FFFFFFF );
            //:---------:0x12345678----------------------://
            
            clk =(  clk_t_x === t_x 
                 && clk_t_y === t_y );;

            mou =(      mou_t_x === t_x
                 &&     mou_t_y === t_y 
                 && sam.edi_te7 === te7
                 && sam.mou_g_x === g_x
                 && sam.mou_g_y === g_y
            );;
                 
            if( sam.clk_g_x != g_x ){ clk =( 0 ); };
            if( sam.clk_g_y != g_y ){ clk =( 0 ); };
            
            if( sam.edi_te7 != te7 ){ clk =( 0 ); };
                 
            if( 0
            ||   ( t_v >= 1 ) //: Tile Exists?  ://
            ||   ( !!clk    ) //: Tile Clicked? ://
            ){ 
            
                pog_t_x = ( o_x + ( t_x * t_w ) );
                pog_t_y = ( o_y + ( t_y * t_h ) );
                
                if( !!clk && (!(t_v>=1)) ){
                    ctx.strokeStyle = "GREEN"   ;
                    ctx.strokeRect( pog_t_x, pog_t_y, t_w, t_h);
                }else{
                    ASS( t_v >=0 && t_v <=(16-1) );

                    if( 0 == t_v_fad ){
                        ctx.fillStyle=(
                            d_hotel13_hcp_til[     t_v ] 
                        );;
                    }else
                    if( 1 <= t_v_fad ){
                        ctx.fillStyle=(
                            d_hotel13_hcp_til_dam[ t_v ] 
                        );;
                    }else{
                        ERR("[BAD_T_V_FAD]");
                    };;
                    ctx.fillRect( pog_t_x, pog_t_y, t_w, t_h );

                    //:apply_auto_tiling:--------------------://
                    if( te7 >= 3 ){
                    for( var at4 = 0 ; at4 <=(4-1) ; at4++ ){

                        var l_r = d_hotel13_at4_l_r[ at4 ];
                        var t_b = d_hotel13_at4_t_b[ at4 ];

                        //:#ATA_TILE#:_______________________://

                        dtx_ata = dpx + ( t_x + l_r );
                        dty_ata = dpy + ( t_y + t_b );
                        dti_ata= (dtx_ata + ( dty_ata* 2048 ) );
                        c_i_ata=( 4 * dti_ata );  //:@COMDEX@://

                        dtu_ata=(( 0x0
                        | ( d_pix2048[ c_i_ata + 0 ] << 24 )     
                        | ( d_pix2048[ c_i_ata + 1 ] << 16 )     
                        | ( d_pix2048[ c_i_ata + 2 ] <<  8 )     
                        | ( d_pix2048[ c_i_ata + 3 ] <<  0 )     
                        )>>>0);

                        t_v_ata =( dtu_ata >>> 28 )&(0xF);   
                        t_t_ata =( dtu_ata & 0x0FFFFFFF );
                        //:---------:0x12345678----------://

                        //:#ATA_FADA#:_______________________://

                        dtx_atf = dpx_fad + ( t_x + l_r );
                        dty_atf = dpy_fad + ( t_y + t_b );
                        dti_atf= (dtx_atf + ( dty_atf* 2048 ) );
                        c_i_atf=( 4 * dti_atf );  //:@COMDEX@://

                        dtu_atf=(( 0x0
                        | ( d_pix2048[ c_i_atf + 0 ] << 24 )     
                        | ( d_pix2048[ c_i_atf + 1 ] << 16 )     
                        | ( d_pix2048[ c_i_atf + 2 ] <<  8 )     
                        | ( d_pix2048[ c_i_atf + 3 ] <<  0 )     
                        )>>>0);

                        t_v_atf =( dtu_atf >>> 28 )&(0xF);   
                        t_t_atf =( dtu_atf & 0x0FFFFFFF );
                        //:---------:0x12345678----------://

                        //:#_MAKE_5_BIT_TILE_VALUES_#://
                        t32 =(t_v    |(( 0==t_v_fad?0:1)<<4));
                        a32 =(t_v_ata|(( 0==t_v_atf?0:1)<<4));

                    //: if( t_v != t_v_ata ){ ... };
                        if( t32 != a32 ){
    
                            var d_x = d_hotel13_at4_d_x[ at4 ];
                            var d_y = d_hotel13_at4_d_y[ at4 ];

                            var atx = d_hotel13_at4_atx[ at4 ];
                            var aty = d_hotel13_at4_aty[ at4 ];

                            var aew =(t_w / d_x );
                            var aeh =(t_h / d_y );

                            ctx.fillStyle=( "#808080" );
                            ctx.fillRect( 

                               (pog_t_x)+(atx*(t_w-aew))  
                            ,  (pog_t_y)+(aty*(t_h-aeh))
                            ,  ( aew ) 
                            ,  ( aeh ) 
                            );;
                        };;

                    };;};;
                    //:--------------------:apply_auto_tiling://

                };;
                
                 
 
            }else{

                if( !!mou && (!(t_v>=1)) ){
        
                    /** Draw Active Tile Cursor **/

                    pog_t_x = ( o_x + ( t_x * t_w ) );
                    pog_t_y = ( o_y + ( t_y * t_h ) );
                    ctx.fillStyle = "BLUE"    
                    ctx.fillRect( pog_t_x, pog_t_y, t_w, t_h ); 
                };;
            };;
            
        };;};;
        };;};;
    };;

    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://

    const   F_HOTEL13_DRAW_2D_BOM = function
    PRIVATE_F_HOTEL13_DRAW_2D_BOM(
    
        /** NO ARGS **/
    ){
        //:DRAW_2D:COMMON_VAR_HEADER:--------------------://
                                                      //:://
        let sam =( d_hotel13_sam         );           //:://
        let ctx =( d_hotel13_sam.hot_con );           //:://
                                                      //:://
        var g_w =( sam.hot_can.width / 5 ); //:GridCell.W://
        var g_h =( sam.hot_can.height/ 5 ); //:GridCell.H://
                                                      //:://
        var peb_m_x =( g_w / 64 );  //: peb multiplier x ://
        var peb_m_y =( g_w / 64 );  //: peb multiplier y ://    
                                                      //:://
        //:----------------------------------://      //:://
        //: SEE[ F_HOTEL13_DRAW_2D_TIL ]     ://      //:://
        //: For variable descriptions.       ://      //:://
        ////////////////////////////////////////      //:://
        var lacoma                          ////      //:://
        ,   dpx,dpy,dtx,dty,dti,dtu,c_i     ////      //:://
        ,   h4x,h4y,lat,dia,san             ////      //:://
        ,   t_x,t_y,t_v,t_w,t_h,t_t         ////      //:://
        ,   peb                             ////      //:://
        ,   clk , clk_t_x , clk_t_y         ////      //:://
        ,   mou , mou_t_x , mou_t_y         ////      //:://
        ////////////////////////////////////////      //:://
        //:----------------------------------://      //:://
        //:--------------------:DRAW_2D:COMMON_VAR_HEADER://




        mou_t_x = sam.te7_mou_t_x[ sam.edi_te7 ];
        mou_t_y = sam.te7_mou_t_y[ sam.edi_te7 ];

        for( var te7 =(7-1); te7 >=(  0 ) ; te7 -- ){
        
            peb = d_hotel13_te7_peb[ te7 ]
            t_w = ( peb * peb_m_x );
            t_h = ( peb * peb_m_y );
            
            clk_t_x = sam.te7_clk_t_x[ te7 ];
            clk_t_y = sam.te7_clk_t_y[ te7 ];
        
        for( var r13 =( 0 ); r13 <=(13-1) ; r13 ++ ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: @g_x@ : Grid Cell Where Room Could Be X  ://
            //: @g_y@ : Grid Cell Where Room Could Be Y  ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            var g_x = d_hotel13_r13_g_x[ r13 ];
            var g_y = d_hotel13_r13_g_y[ r13 ];
            ASS( g_x >= 0 );
            ASS( g_y >= 0 );
            
            var o_x =( g_x * g_w );
            var o_y =( g_y * g_h );
            
            if( (7-1) == te7 ){
                
                //:--------------------------------------://
                //: This section only done in the        ://
                //: tile loop, because it ERASES         ://
                //: everything.                          ://
                //:--------------------------------------://    
            };;
            
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: Draw all tiles of given tile size.       ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            
            dpx = 512 ;   //: Active Level Data Origin X ://
            dpy = 512 ;   //: Active Level Data Origin Y ://
            
            h4x =(           ( r13 % 4 ) );  //:@r13_h4x@://
            h4y =( Math.floor( r13 / 4 ) );  //:@r13_h4y@://
            
            lat = d_hotel13_te7_lat[ te7 ];
            dia = d_hotel13_te7_dia[ te7 ];
            
            dpx += ( 128 * h4x ); //:Now in correct room ://
            dpy += ( 128 * h4y ); //:of data to render   ://
            
            dpx += dia ; //: Now at correct[ te7 ]tile   ://
            dpy += dia ; //: size of data to render.     ://

            dpx += lat ; //:Offset needed to reach the   ://
            dpy += (0) ; //:bomb layer of our data.      ://
            
            san = lat ;  //: SPAN_IN_TILES == LATERAL_OS ://
            
        
        for( t_y = 0 ; t_y <=(san-1) ; t_y ++ ){
        for( t_x = 0 ; t_x <=(san-1) ; t_x ++ ){
            
            dtx = dpx + t_x ;
            dty = dpy + t_y ;
            dti = ( dtx + ( dty * 2048 ) ); //:AKA[ p_i ]://    
            c_i =( 4*dti );
            dtu =(( 0x0
            | ( d_pix2048[ c_i + 0 ] << 24 )    //:#GFDI0123#://
            | ( d_pix2048[ c_i + 1 ] << 16 )    //:#GFDI0123#://
            | ( d_pix2048[ c_i + 2 ] <<  8 )    //:#GFDI0123#://
            | ( d_pix2048[ c_i + 3 ] <<  0 )    //:#GFDI0123#://
            )>>>0);
            
            t_v =( dtu >>> 28 )&(0xF); //:Tile Is 4Bit Number://
            t_t =( dtu & 0x0FFFFFFF );
            //:---------:0x12345678----------------------://

            if( t_v >= 1 && t_v <=(16-1) ){

                pog_t_x = ( o_x + ( t_x * t_w ) );
                pog_t_y = ( o_y + ( t_y * t_h ) );

                
                //: #_TRIPPED_BOMBS_SHOULD_LOSE_COLOR_#://
                if( t_t <= 0 ){
                    let hcp_bom = d_hotel13_hcp_bom ;
                    ctx.strokeStyle=( hcp_bom[ t_v ] );
                    ctx.fillStyle  =( hcp_bom[ t_v ] );
                }else{

                    //: triptik:AKA:glowtik ://
                    var triptik =(  
                        d_hotel13_ttd_triptik[ t_v ] );;

                    var bombage =( d_tik - t_t );

                    if( bombage <= triptik ){

                        //:KeepOnGlowing://
                        ctx.strokeStyle=( "#88FFFF" );
                        ctx.fillStyle  =( "#88FFFF" );
                        
                    }else{

                    ///    //:FlashingTime ://
                    ///    if( bombage%4  <=(2-1) ){
                    ///        ctx.strokeStyle=( "#888888" );
                    ///        ctx.fillStyle  =( "#888888" );
                    ///    }else{
                    ///        ctx.strokeStyle=( "#FFFF00" );
                    ///        ctx.fillStyle  =( "#FFFF00" );
                    ///    };;

                        var rgb=( d_hotel13_bac[ bombage%10 ] );
                        ctx.strokeStyle=( rgb );
                        ctx.fillStyle  =( rgb );
                    };;
                };;
 

                var bod = d_hotel13_ren_bom[ (2*t_v)+0 ];
                var sig = d_hotel13_ren_bom[ (2*t_v)+1 ];

                if( bod == c_hotel13_bod_cir ){

                    F_HOTEL13_DRAW_2D_CIR(
                        ctx
                    ,   pog_t_x + (t_w/2)
                    ,   pog_t_y + (t_h/2)
                    ,   ( (t_w + t_h) / 2 )
                    );;
                }else
                if( bod == c_hotel13_bod_box ){

                    F_HOTEL13_DRAW_2D_BOX(
                        ctx
                    ,   pog_t_x
                    ,   pog_t_y
                    ,       t_w
                    ,       t_h
                    ,   (t_w+t_h)/2/4 
                    );;

                }else

                if( 0
                ||  bod == c_hotel13_bod_lef  
                ||  bod == c_hotel13_bod_rig  
                ||  bod == c_hotel13_bod_top  
                ||  bod == c_hotel13_bod_bot
                ){

                    F_HOTEL13_DRAW_2D_BOX(
                        ctx
                    ,   pog_t_x
                    ,   pog_t_y
                    ,       t_w
                    ,       t_h
                    ,   (t_w+t_h)/2/4 
                    );;
                }else
    
                //- ---------------------------- -//   
                //+ #_PILL_SHAPE_LOOKS_UGLY_#    +//
                //- ---------------------------- -//                        
                //- if( bod == c_hotel13_bod_lef -//
                //- ||  bod == c_hotel13_bod_rig -//
                //- ){                           -//
                //-                              -//
                //-     F_HOTEL13_DRAW_2D_BOX(   -//
                //-         ctx                  -//
                //-     ,   pog_t_x              -//
                //-     ,  (pog_t_y+(t_h/4))     -//
                //-     ,       t_w              -//
                //-     ,      (t_h/2)           -//
                //-     ,   (t_w+t_h)/2/4        -//
                //-     );;                      -//
                //- }else                        -//
                //- if( bod == c_hotel13_bod_top -//
                //- ||  bod == c_hotel13_bod_bot -//
                //- ){                           -//
                //-     F_HOTEL13_DRAW_2D_BOX(   -//
                //-         ctx                  -//
                //-     ,  (pog_t_x+(t_w/4))     -//
                //-     ,   pog_t_y              -//
                //-     ,      (t_w/2)           -//
                //-     ,       t_h              -//
                //-     ,   (t_w+t_h)/2/4        -//
                //-     );;                      -//
                //- }else                        -//
                //- ---------------------------- -// 

                if( bod == c_hotel13_bod_das ){

                    ctx.strokeRect( 
                       ( pog_t_x     )
                    ,  ( pog_t_y     )
                    ,  (     t_w     )
                    ,  (     t_h     )
                    );;
           
                }else{

                    F_HOTEL13_DRAW_2D_CIR(
                        ctx
                    ,   pog_t_x + (t_w/2)
                    ,   pog_t_y + (t_h/2)
                    ,   ( (t_w + t_h) / 2 )
                    );;
                };;

                if( sig ){ /**ItakeThisBack**/ };   
                //: TAG[ sig_dec / dec_sig ]://
                //: TAG[ tw9/t9w/th9/t9h   ]://
                var sig_dec =( d_hotel13_dec_bom_all[ t_v ] );
                
                var tw9 =( t_w / 9 ); //:AKA[ t9w ]://
                var th9 =( t_h / 9 ); //:AKA[ t9h ]://
                var t81 ; //:AKA[             ti9 ]://
                var tx9 ; //:AKA[             t9x ]://
                var ty9 ; //:AKA[             t9y ]://

                for( t81 = 0 ; t81 <=(81-1) ; t81++ ){

                    if( sig_dec[ t81 ] >= 1 ){

                        tx9 =(          ( t81 % 9 ) );
                        ty9 =(Math.floor( t81 / 9 ) );
        
                        ctx.fillRect( 
                           ( pog_t_x + ( tx9 * tw9 ) )
                        ,  ( pog_t_y + ( ty9 * th9 ) )
                        ,  (           (       tw9 ) )
                        ,  (           (       th9 ) )
                        );;
                    };;
                };;

            };;

        };;};;
        };;};;
    };;

    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://

    const   F_HOTEL13_DRAW_2D_FAD = function
    PRIVATE_F_HOTEL13_DRAW_2D_FAD(
    
        /** NO ARGS **/
    ){
        //:DRAW_2D:COMMON_VAR_HEADER:--------------------://
                                                      //:://
        let sam =( d_hotel13_sam         );           //:://
        let ctx =( d_hotel13_sam.hot_con );           //:://
                                                      //:://
        var g_w =( sam.hot_can.width / 5 ); //:GridCell.W://
        var g_h =( sam.hot_can.height/ 5 ); //:GridCell.H://
                                                      //:://
        var peb_m_x =( g_w / 64 );  //: peb multiplier x ://
        var peb_m_y =( g_w / 64 );  //: peb multiplier y ://    
                                                      //:://
        //:----------------------------------://      //:://
        //: SEE[ F_HOTEL13_DRAW_2D_TIL ]     ://      //:://
        //: For variable descriptions.       ://      //:://
        ////////////////////////////////////////      //:://
        var lacoma                          ////      //:://
        ,   dpx,dpy,dtx,dty,dti,dtu,c_i     ////      //:://
        ,   h4x,h4y,lat,dia,san             ////      //:://
        ,   t_x,t_y,t_v,t_w,t_h,t_t         ////      //:://
        ,   peb                             ////      //:://
        ,   clk , clk_t_x , clk_t_y         ////      //:://
        ,   mou , mou_t_x , mou_t_y         ////      //:://
        ////////////////////////////////////////      //:://
        //:----------------------------------://      //:://
        //:--------------------:DRAW_2D:COMMON_VAR_HEADER://

        mou_t_x = sam.te7_mou_t_x[ sam.edi_te7 ];
        mou_t_y = sam.te7_mou_t_y[ sam.edi_te7 ];

        for( var te7 =(7-1); te7 >=(  0 ) ; te7 -- ){
        
            peb = d_hotel13_te7_peb[ te7 ]
            t_w = ( peb * peb_m_x );
            t_h = ( peb * peb_m_y );
            
            clk_t_x = sam.te7_clk_t_x[ te7 ];
            clk_t_y = sam.te7_clk_t_y[ te7 ];
        
        for( var r13 =( 0 ); r13 <=(13-1) ; r13 ++ ){
        
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: @g_x@ : Grid Cell Where Room Could Be X  ://
            //: @g_y@ : Grid Cell Where Room Could Be Y  ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            var g_x = d_hotel13_r13_g_x[ r13 ];
            var g_y = d_hotel13_r13_g_y[ r13 ];
            ASS( g_x >= 0 );
            ASS( g_y >= 0 );
            
            var o_x =( g_x * g_w );
            var o_y =( g_y * g_h );
            
            if( (7-1) == te7 ){
                
                //:--------------------------------------://
                //: This section only done in the        ://
                //: tile loop, because it ERASES         ://
                //: everything.                          ://
                //:--------------------------------------://    
            };;
            
            //:- - - - - - - - - - -- - - - - - - - - - -://
            //: Draw all tiles of given tile size.       ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            
            dpx = 512 ;   //: Active Level Data Origin X ://
            dpy = 512 ;   //: Active Level Data Origin Y ://
            
            h4x =(           ( r13 % 4 ) );  //:@r13_h4x@://
            h4y =( Math.floor( r13 / 4 ) );  //:@r13_h4y@://
            
            lat = d_hotel13_te7_lat[ te7 ];
            dia = d_hotel13_te7_dia[ te7 ];
            
            dpx += ( 128 * h4x ); //:Now in correct room ://
            dpy += ( 128 * h4y ); //:of data to render   ://
            
            dpx += dia ; //: Now at correct[ te7 ]tile   ://
            dpy += dia ; //: size of data to render.     ://

            dpx += (0) ; //:Offset needed to reach the   ://
            dpy += lat ; //:FADA layer of our data.      ://
            
            san = lat ;  //: SPAN_IN_TILES == LATERAL_OS ://
        
        for( t_y = 0 ; t_y <=(san-1) ; t_y ++ ){
        for( t_x = 0 ; t_x <=(san-1) ; t_x ++ ){
            
            dtx = dpx + t_x ;
            dty = dpy + t_y ;
            dti = ( dtx + ( dty * 2048 ) ); //:AKA[ p_i ]://    
            c_i =( 4*dti );
            dtu =(( 0x0
            | ( d_pix2048[ c_i + 0 ] << 24 )   //:#GFDI_0123#://
            | ( d_pix2048[ c_i + 1 ] << 16 )   //:#GFDI_0123#://
            | ( d_pix2048[ c_i + 2 ] <<  8 )   //:#GFDI_0123#://
            | ( d_pix2048[ c_i + 3 ] <<  0 )   //:#GFDI_0123#://
            )>>>0);
            
            t_t =( ( dtu & 0x0FFFFFFF ) >>> 0 );
            t_v =( dtu >>> 28 )&(0xF); //:Tile Is 4Bit Number://
            
            //:-----------:0x12345678------------------------://

            if( t_v >= 1 && t_v <=(16-1) ){

                pog_t_x = ( o_x + ( t_x * t_w ) );
                pog_t_y = ( o_y + ( t_y * t_h ) );

                ctx.strokeStyle=(
                        d_hotel13_hcp_fad[ t_v ] 
                );;
                ctx.fillStyle=(
                        d_hotel13_hcp_fad[ t_v ] 
                );;
    
                ASS( d_tik >= 0 ,"[FK242]");
                ASS(   t_t >= 0 ,"[FK242]");
                if(  d_tik < t_t ){
                
                    YEL( "[d_tik]:" , d_tik );
                    YEL( "[..t_t]:" ,   t_t );
                };;

                //:AKA[ age ]://
                var tikadel = ( d_tik - t_t );   //:@tikadel@://

                var fad_t_w ; //:FADA:til_wid://
                var fad_t_h ; //:FADA:til_hig://
                var fadshow ; //:ShowExplosionTile?://
                var lim =( c_hotel13_f30_fad );

                fadshow =( tikadel >= 0 && tikadel <= lim );

                if( (!(fadshow)) ){

                }else
                if( ( (fadshow)) ){

                    var per = ( (lim-tikadel) / lim );

                    
                    var fad_t_w =( t_w * per );
                    var fad_t_h =( t_h * per );

                    var fad_t_x =( pog_t_x + ((t_w-fad_t_w)/2) );
                    var fad_t_y =( pog_t_y + ((t_h-fad_t_h)/2) );

                    if( 0 === tikadel % 2 ){

                        ctx.strokeRect( 
                            ( fad_t_x     )
                        ,   ( fad_t_y     )
                        ,   ( fad_t_w     )
                        ,   ( fad_t_h     )
                        );;
                        ctx.strokeRect( 
                            ( fad_t_x     ) + (fad_t_w/3)
                        ,   ( fad_t_y     ) + (fad_t_h/3)
                        ,   ( fad_t_w/3   )  
                        ,   ( fad_t_h/3   )  
                        );;
                        ctx.strokeRect( 
                            ( fad_t_x     ) + (fad_t_w/6)
                        ,   ( fad_t_y     ) + (fad_t_h/6)
                        ,   ( fad_t_w*(4/6)   )  
                        ,   ( fad_t_h*(4/6)   )  
                        );;
                    }else{
                        ctx.strokeRect( 
                            ( fad_t_x           ) + fad_t_w*(1/12)
                        ,   ( fad_t_y           ) + fad_t_h*(1/12)
                        ,   ( fad_t_w*(10/12)   )
                        ,   ( fad_t_h*(10/12)   )
                        );;
                        ctx.strokeRect( 
                            ( fad_t_x     ) + fad_t_w*(3/12)
                        ,   ( fad_t_y     ) + fad_t_h*(3/12)
                        ,   ( fad_t_w*(6/12)   )  
                        ,   ( fad_t_h*(6/12)   )  
                        );;
                        ctx.strokeRect( 
                            ( fad_t_x     ) + (fad_t_w*(8/18))
                        ,   ( fad_t_y     ) + (fad_t_h*(8/18))
                        ,   ( fad_t_w/3/3  )  
                        ,   ( fad_t_h/3/3  )  
                        );;
                    };;
                };;

       

            };;
        };;};;
        };;};;
    };;

    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://
    
    const F_HOTEL13_DRAW_2D = function
    PRIVATE_F_HOTEL13_DRAW_2D(
    
        /** No arguments **/
    ){
        let ctx = d_hotel13_sam.hot_con       ;
        let wid = d_hotel13_sam.hot_can.width ;
        let hig = d_hotel13_sam.hot_can.height;
        let tik =( d_tik );
        
        if( 0 == tik%2 ){
            ctx.fillStyle = "DARKRED" ;
        }else{
            ctx.fillStyle = "#770000" ;
        };;
        ctx.fillRect(0, 0, wid, hig); //:320*5://
    
        if( d_hotel13_sam.vis_til != 0 ){    //:c_lay_til://
        
            F_HOTEL13_DRAW_2D_TIL();
        };;
        if( d_hotel13_sam.vis_bom != 0 ){    //:c_lay_bom://
            
            F_HOTEL13_DRAW_2D_BOM();
        };;
        if( d_hotel13_sam.vis_fad != 0 ){    //:c_lay_fad://    
        
            F_HOTEL13_DRAW_2D_FAD();  
        };;
    };;
    //:SEG_D2D:- - - - - - - - -- - - - - - - - -:SEG_D2D://
    //:====================:HOTEL13_FUNCS:ALL_RENDER_CODE://
    //:===========================:HOTEL13_FUNCS:_DRAW_2D://
    //:HOTEL13_FUNC:MAIN_UPDATE_LOOP:====================://

    const   F_HOTEL13_SAM_TIK = function
    PRIVATE_F_HOTEL13_SAM_TIK(
        /** NO ARGS **/
    ){
        //:Update_Tick_Time:---------------------://            

        if( d_hotel13_not_aim ){
        
            d_tik ++ ; //:#[d_tik++]#://
        }else
        if( d_hotel13_yes_aim ){
            //:----------------------------------://
            //: Do nothing. Some other code is   ://
            //: managing the ticker.             ://
            //:----------------------------------://
        }else{
            F_PRIVATE_HOTEL13_ERR(
                "[UNKNOWNCASE_2022_07_12]"
            );;
        };;
        //:---------------------:Update_Tick_Time://
        //:Do_Work_And_Adjust_Frame_Delay:-------://

            d_hotel13_t_0 = performance.now();

                F_HOTEL13_TIK();
                F_HOTEL13_DRAW_2D();

            d_hotel13_t_1 = performance.now();

            d_hotel13_mil =(  d_hotel13_t_1
                             -d_hotel13_t_0 );

            d_hotel13_ams =(  d_hotel13_tms
                            - d_hotel13_mil );

        //:-------:Do_Work_And_Adjust_Frame_Delay://
        //:Is_FPS_GOOD:--------------------------://
        //:                                      ://
        //: @d_hotel13_mil@ : used up  millisecs ://
        //: @d_hotel13_tms@ : allotted millisecs ://
        //:                                      ://
        //:- - - - - - - - - -- - - - - - - - - -://

            if( d_hotel13_mil <= d_hotel13_tms ){

            //: console.log( "[TIME_TO_SPARE]"  );
            }else{
                console.log( "[YOU_BE_LAGGGIN]" );
            };;
        //:--------------------------:Is_FPS_GOOD://
    };;
    
    const   F_HOTEL13_SAM_TIKLOOP = function
    PRIVATE_F_HOTEL13_SAM_TIKLOOP(
        /**NOARGS**/
    ){
        //:Core Logic , Decoupled from ://
        //:ugly looper function.       ://
        F_HOTEL13_SAM_TIK();
    
        //:----------------------------------------------://
        //: The timeout is __NOT__ target milliseconds   ://    
        //: ( d_hotel13_tms )but rather the adjusted     ://    
        //: milliseconds( d_hotel13_ams ). The amount    ://    
        //: of milliseconds you have __LEFT__ after      ://    
        //: doing your processing.                       ://    
        //:----------------------------------------------://
        window.setTimeout(
            ( F_HOTEL13_SAM_TIKLOOP )
        ,   ( d_hotel13_ams         )    
        );;
    };;
    //:====================:HOTEL13_FUNC:MAIN_UPDATE_LOOP://
    //:HOTEL13_STAND_ALONE_MAIN_INITIALIZER:=============://    
        
    const F_HOTEL13_SAM_RUN = function
    PRIVATE_F_HOTEL13_SAM_RUN(
        /** No Args **/
    ){
        //:----------------------------------------------://
        //: Only when .js file is running as stand alone ://   
        //: program. When part of[ server.js ]we use     ://
        //: the WEBGL setup to render our data.          ://
        //:----------------------------------------------://
        if( d_hotel13_yes_aim ){ ERR("[StandAloneOnly]"); };    
        if(!d_hotel13_not_aim ){ ERR("[SAMVARSPROBLEM]"); };

        //: TAG[ F_HOTEL13_SAM_INI | INITIALIZE_HOTEL  ] ://
        //: TAG[ F_HOTEL13_INI     | INIT | INITIALIZE ] ://
        
        if( d_hotel13_not_aim ){
            //:------------------------------------------://
            //: Initialize tiker to 1 hour in the        ://    
            //: future at 60FPS (      1000 == 1 second )://    
            //:                 (   60*1000 == 1 minute )://    
            //:                 (60*60*1000 == 1 hour   )://    
            //:                                          ://    
            //: We are GAURANTEED to be able to back-date://    
            //: bomb-triggering by 1 hour. Should be more://    
            //: than enough to manipulate timestamps in  ://    
            //: bombs to make them detonate early.       ://    
            //:                                          ://    
            //:(we really only need maybe, 3 seconds max)://    
            //:------------------------------------------://    
            d_tik =( 60 * 60 * 1000 );  //:#TIMEWAVEZERO#://
        }else{
            PRIVATE_F_HOTEL13_ERR(
                "[Code_Only_For_Standalone_Mode]"
            );;
        };;

        //:Try_To_Load_Level_From_Server:----------------://

            var s_x =( ""+d_hotel13_wmc_i_x+"" );
            var s_y =( ""+d_hotel13_wmc_i_y+"" );
            var s_z =( ""+d_hotel13_wmc_i_z+"" );

            if( 0
            ||   ( 0 > d_hotel13_wmc_i_x )
            ||   ( 0 > d_hotel13_wmc_i_y )
            ||   ( 0 > d_hotel13_wmc_i_z )
            ){
                YEL("[NEG_WMC:wmc_hasnt_been_set_yet]");
                ERR("[NEG_WMC:wmc_hasnt_been_set_yet]");
            };;

            //:zero_padded_string_coords:------------://

            //: TAG[ zeropad | zero-pad | zero_pad ] ://
            //: TAG[ zeropadding | zero-padding    ] ://
            //: TAG[ zero_padding | zero padding   ] ://
                
                var dex=( 0 );
                for( dex = 0 ; dex <=(3-1) ; dex++ ){

                    //:#_ZERO_PAD_#://
                    if( s_x.length < 3 ){s_x="0"+s_x;};
                    if( s_y.length < 3 ){s_y="0"+s_y;};
                    if( s_z.length < 3 ){s_z="0"+s_z;};
                };;

            //:------------:zero_padded_string_coords://
            //:Initiate_Download:--------------------://

                //:::::::::::::::::::::::::::::::::::://
                //:EX[ "PNG/X_111/Y_222/Z_333/"     ]://
                //:..[   "AIM_111_222_333.PNG"      ]://
                //:::::::::::::::::::::::::::::::::::://
                d_pngpath_dow =( ""
                +     "PNG/" 

                +     "X_" + s_x + "/"
                +     "Y_" + s_y + "/"
                +     "Z_" + s_z + "/"  

                +     "AIM"
                +      "_"
                +      s_x
                +      "_"
                +      s_y
                +      "_"
                +      s_z

                +    ".PNG"
                );;

                let coohash =(
                    ( s_x + "_" + s_y + "_" + s_z )
                );;

                F_HOTEL13_CAS_COOHASH_SCATPNG( coohash )
                .then( ( i_scatpng )=>{

                    if( i_scatpng.m_has >= 1 ){

                        LOG( "[i_scatpng.m_has]"
                             , i_scatpng.m_has );;
                        LOG( "[i_scatpng.m_ooi]"
                             , i_scatpng.m_ooi );;

                        F_HOTEL13_HERSYNC_LOD_PNG(

                            i_scatpng.m_png
                        );;
                    }else{
                        //:::::::::::::::::::::::::::::::://
                        //: Do nothing. No .PNG to load. ://
                        //: .PNG ==[ LevelPack / Hotel ] ://
                        //:::::::::::::::::::::::::::::::://
                        console.log(
                            "[NO_PNG:i_scatpng]" 
                                    ,i_scatpng 
                        );;
                    };;
                });;
            //:------------------------:Initiate_Download://
        //:----------------:Try_To_Load_Level_From_Server://

    
        F_HOTEL13_SAM_TIKLOOP(); //:LoopForever://
    };;
    //:=============:HOTEL13_STAND_ALONE_MAIN_INITIALIZER:// 
    //:HOTEL13_FUNCS:CLICK_TO_GRIDCELL_XY:===============://
    
    const   F_HOTEL13_SAM_EDI_CLK_G_X =(
      "[FIX:F_HOTEL13_SAM_EDI_CLK_GXY]" );;
    const   F_HOTEL13_SAM_EDI_CLK_G_Y =(
      "[FIX:F_HOTEL13_SAM_EDI_CLK_GXY]" );;
    const   F_HOTEL13_SAM_EDI_CLK_GXY = function
    PRIVATE_F_HOTEL13_SAM_EDI_CLK_GXY(
    
        i_clk_p_x
    ,   i_clk_p_y
    ){
        let sam = d_hotel13_sam ;
        
        var can_wid = sam.hot_can.width  ;
        var can_hig = sam.hot_can.height ;
        
        var g_w =( can_wid / 5 ); //: GridCellWidth  ://
        var g_h =( can_hig / 5 ); //: GridCellHeight ://
        
        var g_x =Math.floor( i_clk_p_x / g_w );
        var g_y =Math.floor( i_clk_p_y / g_h );
    
        return( [ g_x , g_y ] );
    };;
    //:===============:HOTEL13_FUNCS:CLICK_TO_GRIDCELL_XY://
    //:HOTEL13_FUNCS:EDITOR_HIT_DETECTION:===============://
    //:                                                  ://
    //:    This hit detection is what makes              ://
    //:    "no overlap" mode in editor possible.         ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

    //:TYPO:F_HOTEL13_EDI_CLK_HIT://
    const   F_HOTEL13_EDI_CLK_HIT =(
      "[FIX:F_HOTEL13_SAM_EDI_CLK_HIT]" );;

    const   F_HOTEL13_SAM_EDI_CLK_HIT = function
    PRIVATE_F_HOTEL13_SAM_EDI_CLK_HIT(
                   //:-----------------------------------://
        i_clk_p_x  //:  Canvas Pixel Click Y             ://
    ,   i_clk_p_y  //:  Canvas Pixel Click X             ://
    ,   i_te7      //:  Tile Size To Set                 ://
    ,   i_la3      //:  Layer To Set Tile On.            ://
    ){             //:-----------------------------------://
        //:[ATF]:----------------------------------------://
        //:                                              ://
        //:  Return( 1 )if click position where we would ://
        //:  like to set a tile returns a non-zero tile  ://
        //:  of ANY_SIZE within overlapping airspace of  ://
        //:  potential tile we were about to set.        ://
        //:                                              ://
        //:----------------------------------------:[ATF]://

        if( d_bug >= 1 ){

            if(!( i_te7 >= 0 && i_te7 <=(7-1) )){
                YEL("[KANGA:MACHINE][i_te7]", i_te7 );
                ERR("[KANGA:MACHINE]"               );
            };;
            if(!( i_la3 >= 0 && i_la3 <=(3-1) )){
                YEL("[KANGA:ANIMAL][i_la3]", i_la3 );
                ERR("[KANGA:ANIMAL]"               );
            };;
        };;
        let   sam = d_hotel13_sam ;

        var o_hit =( 7066607 );
        
        var gxy = F_HOTEL13_SAM_EDI_CLK_GXY(
                    i_clk_p_x , i_clk_p_y   );;
        var g_x =( gxy[ 0 ] );
        var g_y =( gxy[ 1 ] );

        if( 0
        ||  (!( g_x >= 0 && g_x <=( 5-1 ) ))
        ||  (!( g_y >= 0 && g_y <=( 5-1 ) ))
        ){
            YEL( "[g_x]:" , g_x       );
            YEL( "[g_y]:" , g_y       );
            YEL( "[p_x]:" , i_clk_p_x );
            YEL( "[p_y]:" , i_clk_p_y );

            ERR( "[g_x_orr_g_y:OOB]"  );
        };;

        var g25 , h_x , h_y ;

        h_x =( 0-1 );
        h_y =( 0-1 );
                    
        if(  (!( g_x >= 0 && g_x <=(5-1) ) )
        ||   (!( g_y >= 0 && g_y <=(5-1) ) )
        ){
            o_hit =( 1 ); //:Undefined. We will say we   ://
                          //:"hitting the void" because  ://
                          //:nothing can be placed within://
                          //:the void....................://
        }else{
            g25 = ( g_x + ( g_y * 5 ) );
            h_x = d_hotel13_g25_h_x[ g25 ];
            h_y = d_hotel13_g25_h_y[ g25 ];
        };;
        
        if( h_x >= 0 && h_x <=(4-1)
        &&  h_y >= 0 && h_y <=(4-1)
        ){

            


            ASS( h_x >= 0 && h_x <=(4-1) , "[ASS_H_X]" );
            ASS( h_y >= 0 && h_y <=(4-1) , "[ASS_H_Y]" );

            //: What tile are you trying to set?     ://

            //:--------------------------------------://
            //: How Big Is Each Cell That A Level    ://
            //: May Or May Not Be In? AKA[ gcw,gch ] ://
            //: ( measured screen canvas pixels )    ://
            //:--------------------------------------://
            var te7 = i_te7 ; //- sam.edi_te7 ; -//
            var lat = d_hotel13_te7_lat[ te7 ];
            var caw = sam.hot_can.width ;    //:@caw@://
            var cah = sam.hot_can.height;    //:@cah@://
            var gcw =( caw / 5 );            //:@gcw@://
            var gch =( cah / 5 );            //:@gch@://

            //:--------------------------------------://
            //: For the tile size( te7 )you are      ://
            //: trying to set , how big is each      ://
            //: tile in on-screen pixels?  @te7@     ://
            //: lat == map width for given[ te7 ]    ://
            //: lat == "lateral offset"    @lat@     ://
            //:--------------------------------------://
            var lat = d_hotel13_te7_lat[ te7 ];   //:://
            var t_w =( gcw / lat );          //:@t_w@://
            var t_h =( gch / lat );          //:@t_h@://

            //:--------------------------------------://
            //: Divide mouse click location on       ://
            //: canvas by tile size to find tile xy  ://
            //: we are trying to set.                ://
            //:--------------------------------------://
            let FLO = Math.floor ;
            var t_x =(FLO( i_clk_p_x / t_w ))%( lat );
            var t_y =(FLO( i_clk_p_y / t_h ))%( lat );
            ASS( t_x >= 0 && t_x <=(64-1) , "[ATX]" );
            ASS( t_y >= 0 && t_y <=(64-1) , "[ATY]" );

            //:--------------------------------------://
            //: Do we have OVERLAP on any tile size  ://
            //: for the layer we want to target?     ://
            //: INCLUDING SELF!                      ://
            //:--------------------------------------://

            var r13 =( h_x + ( h_y * 4 ) ); //:#h_x#://
                                            //:#h_y#://
            var ti0 =( t_x + ( t_y *lat) ); //:@ti0@://

            let la3 = i_la3 ;

            //:--------------------------------------://
            //: It's not a collision if the tile     ://        
            //: value detected is in the future, so  ://
            //: supplying tick value of[ 0xFFFFFFFF ]://
            //: ensures __ALL__ tiles that exist were://
            //: set in the __PAST__.                 ://
            //: #_NO_ITS_NOT_A_TIME_TRAVEL_GAME_#    ://
            //:--------------------------------------://
            //:..................0x12345678..........://
            const ANYTIME_HIT =( 0xFFFFFFFF );  //:..://
            //:..................0x11223344..........://

            o_hit =( F_HOTEL13_HIT_R13_TE7_LA3_TI0(
                                   r13,te7,la3,ti0 
                                
                    /** ANYTIME_HIT                 **/
                    /**#_I_TAKE_IT_BACK_2022_07_09_#**/
            ));;

            if( o_hit >= 1 ){

                //: Obstacle in the way, Don't set.  ://
                ///window.alert( "[OBSTACLE_IN_THE_WAY]" );
            }else
            if( o_hit <= 0 ){

                ///window.alert( "[NOTHING_IN_THE_WAY]" );
            }else{
                ERR("[@UEC@:IconOfCoil_PerfectSex]");
            };;

        };;
    
        return( o_hit );
    };;
    //:===============:HOTEL13_FUNCS:EDITOR_HIT_DETECTION://
    //:HOTEL13_FUNCS:EDITOR_MOUSE_MOVE:==================://

    const   F_HOTEL13_SAM_EDI_MOU = function
    PRIVATE_F_HOTEL13_SAM_EDI_MOU(
    
        i_mou_p_x //: Input - MOUSE - Pixel.X  ://
    ,   i_mou_p_y //: Input - MOUSE - Pixel.Y  ://
    ){
        //:[ATF]:--------------------------------------------://
        //:                                                  ://
        //: Cut+paste of [ SAM_EDI_CLK ] used to record      ://
        //: what tiles the mouse is over when we have        ://
        //: a mouse-move event. DATE[ 2022_07_09 ]           ://
        //:                                                  ://
        //:--------------------------------------------:[ATF]://

        let sam = d_hotel13_sam ;
        
        var can_wid = sam.hot_can.width  ;
        var can_hig = sam.hot_can.height ;
        
        var g_w =( can_wid / 5 ); //: GridCellWidth  ://
        var g_h =( can_hig / 5 ); //: GridCellHeight ://
             
        sam.mou_p_x = i_mou_p_x ;
        sam.mou_p_y = i_mou_p_y ;
        
        sam.mou_g_x =Math.floor( sam.mou_p_x / g_w );
        sam.mou_g_y =Math.floor( sam.mou_p_y / g_h );
        
        //:Collect all MOUSE positions for all tile  ://
        //:sizes. For now, don't worry that this     ://
        //:might show up in ALL ROOMS when rendering.://
        //:[INTENTIONAL_BUG][BUG][HACK]              ://
        for( var te7 = 0 ; te7 <=(7-1) ; te7++ ){
        
            //: Lateral Offset Is Also Level Span    ://
            //: Measured In Tiles Of te7 size.       ://
            
            var lat = d_hotel13_te7_lat[ te7 ];
            var t_w = ( g_w / lat );
            var t_h = ( g_h / lat );
            
            let FLO = Math.floor ;
            
            var t_x = FLO( sam.mou_p_x / t_w );
            var t_y = FLO( sam.mou_p_y / t_h );
            
            t_x = ( t_x % lat );
            t_y = ( t_y % lat );
            
            sam.te7_mou_t_x[ te7 ]= t_x ;
            sam.te7_mou_t_y[ te7 ]= t_y ;
        };;
    };;
    //:==================:HOTEL13_FUNCS:EDITOR_MOUSE_MOVE://
    //:HOTEL13_FUNCS:EDITOR_CLICK:=======================://
    
    const   F_HOTEL13_SAM_EDI_CLK = function
    PRIVATE_F_HOTEL13_SAM_EDI_CLK(
    
        i_clk_p_x //: Input - CLicK - Pixel.X  ://
    ,   i_clk_p_y //: Input - CLicK - Pixel.Y  ://
    ){
        let sam = d_hotel13_sam ;
        
        var can_wid = sam.hot_can.width  ;
        var can_hig = sam.hot_can.height ;
        
        var g_w =( can_wid / 5 ); //: GridCellWidth  ://
        var g_h =( can_hig / 5 ); //: GridCellHeight ://
        
        var nov_hit =( 0 ); //:No_OVerlap...tile_HIT?://        
        
        sam.clk_p_x = i_clk_p_x ;
        sam.clk_p_y = i_clk_p_y ;
        
        sam.clk_g_x =Math.floor( sam.clk_p_x / g_w );
        sam.clk_g_y =Math.floor( sam.clk_p_y / g_h );
        
        //:Collect all click positions for all tile  ://
        //:sizes. For now, don't worry that this     ://
        //:might show up in ALL ROOMS when rendering.://
        //:[INTENTIONAL_BUG][BUG][HACK]              ://
        for( var te7 = 0 ; te7 <=(7-1) ; te7++ ){
        
            //: Lateral Offset Is Also Level Span    ://
            //: Measured In Tiles Of te7 size.       ://
            
            var lat = d_hotel13_te7_lat[ te7 ];
            var t_w = ( g_w / lat );
            var t_h = ( g_h / lat );
            
            let FLO = Math.floor ;
            
            var t_x = FLO( sam.clk_p_x / t_w );
            var t_y = FLO( sam.clk_p_y / t_h );
            
            t_x = ( t_x % lat );
            t_y = ( t_y % lat );
            
            sam.te7_clk_t_x[ te7 ]= t_x ;
            sam.te7_clk_t_y[ te7 ]= t_y ;
        };;


        
        //:randomize_brush_size:-------------------------://
        if( sam.edi_mod_ran >= 1 )
        {
            let randint = F_HOTEL13_RANDINT ;

            sam.edi_te7 = randint( 7-1 );
            F_MMC( sam , "edi_te7" , "edi_te7_min"
                                   , "edi_te7_max" );;

            sam.edi_v16 = F_MMR( 1 , 16 );
            F_MMC( sam , "edi_v16" , "edi_v16_min"
                                   , "edi_v16_max" );;
        };;
        //:-------------------------:randomize_brush_size://
        //:NO_OVerlap_Tile_Setting_Mode:-----------------://
        if( 1
        &&  ( sam.edi_mod_nov >= 1 )
        &&  ( sam.edi_mod_era <= 0 ) //: #_D_B_T_ERASER# ://
        &&  (    0
            ||   0 === sam.edi_la3  //:TILE(S)://
            ||   1 === sam.edi_la3  //:BOMB(S)://
            ) // 2 : _____________ NOT:FADA(S)://
        ){
            nov_hit=(
                F_HOTEL13_SAM_EDI_CLK_HIT( 
                    sam.clk_p_x
                ,   sam.clk_p_y
                ,   sam.edi_te7   //: #_TE7_BEFORE_LA3_# ://
                ,   sam.edi_la3   //: #_LA3_AFTERR_TE7_# ://
                ));;
        };;
        //:-----------------:NO_OVerlap_Tile_Setting_Mode://
        //:set_tile:-------------------------------------://
        //:put_tile:-------------------------------------://
        if( F_HOTEL13_GXY_YES( sam.clk_g_x , sam.clk_g_y ))
        {
        if( nov_hit <= 0 /** Not Tile Blocked **/ )
        {
            let   tik =(d_tik);
            let   v16 = d_hotel13_sam.edi_v16 ;
            var   tik_chk ;
            ASS(  tik <= 0x0FFFFFFF );

            const g_x     = sam.clk_g_x ;
            const g_y     = sam.clk_g_y ;
            const te7     = sam.edi_te7 ;
            var   chk     = (  0  );;;;;;
            var   val_u32 = 0xFFFFFFFF  ;

            //:#_PUT_TILE_SITE_OF_INTEREST_#:#PTSOI#://

            val_u32 =(( 0x00
            |        (  ( v16 & 0x0000000F ) << (  28) )
            |        (  ( tik & 0x0FFFFFFF ) << (   0) )
            )>>>0 ); //:(  0x12345678 )://
            ASS( val_u32 >= 0 , "[VAL_GT0]" );
            chk =(( val_u32 >>> (28) )&(0xF));
            if( chk != sam.edi_v16 ){
    
                YEL( "[wanted]:" + sam.edi_v16
                    +"[...got]:" + chk 
                );;
                ERR("[OHFUKNO2022]");
            };;
            tik_chk =( val_u32 >>>( 0 )&( 0x0FFFFFFF ) );
            if( tik != tik_chk 
            ||  tik !=   d_tik  
            ){
                YEL("[TICKINFUCKED2022]");
                ERR("[TICKINFUCKED2022]");
            };;
            
            const la3_til =( 0 ); //: Tile Layer ://
            const la3_bom =( 1 ); //: Bomb Layer ://
            const la3_fad =( 2 ); //: Fada Layer ://
            const la3 =( sam.edi_la3 );
            if( la3_til == la3 ){ NOP("[setting:TILE]"); };
            if( la3_bom == la3 ){ NOP("[setting:BOMB]"); };
            if( la3_fad == la3 ){ NOP("[setting:FADA]"); };
            //:------------------------------------------://
            //: Cell coordinate of the level pack in     ://
            //: memory that corresponds to the one that  ://
            //: active simulation runs on. The rest      ://
            //: surrounding just lets you know what is   ://
            //: adjacent to you.                         ://
            //:------------------------------------------://
            const c_x =( 1 /** Only Edit Active Level **/ );
            const c_y =( 1 /** Only Edit Active Level **/ );
            
            const g25 = ( g_x + ( g_y * 5 ) );
            const r13 = d_hotel13_g25_r13[ g25 ];
            const h_x = d_hotel13_r13_h_x[ r13 ];
            const h_y = d_hotel13_r13_h_y[ r13 ];
            const t_x = sam.te7_clk_t_x[   te7 ];
            const t_y = sam.te7_clk_t_y[   te7 ];

            if( 1
            &&  ( sam.edi_mod_era >=( 1 ) )
            &&  ( sam.edi_la3     >=( 0 ) )
            &&  ( sam.edi_la3     <=(3-1) )
            ){

                //:ERASE_CURRENT_LAYER_TILE_TYPE://

                //:YEL("[eraser_for_layer:la3]:",la3);

                F_HOTEL13_U32_PUT_ANY(
                    d_pix2048
                ,        2048 
                ,   c_x , c_y     //:<--LOCA :-------://
                ,   h_x , h_y     //:<--LOCA :-------://
                ,   te7 , la3     //:<--LOCA :-------://
                ,   t_x , t_y     //:<--LOCA :-------://
                ,   ( 0x00000000 )//:<--VALU :-------://
                );;
            }else
            if( 0 === sam.edi_la3
            ||  1 === sam.edi_la3
            ||  2 === sam.edi_la3
            ){
                //:#_PUT_TILE_SITE_OF_INTEREST_#:#PTSOI# ://

                if( 0 == sam.edi_la3 ){     //:TILE_LAYER://
            
                    ASS( 0 == la3 , "[zero_is_la3]" );

                    F_HOTEL13_U32_PUT_TIL(
                        d_pix2048
                    ,        2048 
                    ,   c_x , c_y   //:<--LOCA:CITYBLOCK ://
                    ,   h_x , h_y   //:<--LOCA:HOTELROOM ://
                    ,   te7         //:<--LOCA:EXPALAYER ://
                    ,   t_x , t_y   //:<--LOCA:TILE__X_Y ://
                    ,   val_u32     //:<--VALU:TILE__VAL ://
                    );;

                }else
                if( 1 == sam.edi_la3 ){     //:BOMB_LAYER://

                    var ttd =( 0 ); //:@ttd@://

                    if( sam.edi_mod_act ){

                        ttd =(d_hotel13_ttd_livetik[v16]);
                    //: ASS( ttd <= 110 , "[ttd_110]" );
                    };;

                    //: ttd == 0 : Means NEVER detonate  ://
                    //: ttd >= 1 : Ticks Till Detonation ://

                    F_HOTEL13_U32_PUT_BOM(
                        d_pix2048
                    ,        2048 
                    ,   c_x , c_y   //:<--LOCA:CITYBLOCK ://
                    ,   h_x , h_y   //:<--LOCA:HOTELROOM ://
                    ,   te7         //:<--LOCA:EXPALAYER ://
                    ,   t_x , t_y   //:<--LOCA:TILE__X_Y ://

                    ,   v16         //:<--VALU:TILE__VAL ://
                    ,   ttd         //:TicksTill_Detonate://
                    );;

                }else
                if( 2 == sam.edi_la3 ){     //:FADA_LAYER://    

                    ASS( 0 != la3 , "[zero_not_la3]" );

                    F_HOTEL13_U32_PUT_ANY(
                        d_pix2048
                    ,        2048 
                    ,   c_x , c_y   //:<--LOCA:CITYBLOCK ://
                    ,   h_x , h_y   //:<--LOCA:HOTELROOM ://
                    ,   te7 , la3   //:<--LOCA:EXPALAYER ://
                    ,   t_x , t_y   //:<--LOCA:TILE__X_Y ://
                    ,   val_u32     //:<--VALU:TILE__VAL ://
                    );;
                }else{
                    F_PRIVATE_HOTEL13_ERR(
                        "[Uknown_Editor_Layer]"
                    );;
                };;
            }else{

                YEL( "todo put explosion emit here" );
            };;
            
        };; //:Not Tile BLocked  ://
        };; //:Valid Grid Cell ? ://
        //:-------------------------------------:put_tile://
        //:-------------------------------------:set_tile://
    
    };;
    
    //:=======================:HOTEL13_FUNCS:EDITOR_CLICK://
    //:HOTEL13_FUNCS:MOUSE_EVENTS:=======================://

    const   F_HOTEL13_SAM_MOU_CLK = function
    PRIVATE_F_HOTEL13_SAM_MOU_CLK(
        evt_clk
    ){
        var clk_p_x = evt_clk.offsetX ;
        var clk_p_y = evt_clk.offsetY ;
        
        if( clk_p_x >= 0 && clk_p_x <=(c_fiverez-1) ){
        if( clk_p_y >= 0 && clk_p_y <=(c_fiverez-1) ){

            F_HOTEL13_SAM_EDI_CLK(
                clk_p_x
            ,   clk_p_y
            );;
        };;};;
    
        console.log( "[evt_clk]:" , evt_clk );
    };;
    const   F_HOTEL13_SAM_MOU_MOV = function
    PRIVATE_F_HOTEL13_SAM_MOU_MOV(
        evt_mov
    ){
        var mov_p_x = evt_mov.offsetX ;
        var mov_p_y = evt_mov.offsetY ;

        if( mov_p_x >= 0 && mov_p_x <=(c_fiverez-1) ){
        if( mov_p_y >= 0 && mov_p_y <=(c_fiverez-1) ){

            if( 1 == 1 /**Always**/  ){

                /** Update Cursor Position **/

                F_HOTEL13_SAM_EDI_MOU(
                    mov_p_x
                ,   mov_p_y
                );;
            };;
            if( sam.edi_mod_hol >= 1 ){

                F_HOTEL13_SAM_EDI_CLK(
                    mov_p_x
                ,   mov_p_y
                );;
            };;
        };;};;
    
        //////////////////console.log( "[evt_mov]:" , evt_mov );
    };;
    
    //:=======================:HOTEL13_FUNCS:MOUSE_EVENTS://    
    //:HOTEL13_FUNCS:EVENT_KEYBOARD:=====================://

    const   F_HOTEL13_EVT_ASC = function              
    PRIVATE_F_HOTEL13_EVT_ASC(                        
                                                      
        i_evt_key //:( i_evt_key )=>( o_asc_key )        ://  
    ){            //:COPY_PASTE_OF[ F_KEYMAST_EVT_ASC ]  ://   

        ///doesn't work for "+" and "-"
        ///var o_asc_key =(                              
        ///    String.prototype.toUpperCase.call(        
        ///    String.fromCharCode(                      
        ///                                              
        ///        i_evt_key.keyCode                     
        ///                                              
        ///    )||"[nil][o_asc_key]" ));;                
        ///return( o_asc_key );   

        var o_asc_key =(                              
            String.prototype.toUpperCase.call(        
            (                                                      
                i_evt_key.key                     
                                                    
            )||"[nil][o_asc_key]" ));;                
        return( o_asc_key );   
    };;                                               
    
    //:=====================:HOTEL13_FUNCS:EVENT_KEYBOARD://
    //:HOTEL13_FUNCS:KEYBOARD:===========================://
    
    const   F_HOTEL13_SAM_KEY_DOW = function
    PRIVATE_F_HOTEL13_SAM_KEY_DOW(
        evt_key
    ){
        let sam = d_hotel13_sam ;
        var asc = F_HOTEL13_EVT_ASC( evt_key );

        //:levelpack_save:-------------------------------://
        //:levelpack_load:-------------------------------://
    
            if( "S" == asc ){ 

                //:::::::::::::::::::::::::::::::::::::::://    
                //:                                      ://
                //:  All[ F_HOTEL13_*******_SAV ]Calls   ://
                //:  should save to HEROKU_HARD_DISK     ://
                //:  in addition to wherever-else on the ://
                //:  internet they decide to save.       ://
                //:                                      ://
                //:::::::::::::::::::::::::::::::::::::::://

                 ///// F_HOTEL13_HEROKUA_SAV();   //:<--------- sanity check. make sure this still works.
                F_HOTEL13_IMGURAP_SAV(); 

            };;
            if( "L" == asc ){ F_HOTEL13_HEROKUA_LOD();    };
            if( "O" == asc ){ /** OBLITERATE NOT OPEN **/ };

            //:------------------------------------------://
            //:                                          ://
            //: Will only work from a webserver it seems ://
            //:                                          ://
            //: stackoverflow.com/questions/69591311     ://
            //:------------------------------------------://

        //:-------------------------------:levelpack_save://
        //:-------------------------------:levelpack_load://

        if( "-" == asc
        ||  "_" == asc
        ){
                sam.edi_v16 -- ;
            if( sam.edi_v16 <=(    1 ) ){
                sam.edi_v16  =(    1 ) ;
            };;
        };;
        if( "+" == asc
        ||  "=" == asc
        ){
                sam.edi_v16 ++ ;
            if( sam.edi_v16 >=( 16-1 ) ){
                sam.edi_v16  =( 16-1 ) ;
            };;
        };;
        if( "[" == asc 
        ||  "{" == asc 
        ){
                sam.edi_te7 -- ;
            if( sam.edi_te7 <=(    0 ) ){
                sam.edi_te7  =(    0 ) ;
            };;
        };;
        if( "]" == asc 
        ||  "}" == asc 
        ){
                sam.edi_te7 ++ ;
            if( sam.edi_te7 >=(  7-1 ) ){
                sam.edi_te7  =(  7-1 ) ;
            };;
        };;
        
        //:--------------------------------------://
        //: Offset by 1 because I think it would ://
        //: be a bit weird to have artists refer ://
        //: to "tile size ZERO"                  ://            
        //:--------------------------------------://
        
        if( "1" == asc ){ sam.edi_te7 = 0 ; };
        if( "2" == asc ){ sam.edi_te7 = 1 ; };
        if( "3" == asc ){ sam.edi_te7 = 2 ; };
        if( "4" == asc ){ sam.edi_te7 = 3 ; };
        if( "5" == asc ){ sam.edi_te7 = 4 ; };
        if( "6" == asc ){ sam.edi_te7 = 5 ; };
        if( "7" == asc ){ sam.edi_te7 = 6 ; };
        
        //:set_tiles_bombs_or_fadas:---------------------://
        //:                                              ://
        //:  Tiles : Game Geometry                       ://
        //:  Bombs : Proximity Mines On Timers           ://
        //:  Fadas : Fire_Also_DAmage , Flames_Are_DAmage://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        
        var F_A_D =( 2 );
        if( "T" == asc ){ sam.edi_la3 =(   0   ); };
        if( "B" == asc ){ sam.edi_la3 =(   1   ); };
        if( "D" == asc ){ sam.edi_la3 =( F_A_D ); };
        if( "F" == asc ){ sam.edi_la3 =( F_A_D ); };
        
        //:herman_s_editor_modes:------------------------://
        //:                                              ://
        //: [H][E][R][M][A]n                             ://
        //:                                              ://
        //: [H]: Hold down brush                         ://
        //: [E]: Eraser                                  ://
        //: [R]: Randomize Brush Size Every Click        ://
        //: [M]: Mirror Brush Strokes.                   ://
        //: [A]: Set Down ACTIVATED/TRIPPED Bombs        ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        
        if( "H" == asc ){ F_TOG( sam,"edi_mod_hol" ); };
        if( "E" == asc ){ F_TOG( sam,"edi_mod_era" ); };
        if( "R" == asc ){ F_TOG( sam,"edi_mod_ran" ); };
        if( "M" == asc ){ F_TOG( sam,"edi_mod_mir" ); };
        if( "A" == asc ){ F_TOG( sam,"edi_mod_act" ); };
        if( "N" == asc ){ F_TOG( sam,"edi_mod_nov" ); };
        
        if( "M" == asc ){
            window.alert("[mirroring_not_implemented]");
        };;
        if( "O" == asc ){ 

            //:------------------------------------------://
            //: Toggle OBLITERATION MODE on/off          ://
            //: Instead of setting a tile of a given     ://
            //: size, we destroy a tile of a given       ://
            //: size on the grid. Destruction            ://
            //: propegates downward to other tile        ://
            //: sizes.                                   ://
            //:                                          ://
            //: Destruction also needs to propegate      ://
            //: UPWARD and fractionate larger tiles      ://
            //: into smaller chunks.                     ://
            //:------------------------------------------://

            F_TOG( sam,"edi_mod_obe" );

             
            YEL( "[FINISH_OBLITERATION_MODE]" );
        };;
        
        //:DANGER_ZONE:----------------------------------:// 
        //:                                              ://
        //: You have to press the key 3 times because    ://
        //: we don't want any accidents here.            ://
        //: 3 in a row without any other keys between.   ://
        //:                                              ://
        //:- - - - - - - - - - - -- - - - - - - - - - - -://
        if( "9" == asc ){
                sam.edi_ask_fil ++ ;
            if( sam.edi_ask_fil >= 3 ){
                sam.edi_ask_fil =( 0 );
                
                var mbi=( 2048*2048*4 )-1 ; //:@mbi@://
                for( var fil = 0 ; fil <=(mbi) ; fil++ ){
                
                    d_pix2048[ fil ]=( 0xFF );
                };;
                var debugger_breakpoint_hack=(777);
            };;
        }else{
            sam.edi_ask_fil=( 0 );
        };;
        if( "0" == asc ){
                sam.edi_ask_emp ++ ;
            if( sam.edi_ask_emp >= 3 ){
                sam.edi_ask_emp =( 0 );
                
                var mbi=( 2048*2048*4 )-1 ; //:@mbi@;//
                for( var emp = 0 ; emp <=(mbi) ; emp++ ){
                
                    d_pix2048[ emp ]=( 0x00 ); 
                };;
            };;
        }else{
            sam.edi_ask_emp=( 0 );
        };;
        //:----------------------------------:DANGER_ZONE://   
        
        console.log( "[key_dow]:" , evt_key );
    };;
    const   F_HOTEL13_SAM_KEY_UPP = function
    PRIVATE_F_HOTEL13_SAM_KEY_UPP(
        evt_key
    ){
        console.log( "[key_upp]:" , evt_key );
    };;
    
    //:===========================:HOTEL13_FUNCS:KEYBOARD://
    //:HOTEL13_UNIT_TEST:================================://
    
    const   F_HOTEL13_UTM = function
    PRIVATE_F_HOTEL13_UTM(
    
        /** NOARGS **/
    ){
        var r13     ;
        var r13_got ;
        
        var g25     ;
        var g25_got ;
        
        var got_h_x ;
        var exp_h_x ;
        
        var got_h_y ;
        var exp_h_y ;
        
        for( r13 = 0 ; r13 <=(13-1) ; r13++ ){
        
            g25     = d_hotel13_r13_g25[ r13 ];
            r13_got = d_hotel13_g25_r13[ g25 ];
            if( r13 != r13_got ){
                ERR("[R13_G25_TABLE_BROKEN:001]");
            };;
        };;
        for( g25 = 0 ; g25 <=(25-1) ; g25++ ){
        
            //:----------------------------------://
            //: Not all 25 values map to a       ://
            //: valid level map. Some map to     ://
            //: "the void". Hence (r13>=0)check. ://
            //:----------------------------------://
        
            r13     = d_hotel13_g25_r13[ g25 ];
            if( r13 >= 0 ){
            g25_got = d_hotel13_r13_g25[ r13 ];
            if( g25 != g25_got ){
                LOG("[G25]"      , g25          );
                LOG("[G25_GOT]"  , g25_got      );
                ERR("[G25_R13_TABLE_BROKEN:002]");
            };;};;
        };;
        
        //:----------------------------------------------://
        //: #r13_hxy# : This is okay for a unit test     ://    
        //: table. But this javascript dirtyness of      ://    
        //: arrays of arrays and a STRING in my          ://    
        //: number array... fuck that in production      ://    
        //: code.                                        ://    
        //:----------------------------------------------://
        var r13_hxy =[
            [ 0 , 0 ] , [ 1 , 0 ] , [ 2 , 0 ] , [ 3 , 0 ]
        ,   [ 0 , 1 ] , [ 1 , 1 ] , [ 2 , 1 ] , [ 3 , 1 ]
        ,   [ 0 , 2 ] , [ 1 , 2 ] , [ 2 , 2 ] , [ 3 , 2 ]
        ,   [ 0 , 3 ] , [ "OOB" ] , [ "OOB" ] , [ "OOB" ]
        ];;
         
        for( r13 = 0 ; r13 <=(13-1) ; r13++ ){
        
            got_h_x = d_hotel13_r13_h_x[ r13 ];
            exp_h_x = r13_hxy[ r13 ][ 0 ];
            if( got_h_x != exp_h_x ){
            
                ERR("[BROKEN_LUT:d_hotel13_r13_h_x]");
            };;
        };;
        for( r13 = 0 ; r13 <=(13-1) ; r13++ ){
        
            got_h_y = d_hotel13_r13_h_y[ r13 ];
            exp_h_y = r13_hxy[ r13 ][ 1 ];
            if( got_h_x != exp_h_x ){
            
                ERR("[BROKEN_LUT:d_hotel13_r13_h_x]");
            };;
        };;
    };;
    //:================================:HOTEL13_UNIT_TEST://
    
    
    //:HOTEL13_STAND_ALONE_SETUP:========================://
    //:                                                  ://
    //:  If not integrated into main server.js for       ://
    //:  our[ Atomic Ivy MMO ]( AIM )Then let's create   ://
    //:  the cellular bomb-o-mata (bombomata) game       ://
    //:  to make sure all of the mechanics work          ://
    //:  properly.                                       ://
    //:                                                  ://
    //:- - - - - - - - - - - - -- - - - - - - - - - - - -://
    
    console.log( "[YES_AIM]:" , d_hotel13_yes_aim );
    console.log( "[NOT_AIM]:" , d_hotel13_not_aim );
    
    if( d_hotel13_yes_aim ){
    
        console.log("[part_of_something_larger]");
    }else
    if( 1                  //:---------------------------://
    &&  d_hotel13_not_aim  //: <-- STANDALONE APP ?      ://
    &&  d_hotel13_notnode  //: <-- CLIENT    SIDE ?      ://
    ){                     //:---------------------------://
    
        console.log("[cellcularbombomata]");
        
        var sam = d_hotel13_sam ;
    
        const dom_roo = document.documentElement; 
        var   dom_bod = document.body           ; 
        if( (!dom_bod) ){
            dom_bod = document.createElement( "body" );
            document.body = dom_bod ;
        };;
        sam.hot_can = document.createElement( "canvas" );
        sam.hot_can.width =( 1600 );
        sam.hot_can.height=( 1600 );
        ASS( 1600 == c_fiverez , "[c_fiverez]" );
        dom_bod.appendChild( sam.hot_can );
    
        sam.hot_con = sam.hot_can.getContext( "2d" );
        
        //:add_mouse_handler:----------------------------://
        {
            let sexycanvasfuntimes = sam.hot_can ;

            //:TAG[ mouse move  ]://
            //:TAG[ mouse click ]://
            
            sexycanvasfuntimes.addEventListener(
            
                "mousemove"   //:EventType://
            ,   F_HOTEL13_SAM_MOU_MOV 
            );;
            sexycanvasfuntimes.addEventListener(
            
                "click"   //:EventType://
            ,   F_HOTEL13_SAM_MOU_CLK 
            );;
        }
        //:----------------------------:add_mouse_handler://
        //:add_keyboard_handler:-------------------------://
        {
            document.addEventListener(
                "keyup"  //:EVT_TYP://
            ,   F_HOTEL13_SAM_KEY_UPP
            );;
            document.addEventListener(
                "keydown"//:EVT_TYP://
            ,    F_HOTEL13_SAM_KEY_DOW
            );;
        }
        //:-------------------------:add_keyboard_handler://
    
        F_HOTEL13_UTM();  //:#WHY_UTM_ONLY_CALLED_HERE#??://
        F_HOTEL13_SAM_RUN();
    
    }else
    if( 1                  //:---------------------------://
    &&  d_hotel13_not_aim  //: <-- STANDALONE APP ?      ://
    &&  d_hotel13_yesnode  //: <-- SERVER    SIDE ?      ://
    ){                     //:---------------------------://

        console.log( "[hotel13_running_as_server]" );
    }else{

        console.log( "[d_hotel13_yes_aim]:"
                    ,  d_hotel13_yes_aim );;

        console.log( "[d_hotel13_not_aim]:" 
                    ,  d_hotel13_not_aim );;

        console.log( "[d_hotel13_yesnode]:" 
                    ,  d_hotel13_yesnode );;

        console.log( "[d_hotel13_notnode]:" 
                    ,  d_hotel13_notnode );;

        ERR("[unexpectedcase:2022_07_05]");
    };;
    //:========================:HOTEL13_STAND_ALONE_SETUP://
    //:TRY_TO_PARSE_INTEGER:=============================://
    //:                                                  ://
    //:    Used so that we can detect what levelpack     ://
    //:    X/Y room is being requested by client.        ://
    //:                                                  ://
    //:    EXAMPLE:  www.myserver.com/000/000            ://
    //:           :  Is LevelPack [ 0 , 0 ]              ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        const   F_HOTEL13_TRYATOI = function
        PRIVATE_F_HOTEL13_TRYATOI(

            i_str
        ){
            var o_k =( 1 );

            //:::::::::::::::::::::::::::::::::::::::::::://
            //: hack so that we don't crash when trying  ://
            //: to invoke method on[ i_str ].            ://
            //:::::::::::::::::::::::::::::::::::::::::::://
            if( 0
            ||  null        ==        i_str  
            ||  "undefined" == typeof i_str  
            ||  "string"    != typeof i_str
            ){
                i_str =( "" );
            };;
              

            var o_obj ={ laxcoma:"[HACK]"

            ,   m_has : 0 //: m_i32 exists ?      ://
            ,   m_i32 : 0 //: boxed integer value ://
            };;

            var dex     ;
            var s09 = ""; //:@s09@:String:Only0T09://
            var nlz = ""; //:@nlz@:NoLeadingZeros ://
            var c_p =(1); //:@c_p@:CollectionPhase://

            //:::::::::::::::::::::::::::::::::::::::::::://
            //: Remove anything but "0" to "9" ascii     ://
            //:::::::::::::::::::::::::::::::::::::::::::://

            var arr =( i_str.split("").filter( ( c )=>{

                var o_yes =( 0
                ||  "0" === c
                ||  "1" === c
                ||  "2" === c
                ||  "3" === c
                ||  "4" === c
                ||  "5" === c
                ||  "6" === c
                ||  "7" === c
                ||  "8" === c
                ||  "9" === c
                );;
                return( o_yes );
            }));;
            var s09 = arr.join("");
            
            //:::::::::::::::::::::::::::::::::::::::::::://
            //: Removing leading zeros.: : : : : : : : : ://
            //: "001" ==> "1"          : : : : : : : : : ://
            //:::::::::::::::::::::::::::::::::::::::::::://
            if( s09.length <= 0 ){
            
                o_obj.m_has =( 0 );
                o_obj.m_i32 =( 0 );
                o_k =( 0 );
            }else{
                for(dex = 0  
                ;   dex <=(s09.length-1) 
                ;   dex++
                ){    

                    if( 1 == c_p ){
                        if( "0" != nlz[ dex ] ){

                            c_p=( 2 );
                        };;
                    };;

                    if( 2 == c_p ){
                        nlz += s09[ dex ];
                    };;
                };;
            };;
            if( o_k >= 1 ){
                //: : : : : : : ::: : : : : : : ://
                //: No numeric characters (0-9) ://
                //: found in the string.        ://
                //: : : : : : : ::: : : : : : : ://
                if( 0 === nlz.length ){

                    o_obj.m_has =( 0 );
                    o_obj.m_i32 =( 0 );
                    o_k=( 0 );
                };;
            };;
            if( o_k >= 1 ){

                var res = Number.parseInt( nlz , 10 );
                if( Number.isNaN( res ) ){

                    o_obj.m_has =( 0 );
                    o_obj.m_i32 =( 0 );
                    o_k=( 0 );
                }else{

                    o_obj.m_has =(  1  );
                    o_obj.m_i32 =( res );
                    o_k=( 1 );
                };;
            };;

            return( o_obj );
        };;
    //:=============================:TRY_TO_PARSE_INTEGER://
    //:IS_THREE_DIGIT_STRING:============================://
    //:YES_STRING_3_DIGITS:==============================://

        const   F_HOTEL13_S3D     = "[FIX:YES_S3D]" ;
        const   F_HOTEL13_3DS     = "[FIX:YES_S3D]" ;
        const   F_HOTEL13_YES_3DS = "[FIX:YES_S3D]" ;

        const   F_HOTEL13_YES_S3D = function
        PRIVATE_F_HOTEL13_YES_S3D(  //:<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI : new:2022_07_19

            i_str_num
        ){
            var o_yes =( 1 ); /**IsUntilItIsnt**/

            if( "string" != typeof i_str_num ){
        
                //:::::::::::::::::::::::::::::::::::::::://
                //:                                      ://
                //:  Don't error here because it makes   ://
                //:  the routing simpler if the          ://
                //:  m_seg[ # ]is out of bounds and      ://
                //:  yeilds( "undefined" ).              ://
                //:                                      ://
                //:::::::::::::::::::::::::::::::::::::::://
                o_yes=( 0 );
            }else
            if( 3 != i_str_num.length ){

                o_yes=( 0 ); 
            }else{

                for( var dex = 0 ; dex <=(3-1) ; dex++ ){

                    if( 0
                    ||  "0" === i_str_num[ dex ]   //:EVE://
                    ||  "1" === i_str_num[ dex ]   //:ODD://
                    ||  "2" === i_str_num[ dex ]   //:EVE://
                    ||  "3" === i_str_num[ dex ]   //:ODD://
                    ||  "4" === i_str_num[ dex ]   //:EVE://
                    ||  "5" === i_str_num[ dex ]   //:ODD://
                    ||  "6" === i_str_num[ dex ]   //:EVE://       
                    ||  "7" === i_str_num[ dex ]   //:ODD://
                    ||  "8" === i_str_num[ dex ]   //:EVE://
                    ||  "9" === i_str_num[ dex ]   //:ODD://
                    ){
                        /** Still okay, do nothing.**/
                    }else{
                        o_yes=( 0 ); //:Failure://
                        break;
                    };;
                };;
            };;

            return( o_yes );
        };;
    //:==============================:YES_STRING_3_DIGITS://
    //:NOT_STRING_3_DIGITS:==============================://

        const   F_HOTEL13_NOT_S3D = function
        PRIVATE_F_HOTEL13_NOT_S3D(

            i_str_num
        ){
            var     yes_s3d =(F_HOTEL13_YES_S3D( i_str_num ));
            var     not_s3d =( ! yes_s3d );
            return( not_s3d );
        };;
    //:==============================:NOT_STRING_3_DIGITS://
    //:============================:IS_THREE_DIGIT_STRING://
    //:TRY_TO_INTERPRET_AS_COORD_HASH:===================://

    const   F_HOTEL13_TRY_ICH = "[FIX:ICH_TRY]" ;

    const   F_HOTEL13_ICH_TRY = function
    PRIVATE_F_HOTEL13_ICH_TRY( 
                  //:@ICH@ : Interpret as Coord Hash : : ://
        i_str
    ){
        //:[ATF]:::::::::::::::::::::::::::::::::::::::::://
        //:                                              ://    
        //: @ICH@:Interpas_Coord_Hash                    ://
        //: Try to interpret[ i_str ]as a                ://
        //: valid coorinate hash.                        ://
        //:                                              ://
        //::::::::::::::::::::::::::::::::::::::::::[ATF]://

        var strict_mode_failure =( 0 );

        var o_obj ={ laxcoma:"[HACK]"

        ,   m_has : 0
        ,   m_xyz : "[nil][m_xyz]"

        ,   m_i_x : ( 0 - 111 )
        ,   m_i_y : ( 0 - 222 )
        ,   m_i_z : ( 0 - 333 )
        };;
        Object.seal( o_obj );

        if( !i_str ){ i_str = "" ; };

        //:::::::::::::::::::::::::::::::::::::::::::://
        //: "000/000" is a different route , so      ://
        //: do not replaceAll( "/" , "_" ).          ://
        //:::::::::::::::::::::::::::::::::::::::::::://
        i_str = i_str.replaceAll( "," , "_" );
        i_str = i_str.replaceAll( "." , "_" );
        i_str = i_str.replaceAll( "!" , "_" );
        i_str = i_str.replaceAll( "+" , "_" );
        i_str = i_str.replaceAll( "-" , "_" );

        var arr = ( i_str.split( "_" ).filter(n=>n) );
        var dex ;
        if( arr.length != 3 ){

            strict_mode_failure =( 1 );
        };;
        if( arr.length < 3 ){

            strict_mode_failure =( 1 );

            var  d_0 =( arr.length );
            var  d_1 =(   3-1      );
            for( dex = d_0 ; dex <= d_1 ; dex++ ){

                arr[ dex ]=( "000" );
            };;
        };;
        for( dex = 0 ; dex <=( 3-1 ) ; dex++ ){

            if( 3 != ( arr[ dex ] ).length ){

                strict_mode_failure =( 1 );
            };;
        };;

        var num_obj =new Array( 3 );
            num_obj[ 0 ] = F_HOTEL13_TRYATOI( arr[ 0 ] );
            num_obj[ 1 ] = F_HOTEL13_TRYATOI( arr[ 1 ] );
            num_obj[ 2 ] = F_HOTEL13_TRYATOI( arr[ 2 ] );
        
        if( num_obj[ 0 ].m_has
        &&  num_obj[ 1 ].m_has
        &&  num_obj[ 2 ].m_has
        ){
            //:::::::::::::::::::::::::::://
            //: @m_has@ : HAS / Exists?  ://
            //: @m_xyz@ : XYZ Coord Hash ://
            //: @m_i_x@ : Member . i_x   ://
            //: @m_i_y@ : Member . i_y   ://
            //: @m_i_z@ : Member . i_z   ://
            //:::::::::::::::::::::::::::://

            o_obj.m_has =( 1 );
            o_obj.m_xyz =( ""
            +              ""+num_obj[0].m_i32+""
            +              ""+num_obj[1].m_i32+""
            +              ""+num_obj[2].m_i32+""
            );;
            o_obj.m_i_x =(    num_obj[0].m_i32 );
            o_obj.m_i_y =(    num_obj[1].m_i32 );
            o_obj.m_i_z =(    num_obj[2].m_i32 );

            if( 0
            ||  "number" != typeof o_obj.m_i_x 
            ||  "number" != typeof o_obj.m_i_y 
            ||  "number" != typeof o_obj.m_i_z 
            ){
                ERR("[WTF_NAN_FROM_ICH]");
            };;
        };;


        //:::::::::::::::::::::::::::::::::::::::::::://
        //:                                          ://        
        //:  #_LOOSE_RULE_CAUSE_FUCKING_PROBLEMS_#   ://        
        //:                                          ://        
        //:::::::::::::::::::::::::::::::::::::::::::://        
        if( strict_mode_failure >= 1 ){

            o_obj.m_has =( 0 );
        };;

        return( o_obj );
    };;
    const   F_HOTEL13_ICH = function
    PRIVATE_F_HOTEL13_ICH( //:@IC@:Is_Coord_Hash?://

        i_str
    ){
        //:[ATF]:::::::::::::::::::::::::::::::::::::::::://    
        //:                                              ://
        //:  Return positive if string can be            ://
        //:  interpreted as a coordinate hash.           ://
        //:                                              ://
        //:  i_str === "777"   ==> 777_000_000 ==> YES   ://
        //:  i_str === "1_2"   ==> 001_002_000 ==> YES   ://
        //:  i_str === "1_2_3" ==> 001_002_003 ==> YES   ://
        //:                                              ://
        //:  Actually... It's not that "777" yeilds      ://
        //:  "777_000_000" , it is that "777" and        ://
        //:  "777_000_000" are interpreted as the        ://
        //:  same value coordinate hash.                 ://
        //:                                              ://
        //::::::::::::::::::::::::::::::::::::::::::[ATF]://    
        var o_yes=( 0 );

        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: A bit wasteful of a way to do this , but     ://
        //: but this is javascript land.                 ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://
        if( !( "string" === typeof i_str )){

            o_yes=( 0 );
        }else
        if( "" === i_str ){

            o_yes=( 0 );
        }else{
            var obj_xyz = F_HOTEL13_ICH_TRY( i_str );
            if( obj_xyz.m_has ){

                o_yes =( 1 );
            };;
        };;
        return( o_yes );
    };;
    //:===================:TRY_TO_INTERPRET_AS_COORD_HASH://
    //:STRINGS_TO_COORDHASH:=============================://

        const  F_HOTEL13_STR_XYZ_COOHASH = "[WRONG]" ;
        const  F_HOTEL13_XYZ_COOHASH     = "[WRONG]" ;
        const  F_HOTEL13_STR_ARR_COOHASH = "[WRONG]" ;

        const   F_HOTEL13_STR_COOHASH = function
        PRIVATE_F_HOTEL13_STR_COOHASH(

            i_str_xxx //: EX[ "000" ]
        ,   i_str_yyy //: EX[ "420" ]
        ,   i_str_zzz //: EX[ "069" ]
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://    
            //:  We assume input is valid here.          ://
            //:  (AND_IT_FUCKED_US_OVER_BIG_TIME)        ://
            //:  (FOR_HOURS!! 2022_07_20:253AM  )        ://
            //:                                          ://
            //:------------------------------------:[ATF]://
            if( d_bug ){
                if( 3 != arguments.length ){
                    ERR("[WHERE_IS_YOUR_ARGS]");
                };;
                if( "string" != typeof i_str_xxx
                ||  "string" != typeof i_str_yyy
                ||  "string" != typeof i_str_zzz
                ){
                    ERR("[WRONG_TYPES_BITCH]");
                };;
            };;

            var ___ =( "" /**EMPTYSTRING**/ );
            var o_coohash =(""

            +   i_str_xxx + "_"
            +   i_str_yyy + "_"
            +   i_str_zzz + ___
            );;

            return( o_coohash );
        };;
    //:=============================:STRINGS_TO_COORDHASH://
    //:COORDHASH_TO_FILENAME:============================://

        const   F_HOTEL13_COOHASH_AIMPATH = function
        PRIVATE_F_HOTEL13_COOHASH_AIMPATH(

            i_coohash //:EX[ "123_456_789" ]
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: "123_456_789" ==TO==> "./PNG/"+          ://
            //: "X_123/Y_456/Z_789/AIM_123_456_789.PNG"  ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            var o_aimpath =( "[nil][o_aimpath]" );

            if( "string" != typeof i_coohash ){
                ERR("[BADINPUTTYPE2022]");
            };;

            var arr =( i_coohash.split( "_" )
                .filter( n => n ) );;

            if( 3 != arr.length ){
                //:::::::::::::::::::::::::::::::::::::::://
                //: Malformed input. I don't think we    ://
                //: can 100% prevent malformed input,    ://
                //: so we should __NOT__ crash the       ://
                //: server over this.                    ://
                //:::::::::::::::::::::::::::::::::::::::://
                o_aimpath = "./PNG/ERR_001.PNG" ;
            }else{
        
                var xxx = F_HOTEL13_PAD_STR( arr[0] );
                var yyy = F_HOTEL13_PAD_STR( arr[1] );
                var zzz = F_HOTEL13_PAD_STR( arr[2] );

                o_aimpath =( "" /////////////////
                +   "./PNG/"
                +          "X_"   +  xxx + "/" 
                +          "Y_"   +  yyy + "/" 
                +          "Z_"   +  zzz + "/" 
                +     "AIM_" 
                +                    xxx + "_"
                +                    yyy + "_"
                +                    zzz + ".PNG"
                );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
            };;
               
            return( o_aimpath );
        };;
    //:============================:COORDHASH_TO_FILENAME://
    //:IS_THE_STRING_A_COORDINATE_HASH:==================://
    //:                                                  ://
    //:     STR_0_9_YES : Return >=1 if "0"-"9" ascii.   ://
    //:     STR_EQU     : Return >=1 if equal strings.   ://
    //:     YES_COOHASH : Return >=1 if coordinate hash  ://
    //:     NOT_COOHASH : Return >=1 if NOT  coord hash  ://
    //:                                                  ://
    //: - - - - - - - - - - - -- - - - - - - - - - - - - ://

        const   F_HOTEL13_STR_0_9_YES = function
        PRIVATE_F_HOTEL13_STR_0_9_YES(

            i_chr //:DONT_Allow_Invalid_Input://
        ){
            if( "string" != typeof i_chr ){
                ERR("[STR_0_9:MUST_HAVE_STRING_INPUT]");
            };;
            if( i_chr.length != 1 ){
                ERR("[Expect_Char_Iput]");
            };;
            var o_yes =( 0 );

                if( "0" === i_chr[ 0 ]
                ||  "1" === i_chr[ 0 ]
                ||  "2" === i_chr[ 0 ]
                ||  "3" === i_chr[ 0 ]
                ||  "4" === i_chr[ 0 ]
                ||  "5" === i_chr[ 0 ]
                ||  "6" === i_chr[ 0 ]
                ||  "7" === i_chr[ 0 ]
                ||  "8" === i_chr[ 0 ]
                ||  "9" === i_chr[ 0 ]
                ){
                    o_yes =( 1 );
                };;
            return( o_yes );
        };;

        const   F_HOTEL13_STR_EQU = function
        PRIVATE_F_HOTEL13_STR_EQU(

            i_str_001
        ,   i_str_002
        ){ 
            if( "string" != typeof i_str_001
            ||  "string" != typeof i_str_002
            ){
                LOG("[i_str_001]:" , i_str_001 );
                LOG("[i_str_002]:" , i_str_002 );
                ERR("[EXPECTS_STRING_INPUT_2022]");
            };;
            var o_equ=( 0 );
            if( i_str_001 === i_str_002 ){
                o_equ=( 1 );
            };;
            return( o_equ );
        };;

        const   F_HOTEL13_YES_COOHASH = function
        PRIVATE_F_HOTEL13_YES_COOHASH(

            i_str //:AllowInvalidInput://
        ){
            var o_yes=( 0 );

            if( "string" != typeof i_str
            ||  i_str.length != 11 
            ){
                o_yes=( 0 );
            }else{
                if( 1
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 0 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 1 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 2 ] )

                &&  F_HOTEL13_STR_EQU( "_",i_str[ 3 ] )

                &&  F_HOTEL13_STR_0_9_YES( i_str[ 4 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 5 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 6 ] )

                &&  F_HOTEL13_STR_EQU( "_",i_str[ 7 ] )

                &&  F_HOTEL13_STR_0_9_YES( i_str[ 8 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[ 9 ] )
                &&  F_HOTEL13_STR_0_9_YES( i_str[10 ] )
                ){
                    o_yes =( 1 );
                };;
            };;
            return( o_yes );
        };;
        const   F_HOTEL13_NOT_COOHASH = function
        PRIVATE_F_HOTEL13_NOT_COOHASH(

            i_str
        ){  
            var o_not_coohash=( 0 );
            var   yes_coohash=( F_HOTEL13_YES_COOHASH(

                i_str
            ));;
            if( yes_coohash >= 1 ){ o_not_coohash=( 0 ); };
            if( yes_coohash <= 0 ){ o_not_coohash=( 1 ); };

            return( o_not_coohash );
        };;
    //:==================:IS_THE_STRING_A_COORDINATE_HASH://
    //:AIMPATH_TO_NAME_WITH_EXT:=========================://

        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: @aimpath@ : Full Path To Levelpack File      ://
        //: @namaext@ : Filename with extension string.  ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://

        const F_HOTEL13_AIMPATH_PNG_NAM = "[WRONG]" ;

        const   F_HOTEL13_AIMPATH_NAMAEXT = function
        PRIVATE_F_HOTEL13_AIMPATH_NAMAEXT(

            i_aimpath
        ){
            if( "string" != typeof i_aimpath ){
                ERR("[BADINN:AIMPATH_NAMAEXT]");;
            };;

            var arr =( i_aimpath
                .split(   "/"   )
                .filter( n => n ) 
            );;
            var o_namaext =( arr[ arr.length - 1 ] );
            return( o_namaext );
        };;
    //:=========================:AIMPATH_TO_NAME_WITH_EXT://
    //:AIMPATH_TO_NAME_WITHOUT_EXTENSION:===============://

        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: @aimpath@ : Full Path To Levelpack File      ://
        //: @namonly@ : Filename ONLY (no extension)     ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://

        const F_HOTEL13_AIMPATH_PNG_TIT = "[WRONG]" ;
        
        const   F_HOTEL13_AIMPATH_NAMONLY = function
        PRIVATE_F_HOTEL13_AIMPATH_NAMONLY(
            
            i_aimpath
        ){
            if( "string" != typeof i_aimpath ){
                ERR("[BADINN:AIMPATH_NAMONLY]");;
            };;
            
            var namaext =( F_HOTEL13_AIMPATH_NAMAEXT(

                i_aimpath
            ));;
            var arr =( namaext
                .split(   "."   )
                .filter( n => n )
            );;
            var o_namonly =( arr[ 0 ] );
            return( o_namonly );
        };;
    //:================:AIMPATH_TO_NAME_WITHOUT_EXTENSION://
    //:AIMPATH_TO_JUST_THE_FOLDER:=======================://
    
        const   F_HOTEL13_AIMPATH_JTF = function
        PRIVATE_F_HOTEL13_AIMPATH_JTF(

            i_aimpath
        ){
        //:[ATF]:----------------------------------------://
        //:                                              ://
        //:INN:                                          ://
        //:"./PNG/X_101/Y_202/Z_303/AIM_101_202_303.PNG" ://
        //:                                              ://
        //:OUT:                                          ://
        //:"./PNG/X_101/Y_202/Z_303"                     ://
        //:                                              ://
        //:----------------------------------------:[ATF]://  < < < < < < < < < NOTICE_ME_SENPAI : New functionality

            var o_jtf =( "[JFT_NOT_SET]" );
            var   dex , arr , m_i ;

            if( "string" != typeof i_aimpath ){

                //: Set Error Path ://
                o_jtf =( "./PNG/JTF_ERR" );
            }else{
                o_jtf =( "" );
                arr =( i_aimpath
                .   split(   "/"   )
                .   filter( n => n )
                );;

                m_i =( arr.length - 1 - 1 );
                for( dex = 0 ; dex <= m_i ; dex ++ ){

                                     o_jtf += arr[ dex ] ;
                    if( dex < m_i ){ o_jtf += "/" ;     };
                };;

            };;
            return( o_jtf /**@JTF@:Just_The_Folder**/ );
        };;
    //:=======================:AIMPATH_TO_JUST_THE_FOLDER://
    //:TRY_TO_INTERPRET_AS_AIM_JS_FILE:==================://

        //:#_MIS_SPELLINGS_#://

        const F_HOTEL13_GET_AIM_FMT = "[FIX:AIM_FMT_GET]" ;
        const F_HOTEL13_GET_FMT_AIM = "[FIX:AIM_FMT_GET]" ;

        const F_HOTEL13_AIM_GET_FMT = "[FIX:AIM_FMT_GET]" ;
    
        const F_HOTEL13_FMT_AIM_GET = "[FIX:AIM_FMT_GET]" ;
        const F_HOTEL13_FMT_GET_AIM = "[FIX:AIM_FMT_GET]" ;

        //:#_MIS_SPELLINGS_#://

        const F_HOTEL13_HAS_AIM_FMT = "[FIX:AIM_FMT_HAS]" ;
        const F_HOTEL13_HAS_FMT_AIM = "[FIX:AIM_FMT_HAS]" ;

        const F_HOTEL13_AIM_HAS_FMT = "[FIX:AIM_FMT_HAS]" ;
    
        const F_HOTEL13_FMT_AIM_HAS = "[FIX:AIM_FMT_HAS]" ;
        const F_HOTEL13_FMT_HAS_AIM = "[FIX:AIM_FMT_HAS]" ;

    //:==================:TRY_TO_INTERPRET_AS_AIM_JS_FILE://
    //:TRY_TO_INTERPRET_AS_AIM_JS_FILE:==================://
    const   F_HOTEL13_AIM_FMT_GET = function
    PRIVATE_F_HOTEL13_AIM_FMT_GET(

        i_str
    ){
        if(!i_str){ i_str = "" ; };

        var o_obj ={ laxcoma:"[HACK]"

        ,   m_has : 0
        ,   m_xyz : "[nil][m_xyz]"

        ,   m_i_x : ( 0 - 10101 )
        ,   m_i_y : ( 0 - 20202 )
        ,   m_i_z : ( 0 - 30303 )
        };;
        Object.seal( o_obj );

        if( i_str.length >= 4 ){
        if( "A" === i_str[ 0 ]
        &&  "I" === i_str[ 1 ]
        &&  "M" === i_str[ 2 ]
        &&  "_" === i_str[ 3 ]
        ){
            var str_xyz =( i_str );

            str_xyz =( str_xyz.replaceAll(
                "AIM_" , "" //:#_TAKEOFF_AIM_P_#://
            ));;
            str_xyz =( str_xyz.replaceAll(
                ".JS"  , "" //:#_TAKEOFF_DOTJS_#://
            ));;

            var obj_xyz =( F_HOTEL13_ICH_TRY(
                str_xyz
            ));;
            if( obj_xyz.m_has ){

                o_obj.m_has =(           200 );
                o_obj.m_xyz =( obj_xyz.m_xyz );

                o_obj.m_i_x =( obj_xyz.m_i_x );
                o_obj.m_i_y =( obj_xyz.m_i_y );
                o_obj.m_i_z =( obj_xyz.m_i_z );
            };;
        };;};;

        return( o_obj );
    };;
    const   F_HOTEL13_AIM_FMT_HAS = function
    PRIVATE_F_HOTEL13_AIM_FMT_HAS(

        i_str
    ){
        var o_yes=( 0 );
        var obj_xyz = F_HOTEL13_AIM_FMT_GET( i_str );
        if( obj_xyz.m_has ){

            o_yes =( 1 );
        };;
        return( o_yes );
    };;
    const   F_HOTEL13_AIM_FMT_GET_STR = function
    PRIVATE_F_HOTEL13_AIM_FMT_GET_STR(

        i_str
    ){
        //:[ATF]:--------------------------------------------://
        //:                                                  ://
        //: Like[ F_HOTEL13_AIM_FMT_GET ]But zero padded     ://
        //: string versions of the XYZ part of input.        ://
        //:                                                  ://
        //: AIM_123_456_789.PNG ==> ( "123" , "456" , "789" )://
        //: AIM_001_002_003.JS  ==> ( "001" , "002" , "003" )://
        //:                                                  ://
        //: ADDED_DATE[ 2022_07_17 ]TIME[ 0540 ]PM           ://
        //:                                                  ://
        //:--------------------------------------------:[ATF]://

        if( !i_str){ i_str="" ; };

        var o_k =( 0 /**Undefined**/ );

        var sob_xyz ={ laxcoma:"[HACK]"
        
        ,   m_has : 0
        ,   m_s_x : "[nil][m_s_x](member_string_x)"
        ,   m_s_y : "[nil][m_s_y](member_string_y)"
        ,   m_s_z : "[nil][m_s_z](member_string_z)"
        };;
        Object.seal( sob_xyz );

        var str_x ;  //: @str_x@ : String Holding x axis ://
        var str_y ;  //: @str_y@ : String Holding y axis ://
        var str_z ;  //: @str_z@ : String Holding z axis ://
        var dex   ;  //: @dex@   : Generic Index Iterator://

        var obj_xyz = F_HOTEL13_AIM_FMT_GET( i_str );
        if( (!(obj_xyz.m_has)) ){
            o_k=(            0-1 );
            sob_xyz.m_has =( 0-1 );
        }else{
            str_x =( "" + obj_xyz.m_i_x + "" );
            str_y =( "" + obj_xyz.m_i_y + "" );
            str_z =( "" + obj_xyz.m_i_z + "" );

            for( dex = 0 ; dex <=(3-1) ; dex++ ){

                //:#_ZERO_PAD_#://
                if( str_x.length < 3 ){str_x="0"+str_x;};
                if( str_y.length < 3 ){str_y="0"+str_y;};
                if( str_z.length < 3 ){str_z="0"+str_z;};
            };;

            sob_xyz.m_has =( 1 );
            sob_xyz.m_s_x =( str_x );
            sob_xyz.m_s_y =( str_y );
            sob_xyz.m_s_z =( str_z );
        };;

        return( sob_xyz );
    };;

    //:==================:TRY_TO_INTERPRET_AS_AIM_JS_FILE://
    //:##################################################://
    //:HOTEL13_SERVER_MODE:##############################://

    if( d_hotel13_h13node ){ //:BEG:ENV_H13NODE::::::::::://

    //:HOTEL13_SERVE_STATIC_PNG:=========================://

        var F_HOTEL13_404_ADD = "[USE:F_HOTEL13_YEHOTEL]";
        var F_HOTEL13_ADD_404 = "[USE:F_HOTEL13_YEHOTEL]";

        const   F_HOTEL13_YEHOTEL = function
        PRIVATE_F_HOTEL13_YEHOTEL(

            i_h13
        ,   i_404
        ){
            if( i_404 >= 1 ){   

                i_h13.m_giv.setHeader( "NSH_YEHOTEL" , "[NOT]");
            }else{
                i_h13.m_giv.setHeader( "NSH_YEHOTEL" , "[YES]");
            };;
        };;

        const   F_HOTEL13_SERVEME_PNG = function
        PRIVATE_F_HOTEL13_SERVEME_PNG( 

            i_h13  //: Hotel13's SOB(StateObjectBundle)  ://    
        ,   i_rfp  //: Relative_File_Path  : : : : : : : ://
        ,   i_dep  //: OPTional_DEPth Var. : : : : : : : ://
        ,   i_404  //: OPTional: Is 404 not found?       ://
        ){
            i_dep = ( i_dep ? i_dep : 1 );
            i_404 = ( i_404 ? i_404 : 0 );

            l_fs.readFile( i_rfp,function( i_err , i_cof ){
            "use strict"

                if(i_err){
                    i_cof = "[PARTY_MONSTER_ERROR]";
                    if( 1 === i_dep ){
                              i_dep++;
                        //:------------------------------://
                        //: Try To Serve Our 404 Image   ://
                        //:------------------------------://
                        F_HOTEL13_SERVEME_PNG(
                            i_h13 
                        ,   "./PNG/404_512.PNG" 
                        ,   i_dep
                        ,   ( 1 ) //: Is 404 Image ://
                        );;
                    }else{
                         F_HOTEL13_YEHOTEL( i_h13  , i_404 );  
                        i_h13.m_giv.writeHead( 200, d_png );   
                        i_h13.m_giv.end( i_cof    ,"utf-8");
                    };;
                }else{
                        F_HOTEL13_YEHOTEL( i_h13  , i_404 );  
                        i_h13.m_giv.writeHead( 200, d_png );
                        i_h13.m_giv.end( i_cof    ,"utf-8");    
                };;
                //:--------------------------------------://
                //: Allow for recursively calling        ://
                //: yourself but only end the response   ://
                //: once.                                ://
                //[ WRONG. This is a race condition !!!!!]//
                //:--------------------------------------://
                //- if( 1 == i_dep ){                    -//
                //- 	i_h13.m_giv.end(i_cof,"utf-8");  -//
                //- };;                                  -//
                //:--------------------------------------://
            });;
        };;
    //:=========================:HOTEL13_SERVE_STATIC_PNG://
    //:SERVE_THIS_CODE_AS_JS_FILE:=======================://
    const   F_HOTEL13_SERVEME = function
    PRIVATE_F_HOTEL13_SERVEME(

        i_h13     //: Hotel13's StateObjectBundle( sob ) ://
                  //: [ i_h13 ]AKA[ i_sob / sob ]        ://
    ,   i_wmc_i_x //:Input: WorldMapCoord . X  : : : : : ://
    ,   i_wmc_i_y //:Input: WorldMapCoord . Y  : : : : : ://
    ,   i_wmc_i_z //:Input: WorldMapCoord . Z  : : : : : ://    
    ){
        //:[ATF]:----------------------------------------://
        //:                                              ://
        //:  If the titlebar says something like :       ://
        //:  -------------------------------------       ://
        //:  [AIM_XYZ]( 001 , 001 , 001 )                ://
        //:  -------------------------------------       ://
        //:  The javascript running on that page was     ://
        //:  probably generated from here.               ://
        //:  -------------------------------------       ://
        //:  EX: AIM_001_001_001.JS                      ://
        //:  -------------------------------------       ://
        //:                                              ://
        //:----------------------------------------:[ATF]://

        l_fs.readFile("./HOTEL13.JS",(i_err,i_cof)=>{     
        
        if(i_err){
            i_cof = "[we messed up]" ;
        }else{
        
            i_h13.m_giv.writeHead( 200 , d_js );
        
            //:STOLENFROM:#BGT#:=====================://
            //:get_app_domain:[059]:-----------------://
            var n =( "\n" );                      
                                                
            var app_nam =( process.env[           
                                                
                "HEROKU_APP_NAME"                 
            ]);;                                                                    
            if( false == ( !!app_nam ) ){         
                                                
                d_hotel13_urlsite_o_k =( "[NOT_O_K]" );   
                d_hotel13_urlsite =( ""                   
                                                
                +"[SEE:#_HEROKU_APP_NAME_#]"                                 
                );;                               
            }else{                                
                d_hotel13_urlsite_o_k =( "[YES_O_K]" );   
                d_hotel13_urlsite     =( ""               
                + "https://"                      
                +  app_nam                        
                + ".herokuapp.com"                
                );;                               
            };;                                   
            //:-----------------:get_app_domain:[059]://
            //:#MYSBSYS#:[058]:----------------------:// 
                                                
            i_cof = ""+i_cof+"";                 
            i_cof = i_cof.replaceAll(            
                                                
            "[BLACK_MAGIC:d_hotel13_urlsite]"        
            ,             d_hotel13_urlsite          
            );;                                  
            i_cof = i_cof.replaceAll( 
        
            "[BLACK_MAGIC:d_hotel13_urlsite_o_k]"    
            ,             d_hotel13_urlsite_o_k      
            );;                             
            //:----------------------:#MYSBSYS#:[058]://
            //:SetWorldMapCoords:--------------------://
            if( (!(i_wmc_i_x >= 0 ))
            &&  (!(i_wmc_i_y >= 0 ))
            &&  (!(i_wmc_i_z >= 0 ))
            ){
                d_hotel13_wmc_o_k = "[NOT_O_K]" ;
            }else{
                d_hotel13_wmc_o_k = "[YES_O_K]" ;
            };;
            if( d_hotel13_wmc_o_k==="[NOT_O_K]" ){

                i_cof = i_cof.replaceAll( 

                "[BLACK_MAGIC:d_hotel13_wmc_o_k]"    
                ,             d_hotel13_wmc_o_k      
                );;   
            }else
            if( d_hotel13_wmc_o_k==="[YES_O_K]" ){

                i_cof = i_cof.replaceAll(                                          
                "[BLACK_MAGIC:d_hotel13_wmc_s_x]"        
                ,                  ""+i_wmc_i_x+""       
                );;                                  
                i_cof = i_cof.replaceAll( 
                "[BLACK_MAGIC:d_hotel13_wmc_s_y]"    
                ,                  ""+i_wmc_i_y+""       
                );;
                i_cof = i_cof.replaceAll( 
                "[BLACK_MAGIC:d_hotel13_wmc_s_z]"    
                ,                  ""+i_wmc_i_z+""       
                );;             
                i_cof = i_cof.replaceAll( 
                "[BLACK_MAGIC:d_hotel13_wmc_o_k]"    
                ,             d_hotel13_wmc_o_k      
                );;   
            }else{
                F_HOTEL13_ERR("[unexpected_20220715]");
            };;
            //:--------------------:SetWorldMapCoords://
            //:=====================:STOLENFROM:#BGT#://
        
            i_h13.m_giv.end( i_cof  , "utf-8" );
        
        };;});; //:END[ readFile ]:::::::::::::::::::://

    };; 
    //:=======================:SERVE_THIS_CODE_AS_JS_FILE://
    //:HOTEL13_IMGUR_UPLOAD:=============================://
    //:HEROKUA_IMGUR_UPLOAD:=============================://

        const  F_HOTEL13_CID = "[MORE_VERBOSE_THAN_THAT]" ;
        const  F_HOTEL13_C_S = "[MORE_VERBOSE_THAN_THAT]" ;

        const  F_HOTEL13_API_3RD_GET_CID_IMGUR = "[@T_V@]";
        const  F_HOTEL13_API_3RD_GET_C_S_IMGUR = "[@T_V@]";
    
        const   F_HOTEL13_API_3RD_CID_IMGUR = function
        PRIVATE_F_HOTEL13_API_3RD_CID_IMGUR
        ( ){
            let p_e =( process.env );
            var str_out =( ""
            ||  p_e.VAR_IMGUR_CID 
            ||  p_e.VAR_IMGUR_KANJICODER_CID
            );;
            return( str_out );
        };;
        const   F_HOTEL13_API_3RD_C_S_IMGUR = function
        PRIVATE_F_HOTEL13_API_3RD_C_S_IMGUR
        ( ){
            let p_e =( process.env );
            var str_out =( ""
            ||  p_e.VAR_IMGUR_C_S
            ||  p_e.VAR_IMGUR_KANJICODER_C_S
            );;
            return( str_out );
        };;

        const   F_HOTEL13_API_3RD_HAS_IMGUR = function
        PRIVATE_F_HOTEL13_API_3RD_HAS_IMGUR(

            /** NO arguments **/
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //: Return TRUE if we have the correct       ://
            //: environment variables set to make        ://
            //: API requests to imgur.                   ://
            //:                                          ://
            //: If you need to set this up, use          ://
            //: POWERSHELL on windows. NOT GITBASH       ://
            //: on windows. Heroku likes to fail for     ://
            //: this on gitbash for windows.             ://
            //:                                          ://
            //: FURTHER_READING[ #_HEROKU_IMGUR_VARS_# ] ://
            //:                                          ://
            //:------------------------------------:[ATF]://

            var api_3rd_has =( 0 );
            
            if( 1
            &&  ( F_HOTEL13_API_3RD_CID_IMGUR() )
            &&  ( F_HOTEL13_API_3RD_C_S_IMGUR() )
            ){
                api_3rd_has =( 1 );
            }else{
                api_3rd_has =( 0 );
            };;

            return( api_3rd_has );
        };;

     ///////////////  const   F_HOTEL13_HED_AUT_IMGUR = function
     ///////////////  PRIVATE_F_HOTEL13_HED_AUT_IMGUR(
     /////////////// 
     ///////////////      /**NOARGS**/
     ///////////////  ){
     ///////////////      
     /////////////// 
     /////////////// 
     ///////////////  };;
    //:=============================:HEROKUA_IMGUR_UPLOAD://
    //:=============================:HOTEL13_IMGUR_UPLOAD://
    //:**************************************************://
    //:                                                  ://
    //:             BEG_OF_API_SECTION                   ://
    //:                                                  ://
    //:**************************************************://
    //:**************************************************://
    //:                                                  ://
    //:     API : Same Functions On Client And Server    ://
    //:         : with differing implementations.        ://
    //:                                                  ://
    //:**************************************************://
    //:IMGUR_FUNCS_SERVER:===============================://
    if( d_hotel13_yesnode >= 1 ){

        var     F_HOTEL13_AIMPATH_MKDIRSYNC = function
        PRIVATE_F_HOTEL13_AIMPATH_MKDIRSYNC(

            i_aimpath
        ){
            //:::::::::::::::::::::::::::::::::::::::://
            //: @aimpath@ : AtomicIvyMMO_filePATH    ://
            //:     @jtf@ : Just_The_____Filepath    ://
            //:::::::::::::::::::::::::::::::::::::::://

            //:::::::::::::::::::::::::::::::::::::::://
            //: Convert[ aimpath ]TO[ jtf ]          ://
            //:::::::::::::::::::::::::::::::::::::::://
            var jtf = F_HOTEL13_AIMPATH_JTF( i_aimpath );

            //:::::::::::::::::::::::::::::::::::::::://
            //: Create Folder If Not Exists          ://
            //:::::::::::::::::::::::::::::::::::::::://
            if( (!(l_fs.existsSync( jtf ))) ){

                l_fs.mkdirSync( 

                    jtf
                ,   { recursive : true }
                );;
            };;
        };;


////    //:@STD@: Save__To_Disk://
////    //:@LFD@: Load_From_Disk://
////
////    var     F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE_STD =
////    function
////    PRIVATE_F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE_STD(
////
////        i_sob_h13
////    ,   i_str_xyz
////    ){
////
////            jtf =( ""
////            +   ( "./PNG/" )
////            +   ( "X_" + aim_x /**url_x**/ ) + "/"
////            +   ( "Y_" + aim_y /**url_y**/ ) + "/"
////            +   ( "Z_" + aim_z /**url_z**/ ) +("")
////            );;
////
////            rel =( ""
////            +   ( jtf  /** Just_The_Folder **/ )
////            +   ( "/"  /** ConcatWithSlash **/ )
////            +   ( f_n  /** FileNameWithExt **/ )
////            );;
////
////            //:::::::::::::::::::::::::::::::::::::::://
////            //: Create Folder If Not Exists          ://
////            //:::::::::::::::::::::::::::::::::::::::://
////            if( (!(l_fs.existsSync( jtf ))) ){
////
////                l_fs.mkdirSync( 
////
////                    jtf
////                ,   { recursive : true }
////                );;
////            };;
////
////            f_s = l_fs.createWriteStream( rel );
////            f_s.on( "error" , (i_err)=>{
////
////                console.log(    "[OHFUKNO_2022]" );
////                uro.m_log.push( "[OHFUKNO_2022]" );
////                h13.m_giv.end( JSON.stringify( uro ));
////            });;
////
////            h13.m_ask.pipe( f_s ); //:#_W_D_A_I_C_#://
////            h13.m_ask.on( "end" , ()=>{
////
////                f_s.close( ()=>{
////
////                    uro.m_log.push( "[SUCCESS]" );
////                    uro.m_o_k =( 200 );
////                    h13.m_giv.end( JSON.stringify( uro ));
////                });;
////            });;
////
////
////    };;

        var     F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE = function
        PRIVATE_F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE(

        //+----------------------------------------------+//
        //- i_imgname  <---- WRONG , keep_this_note_here -//
        //- i_pngfile  <---- WRONG , keep_this_note_here -//
        //+----------------------------------------------+//

            i_sob_h13  //:StateObjectBundle: KIND: h13   ://
        ,   i_str_xxx  //:           String: KIND: x-axis://
        ,   i_str_yyy  //:           String: KIND: y-axis://
        ,   i_str_zzz  //:           String: KIND: z-axis://
        ){
            //:[ATF]:------------------------------------://
            //:                                          ://
            //:  Take in a request from HOTEL13.JS       ://
            //:  client side application , extract       ://
            //:  the .PNG file, and pass it on           ://
            //:  to IMGUR.                               ://
            //:                                          ://
            //:  Also, store a copy on our own server    ://
            //:  as well because why not?                ://
            //:                                          ://
            //:  We might want to DISABLE that           ://
            //:  aspect in the future when we need       ://
            //:  to scale, but for now that is fine.     ://
            //:                                          ://
            //:------------------------------------:[ATF]://
            //:ECI:======================================://
            if( d_bug ){
                if( 0
                ||  "undefined" != typeof i_imgname 
                ||  "undefined" != typeof i_pngfile 
                ){
                    ERR("[WRONG_INPUTS_TO_FUNC]");
                };;

                if( 0
                ||  "undefined" != typeof i_str_xyz 
                ){
                    ERR("[OOPS_NOT_HASH_INPUT]");
                };;
            };;
            //:======================================:ECI://
            //:VARS:=====================================://

                var o_k =( 1 ); //:EverythingOkay?://

                //:@loganok@ : "LOG Array And OK" ://
                var loganok={ laxcoma:"[HACK]"
                ,     m_log : [ ] //:ArrayOfLoggingInfo://
                ,     m_o_k : (0) //:Everything_Ok?
                };;
                function    LOGANOK_ADD(        msg ){
                            loganok.m_log.push( msg );
                                   console.log( msg );
                };;
                function    LOGANOK_END( ){ 

                    i_sob_h13.m_giv.writeHead( 
    
                        200 , d_jso
                    );;
                    i_sob_h13.m_giv.end(
                        JSON.stringify( 
                            loganok 
                        )////////////////
                    );;;;;;;;;;;;;;;;;;;;
                };;

                var _______
                ,   str_xyz  //:@str_xyz@ :COOHASH   ://
                ,   ask_met  //:@ask_met@ :ASK Method://
                ,       c_l  //:@c_l@ : ContentLength://       
                ,   wigroom  //:@wigroom@ :WiggleRoom://
                ,       f_s  //:@f_s@:FileStreamInst ://
                ,   aimpath  //:EX: ./PNG/../AIM..PNG://
                ,   hascred  //:@hascred@ :Imgur_Cred://
                ,   png_bin  //:@png_bin@ :PNGBINARY ://
                ,   png_nam  //:@png_nam@ :PNG_NAME  ://
                ,   png_tit  //:@png_tit@ :PNG_TITLE ://
                ,   bearask  //:@bearask@ :----------://
                ;;;;;;;;;;;

                var  ___2___
                ,    arr_k_v     //:@arr_k_v@     :--://
                ,        kv0     //:    @kv0@     :--://
                ,        kv1     //:    @kv1@     :--://
                ,        kvi     //:    @kvi@     :--://
                ,        k_v     //:    @k_v@     :--://
                ,    norform_jso //:@norform_jso@ :--://
                ,    norform_jso_key //:@jso_key@    ://
                ,    norform_jso_val //:@jso_val@    ://
                ,    norform_bou //:@norform_bou@ :--://
                ,    norform_c_t //:@norform_c_t@ :--://
                ,    norform_pay_buf_001        //:--://
                ,    norform_pay_buf_002        //:--://
                ,    norform_pay_buf_003        //:--://
                ,    norform_pay //:@norform_pay@ :--://        
                ,    nor_opt     //:@nor_opt@     :--://
                ,    nor_ask     //:@nor_ask@     :--://
                ;;;;;;;;;;

                var ___
                ,   _s_  //: SPACE , literally       ://
                ,   f_d  //: FormData                ://
                ,   typ  //: Request Type            ://
                ,   url  //: Request  URL            ://
                ,   cid  //: Client_ID
                ,   a_n  //: Authheader : KEY/NAME   ://
                ,   a_v  //: Authheader :    VALUE   ://
                /// xhr
                ;;;;;;;

                var _____________
                ,   verni32        //:@verni32@       ://
                ,   got_jso        //:Got_JSON_OBJ   ://
                ,   png_url_imgur
                ;;;;;;;;;;;;;;;;;

                png_url_imgur =( "[nil][png_url_imgur]" );

            //:=====================================:VARS://
            //:NOT_A_PROMISE:============================://
            //:                                          ://
            //:     13-step program to storing the       ://
            //:     image you want persistantly.         ://
            //:     #13_STEP_PROGRAM#                    ://
            //:                                          ://
            //:- - - - - - - - - - -- - - - - - - - - - -://
            var ptrstep =( 0-1 );
            var arrstep =[
                STEP_001  //: #MAKE_COORD_HASH#          ://
            ,   STEP_002  //: #ABORT_IF_NOT_HTTPPOST#    ://
            ,   STEP_003  //: #ABORT_IF_FILE_TOO_BIG#    ://
            ,   STEP_004  //: #SAVE_TO_HEROKU_HARDDISK#  ://
            ,   STEP_005  //: #ABORT_IF_NO_IMGUR_CRED#   ://
            ,   STEP_006  //: #LOAD_FROM_HEROKU_HARDDISK#://
            ,   STEP_007  //: #GET_JUST_FILENAME#        ://
            ,   STEP_008  //: #GET_IMGUR_BEARER_TOKEN#   ://
            ,   STEP_009  //: #BUILD_FORM_DATA#          ://
            ,   STEP_010  //: #SEND_PNG_TO_IMGUR#        ://
            ,   STEP_011  //: #GET_MOST_RECENT_LEVELPACK#://
            ,   STEP_012  //: #ADD_IMGUR_URL_TO_DATABASE#://
            ,   STEP_013  //: #STOP_TALKING_TO_ME#       ://
            ];;
            function LOGANOK_NEX( ){     //:AKA[ NEXT() ]://
                ptrstep++ ;
                if( ptrstep <=( arrstep.length -1 )){
                    arrstep[ ptrstep ]( );
                };;
            };;
            function LOGANOK_ERR(){     //:AKA[ ABORT() ]://    

                          o_k=( 0 );
                loganok.m_o_k=( 0 );
                LOGANOK_ADD( "[ABORTED_2022_07_19]"  );
                LOGANOK_END( );
            };;
            //:============================:NOT_A_PROMISE://
            //:BEGIN_OUR_STEPS:==========================://

                LOGANOK_NEX(); //:[ENTER:STEP_001]://

            //:==========================:BEGIN_OUR_STEPS://
                
                //:#MAKE_COORD_HASH#:====================://
                function STEP_001( i_ignored ){

                    str_xyz = F_HOTEL13_STR_COOHASH(
                        i_str_xxx
                    ,   i_str_yyy
                    ,   i_str_zzz
                    );;
                    LOGANOK_NEX( "[STEP_002]" );
                };;
                //:======================:MAKE_COORD_HASH://
                //:#ABORT_IF_NOT_HTTPPOST#:==============://
                function STEP_002( i_ignored ){
    
                    ASS( 1 <= o_k , "[@SBH@:STEP_002]" );

                    ask_met =( 
                    String.prototype.toUpperCase.call(

                        i_sob_h13.m_ask.method 
                    ));;

                    if( "POST" != ask_met ){
        
                        o_k=( 0 );
                        LOGANOK_ADD( "[NOT_HTTP_POST]" );
                        LOGANOK_ERR();
                    }else{

                        LOGANOK_NEX( "[STEP_003]" );
                    };;
                };;
                //:==============:#ABORT_IF_NOT_HTTPPOST#://
                //:#ABORT_IF_FILE_TOO_BIG#:==============://
                function STEP_003( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_003]" );

                    //:1024KB Of Wiggle Room://
                    wigroom =( 1024 * 1000 );

                    c_l = parseInt( 
                    i_sob_h13.m_ask.headers[

                        "content-length"
                    ]);;

                    if( Number.isNaN( c_l ) || c_l <= 0 ){

                        o_k=( 0 );
                        LOGANOK_ADD( "[NAN_CONTENT_LEN]" );
                        LOGANOK_ERR();
                    }else
                    if( !( c_l <=((512*512*4)+wigroom))){

                        o_k=( 0 );
                        LOGANOK_ADD("[NOT_512_X_512_PNG]");
                        LOGANOK_ERR();
                    }else{
                        LOGANOK_NEX( "[STEP_004]" );
                    };;
                };;
                //:==============:#ABORT_IF_FILE_TOO_BIG#://
                //:#SAVE_TO_HEROKU_HARDDISK#:============://
                function STEP_004( i_ignored ){
        
                    ASS( 1 <= o_k , "[@SBH@:STEP_004]" );

                    aimpath=(
                    F_HOTEL13_COOHASH_AIMPATH(
                        str_xyz 
                    ));;

                    if( "./PNG/ERR_001.PNG" === aimpath ){
        
                        LOGANOK_ADD( "[ERROR_PATH]" );
                        LOGANOK_ADD( "[str_xyz]:"
                                    + "("
                                    +  str_xyz
                                    + ")"
                        );;
                        LOGANOK_ERR();o_k=( 0 );
                    }else{
                        //:::::::::::::::::::::::::::::::://
                        //: Create Path Before Attempt   ://
                        //: To Save To Hard Disk         ://
                        //:::::::::::::::::::::::::::::::://
                        F_HOTEL13_AIMPATH_MKDIRSYNC(
                                  aimpath 
                        );;

                        f_s = l_fs.createWriteStream( aimpath );
                        f_s.on( "error" , (i_err)=>{
                        
                            LOGANOK_ADD(  "[OHFUKNO_2022]" );
                            LOGANOK_ERR();o_k=( 0 );
                        });;
                        i_sob_h13.m_ask.pipe( f_s );  

                        i_sob_h13.m_ask.on( "end" , ( )=>{
                        
                            f_s.close( ()=>{
                        
                                loganok.m_o_k=( 100 );
                                LOGANOK_ADD( "[SUCCESS]"  );
                                LOGANOK_ADD( "[aimpath]:"
                                         +"("+ aimpath + ")"
                                );;
                                LOGANOK_NEX( "[STEP_005]" );
                            });;
                        });;
                    };;
                };;
                //:============:#SAVE_TO_HEROKU_HARDDISK#://
                //:#ABORT_IF_NO_IMGUR_CRED#:=============://
                function STEP_005( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_005]" );

                    hascred = F_HOTEL13_API_3RD_HAS_IMGUR();    

                    if( !hascred ){

                        o_k=( 0 );
                        LOGANOK_ADD( "[bad:imgur_cred]" );
                        LOGANOK_ERR();
                    }else{

                        LOGANOK_ADD( "[Has_Imgur_Cred]" );
                        LOGANOK_NEX( "[STEP_006]"       );
                    };;
                };;
                //:=============:#ABORT_IF_NO_IMGUR_CRED#://
                //:#LOAD_FROM_HEROKU_HARDDISK#:==========://
                function STEP_006( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_006]" ); //:<<<<<<<<<<<<<< NOTICE_ME_SENPAI
                
                    l_fs.readFile( aimpath,(i_err,i_cof)=>{    

                        if( i_err ){
                            o_k=( 0 );
                            LOGANOK_ADD( "[READFAIL]" );
                            LOGANOK_ADD( ""+i_err+""  );
                            LOGANOK_ERR();   //:ABORT://
                        }else{

                            png_bin =( i_cof );
                            LOGANOK_ADD( "[READ:O_K]" );
                            LOGANOK_NEX( "[STEP_007]" );
                        };;
                    });;
                };;
                //:==========:#LOAD_FROM_HEROKU_HARDDISK#://
                //:#GET_JUST_FILENAME#:==================://
                function STEP_007( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_007]" );

                    png_nam =( 
                    F_HOTEL13_AIMPATH_NAMAEXT( aimpath ));;
                    png_tit =(
                    F_HOTEL13_AIMPATH_NAMONLY( aimpath ));;

                    LOGANOK_ADD("[png_nam]:("+png_nam+")");
                    LOGANOK_ADD("[png_tit]:("+png_tit+")");

                    LOGANOK_NEX(); //:[STEP_008]://
                };;
                //:==================:#GET_JUST_FILENAME#://
                //:#GET_IMGUR_BEARER_TOKEN#:=============://
                function STEP_008( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_008]" );

                    //:::::::::::::::::::::::::::::::::::://
                    //:                                  ://
                    //:  You don't want to do this.      ://
                    //:  But we __DO__ need to setup     ://
                    //:  a database and put imgur        ://
                    //:  hashes into it. We could use    ://
                    //:  file-system, but that gets      ://
                    //:  erased every time we            ://
                    //:  re-deploy.                      ://
                    //:::::::::::::::::::::::::::::::::::://

                    LOGANOK_NEX();
                };;
                //:=============:#GET_IMGUR_BEARER_TOKEN#://
                //:#BUILD_FORM_DATA#:====================://
                function STEP_009( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_009]" );

                    if( 042 != 0x22 ){ ERR("[OCT42]");};
                    if( 042 !=   34 ){ ERR("[OCT42]");};    
                    let double_quotes =( 
                        String.fromCharCode( 042 ));;

                    let equals_sign =( "=" );
                    let         spc =( " " );

                    //:::::::::::::::::::::::::::::::::::://
                    //:                                  ://
                    //: @norform@ :                      ://
                    //:     Nodejs_Outgoing_Request      ://
                    //:     FORM-data                    ://
                    //:                                  ://
                    //:::::::::::::::::::::::::::::::::::://
                    norform_jso ={
                        image       : png_bin
                ////,   album       :"TffSOLf"   //:"AIM"://
                    ,    type       :   "file"
                    ,    name       : png_nam  //[namaext]//
                    ,   title       : png_tit  //[namonly]//
                    ,   description :    "DSC"
                    };;
                    arr_k_v=( Object.entries( norform_jso ) );  
                        kv0=( 0 );
                        kv1=( arr_k_v.length - 1 );

                    //:user_defined_boundary:------------://

                    norform_bou =(
                        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                    //: "stackoverflow_com_questions_3508338" 
                    );;
                    //:------------:user_defined_boundary://
                    //:all_one_line:---------------------://
                    norform_c_t =( 
                        "multipart/form-data"     +";"+spc
                    +""
                        //:utf8:-------------------------://
                        +   "charset=" 
                        +       double_quotes
                        +""
                        +       "utf-8"
                        +""
                        +       double_quotes+";"+spc
                        //:-------------------------:utf8://    
                    +""
                    +   "boundary=" + norform_bou
                    );;
                    //:---------------------:all_one_line://

                    norform_str = "" ;
                    
                    for( kvi = kv0 ; kvi <=(kv1); kvi++ ){

                        k_v = arr_k_v[ kvi ];
                        norform_jso_key = k_v[  0  ];
                        norform_jso_val = k_v[  1  ];

                        ASS( 
                           (norform_jso[ norform_jso_key ] )    
                            ===
                           (           ( norform_jso_val ) )
                        ,
                            "[JUST_BEING_PARANOID_2022]"
                        );;

                        //:------------------------------://
                        //: Image Is Binary Data, Must   ://
                        //: be handled later when we     ://
                        //: start working with byte data.://
                        //:------------------------------://
                        if( "image" == norform_jso_key ){

                            continue;
                        };;

                        norform_str +=( ""
                        +   "--" + norform_bou + "\r\n"
                        +""
                        +"" 
                        +   "Content-Disposition:" 
                        +   spc
                        +   "form-data;"
                        +   spc
                        +   "name"
                        +       equals_sign
                        +       double_quotes
                        +"" ////////////////////////////////////
                        +""
                        +           norform_jso_key
                        +""
                        +"" ////////////////////////////////////
                        +       double_quotes
                        +       ";"+spc+"\r\n\r\n"
                        +"" ////////////////////////////////////
                        +""
                        +           norform_jso_val
                        +""
                        +"" ////////////////////////////////////
                        +       "\r\n"
                        );;
                    };;

                    norform_str +=( ""
                    //:--------------------------------------://
                    +"" /////////////// BOUNDARY ///////////////
                    +""
                    +   "--" + norform_bou + "\r\n"
                    +""
                    //:--------------------------------------://
                    +   "Content-Disposition:" + spc
                    +""
                    +       "form-data"  + ";" + spc
                    +"" 
                    //:--------------------------------------://
                    +   "name"
                    +       equals_sign
                    +       double_quotes
                    +""
                    +       "image"    //:OtherAPIs[ "file" ]://
                    +""
                    +       double_quotes + ";" + spc
                    //:--------------------------------------://
                    +   "filename"
                    +       equals_sign
                    +       double_quotes
                    +""
                    +       png_nam                //[namaext]//
                    +""
                    +       double_quotes
                    +       "\r\n"
                    //:--------------------------------------://
                    +   "Content-Type" + ":" + spc
                    +""
                    +       "application/octet-stream"
                    +       "\r\n" //:TWO_BEFORE_CONTENT://
                    +       "\r\n" //:TWO_BEFORE_CONTENT://
                    //:--------------------------------------://
                    );;
                    //:LOG_CONTENT_TYPE:-----------------://

                    console.log( "[BEG:CONTENT_TYPE]");
                    console.log( "\n\n" );

                    console.log( norform_c_t );

                    console.log( "\n"   );
                    console.log( "[END:CONTENT_TYPE]");

                    //:LOG_CONTENT_TYPE:-----------------://
                    //:LOG_PAYLOAD_NO_DATA:--------------://

                    console.log( "[BEG:PAYLOAD_NO_DATA]" );
                    console.log( "\n\n" );
                    
                    console.log( norform_str );
    
                    console.log( "\n"   );
                    console.log( "[END:PAYLOAD_NO_DATA]" );

                    //:--------------:LOG_PAYLOAD_NO_DATA://
                    //:MAKE_UTF8_PAYLOAD:----------------://
                    let fin_bou =(     //: FinalBoundary ://
                        "\r\n--" + norform_bou + "--\r\n"
                    );;
                    //:- - - - - - - - -- - - - - - - - -://
                    norform_pay_buf_001 =(
                
                        Buffer.from( norform_str,"utf8" )    
                    );;
                    //:- - - - - - - - -- - - - - - - - -://
                    norform_pay_buf_002 =(
                
                        Buffer.from( png_bin , "binary" )
                    );;
                    //:- - - - - - - - -- - - - - - - - -://
                    norform_pay_buf_003 =(
                
                        Buffer.from( fin_bou , "utf8" )
                    );;
                    //:- - - - - - - - -- - - - - - - - -://

                    
            ////    norform_pay = Buffer.concat([
            ////
            ////        /** Fails : ERROR 417 **/
            ////    
            ////        norform_pay_buf_001
            ////    ,   norform_pay_buf_002
            ////    ,   norform_pay_buf_003
            ////    ]);;

                    //: norform_pay === Uint8Array
                    //: Is worse, corrupts everything.

                   
                    norform_pay =Buffer.concat([
                        Buffer.from( norform_str , "utf8"   ) 
                    ,   Buffer.from(     png_bin , "binary" ) 
                    ,   Buffer.from(     fin_bou , "utf8"   ) 
                    ]);;

 
            

                    //:----------------:MAKE_UTF8_PAYLOAD://
                    //:LOG_BINARY_PAYLOAD:---------------://

                    console.log( "[BEG:PAYLOAD_BINARY]" );
                    console.log( "\n\n" );
                    
                    console.log( norform_pay );
    
                    console.log( "\n"   );
                    console.log( "[END:PAYLOAD_BINARY]" );

                    //:---------------:LOG_BINARY_PAYLOAD://

                    LOGANOK_ADD( "[PAYLOAD_BUILT]" );
                    LOGANOK_NEX();   //:[STEP_010]://
                };;
                //:======================:BUILD_FORM_DATA://
                //:#SEND_PNG_TO_IMGUR#:==================://
                function STEP_010( i_ignored ){
    
                    ASS( 1 <= o_k , "[@SBH@:STEP_010]" );

                    LOGANOK_ADD( "[THE_HARD_PART]" );
    
                    _s_ =( " " ); //:Exactly One Space   ://  

                    //:formdata:-------------------------://
                    //+ WRONG: formdata is __NOT__       +//
                    //+      : native to node.js         +//
                    //-                                  -//
                    //- f_d = new FormData( );           -//
                    //- f_d.append( "image",   png_bin );-//
                    //- f_d.append( "album","ALBUM_AIM");-//
                    //-                                  -//
                    //:-------------------------:formdata://

                    typ =( "POST" );
                    url =( "https://api.imgur.com/3/upload");
                    cid =( F_HOTEL13_API_3RD_CID_IMGUR() );

                    a_n =( "Authorization" );
                    a_v =( "Client-ID"+ _s_ + cid );

                    nor_opt = {
                        encoding : "utf-8" //:GUESS:OVERFLOW_29005084
                    ,   host     : "api.imgur.com"  //: "hostname" -OR- "host" ? ://
                    ,   path     : "/3/upload"
                    ,   method   : "POST" //:typ://
                    ,   headers  :{
                            
                            [a_n]:a_v
                ////////,   "name" : "IDONTKNOWWHATIAMDOING.png"
                        ,   "Content-Type"   : norform_c_t
                /////// ,   "Content-Length" : Buffer.byteLength( norform_pay )
                        }
                    ////////,   json   : false
                    //////body : norform_pay
                    };;


                    nor_ask =( 
                    l_https.request(nor_opt,(i_giv)=>{

                        i_giv.setEncoding( "utf8" );

                        i_giv.on( "data" , (i_dat)=>{

                            console.log(
                                "[IMGURDATA]:"+i_dat
                            );;

                            got_jso = JSON.parse( i_dat );

                            png_url_imgur=(
                                got_jso.data.link );;

                            if(!png_url_imgur){
                                MSG("[IMGUR_DOWN_MAYBE]");
                            };;
                        });;
                        i_giv.on( "error",(i_err)=>{

                            LOGANOK_ADD( "[i_err]"+i_err );
                            //// LOGANOK_ERR();
                        });;
                        i_giv.on( "end"  , ()=>{

                            LOGANOK_ADD( "[@A_I_A@]" );
                            LOGANOK_ADD( "[#_NJS_END_#]" );
                        });;
                        i_giv.on( "close", ()=>{

                            LOGANOK_ADD( "[#_NJS_CLOSE_#]" );
                            LOGANOK_NEX(); //:[STEP_011]://
                        });;
                    }));;
                    nor_ask.on( "error" , (i_err)=>{
    
                        LOGANOK_ADD( "[i_err]"+i_err );
                        LOGANOK_ERR();
                    });;
                    nor_ask.on( "close" , ( )=>{

                    /////    LOGANOK_ADD( "[@A_I_A@]" );
                    /////    LOGANOK_NEX(); //:[STEP_011]://
                    });;

                //- nor_ask.write( png_bin     ); WRONG  -//    
                    nor_ask.write( norform_pay ); //:<--We need to write... But what?
                    nor_ask.end();
  
                };;
                //:==================:#SEND_PNG_TO_IMGUR#://
                //:#GET_MOST_RECENT_LEVELPACK#:----------://    
                function STEP_011( i_ignored ){

                        verni32 =( 0 /**ZERO**/       );
                    let lastver =( 0 - 1 /**NEGONE**/ );
                    let coohash =( str_xyz );
                    let sql_cmd =( d_sel_tab_hotel13 );
                        sql_cmd = sql_cmd.replaceAll(

                            "[i_coohash]" , coohash
                        );;
                    d_hotel13_dcp                               
                    .query( sql_cmd )                 
                    .then( function( i_res ){ 
                           
                        if( i_res.rows.length >= 1 ){

                            lastver =( 
                                i_res.rows[ 0 ] 
                                .col_verni32
                            );;
                            verni32=( lastver + 1 );

                            MSG("[WE_GOT_ROWS!!!!!]");
                            LOG("[lastver]",lastver );
                            LOG("[verni32]",verni32 );
                            LOG("[coohash]",coohash );
                            LOG("[sql_cmd]",sql_cmd );
                        }else
                        if( i_res.rows.length ===0 ){

                            MSG("[NO_FUCKING_ROWS?]");
                            LOG("[coohash]",coohash );
                            LOG("[sql_cmd]",sql_cmd );
                        }else{
                            ERR("[WTF_WHERE_ROWS?]");
                        };;

                        LOGANOK_NEX(); //:[STEP_012]://
                    })                                          
                    .catch( function( i_err ){                  
                                              
                        MSG("[FAIL:STEP_ELEVEN]");   
                        LOG("[i_err]",i_err );
                        LOGANOK_ERR(); o_k=( 0 );       
                    }) 
                    ;;;;;;;;;;;;;;;;;;;;;;;;;;;
                };;
                //:----------:#GET_MOST_RECENT_LEVELPACK#://
                //:#ADD_IMGUR_URL_TO_DATABASE#:----------://
                function STEP_012( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_012]" );
                    
                    LOGANOK_ADD( "[BEG:DATASTORE]");

                    let coohash =( str_xyz           );
                    /// verni32 :( ALREADY SET       );
                    let png_url =( png_url_imgur     );
                    let sql_cmd =( d_iis_tab_hotel13 );

                    sql_cmd = sql_cmd.replaceAll(

                        "[i_coohash]" ,""+coohash+""
                    );;
                    sql_cmd = sql_cmd.replaceAll(

                        "[i_verni32]" ,""+verni32+""
                    );;
                    sql_cmd = sql_cmd.replaceAll(

                        "[i_png_url]" ,""+png_url+""
                    );;

                    LOG( "[sql_cmd]" , sql_cmd );

                    d_hotel13_dcp                               
                    .query( sql_cmd )                 
                    .then( function( i_res ){ 
                                                   
                        MSG("[DONE:STEP_012]");
                        LOGANOK_ADD( "[END:DATASTORE]");
                        LOGANOK_NEX(); //:[STEP_013]://
                    })                                          
                    .catch( function( i_err ){                  
                                              
                        MSG("[BEG:FAIL_STEP_012]"); 
  
                        LOG("[i_err]" , i_err );

                        MSG("[END:FAIL_STEP_012]");   
                        LOGANOK_END();           
                    })                                          
                    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;   
                };;
                //:----------:#ADD_IMGUR_URL_TO_DATABASE#://
                //:#STOP_TALKING_TO_ME#:=================://
                function STEP_013( i_ignored ){

                    ASS( 1 <= o_k , "[@SBH@:STEP_013]" );

                    console.log( "[IAG:STOPTALKINGTOME]");    
                    LOGANOK_ADD( "[IAG:STOPTALKINGTOME]");
                    LOGANOK_END();
                };;
                //:=================:#STOP_TALKING_TO_ME#://

            //:DO_NOTHING_HERE:==========================://

                //:--------------------------------------://
                //: Bro, your shit is like , all async,  ://
                //: we can't do the complimentary        ://
                //: action of[ BEGIN_OUR_STEPS ]here.    ://
                //:--------------------------------------://    

            //:==========================:DO_NOTHING_HERE://
        };; //:END[ F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE ]://    

        var     F_HOTEL13_API_3RD_DOW_IMGUR_YESNODE = function
        PRIVATE_F_HOTEL13_API_3RD_DOW_IMGUR_YESNODE(

            i_imgname
        ){

            var o_promise = new Promise( function        
            EXECUTO_F_HOTEL13_API_3RD_DOW_IMGUR_YESNODE( 

                o_k_yes
            ,   wontsay 
            ){
                var o_k =( 1 );

                if( F_HOTEL13_API_3RD_HAS_IMGUR() ){

                    o_k =( 1 );
                }else{
                    o_k =( 0 );
                };;

                

                o_k_yes( "[NOT_FINISHED:DOW]" ); //:<<<<<<<<<<<<< NOTICE_ME_SENPAI
            });;
            return( o_promise );
        };;

    };;
    //:===============================:IMGUR_FUNCS_SERVER://
    //:IMGUR_FUNCS_CLIENT:===============================://
    if( d_hotel13_notnode >= 1 ){

        var     F_HOTEL13_API_3RD_UPP_IMGUR_NOTNODE = function
        PRIVATE_F_HOTEL13_API_3RD_UPP_IMGUR_NOTNODE(

            i_imgname //:ImageNameWithExtension://
        ,   i_pngfile //:Our_512_X_512_PNG_FILE://
        ){

            YELL( "[TODO:API_3RD_UPP]" ); //:<<<<<<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI
        };;

        var     F_HOTEL13_API_3RD_DOW_IMGUR_NOTNODE = function
        PRIVATE_F_HOTEL13_API_3RD_DOW_IMGUR_NOTNODE(

            i_imgname
        ){
            YELL( "[TODO:API_3RD_UPP]" ); //:<<<<<<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI
        };;
    };;
    //:===============================:IMGUR_FUNCS_CLIENT://
    //:API_WIREUP:2022_07_18:============================://
    if( d_hotel13_yesnode >= 1 ){

        var   F_HOTEL13_API_3RD_UPP_IMGUR=(
              F_HOTEL13_API_3RD_UPP_IMGUR_YESNODE );; 

        var   F_HOTEL13_API_3RD_DOW_IMGUR=(
              F_HOTEL13_API_3RD_DOW_IMGUR_YESNODE );;
    }else
    if( d_hotel13_notnode >= 1 ){

        var   F_HOTEL13_API_3RD_UPP_IMGUR=(
              F_HOTEL13_API_3RD_UPP_IMGUR_NOTNODE );; 

        var   F_HOTEL13_API_3RD_DOW_IMGUR=(
              F_HOTEL13_API_3RD_DOW_IMGUR_NOTNODE );;

    }else{
        ERR("[API_WIREUP_FAIL]");
    };;
    //:============================:API_WIREUP:2022_07_18://
    //:**************************************************://
    //:                                                  ://
    //:             END_OF_API_SECTION                   ://
    //:                                                  ://
    //:**************************************************://
    //:HOTEL13_DATABASE.DATA:============================://

        //:::::::::::::::::::://
        //: Moved Further Up ://
        //:::::::::::::::::::://

    //:============================:HOTEL13_DATABASE.DATA://
    //:HOTEL13_DATABASE.FUNC:============================://
    
    const   EXECUTO_F_HOTEL13_DATBASE_INI = function
    PRIVATE_EXECUTO_F_HOTEL13_DATBASE_INI(

            o_k_yes //:ACCEPTOR://
        ,   wontsay //:REJECTOR://
    ){
        //:NICE_OUTLINE:-----------------------------://
        var ptrstep =( 0-1 );
        var arrstep =[
                                              
            CREATE_CONNECTION_POOL           //: 001 ://
        ,   TEST_CONNECTION_TO_DATABASE      //: 002 ://
        ,   CREATE_TABLE_IF_NOT_EXISTS       //: 003 ://
        ,   RESOLVE_YOUR_PROMISE_AT_THE_END  //: 004 ://
        ];;
        function DATBASE_INI_NEX( ){     
            ptrstep++ ;
            if( ptrstep <=( arrstep.length -1 )){
                arrstep[ ptrstep ]( );
            };;
        };;
        //:-----------------------------:NICE_OUTLINE://
        //:FOUR_STEP_PROGRAM:------------------------://

        DATBASE_INI_NEX();

        function 
        CREATE_CONNECTION_POOL(){
            
            if( (!l_pg) ){

                ERR("[ADD_PG_TO_PACKAGE_DOT_JSON]");
            };;

            d_hotel13_dcp =( 
                new( l_pg.Pool )( d_hotel13_cin ));    
                                                    
            d_hotel13_dcp
            .on( "error" , ( i_err , i_cli ) =>{ 
                                                    
                ERR( "[oh_nooo_bro_2022_07_21]" );        
            });;      

            DATBASE_INI_NEX();
        };;
        function 
        TEST_CONNECTION_TO_DATABASE(){

            d_hotel13_dcp
            .connect( ( i_err , i_cli , i_don )=>{   
                                                          
                if( i_err ){                              
                    LOG( "[d_hotel13_dbu...]" 
                         , d_hotel13_dbu      );;        
                    LOG( "[error_is]" , i_err );   

                    MSG("[******************************]"); 
                    MSG("[ FIX::::::::::::::::::::::::::]");
                    MSG("[ heroku addons:create         ]");
                    MSG("[ heroku-postgresql:hobby-dev  ]");
                    MSG("[ --version=14                 ]");
                    MSG("[ --app  'YOURAPPNAME'         ]");
                    MSG("[ --name 'YOURAPPNAME-database']");
                    MSG("[******************************]"); 

                    ERR( "[sorry!!!]"         );          
                };;                                       
                /** Assert Client ( @i_cli@ ) Exists **/ 
                if( ( i_cli ) ){ MSG( "[cli_exists]" ); }; 
                if(!( i_cli ) ){ ERR( "[cli_notcli]" ); }; 
                                                          
                i_don();//: @don@ : PGSQL Done Function:// 
                DATBASE_INI_NEX();
            });;  
        };;
        function 
        CREATE_TABLE_IF_NOT_EXISTS(){

            d_hotel13_dcp                               
            .query( d_cts_tab_hotel13 )                 
            .then( function( i_res ){                   
                                                        
                MSG("[DONE:CREATE_TABLE_IF_NOT_EXISTS]");
                DATBASE_INI_NEX();
            })                                          
            .catch( function( i_err ){                  
                                                        
                MSG("[FAIL:CREATE_TABLE_IF_NOT_EXISTS]");      
                ERR("[FAIL:CREATE_TABLE_IF_NOT_EXISTS]");            
            })                                          
            ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;                                          
        };; 
        function
        RESOLVE_YOUR_PROMISE_AT_THE_END(){

            o_k_yes( "[DATABASE_SETUP_DONE]" );
        };;
        //:------------------------:FOUR_STEP_PROGRAM://

    };;
    const   F_HOTEL13_DATBASE_INI = function
    PRIVATE_F_HOTEL13_DATBASE_INI(
       
        /** No arguments **/
    ){
        var o_promise = new Promise(  

            EXECUTO_F_HOTEL13_DATBASE_INI

        );;return( o_promise );
    };;
    //:============================:HOTEL13_DATABASE.FUNC://
    //:HOTEL13_SERVER_INIT_ON_STARTUP:===================://
    if( d_hotel13_yesnode ){

        F_HOTEL13_DATBASE_INI()
        .then(( i_saywhat )=>{

            console.log("[DONE:F_HOTEL13_DATBASE_INI]");
        });;
    };;
    //:===================:HOTEL13_SERVER_INIT_ON_STARTUP://
    //:HOTEL13_SERVER:===================================://
    require("http").createServer(( 

        i_ask  //:AKA[ req / request  ]://
    ,   i_giv  //:AKA[ res / response ]://
    )=>{

        //:----------------------------------------------://
        //:  @h13@ : The state object bundle(sob)        ://
        //:        : for hotel13's server. __NOT__       ://
        //:        : named "sob" to avoid confusion      ://
        //:        : with main[ AIM / BOOM ]server.      ://
        //:----------------------------------------------://

        var o_k =( 1 );

        var   h13 ={  laxcoma : "[laxcoma_hack]"
        ,   m_ask : i_ask                                     
        ,   m_giv : i_giv                                     
        ,   m_url : l_url.parse( i_ask.url , 1 ).pathname     
        ,   m_pam : l_qs .parse( i_ask.url , 1 ).query        
        ,   m_seg : [ "URLPATH_SEGMENTS_NOT_LOADED]" ]        
        };;
        h13.m_url =( h13.m_url.toUpperCase()             );      
        h13.m_seg =( h13.m_url.split( "/" ).filter(n=>n) );

        if( "F_HOTEL13_CAS_COOHASH_SCATPNG" == h13.m_seg[ 0 ]
        &&   F_HOTEL13_NOT_COOHASH(            h13.m_seg[ 1 ] )
        ){
            h13.m_giv.writeHead( 400 , d_txt );
            h13.m_giv.write( "[APPEND:/COOHASH]" );
            h13.m_giv.end();
        }else
        if( "F_HOTEL13_CAS_COOHASH_SCATPNG" == h13.m_seg[ 0 ] ){
             F_HOTEL13_CAS_COOHASH_SCATPNG(    h13.m_seg[ 1 ] )
            .then( ( i_scatpng )=>{

                if( "string" != typeof i_scatpng.m_ooi ){
                    ERR("[IMAGE_ORIGIN_NEVER_SET]");
                };;

                if( i_scatpng.m_has >= 1 ){

                    
                    h13.m_giv.setHeader( 
                        "nsh_ooi" ,  i_scatpng.m_ooi  );;
                    h13.m_giv.writeHead( 200 , d_png  );
                    h13.m_giv.write( i_scatpng.m_png  );        
                    h13.m_giv.end();
                }else
                if( i_scatpng.m_has <= 0 ){

                    h13.m_giv.setHeader(
                        "nsh_ooi" , i_scatpng.m_ooi   );;
                    h13.m_giv.writeHead( 404 , d_jso  );

                    i_scatpng.m_log.push( 
                        "[PNG_NOT_FOUND]"
                    );;
                    h13.m_giv.write( JSON.stringify( 
                            i_scatpng.m_log ));;
                    h13.m_giv.end();
                }else{
                    ERR("[EDCL_20220723]");
                };;
            });;
        }else
        if( "DANGER_ZONE_FLIP_THE_TABLE_MY_BITCH_2022"
        === h13.m_seg[ 0 ]
        ){

            var act_p_w =( F_HOTEL13_API_3RD_C_S_IMGUR() );
            var got_p_w =( h13.m_seg[ 1 ] );

            act_p_w =F_HOTEL13_STR_UPP( act_p_w );
            got_p_w =F_HOTEL13_STR_UPP( got_p_w );

            if( 1
            &&  ( act_p_w === got_p_w )
            &&  ( act_p_w  != ""      ) //:#PWE_GAURD#://
            ){
                d_hotel13_dcp
                .query( d_dts_tab_hotel13 )
                .then( function( i_res ){

                    h13.m_giv.writeHead( 200 , d_txt );
                    h13.m_giv.write("[DATABASE_EXPLODED]");
                    h13.m_giv.end();
                })
                .catch( function( i_err ){

                    LOG( "[OH_FUCK_WHAT_NOW?]");
                    LOG( "[i_err]" , i_err    );

                    h13.m_giv.writeHead( 200 , d_txt );
                    h13.m_giv.write("[SQL_ERROR_OHNO]");
                    h13.m_giv.end();
                })
                ;;;;;;;;;;;;;;;;;;;;;;;;;;;
            }else{

                h13.m_giv.writeHead( 404 , d_txt );
                h13.m_giv.write("[404_PASSWORD_NOT_FOUND]");
                h13.m_giv.end();
            };;
        }else
        if( "API"       == h13.m_seg[ 0 ] ){

            if( 1
            &&  "API"      === h13.m_seg[ 0 ]
            &&  "LISHASH"  === h13.m_seg[ 1 ]
            ){   
                let coohash =( h13.m_seg[ 2 ] );
                let sql_cmd =( d_sel_tab_hotel13 );
                    sql_cmd = sql_cmd.replaceAll(

                        "[i_coohash]" , coohash
                    );;

                if( ! ( F_HOTEL13_ICH( coohash ))){

                    h13.m_giv.writeHead( 400 , d_txt );
                    h13.m_giv.write(
                        "[Please_Supply:COOHASH]"
                    );;
                    h13.m_giv.end();
                }else{

                    d_hotel13_dcp                               
                    .query( sql_cmd )                 
                    .then( function( i_res ){ 
                           
                        h13.m_giv.writeHead(200,d_jso);
                        h13.m_giv.write(
                            JSON.stringify( 
                                i_res.rows
                            )
                        );;
                        h13.m_giv.end();
                    })                                          
                    .catch( function( i_err ){                  
                                              
                        MSG("[FAIL:LISHASH]");      
                        ERR("[FAIL:LISHASH]");            
                    }) 
                    ;;;;;;;;;;;;;;;;;;;;;;;;;;;
                };;
            }else
            if( 1
            &&  "API"             === h13.m_seg[ 0 ]
            &&  "3RD"             === h13.m_seg[ 1 ]
            &&  "UPP"             === h13.m_seg[ 2 ]
            &&  "IMGUR"           === h13.m_seg[ 3 ]
            &&  (  F_HOTEL13_NOT_S3D( h13.m_seg[ 4 ] )
                || F_HOTEL13_NOT_S3D( h13.m_seg[ 5 ] )
                || F_HOTEL13_NOT_S3D( h13.m_seg[ 6 ] )
                )
            ){
            //: APP.COM/API/3RD/UPP/IMGUR/XXX_YYY_ZZZ://
            //: APP.COM/API/3RD/UPP/IMGUR/           ://
            //: APP.COM/API/3RD/UPP/IMGUR/YOUFUCKEDUP://

                h13.m_giv.writeHead( 200 , d_txt );
                h13.m_giv.write( "[SUPPLY:XXX/YYY/ZZZ]" );
                h13.m_giv.end();
            }else
            if( 1
            &&  "API"          === h13.m_seg[ 0 ] 
            &&  "3RD"          === h13.m_seg[ 1 ] 
            &&  "UPP"          === h13.m_seg[ 2 ] 
            &&  "IMGUR"        === h13.m_seg[ 3 ] 
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 4 ] ) //:<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI:2022_07_19
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 5 ] ) 
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 6 ] ) 
            ){
            //:   APP.COM/API/3RD/UPP/IMGUR/###/###/### :://    
                F_HOTEL13_API_3RD_UPP_IMGUR(

                    h13            //:<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI
                ,   h13.m_seg[ 4 ] //:EX[ "333" ]://
                ,   h13.m_seg[ 5 ] //:EX[ "666" ]://
                ,   h13.m_seg[ 6 ] //:EX[ "999" ]://
                );;
                //:::::::::::::::::::::::::::::::::::::::://
                //:                                      ://
                //: Above call __NOT__ a promise. It     ://
                //: doesn't need to be, and if you make  ://
                //: it one, shit will get ugly.          ://
                //:                                      ://
                //:::::::::::::::::::::::::::::::::::::::://
            }else
            if( 1
            &&  "API"          === h13.m_seg[ 0 ] 
            &&  "3RD"          === h13.m_seg[ 1 ] 
            &&  "DOW"          === h13.m_seg[ 2 ] 
            &&  "IMGUR"        === h13.m_seg[ 3 ] 
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 4 ] ) //:<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI:2022_07_19
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 5 ] )
            &&  F_HOTEL13_YES_S3D( h13.m_seg[ 6 ] )
            ){
            //:   APP.COM/API/3RD/DOW/IMGUR/###/###/### :://
                F_HOTEL13_API_3RD_DOW_IMGUR()
                .then( (i_saywhat)=>{

                    h13.m_giv.writeHead( 200 , d_txt );
                    h13.m_giv.write( "[TODO:DOW]" );  //:<<<<<<<<<<<<<<<<<<<<< NOTICE_ME_SENPAI
                    h13.m_giv.end();
                });;
            }else{
                //:::::::::::::::::::::::::::::::::::::::://
                //: Unknown API Message .................://
                //:::::::::::::::::::::::::::::::::::::::://    
                h13.m_giv.writeHead( 200 , d_txt );
                h13.m_giv.write( "[API_WTF]" );
                h13.m_giv.end();
            };;
        }else
        if( "HAS_IMGUR" == h13.m_seg[ 0 ] ){

            //:::::::::::::::::::::::::::::::::::::::::::://
            //: Before we write imgur upload, let's      ://
            //: use this hack to see if we have          ://
            //: the correct configuration ready.         ://
            //:::::::::::::::::::::::::::::::::::::::::::://

            var has_imgur = F_HOTEL13_API_3RD_HAS_IMGUR();
            h13.m_giv.writeHead( 200 , d_txt );
            h13.m_giv.write("[has_imgur]:("+has_imgur+")");
            h13.m_giv.end();
        }else
        if( "PNG"    == h13.m_seg[ 0 ] ){

            //: @rfp@ : Relative File Path
            //: @s_i@ : Segment      Index
            //: @m_i@ : Max( valid ) Index

            var rfp = "." ; 
            var m_i =( h13.m_seg.length - 1 );
            for( var s_i = 0 ; s_i <=( m_i ) ; s_i ++ ){

                rfp += ( "/" + h13.m_seg[ s_i ] );
            };;

            F_HOTEL13_SERVEME_PNG( h13 , rfp );
        }else
        if( "UPLOAD" == h13.m_seg[ 0 ] ){

            //:@uro@ : Upload_Response_Object://
            var uro ={ laxcoma:"[HACK]"
            ,  m_log : [ ] //:ArrayOfLoggingInfo://
            ,  m_o_k : (0) //:Everything_Ok?
            };;

            //////////////////////////////////
            var                exi_ee1 =( 1 );  
            var                exi_ee2 =( 2 );  
            var                exi_ee3 =( 3 );  
            var                exi_ee4 =( 4 );  
            var                exi_ee5 =( 5 );  
            var                exi_ee6 =( 6 );  
            var                exi_ee7 =( 7 );  
            var                exi_ee8 =( 8 );  
            var                exi_ee9 =( 9 );  

            var              last_exit =(10 );

            var              early_exit =( last_exit );
            //////////////////////////////////
            var doing_some_async_stuff =( 0 );
    
            var obj_x   ; //:Object Holding X WorldCoord ://
            var obj_y   ; //:Object Holding Y WorldCoord ://
            var obj_z   ; //:Object Holding Z WorldCoord ://

            var world_x ; //:Worldmap . X LevelPack      ://    
            var world_y ; //:Worldmap . Y LevelPack      ://    
            var world_z ; //:Worldmap . Z LevelPack      ://

            var met ; //:@met@ : Method           :------://
            var c_l ; //:@c_l@ : Content Length   :------://
            var f_n ; //:@f_n@ : File Name        :------://
            var rel ; //:@rel@ : RelativeFilePath :------://
            var jtf ; //:@jtf@ : Just_The_Folder  :------://
            var f_s ; //:@f_s@ : FileStream Inst  :------://    
            var nca ; //:@nca@ : Name_Components_Array   ://    
            var nox ; //:@nox@ : filename NO_eXtension   ://

            var goodfmt ;//:Format[ AIM_000_000_000.EXT ]://   

            var url_x   ;//:@url_x@: x m_seg of path :---://      
            var url_y   ;//:@url_y@: y m_seg of path :---://
            var url_z   ;//:@url_z@: z m_seg of path :---://

            var sob_xyz ;//:@sob_xyz@:StringObject[xyz]  ://
            var aim_x   ;//:@aim_x@: AIM_FMT_GET().~x~   ://
            var aim_y   ;//:@aim_y@: AIM_FMT_GET().~y~   ://
            var aim_z   ;//:@aim_z@: AIM_FMT_GET().~z~   ://

            h13.m_giv.writeHead( 200 , d_jso );

            uro.m_log.push( "[o_k:Sanity_Check]" );
            

            if( (o_k >= 1) && (early_exit >= exi_ee1) ){

                if( h13.m_seg.length <= 1 ){
                    uro.m_log.push("[MISSING:X_AXIS]");
                    o_k=(0-1);
                };;
                if( h13.m_seg.length <= 2 ){
                    uro.m_log.push("[MISSING:Y_AXIS]");
                    o_k=(0-2);
                };;
                if( h13.m_seg.length <= 3 ){
                    uro.m_log.push("[MISSING:Z_AXIS]");
                    o_k=(0-3);
                };;

                if( o_k >= 1 ){
                    uro.m_log.push("[o_k:X_Y_Z:given]");
                };;     
            }else{
                uro.m_log.push( "[DEAD_IN_WATER]" );
                uro.m_log.push( "[o_k==]:"+o_k    );
                uro.m_log.push( "[exi_ee1]:"+exi_ee1 );
                uro.m_log.push( "[early_exit]:"+early_exit );
            };;

            if( (o_k >= 1) && (early_exit >= exi_ee2) ){

                obj_x = F_HOTEL13_TRYATOI( h13.m_seg[ 1 ] );
                obj_y = F_HOTEL13_TRYATOI( h13.m_seg[ 2 ] );
                obj_z = F_HOTEL13_TRYATOI( h13.m_seg[ 3 ] );

                if( 1
                &&  obj_x.m_has 
                &&  obj_y.m_has 
                &&  obj_z.m_has
                ){ 
                    world_x =( obj_x.m_i32 );
                    world_y =( obj_y.m_i32 );
                    world_z =( obj_z.m_i32 );
                    
                    o_k =( 0+777 );
                    uro.m_log.push( "[o_k:COORDS_GOT]" );
                }else{
                    o_k =( 0-666 );
                    uro.m_log.push( "[bad:COORDS_BAD]" );
                };;
            };;
            if( (o_k >= 1) && (early_exit >= exi_ee3) ){

                met = String.prototype.toUpperCase.call(
                            h13.m_ask.method );;

                if( "POST" != met ){
    
                    uro.m_log.push( "[bad:nota_post]" );
                    o_k =( 0-666 );
                }else{

                    uro.m_log.push( "[o_k:Is_A_Post]" );
                    o_k =( 0+777 );
                };;
            };;
            if( (o_k >= 1) && (early_exit >= exi_ee4) ){
                c_l = parseInt( h13.m_ask.headers[

                    "content-length"
                ]);;

                if( Number.isNaN( c_l ) || c_l <= 0 ){

                    uro.m_log.push( "[bad:c_l:nan]" );
                    o_k =( 0-1 );
                }else{

                    uro.m_log.push( "[o_k:not:nan]" );
                    o_k =( 0+777 );
                };;
            };;
            if( (o_k >= 1) && (early_exit >= exi_ee5) ){

                f_n = h13.m_ask.headers[ "nsh_pngname" ];
                if( 0
                ||  ( null == f_n )
                ||  (  ""  == f_n )
                ||  (        !f_n )
                ){
                    uro.m_log.push( "[MISSING:nsh_pngname]" );
                    o_k =( 0 );
                };;
            };;
            if( (o_k >= 1 ) && ( early_exit >= exi_ee6 ) ){

                f_n = String.prototype.toUpperCase.call(f_n);
                nox = f_n.replaceAll( ".PNG" , "" );
                nca = nox.split( "_" ).filter( n => n );
                if( 4 != nca.length ){
    
                    uro.m_log.push( 
                        "[NOT:AIM_###_###_###.PNG(001)]"
                    );;
                    uro.m_log.push( "[f_n]:"+f_n );
                    o_k =( 0 );
                }else{
                    //:MoreIntenseTest://

                    goodfmt = F_HOTEL13_AIM_FMT_HAS( nox );
                    if( !(goodfmt) ){

                        uro.m_log.push( 
                            "[NOT:AIM_###_###_###.PNG(002)]"
                        );;
                        uro.m_log.push( "[nox]:"+nox );
                        o_k =( 0 );
                    };;
                };;
                if( o_k >= 1 ){

                    uro.m_log.push( "[o_k:FILENAME_FMT]" );
                    uro.m_log.push( "[f_n]:" + f_n       );
                };;
            };;
            if( (o_k >= 1 ) && ( early_exit >= exi_ee7 ) ){

                //:::::::::::::::::::::::::::::::::::::::://
                //: URLPATH & FILENAME __MUST__ agree    ://
                //: EX[ /UPLOAD/111/222/333     ]        ://
                //: EX[     AIM_111_222_333.PNG ]        ://
                //:::::::::::::::::::::::::::::::::::::::://

                url_x = ( h13.m_seg[ 1 ] || "[BLANK_X]" );
                url_y = ( h13.m_seg[ 2 ] || "[BLANK_Y]" );
                url_z = ( h13.m_seg[ 3 ] || "[BLANK_Z]" );

                if( F_HOTEL13_YES3DIG[ url_x ]
                &&  F_HOTEL13_YES3DIG[ url_y ]
                &&  F_HOTEL13_YES3DIG[ url_z ]
                ){
                    uro.m_log.push( "[bad_path_format]" );
                    o_k=( 0 - 432 );
                }else{
                    uro.m_log.push( "[o_k:GoodPathFMT]" );
                };;

                uro.m_log.push( "[url_x]:"+url_x    );
                uro.m_log.push( "[url_y]:"+url_y    );
                uro.m_log.push( "[url_z]:"+url_z    );
            };;
            if( (o_k >= 1 ) && ( early_exit >= exi_ee8 ) ){

                //:::::::::::::::::::::::::::::::::::::::://
                //: Make Sure Path Agrees With Filename  ://    
                //:::::::::::::::::::::::::::::::::::::::://

                sob_xyz = F_HOTEL13_AIM_FMT_GET_STR( f_n );
                aim_x   = sob_xyz.m_s_x ; //:mstr_x://
                aim_y   = sob_xyz.m_s_y ; //:mstr_y://
                aim_z   = sob_xyz.m_s_z ; //:mstr_y://

                if( aim_x === url_x
                &&  aim_y === url_y
                &&  aim_z === url_z
                ){
                    o_k =( 0 + 888 );
                }else{
                    o_k =( 0 - 808 );

                    uro.m_log.push( "[@URL_NE_F_N@]"       );
                    uro.m_log.push( "[URL__ -VS- AIM__]"   );
                    uro.m_log.push( url_x + "-VS-" + aim_x );
                    uro.m_log.push( url_y + "-VS-" + aim_y );
                    uro.m_log.push( url_z + "-VS-" + aim_z );
                };;
            };;
            if( (o_k >= 1 ) && ( early_exit >= exi_ee9 ) ){

                uro.m_log.push( "[o_k:beg:ee6]" );

                doing_some_async_stuff=( 1 );

                jtf =( ""
                +   ( "./PNG/" )
                +   ( "X_" + aim_x /**url_x**/ ) + "/"
                +   ( "Y_" + aim_y /**url_y**/ ) + "/"
                +   ( "Z_" + aim_z /**url_z**/ ) +("")
                );;

                rel =( ""
                +   ( jtf  /** Just_The_Folder **/ )
                +   ( "/"  /** ConcatWithSlash **/ )
                +   ( f_n  /** FileNameWithExt **/ )
                );;
    
                //:::::::::::::::::::::::::::::::::::::::://
                //: Create Folder If Not Exists          ://
                //:::::::::::::::::::::::::::::::::::::::://
                if( (!(l_fs.existsSync( jtf ))) ){

                    l_fs.mkdirSync( 
    
                        jtf
                    ,   { recursive : true }
                    );;
                };;

                f_s = l_fs.createWriteStream( rel );
                f_s.on( "error" , (i_err)=>{

                    console.log(    "[OHFUKNO_2022]" );
                    uro.m_log.push( "[OHFUKNO_2022]" );
                    h13.m_giv.end( JSON.stringify( uro ));
                });;

                h13.m_ask.pipe( f_s ); //:#_W_D_A_I_C_#://
                h13.m_ask.on( "end" , ()=>{

                    f_s.close( ()=>{

                        uro.m_log.push( "[SUCCESS]" );
                        uro.m_o_k =( 200 );
                        h13.m_giv.end( JSON.stringify( uro ));
                    });;
                });;

                uro.m_log.push( "[o_k:end:ee6]" );
            };;

            if( doing_some_async_stuff <= 0 ){
    
                if( early_exit < last_exit ){

                    uro.m_log.push( "[warning:earlyexit]" );
                };;
                h13.m_giv.end( JSON.stringify( uro ));
            };;
        }else
        if( 1
        &&  ( 5         == h13.m_seg.length )
        &&  ( "H13_J_S" == h13.m_seg[ 0 ]   )  //::PREFIX://
        &&  (  "H13.JS" == h13.m_seg[ 4 ]   )  //:POSTFIX://
        ){
            //:::::::::::::::::::::::::::::::::::::::::::://
            //: Serve as custom taylored client side     ://    
            //: javascript library by going to url :     ://    
            //:                                          ://    
            //: www.app.com/H13_J_S/001/002/003/H13.JS   ://    
            //: www.app.com/H13_J_S/###/###/###/H13.JS   ://    
            //:                                          ://    
            //:::::::::::::::::::::::::::::::::::::::::::://

            var obj_x = F_HOTEL13_TRYATOI( h13.m_seg[ 1 ] );
            var obj_y = F_HOTEL13_TRYATOI( h13.m_seg[ 2 ] );
            var obj_z = F_HOTEL13_TRYATOI( h13.m_seg[ 3 ] );

            if( 1
            && obj_x.m_has 
            && obj_y.m_has
            && obj_z.m_has
            ){

                let _ =( " " ); //:Space://
                let c =( "," ); //:Comma://

                var seg_x =( obj_x.m_i32 );
                var seg_y =( obj_y.m_i32 );
                var seg_z =( obj_z.m_i32 );
           
                let wmc_i_x =( seg_x );
                let wmc_i_y =( seg_y );
                let wmc_i_z =( seg_z );
                F_HOTEL13_SERVEME( 
                        h13 
                ,   wmc_i_x 
                ,   wmc_i_y 
                ,   wmc_i_z
                );;
            }else{

                let seg = h13.m_seg ;;;;;;;;;;;;;;;;;;;;;;;;
                h13.m_giv.writeHead( 200 , d_txt );;;;;;;;;;
                h13.m_giv.write( "[m_seg[0]]:" + seg[ 0 ] );
                h13.m_giv.write( "\n"                     );
                h13.m_giv.write( "[m_seg[1]]:" + seg[ 1 ] );
                h13.m_giv.write( "\n"                     );
                h13.m_giv.write( "[m_seg[2]]:" + seg[ 2 ] );
                h13.m_giv.write( "\n"                     );      
                h13.m_giv.write( "[m_seg[3]]:" + seg[ 3 ] );
                h13.m_giv.write( "\n"                     );    
                h13.m_giv.end("[Room_XY_Is_BS]");;;;;;;;;;;;
            };;
        }else
        if( h13.m_url == "/HELLO" ){

            h13.m_giv.end( "[!WORLD!]" );
        }else
        if( h13.m_url == "/HOTEL13" ){

            //:::::::::::::::::::::::::::::::::::::::://
            //: Serve[ THIS FILE ], yes , this file, ://
            //: as a javascript source file to       ://
            //: run on the client side.              ://
            //:::::::::::::::::::::::::::::::::::::::://
            F_HOTEL13_SERVEME( 
                h13
            ,   d_hotel13_wmc_i_x_def //:AKA[wmc_i_x]://
            ,   d_hotel13_wmc_i_y_def //:AKA[wmc_i_y]://
            ,   d_hotel13_wmc_i_z_def //:AKA[wmc_i_z]://
            );;
        }else
        //:AIM_ROUTEPAIR::2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2://
        if( h13.m_seg.length >= 1
        &&  F_HOTEL13_AIM_FMT_HAS( h13.m_seg[ 0 ] )
        ){
        //:aim_routepair_js:-----------------------------://
        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: EXAMPLE: www.app.com/AIM_001.JS              ://
        //: EXAMPLE: www.app.com/AIM_001_002.JS          ://
        //: EXAMPLE: www.app.com/AIM_001_002_003.JS      ://
        //:                                              ://
        //: "001" is X axis ( in example )               ://
        //: "002" is Y axis ( in example )               ://
        //: "003" is Z axis ( in example )               ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://

            var obj_xyz =( F_HOTEL13_AIM_FMT_GET( 
                h13.m_seg[ 0 ]
            ));;

            var wmc_i_x =( 0 );
            var wmc_i_y =( 0 );
            var wmc_i_z =( 0 );

            if( obj_xyz.m_has ){
                wmc_i_x =( obj_xyz.m_i_x );
                wmc_i_y =( obj_xyz.m_i_y );
                wmc_i_z =( obj_xyz.m_i_z );  
            };;
            
            F_HOTEL13_SERVEME( 
                h13 
            ,   wmc_i_x 
            ,   wmc_i_y 
            ,   wmc_i_z  
            );;
        //:-----------------------------:aim_routepair_js://
        }else
        if( 1 
        &&  1 == h13.m_seg.length
        &&  F_HOTEL13_ICH( h13.m_seg[ 0 ] )
        ){
        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //: EXAMPLE: www.app.com/001                     ://
        //: EXAMPLE: www.app.com/001_002                 ://
        //: EXAMPLE: www.app.com/001_002_003             ://
        //:                                              ://
        //: "001" is X axis ( in example )               ://
        //: "002" is Y axis ( in example )               ://
        //: "003" is Z axis ( in example )               ://
        //:::::::::::::::::::::::::::::::::::::::::::::::://
        //:aim_routepair_htm:----------------------------://

            var obj_xyz =(F_HOTEL13_ICH_TRY( 
                h13.m_seg[ 0 ]
            ));;
            var w_x =( 0 );
            var w_y =( 0 );
            var w_z =( 0 );
            if( obj_xyz.m_has ){

                w_x =( obj_xyz.m_i_x );
                w_y =( obj_xyz.m_i_y );
                w_z =( obj_xyz.m_i_z );
            };;

            var s_x = F_HOTEL13_I32_S3D( w_x );
            var s_y = F_HOTEL13_I32_S3D( w_y );
            var s_z = F_HOTEL13_I32_S3D( w_z );

            var h13_webpage =( "" //:----------------://
            +'      <!DOCTYPE HTML><head>              '
            +'      <meta charset="utf-8"><title>      '
            ////////////////////////////////////////////
            ////       #_GENERATE_PAGE_NAME_#        ///
            ////////////////////////////////////////////
            +` [AIM_XYZ]( ${s_x} , ${s_y} , ${s_z} )   `
            ////////////////////////////////////////////
            +'      </title>                           '
            +'          <script                        '
            ////////////////////////////////////////////
            ////       #_GENERATE_FILE_NAME_#        ///
            ////////////////////////////////////////////
            +`src ="../../AIM_${s_x}_${s_y}_${s_z}.JS" `
            ///////"../../AIM___001____002____003_.JS"//
            ////////////////////////////////////////////
            +'              charset="UTF-8">           '
            +'          </script>                      '
            +'      </head>                            '
            );; //:----------------------------------://

            h13.m_giv.writeHead(   200 ,  d_htm  );
            h13.m_giv.end( h13_webpage , "utf-8" );

        //:----------------------------:aim_routepair_htm://
        }else
        //:2_2_2_2_2_2_2_2_2_2_2_2_2_2_2_2::AIM_ROUTEPAIR://    
        if( 3 == h13.m_seg.length ){     //:#_SLASH_XYZ_#://
        //:----------------------------------------------://    
        //:                                              ://
        //: Example Path :                               ://
        //:                                              ://
        //:     www.app.com/H13_J_S/001/002/003/H13.JS   ://
        //:                                              ://
        //:----------------------------------------------://

            //:::::::::::::::::::::::::::::::::::::::::::://
            //: Serve .HTM Page That Is Kind Of Like     ://
            //: A Youtube Video URL, but for game        ://
            //: world map [coords/levelpacks].           ://
            //:::::::::::::::::::::::::::::::::::::::::::://

            let TRYATOI = F_HOTEL13_TRYATOI ;
            var obj_x = TRYATOI( h13.m_seg[ 0 ] );                
            var obj_y = TRYATOI( h13.m_seg[ 1 ] );
            var obj_z = TRYATOI( h13.m_seg[ 2 ] );
            var   w_x = d_hotel13_wmc_i_x_def ;
            var   w_y = d_hotel13_wmc_i_y_def ;
            var   w_z = d_hotel13_wmc_i_z_def ;

            if( obj_x.m_has 
            &&  obj_y.m_has
            &&  obj_z.m_has
            ){
                w_x = obj_x.m_i32 ;
                w_y = obj_y.m_i32 ;
                w_z = obj_z.m_i32 ;
            };;

            var h13_webpage =( "" //:----------------://
            +'      <!DOCTYPE HTML><head>              '
            +'      <meta charset="utf-8"><title>      '
            ////////////////////////////////////////////
            +`   [BOOM]( ${w_x} , ${w_y} , ${w_z} )    `
            ////////////////////////////////////////////
            +'      </title>                           '
            +'          <script                        '
        ////////////////////////////////////////////////////
        +`src ="../../H13_J_S/${w_x}/${w_y}/${w_z}/H13.JS"`
        ////////////////////////////////////////////////////
            +'              charset="UTF-8">           '
            +'          </script>                      '
            +'      </head>                            '
            );; //:----------------------------------://
            
            h13.m_giv.writeHead(   200 ,  d_htm  );
            h13.m_giv.end( h13_webpage , "utf-8" );
        }else{

            var back_up = "./" ;
            arr_back_up=[
                "./"
            ,   "../"
            ,   "../../"
            ,   "../../../"
            ,   "../../../../"
            ];;
            if( h13.m_seg.length <= arr_back_up.length ){

                back_up = arr_back_up[ 
                    h13.m_seg.length
                ];;
            };;

            var h13_webpage =( "" //:----------------://
            +'      <!DOCTYPE HTML><head>              '
            +'      <meta charset="utf-8"><title>      '
            +'          [AIM]                          '
            +'      </title>                           '
            +'          <script                        '
            +`              src    ="${back_up}HOTEL13"`
            +'              charset="UTF-8">           '
            +'          </script>                      '
            +'      </head>                            '
            );; //:----------------------------------://

            h13.m_giv.writeHead(   200 ,  d_htm  );
            h13.m_giv.end( h13_webpage , "utf-8" );
        };;

    }).listen(process.env.PORT); 
    //:===================================:HOTEL13_SERVER://    
    };; //:END:ENV_H13NODE:::::::::::::::::::::::::::::::://
    //:HOTEL13_SERVER_MODE:##############################://
    //:##################################################://


/** CTRL_F_HELP ******************************** *********** ***
*** TAG_SECTION ******************************** *********** ***
--- ----------- -------------------------------- ----------- ---

    TAG[ tag_section | tag-section | tagsection ]

--- ----------- -------------------------------- ----------- ---

    -----------------------------------------------------------
    [ integer-to-string | integer_to_string | integertostring ]
    [ integer-to-padded-string | int-to-padded-string         ]
    [ padded-string | padded_string | padded string           ]
    [ zero padded string | zero_padded_string | zeropadded    ]
    [ zeropaddedstring | zero padding | zeropadding | zeropad ]
    [ pad string | pad-string | padstring | pad-numbers       ]
    [ add padding | add-padding | addpadding | pad numbers    ]
    [ number-padding | number padding | number_padding        ]
    -----------------------------------------------------------
    F_HOTEL13_PAD_STR  ( ( "1" ) ===> ( "001" ) )
    F_HOTEL13_I32_STR  ( (  1  ) ===> ( "001" ) ) (  old  )
    F_HOTEL13_I32_S3D  ( (  1  ) ===> ( "001" ) ) ( !NEW! )
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ is-valid-coordinate-hash | coord-hash | is-coord-hash ]
    [ is valid coordinate hash | coord hash | is coord hash ]
    [ is_valid_coordinate_hash | coord_hash | is_coord_hash ]
    -----------------------------------------------------------
    F_HOTEL13_ICH
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ set-active-bomb | set_active_bomb | setactivebomb       ]
    [ set-tripped-bomb | set_tripped_bomb | settrippedbomb    ]
    [ active-bomb | activebomb | active_bomb | bomb_timer     ]
    [ tripped-bomb | tripped_bomb | trippedbom | bombtimer    ]
    [ activate-bomb | activate_bomb | activatebomb | bombtime ]
    [ trip-bomb | trip_bomb | tripbomb | tripp_bomb| bomb_time]
    [ tripp-bomb | trippbomb | activate-bomb-timer            ]
    [ bomb-timer | bomb-is-now-ticking-down | bomb-ticker     ]
    [ mine-ticker | activate-mine | trip-mine | active-mine   ]
    -----------------------------------------------------------
    edi_mod_act  ( AS_OF[ 2022_07_19 ]IS_TOGGLE_KEY[ "A" ] )
                 ( Modifies:BOMB_SETTING_TOGGLE_KEY[ "B" ] )     
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ is-three-digit-string | three-digit-string | is-3ds     ]
    [ is_three_digit_string | three_digit_string | is_3ds     ]
    [ isthreedigitstring    | threedigitstring   | is3ds      ]
    [ three_digit_string | threedigitstring | threedigit      ]
    [ three-digit-string | three-digit | three_digit          ]
    [ is three | is_three | is-three | isthree                ]
    [ is three digit string | is it three digits | is digit   ]
    -----------------------------------------------------------
    F_HOTEL13_YES_S3D
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ create coordinate hash from xyz strings | xyz-to-hash   ]
    [ create_coordinate_hash_from_xyz_strings | xyz to hash   ]
    [ str_xyz_to_coordhash | str-xyz-to-coordhash             ]
    [ str xyz to coordhash | xyz_to_hash | xyzstr to hash     ]
    -----------------------------------------------------------
    F_HOTEL13_STR_COOHASH
    -----------------------------------------------------------

    -----------------------------------------------------------
    generate-file-name | generate_file_name | gen_file_name
    generate file name | gen file name | gen-file-name
    create-file-name | create_file_name | createfilename
    genfilename | generatefilename
    #_GENERATE_PAGE_TITLE_# 
    -----------------------------------------------------------
    SEE[ #_GENERATE_FILE_NAME_# | #_GENERATE_PAGE_NAME_# ]
    -----------------------------------------------------------

    -----------------------------------------------------------
    generate aim js file | generate_aim_js_file |
    generate-aim-js-file | generateaimjsfile
    aim.js | aim_js | aimjs | aim_1_1_1.js
    aim_001_001_001.js | AIM_001_001_001.JS
    aim_001_001_003.js | AIM_001_001_003.JS
    genaimfile | gen_aim_file | gen-aim-file
    gen aim file
    -----------------------------------------------------------
    SEE[ #_GENERATE_FILE_NAME_# | #_GENERATE_PAGE_NAME_# ]
    SEE_FUNCTION[ F_HOTEL13_SERVEME ]
    -----------------------------------------------------------

    -----------------------------------------------------------
    generate page title | generate-page-title | make-page-name
    generatepagetitle | gen page title | genpagetitle
    gen_page_title | page title generation | make_page_name
    page_title_generation | pagetitlegeneration | makepagename
    -----------------------------------------------------------
    SEE[ #_GENERATE_FILE_NAME_# | #_GENERATE_PAGE_NAME_# ]
    -----------------------------------------------------------

    -----------------------------------------------------------
    serve the server | serve server | servetheserver
    serve_the_server | serve_server | serve yourself
    serve-the-server | serve-server | serve your own source
    serve_your_own_source | serveyourownsource
    self-serve | selfserve | self_serve | self serve icecream
    -----------------------------------------------------------
    F_HOTEL13_SERVEME
    -----------------------------------------------------------

    -----------------------------------------------------------
    use coordinate hash to get png file
    F_HOTEL13_USE_COOHASH_GET_PNG
    F_HOTEL13_COOHASH_PNG
    F_HOTEL13_CAS_COOHASH_PNG | SCATPNG 
    -----------------------------------------------------------
    F_HOTEL13_CAS_COOHASH_SCATPNG <-- Use coordhash to get .PNG
    -----------------------------------------------------------
    
    -----------------------------------------------------------
    Server_And_Client | ser ver-and-client |
    server and client | serverandclient | server_and_client
    SAC | SAC_FUNCTIONS | SAC_FUNCS
    SERVER_AND_CLIENT 
    -----------------------------------------------------------
    YOU_MEAN[ #_CLIENT_AND_SERVER_# ]
    -----------------------------------------------------------

    -----------------------------------------------------------
    IS_COOHASH | is-coohash | HAS_COOHASH | ISA_COOHASH
    is-a-coohash | is a coohash | is a coordinate has
    is coordinate hash | is coord hash | is_coord_hash
    isa_coohash | isa-coohash | isa coohash | isa hash
    isa_hash | isahash
    -----------------------------------------------------------
    F_HOTEL13_YES_COOHASH
    F_HOTEL13_NOT_COOHASH
    -----------------------------------------------------------

    -----------------------------------------------------------
    not a coordinate hash
    not_a_coordinate_hash
    notacoordinatehash
    -----------------------------------------------------------
    F_HOTEL13_NOT_COOHASH
    -----------------------------------------------------------

    -----------------------------------------------------------
    is a coordinate hash
    is_a_coordinate_hash
    isacoordinatehash
    -----------------------------------------------------------
    F_HOTEL13_YES_COOHASH
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ F_HOTEL_STR_ASC | F_HOTEL_ASC_STR                       ]
    [ F_HOTEL_STR_INT | F_HOTEL_INT_STR                       ]
    [ is string integer character | is string int char        ]
    [ intchar | int_char | int-char                           ]
    [ F_HOTEL13_0_9_STR_YES | F_HOTEL13_0_9_STR               ]
    -----------------------------------------------------------
    F_HOTEL13_STR_0_9_YES
    -----------------------------------------------------------

    -----------------------------------------------------------
    [ F_HOTEL13_ASS | hotel assert | hotel ass | hotel_ass    ]
    [ hotel assert function | hotel_assert | hotel-assert     ]
    -----------------------------------------------------------
    LOOKING_FOR[ F_PRIVATE_HOTEL13_ASS ]
    -----------------------------------------------------------


--- ----------- -------------------------------- ----------- ---

    TAG[ tag_section | tag-section | tagsection ]

--- ----------- -------------------------------- ----------- ---
*** *********** ******************************** TAG_SECTION ***
*** *********** ******************************** CTRL_F_HELP **/
/** BOMB_LASER_ECHOBOX_SPARKPIN **************************** ***

    TAG[ bomb-types | bomb types | types-of-bombs ]
    TAG[ types of bombs ]
    TAG[ BOMB_TYPES ]

    DATE[ 2022_07_07 ]KANJICODER_CANT_SLEEP

    BOMBS :
        BOMB_VERTICAL
        BOMB_HORIZONTAL
        BOMB_FOURWAY   ( small blast , fuse bomb )
        BOMB_SKULL     ( large 4way blast , instant detonation )

    SPARKPIN :
        Creates a 1x1 "spark" that doesn't hurt player.
        INSTANTLY sparks when touched or triggered.
        Spark is of "box bomb" shape, not a cross.
        Rendered as a very small square with dashed lines
        around the perimeter of the full tile size.

    ECHOBOX : ( anti-matter bomb )
        ECHOBOX_VERTICAL
        ECHOBOX_HORIZONTAL    
        ECHOBOX_FOURWAY   
        ECHOBOX_SKULL   

    
    Note: Echobox used "squareblast" pattern , while
          bombs use "crossblast" pattern.


          [@]         [@]
       [@][b][@]      [b]       [@][b][@]
          [@]         [@]




        [@][@][@]   [@][@][@]  [@][@][@][@][@][@][@][@][@]
        [@][e][@]   [@][@][@]  [@][@][@][@][e][@][@][@][@]
        [@][@][@]   [@][@][@]  [@][@][@][@][@][@][@][@][@]
                    [@][@][@]
                    [@][e][@]
                    [@][@][@]
                    [@][@][@]
                    [@][@][@]
                    [@][@][@]


        LASERS : [>]   [<]   [^]   [v] 


        [!][!][!]  Sparkbox, doesn't hurt you.
        [!][s][!]  Immediately "sparks" when touched.
        [!][!][!]  No timer like other things.


*** **************************** BOMB_LASER_ECHOBOX_SPARKPIN **/
/** DEVELOPER_TODO_NOTE ************************************ ***

    TAG[ DEVTODO | DEVEL_TODO ]

    #_MAKE_EXPLOSIVE_AUTOMATA_ON_E_Z_2D_CANVAS_# 
    
        Bomb system is basically just over-glorified
        cellular atomata. Get this file to run standalone
        using a simple CANVAS 2D context to render
        enough info to help you debug behavior.
        
        Should be able to pause+play simulation
        and SET BOMBS while simulation is paused.
        
        ----------------------------------------------------
        
        TODO: Explosive Atomata
        
            We randomly generate TILES & BOMBS
            on the map and have fire blasts running
            around the boarder of the 13 rooms diamond.
            
            Once a trail of bombs hits the edge,
            detonation is inevitable once the rolling
            fire makes its way to the boarder.
            
            We use this to TEST if all of our logic
            is working before we move the code
            into main game.
            
*** ************************************ DEVELOPER_TODO_NOTE **/
/** ******************************************************** ***

    TAG[ BASIC_DATA_LAYOUT | BASIC_LAYOUT ]

              [ ]
           [ ][ ][ ]
        [ ][ ][ ][ ][ ]
           [ ][ ][ ]
              [ ]
              
              
        Physical Layout Of [ h_x ]&[ h_y ] totally 
        different that it's layout in the data...
        You need to keep this in mind for mapping
        bomb explosions into adjacent rooms.
        
                  +---+                       +---+
                  |000|                       |r00|
                  +---+                       +---+
             +---++---++---+             +---++---++---+
             |001||002||003|             |r01||r03||r03|
             +---++---++---+             +---++---++---+
        +---++---++---++---++---+   +---++---++---++---++---+
        |004||005||006||007||008|   |r04||r05||r06||r07||r08|
        +---++---++---++---++---+   +---++---++---++---++---+
             +---++---++---+             +---++---++---+
             |009||010||011|             |r09||r10||r11|
             +---++---++---+             +---++---++---+
                  +---+                       +---+
                  |012|                       |r12|
                  +---+                       +---+
              
        //: Adjactent( render-wise )Rooms ://
        var d_hotel13_adj =[
        //: SLF, L,R,T,B  ,  (LEF),(RIG),(TOP),(BOT)
            r00, 0,0,0,1  ,  (0-1),(0-1),(0-1),(r03)  
        ,   
        ];;
        
        //: Kitty Corner Rooms( render-wise )://
        var d_hotel13_kit =[
        
        //: T_L , T_R , B_L , B_R
        
        ];;
    
              

    |<--------------0512-------------->|
    |<-----0256----->||<-----0256----->|
    +--128--++--128--++--128--++--128--+
    |i_h_x=0||       ||       ||       |
    |  000  ||  001  ||  002  ||  003  | 
    |i_h_y=0||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  004  ||  005  ||  006  ||  007  |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  008  ||  009  ||  010  ||  011  |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    +--128--++--128--++--128--++--128--+
    |       ||       ||       ||       |
    |  012  || [ANY] || [ANY] || [ANY] |
    |       ||       ||       ||       |
    +-------++-------++-------++-------+
    
    
    #_AIM_MASTER_MEMORY_LAYOUT_#
    
        |<--------------2048-------------->|
        |<-----1024----->||<-----1024----->|
        +--512--++--512--++--512--++--512--+
        |  mm0  ||  mm1  ||  mm2  ||  mm3  |
        |#DTUFP#||  CIB  ||#DTUFP#||#DTUFP#|
        |       ||cib_top||       ||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mm4  ||  mm5  ||  mm6  ||  mm7  |
        |  CIB  ||  CIB  ||  CIB  ||#DTUFP#|
        |cib_lef||cib_cen||cib_rig||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mm8  ||  mm9  ||  mma  ||  mmb  |
        |#DTUFP#||  CIB  ||#DTUFP#||#DTUFP#|
        |       ||cib_bot||       ||       |
        +-------++-------++-------++-------+
        +--128--++--128--++--128--++--128--+
        |  mmc  ||  mmd  ||  mme  ||  mmf  |
        |#DTUFP#||#DTUFP#||#DTUFP#||#DTUFP#|
        |       ||       ||       ||       |
        +-------++-------++-------++-------+
        
        @mm0@ : Master Memory Cell Index  0
        @mm1@ : Master Memory Cell Index  1
        @mm2@ : Master Memory Cell Index  2
        @mm3@ : Master Memory Cell Index  3
        @mm4@ : Master Memory Cell Index  4
        @mm5@ : Master Memory Cell Index  5
        @mm6@ : Master Memory Cell Index  6
        @mm7@ : Master Memory Cell Index  7
        @mm8@ : Master Memory Cell Index  8
        @mm9@ : Master Memory Cell Index  9
        @mma@ : Master Memory Cell Index 10
        @mmb@ : Master Memory Cell Index 11
        @mmc@ : Master Memory Cell Index 12
        @mmd@ : Master Memory Cell Index 13
        @mme@ : Master Memory Cell Index 14
        @mmf@ : Master Memory Cell Index 15
    
    
*** ******************************************************** **/
/** HASHTAG_NOTES ****************************************** ***
*** HASHTAG_SEC - ****************************************** ***

    #PUT_ANY# :
    
        F_HOTEL13_PUT_ANY( //:#PUT_ANY#://
    
            i_pix //: RGBA  U08 Pixel Array ://
        ,   i_san //: Span in pixels ://
        
        ,   i_c_x //: City Block X [ 0|1|2 ] AKA HOTEL ://
        ,   i_c_y //: City Block Y [ 0|1|2 ] AKA HOTEL ://
        
        ,   i_h_x //: Hotel Room X
        ,   i_h_y //: Hotel Room Y
        
        ,   i_la3 //: Layer that determines WHAT we are putting.
                  //: 0 == tiles
                  //: 1 == bombs
                  //: 2 == flames
        
        ,   i_te7 //: tile size exponent , 7 of them 0to6
        ,   i_t_x //: tile x
        ,   i_t_y //: tile y
        
        ,   i_u32 //: tile value is a full Uint32 value.
                  //: NOT slicing up bits into layers because
                  //: flames need to be TICKER TIMESTAMPS so
                  //: webgl shader knows what animation frame
                  //: they are on.
        ){ ... }

    #PUT_TIL# :
        Tiles rendered UNDER bombs & flames , so draw first. 
        
    @EXPALAY@ : tile size EXPonent And LAYer (That Order)
    @LOCA@    : LOCAtion (location data)
    @DATA@    : Some type of raw memory acted upon.
    @FODA@    : USE[ FADA ]( FADA == Flames Are DAmage )
    @FADA@    :
              : Flames Are DAmage , they are the same thing.
              : Flame timestamps tell you how to animate 
              : flames, but also tell you that the area has
              : been damaged.
              : 0x0 0000000 : No Damage
              : 0xF FFFFFFF : Inifinte Damage Type F
              : 0x0 FFFFFFF : Inifinte Damage Type 0
              : 0xFFFFFFF <-- 7 Nybles == 268,435,455
              : Timestamp would have to exist for 51 days
              : straight before serious problems.
              
    @F_001 : Means "Function 001" named so just to keep
           : name small to save column space. Try __NOT__
           : to do this unless everything lining up in
           : compact space is very important.
          
    #_EXPAND_AFTER_1ST_PLAYABLE_# :
    
        Code that would be a good idea, but do not
        write it until after we have a playbe game that
        other's can play. We are getting too far ahead
        of ourselves. Things might change by the time
        you get here, or you might never use the code.
        Or the code might not be written exactly as
        you need it.
        
    [the_only_argument_is_an_object]:
    
        Let's be bold in our design decisions. Either
        a function is very procedural and takes many
        arguments, or it takes one giant object.
        
        Try not to mix-match this, because there are
        just too many combinations you could do. Adds
        extra thinking about WHAT TO DO and extra
        thinking about WHAT DID I DO ?
        
        And after all that work , your design decision
        might not be optimal for your final use case ,
        or you may have multiple use cases, some where
        the signature is __NOT__ optimal.
        
        DATE[ 2022_07_04 ]921 AM
        
    #DTUFP# : DONT_TOUCH_UNTIL_FIRST_PLAYABLE
            : D____T_____U_____F_____P_______
            
            Yeah, it is a lot of "wasted" memory, but
            don't touch it until after we have a 
            playable game. Messing with this memory
            before we have a playable game:
            
            1. Adds more time till 1st playable.
            2. Digs us into more potential technical debt.
            
    @CIB@ : CITYBLOCK ( which hotel are you in ? )
    
    @cib_lef@ : CityBlock : LEFT
    @cib_rig@ : CItyBlock : RIGHT
    @cib_top@ : CityBLock : TOP
    @cib_bot@ : CityBLock : BOTTOM
    @cib_cen@ : CityBlock : CENTER
    
    #_UN_NAMESPACED_GLOBALS_# :
    
        Really we should namespace everything, but the
        problem with that is everything get's really
        fucking large. It expands the length of our
        lines and makes diagrams harder.
        
        If we make something an un-namespaced global,
        it means we can no longer use it anywhere else
        in the code base.
            
    #F_HOTEL13_DI8_DI1# :
    
        Converts 8 dimensional value ( DI8 ) for data
        location into a 1-dimensional value ( DI1 ).
        
        In this case, the 1D value is the pixel index
        of where to put the data.
        
    @d1_d2_d3_d4_d5_d6_d7_d8@ :
    
        Denoting 8 dimensions of some type of input.
        As of writing this, a HOTEL13 system location
        for where to put a [ TILE | BOMB | FADA ]
        
    @TILE@ : A tile in the sense of tile based 2D game.
    @BOMB@ : A bomb tile.
    @FADA@ : Flames_Are_DAmage tile.
    @FIDA@ : You mean "Flames Are Damage" not "FireIsDamage"
    
    @quarkmap@ : A mip-map like partitioning of pixels used
               : to encode data. DONT REMEMBER how I originally
               : used this term in ATOMIC ALICE 2020 & A3 ,
               : but "quarkmap" here i s a generalization
               : for how  I am partitioning pixels into data.

    #_BIG_BOMBS_DESIGN_DECISON_# :
    
        Let's focus on gameplay... I like the idea of
        bombs being able to be different power of 2 sizes.
        
        Yes, they have to be snapped to certain locations
        and can't be put anywhere... But the idea of a
        HUGE bomb that can blow up an entire room
        sounds pretty fun.
        
    #_CITYCENTER_# :
    
        AKA[ mm5 / cib_cen ]
        
    #_RECURSION_TO_SOLVE_OUT_OF_ROOM_PROBLEM_# :
    
        Use recursion to truncate explosions and re-emit
        them into adjacent rooms. That is how we will 
        make sure to have the explosions leak into
        adjacent rooms properly.
        
    @cen_of_exp_pix@ : Center of explosion pixel.
    
    #_WHY_COE_START_AT_512_# :
    
        "COE" variable starts at [512,512] because only
        slot[ mm5 ]in master memory is to be updated
        as part of game simulation. Simulation does
        not run for adjacent level packs ( hotels ).
    
    #_EMI_IF_ADJ_# : EMIt IF valid ADJacent room exists.
    
    #SELFSUB# : WRONG , YOU MEAN[ #SUBSELF# ]
              : That sounds kinda like "self suck".
    
    #SUBSELF# : Explosion Size Might Look "off-by-1"
              : But rembember , if you have a 
              : 10 long explosion leaking 5 cells OOB,
              : you __DONT__ emit a 5 in adjacent room.
              : You emit a 4 with an explosion origin
              : at the adjacency.
              [B]: Bomb Origin.
              [E]: Emitted Origin
              |<-------------- 11 -------------->|
              [B][1][2][3][4][5]  [6][7][8][9][10]
              [ ][ ][ ][ ][ ][ ]  [E][1][2][3][ 4]
              |<---- ROOM ---->|  |<--ADJACENT-->|
              
    #ETRUNK# : Explosion Truncation.
    
    #_BLP_# : Backup Loop Prep , setting value to invalid
            : value so that the first time the value is
            : used after being incremented it is the
            : first VALID value.
            
    @P_I_A_I@ : Programmer_Is_An_Idiot
              : The error is not bad data.
              : The error is not IO/device error.
              : The error is not caused by user input.
              : The error is a bug that is programmer's fault.
              
    @PII@ : Programmer Is Idiot  (synonym:P_I_A_I)
    @PIS@ : Programmer Is Stupid (synonym:P_I_A_I)
    
    @SLF@ : SELF reference.
    
    #NOMORE_TILL_1STPLAY# :
        
        There are more slots for bomb types. But don't
        make up any more types of bombs until AFTER
        you have a 1st playable.
        
    #_why_bt0_bad_# :
    
        bt0 cannot be a valid bomb type because we need
        a completely blank uint32 ( 0x00000000 ) to mean
        that "no damage / flames have ever been here"
        
    #_why_btf_bad_# :
    
        btf cannot be a valid bomb type because we need
        a way to design levels where the geometry is
        already damaged at start of [game/level/room].
        
        We will do this by making the highest u32 value
        ( 0xFFFFFFFF ) mean "damaged from beginning of time"
        
    #_FEATURE_CREEP_ALLOW_AFTER_1ST_PLAYABLE_# :
    
        I like these ideas , but don't code support
        for them until after we have a 1st playable.
        
        We might change our mind for what game
        mechanic should be added.
        
    #_why_fd0_bad_# : Zero needs to be reserved for
                    : "untouched by flames"
                    
    #_why_fdf_bad_# : 0xF needs to be reserved for
                    : "always damaged since beginning"
                    : "of time/game"
                    
    ADJ_ROOM_EXISTS : Adjacent Room Exists
    KIT_ROOM_EXISTS : Kitty Corner Room Exists
    
    @lat@ : Means LATERAL  in HOTEL13 system.
    @dia@ : Means DIAGONAL in HOTEL13 system.
    
    @deton_x@   : REFACTORED_TO[ dog_x ]
    @deton_y@   : REFACTORED_TO[ dog_y ]
    @explo_lef@ : REFACTORED_TO[ lef_t ]
    @explo_rig@ : REFACTORED_TO[ rig_t ]
    @explo_top@ : REFACTORED_TO[ top_t ]
    @explo_bot@ : REFACTORED_TO[ bot_t ]
    
    @dog_x@ : Detonation OriGin . X
    @dog_y@ : Detonation OriGin . Y
    
    @lef_t@ : explosion Tendrill length ) LEFT
    @rig_t@ : explosion Tendrill length ) RIGHT
    @top_t@ : explosion Tendrill length ) TOP
    @bot_t@ : explosion Tendrill length ) BOTTOM
    
    #LATOS# : Lateral  Offset Formula For Quarkmap Structure
    #DIAGOS#: Diagonal Offset Formula For Quarkmap Structure
    #DIAGO# : #DIAGOS# without the S so same len as #LATOS#
    
    @tik_sec@ : You want[ d_tik ]
    
    @tik_bom@ : Timestamp encoded into BOMB value.
    @tik_fad@ : Timestamp encoded into FADA value.(Flame/Damage)
    @tik_til@ : Timestamp encoded into TILE value.(MightNotNeed)
    
    #tik_til# : -------------------------------------------:
    :                                                      :
    :   We might not need to encode time values into tile  :
    :   values. It would probably be better if we DIDNT    :
    :   because then we will only get to have...           :
    :                                                      :
    :       TIMESTAMP                     TIMESTAMP        :
    :       RERSERVED                     RERSERVED        :
    :       NYBLE VAL                     NYBLE VAL        :
    :       V                             V                :
    :       0 1 2 3 4 5 6 7 8 9 A B C D E F                :
    :         | | | | | | | | | | | | | |                  :
    :         1 2 3 4 5 6 7 8 9 10  12  14 <--FOURTEEN(14) :
    :                             11  13                   :
    :                                                      :
    :   We will only get to have 14 tile values because    :
    :   the rest will be used to encoding tilestamp.       :
    :                                                      :
    :   How would that even work with auto tiling?         :
    :                                                      :
    :   Only 14 tile types would help limit me from        :
    :   over-designing...                                  :
    :                                                      :
    :   0xF00000000 <-- Diagram is looking at the bits     :
    :                   of the last nyble. Wait...         :
    :                                                      :
    :                   That is 4 bits.. not 8...          :
    :                                                      :
    :                   1111 === 15 in decimal.            :
    :                                                      :
    :                   No, that's correct.                :
    :------------------------------------------------------:
    
    REFACTOR : [ rid ] ==>[ r13 ] ( 13 rooms in hotel )
    REFACTOR : [ gid ] ==>[ g25 ] ( 25 grid slots in  )
                                  ( which room may or )
                                  ( may-not exist     )
                                  
    @rgw@ : RoomGrid WIDTH  (of one room cell) JUST_USE[ g_w ]   
    @rgh@ : RoomGrid HEIGHT (of one room cell) JUST_USE[ g_h ]
    
    @rid@ : Room ID , use r13 because 13 of them.
    @gid@ : Grid ID , use g25 because 25 of them.
    
    @r13@ : Room ID , 13 of them 0-to-12 so call r13
    @g25@ : Grid ID , 25 of them 0-to-24 so call g25
    
    @dpx@ : Data_Pixel_X : Encodes [Tile|Bomb|Fada]
    @dpy@ : Data_Pixel_Y : Encodes [Tile|Bomb|Fada
    
    @h_x@ : USE[ h4x ]HotelRoomX ( in terms of raw data layout )
    @h_y@ : USE[ h4y ]HotelRoomY ( in terms of raw data layout )
    
    @h4x@ : Hotel(room)X : In terms of DATA layout , not VIEW.
    @h4y@ : Hotel(room)Y : In terms of DATA layout , not VIEW.
    
    @r13_h4x@ : r13 ==to==> h4x
    @r13_h4y@ : r13 ==to==> h4y
    
    @DATA_EQ_VIEW@ : Data Equals View , how the data is
                   : packed is equal to how the data is
                   : rendered. This is not always the case.
                   :
                   : Your mental conception of the physical
                   : layout of the data should be the same
                   : for this variable for both imagining
                   : the FINAL RENDER and imagining how the
                   : datapoint is fetched from PIX2048.
                   
    [LATERAL_OS]    : Lateral offset to data we want.
    [SPAN_IN_TILES] : The tilemap [ WIDTH == HEIGHT ]
                    : I use[ san ]when width is always
                    : equal to height. Because it makes
                    : [ wid ]and[ hig ]variables
                    : redundant.
                    
    @dog@     : Detonation Origin
    @pog@     : Pixel_Origin
    @pog_t_x@ : Pixel_OriGin : Tile_X
    @pog_t_y@ : Pixel_OriGin : Tile_Y
    
    #CHECKER_MODULO_SNIP# :  if( (t_x%2)==(t_y%2) ){ ... };;
    
    #WHY_UTM_ONLY_CALLED_HERE# :
    
        When I cut+paste HOTEL13 into server.js , I want
        to give[ server.js ]the option as to whether
        it wants to invoke HOTEL13 unit tests. Thus
        unit tests only go off automatically when
        HOTEL13 code detects it is in stand alone mode(SAM).
        
    @SAM@ : Stand_Alone_Mode
    @sam@ : Stand_Alone_Mode
    
    #DIA_CITY_2048# :
    
        |<--------- d_pix2048 --------->|
        +--512--+--512--+--512--+--512--+   
        |       |       |       |       | ACTIVE LEVEL PACK:
        |hot_t_l|hot_top|hot_t_r|       | 
        |       |       |       |       |   HOT_CEN
        +-------+-------+-------+-------+
        +--512--+--512--+--512--+--512--+
        |       |edi_c_x|       |       | ADJACENT LEVEL PACK:
        |hot_lef|HOT_CEN|hot_rig|       |
        |       |edi_c_y|       |       |   HOT_LEF
        +-------+-------+-------+-------+   HOT_RIG
        +--512--+--512--+--512--+--512--+   HOT_TOP
        |       |       |       |       |   HOT_BOT
        |hot_b_l|hot_bot|hot_b_r|       |
        |       |       |       |       | KITTY CORNER  
        +-------+-------+-------+-------+       LEVEL PACK :
        +--512--+--512--+--512--+--512--+
        |       |       |       |       |   HOT_T_L
        |       |       |       |       |   HOT_T_R
        |       |       |       |       |   HOT_B_L
        +-------+-------+-------+-------+   HOT_B_R
        
    @mbi@ : Max_Byte_Index ( of pixel array )
    
    @2022_07_06@ : If I die it is because gramps was
                 : over-ambitious passing cars on
                 : a 2-lane highway. 854PM.
                 
    @2022_07_06@ : If I die it's because gramps keeps
                 : an unsafe following distance when
                 : trying to pass cars.

    @caw@ : CAnvas_Width
    @cah@ : CAnvas_Height

    @gcw@ : Grid_Cell_Width ( AKA : g_w )
    @gch@ : Grid_Cell_Height( AKA : g_h );

    @lat@ : Lateral Offset In Data To Another Layer Of Data.
          : ALSO the size of the tilemap for a given
          : tile size exponent.
          :
          : if lat==64 , you are looking at te7==0 tile size.
          : ( the "alice sized" tiles )
          : ( or should I say... "Ivy sized tiles" now ? )

    @lmx@ : Lateral_Multiplier_X ( HOTEL13 System )
    @lmy@ : Lateral_Multiplier_Y ( HOTEL13 System )

    #r_x# , #r_y# : Hotel13_Room_XY:[ [h_x,h_y] or [g_x,g_y] ]
    @r_x@ , @r_y@ : Hotel13_Room_XY[ [h_x,h_y] or [g_x,g_y] ]

    #h_x# , #h_y# , #g_x# , #g_y# :--------------------------::
                                                             ::
    |<----- render positions ---->|   |<--- data positions -->|
    +-----+-----+-----+-----+-----+   +-----+-----+-----+-----+
    |     |     | g_x |     |     |   | h_x | h_x | h_x | h_x |
    |     |     | g_y |     |     |   | h_y | h_y | h_y | h_y |
    +-----+-----+-----+-----+-----+   +-----+-----+-----+-----+
    |     | g_x | g_x | g_x |     |   | h_x | h_x | h_x | h_x |
    |     | g_y | g_y | g_y |     |   | h_y | h_y | h_y | h_y |
    +-----+-----+-----+-----+-----+   +-----+-----+-----+-----+
    | g_x | g_x | g_x | g_x | g_x |   | h_x | h_x | h_x | h_x |
    | g_y | g_y | g_y | g_y | g_y |   | h_y | h_y | h_y | h_y |
    +-----+-----+-----+-----+-----+   +-----+-----+-----+-----+
    |     | g_x | g_x | g_x |     |   | h_x |     |     |     |
    |     | g_y | g_y | g_y |     |   | h_y |     |     |     |
    +-----+-----+-----+-----+-----+   +-----+-----+-----+-----+
    |     |     | g_x |     |     |                          ::
    |     |     | g_y |     |     |                          ::
    +-----+-----+-----+-----+-----+                          ::
    :                                                        ::
    [ g_x , g_y ] is the cell coordinate of a given          ::
    :             [ level / room / hotel room ]              ::
    :             in __PHYSICAL_RENDER__ space.              ::
    :                                                        ::
    [ h_x , h_y ] is the cell coordinate of a given          ::
    :             [ level / room / hotel room ]              ::
    :             in ___TEXTURE_DATA___  space.              ::
    :                                                        ::
    :  @g25@== 1D index form of[ g_x , g_y ]                 ::
    :  @r13@== 1D index form of[ g_x , g_y ]with the         ::
    :          void-rooms removed.                           ::
    :  @h16@: Hypothetically , the 1D index form             ::
    :       : of[ h_x , h_y ], but we have never             ::
    :       : needed this in any calculations.               ::
    :       :                                                ::
    :       : CORRECTION: h16 == r13 , AVOID @h16@           ::
    :       : because we don't want synonymous               ::
    :       : variables running around.                      ::
    :                                                        ::
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


    @ti0@ : 1D index form of [ t_x , t_y ].
          : Because the number of valid values held
          : varies depending on the tile size exponent(te7),
          : we denote the capacity as ZERO( 0 )to
          : signify variant.
          :
          : ti0 == [ ti1 , ti2 , ti4 , ti8 , t16 , t32 , t64 ]
          : te7 == [   6 ,   5 ,   4 ,   3 ,   2 ,   1 ,   0 ]

    @UEC@  : Un_Expected_Case            ( AKA: EDCL )
    @EDCL@ : Expected_Dead_Code_Line     ( AKA : EUB )
    @EUB@  : Expected_Unreachable_Branch ( AKA : EUC )
    @EUC@  : Expected_Unreachable_Code ..(okayletsstopthis)

    @NEXI_FLAKES@ : d3m0.herokuapp.com/not_inf/nexif_app.html

    #_FUTURE_TICKS_HIT_LATER_NOT_NOW_# :-----------------------:
                                                               :
        Original Comment :                                     :
                                                               :
            Tiles , Bombs , and Fada all encode timestamp      :
            information in them. I don't know what good        :
            timestamps in the TILES are for , but timestamps   :
            in the other stuff makes it so we can correctly    :
            animate the bombs and flames.                      :
                                                               :
            Hell, with all the timestamp info, we can          :
            "replay" the level destruction if we want.         :
                                                               :
            We would just need to record player position       :
            at given timestamps too.                           :
                                                               :
            How many positions can we record in a 512x512 ?    :
            262144 if we need 2 pixels to encode XY position.  :
            That is #FEATURE_CREEP#. Just keep it in mind.     :
                                                               :
            DATE[ 2022_07_07 ]KANJICODER                       :
                                                               :
        Pissed Off KanjiCoder Date[ 2022_07_09 ]               :
                                                               :
            That entire rant doesn't answer WHY or WHAT        :
            "FUTURE_TICKS_HIT_LATER_NOT_NOW" means.            :
                                                               :
            I know if means that we ignore either older        :
            or newer timestamps and DONT SET THE TILE          :
            if so... but...                                    :
                                                               :
            1. Do we ignore older or newer timestamps?         :
            2. Why do we ignore older or newer timestamps?     :
                                                               :
            DECISION: FUCK THIS... It is a source of bugs      :
            right now, we don't remember our reasoning for     :
            why one timestamp should have priority over        :
            the other, and our reasoning is probably           :
            PLANNING_TOO_FAR_AHEAD anyways.                    :
                                                               :
            Get rid of[ i_tik ]parameter in                    :
            function[ F_HOTEL13_HIT_R13_TE7_LA3_TI0 ]          :
                                                               :
    :----------------------------------------------------------:

    #_NO_ITS_NOT_A_TIME_TRAVEL_GAME_# :------------------------:
                                                               :
        TAG[ not time travel ]                                 :
                                                               :
        No, it's not a time travel game. We encode the         :
        game ticker value as a timestamp in the tile           :
        value in order to optimize animations and              :
        collisions with the bomb system.                       :
                                                               :
        By setting flames at least 2 frames in the future,     :
        we don't have to do a 2-pass "set flames" then         :
        "ignite bombs". We can "set flames" and                :
        "ignite bombs" in ONE PASS and not worry about         :
        weird effects because of data visiting order.          :
                                                               :
        Don't know what I mean? Try writing a BLURR            :
        filter that acts DIRECTLY on an RGBA byte              :
        array encoded image without a SWAP BUFFER.             :
        You will end up with streaking based on the            :
        scan-line order in which you visted each pixel.        :
                                                               :
        The SIMULATION outcome of bomb system should not       :
        change based on the order in which we visit            :
        the data.                                              :
                                                               :
        DATE[ 2022_07_07 ]KANJICODER@428ALMOSTBLAZEITPM        :
                                                               :
    :----------------------------------------------------------:

    #_I_TAKE_IT_BACK_2022_07_09_# :----------------------------:
                                                               :
        Using timestamps to affect collision detection         :
        and tile detection is a GOOD IDEA that could           :
        be key to solving problems in the __FUTURE__           :
        but not good for solving problems ___NOW___            :
        so take the[ i_tik ]parameter out of any               :
        tile setting functions that are using[ i_tik ]         :
        exclusively for collision.                             :
                                                               :
    :----------------------------------------------------------:


    @d_p@ : DataPixel ( Means[ dpx , dpy ] )

    @lax@ : YOU_MEAN[ @lmx@ ]( LAT - Multiplier X )
    @lay@ : YOU_MEAN[ @lmy@ ]( LAT - Multiplier Y )

    #lmx# : Lateral_Multipler_X
          : The multiplier to apply to LAT (lateral offset)
          : to select the correct layer of data in texture.

    #lmy# : Lateral_Multipler_Y
          : The multiplier to apply to LAT (lateral offset)
          : to select the correct layer of data in texture.

    #_DIFFERENT_ZEROS_# :

        I am not certain what different ZERO values should
        mean with different time stamps. I am thinking
        we could use this as a way to animate empty space.

        Give some type of atmospheric effect.

        We could also animate auto-tiling if we wanted
        to, to make the world feel alive. A lot of
        potential with these timestamps.

        Worry about the meaning after we have a 
        first playable.

    #_BIGGER_TILES_FIRST_# :  ( less bigger  tiles )
    #_SMALLER_TILES_NEXT_# :  ( more smaller tiles )

        If bombs are going off like crazy all over the place,
        checking for intersection with BIGGER CELLS  
        first is going to optimize the simulation speed
        drastically.

    #_ABOVE_BEFORE_BELOW_# : See: #_BIGGER_TILES_FIRST_#
    
        This phrase was confusing because bigger tiles are
        higher[ te7 ]but they are LOWER in the render order.

    #_BELOW_AFTERR_ABOVE_# : See: #_SMALLER_TILES_NEXT_#

        This phrase was confusing because SMALLER tiles 
        are lower[ te7 ]but they are HIGHER in the
        render order.

    @dibamis@ : DivideIfBigger _and_ MultiplyIfSmaller
    @te7_cur@ : Current te7 value you are at.
    @te7_big@ : A BIGGER  tile size you are targeting.
    @te7_lit@ : A LITTLER tile size you are targeting.
    @te7_tar@ : Generically[ te7_big -OR- te7_lit ]

    #dibamis# : -----------------------------------------------:
                                                               :
        " A problem well defined is a problem half solved. "   :
                                                               :
        THUS: Have clear variable names. That doesn't mean     :
              "pronounced like english" that means             :
              "dibamis" has a very specific meaning in         :
              my code.                                         :
                                                               :
        Problem Setup:                                         :
    ////- - - - - - - - - - - - - - - - - - - - - - - - - -////:
                                                               :
            @ttx@ == @tar_t_x@ ( target t_x )                  :
            @tty@ == @tar_t_y@ ( target t_y )                  :
                                                               :
           +------------+-----_B-----+                         :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|                         :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|                         :
           |[ ][ ][ ][ ]|[A][ ][ ][ ]|                         :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|  A == [ 4 , 2 ]         :
           +------------+------------+  t_x = 4                :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|  t_y = 2                :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|                         :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|  _B == [ 1 , 0 ]        :
           |[ ][ ][ ][ ]|[ ][ ][ ][ ]|  tar_t_x = 1            :
           +------------+------------+  tar_t_y = 0            :
                                                               :
                    [0] [1] [2] [3]  [4]  [5]  [6]             :
                     |   |   |   |    |    |    |              :
            te7_peb[ 1 , 2 , 4 , 8 , 16 , 32 , 64 ];           :
                                                               :
        Target is LARGER Tile :  #_DIBAMIS_DIV_# ( A --> _B )  : 
    ////- - - - - - - - - - - - - - - - - - - - - - - - - -////:
                                                               :
           te7_cur =( 0 );                                     :
           te7_tar =( 2 );                                     :
           dibamis = d_hotel13_te7_peb[ (te7_tar-te7_cur) ];   :
    ttx    tar_t_x =( t_x / dibamis );                         :
    tty    tar_t_y =( t_y / dibamis );                         :
                                                               :
           dibamis = 4                                         :
    ttx    tar_t_x =( 4 / 4 ) == 1                             :
    tty    tar_t_y =( 2 / 4 ) == 0                             :
                                                               :
        Target is SMALLER Tile : #_DIBAMIS_MUL_# ( _B --> A )  :
    ////- - - - - - - - - - - - - - - - - - - - - - - - - -////:
                                                               :
            te7_cur =( 2 ); //: _B ://                         :
            te7_tar =( 0 ); //:  A ://                         :
            dibamis = d_hotel13_te7_peb[ (te7_cur-te7_tar) ];  :
    ttx     tar_t_x =( t_x * dibamis );                        :
    tty     tar_t_y =( t_y * dibamis );                        :
                                                               :
            dibamis = 4                                        :
    ttx     tar_t_x =( 1 * 4 ) == 4                            :
    tty     tar_t_y =( 0 * 4 ) == 0                            :
                                                               :
        :------------------------------------------------------:

    @bidamis@ : Mis-spelling of[ dibamis ]

    #tx0_tx1_ttx# :
        
        @tx0@ : Starting[ ttx ]value. ( ttx === t_x , but loop )
        @tx1@ : Ending[   ttx ]value. ( ttx === t_x , but loop )

    #ty0_ty1_tty# :
        
        @ty0@ : Starting[ tty ]value. ( tty === t_y , but loop )
        @ty1@ : Ending[   tty ]value. ( tty === t_y , but loop )

    JUST_RUN_THE_DAMN_CODE:-----------------------------------:
                                                              :
        .... I am a bit stuck here.... Let's just run         :
        .... the code and see if it works. ..........         :
                                                              :
        |<==================== te7 == 6 ===================>| :
        |<========= te7 == 5 ====>|                           :
        |<= te7= 4 =>|                                        :
        +------------+------------+------------+------------+ :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        +------------+------------+------------+------------+ :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[B][ ][ ][ ]| :     
        +------------+------------+------------+------------+ :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        +------------+------------+------------+------------+ :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :
        |[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]|[ ][ ][ ][ ]| :     
        +------------+------------+------------+------------+ :
                                                              :
    :---------------------------------------------------------:

    @dibomis@ : Mis_Spelling of [ dibamis ]
              : NOT[ dib  or  mis ]
              : YES[ dib and  mis ]

    @edi_fps@ : You mean[ tik_fps ]but_you_need[ d_fps ]

    #_TE7_BEFORE_LA3_# : TE7 is more general  , thus 1st.
    #_LA3_AFTERR_TE7_# : LA3 is more specific , thus 2nd.

        When thinking about the data layout and how we
        access the [ dpx , dpy ], we need to know TE7
        before we need to know LA3. Thus, this solves
        the question of which variable is more general
        or specific than the other. KANJICODER[2022_07_09]

    @ldx@ : Level_Data( origin ) - X
    @ldy@ : Level_Data( origin ) - Y

    [BSM] : Bit_Shift_Math

    #_NOPLASMA_HERE_# :
        I originally was thinking BOM_014 & BOM_015 slots
        could be "Green_Plasma" and "Red_Plasma".
        
        I still like this idea. But don't put plasma in
        the bomb layer. Plasma belongs in the "FADA"/"FAD"
        layer.

        If you put plasma in bomb layer than bombs can
        never be layed on TOP of that plasma because they
        occupy the same tile space.
        
        DATE[ 2022_07_10 ]KANJICODER

    #_PILL_SHAPE_LOOKS_UGLY_# :

        Pill shape for bombs was ugly. Change design 
        to rounded box boarders.

    @edi_t16@ : YOU_MEAN[ edi_v16 ]
    @edi_v16@ : Editor Tile Value 0-to-15 inclusive.
    
    @tikadel@ : Ticker Delta between game ticker and
              : time value in the tile.


    #_PUT_TILE_SITE_OF_INTEREST_#  / #PTSOI# :

        This tag is used for areas for "set tile"
        code is happening. For places I should be
        looking if I am interest in that logic.

        TAG[ set tile | set_tile | settile ]==>[#PTSOI#]
        TAG[ put tile | put_tile | puttile ]==>[#PTSOI#]
    
    @edi_tik@ : You mean[ d_hotel13_sam.tik_num ]
    @edi_tim@ : You mean[ d_hotel13_sam.tik_num ]

    #GFDI0123# : GOD_FUCKING_DAMNI_IT_0123

        You forgot the +0,+1,+2,+3 in your fucking bit
        shifting. Why is it so easy for me to fuck this
        simple shit up and then not see it when I am
        inspecting it?

    @PARANOID@ : Something that makes me scared my code
               : is wrong.

    #_320_BLAZE_IT_# :

        320 tiles is the width of a level pack in
        [alice/ivy]sized tiles. This is the blast length
        we need to create an "infinite lazer" effect.

        Laser stops at the first tile it hits. Unless the
        tile is indestructable, the laser deletes that
        tile. If laser pulses on+off or stays on, it 
        will eventually drill to edge of level or be
        stopped by indestructable material.

        Also could be re-directed by laser diode.

        Laser diode can be destroyed by bombs, but
        laser diode will re-direct laser blasts.

        ECHO BOX BOMB : High   Destructivity
        CLASSIC BOMBS : Medium Destructivity
        LAZER  BLASTS : Low    Destructivity
        SPARKPINS     : ZERO   Destructivity (but can trip     )
                                             (bomb fuses and   )
                                             (cause lazer diode)
                                             (to emit laser    )

+------------------------------------------+
| NOW_DATE[ 2022_7_11 ]TIME[ 0223 ]PM      |
| Try to add all comments to bottom of     |
| file chronologically from now on.        |
+------------------------------------------+

    #ATF_RANDINT# : RANDINT returns a random integer
                  : between 0 and the inclusive upper
                  : bound provided.

    #SAB_DAM# : Sorted_Ascending_By _ DAMage level/strength

    #SAB_DAM_BOD# : SAB_DAM , for Body Style Enums
    #SAB_DAM_SIG# : SAD_DAM , for Insignia/Decal Style Enums

    #_SPARKPINS_# :

         ( immediately detonate when touched )
         ( they emit a 1x1 box blast pattern )
         ( but do __NOT__  hurt player       )

    #SAB_DAM_REN# : SAB_DAM , for bomb render settings.

    #SAB_DAM_DEC# : SAB_DAM , for decal bitmaps.

    #_LIGHT_FIXTURES_ARE_THE_WEAKEST_#

        Light fixtures are head bashable, it makes sense
        to make them WEAKER than non-lights that are 
        also head bashable.

    #SAB_DAM_HCP_TIL# : SAB_DAM , for geometry tile pallet.
    #SAB_DAM_HCP_BOM# : SAB_DAM , for bomb color pallet
    #SAB_DAM_HCP_FAD# : SAB_DAM , for FADA color pallet

    #_HIDE_DAMAGED_TILES_# / #_DONT_RENDER_DAMAGED_TILES_# :

        If the tile we are trying to render exists over
        FADA that exists in the present, do not render
        the tile.

    @dpx_fad@ : DataPixel_X : FADA information
    @dpy_fad@ : DataPixel_Y : FADA information
              : dpx_fad & dpy_fad is not the final tile
              : value, but the origin of ALL FADA for
              : the current tile size.

    @dit_fad@ : You mean[ dti_fad ]

    @COMDEX@  : component index ( pixel_index * 4 )

    #TV4B# : TileValue is 4Bit number. ( BIN[1111]==0 to 15 )

    #LEAVES_PARTIAL# : make angled tiles leave some ladders
                     : but not all ladders. Only leaves 
                     : ladders on the sections that rendered
                     : as FULL BLOCKS , without angled
                     : sections.

    #_WHY_LINES_LOOK_UNEVEN_# :

        Lines look uneven because the width of line
        is not INSET INTO THE SQUARE , so the order
        of draw calls that crate flat-black over each
        level will end up chopping off the RIGHT 
        and BOTTOM sections of the line around the
        currently active level.

        I AM NOT GOING TO FIX THIS. Just don't make 
        the line so thick that this looks horribly
        lop-sided and ugly. Line thickness of two
        makes lopsided line, but the lopsidedness doesn't
        look asthetically ugly.

        NOW_DATE[ 2022_07_11 ]TIME[ 0548PM ]

    #_SEE_FRACTAL_DAMAGE_# :

        We need basic auto tiling to observe the fractal
        damage effects from the OBLITERATION( OBE )
        function. I don't want to get too heavy into
        render code, but we need the bare minimum to
        observe what is happening to the tiles.

        NOW_DATE[ 2022_07_11 ]TIME[ 0704PM ]

        @dtx_ata@ : DataTileX : AutoTileAlgorithm
        @dty_ata@ : DataTileY : AutoTileAlgorithm
        @dti_ata@ : DataTileI : AutoTileAlgorithm
        @c_i_ata@ : DataTileC : AutoTileAlgorithm
        @dtu_ata@ : DataTileU : AutoTileAlgorithm
               
        @t_v_ata@ : TileValue : AutoTileAlgorithm
        @t_t_ata@ : TileTime  : AutoTileAlgorithm

        @ata@ : Auto_Tile_Algorithm

        @at4@ : AutoTile_4 ( 4 numbers for 4 sides we   )
                           ( can check when auto tiling )       
                           ( at4 == 0 to 3 inclusive    )

        @atx@ : Autotile_Translate : X 
        @aty@ : Autotile_Translate : Y 

        @aeh@ : Autotile_Edge : HEIGHT
        @aew@ : Autotile_Edge : WIDTH

    #ATA_TILE# : AutoTileAgorithm : TILE section

        We need to get adjacent tile value for auto
        tile agorithm rendering.

    #ATA_FADA# : AutoTileAgorithm : FADA section
    
        Correct auto tiling also requires we know
        the "FADA" value of a tile. If a value is
        "destroyed" it is considered another 
        type of tile. Destroyed tiles do not
        auto-tile with intact tiles.

    #_DONT_LATCH_TO_DAMAGED_# :

        For auto tiling to render correctly we cannot
        consider a DAMAGED tile of the same type to
        be a "neighbor".

        Say we have tile type "AYEBITCH" .

        Intact    "AYEBITCH" tiles auto tile with each other.
        Destroyed "AYEBITCH" tiles auto tile with each other.

        But an Intact "AYEBITCH" will not tile with a
        Destroyed "AYEBITCH" because they consider 
        themselves two different tiles.

        Or in other words, the financially ruined
        "AYEBITCH" no longer gets to hang out with
        her rich "AYEBITCH" tiles because while they
        are both "AYEBITCH"s, they are two seperate
        CLASSES/CATEGORIES now.

        NOW_DATE[ 2022_07_11 ]TIME[ 808 ]PM 

        @pixdex@  : Pixel data index
        @comdex@  : Component of pixel index
        @pixu32@  : Pixel uint32 value

        @dtx_atf@ : DataTile - X - AutoTileFada
        @dty_atf@ : DataTile - Y - AutoTileFada
        @dti_atf@ : DataTile - I - AutoTileFada (@pixdex@)
        @c_i_atf@ : DataTile - C - AutoTileFada (@comdex@)
        @dtu_atf@ : DataTile - U - AutoTileFada (@pixu32@)
                  
        @t_v_atf@ : TileValue ---- AutoTileFada
        @t_t_atf@ : Tile_Type ---- AutoTileFada

        @t32@ : Tile Value 0 to 31 inclusive. ( 5 bits )
        @a32@ : ADJACENT AUTO TILE NEIGHBOR TILE VALUE
              : ( also 5 bits, 0 to 31 inclusive )

    #_MAKE_5_BIT_TILE_VALUES_#

        Use bitshifting to pack on a 1 bit to end of
        4bit tile value if damage (FADA) exists in
        the same space as the tile.

        We are not going to create different kinds of
        damaged tiles based on what kind of damage 
        it is... Too many combinations AND it would
        make it statistically unlikely to ever see
        damaged tiles auto-tile with each other.

    #_LETS_NOT_MAKE_THINGS_CATCH_FIRE_# :

        The idea of a spreading fire sounds like a fun
        feature. But too much complexity. Get a game
        working first.

    @fimar@ : Falling Iron MARble
    @fibem@ : Falling Iron BEam ( horizontal beam )
    @firon@ : Falling IRON (        vertical beam )

    #_DIA_TIL_FAD_BOM_# : WRONG_FIX[ _DIA-TIL-BOM-FAD_ ]
    #_DIA_BOM_FAD_TIL_# : WRONG_FIX[ _DIA-TIL-BOM-FAD_ ]
    #_DIA_BOM_TIL_FAD_# : WRONG_FIX[ _DIA-TIL-BOM-FAD_ ]
    #_DIA_FAD_BOM_TIL_# : WRONG_FIX[ _DIA-TIL-BOM-FAD_ ]
    #_DIA_FAD_TIL_BOM_# : WRONG_FIX[ _DIA-TIL-BOM-FAD_ ]

    #_DIA_TIL_BOM_FAD_# :--------------------------------------:
    |                                                          :
    |   Quarkmap Structure Holding Tile, Bomb and Fada         :
    |   data at different lateral offsets.                     :
    |                                                          :
    |  [T]-------[B]--------+   [T]&t : [@til_o_x@,@til_o_y@]  :
    |   |         |         |                                  :
    |   |   TIL   |   BOM   |   [B]&b : [@bom_o_x@,@bom_o_y@]  :
    |   |    0    |    1    |                                  :
    |  [F]--------t----b----+   [F]&f : [@fad_o_x@,@fad_o_y@]  :
    |   |         | til|fad |                                  :
    |   |   FAD   f----+----+  <-- #_DIA_T_B_F_#               :
    |   |    1    | bom|[][]                                   :
    |   +---------+----+[]                                     :
    |                                                          :
    |   @c_lay_til@ : ZERO( 0 )  lmx=( 0 ) lmy=( 0 )           :
    |   @c_lay_bom@ :  ONE( 1 )  lmx=( 1 ) lmy=( 0 )           :
    |   @c_lay_fad@ :  TWO( 2 )  lmx=( 0 ) lmy=( 1 )           :
    |                                                          :
    |   @lmy@ : Lateral Multiplier Y ( final_lat_y = lat*lmy ) :
    |   @lmx@ : Lateral Multiplier X ( final_lat_x = lat*lmx ) :
    |                                                          :
    :----------------------------------------------------------:

    DAY_START[ 2022_07_12 ]TIME[ 121 PM ]

        We need to get the obliterate( OBE )function
        working. But before we can do that, we need 
        enough feedback to visually verify the 
        different bomb states.

    #_TRIPPED_BOMBS_SHOULD_LOSE_COLOR_# :

        Tripped bombs will lose their color.
        A tripped bomb is any bomb with a non-zero
        time value.

    @hot_tik@ : YOU_MEAN[ tik_num ]

    #_TIME_NOSTART_ZERO_# / #TIMEWAVEZERO# :

        Ticker time starts at 1 hour in the future 
        for 60FPS. That means if game is 30FPS the ticker
        is 2 hours in the future.

        Treat this as a guarantee that the ticker has
        started 1 hour (not 2) in the future.

        Q : WHY DO WE NEED THIS ?
        A : If we want to manipulate the time it takes a
          : bomb to trip depending on if touched by user
          : or touched by flames, we will need to
          : BACKDATE the tick time.
          :
          : Set the timecode in the bomb tile to an EARLIER
          : time than what [ d_tik / tik_num ]actually is
          : in order to cause quicker detonation.

          NOW_DATE[ 2022_07_12 ]TIME[121]PM

    #_TIK_NUM_REMOVED_# :
        
        We removed "tik_num" because I anticipate that
        being a source of immense pain if we are to
        cut+paste this code into the main code base
        with zero problems. DATE[2022_07_12]TIME[143]PM

    @ttd@ : Ticks_Till_Detonation
          : A value of "ZERO" means "NEVER". The bomb is
          : "un tripped"
          :
          : Could also think of it as "Time To Die"

    @b16@ : Uint32 bomb value, 0 to 15 inclusive.
          :(16 possible values)

    @tdd@ : NO FUCKING TEST DRIVEN DEVELOPMENT HERE.
          : Did you mean[ ttd ] ?

    @i_t16@ : Did you mean[ i_ttd ]?

    #TRIPTIK_AND_FLASTIK# :

       @TRIPTIK@: Is the number of frames that the bomb
                : stays "turned on" / "glowing" after you
                : have passed by it.

       @FLASTIK@: After the bomb is done glowing and 
                : the time to detonation is even closer,
                : the bomb begins to flash/strobe.
                :
                : FLASTIK is the number of frames this
                : will happen for.

    @t_m@ : Tick Multiplier. We design around 30FPS and
          : [ scale / multiply ] some values if the
          : frame rate of the game ends up something
          : faster. Like 60FPS for instance.

    #_POSITIVE_LIVETIK_# :
        
        Time To Die ( ttd ) values need to be non-zero
        because 0 flags bomb ass "untripped" so even
        instant kill bombs need at least 1 frame of
        delay.

        Put that 1 frame in the flashing time rather
        than the tripping time.
       
    @bombage@ : BOMB_AGE ( how old is bomb since time it )
                         ( was [activate/tripped] ?      )


    #_TIK_FPS_REMOVED_# 
        
        Removing[ tik_fps ]and using[ d_fps ]so that we
        don't run into weird problems after we cut+paste
        this code into the main engine.
        
    @d_hotel13_targmil@ : USE[ d_hotel13_tms ]

    @d_hotel13_tms@ : Target_Milli_Seconds

    @d_hotel13_old@ : USE[ d_hotel13_t_0 ]
    @d_hotel13_now@ : USE[ d_hotel13_t_1 ]

    @d_hotel13_livetik@ : YOU_MEAN[ d_hotel13_ttd_livetik ]

    #_TIME_TO_DIE_NOTES_# 

        Original Notes :

            //:------------------------------------------://
            //-CurrentTime( d_tik )Plus TimeToDie(i_ttd) -//  
            //-give us framesToLive( u32_tik ).          -//
            //+ABOVE WRONG... That puts the bomb in the  +//
            //+FUTURE!! We want a bomb set right NOW     +//
            //-Must Add 1 because instant-kill bombs     -//
            //-have ZERO DELAY. But if[ u32_tik ]is zero -//
            //-that flags them as[ not tripped ].        -//
            //+InstantKill's[ ttd ]must be at least 1.   +//
            //:------------------------------------------://
            
            //- u32_tik =( d_tik + i_ttd ); WRONG        -//

        More Notes :

            Currently we need a way to adjust time to die
            if we desire to speed up it's death because
            was tripped by FLAME rather than ALICE/IVY.

            [TODO:FLAME_TRIP_ADJUSTMENT]

            To do this, we need to compare the inputted
            [ i_ttd ]with the timespan of
            [ d_hotel13_ttd_livetik ].

    [FINISH_GET_ANY] : WHERE THE FUCK IS THIS TEXT?
        
    #_D_B_T_ERASER_# : Dont block the eraser.

    #_FRAME_DELAY_NOT_MSEC_DELAY_# :

        I am being an idiot. The[ ttd ]values are
        ____FRAME____ delays. ( not millisecond delays ).

        A value of 100 at 30fps is 3.33 seconds.

        So... The code __IS__ working properly.

        NOW_DATE[ 2022_07_12 ]TIME[ 633 ]PM

    #_SPARKS_CANT_BE_FADA_# :

        If we want to be able to have sparks over destroyed
        materials, the sparks  CANNOT be "FADA" they need
        to be something else.

        If we want sparks and flames to exist on same tile
        simultaniously, sparks CANNOT be "FADA".

        Solution? We need to break up the bits of geom tile's
        uint32 a bit more.
        
        |<-----------#_STANDARD_TILE_BIT_LAYOUT_#----------->|
        |                                                    |
        |<------- RED CHANNEL ------>|<- G ->|<- B ->|<- A ->|
        |  v16  | tb1  tb2  tb3  tb4 | 8_BIT | 8_BIT | 8_BIT |
        | 11 11 |  1    1    1    1  |                       |
                |<--SPK-->||<--FAL-->|<-ANI->|<-ANI->|<-ANI->|
                                     |<-SPK->|<-SPK->|<-FAL->|
                                     |<-ta1->|<-ta2->|<-ta3->|

        tb1 : TileBit #1 : Is there a "static spark" here ?
        tb2 : TileBit #2 : Is there a "fallingspark" here ?
        tb3 : TileBit #3 : Is this TOP of falling tile    ?
        tb4 : TileBit #4 : Is this BOT of falling tile    ?

        ta1 : TileAnimation 1 : 255 frames for "static spark"
        ta2 : TileAnimation 2 : 255 frames for "fallin spark"
        ta3 : TileAnimation 3 : 255 frames for "falling tile"

        #_HOW_DO_BIG_TILES_FALL_# ???

            I was thinking about not allowing bigger tiles
            to fall, but it wrecks consistency of simulation.

            Instead... If a tile is __NOT__ snapped to grid
            because it is falling, it animates as flashing
            and transparent. You have until it locks into
            place to get away.

        #_TILE_EXTRA_BITS_RENDER_# :

            A note to myself that I need to implement
            correct rendering of these extra bits in
            a tile __BEFORE__ I work on the
            obliterate ( OBE ) function.

            For the same reason I worked on making bombs
            render correctly before deciding I was ready
            to work on the tile-obliteration logic.

    #_HOW_DO_GIANT_FALLING_TILES_WORK_# :----------------------:
    |                                                          |
    |   Giant falling tiles DONT FALL , they must be           |
    |   fractionated by blasts first. Though invincible        |
    |   type, they can be cracked. Once cracked into           |
    |   game sized tiles, they will fall.                      |
    |                                                          |
    |   TAG[ cleavage patterns | tits or GTFO ]                |
    |                                                          |
    |   #_FALLING_CLEAVAGE_#                                   |
    |                                                          |
    |       16x16 grid of alice sized tiles :                  |
    |                                                          |
    |       [0][1][2][3][4][5][6][7][8][9][A][B][C][D][E][F]   |
    |       [1][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [2][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [3][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [4][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [5][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [6][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [7][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [8][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [9][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [A][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [B][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [C][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [D][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [E][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |       [F][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |                                                          |
    |       Giant 16 pebble sized tile ( te7==4 ) :            |
    |        ______________________________________________    |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [      Q:                                      ]   |
    |       [      Giant Falling Horizontal Beam Block     ]   |
    |       [      What happens when hit by tiny bomb?     ]   |
    |       [                                              ]   |
    |       [      A:                                      ]   |
    |       [      The material will cleave and visually   ]   |
    |       [      appear as seen in 1st diagram below.    ]   |
    |       [                                              ]   |
    |       [      The actual block replacement is seen    ]   |
    |       [      in the 2nd diagram below.               ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [______________________________________________]   |
    |                                                          |
    |   This giant tile gets hit by a bomb, taking             |
    |   out an ALICE sized tile chunk , this is what           |
    |   HORIZONTAL BEAM block looks like after taking          |
    |   a blast ( WITH auto_tiling applied )                   |
    |        ______________________________________________    |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [______________________________________________]__ |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [                                              ]   |
    |       [______________________________________________]__ |
    |       [                                              ]   |
    |       [______________________________________________]__ |
    |       [______________________________________________]__ |
    | [B]> > > [___________________________________________]__ |
    |                                                          |
    |         :--------------------------------------------:   |
    |   BELOW : What different fractionation patterns look :   |
    |         : like WITHOUT their auto_tiling methods     :   |
    |         : applied to the materials.                  :   |
    |         :--------------------------------------------:   |
    |                                                          |
    |   FALLING HORIZONTAL CLEAVAGE PATTERN :                  |
    |   #_FALLING_CLEAVAGE_# : HORBEAM (autotiles horizontal)  |
    |        ______________________  ______________________    |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [______________________][______________________]   |
    |       [          ][          ][          ][          ]   |
    |       [          ][          ][          ][          ]   |
    |       [          ][          ][          ][          ]   |
    |       [__________][__________][__________][__________]   |
    |       [    ][    ][    ][    ][    ][    ][    ][    ]   |
    |       [____][____][____][____][____][____][____][____]   |
    |       [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    | [B]> > > [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]   |
    |                                                          |
    |   FALLING VERTICAL CLEAVAGE PATTERN :                    |
    |   #_FALLING_CLEAVAGE_# : VERBEAM (autotiles vertically)  |
    |        _  _  ____  __________  ______________________    |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][          ][                      ]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][__________][                      ]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][          ][                      ]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][__________][______________________]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][          ][                      ]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][__________][                      ]   |
    |       [ ][ ][    ][          ][                      ]   |
    |       [ ][ ][____][          ][                      ]   |
    |       [_][ ][    ][          ][                      ]   |
    | [B]> > > [_][____][__________][______________________]   |
    |                                                          |
    |                                                          |
    |   FALLING MARBLE CLEAVAGE PATTERN :                      |
    |   #_FALLING_CLEAVAGE_# : MARBEAM (autotiles __NEVER__)   |
    |        ______________________  ______________________    |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [                      ][                      ]   |
    |       [______________________][______________________]   |
    |       [          ][          ][                      ]   |
    |       [          ][          ][                      ]   |
    |       [          ][          ][                      ]   |
    |       [__________][__________][                      ]   |
    |       [    ][    ][          ][                      ]   |
    |       [____][____][          ][                      ]   |
    |       [E][_][    ][          ][                      ]   |
    |          [_][____][__________][______________________]   |
    |                                                          |
    |   NON_MOVING TILE FRACTIONATION PATTERN :                |
    |                                                          |
    |       ************************************************   |
    |       *                                              *   |
    |       *     Same as MARBEAM pattern.                 *   |
    |       *                                              *   |
    |       ************************************************   |
    |                                                          |
    |   #_WHY_NOT_ANIMATE_GIANT_FALLING_TILES_# :              |
    |                                                          |
    |       If we animate a giant tile falling, it doesn't     |
    |       collide with anything until it snapps into the     |
    |       next tile position for that tile size.             |
    |                                                          |
    |       When in the inbetween state... The whole tile      |
    |       flashes. That could be a giant flashing danger     |
    |       area the size of a level with a big enough         |
    |       falling tile... That will look horrible.           |
    |                                                          |
    |       Also... Does it slip behind ALICE sized tiles or   |
    |       does it fractionate when it hits ALICE sized tiles |
    |       like an iceburg hitting spikes?                    |
    |                                                          |
    |       All of these rules seem :                          |
    |                                                          |
    |           1. Weird to look at.                           |
    |                                                          |
    |           2. Logically strange.                          |
    |                                                          |
    |           3. Hard to impliment.                          |
    |                                                          |
    |       Instead , we should just do #_FALLING_CLEAVAGE_#   |
    :----------------------------------------------------------:

    #SEG_D2D# : SEGment : Draw_2D  
    @SEG_D2D@ : SEGment : Draw_2D

        The draw2d section is really big, so we have
        "segment markers" to remind us where we are
        in the file.
        DATE[2022_07_13]KANJICODER ( 714PM )

    #JS_DYNA_KEY# : https://stackoverflow.com/questions/6500573

        How to make dyamic/computed properties in
        Javascript object literal.

    #_R_W_R_T_U_O_M_B_# :
        R______W____R_____T__U___O_____M______B
        Remove When Ready To Use Other Memory Blocks.

        Right now only using the [ 512 x 512 ]block
        of memory in cell[ 1 , 1 ]of[ d_pix2048 ].

        CURRENT_DATE[ 2022_07_14 ]

    @buf_3pc@ : buffer:3rd_party_code 
    @img_3pc@ : image::3rd_party_code 

    @obj_x@ : Object that MIGHT contain X coordinate.
    @obj_y@ : Object that MIGHT contain Y coordinate.

    @seg_x@ : URL segment integer containing X axis value.
    @seg_y@ : URL segment integer containing Y axis value.

    
    #_BILLBOARD_OR_SPRITE_UNION_# :  

        WRITTEN_DATE[2022_07_14]TIME[ 830PM ]KANJICODER

        Materials 14 and 15 ( v16 == 14 && v16 == 15 )
        should be used for __BOTH__

        1. Static Environment Sprites
        2. Billboard Text

        KEY:
            t16   : Tile value. Only 14 & 15 valid here.
            tos   : text_or_sprite flag
            co7   : COlor of text or type of enemy. 7 values.
            l15_x : Local Coord X ( 0 to 15 )
            l15_y : Local Coord Y ( 0 to 15 )

        |  NIB  |    NIB    | l15_x  l15_y| @MISC_STATE_INFO@ |
        | 11 11 |  1  | 111 | 1111 | 1111 | 11111111|11111111 |
        |  t16  | tos | co7 |             | msi_lef | msi_rig |

    @MISC_STATE_INFO@ :

        WRITTEN_DATE[2022_07_14]TIME[ 830PM ]KANJICODER

        TAG[ flame piston | flamepiston | flame_piston ]
        TAG[ flame-piston ]
        
        [MISC_STATE_INFO] bits represent whatever is needed
         to get the job done. For example , if this is a 
        flame piston, [MISC_STATE_INFO] could encode the 
        timestamp of when the flame piston was last activated.

        co7 could be co-opted a bit.
    
        |<-------co7-------->|
        |  co7_rgb  co7_tob  |
        |     11       1     |

        co7_rgb : White , Red, Green or Blue Piston Color?

        co7_tob : Is this the body of the piston or
                : the moving button of the piston?

    @NG@ : www.newgrounds.com

    #l15_x# :
    #l15_y# :

        This means that static environment sprites can
        be no bigger that 16x16 tiles in size. Which is
        __PLENTY__ . ( from experience : Atomic Alice @NG@ )

    #_FLAME_PISTON_MISC_DATA_# :

        WRITTEN_DATE[2022_07_14]TIME[ 850PM ]KANJICODER

        |     msi_lef   |
        | 11  11 | 1111 |
        | fd  sc | flen |

        @fd@ : Flamepiston direction facing?
             : 00 : LEF
             : 01 : RIG
             : 10 : TOP
             : 11 : BOG
        
        @sc@ : Size Class of flame piston.

             : 00 : 2x2 : Classic 2X2
             : 01 : 3x2 : Classic 3X2
             : 10 : 1x3 : Cattle_Prod_Trip_Rod
             : 11 : 1x6 : Cattle_Prod_Trip_Rod


             [S][1][2] //: <------: Cattle_Prod_Trip_Rod: 1x3

             [S][1][2][3][4][5] //: Cattle_Prod_Trip_Rod: 1x6

             Works like a flame piston , but stays on as
             long as you are touching the rod part.

             The [S] part of the tile emits spark like
             the[ sparkpin ]bombs, with a 1x1 box explosion
             style around it's perimeter.

        |  msi_rig  |
        | 1111 1111 |
        | TIMESTAMP |

            msi_rig on flamepiston holds a short last
            activated timestamp used to animate it's 
            motion and actions.

            8 bits == 0 to 255 , so no more than 256
            unique frames of animation/behavior.

    @msi_lef@ : Misc_State_Info : LEFt  byte
    @msi_rig@ : Misc_State_Info : RIGht byte

    #_W_D_A_I_C_# : Write_Data_As_It_Comes
                    W_____D____A__I__C

    #_WHAT_DO_ZERO_TILES_DO_# :--------------------------------:
    :                                                          :
    :   I guess sitting in bed for 5 hours without going       :
    :   to sleep has some benifit. Manic caffiene induced      :
    :   insomiac creativity.                                   :
    :   NOW_DATE[ 2022_07_15 ]TIME[ 6:23 ]AM                   :
    :                                                          :
    :  :-------------------------------------------------------:
    :                                                          :
    :   Zero tiles are STATIC BACKGROUND AND FOREGROUND!!!     :
    :                                                          :
    :   You can pass through them, no need to modify           :
    :   engine to give special case for them because           :
    :   they are already "zero tiles".                         :
    :                                                          :
    :                                                          :
    :   |<-----------#_STANDARD_TILE_BIT_LAYOUT_#----------->| :
    :   |                                                    | :
    :   |<------- RED CHANNEL ------>|<- G ->|<- B ->|<- A ->| :
    :   |  v16  | tb1  tb2  tb3  tb4 | 8_BIT | 8_BIT | 8_BIT | :
    :   | 11 11 |  1    1    1    1  |                       | :
    :           |<--SPK-->||<--FAL-->|<-ANI->|<-ANI->|<-ANI->| :
    :                                |<-SPK->|<-SPK->|<-FAL->| :
    :                                |<-ta1->|<-ta2->|<-ta3->| :
    :                                                          :
    :                                                          :
    :   |<-------------#_ZERO_TILE_BIT_LAYOUT_#------------->| :
    :   |                                                    | :
    :   |<------- RED CHANNEL ------>|<- G ->|<- B ->|<- A ->| :
    :   |  v16  | tb1  tb2  tb3  tb4 | 8_BIT | 8_BIT | 8_BIT | :
    :   | 11 11 |  1    1    1    1  |                       | :
    :           |<--B_G-->||<--F_G-->|<-???->|<-B_G->|<-F_G->| :
    :                                |<-tm1->|<-tm2->|<-tm3->| :
    :                                                          :
    :   tb1 : TileBit  #1 : B_G : TRANSPARENT_GLASS ?          :
    :   tb2 : TileBit  #2 : B_G : One of two accent colors.    :
    :   tb3 : TileBit  #3 : F_G : TRANSPARENT_GLASS ?          :
    :   tb4 : TileBit  #4 : F_G : One of two accent colors.    :
    :                                                          :
    :   tm1 : TileMisc #1 : UNKNOWN DATA , FREE SPACE!         :
    :   tm2 : TileMisc #2 : ASCII_LETTER Or GEOM_TEXTURE       :
    :   tm3 : TileMisc #3 : ASCII_LETTER Or GEOM_TEXTURE       :
    :                                                          :
    :   | 0 | 111 1111 | === ASCII_LETTER                      :
    :   | 1 | 111 1111 | === GEOM_TEXTURE ( no color info )    :
    :                                                          :
    :   | 0 | ### #### | === ASCII_LETTER                      :
    :   | 1 | ### #### | === GEOM_TEXTURE ( no color info )    :
    :                                                          :
    :----------------------------------------------------------:

    #_PARALLAX_THOUGHTS_# :------------------------------------:
    |                                                          :
    |   NOW_DATE[ 2022_07_15 ]TIME[ 0641 ]AM                   :
    |                                                          :
    |   THESE ARE JUST THOUGHTS!!! RESERVE                     :
    |   [ PAR ]block of[ LEVELPACK ]for this , but             :
    |   _DO_NOT_WRITE_ANY_CODE_ for it until you have.         :
    |                                                          :
    |   1. A working game.                                     :
    |                                                          :
    |   2. People playing it.                                  :
    |                                                          :
    |   3. Shown it on Kyootbot's show.                        :
    |                                                          :
    |   |<--------------0512-------------->|                   :
    |   |<-----0256----->||<-----0256----->|                   :
    |   +--128--++--128--++--128--++--128--+                   :
    |   |       ||       ||       ||       |                   :
    |   |  r00  ||  r01  ||  r02  ||  r03  |                   :
    |   |       ||       ||       ||       |                   :
    |   +-------++-------++-------++-------+                   :
    |   +--128--++--128--++--128--++--128--+                   :
    |   |       ||       ||       ||       |                   :
    |   |  r04  ||  r05  ||  r06  ||  r07  |                   :
    |   |       ||       ||       ||       |                   :
    |   +-------++-------++-------++-------+                   :
    |   +--128--++--128--++--128--++--128--+                   :
    |   |       ||       ||       ||       |                   :
    |   |  r08  ||  r09  ||  r10  ||  r11  |                   :
    |   |       ||       ||       ||       |                   :
    |   +-------++-------++-------++-------+                   :
    |   +--128--++--128--++--128--++--128--+                   :
    |   |       ||       ||       ||       |                   :
    |   |  r12  || [PAR] || [ANY] || [ANY] |                   :
    |   |       ||   |   ||       ||       |                   :
    |   +-------++---|---++-------++-------+                   :
    |                |                                         :
    |                |                                         :
    |   Sparse Parallax Scaffold Tiles.                        :
    |   For Background and foreground.                         :
    |                                                          :
    |   +------------------------+                             :
    |   |Dense TileMap:          |                             :
    |   +------------------------+                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   |[ ][ ][ ][ ][ ][ ][ ][ ]|                             :
    |   +------------------------+                             :
    |   |Sparse TileMap:         |                             :
    |   +------------------------+                             :
    |   |[ ]      [ ][ ]      [ ]|                             :
    |   |                        |                             :
    |   |                        |                             :
    |   |[ ]      [ ][ ]      [ ]|                             :
    |   |[ ]      [ ][ ]      [ ]|                             :
    |   |                        |                             :
    |   |                        |                             :
    |   |[ ]      [ ][ ]      [ ]|                             :
    |   +------------------------+                             :
    |   |Sparse TileMap:(Render) |                             :
    |   +------------------------+                             :
    |   |[ ]------[ ][ ]------[ ]|                             :
    |   | |sudopan |  |sudopan | |                             :
    |   | |        |  |        | |                             :
    |   |[ ]------[ ][ ]------[ ]|                             :
    |   |[ ]------[ ][ ]------[ ]|                             :
    |   | |sudopan |  |sudopan | |                             :
    |   | |        |  |        | |                             :
    |   |[ ]------[ ][ ]------[ ]|                             :
    |   +------------------------+                             :
    |                                                          :
    |   sudopan : A panel created by connecting tiles          :
    |           : with rods in the renderer.                   :
    |                                                          :
    |   Now, lets say some of these sparse tiles               :
    |   are [ zero / off ]and others are [ one / on ]...       :
    |                                                          :
    |   +------------------------+                             :
    |   |Sparse TileMap:(Render2)|                             :
    |   +------------------------+                             :
    |   |[1]------[1][1]------[1]|                             :
    |   | |sudopan |  |sudopan | |                             :
    |   | |        |  |        | |                             :
    |   |[1]------[1][1]------[1]|                             :
    |   |[1]------[1][0]      [0]|                             :
    |   | |      /               |                             :
    |   | |   //                 |                             :
    |   |[1]/     [0][0]      [0]|                             :
    |   +------------------------+                             :
    |                                                          :
    :----------------------------------------------------------:

    69TH COMMIT , NICE . 2022_07_15 , 644 AM 
                                                 

    #_HEROKU_APP_NAME_# : / #HEROKU_APP_NAME# :

        You need to run special heroku command in
        terminal on your heroku project for this
        environment variable to be available.

        USE:
        heroku labs:enable  runtime-dyno-metadata --app APPNAME
    


    #BGT# : www.tinyurl.com/BOMB-GAME-TUTORIAL

    @i_urlpath@ : website address path to API endpoint.
    @i_payload@ : The data to send. I don't know it's format
                : at the time of writing. I'll figure it
                : out.

    #set_request_header# :

        "you must call it after calling open() , "
        "but before calling send()               "

        -Developer Mozilla Org , Circa 2022
        
    @nsh_pngname@ : Non_Standard_Header____PNG_Name
    #nsh_pngname# :
        
        Using a prefix to let me know that this header
        is something I( KANJICODER )made up and not some
        type of standard with XMLHTTPREQUEST.

    #_AB_URL_# : AddressBar_URL 
               : window.location.href is the address
               : bar url.

    #_SLASH_XYZ_# / #_X_SLASH_Y_# :

        //:::::::::::::::::::::::::::::::::::::::://
        //:  [_X_SLASH_Y_] url sceme looks too   ://
        //:  much like weird facebook bullshit.  ://
        //:  Allow inputs that can be read as    ://
        //:  coordinate hashes like:             ://
        //:                                      ://
        //:  XY  : 000_000                       ://
        //:  XYZ : 000_000_000                   ://
        //:                                      ://
        //:::::::::::::::::::::::::::::::::::::::://

    #_MIS_SPELLINGS_# :

        Sometimes I wonder to myself , "how was that "
        "function spelled"? So I will make mis-spelling
        permutations into "monkey wrench macros" to
        make sure I use the correct names.

    #_TAKEOFF_AIM_P_# : take off "AIM_" prefix.


    #_TAKEOFF_DOTJS_# : take off ".JS"  postfix

    #_MONEY_MAKING_IDEA_# : Virtual Subdivision :--------------:
    |                                                          :
    |                                                          :
    |     one_level_pack_for_sale             DATE[2022_07_05] :
    |       |                                                  :
    |       V                                                  :
    |   [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]                   :
    |   [ ]+----------------------------+[ ]                   :
    |   [ ]| main_game_path > > > > >.  |[ ]                   :
    |   [ ]+-----------------------+ V  +[ ]                   :
    |   [ ][ ][ ][ ][ ][ ][ ][ ][ ]| V  |[ ]                   :
    |                           [ ]| V  |[ ]                   :
    |   We keep for sale level  [ ]| V  |[ ]                   :
    |   packs directly off the  [ ]| V  |[ ]                   :
    |   main game path so that  [ ]| V  |[ ]                   :
    |   users don't get land    [ ]| V  |[ ]                   :
    |   locked by malicious     [ ]| V  |[ ]                   :
    |   neighbors. We don't     [ ]| V  |[ ][ ][ ][ ][ ][ ][ ] :
    |   want to have to setup   [ ]| V  +-----------------+[ ] :
    |   an H.O.A. for our game. [ ]| .> > > > > > > > > > |[ ] :
    |                           [ ]+----------------------+[ ] :
    |                           [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] :
    |                                                          :
    :----------------------------------------------------------:

    @rfp@:RelativeFilePath 
    @s_i@:Segment_Index

    @url_x@ : Like @seg_x@ , but string from path.
    @url_y@ : Like @seg_y@ , but string from path.
    @url_z@ : Like @seg_z@ , but string from path.

    @obj_xzy@ : TYPO_YOU_WANT[ obj_xyz ]

    @sob_xyz@ : StringOBject With [ m_s_x , m_s_y , m_s_z ]
    
    @m_s_x@ : Member(var) : string_x
    @m_s_y@ : Member(var) : string_y
    @m_s_z@ : Member(var) : string_z

    #_ZERO_PAD_# : Marking a section of code where we
                 : are applying zero padding to string.

    @NOTCIE_ME_SENPAI@ : TYPO. You know what it is.

    @URL_NE_F_N@ : URL NotEqualTo File_Name

    [mstr_x]:MemberString_X BUT_USE[ m_s_x ]
    [mstr_y]:MemberString_X BUT_USE[ m_s_y ]
    [mstr_z]:MemberString_X BUT_USE[ m_s_z ]

    @jft@ : TYPO , you want[ @jtf@ ]
    @jtf@ : Just_The_Folder

    @d_pngpath_upp@ : pngpath for "UPLOAD"
    @d_pngpath_dow@ : pngpath for "DOWNLOAD"

    #_NON_STANDARD_HEADER_# :

        TAG[ non-standard-header | nonstandardheader   ]
        TAG[ non-standard | non standard | nonstandard ]

        @nsh@ : Prefix used to denote headers that 
              : KANJICODER is making up for this MMO.

        @nsh_pngname@ : name of the .png file.
        
        @nsh_yehotel@ : YE Hotel , YES a hotel exists here.
                      : Meaning the image did not 404 and
                      : it is indeed an already existing
                      : [ levelpack / hotel ]

        NOW_DATE[ 2022_07_17 ]TIME[ 738 ]PM


    @nsh_yeshotel@ : WRONG_YOU_WANT[ nsh_yehotel ]
    @nsh_hashotel@ : WRONG_YOU_WANT[ nsh_yehotel ]
    @nsh_hahotel@  : WRONG_YOU_WANT[ nsh_yehotel ]

    @HERSYNC@ : HERE - SYNCHRONOUS , opposite of NODESYS
              : PROBLEMATIC... No longer using  "NODESYS"
              : PRECISELY BECAUSE I used it to mean both
              : "client" and "server" namespace.

    @HERESYS@ : YOU_MEAN[ HERSYNC ]

    #_HEROKU_IMGUR_VARS_# :
        --------------------------------------------------------
        I have a helper script that does this before
        I push to heroku to help setup these confidential
        values for accessing imgur api.
        WRITTEN_DATE[ 2022_07_18 ]KANJICODER
        --------------------------------------------------------

        VAR_REDACTED="[REDACTED]"

        VAR_IMGUR_CID=$(cat "./VIP/001/API_IMGUR/CID._")
        VAR_IMGUR_C_S=$(cat "./VIP/001/API_IMGUR/C_S._")

        echo "[VAR_IMGUR_CID]:"$VAR_REDACTED
        echo "[VAR_IMGUR_C_S]:"$VAR_REDACTED

        ECHO_PIT=""

        ECHO_PIT=$( heroku config:set --app aim-hotel13 \
                       "VAR_IMGUR_CID"=$VAR_IMGUR_CID )

        ## echo $ECHO_PIT

        ECHO_PIT=$( heroku config:set --app aim-hotel13 \
                       "VAR_IMGUR_C_S"=$VAR_IMGUR_C_S )

        ## echo $ECHO_PIT

        --------------------------------------------------------
   
    @T_V@ : [ Too / overly / excessively ] Verbose

    #_IMPLIED_PROMISE_# :

        One of the confusing things about javascript
        is the "return" statement inside of different
        sections of a "promise chain". There is some
        "compiler magic" going on here.

        An "implied promise" is being created if you use
        the "return" statement inside of a promise object.

        https://www.youtube.com/watch?v=RXN7169vBGw&t=130s

        I don't know if this works for a regular promise,
        or if this is only specifically NODE.js "await".

    #LOGANOK# :

        If it's all capital, it is a local function that
        pushes a message into the @loganok@ object.

        ADDED_DATE[ 2022_07_19 ]TIME[ 336PM ]

    @uro@ : Use "loganok" from now on. 
          : We are going to use this for things other
          : than just "upload"...
          :
          : @loganok_uro@ could be okay too.
         
    @loganok@     : LOG_ANd_OK object. 
    @loganok_uro@ : LOGANOK Upload_Response_Object
            @uro@ : Use Either[ loganok ]OR[ loganok_uro ]

    @SBH@ : Shouldnt_Be_Here
          : Means that you should __NOT__ be in this
          : section of code, and that the error is
          : a programmer error. No matter what the
          : user does, not matter what data gets sent
          : to the server, it doesn't matter, you should
          : __NOT__ be inside this block of code.

          : ADDED_DATE[ 2022_07_19 ]TIME[ 348 ]PM

    @LOGANOK_ERR@ : USE local "ABORT()" , pairs nicely
                  : with local "NEXT()" and makes it easy
                  : to spot success and fail cases.
                  :     
                  : Actually, I am not 100% on this.
                  : 
                  : LOGANOK_[ ERR | ADD | END | NEX ]
                  : Is very homogonous.

    @LOGANOK_ADD@ : Adds a message to our loganok object.
    @LOGANOK_END@ : Ends response to server.

    @i_ignored@   : Ignored Input Argument

    #MAKE_COORD_HASH# :

        Turn X,Y,Z input strings into coordinate hash.
        This is a bit convoluted. The result of
        refactoring.

        All of our "upload" api paths need to be
        called in the exact same way.

        GOING WITH: 
            PATH[ XXX/YYY/ZZZ ]
            FUNC( XXX,YYY,ZZZ )

        INSTEAD OF:
            PATH[ XXX_YYY_ZZZ ]
            FUNC( XXX_YYY_ZZZ )

        Still like coordinate hashes for the
        FRONT END. Though in retrospect, we should
        have just picked one and stuck with it.

        DATE[ 2022_07_19 ]TIME[ 0820 ]PM

    #ABORT_IF_NOT_HTTPPOST# :

        Not 100% necessary , but figure this gives me
        a bit of extra sanity so why not?

    #ABORT_IF_FILE_TOO_BIG# :

        //:::::::::::::::::::::::::::::::::::://  
        //: Encoding a 512_x_512 .PNG image  ://
        //: of[ NOISE/STATIC/MAXENTROPY]     ://
        //: gives me a file of[ 697 KB ].    ://
        //:                                  ://
        //: So, 1024KB of wiggle room should ://
        //: be enough to cover any 512_x_512 ://
        //: .PNG file we get.                ://    
        //:::::::::::::::::::::::::::::::::::://
        
    #SAVE_TO_HEROKU_HARDDISK# :

        Before uploading to IMGUR, we save to our own
        heroku server hard disk. That way, if upload
        to imgur FAILS, but we can verify it on the
        HEROKU SERVER VIA:
    
            www.app.com/PNG/X_123/Y_456/Z_789/
                           AIM_123_456_789.PNG

        Then we know the problem with imgur upload is
        __NOT__ the data, but rather:

            1. How we are loading data into outgoing
               request to IMGUR.
            
            2. How we are writing our request object
               to IMGUR.

            3. In general, something wrong with how we
               are making the request to imgur.

            DATE[ 2022_07_19 ]TIME[ 0507 ]PM

    #ABORT_IF_NO_IMGUR_CRED# :

        If IMGUR credentials have not been setup in
        environment variables of this server ,
        abort now.

        We are aborting AFTER we upload to HEROKU
        just so that we can still get something done.
        
        Possibly if IMGUR is down the game does
        not fail 100%.
    
        DATE[ 2022_07_19 ]TIME[ 0515 ]PM

    #LOAD_FROM_HEROKU_HARDDISK# :

        We are going to load to heroku harddisk first
        because if we FAIL to upload to imgur, but
        can verify .PNG exists by going to :

        [ www.app.com / PNG / X_### / Y_### / Z_### /  ]
        [             / AIM_    ### _   ### _   ###    ]

        Then we know the failure is somewhere in how
        we are calling the API. The data upload part
        is working fine.

        DATE[ 2022_07_19 ]

    #GET_JUST_FILENAME# :

        GET: filename with extension ( png_nam )
        GET: title of image          ( png_tit )

        DATE[ 2022_07_20 ]

    #GET_IMGUR_BEARER_TOKEN# :

        We need a bearer token. I think the mysterious

        INTERNAL_EXPECTATION_FAILED 
        internal expectation failed

        is because we do not have access rights.

        EVENTUALLY : We want to save access token
                   : in[ ./TXT/ACCESS_TOKEN.TXT ]
                   :
                   : So we don't have to authenticate
                   : every time. Put timestamp on
                   : token file because expires
                   : in 24 hours.

        EVENTUALLY : Put access tokens in database
                   : and associate them with
                   : different users.

        DATE[ 2022_07_21 ]TIME[ 0836 ]PM

    #BUILD_FORM_DATA# :

        Create the form data payload that imgur expects.
        We could use a 3rd party library for this, but
        I want avoid putting things in "package.json"
        unless they are "really fucking hard" to do.

        Open These Tabs In This Order To Learn More :

        https://stackoverflow.com/questions/49053193
        https://tanaikech.github.io/2017/07/27 
                        /multipart-post-request-using-node.js/
        https://developer.mozilla.org/en-US/docs/Web/HTTP
                        /Basics_of_HTTP/MIME_types
        https://community.axway.com/s/question
            /0D52X00005ziQqVSAU/rest-request-with
            -contenttype-multipartformdata-header
            -doesnt-handle-content
        https://apidocs.imgur.com/#de179b6a-3eda
            -4406-a8d7-1fb06c17cb9c
        https://nodejs.org/api/buffer.html

        Wow, that is fucking ugly.. Lets make tinyurls:

            1 : www.tinyurl.com/BFD-URL-001
            2 : www.tinyurl.com/BFD-URL-002
            3 : www.tinyurl.com/BFD-URL-003
            4 : www.tinyurl.com/BFD-URL-004
            5 : www.tinyurl.com/BFD-URL-005
            6 : www.tinyurl.com/BFD-URL-006

    #SEND_PNG_TO_IMGUR# : 

        Pack up .PNG read from hard disk and send it
        off to imgur. This is the hardest part I 
        anticipate, because I've never done this before.

        DATE[ 2022_07_19 ]TIME[ 509 ]PM

    #ADD_IMGUR_URL_TO_DATABASE# :

        We need to store the imgur hashes in a database.
        I don't know how the fuck to reliably collect
        the images via the API, and this makes us
        less platform dependant anyways.

        DATABASE__TABLE : tab_hotel13 

        DATABASE_COLUMN : col_coohash : EX[ 101_202_303 ]
        DATABASE_COLUMN : col_verni32 : VERsion_Number_I32
        DATABASE_COLUMN : col_png_url : .PNG file's URL.

        col_verni32 needs to be an integer because looking
        it up, will be a pain in the ass to try and
        lexographically short a version string like:
        "000.000.001" , though when serializing we 
        could store it like that.

        DATE[ 2022_07_21 ]TIME[ 1059 ]PM

    #STOP_TALKING_TO_ME# :

        Conversation is over with the server.
        Stop talking with server. This is the
        official end. This is not an error, 
        you did nothing wrong. I just don't
        want to talk to anyone right now.

        DATE[ 2022_07_19 ]TIME[ 510 ]PM


    #_TELL_IMGUR_HOW_TO_RESPOND_#
    #_NOT_OUTGOING_DATA_TYPE_#

        xhr.setRequestHeader( 
        
            //:::::::::::::::::::::::::::::::://
            //: This is __NOT__ the type     ://
            //: of data being uploaded ,     ://
            //: This tells IMGUR what        ://
            //: type of response we want     ://
            //: IMGUR to send us back.       ://
            //:::::::::::::::::::::::::::::::://

            "accept" , "application/json"
        
        );;

        DATE[ 2022_07_19 ]TIME[ 0548 ]PM


    #NODESYS# / @NODESYS@ :

        Don't use this. I read this as "sever code" but
        it is client code.

        Hmm.. Try... @HEROKUA@

    @IMGURAP@ : CLIENT_SIDE_CODE
              : Making requests to: IMGUR  server.

    @HEROKUA@ : CLIENT SIDE CODE
              : Making requests to: HEROKU server.

    @NODESYS@ : YOU_MEAN[ HEROKUA ]

    #NODESYSTEM_SAVE# : YOU_MEAN[ HEROKUA_SAVE ]
    #NODESYSTEM_LOAD# : YOU_MEAN[ HEROKUA_LOAD ]

    #HEROKU_HARD_DISK# / [HEROKU_HARD_DISK] :

        I mean the filesystem of your heroku deployment.

        This storage gets erased every time you re-deploy
        so just use it to help verify levelpack data
        made it to our server un-mangled.
    
        If we verify that, it helps give us sanity of
        mind when trying to use 3rd-party image API(s)
        to upload to permanant[ image ]store.

        DATE[ 2022_07_19 ]KANJICODER

    #_OUTGOING_DATA_TYPE_# :

        I think this is how you tell IMGUR api what
        type of data you are sending it. But not
        100% on this.

    #_NODEJS_HTTP_REQ_# :

        https://nodejs.org/api/http.html#agentrequests

    @nor_opt@ : Node_Outbound_Request _ OPTions

    @A_I_A@ : Accessed_Imgur_API
    #A_I_A# :

        Stolen message from this stack overlfow post:

        https://stackoverflow.com/questions/41063529

    [ Client Request Interrupted ] :
    [ Client_Request_Interrupted ] :

        Did you call ::::: LOGANOK_END()

        When should have : LOGANOK_NEX() ?

    @nor_ask@ : NodeOutboundRequest_ASK 

    [I_H_N_I_W_I_A_D] : I Have No Idea What I Am Doing
    [I H N I W I A D] :[I H    N  I    W    I A  D    ]
    @I_H_N_I_W_I_A_D@ : I_Have_No_Idea_What_I_Am_Doing
    
    [I_H_A_S_I_W_I_A_D] : I have a slight idea what I am doing.

    #_NJS_CLOSE_# :
    #_NJS_END_#   :

        close : emitted when stream resource is closed and
              : indicates no more events will be emitted
              : in the future.

        finish: when all data is written to the stream but
              : the stream may not be closed.
              : https://stackoverflow.com/questions/65004497

          end : Not sure about the difference between this 
              : and "close" but this event is not 
              : guaranteed to fire.
              :
              : https://stackoverflow.com/questions/35805759/
              : nodejs.org/api/stream.html#stream_event_end

        ------------------------------------------------
        DATE[ 2022_07_20 ]TIME[ 222 ]AM
        ------------------------------------------------
        Getting pretty tired of trying to figure this
        out. But with "close" the api is only partially
        broken. Doesn't upload to IMGUR but re-loading
        level after refresh will work.
        ------------------------------------------------

    @IAG@ : Imgur_API_Get

    #l_buffer# : A byte buffer object in node.js
               : Used for low-level API requests.
               :
               : https://nodejs.org/api/buffer.html 

    @norform@  : Node Outgoing Request - FORM (data)

    @norform_obj@ : WRONG, use[ norform_jso ]
    @norform_jso@ : norform - JSON Object
    @norform_pay@ : norform - PAYLOAD (what gets sent)
    @norform_bou@ : norform - BOUNDARY string
    @norform_c_t@ : norform - Content Type

    WRONG[ "mulipart/form-data;"  ]
      YES[ "multipart/form-data;" ]

    @arr_k_v@ : ARRay - Key_Value , key value pairs.
        @k_v@ : Key_Value == [ key , val ]
              : k_v[ 0 ] == KEY
              : k_v[ 1 ] == VAL

    @arr_m_i@ : Array, maxindex (max valid index)

    @kv0@ : k_v = arr_k_v[ kv0 ] , FIRST INDEX
    @kv1@ : k_v = arr_k_v[ kv1 ] , LAST  INDEX
    @kvi@ : k_v = arr_k_v[ kvi ] , INDEX[ kv0 to kv1 ]
    @k_v@ : Key_Value Pair , k_v = [ key , val ]

    @jso_key@ : JSonObject - KEY
    @jso_val@ : JSonOBject - VAL
    @norform_jso_key@ : norform . jso_key
    @norform_jso_val@ : norform . jso_val

    @norform_pay_buf_001@ : Payload buffer section #1
    @norform_pay_buf_002@ : Payload buffer section #2
    @norform_pay_buf_003@ : Payload buffer section #3

    @png_nam@ : USE[ NAMAEXT | NAMONLY ]( nam ==  name )
    @png_tit@ : USE[ NAMONLY           ]( tit == title )

    @bearask@ : BEAR-ASK , an outgoing request from
              : HOTEL13.JS server to IMGUR asking
              : for a "bearer token"
              : DATE[ 2022_07_21 ]TIME[ 0855PM ]

    #IMGUR_UPLOAD_SUCCESS# :
    
        I think I know what it is... Your APPLICATION
        and your ACCOUNT are distinct. Your application
        does __NOT__ have access to your ACCOUNT's 
        albums. Trying to use your application to upload
        to your ACCOUNT is an access violation.

        DATE[ 2022_07_21 ]TIME[ 0935 ]AM

        I ANSWERED THIS:

            https://stackoverflow.com/questions/69041370

        CORRECT :

            payload=Buffer.concat([
                Buffer.from( str_form_data      , "utf8"   ) 
            ,   Buffer.from( png_binary_file    , "binary" ) 
            ,   Buffer.from( final_form_boundary, "utf8"   ) 
            ]);;

        WRONG: Will Corrupt Your PNG BINARY:

            payload=Buffer.concat([
                Buffer.from( str_form_data      , "utf8"   )     
            ,   Buffer.from( png_binary_file    , "binary" )  
            ,   Buffer.from( final_form_boundary, "utf8"   ) 
            ]).toString( "utf8" );

        DATE[ 2022_07_21 ]TIME[ 09:55 ]AM

    #_LOOSE_RULE_CAUSE_FUCKING_PROBLEMS_# :

        Interpreting "1_1_1" === "001_001_001"

        Causes a lot of fucking problems with database
        records. We added more code to make "1_1_1"
        be detected as an INVALID coordinate hash.

        Coordinate hashes need 3 segments.
        Each segment being 3 digits.

        DATE[ 2022_07_22 ]TIME[ 0257 ]AM

    #12_STEP_PROGRAM# : It's a 13 step program now.
                      : SEE[ 13_STEP_PROGRAM ]

    @verni32@ : VERsion_Number_Int32
              : The version number of a given 
              : [ levelpack / hotel ]

    #CLIENT_REQUEST_INTERRUPTED# :

        https://aim-hotel13.herokuapp.com/001_001_003

        FIGURE OUT WHY THE FUCK WHY ?

        Our re-factor has broken the file name
        generation that we doing zero-padding.

        HAVE[  AIM_1_1_1.JS       ]
        WANT[  AIM_001_001_001_JS ]
    
        DATE[ 2022_07_22 ]TIME[ 0406 ]AM

    @nod@ : Number_Of_Digits
    @miz@ : Missing_Zeros

    @act_p_w@ : ACTual PassWord
    @got_p_w@ : GOTten PassWord

    #PWE_GAURD# : Password must be non-blank , or else
                : I will always refuse to drop the table.
                : This extra gaurd exists in case the
                : file where client secret is read from
                : accidentially gets [ nuked / erased ].
                :
                : PWE   == PassWordExtra
                : GUARD == GAURD

    @CAS@ : Client_And_Server
    @SAC@ : Typo_Of[ CAS ]

    @yes_o_k@ : YOU_MEAN[ o_k_yes ]
    @o_k_yes@ : ACCEPTOR Function in Executor of promise.
    @wontsay@ : REJECTOR Function in Executor of promise.
              : Called "wontsay" means "never called".

    @i_scatpng@ : Input_SCATPNG
    @scatpng@   : Schrodinger's CAT PNG
                : The .PNG binary file may or may not
                : exist.

    @wavepng@   : USE[ scatpng ]
    @darkpng@   : USE[ scatpng ]
    @mayepng@   : USE[ scatpng ] ( maye   ==  maybe png )
    @evilpng@   : USE[ scatpng ]
    @strapng@   : USE[ scatpng ] ( strapng==strange png )
    
    @m_ooi@     : Member_ OriginOfImage
                : VALUES:
                :       "[M_OOI.HEROKU:::::FILE_SYSTEM]"
                :       "[M_OOI.IMGUR:::IMAGE_DOWNLOAD]"
    #m_ooi# :
        Adding this variable because I want a way to
        confirm from where my server got the image.
        Message is not to be used to execute logic on,
        just for debugging and sanity.


    #_THIS_IS_NOT_K_I_S_S_#
        //:----------------------------------://
        //: THIS IS GETTING WAY TO FUCKING   ://
        //: COMPLICATED. MAYBE WE SHOULD...  ://
        //: "KEEP IT SIMPLE STUPID".         ://
        //:----------------------------------://

        I am really questioning if this is a good
        idea or not. We are going to do it and
        see how we like it. DATE[ 2022_07_23 ]

    @i_taskarr@ : Use[ i_tar ]
    @taskarr@   : Use[   tar ]
    @o_taskarr@ : Use[ o_tar ]

    @i_tar@ : Input  task array object.
    @o_tar@ : Output task array object.
      @tar@ : Local  task array object.

    @e_s@ : Extra_Slash

    @nsh_ooi@ : NonStandardHeader_OriginOfImage

    @EDCL@ : Expected_Dead_Code_Line

    @_void_@ : A note to myself that the function 
             : returns void.
    
    @o_vod_promise@ : A promise that when resolved,
                    : gives ZERO ARGUMENTS to it's
                    : "ACCEPTOR" function. ( o_k_yes() )

    NOW_DATE[ 2022_07_23 ]TIME[ 0336 ]PM

        Just finished writing 1st draft of :
        [ F_HOTEL13_CAS_COOHASH_SCATPNG ]

        A bit nervous to run the code because I don't
        know what the fuck I am doing and a lot of
        experimental stuff in this.

        General idea: Tightly couple the server
        and client code so that code is less
        "spaghetti" and easy to find what I am 
        looking for.

        CAS_COOHASH_SCATPNG is used to get a levelpack
        .PNG file using a coordinate has. It is designed
        so that is can be called on the client side
        or server side.

        Always returns a promise. Promise resolves
        iself by returning a[ scatpng ]object which
        may or may not contain a .PNG binary file.

    #_ABOUT_CAS_FUNCTIONS_# :

        //:#_ABOUT_CAS_FUNCTIONS_#:==========================://
        //:                                                  ://
        //:  CAS : Client_And_Server                         ://
        //:      : Designed to tightly couple a function     ://
        //:      : that is available on both the client      ://
        //:      : and server, to make routing less          ://
        //:      : of hard-to-follow spaghetti code.         ://
        //:                                                  ://
        //:      : Since it is called "Client_And_Server"    ://
        //:      : The "Client" section should always        ://
        //:      : come first.                               ://
        //:                                                  ://
        //:      : TAG[ #_CLIENT_AND_SERVER_# | #CAS# ]      ://
        //:                                                  ://
        //:  UPDATE:                                         ://
        //:                                                  ://
        //:     There is OTHER CODE that runs on both        ://
        //:     client and server, but[ CAS ]is              ://
        //:     specifically for SERVER ROUTES.              ://
        //:                                                  ://
        //:     DATE[ 2022_07_23 ]TIME[ 0427 ]AM             ://
        //:                                                  ://
        //:==========================:#_ABOUT_CAS_FUNCTIONS_#://


    #_TASK_ARRAY_MIGHT_BE_TOO_COMPLEX_# ://

        //:----------------------------------------------://
        //: I question if "re-inventing" promises is     ://
        //: a good idea. But... You have to try things   ://
        //: and see if they work. Maybe this is          ://
        //: a whole bunch of code that overly            ://
        //: complicates things, maybe it's a good        ://
        //: idea... We will see.                         ://
        //: DATE[ 2022_07_23 ]TIME[ 116AM ]              ://
        //:----------------------------------------------://

    #_DONT_UPLICATE_CONTENT_TYPES_IF_PART_OF_AIM_# :

        The "not_aim" gaurd is here because it is okay
        for these to exist on CLIENT and SERVER side,
        but if[ HOTEL13.JS ]is injected into
        [ AIM/server.js ]then we want to __NOT__ define
        these mimetypes here because[ AIM/server.js ]
        already defines them.

        DATE[ 2022_07_23 ]TIME[ 508 ]AM

    #_CAN_EXIST_IN_ALL_NODE_JS_ENVIRONMENTS_# :

        We might want these database commands to be
        available when[ HOTEL13.JS ]is integrated
        into the main[ AIM/server.js ]code.
    
        So we will allow it to be declared in 
            
        ANY node.js environment.

        DATE[ 2022_07_23 ]TIME[ 508 ]AM

    #_HOTEL13_SERVER_ONLY_# :

        These libraries should only be included if
        we are in stand-alone hotel.js server mode.

        If we are injecting[ HOTEL.JS ]into
        [ AIM/server.js ]then these libraries have
        already been declared by other code.
    
        DATE[ 2022_07_23 ]TIME[ 508 ]AM

    @arr_dat@ : Array of "data" chunks.
    @cat_dat@ : All data chunks concatinated together.
    

*** ****************************************** HASHTAG_SEC - ***
*** ****************************************** HASHTAG_NOTES **/

