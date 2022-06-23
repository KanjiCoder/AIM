//:ATOMIC_IVY_MMO_SOURCE_CODE:[034]:=========================://
/**----------------------------------------------------------:::

    Tutorial Where We Build This File ::::::::::::::::::::::::::

        www.tinyurl.com/BOMB-GAME-TUTORIAL        <<< Same_Place
        www.tinyurl.com/GAME-TUTS                 <<< Same_Place

:::----------------------------------------------------------:::

    Git Repo With All Source Code ::::::::::::::::::::::::::::::

        github.com/KanjiCoder/AIM                 <<< Same_Place
        tinyurl.com/ATOMIC-IVY-MMO-SOURCE-CODE    <<< Same_Place
        tinyurl.com/GAME-CODE                     <<< Same_Place
        
:::----------------------------------------------------------**/
//:=========================:ATOMIC_IVY_MMO_SOURCE_CODE:[034]://
//:DEPLOY_THIS_SERVER_YOURSELF:[034]:========================://
/**----------------------------------------------------------:::

    Atomic_Ivy_MMO (AIM) client _AND_ server.

    If you are looking at this code in a debugger, 
    you could copy+paste it and deploy it RIGHT NOW!

    Deployment Steps :
    
    1. Copy Everything You See And Save As "server.js"
    
    2. create package.json that looks like this:

        STEP 2 FOR PROGRAMMERS :

            touch package.json
            echo "{}" > package.json
        
        STEP 2 FOR ARTISTS :

            +---------------------------------------+
            | Notepad ++ : server.js        |[-]|[X]|
            +---------------------------------------+
            |         |                             |
            | LINE 01 |  { }                        |
            |         |                             |
            +---------+-----------------------------+
    
    3. git init . && git add . && git commit -m "[AIM]"
    
    4. heroku apps:create my-atomic-ivy-server
    
    5. git push heroku master
    
:::----------------------------------------------------------**/
//:========================:DEPLOY_THIS_SERVER_YOURSELF:[034]://
//:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]:===================://
/**----------------------------------------------------------:::

    DODS Hungarian Notation :       [DODS: DataOrientedDesign's]              

        d_    : data     ( GLOBAL ) 
        f_    : function ( GLOBAL ) 
        l_    : library  ( GLOBAL ) 
        
        m_    : member   ( LOCAL  )
        i_    : input    ( LOCAL  )
        o_    : output   ( LOCAL  )

    SQL Table Prefixes :                             //:[041]://
                                                     //:[041]://
        @tab@ : tab_ : A Normal Table                //:[041]://
        @lnk@ : lnk_ : A Link   Table                //:[041]://    
        @con@ : con_ : A CONstraint                  //:[042]://
         @c_@ :   c_ : Column Name                   //:[041]://
         @k_@ :   k_ : Foriegn_Key ( id )            //:[041]://
        @iid@ : iid  : Primary_Key , NOT A PREFIX    //:[041]://
                                                     //:[041]://
        NO MORE SQL PREFIXES THAN THAT!!!            //:[041]://

:::----------------------------------------------------------**/
//:===================:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]://
//:ENVIRONMENT_DETECTION:====================================://

    const yesnode =( "undefined" === typeof window );//:[042]://
    const notnode =( "undefined"  != typeof window );//:[042]://

//:====================================:ENVIRONMENT_DETECTION://
//:ILLEGAL_STUFF_GO_STRAIGHT_TO_JAIL:[042]:==================://

    const d_sob =( "" /////////////////// //: < < < < < [042]://
    +    "[WHAT_THE_FUCK_WAS_I_THINKING]" //: < < < < < [042]:// 
    +    "[THIS_OBJECT_CANNOT_BE_GLOBAL]" //: < < < < < [042]:// 
    +    "[FIXED_IN_TUTORIAL_042.......]" //: < < < < < [042]://
    );; ///////////////////////////////// //: < < < < < [042]://

