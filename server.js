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
        
:::----------------------------------------------------------**/
//:===================:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]://
//:ENVIRONMENT_DETECTION:====================================://

    var yesnode =( "undefined" === typeof window );
    var notnode =( "undefined"  != typeof window );

//:====================================:ENVIRONMENT_DETECTION://
//:MASTER_DECLARATION_DATA:[035]:============================://

    //:--------------------------------------------------://
    //:   !s!   : server only                            ://
    //:   !c!   : client only                            ://
    //:   !a!   : all sides have access                  ://
    //: "[nil]" : explicit [ nil / null ]                ://
    //:--------------------------------------------------://

if( yesnode ){ //:-------------------------------------------://



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

    var d_sob ={
        m_ask : "[nil][!s!:m_ask]"    //: ask  == request    ://
    ,   m_giv : "[nil][!s!:m_giv]"    //: give == response   ://
    ,   m_url : "[nil][!s!:m_url]"    //: path(relative_url) ://
    ,   m_pam : "[nil][!s!:m_pam]"    //: query params dict  ://
    ,   m_seg : "[nil][!s!:m_seg]"    //: url segments array ://    
    };;


};; //:------------------------------------------------------://
if( notnode ){ //:-------------------------------------------://


    
    var d_can = "[nil][!c!:d_can]" ;  //: Html5 Canvas  [035]://
    var d_wgl = "[nil][!c!:d_wgl]" ;  //: WebGL Context [035]://



};; //:------------------------------------------------------://
if( yesnode || notnode ){ //:--------------------------------://



    //:XXXXXXXXXXXXXXXXXXXX://



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

    var l_fs  = require( "fs"               );
    var l_url = require( "url"              );
    var l_qs  = require( "node:querystring" );

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
    
        if( notnode ){ alert( "[ERR]:" + i_msg ); };
                       throw( "[ERR]:" + i_msg );
    };;
    function LOG( i_msg , i_any ){
    
        console.log( i_msg , ":" , i_any );
    };;
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
//:DATA_BOTHENDS:============================================://

    /** ************************************ **/
    /** RELOCATED_TO:MASTER_DECLARATION_DATA **/
    /** ************************************ **/

    //! DELETE THIS SECTION IN FUTURE (tutorial 42 ) !//

//:============================================:DATA_BOTHENDS://
//:DATA_SERVER_BACKEND:======================================://

    /** ************************************ **/
    /** RELOCATED_TO:MASTER_DECLARATION_LIBS **/
    /** ************************************ **/

    //! DELETE THIS SECTION IN FUTURE (tutorial 42 ) !//

//:======================================:DATA_SERVER_BACKEND://
//:INIT_CLIENT_FRONTEND:[035]:===============================://
if( notnode ){  window.onload = function( /** [030] **/ ){

    F_INI_CLI(); //:INItialize_CLIent://

};; };;
//:===============================:INIT_CLIENT_FRONTEND:[035]://
//:INIT_SERVER_BACKEND:[035]:================================://
if( yesnode ){

require( "http" ).createServer( function( i_ask , i_giv ){

    //:load_state_object_bundle:-------------------------://
                                                         ;;;
    d_sob.m_ask = i_ask                                  ;;;
    d_sob.m_giv = i_giv                                  ;;;
    d_sob.m_url = l_url.parse( i_ask.url , 1 ).pathname  ;;;
    d_sob.m_pam = l_qs .parse( i_ask.url , 1 ).query     ;;;
    d_sob.m_seg = [ "URLPATH_SEGMENTS_NOT_LOADED]" ]     ;;;
                                                         ;;;
    //:-------------------------:load_state_object_bundle://

    d_sob.m_url = d_sob.m_url.toUpperCase();         //!#MRI#!//

    if( d_sob.m_url == "/HELLO" ){

        d_sob.m_giv.end( "WORLD" );
    }else
    if( d_sob.m_url == "/ATOMIC_IVY_MMO" ){

        l_fs.readFile( "./server.js" , function(i_err,i_cof){

            if(i_err){
                i_cof = "[we messed up]" ;
            }else{
                d_sob.m_giv.writeHead( 200 , d_js );
            };;
            d_sob.m_giv.end( i_cof , "utf-8" );
        });;
    }else{

        d_sob.m_giv.writeHead( 200 ,  d_htm  );
        d_sob.m_giv.end( d_webpage , "utf-8" );
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

    @TIK@ : TICK ( as in update tick )
    @GUL@ : Game_Update_Loop

    @dom_roo@ : DomainObjectModel - Root
    @dom_bod@ : DomainObjectModel - Body
    @doc_bod@ : Means[ document body ]USE[ dom_bod ]
    @dom_can@ : DomainObjectModel - Canvas

    @RES_CAN@ : RESize_CANvas

    @DODS@ : Data_Oriented_Design'S

    #MRI# : Make Routing ( case ) Insensitive 

    #_P_N_C_# : Paranoid_Null_Check



*** ******************************************************** **/