//:ATOMIC_IVY_MMO_SOURCE_CODE:[034]:=========================://
/**----------------------------------------------------------:::
    Tutorial Where We Build This File ::::::::::::::::::::::::::

        www.tinyurl.com/GAME-TUTS             //: KANJICODER ://  
        www.tinyurl.com/GAME-TUTS-SLOWER      //: NINJACODER :// 
        www.tinyurl.com/GAME-TUTS-UNSCRIPTED  //:  WEEBCODER ://
:::----------------------------------------------------------:::
    Git Repo With All Source Code ::::::::::::::::::::::::::::::
                      
        github.com/KanjiCoder/AIM_087  <<< THIS_VIDEO¯S_CODE    // [087][086][085][084][083][082][081][080][079]                               

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

        touch package.json                                      // [073]
        echo '{ "dependencies":{"pg":"8.7.3"}}' > package.json  // [073]
        
        STEP 2 FOR ARTISTS :

            +-------------------------------------------------+ // [073]
            | Notepad ++ : server.js                  |[-]|[X]| // [073]
            +-------------------------------------------------+ // [073]
            |    |                                            | // [073]
            | 01 |  {                                         | // [073]
            | 02 |      "//" : "[ pg added in video [039] ]"  | // [073]
            | 03 |  ,   "dependencies": { "pg" : "8.7.3" }    | // [073]
            | 04 |  }                                         | // [073]
            |    |                                            | // [073]
            +----+--------------------------------------------+ // [073]
    
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

    const firefox =(                                            // [077]    
        notnode                                                 // [077]
        &&                                                      // [077]
        ('netscape' in window )                                 // [077]
        &&                                                      // [077]
        / rv:/.test( navigator.userAgent )                      // [077]
    );;                                                         // [077]

//:====================================:ENVIRONMENT_DETECTION://
//:TOP_LEVEL_CONSTANT_MACROS:[085]:==========================://// [085]
                                                                // [085]
    //:TAG[ constants | macros | constant | macro ]://          // [088]

    const c_fps =(  30  );  /** Simulation FrameRate **/        // [088][085]

    const c_dud = "[YOU_MEAN:c_dum:NO:DiscreteUnits:DUM]" ;     // [088]
    const c_dum = 0x7FFFFF ; //:DiscreteUnits:~MAP~             // [088]
    const c_dut = 0x2222   ; //:DiscreteUnits: TILE             // [088]
                                                                // [088]
    const   x_0 =( 0 ); //:VIEWPORT:LEF://                      // [088]
    const   x_1 =( 1 ); //:VIEWPORT:RIG://                      // [088]
    const   y_0 =( 2 ); //:VIEWPORT:TOP://                      // [088]
    const   y_1 =( 3 ); //:VIEWPORT:BOT://                      // [088]

                                                                // [085]
//:==========================:TOP_LEVEL_CONSTANT_MACROS:[085]://// [085]
//:TOP_LEVEL_VARIABLES:[088]:================================://   [---]
                                                                   [088]

    //:TAG[ viewport_rectangles | viewport-rectangles   ]://       [088]
    //:TAG[ viewport rectangles | vprec|vp-rec|vp_rec   ]://       [088]
                                                                   [088]
    var d_vpc = new Uint32Array( 4 ); //:@d_vpc@ : CANVAS://       [088]
    var d_vp0 = new Uint32Array( 4 ); //:@d_vp0@ : DEST  ://       [088]
    var d_vp1 = new Uint32Array( 4 ); //:@d_vp1@ : DATA  ://       [088]
                                                                   [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://       [088]
        //:Initially, Camera Is Zoomed All The Way Out   ://       [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://       [088]
        d_vp1[ x_0 ]=(       0  );                                 [088]
        d_vp1[ y_0 ]=(       0  );                                 [088]
        d_vp1[ x_1 ]=( c_dum - 1);                                 [088]
        d_vp1[ y_1 ]=( c_dum - 1);                                 [088]
                                                                   [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://       [088]
        //: We don't know what[ vp1 ]or[ vpc ]should be  ://       [088]
        //: yet, but let's set them to something that    ://       [088]
        //: will clue us in on how they got to that      ://       [088]
        //: size.                                        ://       [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://       [088]
        d_vp0[ x_0 ]=(   0  ); d_vpc[ x_0 ]=(   0  );              [088]
        d_vp0[ y_0 ]=(   0  ); d_vpc[ y_0 ]=(   0  );              [088]
        d_vp0[ x_1 ]=( 420  ); d_vpc[ x_1 ]=(  69  );              [088]
        d_vp0[ y_1 ]=( 420  ); d_vpc[ y_1 ]=(  69  );              [088]
                                                                   [088]
//:================================:TOP_LEVEL_VARIABLES:[088]://   [---]
//:SHUTARR:[077]:============================================://

    const F_SHUTARR = function PRIVATE_F_SHUTARR(               // [077]
                                                                // [077]
        i_arr                                                   // [077]
    ){                                                          // [077]
        if( firefox ){                                          // [077]
                                                                // [077]
            /** Do nothing because idiots at firefox **/        // [077]
            /** don't know how to correctly implement**/        // [077]
            /** the god damned spec. ............... **/        // [077]
        }else{                                                  // [077]
                                                                // [077]
            Object.seal( i_arr );                               // [077]
        };;                                                     // [077]
    };;                                                         // [077]

//:============================================:SHUTARR:[077]://
//:F32_ARRAY:[075]:==========================================://

    const F_ARR_F32 = function PRIVATE_F_ARR_F32(               // [075]
                                                                // [075]
        i_len /** Length Of Array **/                           // [075]
    ){                                                          // [075]
        var o_arr = "[nil][f_arr_f32:o_arr]" ;                  // [075]
        var   len = arguments.length ;                          // [075]
        var   dex = 0 ;                                         // [075]
                                                                // [075]
        if( len !=( i_len + 1 ) ){                              // [075]
            ERR( "[F_ARR_F32:#IAI#]" );                         // [075]
        }else{                                                  // [075]
            o_arr = new Float32Array( i_len );                  // [075]
            for( dex = 0 ; dex <=( i_len-1 ) ; dex ++ ){        // [075]
                                                                // [075]
                o_arr[ dex ] = (                                // [075]
                    (0.0) + ( arguments[ dex + 1 ] )            // [075]
                );;                                             // [075]
            };;                                                 // [075]
        };;                                                     // [075]
        F_SHUTARR( o_arr /** #FAS# **/ );                       // [077][075]
        return( o_arr );                                        // [075]
    };;                                                         // [075]
                                                                // [---]
    const F_CAR_F32 = function PRIVATE_F_CAR_F32(               // [075]
                                                                // [075]
        i_len                                                   // [075]
    ){                                                          // [075]
        //: #_DRY_INSTEAD_OF_KISS_WARNING_BECAUSE_LAZY_# ://    // [075]
                                                                // [075]
        if( i_len <= 0 ){ ERR("[#YSMITF#:F32]" ); };            // [076][075]
                                                                // [075]
        var                o_arr = "[nil][f_car_f32]" ;         // [075]
                           o_arr =(                             // [075]
                                                                // [075]
            F_ARR_F32.apply( null , arguments )                 // [075]
        );;                                                     // [075]
        //- Object.freeze( o_arr ); #KFNFR# -//                 // [075]
        return(            o_arr );                             // [075]
    };;                                                         // [075]

//:==========================================:F32_ARRAY:[075]://
//:U08_ARRAY:[075]:==========================================://

    const F_ARR_U08 = function PRIVATE_F_ARR_U08(               // [076]
                                                                // [076]
        i_len /** Length Of Array **/                           // [076]
    ){                                                          // [076]
        var o_arr = "[nil][f_arr_u08:o_arr]" ;                  // [076]
        var   len = arguments.length ;                          // [076]
        var   dex = 0 ;                                         // [076]
        var   arg = 0 ;                                         // [076]
                                                                // [076]
        if( len !=( i_len + 1 ) ){                              // [076]
            ERR( "[F_ARR_U08:#IAI#]" );                         // [076]
        }else{                                                  // [076]
            o_arr = new Uint8Array( i_len );                    // [076]
            for( dex = 0 ; dex <=( i_len-1 ) ; dex ++ ){        // [076]
                                                                // [076]
                arg = arguments[ dex + 1 ];                     // [076]
                if(  arg < 0   ){ ERR("[NEG_U08]"); };          // [076]
                if(!( arg>=0 ) ){ ERR("[WTF_U08]"); };          // [076]
                o_arr[ dex ] = ( arg );                         // [076]
            };;                                                 // [076]
        };;                                                     // [076]
        F_SHUTARR( o_arr /** #FAS# **/ );                       // [077][076]
        return( o_arr );                                        // [076]
    };;                                                         // [076]
                                                                // [---]
    const F_CAR_U08 = function PRIVATE_F_CAR_U08(               // [076]
                                                                // [076]
        i_len                                                   // [076]
    ){                                                          // [076]
        //: #_DRY_INSTEAD_OF_KISS_WARNING_BECAUSE_LAZY_# ://    // [076]
                                                                // [076]
        if( i_len <= 0 ){ ERR("[#YSMITF#:U08]" ); };            // [076]
                                                                // [076]
        var                o_arr = "[nil][f_car_u08]" ;         // [076]
                           o_arr =(                             // [076]
                                                                // [076]
            F_ARR_U08.apply( null , arguments )                 // [076]
        );;                                                     // [076]
        //- Object.freeze( o_arr ); #KFNFR# -//                 // [076]
        return(            o_arr );                             // [076]
    };;                                                         // [076]

//:==========================================:U08_ARRAY:[075]://
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

    //:CTRL_F_TAGS[ #illegal# ]                          ://    // [063] 
    //:TAG[ disallowed | its wrong carl | monkey wrench ]://    // [085]
    //:TAG[ its-wrong-carl | itswrongcarl | wrong_carl  ]://    // [086]
    //:TAG[ its_wrong_carl .............................]://    // [086]
                                                                 
    const d_fps =( "[MORE_SENSIBLE::c_fps]" );                  // [085]
    const i_tim =( "[REFACTORED_USE:d_tik]" );                  // [085]
    const d_tim =( "[YOU_MEAN:::::::d_tik]" );                  // [085]
    const d_cligame_tik =( "[FIX:d_tik]"    );                  // [085]
                                                                // [085]
    const c_cligame_t_0 =( "[FIX:NOT_CONST:d_cligame_t_0]" );   // [085]
    const c_cligame_t_1 =( "[FIX:NOT_CONST:d_cligame_t_1]" );   // [085]
    const c_cligame_mil =( "[FIX:NOT_CONST:d_cligame_mil]" );   // [085]
    const c_cligame_ams =( "[FIX:NOT_CONST:d_cligame_ams]" );   // [085]
    const d_cligame_tms =( "[IS_CONSTANT:::c_cligame_tms]" );   // [085]

    const idv =( "[FIX:vid]" );                                 // [071]
    const idf =( "[FIX:fid]" );                                 // [071]
    const idp =( "[FIX:pid]" );                                 // [071]
                                                                // [071]
    const fss =( "[FIX:ssf]" );                                 // [071]
    const vss =( "[FIX:ssv]" );                                 // [071]
    const P_F =( "[FIX:MSG]( P_F == MSG )" );                   // [071]

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

    var d_tik =(  0  );  /** Simulation Ticker **/              // [085]
                         /** Inited Elsewhere  **/              // [085]

    


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
//:CONST_MACROS_BY_SYSTEM[074]:==============================://// [---]

//: __CLIGAME__ ://                                             // [085]
                                                                // [085]
    const c_cligame_tms =( 1000 / c_fps ); /**Target_MIL sec**/ // [085]


                                                    
//: __ARTGIRL__ ://                                  //:[064]://

    /** Shader Attribute AND Uniform Locations. **/             // [086][077]
                                                                // [077]
        const c_artgirl_loc_pos =( 0 /** #S_POS# **/ );         // [077]
        const c_artgirl_loc_tex =( 1 /** #S_TEX# **/ );         // [077]
        const c_artgirl_loc_tik =( "[#NO_LOC_TIK#]"  );         // [086]

    /** What Version Of WebGl Are We Using? **/

        const c_artgirl_wgl_tag =("#version 300 es");           // [074]
        const c_artgirl_wgl_ask =(         "webgl2");           // [074]

    /** WebGL Surface Quad Macros ********* **/                 // [066] 
                                                                // [066] 
        const c_artgirl_vbd_len =( 20 );                        // [066] 
                                                                         
    /** *********************************** **/                 // [064] 
    /** Different Rendering Pipelines [064] **/                 // [064] 
    /** *********************************** **/                 // [064] 
                                                                // [064] 
    //:--------------------------------------------------://    // [085]
    //:TAG[ shader types | shader type | slotted shaders]://    // [085]
    //:TAG[ reserved shaders | shader enums | shader id ]://    // [085]
    //:TAG[ shaders on the table | planned shaders      ]://    // [085]
    //:TAG[ shader identifiers | renderers | rendernums ]://    // [085]
    //:TAG[ slotted renderers | slated renderers        ]://    // [085]
    //:--------------------------------------------------://    // [085]
                                                                         
    const c_artgirl_ren_000 = "[DONT_USE:000]" ;                // [068] 
    const c_artgirl_ren_bad = ( 0 ); //:Select:ren_def       ://// [068] 

    const c_artgirl_ren_001 = ( 1 ); //:FLAT_CYAN_COLOR      ://// [081][068]
    const c_artgirl_ren_002 = ( 2 ); //:FLAT_LIME_COLOR      ://// [081][068]
    const c_artgirl_ren_003 = ( 3 ); //:GradientQuad         ://// [081][068]
    const c_artgirl_ren_004 = ( 4 ); //:FlashingScreen       ://// [081][068]
    const c_artgirl_ren_005 = ( 5 ); //:Sectors_Colored      ://// [081][068]
    const c_artgirl_ren_006 = ( 6 ); //:Sectors_Numbered     ://// [081][068]
    const c_artgirl_ren_007 = ( 7 ); //:SolidColorTiles      ://// [081][068]
    const c_artgirl_ren_008 = ( 8 ); //:@HEXASET1STAMP@      ://// [081][068]
    const c_artgirl_ren_009 = ( 9 ); //:@HEXASET1AUSET@      ://// [081][068]

    const c_artgirl_ren_tot = ( 9 ); //:#RenderPipelines#    ://// [081][068]
                                                                
    const c_artgirl_ren_def = (      //:Default_Render       ://// [068] 
          c_artgirl_ren_001    );;   //:Pipeline_To_Use      ://// [068] 

//:==============================:CONST_MACROS_BY_SYSTEM[074]://
//:__ARTGIRL__:SHADER_STRINGS:[074]:=========================://// [---]
                                                                // [069]
const d_artgirl_ssv_bad =( "[BAD_SSV_DEX:ssv]" );               // [070][069]
const d_artgirl_ssf_bad =( "[BAD_SSV_DEX:ssf]" );               // [070][069]
                                                                // [069]
const d_artgirl_ssv_all =( //: ShaderSourceVert #all# ://       // [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]    

    precision highp float;                                      // [074]
                                                                // [074]
    layout (location = ${c_artgirl_loc_pos}) in vec3 inn_pos ;  // [077][074]
    layout (location = ${c_artgirl_loc_tex}) in vec2 inn_tex ;  // [077][074]
                           out vec2 i_o_tex ;    //:@i_o_tex@://// [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        gl_Position =vec4( inn_pos.x                            // [074]
                         , inn_pos.y                            // [074]
                         , inn_pos.z                            // [074]
                         ,       1.0 );                         // [074]
                                                                // [074]
        i_o_tex = inn_tex ;                                     // [074]
    }                                                           // [074]
                                   
`));; //////////////////////////////////////////////////////////   [069]
                                                                // [069]
const d_artgirl_ssv_001 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_002 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_003 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_004 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_005 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_006 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_007 =( d_artgirl_ssv_all ); //:@ssv@://     // [070][069]
const d_artgirl_ssv_008 =( d_artgirl_ssv_all ); //:@ssv@://     // [081]
const d_artgirl_ssv_009 =( d_artgirl_ssv_all ); //:@ssv@://     // [081]
                                                                // [069]
const d_artgirl_ssf_001 =( //: ShaderSourceFrag #01@ssf@[069]://// [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074] 

    //: FRAG_SHADER_STR[ d_artgirl_ssf_001 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_001 ] ://                // [081]
                                 
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [074]
    }                                                           // [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_002 =( //: ShaderSourceFrag #02@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]  

    //: FRAG_SHADER_STR[ d_artgirl_ssf_002 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_002 ] ://                // [081]                     
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4(0.5, 1 , 0 , 1.0 ); //:LIME://           // [081][074]
    }                                                           // [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_003 =( //: ShaderSourceFrag #03@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074] 

    //: FRAG_SHADER_STR[ d_artgirl_ssf_003 ] :-------------://  // [083][081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_003 ] :-------------://  // [083][081] 
    //: FRAG_SHADER_SUM[ GRADIENT_QUAD / GradientQuad    ] ://  // [083]
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4(//:---------------------://              // [083][074]
            i_o_tex.x  //: X: 0% to 100% Red   ://              // [083]
        ,   i_o_tex.y  //: Y: 0% to 100% Green ://              // [083]
        ,   0.0        //:    0% Blue          ://              // [083]
        ,   1.0        //: 100% Alpha          ://              // [083]
        );;            //:---------------------://              // [083][074]
                                                                // [074]
    }                                                           // [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_004 =( //: ShaderSourceFrag #04@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]  

    //: FRAG_SHADER_STR[ d_artgirl_ssf_004 ] :--------------:// // [084][081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_004 ] :--------------:// // [084][081]  
    //: FRAG_SHADER_SUM[ FlashingScreen / FLASH_GRAD ]://       // [084]
                                                                        
    precision mediump float ;                                   // [074]
    
    #define F32 float    //: Shorthand Type == Uppercase ://    // [086]
    #define U32 uint     //: Shorthand Type == Uppercase ://    // [086]
    #define UNI uniform  //: Shorthand Type == Uppercase ://    // [086]
                                                                // [086]
    UNI U32 d_tik ;                                             // [086]
                                                                //      [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       //      [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       //      [074]
                                                                //      [074]
    void main(){                                                //      [074]
                                                                //      [074]

        F32 f32 = mod( F32( d_tik ) , 255.0  ) / 255.0 ;        // [086]
                                                                // [086]
        out_f_c = vec4(                  ///                    // [086]
            mod( i_o_tex.x * 10.0 , 1.0 )///                    // [086]
        ,   mod( i_o_tex.y * 10.0 , 1.0 )///                    // [086]
        ,   f32                          ///                    // [086]
        ,   1.0                          ///                    // [086]
        );; //:INCREASING_BLUE://///////////                    // [086][074]

    }                                                           //      [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_005 =( //: ShaderSourceFrag #05@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]   

    //: FRAG_SHADER_STR[ d_artgirl_ssf_005 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_005 ] ://                // [081]                    
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [074]
    }                                                           // [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_006 =( //: ShaderSourceFrag #06@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]   

    //: FRAG_SHADER_STR[ d_artgirl_ssf_006 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_006 ] ://                // [081]                    
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [074]
    }                                                           // [074]
                                                                        
`));; //////////////////////////////////////////////////////////   [069]
const d_artgirl_ssf_007 =( //: ShaderSourceFrag #07@ssf@[069]://   [070][069]
////////////////////////////////////////////////////////////////   [069]
(c_artgirl_wgl_tag+`                                            // [074]  

    //: FRAG_SHADER_STR[ d_artgirl_ssf_007 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_007 ] ://                // [081]                           
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){                                                // [074]
                                                                // [074]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [074]
    }                                                           // [074]
                                                                //      
`));; //////////////////////////////////////////////////////////// [069]
                                                                // [---]
                                                                // [---]
                                                                // [---]