//:==================:ILLEGAL_STUFF_GO_STRAIGHT_TO_JAIL:[042]://
//:MASTER_DECLARATION_DATA:[035]:============================://

    //:--------------------------------------------------://
    //:   !s!   : server only                            ://
    //:   !c!   : client only                            ://
    //:   !a!   : all sides have access                  ://
    //: "[nil]" : explicit [ nil / null ]                ://
    //:--------------------------------------------------://

if( yesnode ){ //:-------------------------------------------://

    const n = "\n" ; //: @n@ : New_Line_Char  ::::::::::[041]://
                     //:const == block scope  ::::::::::[041]://

    var d_cts_tab_hex =( "                  "+n      //:[041]://
    +"  CREATE TABLE IF NOT EXISTS tab_hex( "+n      //:[041]://
    +"       iid SERIAL PRIMARY KEY         "+n      //:[041]://
    +"  ,  c_hex INT CHECK ( c_hex >= 0 )   "+n      //:[041]://
    +"  ,  c_nam VARCHAR( 64 )              "+n      //:[042]://
    +"  );;                                 "+n      //:[041]://
    );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;      //:[041]://

    var d_dbu = process.env.DATABASE_URL ;      //:[040]@dbu@://
    var d_cin ={                                //:[040]@cin@://
        connectionString : d_dbu                //:[040]@c_s@://
    ,   ssl : { rejectUnauthorized : false }    //:[040]@ssl@://
    };;                                         //:[040] --- ://
    var d_dcp = "[nil][!s!:d_dcp]"       ;      //:[040]@dcp@://

    var d_webpage =( "" //:------------------://
    +'      <!DOCTYPE HTML><head>              '
    +'      <meta charset="utf-8"><title>      '
    +'          [AIM]                          '
    +'      </title>                           '
    +'          <script                        '
    +'              src    ="./ATOMIC_IVY_MMO" '
    +'              charset="UTF-8">           '
    +'          </script>                      '
    +'      </head>                            '
    );; //:----------------------------------://

    var d_txt = { "Content-Type": "text/plain"               } ;
    var d_png = { "Content-Type": "image/png"                } ;
    var d_htm = { "Content-Type": "text/html"                } ;
    var d_js  = { "Content-Type": "text/javascript"          } ;
    var d_exe = { "Content-Type": "application/x-msdownload" } ;
    var d_css = { "Content-Type": "text/css"                 } ;

    console.log( "[d_dbu]" , d_dbu );

};; //:------------------------------------------------------://
if( notnode ){ //:-------------------------------------------://


    
    var d_can = "[nil][!c!:d_can]" ;  //: Html5 Canvas  [035]://
    var d_wgl = "[nil][!c!:d_wgl]" ;  //: WebGL Context [035]://



};; //:------------------------------------------------------://
if( yesnode || notnode ){ //:--------------------------------://



    //:XXXXXXXX_WHAT_DOES_MARCELLUS_WALLUS_LOOK_LIKE_XXXXXXXX://



};; //:------------------------------------------------------://
//:============================:MASTER_DECLARATION_DATA:[035]://
//:MASTER_DECLARATION_LIBS:[035]:============================://
if( yesnode ){ //:-------------------------------------------://

    /** ************************************************ **/
    /** "l_" prefix is only for libraries gotten with    **/
    /** "require". Canvas and WebGl could technically be **/
    /** thought of as "libraries" as well. But decided   **/
    /** categorizing them as "data" was better move.     **/
    /** ************************************************ **/

    var l_pg  = require( "pg"   /**[040]**/ );  //:PostGreSQL://
    var l_fs  = require( "fs"               );  //:FileSys   ://
    var l_url = require( "url"              );  //: U.R.L.   ://
    var l_qs  = require( "node:querystring" );  //:QueryStr  ://

};; //:------------------------------------------------------://
//:============================:MASTER_DECLARATION_LIBS:[035]://
//:MASTER_DECLARATION_FUNC:[035]:============================://
    
    /** ************************************************ **/
    /** This section was a BAD IDEA. Because functions   **/
    /** end up too deeply nested. Just give each         **/
    /** function it's own unique code section and        **/    
    /** stack all functions in continguous strip         **/
    /** within the sourc code. -KanjiCoder               **/
    /** ************************************************ **/

