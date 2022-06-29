//:ATOMIC_IVY_MMO_SOURCE_CODE:[034]:=========================://
/**----------------------------------------------------------:::
    Tutorial Where We Build This File ::::::::::::::::::::::::::

        www.tinyurl.com/GAME-TUTS             //: KANJICODER ://  
        www.tinyurl.com/GAME-TUTS-SLOWER      //: NINJACODER :// 
        www.tinyurl.com/GAME-TUTS-UNSCRIPTED  //:  WEEBCODER ://
:::----------------------------------------------------------:::
    Git Repo With All Source Code ::::::::::::::::::::::::::::::
                                                                
        github.com/KanjiCoder/AIM           <<< Same_Place [066]
        tinyurl.com/GAME-CODE               <<< Same_Place [066]
:::----------------------------------------------------------:::
    CONTACT_CODE_AUTHOR : KanjiCoder@gmail.com             [066]
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
    
    4. heroku apps:create APPNAME     ## Example: "aim-kanji" ##
                                                                
    5. heroku addons:create              \                      
            heroku-postgresql:hobby-dev  \                      
            --version=14                 \                      
            --app  "APPNAME"             \                      
            --name "APPNAME-database"    ## END OF COMMAND ##   
                                                                
    6. heroku labs:enable  runtime-dyno-metadata --app APPNAME  
    
    7. git push heroku master
    
:::----------------------------------------------------------**/
//:========================:DEPLOY_THIS_SERVER_YOURSELF:[034]://
//:HIT_THE_GROUND_RUNNING_MY_FRIEND:[034]:===================://
/**----------------------------------------------------------:::
    
    Coding Convention ( s ):                               [063]
                                                           [063]
        let : Only for temporary [object/system] references[063]
        let : Okay... And for "temp macros"                [066]

    DODS Hungarian Notation :       [DODS: DataOrientedDesign's]              

        c_    : const    ( GLOBAL ) ( use like c99 macros )[064]
        d_    : data     ( GLOBAL ) 
        f_    : function ( GLOBAL ) 
        l_    : library  ( GLOBAL ) 
        
        m_    : member   ( LOCAL  )(SERVER SIDE CODE ONLY) [067]
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
//:STRUCT:[065]:=============================================://

    const STRUCT = function PRIVATE_STRUCT( i_obj ){ //:[065]://
                                                     //:[065]://
        var o_obj = Object.create( null );           //:[065]://
                                                     //:[065]://
        Object.keys(i_obj).forEach( (key,dex)=>{     //:[065]://
                                                     //:[065]://
            o_obj[ ""+key+"" ] =(                    //:[065]://
            i_obj[ ""+key+"" ]   );;                 //:[065]://
                                                     //:[065]://
        });;                                         //:[065]://
                                                     //:[065]://
        Object.seal( o_obj );                        //:[065]://
                                                     //:[065]://
        return( o_obj );                             //:[065]://
    };;                                              //:[065]://

//:=============================================:STRUCT:[065]://
//:CONST_ARR:[066]:==========================================://

    const F_CAR = function PRIVATE_F_CAR(                       // [069]
                                                     //:[066]://
        i_len /** Length Of Array **/                //:[066]://
    ){                                               //:[066]://
        var o_arr = null ;                           //:[066]://
                                                     //:[066]://
        var len   = arguments.length ;               //:[066]://
        var dex   = 0 ;                              //:[066]://
                                                     //:[066]://
        if( len !=( i_len + 1 ) ){                   //:[066]://
                                                     //:[066]://              
            ERR( "[F_CAR:#IAI#]" );                             // [069] 
        }else{                                       //:[066]:// 
                                                     //:[066]://
            o_arr = new Array( i_len );              //:[066]://
                                                     //:[066]://
            for(dex = 0 ; dex<=(i_len-1) ; dex ++){  //:[066]://
                                                     //:[066]://
                o_arr[ dex ] = arguments[ dex + 1 ]; //:[066]://
            };;                                      //:[066]://
        };;                                          //:[066]://
                                                     //:[066]://
        Object.freeze( o_arr );                      //:[066]://
        return( o_arr );                             //:[066]://
    };;                                              //:[066]://

//:==========================================:CONST_ARR:[066]://
//:SHADER_STRING_ARRAY:[069]:================================://// [---]
                                                                // [069]
    const F_SSA = function PRIVATE_F_SSA( //:@SSA@://           // [069]
                                                                // [069]
        i_len //: Length Of Array ://                           // [069]
    ){                                                          // [069]
        var o_arr = null ;                                      // [069]
                                                                // [069]
        var len   = arguments.length ;                          // [069]
        var dex   = 0 ;                                         // [069]
                                                                // [069]
        if( len !=( i_len + 1 ) ){                              // [069]
                                                                // [069]
            ERR( "[SSA:#IAI#]" );                               // [069]
        }else{                                                  // [069]
                                                                // [069]
            o_arr = new Array( i_len );                         // [069]
                                                                // [069]
            for(dex = 0 ; dex<=(i_len-1) ; dex ++){             // [069]
                                                                // [069]
                o_arr[ dex ] = arguments[ dex + 1 ];            // [069]
            };;                                                 // [069]
        };;                                                     // [069]
                                                                // [069]
        Object.freeze( o_arr );                                 // [069]
        return( o_arr );                                        // [069]
    };;                                                         // [069]
                                                                // [069]
//:================================:SHADER_STRING_ARRAY:[069]://// [---]
//:NON_CONST_ARRAY:[067]:====================================://// [---]
                                                                // [069]
    const F_ARR = function PRIVATE_F_ARR( i_len ){              // [069]
        var       o_arr = new Array(      i_len );              // [067]
        return(   o_arr );                                      // [067]
    };;                                                         // [067]
                                                                // [067]
//:====================================:NON_CONST_ARRAY:[067]://// [---]
//:ILLEGAL_STUFF_GO_STRAIGHT_TO_JAIL:[042]:==================://

    //: CTRL_F_TAGS[ #illegal# ]                        [063]://

    const c_artgirl_ren_len =( "[FIX:ren_tot]" );    //:[067]://

    const tcz  =( "[TexCoord.Z:NO_SUCH_THING]" );    //:[066]://

    const d_sob =( "" /////////////////// //: < < < < < [042]://
    +    "[WHAT_THE_FUCK_WAS_I_THINKING]" //: < < < < < [042]://
    +    "[THIS_OBJECT_CANNOT_BE_GLOBAL]" //: < < < < < [042]://
    +    "[FIXED_IN_TUTORIAL_042.......]" //: < < < < < [042]://
    );; ///////////////////////////////// //: < < < < < [042]://

    const d_dbp =( //:It's not "DataBase Pool"          [044]://
        "[FIX:d_dcp(Database_Client_Pool)]" );;      //:[044]://

    const cantsay =( "[FIX:wontsay]" );              //:[045]://

    const cmd_nam =( "[FIX:sql_cmd]" );              //:[056]://
    const nam_cmd =( "[FIX:sql_cmd]" );              //:[056]://
    const cmd_sql =( "[FIX:sql_cmd]" );              //:[056]://
    const msg_err =( "[FIX:err_msg]" );              //:[056]://
    
    const key_evt =( "[FIX:evt_key]" );              //:[057]://
    const F_INI_KEYMAST =( "[FIX:F_KEYMAST_INI]" );  //:[057]://

    const d_wgl   =( "[FIX:a_g.wgl]" );              //:[063]://
    const   wgl   =( "[FIX:a_g.wgl]" );              //:[063]://

//:==================:ILLEGAL_STUFF_GO_STRAIGHT_TO_JAIL:[042]://
//:XMLHTTPREQUEST_WIREUP_HACK:[058]:=========================://

    /** *************************************** **/  //:[058]://
    /** Using pre-processing black magic here.  **/  //:[058]://
    /** VID[ 058 ][ www.tinyurl.com/GAME-TUTS ] **/  //:[058]://
    /** *************************************** **/  //:[058]://
                                                     //:[058]://
    var d_urlsite =(                                 //:[058]://
        "[BLACK_MAGIC:d_urlsite]"                    //:[059]://
    );;                                              //:[058]://
    var d_urlsite_o_k=(                              //:[059]://
        "[BLACK_MAGIC:d_urlsite_o_k]"                //:[059]://
    );;                                              //:[059]://