const d_artgirl_ssf_008 =( //: ShaderSourceFrag #08@ssf@[081]://// [081]
////////////////////////////////////////////////////////////////// [081]
(c_artgirl_wgl_tag+`                                            // [081]
                                                                // [081]
    //: FRAG_SHADER_STR[ d_artgirl_ssf_008 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_008 ] ://                // [081]
                                                                // [081]
    precision mediump float ;                                   // [081]
                                                                // [081]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [081]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [081]
                                                                // [081]
    void main(){                                                // [081]
                                                                // [081]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [081]
    }                                                           // [081]
                                                                // [081]
`));; //////////////////////////////////////////////////////////// [081]
const d_artgirl_ssf_009 =( //: ShaderSourceFrag #09@ssf@[081]://   [081]
////////////////////////////////////////////////////////////////// [081]
(c_artgirl_wgl_tag+`                                            // [081]
                                                                // [081]
    //: FRAG_SHADER_STR[ d_artgirl_ssf_009 ] ://                // [081]
    //: FRAG_SHADER_ENU[ c_artgirl_ren_009 ] ://                // [081]
                                                                // [081]
    precision mediump float ;                                   // [081]
                                                                // [081]
    in  vec2  i_o_tex ; //: @i_o_tex@ ://                       // [081]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [081]
                                                                // [081]
    void main(){                                                // [081]
                                                                // [081]
        out_f_c = vec4( 0 , 1 , 1 , 1.0 ); //:CYAN://           // [081]
    }                                                           // [081]
                                                                // [081]
`));; //////////////////////////////////////////////////////////// [081]
                                                                // [---]
                                                                // [---]
                                                                // [---]
                                                                // [069]
//:=========================:__ARTGIRL__:SHADER_STRINGS:[074]://// [---]
//:DATA_BY_SYSTEM:[063]:=====================================://// [---]
                                                                // [063]

if( /** __CLIGAME__ **/ notnode ){                              // [085]
                                                                // [085]
    /** Frame Rate Control **/                                  // [085]
                                                                // [085]
        var   d_cligame_t_0 ; //:TimeStampBeforeWork://         // [085]
        var   d_cligame_t_1 ; //:TimeStampAfterWork ://         // [085]
        var   d_cligame_mil ; //:ElapsedMilliseconds://         // [085]
        ///   d_cligame_tms ; //:Target Millisecs   ://         // [085]
        var   d_cligame_ams ; //:Adjusted/LeftoverMS://         // [085]
                                                                // [085]
        ASS(  c_cligame_tms === ( 1000 / c_fps ) , "[TMS]" );   // [085]
                                                                // [085]
                                                                // [085]
};;                                                             // [085]
if( /** __ARTGIRL__ **/ notnode ){                              // [063] 
                                                                // [063] 
    var d_artgirl_wgl =( "[FIX:a_g.wgl]" );                     // [063] 
                                                                // [---]
    let neg =(0.0 - 1.0 );                                      // [066]  
    let pos =(0.0 + 1.0 );                                      // [066]  
    let _0_ =(0.0 * 0.0 );                                      // [066] 

    let min =(0.0) ; //:Min Texture Coordinate Value://         // [083]
    let max =( 1 ) ; //:Max Texture Coordinate Value://         // [083]

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

    ,   ren_pin : (0-666)  //:AT[ren_pin]://                    // [086]
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
            ,      d_artgirl_ssv_008                            // [081]
            ,      d_artgirl_ssv_009                            // [081]
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
            ,      d_artgirl_ssf_008                            // [081]
            ,      d_artgirl_ssf_009                            // [081]
            )      /////////////////                            // [069]
                                                                // [---]
    ,   vbl :          c_artgirl_vbd_len //:@vbd@://            // [066] 
    ,   vbd :F_CAR_F32(c_artgirl_vbd_len //:@vbd@://            // [066] 
                                                                // [066] 
            //:@vcx@ @vcy@ @vcz@        @tcx@ , @tcy@           // [075][066] 
            ,   neg , neg , _0_    ,    (min) , ( 1 )//:#TLO#://// [083][075][066] 
            ,   pos , neg , _0_    ,    ( 1 ) , ( 1 )//:#TLO#://// [083][075][066] 
            ,   neg , pos , _0_    ,    (min) , (min)//:#TLO#://// [083][075][066] 
            ,   pos , pos , _0_    ,    ( 1 ) , (min)//:#TLO#://// [083][075][066] 
            )  //:#ITS_A_ZEE#://                                // [075][074] 
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

    function ASS( i_obj ){                                      // [071]
                                                                // [071]
        if( !HAS( i_obj ) ){ MSG( "[ASSFAIL]" ); };             // [071]
                                                                // [071]
        return(   i_obj );                                      // [071]
    };;                                                         // [071]
                                                                                                       