//:============================:MASTER_DECLARATION_FUNC:[035]://
//:FUNC_BOILERPLATE:[028]+[035]:=============================://

    function ERR( i_msg ){
    
        if( 1 === 1 ){ console.log( "[ERR]:" + i_msg ); };      
        if( notnode ){       alert( "[ERR]:" + i_msg ); };      
        if( notnode ){       throw( "[ERR]:" + i_msg ); };      
        if( yesnode ){  process.exit( 40 /**[040]**/ ); };      
    };;
    function LOG( i_msg , i_any ){
    
        if( undefined != i_any ){                    //:[040]://

            console.log( i_msg , ":" , i_any  );
        }else{
            console.log( i_msg , ":" , "[UND]" );    //:[040]://
        };;
    };;
    function MSG( i_msg ){                           //:[040]://
        if( typeof i_msg != "string" ){              //:[040]://
            console.log( "[MSG_IS_FOR_STRINGS]" );   //:[040]://
        }else{                                       //:[040]://
            console.log( i_msg );                    //:[040]://
        };;                                          //:[040]://
    };;                                              //:[040]://
    function HAS( i_obj ){
    
        var o_has =( 0 );
    
        if( typeof i_obj === "string" ){

            /** Detect Custom Nil ( "[nil]" ) **/

            if( 1
            &&   ( "[" === i_obj[0] )
            &&   ( "n" === i_obj[1] )
            &&   ( "i" === i_obj[2] )
            &&   ( "l" === i_obj[3] )
            &&   ( "]" === i_obj[4] )
            ){
                o_has =( 0 );  
            }else{
                o_has =( 1 );
            };;
        }else{
            if( null      == i_obj
            ||  undefined == i_obj
            ||            ( !i_obj )
            || ""         == i_obj
            ){
                o_has =( 0 );
            }else{
                o_has =( 1 );
            };;
        };;

        return( o_has );
    };;
    function NIL( i_obj ){                       //:[040]://    
                                                                
        /** ******************************************** **/    
        /** DONT: return( ! HAS( i_obj ) ) ************* **/    
        /** We want an integer , not bool "true"/"false" **/    
        /** ******************************************** **/    
                                                                
        var o_nil = ( 666 );                     //:[040]://    
        var   has =( HAS( i_obj ) );             //:[040]://    
        if( 0 == has ){ o_nil =( 1 ); };         //:[040]://    
        if( 1 == has ){ o_nil =( 0 ); };         //:[040]://    
                                                 //:[040]://    
        return( o_nil );                         //:[040]://    
    };;                                                                                                                         
//:=============================:FUNC_BOILERPLATE:[028]+[035]://
//:FUNC_RESIZE_CANVAS:[032]+[035]:===========================://

    const F_RES_CAN = function PRIVATE_F_RES_CAN( ){

        let wid =( 0 - 333 /** wid : Client Width  **/ );
        let hig =( 0 - 666 /** hig : Client Height **/ );
        let   W = window ;
        let   D = document.documentElement ;
        let   B = document.body            ;
        
        wid =(W.innerWidth ||D.clientWidth ||
                             B.clientWidth || 0 );;
        hig =(W.innerHeight||D.clientHeight||
                             B.clientHeight|| 0 );;
        
        d_can.width = wid ;
        d_can.height= hig ;
    };;