//:=========================:XMLHTTPREQUEST_WIREUP_HACK:[058]://
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

    //:DABITCH_CRUD:[046]:-------------------------------://    
                                                 //:[046]://    
        var d_dabitch_c_tab_hex =( "         "+n //:[046]://    
        +"                                   "+n //:[046]://    
        +" /** CRUD.CREATE (VIDEO[051]) **/  "+n //:[051]://    
        +"                                   "+n //:[046]://    
        +"INSERT INTO tab_hex                "+n //:[046]://    
        +"(    c_nam ,   c_hex )VALUES       "+n //:[046]://    
        +"(  '[i_nam]', [i_hex] )            "+n //:[046]://    
        +"ON CONFLICT ( c_nam ) DO NOTHING ; "+n //:[048]://    
        +"                                   "+n //:[046]://    
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; //:[046]://    
        var d_dabitch_r_tab_hex =( "         "+n //:[046]://    
        +"                                   "+n //:[046]://  
        +" /** CRUD.READ (VIDEO[052]) **/    "+n //:[052]://      
        +"                                   "+n //:[046]://    
        +"SELECT * FROM tab_hex              "+n //:[046]://    
        +"WHERE c_nam = '[i_nam]' ;          "+n //:[046]://    
        +"                                   "+n //:[046]://    
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; //:[046]://    
        var d_dabitch_u_tab_hex =( "         "+n //:[046]://    
        +"                                   "+n //:[046]://    
        +" /** CRUD.READ (VIDEO[053]) **/    "+n //:[053]://     
        +"                                   "+n //:[046]://    
        +"UPDATE tab_hex SET c_hex = [i_hex] "+n //:[046]://    
        +"WHERE c_nam = '[i_nam]' ;          "+n //:[046]://    
        +"                                   "+n //:[046]://    
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; //:[046]://    
        var d_dabitch_d_tab_hex =( "         "+n //:[046]://    
        +"                                   "+n //:[046]://    
        +" /** CRUD.READ (VIDEO[054]) **/    "+n //:[054]://    
        +"                                   "+n //:[046]://    
        +"DELETE FROM tab_hex                "+n //:[046]://    
        +"WHERE c_nam = '[i_nam]' ;          "+n //:[046]://    
        +"                                   "+n //:[046]://    
        );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; //:[046]://    
                                                 //:[046]://    
    //:-------------------------------:DABITCH_CRUD:[046]://    

    var d_dts_tab_hex =( "                  "+n  //:[044]://
    +"                                      "+n  //:[044]://
    +"  DROP TABLE IF EXISTS tab_hex ;      "+n  //:[044]://
    +"                                      "+n  //:[044]://
    );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  //:[044]://
 
    var d_cts_tab_hex =( "                  "+n  //:[041]://
    +"  CREATE TABLE IF NOT EXISTS tab_hex( "+n  //:[041]://
    +"       iid SERIAL PRIMARY KEY         "+n  //:[041]://
    +"  ,  c_nam VARCHAR( 64 )     UNIQUE   "+n  //:[048]://      
    +"  ,  c_hex INT CHECK ( c_hex >= 0 )   "+n  //:[046]://    
    +"  );;                                 "+n  //:[041]://
    );;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;  //:[041]://

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

    var d_jso = { "Content-Type": "application/json"         } ;
    var d_txt = { "Content-Type": "text/plain"               } ;
    var d_png = { "Content-Type": "image/png"                } ;
    var d_htm = { "Content-Type": "text/html"                } ;
    var d_js  = { "Content-Type": "text/javascript"          } ;
    var d_exe = { "Content-Type": "application/x-msdownload" } ;
    var d_css = { "Content-Type": "text/css"                 } ;

    console.log( "[d_dbu]" , d_dbu );

};; //:------------------------------------------------------://
if( notnode ){ //:-------------------------------------------://

    var d_msgkill_001 =( ""                                     
    +"[Your_App_Is_Crashing_Because_You_Dont]"+"\n"  //:[059]://
    +"[Have_Access_To_______________________]"+"\n"  //:[059]://
    +"[-------------------------------------]"+"\n"  //:[059]://
    +"[   process.env[HEROKU_APP_NAME]      ]"+"\n"  //:[059]://
    +"[-------------------------------------]"+"\n"  //:[059]://
    +"[To_Fix_This_You_Need_To_Run__________]"+"\n"  //:[059]://
    +"[The_Below_Command.___________________]"+"\n"  //:[059]://
    +"[WRITE_IT_AS_ONE_SINGLE_LINE!!!!!!!!!!]"+"\n"  //:[059]://
    +"                                       "+"\n"  //:[059]://
    +"       heroku labs:enable              "+"\n"  //:[059]://
    +"       runtime-dyno-metadata           "+"\n"  //:[059]://
    +"       -app YOUR_APP_NAME_HERE         "+"\n"  //:[059]://
    +"                                       "+"\n"  //:[059]://
    +"[GOOD_LUCK! -KanjiCoder ______________]"+"\n"  //:[059]://
    );;                                              //:[059]://

    
    var d_can = "[nil][!c!:d_can]" ;  //: Html5 Canvas  [035]://
    //- d_wgl = "[nil][!c!:d_wgl]" ;      WebGL Context [063]-//

    var d_url = d_urlsite ;           //: E.T.PhoneHome [058]://

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
//:__ARTGIRL__:SHADER_STRINGS:[069]:=========================://// [---]
                                                                // [069]
const d_artgirl_ssv_bad =( "[BAD_SSV_DEX:ssv]" );               // [070][069]
const d_artgirl_ssf_bad =( "[BAD_SSV_DEX:ssf]" );               // [070][069]
                                                                // [069]
const d_artgirl_ssv_all =( //: ShaderSourceVert #all# ://       // [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
                                                                // [069]
const d_artgirl_ssv_001 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_002 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_003 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_004 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_005 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_006 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_007 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
                                                                // [069]
const d_artgirl_ssf_001 =( //: ShaderSourceFrag #01@ssf@[069]://// [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_002 =( //: ShaderSourceFrag #02@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_003 =( //: ShaderSourceFrag #03@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_004 =( //: ShaderSourceFrag #04@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_005 =( //: ShaderSourceFrag #05@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_006 =( //: ShaderSourceFrag #06@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_007 =( //: ShaderSourceFrag #07@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(`                                                                      
                                                                        
    TODO_ACTUAL_SHADER_CODE_HERE_2022_06_29                             
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
                                                                // [069]
//:=========================:__ARTGIRL__:SHADER_STRINGS:[069]://// [---]
//:CONST_MACROS_BY_SYSTEM[064]:==============================://// [---]
                                                    
//: __ARTGIRL__ ://                                  //:[064]://

    /** WebGL Surface Quad Macros ********* **/      //:[066]://
                                                     //:[066]://
        const c_artgirl_vbd_len =( 20 );             //:[066]://
                                                     
    /** *********************************** **/      //:[064]://
    /** Different Rendering Pipelines [064] **/      //:[064]://
    /** *********************************** **/      //:[064]://
                                                     //:[064]://

    const c_artgirl_ren_000 = "[DONT_USE:000]" ;     //:[068]://
    const c_artgirl_ren_bad = ( 0 ); //:Select:ren_def  [068]://

    const c_artgirl_ren_001 = ( 1 ); //:GradientQuad    [068]://
    const c_artgirl_ren_002 = ( 2 ); //:FlashingScreen  [068]://
    const c_artgirl_ren_003 = ( 3 ); //:Sectors_Colored [068]://
    const c_artgirl_ren_004 = ( 4 ); //:Sectors_Numbered[068]://
    const c_artgirl_ren_005 = ( 5 ); //:SolidColorTiles [068]://
    const c_artgirl_ren_006 = ( 6 ); //:@HEXASET1STAMP@ [068]://
    const c_artgirl_ren_007 = ( 7 ); //:@HEXASET1AUSET@ [068]://

    const c_artgirl_ren_tot = ( 7 ); //:#RenderPipelines[068]://
                                                                
    const c_artgirl_ren_def = (      //:Default_Render  [068]://
          c_artgirl_ren_001    );;   //:Pipeline_To_Use [068]://

//:==============================:CONST_MACROS_BY_SYSTEM[064]://
//:DATA_BY_SYSTEM:[063]:=====================================://// [---]
                                                                // [063]
if( /** __ARTGIRL__ **/ notnode ){                              // [063] 
                                                                // [063] 
    var d_artgirl_wgl =( "[FIX:a_g.wgl]" );                     // [063] 
                                                                // [---]
    let neg =(0.0 - 1.0 );                                      // [066]  
    let pos =(0.0 + 1.0 );                                      // [066]  
    let _0_ =(0.0 * 0.0 );                                      // [066]  
                                                                // [066]  
    var d_artgirl = STRUCT({  laxcoma : 0                       // [066]  
                                                                // [---]  
    ,   wgl : "[nil][d_artgirl_wgl]"    //:@wgl@://             // [063]  
    ,   vbo : "[nil][d_artgirl_vbo]"    //:@vbo@://             // [067]  
    ,   vao : "[nil][d_artgirl_vao]"    //:@vao@://             // [067]  
                                                                // [067]  
    ,   tex : "[nil][d_artgirl_tex]"    //:@tex@://             // [067]  
    ,   lot : "[nil][d_artgirl_lot]"    //:@lot@://             // [067]  
    ,   sam : "[nil][d_artgirl_sam]"    //:@sam@://             // [067]  
                                                                // [067]  
        /** #_O_P_P_# : One Per Program **/                     // [067]  
                                                                // [---]
    ,arr_pid:F_ARR(c_artgirl_ren_tot +1 ) //: @pid@ #_O_P_P_#://// [069]
    ,arr_vid:F_ARR(c_artgirl_ren_tot +1 ) //: @vid@ #_O_P_P_#://// [069]
    ,arr_fid:F_ARR(c_artgirl_ren_tot +1 ) //: @fid@ #_O_P_P_#://// [069]
                                                                // [069]
    ,arr_ssv:F_SSA(c_artgirl_ren_tot +1   //: #_1_BASED_ARR_#://// [069]
            ,      d_artgirl_ssv_bad                            // [070][069]
            ,      d_artgirl_ssv_001                            // [070][069]
            ,      d_artgirl_ssv_002                            // [070][069]
            ,      d_artgirl_ssv_003                            // [070][069]
            ,      d_artgirl_ssv_004                            // [070][069]
            ,      d_artgirl_ssv_005                            // [070][069]
            ,      d_artgirl_ssv_006                            // [070][069]
            ,      d_artgirl_ssv_007                            // [070][069]
            )      /////////////////                            // [069]
    ,arr_ssf:F_SSA(c_artgirl_ren_tot +1   //: #_1_BASED_ARR_#://// [069]
            ,      d_artgirl_ssf_bad                            // [070][069]
            ,      d_artgirl_ssf_001                            // [070][069]
            ,      d_artgirl_ssf_002                            // [070][069]
            ,      d_artgirl_ssf_003                            // [070][069]
            ,      d_artgirl_ssf_004                            // [070][069]
            ,      d_artgirl_ssf_005                            // [070][069]
            ,      d_artgirl_ssf_006                            // [070][069]
            ,      d_artgirl_ssf_007                            // [070][069]
            )      /////////////////                            // [069]
                                                                // [---]
    ,   vbl :      c_artgirl_vbd_len //:@vbd@://                // [066] 
    ,   vbd :F_CAR(c_artgirl_vbd_len //:@vbd@://                // [066] 
                                                     //:[066]://
        //:@vcx@ @vcy@ @vcz@        @tcx@ , @tcy@    //:[066]://
        ,   neg , neg , _0_    ,    (0.0) , (1.0)    //:[066]://
        ,   pos , neg , _0_    ,    (1.0) , (1.0)    //:[066]://
        ,   neg , pos , _0_    ,    (0.0) , (0.0)    //:[066]://
        ,   pos , pos , _0_    ,    (1.0) , (0.0)    //:[066]://
        )                                            //:[066]://

    });;                                             //:[063]://
                                                     //:[065]://
    console.log( d_artgirl );                        //:[065]://
                                                     //:[065]://
};;                                                  //:[063]://

//:=====================================:DATA_BY_SYSTEM:[063]://
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

        var wid =( 0 - 333 /** @cli_wid@ **/ );      //:[063]://
        var hig =( 0 - 666 /** @cli_hig@ **/ );      //:[063]://
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

    const F_TIK = "[FIX:F_CLIGAME_TIK]" ;            //:[063]://

//:==============================:FUNC_GAME_UPDATE_TICK:[036]://
//:FUNC_GAME_UPDATE_LOOP:[036]:==============================://

    const F_GUL = "[FIX:F_CLIGAME_GUL]" ;            //:[063]://

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

        //:[MOVED][  F_ARTGIRL_INI                ]:[063]://    

    //:--------------------------------:webgl_setup:[033]://
    //:enter_infinite_loop:[036]:------------------------://

        //:[MOVED][       F_GUL( 0.0 );           ]:[063]://    

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
//:FUNC_RANDOM_ZERO_OR_ONE:[044]:============================://

    const F_RANDBIN = function PRIVATE_F_RANDBIN(){  //:[044]://
                                                     //:[044]://
        var o_bin =( 666 );                          //:[044]://
        var dec = Math.random( );                    //:[044]://
        if( dec <  0.5 ){ o_bin =( 0 ); };           //:[044]://
        if( dec >= 0.5 ){ o_bin =( 1 ); };           //:[044]://
        return( o_bin );                             //:[044]://
    };;                                              //:[044]://

//:============================:FUNC_RANDOM_ZERO_OR_ONE:[044]://
//:FUNC_NICEGUY_CANT_HANDLE_REJECTION:[044]:=================://

    const F_NICEGUY = function PRIVATE_F_NICEGUY(    //:[044]://
                                                     //:[044]://
        i_saywhat                                    //:[044]://
    ){                                               //:[044]://
        LOG( "[she_said:i_saywhat]" , i_saywhat );   //:[044]://
        ERR( "[Nice_Guy_Cant_Handle_Rejection]" );   //:[044]://
    };;                                              //:[044]://

//:=================:FUNC_NICEGUY_CANT_HANDLE_REJECTION:[044]://
//:FUNC_PROMISE_TODO:[046]:==================================://
                                                      
    const F_PROTODO = function PRIVATE_F_PROTODO(    //:[046]://
                                                     //:[046]://
        i_todomsg                                    //:[046]://
    ){                                               //:[046]://
        var o_promise =( new Promise( function       //:[046]://
        EXECUTO_F_PROTODO(                           //:[046]://
            o_k_yes                                  //:[046]://
        ,   wontsay                                  //:[046]://
        ){                                           //:[046]://
            o_k_yes( i_todomsg );                    //:[046]://
                                                     //:[046]://
        }));; return( o_promise );                   //:[046]://
    };;                                              //:[046]://

//:==================================:FUNC_PROMISE_TODO:[046]://
//:FUNC_DEEP_COPY_STRING:[047]:==============================://
//:_____D____C____S__________________________________________://

    const F_DCS = function PRIVATE_F_DCS(            //:[047]://
                                                     //:[047]://
        i_str                                        //:[047]://
    ){                                               //:[047]://
        var deep_copy_string =(                      //:[047]://
                                                     //:[047]://
            ( ' ' + i_str).slice(1)                  //:[047]://
        );;                                          //:[047]://
        return( deep_copy_string );                  //:[047]://
    };;                                              //:[047]://
//:____________________________________D____C____S___________://
//:==============================:FUNC_DEEP_COPY_STRING:[047]://
//:FUNC_TEMPLATE_EDit:[047]:=================================://
//:_____T________ED__________________________________________://
                                                     //:[047]://
    const F_TED = function PRIVATE_F_TED(            //:[047]://
                                                     //:[047]://
        i_sql , i_fin , i_rep                        //:[047]://
    ){                                               //:[047]://
        var rep , o_sql ;                            //:[047]://
        rep =( ""+i_rep+"" ); //:@vas@://            //:[047]://
        o_sql = i_sql ;       //:!NDC!://            //:[047]://
        o_sql = o_sql.replaceAll( i_fin , rep );     //:[047]://
        return( o_sql );                             //:[047]://
    };;                                              //:[047]://
                                                     //:[047]://
    const F_TSM =( "[NOT: Template Str Modify]" );   //:[047]://
    const F_TSF =( "[NOT: Template Str Fill  ]" );   //:[047]://
    const F_TSE =( "[NOT: Template Str Edit  ]" );   //:[047]://
                                                     //:[047]://
//:_______________________________________T________ED________://
//:=================================:FUNC_TEMPLATE_EDit:[047]://
//:FUNC_DICT_TO_STRING:[058]:================================://

    const F_DTS = function PRIVATE_F_DTS(            //:[058]://
                                                     //:[058]://
        i_dob  /** @dob@ : Dictionary Object **/     //:[058]://
    ){                                               //:[058]://
                                                     //:[058]://
        var o_str="";                                //:[058]://
                                                     //:[058]://
        o_str += "[dob:end]"+"\n";                   //:[058]://
                                                     //:[058]://
        if( false === !!i_dob ){                     //:[058]://
            o_str += "[Dictionary_Was_Nil]" ;        //:[058]://
        }else{                                       //:[058]://
            var arr_k_v=( Object.entries( i_dob ) ); //:[058]://
                                                     //:[058]://
            for( var k_v of arr_k_v ){               //:[058]://
                                                     //:[058]://
                o_str +=( "[k_v[0]]:" + k_v[ 0 ] );  //:[058]://
                o_str +="\n";                        //:[058]://
                o_str +=( "[k_v[1]]:" + k_v[ 1 ] );  //:[058]://
                o_str +="\n";                        //:[058]://
                o_str +="------------------------";  //:[058]://
                o_str +="\n";                        //:[058]://
            };;                                      //:[058]://
        };;                                          //:[058]://
                                                     //:[058]://
        o_str += "[dob:end]"+"\n";                   //:[058]://
        return( o_str );                             //:[058]://
    };;                                              //:[058]://

//:================================:FUNC_DICT_TO_STRING:[058]://
//:FUNC_XML_HTTP_REQUEST:[061]:==============================://

    const F_XHR = function PRIVATE_F_XHR(            //:[061]://
        i_asktype  /** @asktype@  **/                //:[061]://
    ,   i_urlpath  /** @urlpath@  **/                //:[061]://
    ){                                               //:[061]://
        var o_promise = new Promise( function        //:[061]://
        EXECUTO_F_XHR( o_k_yes , wontsay ){          //:[061]://
                                                     //:[061]://
            var emp , urlfull , xhr_ask ;            //:[061]://
                                                     //:[061]://
                emp = "" ; /**EmptyString**/         //:[061]://
            urlfull = "[REQUEST_URL_NOT_SET]" ;      //:[061]://
                                                     //:[061]://
            if( "/" != i_urlpath[ 0 ] ){             //:[061]://
                                                     //:[061]://
                urlfull = d_url + "/" + i_urlpath ;  //:[061]://
            }else{                                   //:[061]://
                urlfull = d_url + emp + i_urlpath ;  //:[061]://
            };;                                      //:[061]://
                                                     //:[061]://
            xhr_ask = new XMLHttpRequest();          //:[061]://
            xhr_ask.open( i_asktype , urlfull );     //:[061]://
            xhr_ask.send();                          //:[061]://
            xhr_ask.onreadystatechange=(evt_xhr)=>{  //:[061]://
            if( xhr_ask.readyState === 4 ){          //:[061]://
                                                     //:[061]://
                console.log("DONE");                 //:[061]://
                o_k_yes( xhr_ask.responseText );     //:[061]://
                                                     //:[061]://
            };;};;                                   //:[061]://
                                                     //:[061]://
        });; return( o_promise );                    //:[061]://
    };;                                              //:[061]://

//:==============================:FUNC_XML_HTTP_REQUEST:[061]://
//|04|04|04|04|04|04|04|04|04|SUBS|04|04|04|04|04|04|04|04|04|//
//|[ @$$$$$@ ]                                               |//
//|__ARTDUDE__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//

    //:--------------------------------------------------://    
    //:[062]:ARTDUDE Holds Onto Art Assets And Rendering ://    
    //:[ATS]:Data. Art dude is some guy on the street    ://    
    //:     :trying to sell paintings and blank canvases.://    
    //:     :( Storing & Fetching Assets+Levels )        ://    
    //:     :( Is ArtDude's Job.                )        ://    
    //:--------------------------------------------------://    

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ARTDUDE__|//
//|                                               [ @$$$$$@ ]|//
//|04|04|04|04|04|04|04|04|04|SUBS|04|04|04|04|04|04|04|04|04|//
//|05|05|05|05|05|05|05|05|05|SUBS|05|05|05|05|05|05|05|05|05|//
//|[ @$$$$$@ ]                                               |//
//|__ARTGIRL__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//

    //:--------------------------------------------------://
    //:[062]:ARTGIRL Likes to throw paint at walls.      ://    
    //:[ATS]:She has a paintball gun. She shoots so much ://    
    //:     :paint that some fragments of paint are      ://    
    //:     :never seen because they get covered up by   ://    
    //:     :other paintball shots. Because remember,    ://    
    //:     :a fragment is a "potential pixel".          ://    
    //:     :ARTGIRL does the rendering __WORK__ using   ://    
    //:     :supplies she buys from ARTDUDE.             ://    
    //:     :( OpenGL Pipeline Creation Is ArtGirl's Job)://    
    //:     :( Rendering Loop Calls Are Her Job Too.    )://    
    //:--------------------------------------------------:// 

    const   F_ARTGIRL_RPL = function                 //:[068]://
    PRIVATE_F_ARTGIRL_RPL( //:Render Pipeline Load @RPL@[068]://
                           //:                          [068]://
        i_ren //: < < < < < < Render Pipeline Number    [068]://
    ){                                               //:[068]://
        if( i_ren < 1 ){ ERR("[RPL_NEG]") ; };       //:[068]://
        if( i_ren > 9 ){ ERR("[RPL_POS]") ; };       //:[068]://
        if( i_ren > c_artgirl_ren_tot ){             //:[068]://
                                                     //:[068]://
            MSG("[Not_That_Many_Render_Pipelines]"); //:[068]://
        };;                                          //:[068]://
                                                     //:[068]://
        LOG( "[[TODO]:RPL]" , i_ren );               //:[068]://
    };;                                              //:[068]://

    const   F_ARTGIRL_TIK = function                 //:[063]://
    PRIVATE_F_ARTGIRL_TIK(                           //:[063]://
        i_tim                                        //:[063]://
    ){                                               //:[063]://
        let a_g = d_artgirl ;                        //:[063]://
                                                     //:[063]://
        var _R_ = ( i_tim % 255.000 );               //:[063]://
        if( _R_ > 255.0 ){ ERR("[_R_]"); };          //:[063]://
            _R_ = ( _R_ / 255.0 );                   //:[063]://
                                                     //:[063]://
        a_g.wgl.clearColor( _R_ , 0.0 , 0.0 , 1.0 ); //:[063]://
        a_g.wgl.clear( a_g.wgl.COLOR_BUFFER_BIT );   //:[063]://
    };;                                              //:[063]://
                                                     //:[063]://
    const   F_ARTGIRL_INI = function                 //:[063]://
    PRIVATE_F_ARTGIRL_INI(                           //:[063]://
                                                     //:[063]://
        /** NO arguments **/                         //:[063]://
    ){                                               //:[063]://
        let a_g = d_artgirl ;                        //:[063]://
                                                     //:[063]://
        a_g.wgl = d_can.getContext( "webgl" );       //:[063]://
        //:                 _R_ , _G_ , _B_ , _A_  ;   :[063]://
        a_g.wgl.clearColor( 0.0 , 1.0 , 0.0 , 1.0 ); //:[063]://
        a_g.wgl.clear( a_g.wgl.COLOR_BUFFER_BIT );   //:[063]://
    };;                                              //:[063]://
  
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ARTGIRL__|//
//|                                               [ @$$$$$@ ]|//
//|05|05|05|05|05|05|05|05|05|SUBS|05|05|05|05|05|05|05|05|05|//
//|01|01|01|01|01|01|01|01|01|SUBS|01|01|01|01|01|01|01|01|01|//
//|[ @$$$$$@ ]                                               |//
//|__ASERVER__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//

    //:END_serverresponsewith_JSON:==========================://

    const   F_ASERVER_ENDJSON = function             //:[050]://
    PRIVATE_F_ASERVER_ENDJSON(                       //:[050]://
                                                     //:[050]://
        i_sob                                        //:[050]://
    ,   i_saywhat /**Optional**/                     //:[050]://
    ){                                               //:[050]://
        var jso = "{}" ;                             //:[050]://
        var i_say = i_saywhat ;                      //:[050]://
        var o_say = i_saywhat ;                      //:[050]://
                                                     //:[050]://
        if( HAS( i_say ) ){                          //:[050]://
                                                     //:[050]://
            if( i_say.rows        //: #IPR# ://      //:[050]://
            ||  i_say.command     //: #IPR# ://      //:[050]://
            ){                                       //:[050]://
                o_say = { arr_row : [] };            //:[050]://
                o_say.arr_row = i_say.rows    ;      //:[050]://
                o_say.sql_cmd = i_say.command ;      //:[050]://
                o_say.err_msg = i_say.err_msg ;      //:[056]://
            };;                                      //:[050]://
                                                     //:[050]://
            jso = JSON.stringify( o_say );           //:[050]://
        };;                                          //:[050]://
        i_sob.m_giv.writeHead( 200 ,  d_jso  );      //:[050]://
        i_sob.m_giv.write(              jso  );      //:[050]://
        i_sob.m_giv.end(                     );      //:[050]://
    };;                                              //:[050]://

    //:==========================:END_serverresponsewith_JSON://
    //:END_serverresponsewith_OK_status:=====================://

    const   F_ASERVER_END_O_K = function             //:[042]://
    PRIVATE_F_ASERVER_END_O_K(                       //:[042]://
                                                     //:[042]://
        i_sob                                        //:[042]://
    ,   i_saywhat /**Optional**/                     //:[044]://
    ){                                               //:[042]://
        i_sob.m_giv.writeHead( 200 ,  d_txt     );   //:[042]://
                                                     //:[044]://
        if( HAS( i_saywhat ) ){                      //:[044]://
            i_sob.m_giv.write(                       //:[044]://
                "[OH_BTW:i_saywhat]"                 //:[044]://
                       + i_saywhat                   //:[044]://
                       + "\n"                        //:[044]://
            );;                                      //:[044]://
        };;                                          //:[044]://
                                                     //:[044]://
        i_sob.m_giv.end( "[O_K][K_THNX_BYE]" );      //:[044]://
    };;                                              //:[042]://

    //:=====================:END_serverresponsewith_OK_status://

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __ASERVER__|//
//|                                               [ @$$$$$@ ]|//
//|01|01|01|01|01|01|01|01|01|SUBS|01|01|01|01|01|01|01|01|01|//
//|02|02|02|02|02|02|02|02|02|SUBS|02|02|02|02|02|02|02|02|02|//
//|[ @$$$$$@ ]                                               |//
//|__DABITCH__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//

    const   F_DABITCH_RUN_SQL = function             //:[044]://
    PRIVATE_F_DABITCH_RUN_SQL(                       //:[044]://
                                                     //:[044]://
        i_sql                                        //:[044]://
    ,   i_tbm                                        //:[045]://
    ){                                               //:[044]://
        
        var o_promise = "[nil][run_sql_promise]" ;   //:[055]://

        if( notnode ){                               //:[055]://
                                                     //:[055]://
            ERR("[RUN_SQL:SERVER_SIDE_ONLY]");       //:[055]://
        }else                                        //:[055]://
        if( yesnode ){ /**RUN_SQL:Server Side Only**///:[055]://

            if( NIL( i_sql ) ){ ERR("#001#"); };     //:[045]://
            if( NIL( i_tbm ) ){ ERR("#002#"); };     //:[045]://
                                                     //:[045]://
            o_promise = new Promise( function        //:[055]://
            EXECUTO_F_DABITCH_RUN_SQL(               //:[044]://
                                                     //:[044]://
                o_k_yes     //: #RES_NAE# ://        //:[055]://
            ,   wontsay     //: #REJ_NAE# ://        //:[055]://
            ){                                       //:[044]://
                                                     //:[045]://
                d_dcp                                //:[045]://
                .query( i_sql )                      //:[055]://
                .then( function( i_saywhat ){        //:[045]://
                    LOG( "[RUN_S:i_tbm]" , i_tbm );  //:[055]://
                    i_saywhat.err_msg =( "" );       //:[056]://
                    o_k_yes( i_saywhat );            //:[045]://
                })                                   //:[045]://
                .catch( function( i_err ){           //:[045]://
                                                     //:[045]://
                    LOG( "[RUN_S:i_sql]" , i_sql );  //:[055]://
                    LOG( "[RUN_S:i_tbm]" , i_tbm );  //:[055]://
                    LOG( "[RUN_S:i_err]" , i_err );  //:[055]://
                    
                    /** #MUO_RBP# **/                //:[056]://
                                                     //:[056]://
                    var i_saywhat     = { };         //:[056]://
                    i_saywhat.rows    = [ ];         //:[056]://
                    i_saywhat.command = "[SQL_ERR]"; //:[056]://
                    i_saywhat.err_msg =(             //:[056]://
                                                     //:[056]://
                        ""+i_err+""                  //:[056]://
                    );;                              //:[056]://
                    o_k_yes( i_saywhat );            //:[056]://

                })                                   //:[045]://
                ;;                                   //:[045]://
            });;
        };;                                          //:[055]://
        return( o_promise );                         //:[055]://           
    };;                                              //:[044]://                           

    const   F_DABITCH_MAKETAB_TAB_HEX = function     //:[049]://
    PRIVATE_F_DABITCH_MAKETAB_TAB_HEX( ){            //:[049]://
                                                     //:[049]://
        var o_promise =(                             //:[049]://
        F_DABITCH_RUN_SQL(                           //:[049]://
                                                     //:[049]://
              d_cts_tab_hex                          //:[049]://
        ,   "[d_cts_tab_hex]"                        //:[049]://
                                                     //:[049]://
        ));; return( o_promise );                    //:[049]://
    };;                                              //:[049]://

    const   F_DABITCH_DROPTAB_TAB_HEX = function     //:[042]://
    PRIVATE_F_DABITCH_DROPTAB_TAB_HEX(               //:[042]://
                                                     //:[042]://
        i_pas                                        //:[044]://
    ){                                               //:[042]://
        var o_promise = new Promise( function        //:[044]://
        EXECUTO_F_DABITCH_DROPTAB_TAB_HEX(           //:[044]://
                                                     //:[044]://
            o_k_yes //: resolve func , NOT_AN_ERROR  //:[044]://
        ,   wontsay //: reject  func , NOT_AN_ERROR  //:[044]://
        ){                                           //:[044]://
            if( "PLEASE_BITCH" === i_pas ){          //:[044]://
                                                     //:[044]://
                F_DABITCH_RUN_SQL(                   //:[044]://
                                                     //:[045]://
                      d_dts_tab_hex                  //:[045]://
                ,   "[d_dts_tab_hex]"                //:[045]://
                                                     //:[045]://
                ).then(                              //:[044]://
                    (i_saywhat)=>{                   //:[044]://
                        o_k_yes( i_saywhat );        //:[044]://
                    }                                //:[044]://
                    ,                                //:[044]://
                    F_NICEGUY                        //:[044]://
                );;                                  //:[044]://
            }else{                                   //:[044]://
                    o_k_yes( "[Invalid_Password]" ); //:[044]://
            };;                                      //:[044]://
        });;return( o_promise );                     //:[044]://
    };;                                              //:[042]://

    const   F_DABITCH_C_TAB_HEX = function           //:[046]://
    PRIVATE_F_DABITCH_C_TAB_HEX(                     //:[046]://
                                                     //:[046]://
        i_nam           /** [ATF]:SEE_VIDEO[051] **/ //:[051]://
    ,   i_hex           /** [ATF]:SEE_VIDEO[051] **/ //:[051]://
    ){                                               //:[046]://
        var sql ;                                    //:[048]://
        sql = F_DCS( d_dabitch_c_tab_hex );          //:[048]://
        sql = F_TED( sql , "[i_nam]" , i_nam );      //:[048]://
        sql = F_TED( sql , "[i_hex]" , i_hex );      //:[048]://
        var o_promise =(                             //:[051]://
            F_DABITCH_RUN_SQL(                       //:[048]://
                                                     //:[048]://
            sql , "[sql:create]"                     //:[048]://
        ));;                                         //:[048]://
        return( o_promise );                         //:[051]://
    };;                                              //:[046]://
    const   F_DABITCH_R_TAB_HEX = function           //:[046]://
    PRIVATE_F_DABITCH_R_TAB_HEX(                     //:[046]://
                                                     //:[046]://
        i_nam                                        //:[046]://
    ){                                               //:[046]://

        var sql ;  /** #_KISS_BEATS_DRY_# **/        //:[052]://
        sql = F_DCS( d_dabitch_r_tab_hex );          //:[052]://
        sql = F_TED( sql , "[i_nam]" , i_nam );      //:[052]://
        var o_promise =(                             //:[052]://
            F_DABITCH_RUN_SQL(                       //:[052]://
                                                     //:[052]://
            sql , "[sql:read]"                       //:[052]://
        ));;                                         //:[052]://
        return( o_promise );                         //:[052]://

    };;                                              //:[046]://
    const   F_DABITCH_U_TAB_HEX = function           //:[046]://
    PRIVATE_F_DABITCH_U_TAB_HEX(                     //:[046]://
                                                     //:[046]://
        i_nam                                        //:[046]://
    ,   i_hex                                        //:[046]://
    ){                                               //:[046]://

        var sql ;                                    //:[053]://
        sql = F_DCS( d_dabitch_u_tab_hex );          //:[053]://
        sql = F_TED( sql , "[i_nam]" , i_nam );      //:[053]://
        sql = F_TED( sql , "[i_hex]" , i_hex );      //:[053]://
        var o_promise =(                             //:[053]://
            F_DABITCH_RUN_SQL(                       //:[053]://
                                                     //:[053]://
            sql , "[sql:update]"                     //:[053]://
        ));;                                         //:[053]://
        return( o_promise );                         //:[053]://

    };;                                              //:[046]://
    const   F_DABITCH_D_TAB_HEX = function           //:[046]://
    PRIVATE_F_DABITCH_D_TAB_HEX(                     //:[046]://
                                                     //:[046]://
        i_nam                                        //:[046]://
    ){                                               //:[046]://
   
        var sql ;                                    //:[054]://
        sql = F_DCS( d_dabitch_d_tab_hex );          //:[054]://
        sql = F_TED( sql , "[i_nam]" , i_nam );      //:[054]://
        var o_promise =(                             //:[054]://
            F_DABITCH_RUN_SQL(                       //:[054]://
                                                     //:[054]://
            sql , "[sql:delete]"                     //:[054]://
        ));;                                         //:[054]://
        return( o_promise );                         //:[054]://

    };;                                              //:[046]://

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __DABITCH__|//
//|                                               [ @$$$$$@ ]|//
//|02|02|02|02|02|02|02|02|02|SUBS|02|02|02|02|02|02|02|02|02|//
//|03|03|03|03|03|03|03|03|03|SUBS|03|03|03|03|03|03|03|03|03|//
//|[ @$$$$$@ ]                                               |//
//|__KEYMAST__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//

    //:------------------------------------------------------://
    //: @_G_@ : Generally                               [068]://
    //: @_S_@ : Specifically                            [068]://
    //: @a_k@ : @asc_key@ : Ascii(_G_) Key(_S_)         [068]://
    //: @e_k@ : @evt_key@ : Event(_G_) Key(_S_)         [068]://
    //:------------------------------------------------------://

    const   F_KEYMAST_EVT_ASC = function             //:[068]://
    PRIVATE_F_KEYMAST_EVT_ASC(                       //:[068]://
                                                     //:[068]://
        i_evt_key //:( i_evt_key )=>( o_asc_key ):// //:[068]://
    ){                                               //:[068]://
        var o_asc_key =(                             //:[068]://
            String.prototype.toUpperCase.call(       //:[068]://
            String.fromCharCode(                     //:[068]://
                                                     //:[068]://
                i_evt_key.keyCode                    //:[068]://
                                                     //:[068]://
            )||"[nil][o_asc_key]" ));;               //:[068]://
        return( o_asc_key );                         //:[068]://
    };;                                              //:[068]://

    const   F_KEYMAST_DOW = function                 //:[057]://
    PRIVATE_F_KEYMAST_DOW(                           //:[057]://
        i_evt_key                                    //:[068]://
    ){                                               //:[057]://
                                                     //:[057]://

        var asc_key = F_KEYMAST_EVT_ASC( i_evt_key );//:[068]://
        let a_k     =( asc_key /** Key Down **/ );   //:[068]://

        if(  0          //:----------------------------------://
        ||  "0" == a_k  //:                             [068]://
        ||  "1" == a_k  //:  Select the shader pipeline to   ://
        ||  "2" == a_k  //:  use via the number keys.        ://
        ||  "3" == a_k  //:                             [068]://
        ||  "4" == a_k  //:  0 == default pipeline.     [068]://
        ||  "5" == a_k  //:                             [068]://
        ||  "6" == a_k  //:  More than 9 pipelines ?    [068]://
        ||  "7" == a_k  //:  Future me problem.         [068]://
        ||  "8" == a_k  //:                             [068]://
        ||  "9" == a_k  //:----------------------------------://
        ){                                                      
            //:RPL__RenderPipelineLoad:[068]:----------------://
            //:                                              ://
            //: #NOKISS#[ F_ARTGIRL_RPL( parseInt( a_k ) ] ) ://
            //:                                              ://
            let RPL = F_ARTGIRL_RPL ;                     //:://
            if( "0" == a_k ){ RPL( c_artgirl_ren_def ); };//:://
            if( "1" == a_k ){ RPL( 1 );};//:c_artgirl_ren_001://
            if( "2" == a_k ){ RPL( 2 );};//:c_artgirl_ren_002://
            if( "3" == a_k ){ RPL( 3 );};//:c_artgirl_ren_003://
            if( "4" == a_k ){ RPL( 4 );};//:c_artgirl_ren_004://
            if( "5" == a_k ){ RPL( 5 );};//:c_artgirl_ren_005://
            if( "6" == a_k ){ RPL( 6 );};//:c_artgirl_ren_006://
            if( "7" == a_k ){ RPL( 7 );};//:c_artgirl_ren_007://
            if( "8" == a_k ){ RPL( 8 );};//:c_artgirl_ren_008://
            if( "9" == a_k ){ RPL( 9 );};//:c_artgirl_ren_009://
            //:                                              ://
            //:----------------:RPL__RenderPipelineLoad:[068]://

        }else
        if( "R" == a_k ){                            //:[068]://

            //:[061]:----------------------------------------://
            F_XHR( "GET" , "DABITCH/R/TAB_HEX/RED" )  
            .then((i_saywhat)=>{                        
                                                        
                console.log( "[what?]:" + i_saywhat );  
            });;      
            //:----------------------------------------:[061]://
        }else{                                       //:[068]://
            LOG( "[UNBOUND_KEY]" , a_k );            //:[068]://
        };;                                          //:[068]://

    };; //:[F_KEYMAST_DOW]:----------------------------:[057]://

    const   F_KEYMAST_UPP = function                 //:[057]://
    PRIVATE_F_KEYMAST_UPP(                           //:[057]://
        i_evt_key                                    //:[068]://
    ){                                               //:[057]://
                                                     //:[057]://
        console.log( i_evt_key );                    //:[068]://
    };;                                              //:[057]://

    const   F_KEYMAST_INI = function                 //:[057]://
    PRIVATE_F_KEYMAST_INI(                           //:[057]://
        /** No Arguments **/                         //:[057]://
    ){                                               //:[057]://
                                                     //:[057]://
        var ADD = document.addEventListener ;        //:[057]://
                                                     //:[057]://
        ADD( "keyup"   , F_KEYMAST_UPP );            //:[057]://
        ADD( "keydown" , F_KEYMAST_DOW );            //:[057]://
    };;                                              //:[057]://

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __KEYMAST__|//
//|                                               [ @$$$$$@ ]|//
//|03|03|03|03|03|03|03|03|03|SUBS|03|03|03|03|03|03|03|03|03|//
//|06|06|06|06|06|06|06|06|06|SUBS|06|06|06|06|06|06|06|06|06|//
//|[ @$$$$$@ ]                                               |//
//|__SERGAME__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|0064|--|--|--|--|--|--|--|--|--|//

    //:--------------------------------------------------://    
    //: __SERGAME__ first because server will never [064]://    
    //: call client, but client might call server.  [064]://    
    //: ...Maybe with sockets? That's a later issue.[064]://    
    //:--------------------------------------------------://    

//|--|--|--|--|--|--|--|--|--|0064|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __SERGAME__|//
//|                                               [ @$$$$$@ ]|//
//|06|06|06|06|06|06|06|06|06|SUBS|06|06|06|06|06|06|06|06|06|//
//|07|07|07|07|07|07|07|07|07|SUBS|07|07|07|07|07|07|07|07|07|//
//|[ @$$$$$@ ]                                               |//
//|__CLIGAME__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |//
//|[ @$$$$$@ ]                                               |//
//|--|--|--|--|--|--|--|--|--|0064|--|--|--|--|--|--|--|--|--|//
           
    const   F_CLIGAME_TIK = function                 //:[063]://
    PRIVATE_F_CLIGAME_TIK(                           //:[063]://
                                                     //:[063]://
        i_tim                                        //:[063]://
    ){                                               //:[063]://
                                                     //:[063]://
        /** ************************************ **/ //:[063]://
        /** Games "Main" loop that updates both  **/ //:[063]://
        /** rendering and game logic.            **/ //:[063]://
        /** ************************************ **/ //:[063]://
                                                     //:[063]://
        F_ARTGIRL_TIK( i_tim );                      //:[063]://
    };;                                              //:[063]://
                                                     //:[063]://
    const   F_CLIGAME_GUL = function                 //:[063]://
    PRIVATE_F_CLIGAME_GUL(                           //:[063]://
                                                     //:[063]://
        i_tim                                        //:[063]://
    ){                                               //:[063]://
        F_CLIGAME_TIK( i_tim );                      //:[063]://
                                                     //:[063]://
        window.requestAnimationFrame(                //:[063]://
                                                     //:[063]://
            F_CLIGAME_GUL                            //:[063]://
        );;                                          //:[063]://
    };;                                              //:[063]://

//|--|--|--|--|--|--|--|--|--|0064|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __CLIGAME__|//
//|                                               [ @$$$$$@ ]|//
//|07|07|07|07|07|07|07|07|07|SUBS|07|07|07|07|07|07|07|07|07|//
//:INIT_CLIENT_FRONTEND:[035]:===============================://
if( notnode ){  window.onload = function( /** [030] **/ ){

    if( "[NOT_O_K]" === d_urlsite_o_k ){             //:[059]://
        ERR( d_msgkill_001 );                        //:[059]://
    };;                                              //:[059]://

    F_INI_CLI();    //:INIt: CLIent :------------------:[???]://

    F_ARTGIRL_INI();//:Init Webgl And Frag Shader :----:[063]://
    F_KEYMAST_INI();//:INIt: Client Keyboard Handler   :[???]://
    F_CLIGAME_GUL( 0.0 );   //:Enter_Game_Loop:--------:[063]://

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
    //:load_state_object_bundle:[043]:-------------------://

    sob.m_url =( sob.m_url.toUpperCase() );      //!#MRI#!//
	sob.m_seg =( sob.m_url.split( "/" ).filter( n => n ) );

    //:-------------------:load_state_object_bundle:[043]://
 
    if( sob.m_url == "/HELLO" ){

        sob.m_giv.end( "WORLD" );
    }else
    if( sob.m_url == "/ENV" ){                       //:[058]://
                                                     //:[058]://
        var str_env = F_DTS( process.env );          //:[058]://
        sob.m_giv.writeHead( 200 , d_txt );          //:[058]://
        sob.m_giv.end( str_env );                    //:[058]://

    }else
    if( sob.m_url == "/ATOMIC_IVY_MMO" ){  //:#SELFSERVE#://

        l_fs.readFile( "./server.js" , function(i_err,i_cof){

            if(i_err){
                i_cof = "[we messed up]" ;
            }else{
                sob.m_giv.writeHead( 200 , d_js );

                //:get_app_domain:[059]:---------------------://
                var n =( "\n" );                     //:[059]://
                                                     //:[059]://
                var app_nam =( process.env[          //:[059]://
                                                     //:[059]://
                    "HEROKU_APP_NAME"                //:[059]://
                ]);;                                 //:[059]://
                                                     //:[059]://
                if( false == ( !!app_nam ) ){        //:[059]://
                                                     //:[059]://
                    d_urlsite_o_k =( "[NOT_O_K]" );  //:[059]://
                    d_urlsite =( ""                  //:[059]://
                                                     //:[059]://
                    +"[SEE:d_msgkill_001]"           //:[059]://
                                                     //:[059]://
                    );;                              //:[059]://
                }else{                               //:[059]://
                    d_urlsite_o_k =( "[YES_O_K]" );  //:[059]://
                    d_urlsite     =( ""              //:[059]://
                    + "https://"                     //:[059]://
                    +  app_nam                       //:[059]://
                    + ".herokuapp.com"               //:[059]://
                    );;                              //:[059]://
                };;                                  //:[059]://
                //:---------------------:get_app_domain:[059]://

                //:#MYSBSYS#:[058]:--------------:// //:[058]://
                                                     //:[058]://
                i_cof = ""+i_cof+"";                 //:[058]://
                i_cof = i_cof.replaceAll(            //:[058]://
                                                     //:[058]://
                    "[BLACK_MAGIC:d_urlsite]"        //:[059]://
                ,                 d_urlsite          //:[059]://
                );;                                  //:[058]://
                i_cof = i_cof.replaceAll(            //:[059]://
                    "[BLACK_MAGIC:d_urlsite_o_k]"    //:[059]://
                ,                 d_urlsite_o_k      //:[059]://
                );;                                  //:[059]://
                //:--------------:#MYSBSYS#:[058]:// //:[058]://

            };;
            sob.m_giv.end( i_cof , "utf-8" );
        });;
    }else
    //:dabitch_crud:[046]:-----------------------------------://
    if(  1                                           //:[046]://
    &&   "DABITCH" === sob.m_seg[ 0 ]                //:[046]://
                                                     //:[046]://
    &&      (  0                                     //:[046]://
            || "C" === sob.m_seg[ 1 ]  //: DABITCH/C/TAB_HEX ://
            || "R" === sob.m_seg[ 1 ]  //: DABITCH/R/TAB_HEX ://
            || "U" === sob.m_seg[ 1 ]  //: DABITCH/U/TAB_HEX ://
            || "D" === sob.m_seg[ 1 ]  //: DABITCH/D/TAB_HEX ://
            )                                        //:[046]://
    &&   "TAB_HEX" === sob.m_seg[ 2 ]                //:[046]://
    ){                                               //:[046]://
        var     nam = sob.m_seg[ 3 ];                //:[046]://
        var     hex = sob.m_seg[ 4 ];                //:[046]://
        var c_r_u_d = sob.m_seg[ 1 ];                //:[046]://
        var crud ={                                  //:[046]://
            "C" : F_DABITCH_C_TAB_HEX  //: DABITCH/C/TAB_HEX ://
        ,   "R" : F_DABITCH_R_TAB_HEX  //: DABITCH/R/TAB_HEX ://
        ,   "U" : F_DABITCH_U_TAB_HEX  //: DABITCH/U/TAB_HEX ://
        ,   "D" : F_DABITCH_D_TAB_HEX  //: DABITCH/D/TAB_HEX ://
        };;                                          //:[046]://
        (crud[ c_r_u_d ])(                           //:[046]://
            nam                                      //:[046]://
        ,   hex                                      //:[046]://
        ).then( ( i_saywhat )=>{                     //:[046]://
                                                     //:[046]://
            F_ASERVER_ENDJSON( sob , i_saywhat );    //:[046]://
                                                     //:[046]://
        }, F_NICEGUY );;                             //:[046]://
    }else                                            //:[046]://
    //:-----------------------------------:dabitch_crud:[046]://
    if(  1                                                      
    &&   "DABITCH" === sob.m_seg[ 0 ] //: < < < < < < < [049]://
    &&   "MAKETAB" === sob.m_seg[ 1 ] //: < < < < < < < [049]://
    &&   "TAB_HEX" === sob.m_seg[ 2 ] //: < < < < < < < [049]://
    ){   //: PATH :   DABITCH/MAKETAB/TAB_HEX < < < < < [049]://
         //: FUNC : F_DABITCH_MAKETAB_TAB_HEX < < < < < [049]://
                                                                
        F_DABITCH_MAKETAB_TAB_HEX(  )                //:[049]://
        .then( ( i_saywhat )=>{                      //:[049]://
                                                     //:[049]://
            F_ASERVER_ENDJSON( sob , i_saywhat );    //:[049]://
                                                     //:[049]://
        }, F_NICEGUY );;                             //:[049]://
    }else
    if(  1
    &&   "DABITCH" === sob.m_seg[ 0 ] //: < < < < < < < [042]://
    &&   "DROPTAB" === sob.m_seg[ 1 ] //: < < < < < < < [042]://
    &&   "TAB_HEX" === sob.m_seg[ 2 ] //: < < < < < < < [042]://
    ){   //: PATH :   DABITCH/DROPTAB/TAB_HEX < < < < < [042]://
         //: FUNC : F_DABITCH_DROPTAB_TAB_HEX < < < < < [042]://
                                                  
        F_DABITCH_DROPTAB_TAB_HEX(                   //:[042]://
                                                     //:[044]://
            sob.m_seg[ 3 ] //:Password://            //:[044]://
                                                     //:[044]://
        ).then( ( i_saywhat )=>{                     //:[044]://
                                                     //:[044]://
            F_ASERVER_ENDJSON( sob , i_saywhat );    //:[044]://
                                                     //:[044]://
        }, F_NICEGUY );;                             //:[044]://
    }else{

        sob.m_giv.writeHead( 200 ,  d_htm  );
        sob.m_giv.end( d_webpage , "utf-8" );
    };;

}).listen(process.env.PORT);

};;
//:================================:INIT_SERVER_BACKEND:[035]://
/** TODO *************************************************** ***

    TODO001 : Rename "VBO" to "AI0" ( Array Indirect 0 )   [067]
            : Rename "VAO" to "AI1" ( Array Indirect 1 )   [067]
            :                                              [067]
            : Pretty damn sure VBO & VAO are just plain    [067]
            : integer arrays, but VAO's indexes point      [067]
            : into VBO array. DATE[ 2022_06_28 ]           [067]
            :                                              [067]
            : I am sick of mixing these up. Let's give     [067]
            : them simpler data-oriented names that        [067]
            : describe them physically.                    [067]

    TODO002 : Finish reading :                             [067]
            : http://learnwebgl.brown37.net                [067]
            :       /the_big_picture/3d_rendering.html     [067]

*** *************************************************** TODO **/
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
    
    s_    : Structs get the [ d_ ] for data prefix!        [065]
    v_    : global are[ d_ ] local is[ i_ ]or[ o_ ]or[NONE][065]
    c_    : client - only 
    s_    : server - only
    b_    : BOTH ( known by both client and server )
    g_    : global ( see[ d_ and F_ ] )

  ( D_ UPPERCASE ) : Impossible, data is lowercase(d_)     [068]
  ( f_ lowercase ) : Impossible, func is uppercase(F_)     [068]

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
/** @ATTED_COMMENTS@ *************************************** ***

    //:--------------------------------------------------://    // [069]
    //: @'s used to describe a variable or phase. [069]  ://    // [069]
    //: Something that can appear multiple times. [069]  ://    // [069]
    //:--------------------------------------------------://    // [069]
    //: TAG[ AT_SECTION | ATSECTION | atsection | atsec ]://    // [069]
    //:--------------------------------------------------://    // [069]
                                                                // [069]
    @SSA@ : Shader String Array ( array of [ssv]or[ssf] )       // [069]
    @ssv@ : Shader Source ( vertex   shader       )             // [069]
    @ssf@ : Shader Source ( fragment shader       )             // [069]
    @vss@ : WRONG , use general to specific ( ssv )             // [069]
    @fss@ : WRONG , use general to specific ( ssf )             // [069]

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
    @err@ : Error
    @cli@ : Client ( postgres )
    @don@ : Done   ( postgres "done" function pointer )
    @c_s@ : ConnectionString
    @ssl@ : Secure_Sockets_Layer
    @cts@ : Create_Table[ Statement | Source ]
    @dts@ : Drop___Table[ Statement | Source ]
    @tbm@ : Trace_Back_Message
    @dbs@ / @d_dbs@ : WRONG[ data_base_string ]FIX[ dbu ]
    @pas@ / @i_pas@ : PASsword
    @vas@ : Value_As_String
    @dcp@ : @d_dcp@ : Database_Client_Pool ( d_ == global data ) 
    @dcp@ : Database_Connection_Pool

    @vbd@ : Vertex_Buffer_Data                             [066]
                                                           [066]
    @vcx@ : Vertex  Coord .X                               [066]
    @vcy@ : Vertex  Coord .Y                               [066]
    @vcz@ : Vertex  Coord .Z                               [066]
                                                           [066]
    @tcx@ : Texture Coord .X                               [066]
    @tcy@ : Texture Coord .Y                               [066]
    @tcz@ : Texture Coord .Z ( NO FUCKING SUCH THING )     [066]

    @TIK@ : TICK ( as in update tick )
    @GUL@ : Game_Update_Loop
    @TDC@ : Test_Database_Connection
    @ATF@ : About_This_Fuction , Used as [ATF] within function.

    @o_k_yes@ : Resolver function for promise.
    @okbutno@ : Reject   function for promise.
    @wontsay@ : Reject   function for promise. (NEVER CALLED)
    @cantsay@ : Mistake, I meant[ wontsay ]
    @dom_roo@ : DomainObjectModel - Root
    @dom_bod@ : DomainObjectModel - Body
    @doc_bod@ : Means[ document body ]USE[ dom_bod ]
    @dom_can@ : DomainObjectModel - Canvas
    @cmd_nam@ : You Mean[ sql_cmd ]
    @nam_cmd@ : You Mean[ sql_cmd ]
    @bla_bla@ : Someone is speaking, I am not listening.
    @asktype@ : EXAMPLE[ "GET" , "POST" ]ETC
    @urlpath@ : URL ( relative ) path EX[ API/WHATEVER ]
    @laxcoma@ : Lax Comma , a hack for style.

    @HEXASET@ : A fourset, but encoded as 16 uint32s.      [064]
              : Each uint32 encoding a 5x5 array of pixels.[064]
                                                           [064]
    @HEXASET1STAMP@ : Stamping hexaset graphic WITHOUT     [064]
                    : any auto-tile like rendering. This   [064]
                    : render pipeline ignores all layers   [064]
                    : and only pays attention to the main  [064]
                    : game layer.                          [064]
                    : #_ONLY_RENDERS_THE_MAIN_GAME_LAYER_# [064]
                                                           [064]
    @HEXASET1AUSET@ : Stamping hexaset graphic using       [064]
                    : auto-tiling algorithm. Specifically  [064]
                    : the FOURSET algorithm.               [064]
                    : SEE[ https://imgur.com/9nMmX2F ]     [064]
                    : #_ONLY_RENDERS_THE_MAIN_GAME_LAYER_# [064]
                        

    @cli_wid@ : Client Width 
    @cli_hig@ : Client Height

    @RES_CAN@ : RESize_CANvas
    

    @DODS@ : Data_Oriented_Design'S

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

    @PROTODO@ : A promise used as a todo message.
    @MWM@ : Really should be #MWM# not @MWM@
    @ATS@ : About_This[ Struct / System / Section ]        [062]

    @_pid_@ : @pid@ : Program________ID                    [067]
    @_vid_@ : @vid@ : Vertexshader___ID                    [067]
    @_fid_@ : @fid@ : FragmentShader_ID                    [067]
                                                           [067]
    @_vbo_@ : @vbo@ : Vertex_Buffer_Object (iid)           [067]
    @_vao_@ : @vao@ : Vertex_Array__Object (iid)           [067]
    @_tex_@ : @tex@ : Texture Handle/Location              [067]
    @_lot_@ : @lot@ : Texture Slot (Where @tex@ GPU_Bound?)[067]
    @_sam_@ : @sam@ : Texture SAMPLER Handle/Location      [067]
    @_iid_@ : @iid@ : Integer_ID (AKA: "name" in OpenGL)   [067]

*** *************************************** @ATTED_COMMENTS@ **/
/** #HASH_TAGGED_COMMENTS# ********************************* ***

    //:--------------------------------------------------://    // [069]
    //: #'s are used to describe a comment that has [069]://    // [069]
    //: been EXTRACTED from the code somewhere.     [069]://    // [069]
    //: This may be a 1-line comment, multi-line    [069]://    // [069]
    //: comment, __OR__ an abbreviated error msg.   [069]://    // [069]
    //:--------------------------------------------------://    // [069]
    //: TAG[ hashsec | poundsec | octosec | hashtagsec ] ://    // [069]
    //: TAG[ hashtag | hashtagsec | hash-tag-sec | hts ] ://    // [069]
    //:--------------------------------------------------://    // [069]
                                                                // [069]
    #IAI# : Improper_Array_Initialization                       // [069]
    #_1_BASED_ARR_# : Array index 0 not used for anything.      // [069]

    #IPR# : Is_Postgres_Response , we want to get rid           
          : of all the bloat and return the[ rows ]             
          : member as { arr_rows : [ ... ] } response.          
          : TUTORIAL [050]     

    #MRI# : Make Routing ( case ) Insensitive 
    #MWM# : Monkey Wrench Macros
    #_P_N_C_# : Paranoid_Null_Check

    #_KISS_BEATS_DRY_# : #KISS# Beats #DRY#                [052]
    #KISS# : Keep_It_Simple_Stupid                         [052]
    #DRY#  : Dont_Repeat_Yourself                          [052]

    #RES_NAE# : resolve func , NOT_AN_ERROR                [055]
    #REJ_NAE# : reject  func , NOT_AN_ERROR                [055]

    #MUO_RBP# : Mock_Up(sql)Obj_Returned_By_PG(lib)        [056]

    #MYSBSYS# : ModifyYourSelf _ Before _ ServingYourSelf  [058]

    #_ONLY_RENDERS_THE_MAIN_GAME_LAYER_# :                 [064]
                                                           [064]
        A render pipeline like this does __NOT__           [064]
        render all level data. It only renders             [064]
        the main gameplay layer. The layer with            [064]
        the geometry [ IVY ] interacts with.               [064]
        This layer is the main layer of                    [064]
        destructable geometry.                             [064]
                                                           [064]
        ( We probably will have a BG and FG    )           [064]
        ( game layer that is also destructable )           [064]
        ( but is only for ASTHETICS, and does  )           [064]
        ( __NOT__ affect gameplay. Thus __NOT__)           [064]
        ( considered part of the main game     )           [064]
        ( layer .                              )           [064]

    #NOKISS# : NO, dont do this. Keep It Simple Stupid.    [068]

*** ********************************* #HASH_TAGGED_COMMENTS# **/
/** !EXCLAIMED_COMMENTS! *********************************** ***

    !MWM! : Or we could do this, doxygen style comment.
    !NDC! : Not_Deep_Copy ( Not a deep copy )

*** *********************************** !EXCLAIMED_COMMENTS! **/
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
    
    @$$$$$@ : Sub-system marker for seeking between different
            : systems by using CTRL+F. (2022_06_26)

*** *********************** CONCEPTUAL_SUB_SYSTEM_NAMESPACES **/
/** I_TAKE_IT_BACK ***************************************** ***

    @col@ : col_ , use c_ for column prefix instead.

    @fid@ : fid_ : Foriegn_Key ( id ) , use "k_" instead.

    DATA_BOTHENDS       : Section deleted in [042]              
    DATA_SERVER_BACKEND : Section deleted in [042]              

    @d_dbp@ : No Such Thing As Data_Base_Pool
            : Probably_Looking_For[ d_dcp ]
            : dcp == Database_Client_Pool


*** ***************************************** I_TAKE_IT_BACK **/
/** ERRORS ************************************************* ***

    Errors should :                                        [063]
                                                                
        1. Crash the program.                                   
        2. l_e_t us know exactly where the offending code is.   
                                                                
    Errors should not :                                    [063]
                                                                
        1. Be detailed human-readable messages describing  [063]
           the problem. Java may have led you to believe   [063]
           this is the job of an error, it is not.         [063]
                                                                
        -KanjiCoder ( 2022_06_27 )                              

*** ************************************************* ERRORS **/
/** CTRL_F_HELP ******************************************** ***

    CTRLF_HELP | ctrl-f-help | ctrl f help | control f help
    YOU_ARE_HERE

    template edit | template_edit | template string edit
    finds and replaces tokens | find and replace
    TRY[ F_TED ]( Template_EDit , for sql strings )

    serve youself | serve_yourself | serve this file
    self serve | self serve icecream
    SEE[ #SELFSERVE# ]

    xml http request | xmlhttprequest | httprequest | httpreq
    SEE[ FUNC_XML_HTTP_REQUEST | XMLHTTPREQUEST_WIREUP_HACK ]

    event to key | event to ascii key | keyboard event to key   
    turn keyboard event into keypress | evt_cto_key | evt_key   
    SEE[ F_KEYMAST_EVT_ASC ][068]                               
                                                                
    F_ARTGIRL_REN_SEL | REN_SEL | render pipeline select   [068]
    render select | select render pipeline | load pipeline [068]
    load render pipeline | artgirl pipeline load           [068]
    F_ARTGIRL_RPS | ARTGIRL_RPS | render pipeline load     [068]
    load render pipeline | select pipeline                 [068]
    SEE[ F_ARTGIRL_RPL ]( Render_Pipeline_Load )           [068]
    
*** ******************************************************** **/
/** FEATURE_CREEP ****************************************** ***

    Let people extend my code : ( 2022_06_24 ) :

        We should make it so that people can extend the game
        simply by loading JSONP ( application/javascript ) 
        into the game.

        Or maybe allow people to... extend the code base by
        including "ATOMIC_IVY_MMO" javasscript and then
        using it as a library ?

        application/javascript <<< Runnable JavaScript Response

        Inspired by:
        https://stackoverflow.com/questions/477816

*** ****************************************** FEATURE_CREEP **/
/** MISC_DELTA_NOTES *************************************** ***

    [044] : Will crash randomly if you supply correct           
          : password. This is by design. We will fix it         
          : in future deltas.                                   

    [048] : This snapshot can be difficult to get started
          : without crashing server because it requires us
          : to re-build the schema/table for[ tab_hex ]
          : before the api call[ DABITCH/C/TAB_HEX/red/40 ]
          :                    [ DABITCH/C/TAB_HEX/blue/69 ]
          : will work. We will make it easier by adding
          : helper api to re-create table in [049]

    [049] : Added helper : <yourappurl>/DABITCH/MAKTAB/TAB_HEX 

    [052] : Noticed that: <app>/DABITCH/C/TAB_HEX/blue
          : will crash the sever with a "missing column"
          : error.
          :
          : If argument is undefined, we should use an
          : "empty" name.
          :
          : null string ==> "[NIL][SQL_NIL]"
          : null number ==> 0
          :

    [056] : Return[ err_msg ]object from JSON response always.  
          : If error in SQL , rather than crash server,         
          : we pack meaningful error message into[ err_msg ].   
          : If no error , [ err_msg == "" ].                    
          : ADDED_DATE[ 2022_06_25 ]   

    [057] : KEYMAIN - Politically Correct Version Of            
          : KEYMAST ( Key Master )                              

    [059] : Added helpful message to help you configure         
          : your heroku installation properly if you            
          : cannot get access to your application name.         
          : RUN:                                                
           
        heroku labs:enable runtime-dyno-metadata --app APPNAME

    [060] : We didn't change any source code here.
          : (except this comment message)
          : I Ran :
    heroku labs:enable runtime-dyno-metadata --app "aim-kanji"
          :
          : You might need to use :
          :
          git commit --allow-empty -m "[EMPTY_COMMIT]"
          :
          : To force server to restart after adding
          : "runtime-dyno-metadata"
            
    [063] : Refactored project a bit to give ARTGIRL the        
          : things she rightfully owns and has                  
          : jurisdiction over.      

    [064] : Waterfalled some design by adding render       [064]
          : pipeline constants. This is literally our      [064]
          : ______ nth draft.                              [064]
          :                                                [064]
          : 1st draft : Atomic Alice (newgrounds)          [064]
          : 2nd draft : M128.JS  (still japanese)          [064]
          : 3rd draft : A2_JC (for josh project   2020)    [064]
          : 4rd draft : A2_JS (repo. Tile editor? 2021)    [064]
          :           : Tilde("~") + 2 to get to           [064]
          :           : interesting stuff.                 [064]
          : 5rd draft : AAC2020                            [064]
          : 6th draft : A3 's CPU world map render.        [064]
          : 7th draft : A3 's LEDIT64 system.              [064]
          : 8th draft : This source code. Atomic Ivy MMO   [064]

    [065] : J++ , Previously known as                      [065]
          : "JavaScript With Structs".                     [065]
          :                                                [065]
          : NinjaCoder Title: "JavaScript With Structs"    [065]
          : KanjiCoder Title: "JavaScript Struct Keyword"  [065]

    [066] : Added hardcoded vertex buffer data for         [066]
          : the shader quad needed for creating            [066]
          : 2D graphics pipeline in WebGL.                 [066]
          :                                                [066]
          : Also created nifty const-array                 [066]
          : constructor function for immutable             [066]
          : arrays of a fixed size to mimmick              [066]
          : C99 behavior.                                  [066]

    [067] : Added all ( I think ) member variables         [067]
          : needed by[ ARTGIRL ]to setup our OpenGL        [067]
          : rendering quad and display it on screen.       [067]
          :                                                [067]
          : Created an[ ARR ]function so that we dont      [067]
          : have to type[ new Array( len ) ]and can        [067]
          : instead type[     F_ARR( len ) ].                   // [069][067]

*** *************************************** MISC_DELTA_NOTES **/