//:=============================:FUNC_BOILERPLATE:[028]+[035]://
//:FUNC_RESIZE_CANVAS:[032]+[035]:===========================://

    const F_RES_CAN = function PRIVATE_F_RES_CAN( ){            // [032]

        let a_g = d_artgirl ;                                   // [080]

        var wid =( 0 - 333 /** @cli_wid@ **/ );                 // [063] 
        var hig =( 0 - 666 /** @cli_hig@ **/ );                 // [063] 
        let   W = window ;                                      // [032][031]
        let   D = document.documentElement ;                    // [032][031]
        let   B = document.body            ;                    // [032][031]
                                                                // [032][031]
        wid =(W.innerWidth ||D.clientWidth ||                   // [032][031]
                             B.clientWidth || 0 );;             // [032][031]
        hig =(W.innerHeight||D.clientHeight||                   // [032][031]
                             B.clientHeight|| 0 );;             // [032][031]
                                                                // [032][031]
        d_can.width = wid ;                                     // [032][031]
        d_can.height= hig ;                                     // [032][031]

        if( HAS( a_g.wgl ) ){                                   // [080]
                 a_g.wgl.viewport( 0 , 0 ,wid,hig );            // [080]
        };;                                                     // [080]
    };;                                                         // [032]
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

        d_tik =( 60 * 60 * 1000 );  //:#_TIK_TIMETRAVEL_#://    // [085]
       
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

    const   F_ARTGIRL_RPL = function                            // [068] 
    PRIVATE_F_ARTGIRL_RPL( //:Render Pipeline Load @RPL@ ://    // [068] 
                                                                // [068] 
        i_ren //: < < < < < < Render Pipeline Number     ://    // [068] 
    ){                                                          // [068] 
        if( i_ren < 1 ){ ERR("[RPL_NEG]") ; };                  // [068] 
        if( i_ren > 9 ){ ERR("[RPL_POS]") ; };                  // [068] 
        if( i_ren > c_artgirl_ren_tot ){                        // [068] 
                                                                // [068] 
            MSG("[Not_That_Many_Render_Pipelines]");            // [068] 
        };;                                                     // [068] 
                                                                // [068] 
        LOG( "[[RENDER_PIPELINE_LOAD]:RPL]" , i_ren );          // [082][068]

        //:LIKE_AND_SUBSCRIBE_YOU_FREELOADER:[082]:------://    //      [082]
                                                                //      [082]
            let a_g = d_artgirl     ;          //:@MACRO@://    //      [082]
            let wgl = d_artgirl.wgl ;          //:@MACRO@://    //      [082]
            if( NIL( wgl ) ){                                   //      [082]
                LOG("[CALM_THE_FUCK_DOWN_AND_WAIT]");           //      [082]
            }else{                                              //      [082]
                var pid = a_g.arr_pid[ i_ren ];                 //      [082]
                wgl.useProgram( pid );                          //      [082]
                a_g.ren_pin=( i_ren );                          // [086]
            };;                                                 //      [082]
        //:------:LIKE_AND_SUBSCRIBE_YOU_FREELOADER:[082]://    //      [082]

    };;                                                         // [068] 

    const   F_ARTGIRL_TIK = function                            // [063] 
    PRIVATE_F_ARTGIRL_TIK(                                      //      [063] 
        /**VOID**/                                              // [085][063]
    ){                                                          //      [063]
        let a_g = d_artgirl     ;                               //      [063]
        let wgl = d_artgirl.wgl ;                               // [086]
                                                                // [086]
        //:update_frag_shader_uniforms:[086]-------------://    // [086]
                                                                // [086]
            //:[#PMOITROAE#]://                                 // [086]
            var act_pid =( a_g.arr_pid[ a_g.ren_pin ] );        // [086]
            var loc_tik = wgl.getUniformLocation(               // [086]
                act_pid                                         // [086]
            ,   "d_tik"                                         // [086]
            );;                                                 // [086]
            a_g.wgl.uniform1ui( loc_tik , d_tik );              // [086]
                                                                // [086]
        //:------------:[086]:update_frag_shader_uniforms://    // [086]

        var u_r ; //:uint32  red://                             // [085]
        var f_r ; //:float32 red://                             // [085]

        var u_r = ( d_tik % 256     ); //:#I32_MOD#://          // [085][063]
        var f_r = ( u_r   / 255     ); //:#FP_NORM#://          // [085]

        if( f_r > 255.0 ){ ERR("[f_r:big]" ); };                // [085][063]
        if( f_r <   0.0 ){ ERR("[f_r:low]" ); };                // [085]
 
        a_g.wgl.clearColor( f_r , 0.0 , 0.0 , 1.0 );            // [063] 
        a_g.wgl.clear( a_g.wgl.COLOR_BUFFER_BIT );              // [063] 

        a_g.wgl.bindVertexArray( a_g.vao );   /**#GLSNAPSHOT#**/// [078][074]

        a_g.wgl.drawArrays(                                     // [074]
                                                                // [074]
            a_g.wgl.TRIANGLE_STRIP //: #TESTYLE# ://            // [074]
                                                                // [074]
        ,   0  //: IndexOfFirstVert   ://                       // [074]
        ,   4  //: NumberOfVertsToDraw://                       // [074]
        );;                                                     // [074]

    };;                                                         // [063] 
                                                                // [063] 

    const   F_ARTGIRL_ERR_CHK = function                        // [071]
    PRIVATE_F_ARTGIRL_ERR_CHK(                                  // [071]
                                                                // [071]
        i_tbm /** @tbm@ : TraceBackMessage **/                  // [071]
    ){                                                          // [071]
                                                                // [---]
        let a_g = d_artgirl     ;                               // [072]
        let wgl = d_artgirl.wgl ;                               // [072]
                                                                // [072]
        var err = wgl.getError( );                              // [072]
        if( wgl.NO_ERROR == err ){                              // [072]
                                                                // [072]
            LOG( "[ARTGIRL_ERR_CHK:O_K]" , i_tbm );             // [072]
        }else{                                                  // [072]
            LOG( "[ARTGIRL_ERR_CHK:BAD]" , i_tbm );             // [073][072]
                                                                // [---]
            var d ={   }; /** d for dict **/                    // [073]
            var w = wgl ; /** w for  wgl **/                    // [073]
            d[(""+( w.INVALID_ENUM                  ))]="[FU1]";// [073]
            d[(""+( w.INVALID_VALUE                 ))]="[FU2]";// [073]
            d[(""+( w.INVALID_OPERATION             ))]="[FU3]";// [073]
            d[(""+( w.INVALID_FRAMEBUFFER_OPERATION ))]="[FU4]";// [073]
            d[(""+( w.OUT_OF_MEMORY                 ))]="[FU5]";// [073]
            d[(""+( w.CONTEXT_LOST_WEBGL            ))]="[FU6]";// [073]
                                                                // [073]
            var err_msg =( d[ ""+err+"" ] );                    // [073]
            LOG( "[ARTGIRL_ERR_CHK:err_msg]" , err_msg );       // [073]
            ERR( "[ARTGIRL_ERR_CHK:err_msg]" + err_msg );       // [073][072]
        };;                                                     // [072]
                                                                // [---]
    };;                                                         // [071]

    const   F_ARTGIRL_INI = function                            // [063] 
    PRIVATE_F_ARTGIRL_INI(  /**AKA[ render pipeline factory ]**/// [071] 
                                                                // [063] 
        /** NO arguments **/                                    // [063] 
    ){                                                          // [063] 
        let a_g = d_artgirl ;                                   // [063] 
                                                                // [063] 
        a_g.wgl = d_can.getContext( c_artgirl_wgl_ask );        // [074][063] 
                                                                         
        let wgl =( a_g.wgl /** d_artgirl.wgl **/ );             // [071] 
                                                                // [071]
        
        let a_b = wgl.ARRAY_BUFFER ;                            // [078]

        //:VBO_IS_AI0:[077]:-----------------------------://    // [077]
        //:                                              ://    // [077]
        //: 1 : Allocate Untyped Buffer & Get It's Handle://    // [077]
        //: 2 : Specify Type Of The Buffer (arraybuffer) ://    // [077]
        //: 3 : Supply Data To The Buffer.               ://    // [077]
        //:- - - - - - - - - - - -- - - - - - - - - - - -://    // [077]
        {                                                       // [077]
            /** #_OPENGL_VS_WEBGL_PART_002_# **/                // [077]
                                                                // [077]
        //:[STEP_001]://                                        // [077]
                                                                // [077]
            /** **************************************** **/    // [077]
            /** Allocate Untyped Buffer , Get Handle.    **/    // [077]
            /** **************************************** **/    // [077]
                                                                // [077]
            a_g.vbo = wgl.createBuffer( );                      // [077]
                                                                // [077]
        //:[STEP_002]://                                        // [077]
                                                                // [077]
            /** **************************************** **/    // [077]
            /** wgl.bindBuffer( ... , a_g.vbo )          **/    // [077]
            /** Tell WebGL That[ bufferData ]command     **/    // [077]
            /** is to affect[ a_g.vbo ]                  **/    // [077]
            /** **************************************** **/    // [077]
                                                                // [077]
            wgl.bindBuffer( a_b , a_g.vbo );                    // [078][077]
                                                                // [077]
        //:[STEP_003]://                                        // [077]
                                                                // [077]
            /** **************************************** **/    // [077]
            /** Let GPU know about your raw array.       **/    // [077]
            /**                                          **/    // [077]
            /** CPU COPY : a_g.vbd                       **/    // [077]
            /** GPU COPY : a_g.vbo                       **/    // [077]
            /** **************************************** **/    // [077]
                                                                // [077]
            wgl.bufferData(                                     // [077]
                a_b               //:[ target   ]://            // [078][077]
            ,   a_g.vbd           //:[ srcData  ]://            // [077]
            ,   wgl.STATIC_DRAW   //:[ usage    ]://            // [077]
            ,   0                 //:[ srcOffset]      #GFD_001#// [078][FIX]  
            ,   a_g.vbl           //:[ length   ]://            // [077]
            );;                                                 // [077]
        }                                                       // [077]
        //:-----------------------------:VBO_IS_AI0:[077]://    // [077]

        //:VAO_IS_AI1:[078]:-----------------------------://    // [078]
        //:                                              ://    // [078]
        //:   SEE[ www.tinyurl.com/ANDY-WEBGL2 ]         ://    // [078]
        //:                                              ://    // [078]
        //:- - - - - - - - - - - -- - - - - - - - - - - -://    // [078]
        {                                                       // [078]
            //: #_OPENGL_VS_WEBGL_PART_003_# ://                // [078]
                                                                // [078]
            //:function_pointers:[078]:------------------://    // [078]
                                                                // [078]
                let w = wgl; let CVA,BVA,A_P,O_N ;;;;;;;;;      // [078]
                                                                // [078]
                CVA =( w.createVertexArray      ).bind(w);      // [078]
                BVA =( w.bindVertexArray        ).bind(w);      // [078]
                                                                // [078]
                O_N =( w.enableVertexAttribArray).bind(w);      // [078]
                A_P =( w.vertexAttribPointer    ).bind(w);      // [078]
                                                                // [078]
            //:------------------:function_pointers:[078]://    // [078]
            //:calculations:[078]:-----------------------://    // [078]
                                                                // [078]
                let b =( Float32Array.BYTES_PER_ELEMENT );      // [078]
                let t =( wgl.FLOAT ); //: t : type     ://      // [078]
                let s =( (3+2) * b ); //: s : stride   ://      // [078]
                                                                // [078]
                var oib_pos = ( 0 * b );                        // [078]
                var oib_tex = ( 3 * b );                        // [078]
                                                                // [078]
                let loc_pos = c_artgirl_loc_pos ;               // [078]
                let loc_tex = c_artgirl_loc_tex ;               // [078]
                                                                // [078]
                if( 0 != loc_pos ){ ERR("[loc_pos]"); };        // [078]
                if( 1 != loc_tex ){ ERR("[loc_tex]"); };        // [078]
                if( 4 !=      b  ){ ERR("[_4_:-b-]"); };        // [078]
                                                                // [078]
            //:-----------------------:calculations:[078]://    // [078]
            //:actions:[078]:----------------------------://    // [078]
                                                                // [078]
                     a_g.vao =  CVA(  );      //:#SS_BEG#://    // [078]
                BVA( a_g.vao );               //:#SS_BEG#://    // [078]
                                                                // [078]
                    O_N( loc_pos /**#S_POS#**/ );               // [078]
                    O_N( loc_tex /**#S_TEX#**/ );               // [078]
                                                                // [078]
                    A_P( loc_pos , 3 , t,0,s , oib_pos );       // [078]
                    A_P( loc_tex , 2 , t,0,s , oib_tex );       // [078]
                                                                // [078]
                wgl.bindVertexArray( null );  //:#SS_END#://    // [078]
                wgl.bindBuffer( a_b, null );  //:#SS_END#://    // [078]
                                                                // [078]
            //:----------------------------:actions:[078]://    // [078]
        }                                                       // [078]
        //:-----------------------------:VAO_IS_AI1:[078]://    // [078]

        //:vardec:[071]:---------------------------------://    // [071]
                      //: ------------------------------ ://    // [071]
            var i_0 ; //: RenderPipeline : INDEX ( MIN ) ://    // [071]
            var i_1 ; //: RenderPipeline : INDEX ( MAX ) ://    // [071]
            var i_r ; //: RenderPipeline : INDEX         ://    // [071]
                    ; //: ------------------------------ ://    // [071]
            var ssv ; //: ShaderSource : Vertex          ://    // [071]
            var ssf ; //: ShaderSource : Fragment        ://    // [071]
                    ; //: ------------------------------ ://    // [071]
            var vid ; //: ID : Shader : VERT             ://    // [071]
            var fid ; //: ID : Shader : FRAG             ://    // [071]
            var pid ; //: ID : Shader : PROGRAM          ://    // [071]
                    ; //: ------------------------------ ://    // [071]
            var typ ; //: Shader Type                    ://    // [071]
            var o_k ; //: Is everything O_K ?            ://    // [071]
            var msg ; //: Diagnostic Error Message       ://    // [071]
                      //: ------------------------------ ://    // [071]
        //:---------------------------------:vardec:[071]://    // [071]
        //:varini:[071]:---------------------------------://    // [071]
                                                                // [071]
            i_0 =( 1 );                                         // [071]
            i_1 = c_artgirl_ren_tot ;                           // [071]
            o_k =( 1 );                                         // [071]
                                                                // [071]
        //:---------------------------------:varini:[071]://    // [071]
        //:compile_all_vertex_shaders:[071]:-------------://    // [071]
                                                                // [071]
            if( o_k >= 1 ){                                     // [071]
            for( i_r = i_0 ; i_r <= i_1 ; i_r ++ ){             // [071]
                                                                // [---]
                //: SEE[ #_OPENGL_VS_WEBGL_# ] ://              // [072]
                                                                // [072]
                typ = ASS( a_g.wgl.VERTEX_SHADER     );         // [072]
                ssv = ASS( a_g.arr_ssv[ i_r ]        );         // [072]
                vid = ASS( wgl.createShader( typ ) );           // [072]
                                                                // [072]
                wgl.shaderSource(    vid , ssv  );              // [072]
                wgl.compileShader(   vid        );              // [072]
                                                                // [072]
                msg = wgl.getShaderInfoLog(   vid   );          // [072]
                o_k = ( ( msg.length <= 0 ) ? 1 : 0 );          // [072]
                                                                // [072]
                if( 1 == o_k ){                                 // [072]
                                                                // [072]
                    a_g.arr_vid[ i_r ]=ASS( vid );              // [072]
                }else                                           // [072]
                if( 0 == o_k ){                                 // [072]
                    MSG("[BEG:ssv]\n\n");                       // [072]
                                                                // [072]
                    MSG( ssv );                                 // [072]
                                                                // [072]
                    MSG( "[END:ssv]\n\n"           );           // [072]
                    LOG( "[C_S:INFOLOG:V_S]" , msg );           // [072]
                    ERR( "[C_S:VERT_SHADER]"       );           // [072]
                }else{                                          // [072]
                    ERR("[WTFMAN:VERT]");                       // [072]
                };;                                             // [072]
                                                                // [---]
            };;};;                                              // [071]
        //:-------------:compile_all_vertex_shaders:[071]://    // [071]
        //:compile_all_fragment_shaders:[071]:-----------://    // [071]
                                                                // [071]
            if( o_k >= 1 ){                                     // [071]
            for( i_r = i_0 ; i_r <= i_1 ; i_r ++ ){             // [071]
                                                                // [---]
                //: SEE[ #_OPENGL_VS_WEBGL_# ] ://              // [072]
                                                                // [072]
                typ = ASS( a_g.wgl.FRAGMENT_SHADER   );         // [072]
                ssf = ASS( a_g.arr_ssf[ i_r ]        );         // [072]
                fid = ASS( wgl.createShader( typ )   );         // [072]
                                                                // [072]
                wgl.shaderSource(    fid , ssf  );              // [072]
                wgl.compileShader(   fid        );              // [072]
                                                                // [072]
                msg = wgl.getShaderInfoLog(   fid   );          // [072]
                o_k = ( ( msg.length <= 0 ) ? 1 : 0 );          // [072]
                                                                // [072]
                if( 1 == o_k ){                                 // [072]
                                                                // [072]
                    a_g.arr_fid[ i_r ]=ASS( fid );              // [072]
                }else                                           // [072]
                if( 0 == o_k ){                                 // [072]
                                                                // [---]
                    MSG( "[*****************************]\n" ); // [086]
                    MSG("[BEG:ssf]\n\n");                       //      [072]
                                                                //      [072]
                    MSG( ssf );                                 //      [072]
                                                                //      [072]
                    MSG( "[END:ssf]\n\n"                );      //      [072]
                    console.log( "[fragerr:msg]:" , msg );      // [086]
                    LOG( "[C_S:INFOLOG:F_S]"      , msg );      //      [072]
                    MSG( "[*****************************]\n" ); // [086]
                    ERR( "[C_S:FRAG_SHADER]"       );           //      [072]
                }else{                                          //      [072]
                    ERR("[WTFMAN:FRAG]");                       //      [072]
                };;                                             //      [072]
                                                                // [---]
            };;};;                                              // [071]
        //:-----------:compile_all_fragment_shaders:[071]://    // [071]
        //:create_all_shader_programs:[071]:-------------://    // [071]
                                                                // [071]
            if( o_k >= 1 ){                                     // [071]
            for( i_r = i_0 ; i_r <= i_1 ; i_r ++ ){             // [071]
                                                                // [---]
                pid = ASS( wgl.createProgram( ) );              // [072]
                a_g.arr_pid[ i_r ]=( pid );                     // [072]
                if( pid <= 0 ){ ERR("[BAD_PID]"); };            // [072]
                                                                // [072]
                                                                // [072]
                pid = ASS( a_g.arr_pid[ i_r ] );                // [072]
                vid = ASS( a_g.arr_vid[ i_r ] );                // [072]
                fid = ASS( a_g.arr_fid[ i_r ] );                // [072]
                                                                // [072]
                let ERR_CHK = F_ARTGIRL_ERR_CHK ;               // [072]
                                                                // [072]
                wgl.attachShader( pid ,             vid  );     // [072]
                wgl.attachShader( pid ,             fid  );     // [072]
                wgl.linkProgram(  pid );  ERR_CHK("[L_P]");     // [072]
                wgl.useProgram(   pid );  ERR_CHK("[U_P]");     // [072]
                                                                // [---]
                //:error_check:[078]:------------------------://// [078]
                                                                // [078]
                    let loc_pos =( c_artgirl_loc_pos );         // [078]
                    let loc_tex =( c_artgirl_loc_tex );         // [078]
                                                                // [078]
                    let GAL = wgl.getAttribLocation.bind(wgl);  // [078]
                    let chk_pos =( GAL( pid ,"inn_pos"));       // [078]
                    let chk_tex =( GAL( pid ,"inn_tex"));       // [078]
                                                                // [078]
                    if( chk_pos != loc_pos ){ERR("[c78:pos]");};// [078]
                    if( chk_tex != loc_tex ){ERR("[c78:tex]");};// [078]
                                                                // [078]
                //:------------------------:error_check:[078]://// [078]
                                                                // [---]
            };;};;                                              // [071]
        //:-------------:create_all_shader_programs:[071]://    // [071]
        //:misc_pipeline_setup_code:[071]:---------------://    // [071]
                                                                // [071]
            //:                 _R_ , _G_ , _B_ , _A_  ; ://    // [071][063] 
            a_g.wgl.clearColor( 0.0 , 1.0 , 0.0 , 1.0 );        // [071][063] 
            a_g.wgl.clear( a_g.wgl.COLOR_BUFFER_BIT );          // [071][063] 
                                                                // [071]
        //:---------------:misc_pipeline_setup_code:[071]://    // [071]

    };; //:ENDFUNC_ARTGIRL_INI:::::::::::::::::::::::::::::::://// [078][063] 
  
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
    //: @_G_@ : Generally                                    ://// [068] 
    //: @_S_@ : Specifically                                 ://// [068] 
    //: @a_k@ : @asc_key@ : Ascii(_G_) Key(_S_)              ://// [068] 
    //: @e_k@ : @evt_key@ : Event(_G_) Key(_S_)              ://// [068] 
    //:------------------------------------------------------://

    const   F_KEYMAST_EVT_ASC = function                        // [068] 
    PRIVATE_F_KEYMAST_EVT_ASC(                                  // [068] 
                                                                // [068] 
        i_evt_key //:( i_evt_key )=>( o_asc_key )://            // [068] 
    ){                                                          // [068] 
        var o_asc_key =(                                        // [068] 
            String.prototype.toUpperCase.call(                  // [068] 
            String.fromCharCode(                                // [068] 
                                                                // [068] 
                i_evt_key.keyCode                               // [068] 
                                                                // [068] 
            )||"[nil][o_asc_key]" ));;                          // [068] 
        return( o_asc_key );                                    // [068] 
    };;                                                         // [068] 

    const   F_KEYMAST_DOW = function                            // [057] 
    PRIVATE_F_KEYMAST_DOW(                                      // [057] 
        i_evt_key                                               // [068] 
    ){                                                          // [057] 
                                                                // [057] 
                                                                         
        var asc_key = F_KEYMAST_EVT_ASC( i_evt_key );           // [068] 
        let a_k     =( asc_key /** Key Down **/ );              // [068] 

        if(  0          //:----------------------------------://// [068]
        ||  "0" == a_k  //:                             [068]://// [068]
        ||  "1" == a_k  //:  Select the shader pipeline to   ://// [068]
        ||  "2" == a_k  //:  use via the number keys.        ://// [068]
        ||  "3" == a_k  //:                             [068]://// [068]
        ||  "4" == a_k  //:  0 == default pipeline.     [068]://// [068]
        ||  "5" == a_k  //:                             [068]://// [068]
        ||  "6" == a_k  //:  More than 9 pipelines ?    [068]://// [068]
        ||  "7" == a_k  //:  Future me problem.         [068]://// [068]
        ||  "8" == a_k  //:                             [068]://// [068]
        ||  "9" == a_k  //:----------------------------------://// [068]
        ){                                                      // [068]
            //:RPL__RenderPipelineLoad:[068]:----------------://// [068]
            //:                                              ://// [068]
            //: #NOKISS#[ F_ARTGIRL_RPL( parseInt( a_k ) ] ) ://// [068]
            //:                                              ://// [068]
            let RPL = F_ARTGIRL_RPL ;                     //:://// [068]
            if( "0" == a_k ){ RPL( c_artgirl_ren_def ); };//:://// [068]
            if( "1" == a_k ){ RPL( 1 );};//:c_artgirl_ren_001://// [068]
            if( "2" == a_k ){ RPL( 2 );};//:c_artgirl_ren_002://// [068]
            if( "3" == a_k ){ RPL( 3 );};//:c_artgirl_ren_003://// [068]
            if( "4" == a_k ){ RPL( 4 );};//:c_artgirl_ren_004://// [068]
            if( "5" == a_k ){ RPL( 5 );};//:c_artgirl_ren_005://// [068]
            if( "6" == a_k ){ RPL( 6 );};//:c_artgirl_ren_006://// [068]
            if( "7" == a_k ){ RPL( 7 );};//:c_artgirl_ren_007://// [068]
            if( "8" == a_k ){ RPL( 8 );};//:c_artgirl_ren_008://// [068]
            if( "9" == a_k ){ RPL( 9 );};//:c_artgirl_ren_009://// [068]
            //:                                              ://// [068]
            //:----------------:RPL__RenderPipelineLoad:[068]://// [068]

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
           
    const   F_CLIGAME_TIK = function                            //      [063] 
    PRIVATE_F_CLIGAME_TIK(                                      //      [063] 
                                                                //      [063] 
        /** VOID **/                                            // [085][063]
    ){                                                          //      [063]
        //:[ATF]:------------------------------------://        // [085][063]
        //: Games "Main" loop that updates both      ://        // [085][063]
        //: rendering and game logic.                ://        // [085][063]
        //:------------------------------------:[ATF]://        // [085][063]
        //:Incriment_Simulation_Ticker:--------------://        // [085]

        d_tik ++ ; //:[ GlobalSimulationTicker      ]://        //      [085]
                   //:[ d_tik is the rule of law    ]://        //      [085]
                   //:[ No more[ i_tim ]            ]://        // [086][085]
                   //:TAG[ d_tik++|d_tik ++|tik++   ]://        // [086][085]

        //:--------------:Incriment_Simulation_Ticker://        // [085]
        //:Do_Work_And_Adjust_Frame_Delay:-----------://        // [085]
                                                                // [085]
            d_cligame_t_0 = performance.now();                  // [085]
                                                                // [---]
                F_ARTGIRL_TIK( /**VOID**/ );                    // [085][063]
                                                                // [---]
            d_cligame_t_1 = performance.now();                  // [085]
                                                                // [085]
            d_cligame_mil =(  d_cligame_t_1                     // [085]
                             -d_cligame_t_0 );;                 // [085]
                                                                // [085]
            d_cligame_ams =(  c_cligame_tms                     // [085]
                            - d_cligame_mil );;                 // [085]
                                                                // [085]
        //:-----------:Do_Work_And_Adjust_Frame_Delay://        // [085]
                                                                // [---]
    };;                                                         //      [063] 
                                                                //      [063] 
    const   F_CLIGAME_GUL = function                            //      [063] 
    PRIVATE_F_CLIGAME_GUL(                                      //      [063] 
                                                                //      [063] 
        /** VOID **/                                            // [085][063] 
    ){                                                          //      [063] 
        F_CLIGAME_TIK( /** VOID **/ );                          // [085][063] 
                                                                //      [063] 
        //:#_SCRAPPED_REQUEST_ANIMATION_FRAME_#://              // [085]
                                                                // [085]
        //:----------------------------------------------://    // [085]
        //: To achieve the desired frame rate, we need   ://    // [085]
        //: to call our loop function AFTER ALLOTED TIME ://    // [085]
        //: SLOT RUNS OUT! "ams" is the milliseconds     ://    // [085]
        //: that are left-over in our frame after        ://    // [085]
        //: we run all the code that needs to run        ://    // [085]
        //: via[ F_CLIGAME_TIK ].                        ://    // [085]
        //:                                              ://    // [085]
        //: ams == adjusted milli-seconds                ://    // [085]
        //:----------------------------------------------://    // [085]
        window.setTimeout(                                      // [085]
            ( F_CLIGAME_GUL )   //:@RECURSIVE@ ://              // [085]
        ,   ( d_cligame_ams )   //:LeftoverTime://              // [085]
        );;                                                     // [085]
    };;                                                         //      [063] 

//|--|--|--|--|--|--|--|--|--|0064|--|--|--|--|--|--|--|--|--|//
//|                                               [ @$$$$$@ ]|//
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __CLIGAME__|//
//|                                               [ @$$$$$@ ]|//
//|07|07|07|07|07|07|07|07|07|SUBS|07|07|07|07|07|07|07|07|07|//
//:INIT_CLIENT_FRONTEND:[035]:===============================://
if( notnode ){  window.onload = function( /** [030] **/ ){

    if( "[NOT_O_K]" === d_urlsite_o_k ){                        // [059] 
        ERR( d_msgkill_001 );                                   // [059] 
    };;                                                         // [059] 
                                                                // [059]
    F_INI_CLI();    //:INIt: CLIent :------------------://      // [???] 
                                                                // [063]
    F_ARTGIRL_INI();//:Init Webgl And Frag Shader :----://      // [063] 
    F_KEYMAST_INI();//:INIt: Client Keyboard Handler   ://      // [???] 
                                                                // [071]
    F_ARTGIRL_RPL( c_artgirl_ren_def );                         // [071]
                                                                // [071]
    F_CLIGAME_GUL( 0.0 );   //:Enter_Game_Loop ://              // [063] 

};; };;
//:===============================:INIT_CLIENT_FRONTEND:[035]://

//:INIT_SERVER_BACKEND:[035]:================================://
if( yesnode ){

    if( NIL( d_dbu ) ){                        //: [040] ://      
        F_MSG_NIL_DBU();                       //: [040] ://      
    }else{                                     //: [040] ://      
        F_ISD();     //:Initialize_Server_Data   : [040] ://          
        F_TDC();     //:Test_Database_Connection : [040] ://   

        //:< < < < < < < < < < < < < < < < < < < < < < < < < < < < < < : NOTICE_ME_SENPAI : These operations should be using promises. Dangerous race condition stuff is happening here.
        
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
/** TAG_SECTION ******************************************** *** // [088]
*** CTRL_F_HELP ******************************************** *** // [088]
TAG[ tag_section | tag-section | tag_section ]BEG -------------- // [088]
                                                                 // [088]
    TAG[ d_cam | d-cam | camera variable | camera var ]          // [088]
    FIX[ d_vp0 | d_vp1 | d_vpc | c_dum | d_dut ]                 // [088]
                                                                 // [088]
    TAG[ plank_units | plankunit | plank-units | plank units ]   // [088]
    FIX[ c_dum | c_dut ]                                         // [088]
                                                                 // [088]
                                                                 // [088]
TAG[ tag_section | tag-section | tag_section ]END -------------- // [088]
*** ******************************************** CTRL_F_HELP *** // [088]
*** ******************************************** TAG_SECTION **/ // [088]
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

    @MACRO@   : "let" keyword is to be used like a              // [082]
              : temporary macro to shorten the length           // [082]
              : of variables. __NOT__ used for                  // [082]
              : block scope vs function scope unless            // [082]
              : absolutely necessary.                           // [082]

    @inn_pos@ : INNPUT:VertexPosition                           // [074]
    @inn_tex@ : INNPUT:TextureCoord                             // [074]
    @out_tex@ : OUTPUT:TextureCoord                             // [074]
    @out_f_c@ : OUTput_FragColor                                // [074]
    @i_o_tex@ : [ inn/out ] TextureCoord                        // [074]

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
    //: TAG[ hashnotes | hash-notes | hash notes       ] ://    // [074]
    //: TAG[ hashsect | hash-section | hashnotes       ] ://    // [075]
    //: TAG[ has-section | has-sect | hassect          ] ://    // [077]
    //:--------------------------------------------------://    // [069]

    #TLO# : Top Left Origin Hack. The mapping of Y-axis         // [083]
          : from vertex position to texture coord value         // [083]
          : is intentionally inverted so that we can            // [083]
          : write our shader logic with a __SANE__              // [083]
          : top-left graphical origin.                          // [083]
          :                                                     // [083]
          : Specifically the mapping from VERTEX-Y to           // [083]
          : TEXTURE-COORD-Y has been [flipped/inverted]         // [083]

    #VBO_IS_AI0# : I am full of shit see[ GLSNAPSHOT ]          // [078]
    #VAO_IS_AI1# : I am full of shit see[ GLSNAPSHOT ]          // [078]
                                                                // [078]
    #GFD_001# : GOD_FUCKING_DAMINT ( number 1 of #TBD# )        // [078]
    #TBD#     : To Be Determined                                // [078]
                                                                // [078]
    #GLSNAPSHOT# : A VAO is basically a "snapshot" of           // [078]
                 : configured VBO state. My idea of             // [078]
                 : analogy of VI0 & VI1 is totally              // [078]
                 : wrong. I am full of shit. Go                 // [078]
                 : watch this guy if you want to be             // [078]
                 : taught WebGL2 by someone who knows           // [078]
                 : what they are doing. I am....                // [078]
                                                                // [078]
                 : a jack of all trades is a master of none,    // [078]
                 : but oftentimes better than a master of one   // [078]
                 :                                              // [078]
                 : www.youtube.com/watch?v=0nZn5YPNf5k          // [078]
                 : ( Good WebGL2 Tutorial )                     // [078]
    #SS_BEG# : SnapShotBegin                                    // [078]
    #SS_END# : SnapShotEnd                                      // [078]
                                                                // [078]
    #S_POS# : Slot Index Of POSITION Attribute data.            // [078]
    #S_TEX# : Slot Index Of TEXTURE  Attribute data.            // [078]

    #KFNFR# : Keep Function Name For Readability                // [075]
                                                                // [075]
    #_DRY_INSTEAD_OF_KISS_WARNING_BECAUSE_LAZY_# :              // [075]
                                                                // [075]
        I decided on D_R_Y instead of K_I_S_S because           // [075]
        I am lazy and don't want to type more. Also             // [075]
        wanted to have fun and mess around with some            // [075]
        javascript. Let's see if it bytes me later.             // [075]
        -KanjiCoder                                             // [075]
                                                                // [075]
    #YSMITF# : You Shot Marvin In The Face                      // [075]
                                                                // [075]
    #FAS# : Fixed_Array_Size ( Object.seal( myArray ) );        // [075]

    #TESTYLE# : Tesselation Style , how to  +--------------+    // [074]
              : connect verts  to create polygons.         |    // [074]
              |                                            |    // [074]
              |     TRIANGLE_STRIP :     TRIANGLE_FAN :    |    // [074]
              |                                            |    // [074]
              |     [0]-------[1]        [1]-------[2]     |    // [074]
              |      |        /|          | \     / |      |    // [074]
              |      |       / |          |  \   /  |      |    // [074]
              |      |      /  |          |   [0]   |      |    // [074]
              |      |     /   |          |  /   \  |      |    // [074]
              |      |    /    |          | /     \ |      |    // [074]
              |      |   /     |         [4]-------[3]     |    // [074]
              |      |  /      |                           |    // [074]
              |      | /       |                           |    // [074]
              |      |/        |                           |    // [074]
              |     [2]-------[3]                          |    // [074]
              |     #ITS_A_ZEE#                            |    // [074]
              +--------------------------------------------+    // [074]

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


    #_OPENGL_VS_WEBGL_#                                         // [071]
        ----------------------------------------------------    // [071]
                                                                // [071]
        OGL : Open GL                                           // [071]
        WGL : Web  GL                                           // [071]
                                                                // [071]
        0x8B81 : GL_COMPILE_STATUS                              // [071]
        0x8B30 : GL_FRAGMENT_SHADER                             // [071]
        0x8B84 : GL_INFO_LOG_LENGTH                             // [071]
                                                                // [071]
        OGL : glGetShaderiv( vid , 0x8B84 , &( res ));          // [071]
        WGL : NO SUCH EQUIVALENT IN WEBGL                       // [071]
                                                                // [071]
        OGL : glGetShaderiv(    vid , 0x8B81)                   // [071]
        WGL : getShaderInfoLog( vid         )                   // [071]
                                                                // [071]
        OGL : glCreateShader( 0x8B30 )                          // [071]
        WGL : wgl.createShader( wgl.FRAGMENT_SHADER )           // [071]
                                                                // [071]
        OGL : glShaderSource(   vid , 1 , &(ssv) , 0 )          // [071]
        WGL : wgl.shaderSource( vid     ,   ssv      )          // [071]
                                                                // [071]
        OGL : glCompileShader(    vid );                        // [071]
        WGL : wgl.compileShader(  vid );                        // [071]
                                                                // [071]
        ----------------------------------------------------    // [071]

    #_OPENGL_VS_WEBGL_PART_002_#                                // [077]
                                                                // [077]
        0x8892 : GL_ARRAY_BUFFER                                // [077]
        0x88E4 : GL_STATIC_DRAW                                 // [077]
                                                                // [077]
        OGL : glGenBuffers( 1      , &( a3d_ledit64_vbo )  );   // [077]
        WGL : a_g.vbo = createBuffer( );                        // [077]
                                                                // [077]
        OGL : glBindBuffer( 0x8892 ,  a3d_ledit64_vbo    );     // [077]
        WGL : wgl.bindBuffer( wgl.ARRAY_BUFFER , a_g.vbo );     // [077]
                                                                // [077]
        OGL : siz = VBL * sizeof( VBD[ 0 ] );                   // [077]
            : glBufferData( 0x8892 , siz , VBD ,0x88E4 );       // [077]
        WGL : wgl.bufferData(                                   // [077]
                wgl.ARRAY_BUFFER                                // [077]
              , a_g.vbd                                         // [077]
              , wgl.STATIC_DRAW                                 // [077]
              , 20                                              // [077]
              );;                                               // [077]

    #_OPENGL_VS_WEBGL_PART_003_#

        OGL : glGenVertexArrays( 1 , &( a3d_ledit64_vao )  );
        WGL : vao = wgl.createVertexArray( );

        OGL : OGL.glBindVertexArray(        a3d_ledit64_vao    );
        WGL : wgl.bindVertexArray( vao )

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

    
    TAGS[ CTRL_F | CTRL_F_SECTION | ctrl-f-section        ]     // [081]
    TAGS[ ctrl f section | ctrl f help | ctrl eff  ctrl f ]     // [081]
    TAGS[ CTRLF_HELP | ctrl-f-help | ctrl f help          ]     // [081]
    TAGS[ control f help | hackish google search          ]     // [081]

    shader numbers | shadernumbers | shader_numbers             // [084]
    shader number | shadernumber | shader_number                // [084]
    shader index | shaderindex | shader_index                   // [084]
    SEE[ c_artgirl_ren_001 ]TO[ c_artgirl_ren_009 ]             // [084]
    PASTE_LINE
     
    load program | use program | load-program | use-program     // [082]
    load_program | use_program | use that one gl program        // [082]
    USE[ wgl.useProgram ]                                       // [082]
    PASTE_LINE                                                  // [082]

    slated render pipelines | slated renderers | slated-render  // [081]
    renderes-slated | rendereres slated | renderer enums        // [081]
    renderers-slated | renderers slated | render eneums         // [081]
    render enums | renderer eneums                              // [081]
    SEE[ c_artgirl_ren_001 -to- c_artgirl_ren_007 ]             // [081]

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

    DEATHMATCH_CREW / DEATHMATCH_OVERLOAD :                     // [074]
                                                                // [074]
        When too many people are in the server, everyone is     // [074]
        teleported to the DEATHMATCH room. The deathmatch does  // [074]
        __NOT__ end until __HALF__ of the people in the server  // [074]
        are __KILLED__ by other people in the deathmatch room.  // [074]
                                                                // [074]
        Deatmatch room will be in the very center of the        // [074]
        worldmap.                                               // [074]
                                                                // [074]
        The level will be designed as a funnel, forcing         // [074]
        people to have multiple 1:1 battles with each other.    // [074]
                                                                // [074]
        There is an event-box over the mini rooms. A gate in    // [074]
        the floor will __OPEN__ when event-area detects         // [074]
        only one player.                                        // [074]
                                                                // [074]
        There are explosive timer_boxes (TIMER) above           // [074]
        each room. When they explode, the ceiling caves         // [074]
        in and kills BOTH PLAYERS within the room.              // [074]
                                                                // [074]
            [ --------- LONGEST_TIMER ---------- ]              // [074]
            [ LONGER_TIMER  ]   [ LONGER_TIMER   ]              // [074]
            [TIMER]   [TIMER]   [TIMER]    [TIMER]              // [074]
            [ A B ]   [ C D ]   [ E F ]    [ G H ]              // [074]
            |               |   |                |              // [074]
            |               |   |                |              // [074]
            +---------------+   +----------------+              // [074]
            |                                    |              // [074]
            |                                    |              // [074]
            +------------------------------------+              // [074]
                                                                // [074]
        If you are killed, you are booted from the              // [074]
        server and lose items or something. Not sure            // [074]
        if you end up teleported back to same room              // [074]
        you were in or if you are forced to start               // [074]
        at beginning.                                           // [074]
                                                                // [074]
        People will be added to deathmatch CELLS in the         // [074]
        deathmatch LEVEL in a round-robin style.                // [074]
        SO hypothetically, if you build a crew of HALF          // [074]
        the MAXIMUM server capacity, you could all join         // [074]
        a server, and kill everyone in that server like         // [074]
        vikings, because you will __NOT__ be pitted against     // [074]
        another member of YOUR CREW because of the              // [074]
        round-robin assignment of deathmatch cells.             // [074]
                                                                // [074]
        Possibly there should be a warning message when         // [074]
        the server is getting too full. Anyone can switch       // [074]
        servers at ANY TIME. ( encouraged to manage             // [074]
        server load on their own ). But once deathmatch         // [074]
        from server overload starts, you are not allowed        // [074]
        to leave the server. If you leave the server            // [074]
        during deathmatch via "disconnect" or "rage quit"       // [074]
        it is as if you __LOST__. Sorry if you have             // [074]
        bad internet, you are fucked.                           // [074]
                                                                // [074]
        Timer boxes can be sprites generated by using           // [074]
        special region rectangle tiles. We will need            // [074]
        to reserve 2 tile types to create these region          // [074]
        rects that spawn sprites.                               // [074]
                                                                // [074]
        Timer box can be a binary pattern inside the            // [074]
        region rect that tells us how long to set               // [074]
        timer for. Thus larger timerboxes can have              // [074]
        larger time durations because they literally            // [074]
        can encode larger binary bit patterns.                  // [074]
                                                                // [074]
        Normal gameplay does not allow you to set bombs.        // [074]
        But in deathmatch, you can.                             // [074]
                                                                // [074]
        Offical server needs to encode a list of other          // [074]
        servers in it's source code to help distribute load.    // [074]
                                                                // [074]
        If GOD is editing a level, warning needs to be made     // [074]
        that "blocks" may appear or dissapear out of nowhere.   // [074]
        If a block appears where you exist, you die.            // [074]
                                                                // [074]
        GOD is whoever has level editing priviledges.           // [074]

    Let people extend my code : ( 2022_06_24 ) :                // [???]
                                                                // [???]
        We should make it so that people can extend the game    // [???]
        simply by loading JSONP ( application/javascript )      // [???]
        into the game.                                          // [???]
                                                                // [???]
        Or maybe allow people to... extend the code base by     // [???]
        including "ATOMIC_IVY_MMO" javasscript and then         // [???]
        using it as a library ?                                 // [???]
                                                                // [???]
        application/javascript <<< Runnable JavaScript Response // [???]
                                                                // [???]
        Inspired by:                                            // [???]
        https://stackoverflow.com/questions/477816              // [???]

*** ****************************************** FEATURE_CREEP **/
/** MISC_DELTA_NOTES *************************************** ***
*** CHANGE_HISTORY _ *************************************** ***   [088]
*** CHANGE_LOG _____ *************************************** ***   [088]

    TAG[ CHANGE_HISTORY | MISC_DELTA_NOTES ]                    // [088]

    [018] : TUTORIAL PART 018                                   // [088]
          : https://pastebin.com/ZCFNxebJ                       // [088]
          : tinyurl.com/SERVER-JS-PART-18                       // [088]
          : git@github.com:KanjiCoder/AIM_018.git               // [088]
          : https://github.com/KanjiCoder/AIM_018               // [088]

    [044] : Will crash randomly if you supply correct           // [044]
          : password. This is by design. We will fix it         // [044]
          : in future deltas.                                   // [044]
                                                                // [---]
    [048] : This snapshot can be difficult to get started       // [048]
          : without crashing server because it requires us      // [048]
          : to re-build the schema/table for[ tab_hex ]         // [048]
          : before the api call[ DABITCH/C/TAB_HEX/red/40 ]     // [048]
          :                    [ DABITCH/C/TAB_HEX/blue/69 ]    // [048]
          : will work. We will make it easier by adding         // [048]
          : helper api to re-create table in [049]              // [048]
                                                                // [---]
    [049] : Added helper : <yourappurl>/DABITCH/MAKTAB/TAB_HEX  // [049]
                                                                // [---]
    [052] : Noticed that: <app>/DABITCH/C/TAB_HEX/blue          // [052]
          : will crash the sever with a "missing column"        // [052]
          : error.                                              // [052]
          :                                                     // [052]
          : If argument is undefined, we should use an          // [052]
          : "empty" name.                                       // [052]
          :                                                     // [052]
          : null string ==> "[NIL][SQL_NIL]"                    // [052]
          : null number ==> 0                                   // [052]
          :                                                     // [052]
                                                                // [---]
    [056] : Return[ err_msg ]object from JSON response always.  // [056]
          : If error in SQL , rather than crash server,         // [056]
          : we pack meaningful error message into[ err_msg ].   // [056]
          : If no error , [ err_msg == "" ].                    // [056]
          : ADDED_DATE[ 2022_06_25 ]                            // [056]
                                                                // [---]
    [057] : KEYMAIN - Politically Correct Version Of            // [057]
          : KEYMAST ( Key Master )                              // [057]
                                                                // [---]
    [059] : Added helpful message to help you configure         // [059]
          : your heroku installation properly if you            // [059]
          : cannot get access to your application name.         // [059]
          : RUN:                                                // [059]
                                                                // [059]
        heroku labs:enable runtime-dyno-metadata --app APPNAME  // [059]
                                                                // [---]
    [060] : We didn't change any source code here.              // [060]
          : (except this comment message)                       // [060]
          : I Ran :                                             // [060]
                                                                // [---]
    heroku labs:enable runtime-dyno-metadata --app "aim-kanji"  // [063]
          :                                                     // [063]
          : You might need to use :                             // [063]
          :                                                     // [063]
          git commit --allow-empty -m "[EMPTY_COMMIT]"          // [063]
          :                                                     // [063]
          : To force server to restart after adding             // [063]
          : "runtime-dyno-metadata"                             // [063]
                                                                // [063]
    [063] : Refactored project a bit to give ARTGIRL the        // [063]
          : things she rightfully owns and has                  // [063]
          : jurisdiction over.                                  // [063]
                                                                // [---]
    [064] : Waterfalled some design by adding render            // [064]
          : pipeline constants. This is literally our           // [064]
          : ______ nth draft.                                   // [064]
          :                                                     // [064]
          : 1st draft : Atomic Alice (newgrounds)               // [064]
          : 2nd draft : M128.JS  (still japanese)               // [064]
          : 3rd draft : A2_JC (for josh project   2020)         // [064]
          : 4rd draft : A2_JS (repo. Tile editor? 2021)         // [064]
          :           : Tilde("~") + 2 to get to                // [064]
          :           : interesting stuff.                      // [064]
          : 5rd draft : AAC2020                                 // [064]
          : 6th draft : A3 's CPU world map render.             // [064]
          : 7th draft : A3 's LEDIT64 system.                   // [064]
          : 8th draft : This source code. Atomic Ivy MMO        // [064]
          :                                                     // [077]
          : #_LIST_OF_TRIES_2022_07_02_#                        // [077]
                                                                // [---] 
    [065] : J++ , Previously known as                           // [065]
          : "JavaScript With Structs".                          // [065]
          :                                                     // [065]
          : NinjaCoder Title: "JavaScript With Structs"         // [065]
          : KanjiCoder Title: "JavaScript Struct Keyword"       // [065]
                                                                // [---] 
    [066] : Added hardcoded vertex buffer data for              // [066]
          : the shader quad needed for creating                 // [066]
          : 2D graphics pipeline in WebGL.                      // [066]
          :                                                     // [066]
          : Also created nifty const-array                      // [066]
          : constructor function for immutable                  // [066]
          : arrays of a fixed size to mimmick                   // [066]
          : C99 behavior.                                       // [066]
                                                                // [---] 
    [067] : Added all ( I think ) member variables              // [067]
          : needed by[ ARTGIRL ]to setup our OpenGL             // [067]
          : rendering quad and display it on screen.            // [067]
          :                                                     // [067]
          : Created an[ ARR ]function so that we dont           // [067]
          : have to type[ new Array( len ) ]and can             // [067]
          : instead type[     F_ARR( len ) ].                   // [069][067]
                                                                // [---]
    [073] : 1 : More robust error checking.                     // [073]
          : 2 : Updated deployment documentation.               // [073]
                                                                // [---]
    [076] : Created Uint8 Array Constructor Functions.          // [076]
          : F_ARR_U08 & F_CAR_U08                               // [076]

    [077] : Created "Vertex Buffer Object" ( VBO )         :    // [077]
          : VBO is just a GPU copy of a raw array          :    // [077]
          : that we give to WebGL. The name makes          :    // [077]
          : no fucking sense.                              :    // [077]
          :                                                :    // [077]
          : I am going to think of VBO == AI0              :    // [077]
          : AI0 == Array Indirect 0                        :    // [077]
          : ( zero indirection because raw array without ) :    // [077]
          : ( any interpretation yet )                     :    // [077]
          :                                                :    // [077]
          : ---------------------------------------------- :    // [077]
          : ALSO... created constants for the array        :    // [077]
          :         attribute slots.                       :    // [077]
          : c_artgirl_loc_pos <-- slot location : pos      :    // [077]
          : c_artgirl_loc_tex <-- slot location : tex      :    // [077]
          :                                                :    // [077]
          : ---------------------------------------------- :    // [077]
                                                                // [---]
    [078] : Vertex fetch requires 4, but attribs only supply 0  // [078]
          : ------------------------------------------------    // [078]
          : Fuckyou WebGl. How many times have I fucking        // [078]
          : done this in my life? And I still can't get         // [078]
          : it right the first time? This part is               // [078]
          : easier in C99 because in WEBGL there are            // [078]
          : multiple overrides for functions.                   // [078]
          :                                                     // [078]
          : I say this because I don't get stuck like           // [078]
          : this when I am doing this in C99.                   // [078]
          :                                                     // [078]
          : SILENTFAIL : wgl.bufferData( a1,a2,a3,a4    );      // [078]
          : THE____FIX : wgl.bufferData( a1,a2,a3,a4,a5 );      // [078]
                                                                // [---]
    [079] : No code changes. Just demonstrated the end          // [079]
          : result of tutorial [078] . We didn't have           // [079]
          : enough time to go over the end-result               // [079]
          : in the previous video.                              // [079]

    [080] : 1: gl.viewport changes when canvas size changed now.// [080]
          : 2: Retroactively added some video number tags       // [080]

    [081] : Getting Ready For Pipeline Swapping. Added          // [081]
          : A "Flat Lime" color shader.                         // [081]
          :                                                     // [081]
          : Made "Flat Cyan" color shader an official           // [081]
          : shader in our shader enums.                         // [081]

    [082] : Gradient Quad With TOP-LEFT origin. This is __NOT__ // [082]
          : the origin standard to [ OPENGL || WEBGL ] ,        // [082]
          : we were "clever" with our texture coord values      // [082]
          : so that we could get [hack] a __SANE__ top-left     // [082]
          : graphical origin.                                   // [082]

    [084] : We are delirious right now. I wrote this off        // [084]
          : camera. We are too tired to do more tutorial.       // [084]
          : You only have so much mental strength.              // [084]
          : SEARCH_FOR[ FLASH_GRAD ]And pick this back          // [084]
          : up on camera later.                                 // [084]

    [085] : Setting up the simulation ticker before we can      // [085]
          : setup the flashing shader code.                     // [085]

    [086] : Now uploading[ d_tik ]value to shader uniform       // [087][086]
          : variable of same name every frame.                  // [087][086]
          :                                                     // [087][086]
          : Numkey 4 ==> Gradient Shader. Got a bit fancy       // [087][086]
          : with making tiles with modulus so it is             // [087][086]
          : visually distinct enough from Numkey 3.             // [087][086]


    [087] : 1 : Calculated the "shape" of nothingness.         :   [088][087]
          : 2 : Figured out addressing space for rendering.    :   [088][087]
          :::::                                                :   [088][087]
              : c_dum ( 0x7F_FFFF ) : DiscreteUnits - THE_DUM  :   [088][087]
              : c_dut ( 0x2222    ) : DiscreteUnits -  G_TILE  :   [088][087]


*** *************************************** CHANGE_LOG _____ ***   [088]
*** *************************************** CHANGE_HISTORY _ ***   [088]
*** *************************************** MISC_DELTA_NOTES **/
//:HASHTAG_OR_ATTED_COMMENTS:[085]:==========================://
/** ******************************************************** ***

    [ABOUT_THIS_SECTION] :                                      // [085]
                                                                // [085]
        Decided it is better for workflow to have @atted@       // [085]
        and #hashed# comments in same section.                  // [085]
                                                                // [085]
    @ABOUT_THIS_SECTION@ : Marks Section Explanation.           // [085]
    @ATS@ : [ATS]:[ about this struct ]or[ about this section ] // [085]
                                                                // [085]
    #_HOTEL13_COMMENT_WORKFLOW_# :                              // [085]
                                                                // [085]
        Think about locality. The thing I go to the             // [085]
        most when coding is the hashtagged and atted            // [085]
        comments. So make a section for EITHER here             // [085]
        and put at bottom of file. The next most                // [085]
        common thing for me to touch is "MISC_DELTA_NOTES"      // [085]
        so make a [THIS_COMMITS_DELTA_NOTE] that only           // [085]
        has one delta note in it BELOW this section,            // [085]
        and move it to the maian[ MISC_DELTA_NOTES ]            // [085]
        when it is ready.                                       // [085]
                                                                // [085]
    #_TIK_TIMETRAVEL_# :                                        // [085]
                                                                // [085]
        We might want to "backdate" a timestamp. So             // [085]
        this gaurantees us 1 hour's worth of backdating         // [085]
        when the game starts.                                   // [085]
                                                                // [085]
            30FPS == 2 hours backdating.                        // [085]
                                                                // [085]
            60FPS == 1 hour  backdating.                        // [085]
                                                                // [085]
            I don't want to modify code based on framerate.     // [085]
            So... Just assume we have 1 hours worth of          // [085]
            back dating no matter what the framerate.           // [085]
                                                                // [085]
    #_1_HOUR_BACKDATE_# :                                       // [085]
                                                                // [085]
        Lets wait till , [_TIK_TIMETRAVEL_] to backdate.        // [085]
                                                                // [085]
    #_SCRAPPED_REQUEST_ANIMATION_FRAME_#                        // [085]
                                                                // [085]
        Scrapping this because it is more important             // [085]
        to me that [simulation/logic] code is                   // [085]
        called when it needs to be called. We can               // [085]
        worry about things like proper "v-sync"                 // [085]
        later when we have a fucking game.                      // [085]
                                                                // [085]
        window.requestAnimationFrame(                           // [085]
                                                                // [085]
            F_CLIGAME_GUL                                       // [085]
        );;                                                     // [085]
                                                                // [085]
    F_CLIGAME_TIKLOOP : SEE[ F_CLIGAME_GUL | F_CLIGAME_TIK ]    // [085]
    F_CLIGAME_LOOP    : SEE[ F_CLIGAME_GUL | F_CLIGAME_TIK ]    // [085]
                                                                // [085]
    @RECURSIVE@ : Making note of recursion in general or        // [085]
                : the site of a recursive function call.        // [085]
                                                                // [085]
    #I32_MOD# : integer modulus.                                // [085]
    #FP_NORM# : Floating Point Normalization.                   // [085]

    #D_TIK# : Slot value for "d_tik" uniform when uploading     // [086]
            : from cpu to gpu.                                  // [086]
                                                                // [086]
    #NO_LOC_TIK# : uniforms don't get layouts. Weird because    // [086]
                 : is see it in documentation here.             // [086]
                 :                                              // [086]
                 : https://www.khronos.org/opengl/wiki/         // [086]
                 :         Layout_Qualifier_(GLSL)              // [086]
                 :          #Explicit_uniform_location          // [086]
                                                                // [086]
    @ren_pin@ : RENder PIPeline index (of active pipeline)      // [086]
    @act_pid@ : Active Pipeline Id _DO_NOT_CACHE_IN_ARTGIRL_    // [086]
                                                                // [086]
    #POITROAE# : Mis Spelling Of[ PMOITROAE ]                   // [086]
    #PMOITROAE#: Pre-Mature Optimization Is The Root Of         // [086]
               : All Evil.                                      // [086]
               :  (Tagging possible optimization sites )        // [086]


    #_THE_TWO_MOST_IMPORTANT_DISCRETE_VALUES_# :---------------:   [087]
                                                               :   [087]
        const c_dum = 0x7FFFFF ;//: DiscreteUnits -THEDUM://   :   [087]
        const c_dut = 0x2222   ;//: DiscreteUnits - TILE ://   :   [087]
                                                               :   [087]
    :--------------: #_THE_TWO_MOST_IMPORTANT_DISCRETE_VALUES_#:   [087]
    #_EMPTY_SPACE_HAS_DIMENSIONS_# ----------------------------:   [087]
                                                               :   [087]
        +---------------------+  There are 13 levels in a      :   [087]
        |        +---+        |  "levelpack". Also known as    :   [087]
        |        | 0 |        |  a "hotel" hence system name   :   [087]
        |    +---+---+---+    |  "hotel13".                    :   [087]
        |    | 1 | 2 | 3 |    |                                :   [087]
        |+---+---+---+---+---+|  Each[ level / room ]is        :   [087]
        || 4 | 5 | 6 | 7 | 8 ||  64x64 game tiles.             :   [087]
        |+---+---+---+---+---+|                                :   [087]
        |    | 9 |10 |11 |    |                                :   [087]
        |    +---+---+---+    |                                :   [087]
        |        |12 |        |                                :   [087]
        |        +---+        |                                :   [087]
        +---------------------+                                :   [087]
                                                               :   [087]
        +---------------------+  The 13 room hotel exists      :   [087]
        |+---+---+---+---+---+|  in a 5x5 grid of              :   [087]
        || 0 | 1 | 2 | 3 | 4 ||  level-sized cells.            :   [087]
        |+---+---+---+---+---+|                                :   [087]
        || 5 | 6 | 7 | 8 | 9 ||  We need to use a lookup       :   [087]
        |+---+---+---+---+---+|  table that can map between    :   [087]
        ||10 |11 |12 |13 |14 ||  "grid cell indexes" and       :   [087]
        |+---+---+---+---+---+|  "room cell indexes".          :   [087]
        ||15 |16 |17 |18 |19 ||                                :   [087]
        |+---+---+---+---+---+|  ( r16 & g25 )                 :   [087]
        ||20 |21 |22 |23 |24 ||                                :   [087]
        |+---+---+---+---+---+|  r16 : Roomindexes : 0-to-15   :   [087]
        +---------------------+  g25 : GridIndexes : 0-to-24   :   [087]
                                                               :   [087]
                                                               :   [087]
        BEFORE we worry about what data maps to where,         :   [087]
        we need to take a step back and partition the          :   [087]
        space of our world. We need to know how many           :   [087]
        discrete units we have at our disposal to render       :   [087]
        what needs rendering.                                  :   [087]
                                                               :   [087]
        The is the __MOST__ a player can see of the            :   [087]
        worlmap at any given time. How many tiles is it?       :   [087]
                                                               :   [087]
                                                               :   [087]
        |<------------------@THE_DUM@------------------>|      :   [088][087]
        |<------------------@THEDUM@------------------->|      :   [088]
        |                                               |      :   [087]
        |<--- HOTEL --->|                               |      :   [087]
        | AKA:LEVELPACK |                               |      :   [087]
        |               |                               |      :   [087]
        |  [ROOM/LEVEL] |                               |      :   [087]
        |       |       |                               |      :   [087]
        +-------V-------+---------------+---------------+      :   [087]
        |      [R]      |      [ ]      |      [ ]      |      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |      [ ]      |      [ ]      |      [ ]      |      :   [087]
        +---------------+---------------+---------------+      :   [087]
        |      [ ]      |      [ ]      |      [ ]      |      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |      [ ]      |      [ ]      |      [ ]      |      :   [087]
        +---------------+---------------+---------------+      :   [087]
        |      [ ]      |      [ ]      |      [ ]      |      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|[ ][ ][ ][ ][ ]|      :   [087]
        |   [ ][ ][ ]   |   [ ][ ][ ]   |   [ ][ ][ ]   |      :   [087]
        |      [ ]      |      [ ]      |      [ ]      |      :   [087]
        +---------------+---------------+---------------+      :   [087]
        |<-- 64 *  5 -->|                               |      :   [087]
        |<---- 320 ---->|                               |      :   [087]
        |<---- 320 * 3 -------------------------------->|      :   [087]
        |<---- 960 ------------------------------------>|      :   [087]
                                                               :   [087]
        We have 960 of the smallest game tiles across.         :   [087]
                                                               :   [087]
        They all need unique addresses, so if we were          :   [087]
        to render each tile as a single pixel, we would        :   [087]
        need AT LEAST a 10-bit number to be able to            :   [087]
        express all of the possible tile addresses.            :   [087]
                                                               :   [087]
        BIN[ 11 1111 1111 ]==DEC[ 1023 ]                       :   [087]
                                                               :   [087]
        The least amount of bits that can hold ( 960 - 1 ).    :   [087]
        ( 960-1 ) because address is [ 0 to 959 ].             :   [087]
                                                               :   [087]
        +--------------------------------------------------+   :   [087]
        | We might want to render the INTERNALS of a tile. |   :   [087]
        | This will require MORE THAN 10-bits of           |   :   [087]
        | addressing space.                                |   :   [087]
        +--------------------------------------------------+   :   [087]
                                                               :   [087]
        We want to do all calculataions with 32 bit numbers.   :   [087]
                                                               :   [087]
        BUT... Webgl uses float32 for a lot of things.         :   [087]
                                                               :   [087]
        How many "INTEGER" bits are in a float 32?             :   [087]
                                                               :   [087]
         |<- EXPONENT -->||<--------- 23 Bit Mantissa -------->|   [087]
         |               ||                                    |   [087]
    [ 1 ][ 111 1111 ][ 1 ][ 111 1111 ][ 1111 1111 ][ 1111 1111 ]   [087]
    [ 1    111 1111 ][ 1    111 1111 ][ 1111 1111 ][ 1111 1111 ]   [087]
      |                                                        :   [087]
    SignBit                                                    :   [087]
                                                               :   [087]
        +--------------------------------------------------+   :   [087]
        |                                                  |   :   [087]
        |  23 usable bits of a float32 in our webgl code.  |   :   [087]
        |                                                  |   :   [087]
        +--------------------------------------------------+   :   [087]
                                                               :   [087]
        23 bit unsigned range : DEC[ 0 - to 8,388,607 ]        :   [087]
                                HEX[ 0 - to 0x7F FFFF ]        :   [087]
                                                               :   [087]
                                                               :   [087]
        +--------------------------------------------------+   :   [087]
        |                                                  |   :   [087]
        |  0x7F_FFFF / 960u == 0x2222                      |   :   [087]
        |  0x7F_FFFF / 960u ==  8,738                      |   :   [087]
        |                                                  |   :   [087]
        +--------------------------------------------------+   :   [087]
                                                               :   [087]
        We have 0x2222 discrete units per game tile            :   [087]
        that is rendered in our camera.                        :   [087]
                                                               :   [087]
        |<-------------------- 0x2222 --------------------->|  :   [087]
        |                                                   |  :   [087]
        [0x0000][0x0001][0x0002][...][0x221F][0x2220][0x2221]  :   [087]
        [0x0001][      ][      ][...][      ][      ][      ]  :   [087]
        [0x0002][      ][      ][...][      ][      ][      ]  :   [087]
        [......][......][......][...][......][......][......]  :   [087]
        [0x221F][      ][      ][...][      ][      ][      ]  :   [087]
        [0x2220][      ][      ][...][      ][      ][      ]  :   [087]
        [0x2221][      ][      ][...][      ][      ][      ]  :   [087]
        |                                                   |  :   [087]
        |<------------- One Player Sized Tile ------------->|  :   [087]
        |<-------- AKA: One ALICE  Sized Tile ------------->|  :   [087]
        |<-------- AKA: One IVY    Sized Tile ------------->|  :   [087]
                                                               :   [087]
        const c_dum = 0x7FFFFF ;//: DiscreteUnits -THEDUM://   :   [087]
        const c_dut = 0x2222   ;//: DiscreteUnits - TILE ://   :   [087]
                                                               :   [087]
        var     duh =( c_dum /  3 );                           :   [087]
        var     dur =(   duh /  5 );                           :   [087]
        var     dut =(   dur / 64 );                           :   [087]
                                                               :   [087]
        ASS( c_dut == dut );                                   :   [087]
                                                               :   [087]
        //:#_AVOID_COGNITIVE_OVERLOAD_#:-------------------:   :   [087]
                                                           :   :   [087]
            DO_NOT_DECLARE_GLOBALLY[ c_duh ]( use : duh )  :   :   [087]
            DO_NOT_DECLARE_GLOBALLY[ c_dur ]( use : dur )  :   :   [087]
                                                           :   :   [087]
            Just compute them on the fly because I don't   :   :   [087]
            want to have to pick from a handful of globals :   :   [087]
            and have to remember which one I was supposed  :   :   [087]
            to use. We can change our mind later if we     :   :   [087]
            require optimizations.                         :   :   [087]
                                                           :   :   [087]
        //:-------------------:#_AVOID_COGNITIVE_OVERLOAD_#:   :   [087]
                                                               :   [087]
        WRONG[ dul ]FIX[ duh ]( H for Hotel, NOT L:LevelPack ) :   [087]
        WRONG[ dul ]FIX[ dur ]( R for Room , NOT L:Level     ) :   [087]
                                                               :   [087]
    :-------------------------: #_EMPTY_SPACE_HAS_DIMENSIONS_# :   [087]
    :#_THE_DUM_# / #THE_DUM# / @THE_DUM@ :---------------------:   [087]
                                                               :   [087]
        TAG[ THEDUM | thedum | the-dum | the dum | the_dum ]   :   [087]
                                                               :   [087]
        @THE_DUM@ : The currently loaded                       :   [087]
                  : [ hotels / levelpacks / sectors ]          :   [087]
                  : of the worldmap.                           :   [087]
                  :                                            :   [087]
                  : We can't keep the entire MMO in ram ,      :   [087]
                  : so this is the slice of the MMO worldmap   :   [087]
                  : that can be seen by                        :   [087]
                  : [ user / client / player ].                :   [087]
                                                               :   [087]
        THE_DUM != WORLDMAP         ( But closely related )    :   [087]
        THE_DUM != CAMERA RECTANGLE ( But closely related )    :   [087]
                                                               :   [087]
    :----------------------------------------------------------:   [087]
                                                                   [087]
    @G_TILE@: Game Sized Tile                                      [087]

                                                                    
    @d_vpc@ : Viewport VPC: (Canvas/GL-Viewport)                   [088]
    @d_vp0@ : Viewport VP0: (Destination/Screen        )           [088]
    @d_vp1@ : Viewport VP1: (Offscreen/Source/TileData )           [088]
                                                                   [088]
    #_VPC_VS_VP0_# / #_VP0_VS_VPC_# :                              [088]
                                                                   [088]
        d_vpc && d_vp0 are in the same coordinate space,           [088]
        d_vp0 is always WITHIN d_vpc.                              [088]
        d_vpc should always be size of canvas.                     [088]
                                                                   [088]
    @X_0@ : You mean lowercase[ x_0 ]. Data is always lowercase.   [088]
    @X_1@ : You mean lowercase[ x_1 ]. Data is always lowercase.   [088]
    @Y_0@ : You mean lowercase[ y_0 ]. Data is always lowercase.   [088]
    @Y_1@ : You mean lowercase[ y_1 ]. Data is always lowercase.   [088]


*** ******************************************************** **/
//:==========================:HASHTAG_OR_ATTED_COMMENTS:[085]://
//:THIS_COMMITS_DELTA_NOTE:[085]:============================://
/** ******************************************************** ***



    [088] : Added Variables For Camera & Plank Units
          : ( Plank Units == Discrete Units )



*** ******************************************************** **/
//:============================:THIS_COMMITS_DELTA_NOTE:[085]://