//:===========================:FUNC_RESIZE_CANVAS:[032]+[035]://
//:FUNC_GAME_UPDATE_TICK:[036]:==============================://

    const F_TIK = function PRIVATE_F_TIK( i_tim ){   //:@TIK@://

        /** ************************************ **/
        /** Games "Main" loop that updates both  **/
        /** rendering and game logic.            **/
        /** ************************************ **/

        var _R_ = ( i_tim % 255.000 );
        if( _R_ > 255.0 ){ ERR("[_R_]"); };
            _R_ = ( _R_ / 255.0 );

        d_wgl.clearColor( _R_ , 0.0 , 0.0 , 1.0 );
        d_wgl.clear( d_wgl.COLOR_BUFFER_BIT );
    };;
//:==============================:FUNC_GAME_UPDATE_TICK:[036]://
//:FUNC_GAME_UPDATE_LOOP:[036]:==============================://

    const F_GUL = function PRIVATE_F_GUL( i_tim ){ //: @GUL@ ://

        F_TIK( i_tim );

        window.requestAnimationFrame( F_GUL );
    };;
//:==============================:FUNC_GAME_UPDATE_LOOP:[036]://
//:FUNC_INITIALIZE_CLIENT:[035]:=============================://

    const F_INI_CLI = function PRIVATE_F_INI_CLI(){

    //:client_global_data:[031]:-------------------------://

        const dom_can = "[REFACTORED_TO:d_can:[035]]" ;
       
    //:-------------------------:client_global_data:[031]://
    //:boilerplate:[028]:--------------------------------://

        //:MOVED_TO:FUNC_BOILERPLATE://

    //:--------------------------------:boilerplate:[028]://
    //:function_canvas_resize:[032]:---------------------://

        //:MOVED_TO:FUNC_RESIZE_CANVAS://

    //:---------------------:function_canvas_resize:[032]://
    //:html_dom_setup:[029]:-----------------------------://

        const dom_roo = document.documentElement; 
        var   dom_bod = document.body           ; 

        if( HAS( dom_roo ) ){
            LOG( "[dom_roo]" , dom_roo );
        }else{
            ERR( "[dom_roo]" );
        };;
        if( HAS( dom_bod ) ){

            /** Okay. Do nothing. Already Exists. **/
        }else{
            /** Create Document Element **/
            LOG( "[bef:dom_bod]" , dom_bod );
            dom_bod = document.createElement( "body" );
            document.body = dom_bod ;
        };;

        LOG( "[dom_bod]" , dom_bod );

    //:-----------------------------:html_dom_setup:[029]://
    //:html_dom_setup:[031]:-----------------------------://    
    {
        d_can = document.createElement( "canvas" );
        dom_bod.appendChild( d_can );

        F_RES_CAN( );
    }
    //:-----------------------------:html_dom_setup:[031]://
    //:html_dom_setup:[032]:-----------------------------://

        window.addEventListener( "resize" , F_RES_CAN );

    //:-----------------------------:html_dom_setup:[032]://
    //:webgl_setup:[033]:--------------------------------://

        const wgl = "[REFACTORED_TO:d_wgl:[035]]" ;

        d_wgl = d_can.getContext( "webgl" );         
        //:.clearColor( _R_  ,  _G_  ,  _B_  ,  _A_ );   ://
        d_wgl.clearColor( 0.0  ,  1.0  ,  0.0  ,  1.0 );
        d_wgl.clear( d_wgl.COLOR_BUFFER_BIT );

    //:--------------------------------:webgl_setup:[033]://
    //:enter_infinite_loop:[036]:------------------------://

        F_GUL( 0.0 ); 

    //:------------------------:enter_infinite_loop:[036]://

    };;
//:=============================:FUNC_INITIALIZE_CLIENT:[035]://
//:FUNC_DATABASE_CONNECTION_SMOKETEST:[040]:=================://
                                                                
    const F_TDC = function PRIVATE_F_TDC( ){   //:@TDC@:[040]://
                                                     //:[040]://
        d_dcp.connect( ( i_err , i_cli , i_don )=>{  //:[040]://
                                                     //:[040]://
            if( i_err ){                             //:[040]://
                LOG( "[d_dbu...]" , d_dbu );         //:[040]://
                LOG( "[error_is]" , i_err );         //:[040]://
                ERR( "[sorry!!!]"         );         //:[040]://
            };;                                      //:[040]://
            /** Assert Client ( @i_cli@ ) Exists **/ //:[040]://
            if( HAS( i_cli ) ){ LOG( "[exists]" ); };//:[040]://
            if(!HAS( i_cli ) ){ ERR( "[notcli]" ); };//:[040]://
                                                     //:[040]://
            i_don();    //: @don@ : PGSQL Done Function [040]://
        });;                                         //:[040]://
    };;                                              //:[040]://
//:=================:FUNC_DATABASE_CONNECTION_SMOKETEST:[040]://
//:FUNC_NIL_DATABASE_URL_MESSAGE:[040]:======================://
                                                                
    const F_MSG_NIL_DBU = function PRIVATE_F_MSG_NIL_DBU(){     
                                                                
        MSG('[YOU_DONT_HAVE_A_DATABASE!!!!!!]'); //:[040]://    
        MSG('[THE_SOLUTION_IS_BELOW!!!!!!!!!]'); //:[040]://    
        MSG('                                '); //:[040]://    
        MSG('+------------------------------+'); //:[040]://    
        MSG('|  ## BELOW IS ONE LINE! ##    |'); //:[040]://    
        MSG('|                              |'); //:[040]://    
        MSG('|  heroku addons:create        |'); //:[040]://    
        MSG('|  heroku-postgresql:hobby-dev |'); //:[040]://    
        MSG('|  --version=14                |'); //:[040]://    
        MSG('|  --app  "APPNAME"            |'); //:[040]://    
        MSG('|  --name "APPNAME-database"   |'); //:[040]://    
        MSG('|                              |'); //:[040]://    
        MSG('+------------------------------+'); //:[040]://    
    };;                                                         
//:======================:FUNC_NIL_DATABASE_URL_MESSAGE:[040]://
//:FUNC_INITIALIZE_SERVER_DATA:[040]:========================://
                                                                
    const F_ISD = function PRIVATE_F_ISD(){          //:[040]://
                                                                
        MSG( "[BEG:F_ISD]" );                        //:[040]://
                                                                
        if( NIL( d_dbu ) ){                          //:[040]://
            F_MSG_NIL_DBU(); //:NullDatabaseMessage    :[040]://
        }else{                                       //:[040]://
            d_dcp =( new ( l_pg.Pool )( d_cin ) );   //:[040]://
                                                                
            d_dcp.on( "error" , ( i_err , i_cli ) =>{//:[040]://
                                                                
                ERR( "[oh_nooo_bro![040]!]" );       //:[040]://
            });;                                     //:[040]://
        };;                                          //:[040]://
                                                                
        MSG( "[END:F_ISD]" );                        //:[040]://
    };;                                                         
//:========================:FUNC_INITIALIZE_SERVER_DATA:[040]://
//:FUNC_CREATE_TABLE_STATEMENT:[041]:========================://
//:_____C______T_____S_______________________________________://

    const F_CTS = function PRIVATE_F_CTS(            //:[041]://
                                                     //:[041]://
        i_cts ,i_tbm                                 //:[041]://
    ){                                               //:[041]://
        d_dcp                                        //:[041]://
        .query( i_cts )                              //:[041]://
        .then( function( i_res ){                    //:[041]://
                                                     //:[041]://
            LOG( "[cts_o_k:tbm]" , i_tbm );          //:[041]://
        })                                           //:[041]://
        .catch( function( i_err ){                   //:[041]://
                                                     //:[041]://
            LOG( "[cts_err:tbm]" , i_tbm );          //:[041]://
            ERR( "[cts_err:tbm]"         );          //:[041]://
        })                                           //:[041]://
        ;;                                           //:[041]://
    };;                                              //:[041]://
//:__________________________________________________________://
//:______________________________C______T_____S______________://
//:========================:FUNC_CREATE_TABLE_STATEMENT:[041]://
//:001_001_001_001_001_001_001____001_001_001_001_001_001_001://
//:                                                          ://
//:     SYSNAME_ASERVER ( A SERVER )                         ://
//:                                                          ://
//:001_001_001_001_001_001_001____001_001_001_001_001_001_001://

    const   F_ASERVER_END_O_K = function
    PRIVATE_F_ASERVER_END_O_K(

        i_sob 
    ){
        i_sob.m_giv.writeHead( 200 ,  d_txt  );
        i_sob.m_giv.end( "[O_K][WHATEVER_YOU_SAY_BRO]" );
    };;
//:001_001_001_001_001_001_001____001_001_001_001_001_001_001://
//:                                                          ://
//:     SYSNAME_ASERVER ( A SERVER )                         ://
//:                                                          ://
//:001_001_001_001_001_001_001____001_001_001_001_001_001_001://
//:002_002_002_002_002_002_002____002_002_002_002_002_002_002://
//:                                                          ://
//:     SYSNAME_DABITCH ( DAtabase Bitch )                   ://
//:                                                          ://
//:002_002_002_002_002_002_002____002_002_002_002_002_002_002://

    const   F_DABITCH_DROPTAB_TAB_HEX = function
    PRIVATE_F_DABITCH_DROPTAB_TAB_HEX(

        /** No Argument List **/
    ){

        console.log( "[TODO:DROP_TABLE]" );
    };;
//:002_002_002_002_002_002_002____002_002_002_002_002_002_002://
//:                                                          ://
//:     SYSNAME_DABITCH ( DAtabase Bitch )                   ://
//:                                                          ://
//:002_002_002_002_002_002_002____002_002_002_002_002_002_002://
//:INIT_CLIENT_FRONTEND:[035]:===============================://
if( notnode ){  window.onload = function( /** [030] **/ ){

    F_INI_CLI(); //:INItialize_CLIent://

};; };;
//:===============================:INIT_CLIENT_FRONTEND:[035]://

//:INIT_SERVER_BACKEND:[035]:================================://
if( yesnode ){

    if( NIL( d_dbu ) ){                        //: [040] ://      
        F_MSG_NIL_DBU();                       //: [040] ://      
    }else{                                     //: [040] ://      
        F_ISD();     //:Initialize_Server_Data   : [040] ://          
        F_TDC();     //:Test_Database_Connection : [040] ://   
        
        //:Create_Table_Statements:[041]:----------------://    
                                                                
            F_CTS( d_cts_tab_hex , "[tab_hex]" );//:[041]://    
                                                                
        //:----------------:Create_Table_Statements:[041]://    
    };;                                                         

require( "http" ).createServer( function( i_ask , i_giv ){

    const   sob ={  //:----------------------------------://
        m_ask : "[nil][!s!:m_ask]"  //: < < < < < < [042]://
    ,   m_giv : "[nil][!s!:m_giv]"  //: < < < < < < [042]://    
    ,   m_url : "[nil][!s!:m_url]"  //: < < < < < < [042]://    
    ,   m_pam : "[nil][!s!:m_pam]"  //: < < < < < < [042]://    
    ,   m_seg : "[nil][!s!:m_seg]"  //: < < < < < < [042]://      
    };; //:----------------------------------------------://
    //:load_state_object_bundle:-------------------------://
                                                         ;;;
    sob.m_ask = i_ask                                    ;;;
    sob.m_giv = i_giv                                    ;;;
    sob.m_url = l_url.parse( i_ask.url , 1 ).pathname    ;;;
    sob.m_pam = l_qs .parse( i_ask.url , 1 ).query       ;;;
    sob.m_seg = [ "URLPATH_SEGMENTS_NOT_LOADED]" ]       ;;;
                                                         ;;;
    //:-------------------------:load_state_object_bundle://

    sob.m_url = sob.m_url.toUpperCase();         //!#MRI#!//

    if( sob.m_url == "/HELLO" ){

        sob.m_giv.end( "WORLD" );
    }else
    if( sob.m_url == "/ATOMIC_IVY_MMO" ){

        l_fs.readFile( "./server.js" , function(i_err,i_cof){

            if(i_err){
                i_cof = "[we messed up]" ;
            }else{
                sob.m_giv.writeHead( 200 , d_js );
            };;
            sob.m_giv.end( i_cof , "utf-8" );
        });;
    }else
    if(  1
    &&   "DABITCH" === sob.m_seg[ 0 ] //: < < < < < < < [042]://
    &&   "DROPTAB" === sob.m_seg[ 1 ] //: < < < < < < < [042]://
    &&   "TAB_HEX" === sob.m_seg[ 2 ] //: < < < < < < < [042]://
    ){   //: PATH :   DABITCH/DROPTAB/TAB_HEX < < < < < [042]://
         //: FUNC : F_DABITCH_DROPTAB_TAB_HEX < < < < < [042]://
                                                     //:[042]://
        F_DABITCH_DROPTAB_TAB_HEX( );                //:[042]://
        F_ASERVER_END_O_K( sob );                    //:[042]://
    }else{

        sob.m_giv.writeHead( 200 ,  d_htm  );
        sob.m_giv.end( d_webpage , "utf-8" );
    };;

}).listen(process.env.PORT);

};;
//:================================:INIT_SERVER_BACKEND:[035]://

/** CHANGE_HISTORY ***************************************** ***

    TUTORIAL PART 018 : https://pastebin.com/ZCFNxebJ
                      : tinyurl.com/SERVER-JS-PART-18
                      : git@github.com:KanjiCoder/AIM_018.git
                      : https://github.com/KanjiCoder/AIM_018

*** ***************************************** CHANGE_HISTORY **/
/** SNAPSHOT_REPOS ***************************************** ***

    github.com/KanjiCoder/AIM_035    ( end of tutorial 35 code )

*** ***************************************** SNAPSHOT_REPOS **/
/** WEIRD_CODING_CONVENTIONS ******************************* ***

       var          |
       var_var      |  All tokens ( variables & functions )
       varavar      |             ( & namespaces          )
       var_var_var  |  Are clusters of 3 joined by "_"
       varavaravar  |  or an alphanumeric character.
       123_123_123  |
       123_1234567  |  Exception is 1 letter hungarian
                    |  notation prefixes. 
                    +------------------------------------------+
   


*** ******************************* WEIRD_CODING_CONVENTIONS **/
/** PREFIXES *********************************************** ***
    
    GLOBAL SCOPE PREFIXES :

        d_    : data        ( GLOBAL data  )
        f_    : function    ( GLOBAL func  )
        l_    : library     ( GLOBAL lib   )

    LOCAL SCOPE PREFIXES :

        m_    : member variable prefix.
        i_    : formal parameter argument ( i == input  )
        o_    : output argument from func ( o == output )

*** ******************************************************** **/
/** DONT_USE_THESE_AS_PREFIXES ***************************** ***

    LIB_  : any library we got by using require function
          : ( use l_ instead of LIB_ for terseness )

    c_    : client - only 
    s_    : server - only
    b_    : BOTH ( known by both client and server )
    g_    : global

    m_    : macro       NO MACROS IN JAVASCRIPT , simplify.
    t_    : type        TRY_NOT_TO_USE_THIS
    u_    : unit test   Unit tests are functions ( f_ )

    dat_  : Too verbose for this coarse grain category.
          : use "d_" prefix for "data".

    fun_  : Too verbose for this coarse grain category.
          : use "f_" prefix for "functions"

    lib_  : Too verbose for this coarse grain category.
          : use "l_" prefix for "libraries"

*** ******************************************************** **/
/** COMMENTS_ARE_READ_LAST_OR_NEVER ************************ ***

    @LIB_URL@ : LIBRARY : Universal Resource Locator
    @LIB_Q_S@ : LIBRARY : QueryString

    @sob@ : State Object Bundle
    @ask@ : What client is asking for ( request  / req )
    @giv@ : What server is giving  us ( response / res )
    @url@ : /URL/NOT/INCLUDING/ROOT/DOMAIN
    @pam@ : query parameters dictionary
    @seg@ : @url@ parts packed into an array
    @has@ : Has as in "does object exist" ?
    @any@ : Any type
    @obj@ : An object type. So NOT a number or BOOL or STRING.
    @wid@ : The WIDTH  (usually pixels) of something.
    @hig@ : The HEIGHT (usually pixels) of something.
    @wgl@ : Web_GL ( context object )
    @dbu@ : Data_Base_URL
    @cin@ : Connection_INformation
    @dcp@ : Database_Connection_Pool
    @err@ : Error
    @cli@ : Client ( postgres )
    @don@ : Done   ( postgres "done" function pointer )
    @c_s@ : ConnectionString
    @ssl@ : Secure_Sockets_Layer
    @cts@ : Create_Table[ Statement | Source ]
    @tbm@ : Trace_Back_Message
    @dbs@ / @d_dbs@ : WRONG[ data_base_string ]FIX[ dbu ]

    @TIK@ : TICK ( as in update tick )
    @GUL@ : Game_Update_Loop
    @TDC@ : Test_Database_Connection

    @dom_roo@ : DomainObjectModel - Root
    @dom_bod@ : DomainObjectModel - Body
    @doc_bod@ : Means[ document body ]USE[ dom_bod ]
    @dom_can@ : DomainObjectModel - Canvas

    @RES_CAN@ : RESize_CANvas

    @DODS@ : Data_Oriented_Design'S

    #MRI# : Make Routing ( case ) Insensitive 

    #_P_N_C_# : Paranoid_Null_Check

    @F_INI_SER@ : Initialize Server ( SEE[ F_ISD ] )
    @F_ISD@     : Initialize Server Data
    @F_CTS@     : Create_Table_Statement ( run the statement )
    @F_IST@     : Init_SQL_Table

     1234567
    @DROPTAB@   : Means "Drop Table"


    @m_ask@ : ask  == request     
    @m_giv@ : give == response    
    @m_url@ : path(relative_url)  
    @m_pam@ : query params dict   
    @m_seg@ : url segments array  


*** ******************************************************** **/
/** CONCEPTUAL_SUB_SYSTEM_NAMESPACES *********************** ***

    Just because the physical structure of the code is
    "just dump it all in one file" doesn't mean we can't
    have a conceptual structure of how the project is
    organized.

    1234567
    DABITCH : DAtabase BITCH , anything that involves
   @DABITCH@: database access goes through her. Because
            : she is a gossipy bitch and collects
            : all information she hears.

    1234567
    SOCREEP : SOcket CREEP , you say one god damned nice
   @SOCREEP@: thing to him in passing and he gets the 
            : wrong idea and keeps talking to you.
            : He will keep talking to you until you 
            : bluntly cut him off and tell him to 
            : stop talking to you. Because, that is
            : how SOCKETs are.


    


*** *********************** CONCEPTUAL_SUB_SYSTEM_NAMESPACES **/
/** I_TAKE_IT_BACK ***************************************** ***

    @col@ : col_ , use c_ for column prefix instead.

    @fid@ : fid_ : Foriegn_Key ( id ) , use "k_" instead.

    DATA_BOTHENDS       : Section deleted in [042]
    DATA_SERVER_BACKEND : Section deleted in [042]




*** ***************************************** I_TAKE_IT_BACK **/