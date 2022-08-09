//:ATOMIC_IVY_MMO_SOURCE_CODE:[034]:=========================://
//: I filmed this tutorial series 3 times. Pick one!         :// // [102]
//:                                                          :// // [102]
//: 1__MIN : www.tinyurl.com/BOMB-PLAYLIST-002   (KANJICODER):// // [102]
//: 10_MIN : www.tinyurl.com/BOOM-PLAYLIST-002   (NINJACODER):// // [102]
//: 1_HOUR : www.tinyurl.com/WEEB-PLAYLIST-002   ( WEEBCODER):// // [102]
//:                                                          :// // [102]
//: SOURCE__CODE : github.com/KanjiCoder/AIM_130             :// // [130][129][128][127][126][125][124][122][121][120][119][117][116][115][113][112][111][110][109][108][107][106][105][104][103][102][100][099][098][097][096][095][094][093][092][091][090][089][088][087][086][085][084][083][082][081][080][079]                               
//: CONTACT_INFO : KanjiCoder@gmail.com                      :// // [102]
//:=========================:ATOMIC_IVY_MMO_SOURCE_CODE:[034]://
//:CONFIGURATION:[109]:======================================://

    const c_crash_on_vital_todo =( 1 ); //:#Necessary#   ://     // [109]
    const c_crash_on_maybe_todo =( 0 ); //:#FeatureCreep#://     // [109]
                                                                 // [109]
    var   d_bug =( 1 );                                          // [109]
    var   d_eci =( 1 );                                          // [109]
    var   d_eco =( 1 );                                          // [109]

    const d_keymast_log_upp =( 0 ); /** Log The Up Key? **/      // [118]

//:======================================:CONFIGURATION:[109]://
//:SYSTEM_INDEX:[102]:=======================================://
/** ******************************************************** *** // [102]
                                                                 // [102]
    C : Chronological Order (by creation order)                  // [102]
    D : Dependency    Order (LOW === LESS DEPS)                  // [102]
                                                                 // [102]
    ARTDUDE [C:04] [D:01] : Art Assets Used By Renderer          // [102]
    ARTGIRL [C:05] [D:02] : Render Pipeline Management           // [102]
    CAMERAH [C:09] [D:03] : Manipulates vp0 & vp1                // [109]
    SEXYCAM [C:10] [D:04] : SexyCam === Hot Key Snapping Camera  // [125]
    ASERVER [C:01] [D:05] : Server Side Functions Only           // [102]
    DABITCH [C:02] [D:06] : Database Access Functions Only       // [102]
    EDIGAME [C:08] [D:07] : Editor State + Game State            // [102]
    KEYMAST [C:03] [D:08] : Keyboard Listeners                   // [102]
    SERGAME [C:06] [D:09] : HIGH_LEVEL_GAME_CODE - Server Side   // [102]
    CLIGAME [C:07] [D:10] : HIGH_LEVEL_GAME_CODE - Client Side   // [102]
                                                                 // [102]
*** ******************************************************** **/ // [102]
//:=======================================:SYSTEM_INDEX:[102]://
//:DEPLOY_THIS_SERVER_YOURSELF:[034]:========================://
/**----------------------------------------------------------:::

    Atomic_Ivy_MMO (AIM) client _AND_ server.

    If you are looking at this code in a debugger, 
    you could copy+paste it and deploy it RIGHT NOW!

    Deployment Steps :
    
    1. Copy Everything You See And Save As "server.js"
    
    2. create package.json that looks like this:

        STEP 2 FOR PROGRAMMERS :

        touch package.json                                       // [073]
        echo '{ "dependencies":{"pg":"8.7.3"}}' > package.json   // [073]
                                                                 
        STEP 2 FOR ARTISTS :                                     
                                                                 
            +-------------------------------------------------+  // [073]
            | Notepad ++ : server.js                  |[-]|[X]|  // [073]
            +-------------------------------------------------+  // [073]
            |    |                                            |  // [073]
            | 01 |  {                                         |  // [073]
            | 02 |      "//" : "[ pg added in video [039] ]"  |  // [073]
            | 03 |  ,   "dependencies": { "pg" : "8.7.3" }    |  // [073]
            | 04 |  }                                         |  // [073]
            |    |                                            |  // [073]
            +----+--------------------------------------------+  // [073]
    
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

    //:#_DEFINE_ALL_DISCRETE_PLANK_CONSTANTS_#                  // [098]
                                                                // [098]
    const c_dum = 0x7FFF80   ; //:DiscreteUnits : THE_DUM       // [098][088]
    const c_duh = 0x2AAA80   ; //:DiscreteUnits : HOTEL         // [098]
    const c_dur = 0x088880   ; //:DiscreteUnits : ROOM          // [098]
    const c_dut = 0x002222   ; //:DiscreteUnits : TILE          // [088]
                                                                // [098]
    const c_du0 = 0x002222   ; //:DiscreteUnits : te7==0        // [098]
    const c_du1 = 0x004444   ; //:DiscreteUnits : te7==1        // [098]
    const c_du2 = 0x008888   ; //:DiscreteUnits : te7==2        // [098]
    const c_du3 = 0x011110   ; //:DiscreteUnits : te7==3        // [098]
    const c_du4 = 0x022220   ; //:DiscreteUnits : te7==4        // [098]
    const c_du5 = 0x044440   ; //:DiscreteUnits : te7==5        // [098]
    const c_du6 = 0x088880   ; //:DiscreteUnits : te7==6        // [098]
                                                                // [098]
    ASS( Math.floor( c_dum / 3 ) === c_duh , "[@DUA@001]" );    // [098]
    ASS( Math.floor( c_duh / 5 ) === c_dur , "[@DUA@002]" );    // [098]
    ASS( Math.floor( c_dur /64 ) === c_dut , "[@DUA@003]" );    // [098]
    ASS( c_dur/2/2/2/2/2/2       === c_dut , "[@DUA@004]" );    // [098]
    ASS(             c_du0       === c_dut , "[@DUA@005]" );    // [098]
    ASS(             c_du6       === c_dur , "[@DUA@006]" );    // [098]
    ASS(             c_du1 /   2 === c_du0 , "[@DUA@007]" );    // [098]
    ASS(             c_du2 /   2 === c_du1 , "[@DUA@008]" );    // [098]
    ASS(             c_du3 /   2 === c_du2 , "[@DUA@009]" );    // [098]
    ASS(             c_du4 /   2 === c_du3 , "[@DUA@010]" );    // [098]
    ASS(             c_du5 /   2 === c_du4 , "[@DUA@011]" );    // [098]
    ASS(             c_du6 /   2 === c_du5 , "[@DUA@012]" );    // [098]
    ASS(             c_duh /   5 === c_du6 , "[@DUA@013]" );    // [098]
    ASS(             c_dum / 960 === c_dut , "[@DUA@014]" );    // [098]
    ASS(             c_duh / 320 === c_dut , "[@DUA@015]" );    // [098]
                                                                // [---]
    const   x_0 =( 0 ); //:VIEWPORT:LEF://                      // [088]
    const   x_1 =( 1 ); //:VIEWPORT:RIG://                      // [088]
    const   y_0 =( 2 ); //:VIEWPORT:TOP://                      // [088]
    const   y_1 =( 3 ); //:VIEWPORT:BOT://                      // [088]
                                                                // [---]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [128]
    //: @dch@ : Discrete_Centerpoint_Hotel (DCH)         ://    // [128]
    //: @c_dch_xy0@ : [ DCH ] Where Cell[ x || y ] === 0 ://    // [128]
    //: @c_dch_xy1@ : [ DCH ] Where Cell[ x || y ] === 1 ://    // [128]
    //: @c_dch_xy2@ : [ DCH ] Where Cell[ x || y ] === 2 ://    // [128]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [128]
                                                                // [128]
    const laxcoma_2022_08_09 = "[HACK]"                         // [128]
    ,   c_dch_xy0 = ( 0 * c_duh )+Math.floor( c_duh / 2 )-1     // [128]
    ,   c_dch_xy1 = ( 1 * c_duh )+Math.floor( c_duh / 2 )-1     // [128]
    ,   c_dch_xy2 = ( 2 * c_duh )+Math.floor( c_duh / 2 )-1     // [128]
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;    // [128]
                                                                // [---]
//:==========================:TOP_LEVEL_CONSTANT_MACROS:[085]://// [085]
//:TOP_LEVEL_VARIABLES:[088]:================================://   [---]
                                                                //      [088]
    //:TAG[ viewport_rectangles | viewport-rectangles   ]://    //      [088]
    //:TAG[ viewport rectangles | vprec|vp-rec|vp_rec   ]://    //      [088]
                                                                //      [088]
    var d_tik     =( 0 /** SEE[ DTICK_INITED ] **/ );           // [121][090]
    var d_vpc     = new Uint32Array( 4 );  //: @d_vpc@   ://    // [121][088]
    var d_vp0     = new Uint32Array( 4 );  //: @d_vp0@   ://    // [121][088]
    var d_vp1     = new Uint32Array( 4 );  //: @d_vp1@   ://    // [121][088]
    var d_camwall = new Uint32Array( 4 );  //: @camwall@ ://    // [121]
                                                                // [---]
    var d_tik_loc     =( 0-1 );  //:LOC[ d_tik ]In_Shader://    // [121][090]
    var d_vpc_loc     =( 0-2 );  //:LOC[ d_vpc ]In_Shader://    // [121][090]
    var d_vp0_loc     =( 0-3 );  //:LOC[ d_vp0 ]In_Shader://    // [121][090]
    var d_vp1_loc     =( 0-4 );  //:LOC[ d_vp1 ]In_Shader://    // [121][090]
    var d_camwall_loc =( 0-5 );  //:LOC[ d_camwall ].....://    // [121]
                                                                // [---]
    const d_loc_tik = ()=>{ ERR("[FIX:d_vpc_tik]"); };          // [090]
    const d_loc_vpc = ()=>{ ERR("[FIX:d_vpc_vpc]"); };          // [090]
    const d_loc_vp0 = ()=>{ ERR("[FIX:d_vpc_vp0]"); };          // [090]
    const d_loc_vp1 = ()=>{ ERR("[FIX:d_vpc_vp1]"); };          // [090]
                                                                // [---]
        //:::::::::::::::::::::::::::::::::::::::::::::::://    // [088]
        //:Initially, Camera Is Zoomed All The Way Out   ://    // [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://    // [088]
        d_vp1[ x_0 ]=(       0  );                              // [088]
        d_vp1[ y_0 ]=(       0  );                              // [088]
        d_vp1[ x_1 ]=( c_dum - 1);                              // [088]
        d_vp1[ y_1 ]=( c_dum - 1);                              // [088]
                                                                // [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://    // [088]
        //: We don't know what[ vp1 ]or[ vpc ]should be  ://    // [088]
        //: yet, but let's set them to something that    ://    // [088]
        //: will clue us in on how they got to that      ://    // [088]
        //: size.                                        ://    // [088]
        //:::::::::::::::::::::::::::::::::::::::::::::::://    // [088]
        d_vp0[ x_0 ]=(   0  ); d_vpc[ x_0 ]=(   0  );           // [088]
        d_vp0[ y_0 ]=(   0  ); d_vpc[ y_0 ]=(   0  );           // [088]
        d_vp0[ x_1 ]=( 420  ); d_vpc[ x_1 ]=(  69  );           // [088]
        d_vp0[ y_1 ]=( 420  ); d_vpc[ y_1 ]=(  69  );           // [088]
                                                                // [088]
//:================================:TOP_LEVEL_VARIABLES:[088]://   [---]
//:TOP_LEVEL_LOOKUP_TABLES:[128]:============================://
    //:------------------------------------------------------:// // [128]
    //: TAG[ lookup tables | lookup_tables | lookuptables ]  :// // [128]
    //: TAG[ lookup table  | lookup_table  | lookuptable  ]  :// // [128]
    //: TAG[ lookup-table  | lookup-tables | global-table ]  :// // [128]
    //: TAG[ global-tables | global_tables | global_table ]  :// // [128]
    //: TAG[ globaltable | globaltables | global-lut      ]  :// // [128]
    //: TAG[ global_lut | globallut | lut | look_up | luts]  :// // [128]
    //:------------------------------------------------------:// // [128]
                                                                 // [128]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [128]
    //: @dch@ : Discrete Center - [ Hotel / Levelpack ]  ://     // [128]
    //:       : ( as located on [THE_DUM] )              ://     // [128]
    //: @d_hi9_dcx@ : HotelIndex ==> DiscreteCenter - X  ://     // [128]
    //: @d_hi9_dcy@ : HotelIndex ==> DiscreteCenter - Y  ://     // [128]
    //: ( Center of the hotel cell on [THE_DUM] )        ://     // [128]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [128]
                                                                 // [128]
    var d_hi9_dcx = new Uint32Array([                            // [128]
                                                                 // [128]
        c_dch_xy0   //: ( hi9:0 )===>( dch:c_dch_xy0 )   ://     // [128]
    ,   c_dch_xy1   //: ( hi9:1 )===>( dch:c_dch_xy1 )   ://     // [128]
    ,   c_dch_xy2   //: ( hi9:2 )===>( dch:c_dch_xy2 )   ://     // [128]
                                                                 // [128]
    ,   c_dch_xy0   //: ( hi9:3 )===>( dch:c_dch_xy0 )   ://     // [128]
    ,   c_dch_xy1   //: ( hi9:4 )===>( dch:c_dch_xy1 )   ://     // [128]
    ,   c_dch_xy2   //: ( hi9:5 )===>( dch:c_dch_xy2 )   ://     // [128]
                                                                 // [128]
    ,   c_dch_xy0   //: ( hi9:6 )===>( dch:c_dch_xy0 )   ://     // [128]
    ,   c_dch_xy1   //: ( hi9:7 )===>( dch:c_dch_xy1 )   ://     // [128]
    ,   c_dch_xy2   //: ( hi9:8 )===>( dch:c_dch_xy2 )   ://     // [128]
                                                                 // [128]
    ]);;                                                         // [128]
    var d_hi9_dcy = new Uint32Array([                            // [128]
                                                                 // [128]
        c_dch_xy0   //: ( hi9:0 )===>( dch:c_dch_xy0 )   ://     // [128]
    ,   c_dch_xy0   //: ( hi9:1 )===>( dch:c_dch_xy0 )   ://     // [128]
    ,   c_dch_xy0   //: ( hi9:2 )===>( dch:c_dch_xy0 )   ://     // [128]
                                                                 // [128]
    ,   c_dch_xy1   //: ( hi9:3 )===>( dch:c_dch_xy1 )   ://     // [128]
    ,   c_dch_xy1   //: ( hi9:4 )===>( dch:c_dch_xy1 )   ://     // [128]
    ,   c_dch_xy1   //: ( hi9:5 )===>( dch:c_dch_xy1 )   ://     // [128]
                                                                 // [128]
    ,   c_dch_xy2   //: ( hi9:6 )===>( dch:c_dch_xy2 )   ://     // [128]
    ,   c_dch_xy2   //: ( hi9:7 )===>( dch:c_dch_xy2 )   ://     // [128]
    ,   c_dch_xy2   //: ( hi9:8 )===>( dch:c_dch_xy2 )   ://     // [128]
                                                                 // [128]
    ]);;                                                         // [128]
    ASS( 9 === d_hi9_dcx.length );                               // [128]
    ASS( 9 === d_hi9_dcy.length );                               // [128]
                                                                 // [---]
//:============================:TOP_LEVEL_LOOKUP_TABLES:[128]://
//:RENDER_OPTION_VARIABLES:[094]:============================://   



    var d_rendopt_boxview_onn =( 1 ); //:LetterBoxxingOn?://    // [094]
    var d_rendopt_boxview_rat =( 3 ); //:LetterBoxRatio  ://    // [094]



//:============================:RENDER_OPTION_VARIABLES:[094]://  
//:TOP_LEVEL_HELPER_FUNCTIONS:[096]:=========================://

    const F_TOG = function PRIVATE_F_TOG(                       // [096]
                                                                // [096]
        i_obj //:object_containing_var ://                      // [096]
    ,   i_nam //:varible_name_to_toggle://                      // [096]
    ){                                                          // [096]
        var val =( i_obj[ i_nam ] );                            // [096]
                                                                // [096]
        if( 0 === val ){ i_obj[ i_nam ]=( 1 ); }else            // [096]
        if( 1 === val ){ i_obj[ i_nam ]=( 0 ); }else            // [096]
        {                                                       // [096]
            ERR("[NON_TOGGLE_VAR]");                            // [096]
        };;                                                     // [096]
        return;/**VOID**/                                       // [096]
    };;                                                         // [096]

    const F_NEX = "[USE:F_CYC:(For Cycling)]" ;                 // [103]
    const F_BAK = "[USE:F_CYC:(For Cycling)]" ;                 // [103]
                                                                // [103]
    const F_CYC = function PRIVATE_F_CYC(                       // [103]
                                                                // [103]
        //:#_WHY_NOT_CALL_IT_NEXT_#://                          // [103]
                                                                // [103]
        i_obj   //:object_containing_var  ...............://    // [103]
    ,   i_nam   //:varible_name_to_toggle ...............://    // [103]
    ,   i_arr   //:Array_Of_Valid_Values_To_Cycle_Through://    // [103]
    ){                                                          // [103]
        //:[ATF]:----------------------------------------://    // [103]
        //:                                              ://    // [103]
        //: Like[ F_TOG ]but cycles forward through      ://    // [103]
        //: an array of valid [options/values].          ://    // [103]
        //:                                              ://    // [103]
        //:----------------------------------------:[ATF]://    // [103]
                                                                // [103]
        var val =( i_obj[ i_nam ]       );                      // [103]
        var dex =( i_arr.indexOf( val ) ); ASS( dex >= 0 );     // [103]
        var nex =( dex + 1              );                      // [103]
        var m_i =( i_arr.length - 1     );                      // [103]
        if( nex > m_i ){   nex = 0 ;    };                      // [103]
                                                                // [103]
        i_obj[ i_nam ]=(  i_arr[ nex ]  );                      // [103]
    };;                                                         // [103]


//:=========================:TOP_LEVEL_HELPER_FUNCTIONS:[096]://
//:SHUTARR:[077]:============================================://

    const F_SHUTARR = function PRIVATE_F_SHUTARR(               //      [077]
                                                                //      [077]
        i_arr                                                   //      [077]
    ){                                                          //      [077]
        if( firefox ){                                          //      [077]
                                                                //      [077]
            /** Do nothing because idiots at firefox **/        //      [077]
            /** don't know how to correctly implement**/        //      [077]
            /** the god damned spec. ............... **/        //      [077]
        }else{                                                  //      [077]
                                                                //      [077]
            Object.seal( i_arr );                               //      [077]
        };;                                                     //      [077]
        return( i_arr ); //:AddedForChaining://                 // [109]
    };;                                                         //      [077]

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

//:I32_ARRAY:[114]:==========================================:// // [114]
                                                                 // [114]
    //:LOCAL_INDEX:==========================================:// // [114]
    //:                                                      :// // [114]
    //:     1 : F_ARR_I32 : NonConst Array Of Int32          :// // [114]
    //:     2 : F_CAR_I32 : Constant Array Of Int32          :// // [114]
    //:                                                      :// // [114]
    //:==========================================:LOCAL_INDEX:// // [114]
                                                                 // [114]
                                                                 // [114]
    //:TAG[ new int32 array | NEW_I32 | NEW_ARR_I32 ]            // [114]
                                                                 // [114]
    const F_I32_ARR ="[FIX:F_ARR_I32]";                          // [114]
                                                                 // [114]
    const F_ARR_I32 = function PRIVATE_F_ARR_I32(                // [114]
                                                                 // [114]
        i_len /** Length Of Array **/                            // [114]
    ){                                                           // [114]
        //:::::::::::::::::::::::::::::::::::::://               // [114]
        //: @ARR_I32@ : ARRay of Int32 Values  ://               // [114]
        //:::::::::::::::::::::::::::::::::::::://               // [114]
                                                                 // [114]
        var o_arr = "[nil][f_arr_i32:o_arr]" ;                   // [114]
        var   len = arguments.length ;                           // [114]
        var   dex = 0 ;                                          // [114]
        var   arg = 0 ;                                          // [114]
                                                                 // [114]
        if( len !=( i_len + 1 ) ){                               // [114]
            ERR( "[F_ARR_I32:#IAI#]" );                          // [114]
        }else{                                                   // [114]
            o_arr = new Int32Array(i_len );                      // [114]
            for( dex = 0 ; dex <=( i_len-1 ) ; dex ++ ){         // [114]
                                                                 // [114]
                arg = arguments[ dex + 1 ];                      // [114]
                                                                 // [114]
                //:I32_SPECIFIC_ERROR_CHECKING:----------://     // [114]
                                                                 // [114]
                    if(!((arg <= 0)||(arg >= 0))){               // [114]
                        ERR("[NAN_I32]" );                       // [114]
                    };;                                          // [114]
                    if( Math.floor( arg ) != arg ){              // [114]
                        ERR("[I32_ARR:FLOAT_INPUT]");            // [114]
                    };;                                          // [114]
                //:----------:I32_SPECIFIC_ERROR_CHECKING://     // [114]
                                                                 // [114]
                o_arr[ dex ] = ( arg );                          // [114]
            };;                                                  // [114]
        };;                                                      // [114]
        F_SHUTARR( o_arr /** #FAS# **/ );                        // [114]
        return( o_arr );                                         // [114]
    };;                                                          // [114]
                                                                 // [114]
    const F_I32_CAR ="[FIX:F_CAR_I32]";                          // [114]
                                                                 // [114]
    const F_CAR_I32 = function PRIVATE_F_CAR_I32(                // [114]
                                                                 // [114]
        i_len                                                    // [114]
    ){                                                           // [114]
        //: @CAR_I32@ : ConstARray - Int32 ::::::::::::::://     // [114]
        //: #_DRY_INSTEAD_OF_KISS_WARNING_BECAUSE_LAZY_# ://     // [114]
                                                                 // [114]
        if( i_len <= 0 ){ ERR("[#YSMITF#:I32]" ); };             // [114]
                                                                 // [114]
        var                o_arr = "[nil][f_car_i32]" ;          // [114]
                           o_arr =(                              // [114]
                                                                 // [114]
            F_ARR_I32.apply( null , arguments )                  // [114]
        );;                                                      // [114]
        //- Object.freeze( o_arr ); #KFNFR# -//                  // [114]
        return(            o_arr );                              // [114]
    };;                                                          // [114]
                                                                 // [114]
//:==========================================:I32_ARRAY:[114]:// // [114]

//:U32_ARRAY:[109]:==========================================://

    //:TAG[ new uint32 array | NEW_U32 | NEW_ARR_U32 ]          // [109]
                                                                // [---]
    const F_U32_ARR ="[FIX:F_ARR_U32]";                         // [111]
                                                                // [---]
    const F_ARR_U32 = function PRIVATE_F_ARR_U32(               // [109]
                                                                // [109]
        i_len /** Length Of Array **/                           // [109]
    ){                                                          // [109]
        //:::::::::::::::::::::::::::::::::::::://              // [109]
        //: @ARR_U32@ : ARRay of Uint32 Values ://              // [109]
        //:::::::::::::::::::::::::::::::::::::://              // [109]
                                                                // [109]
        var o_arr = "[nil][f_arr_u32:o_arr]" ;                  // [109]
        var   len = arguments.length ;                          // [109]
        var   dex = 0 ;                                         // [109]
        var   arg = 0 ;                                         // [109]
                                                                // [109]
        if( len !=( i_len + 1 ) ){                              // [109]
            ERR( "[F_ARR_U32:#IAI#]" );                         // [109]
        }else{                                                  // [109]
            o_arr = new Uint32Array( i_len );                   // [109]
            for( dex = 0 ; dex <=( i_len-1 ) ; dex ++ ){        // [109]
                                                                // [109]
                arg = arguments[ dex + 1 ];                     // [109]
                if(  arg < 0   ){ ERR("[NEG_U32]"); };          // [109]
                if(!( arg>=0 ) ){ ERR("[WTF_U32]"); };          // [109]
                o_arr[ dex ] = ( arg );                         // [109]
            };;                                                 // [109]
        };;                                                     // [109]
        F_SHUTARR( o_arr /** #FAS# **/ );                       // [109]
        return( o_arr );                                        // [109]
    };;                                                         // [109]
                                                                // [---]
    const F_U32_CAR ="[FIX:F_CAR_U32]";                         // [111]
                                                                // [---]
    const F_CAR_U32 = function PRIVATE_F_CAR_U32(               // [109]
                                                                // [109]
        i_len                                                   // [109]
    ){                                                          // [109]
        //: @CAR_U32@ : ConstARray - Uint32 :::::::::::::://    // [109]
        //: #_DRY_INSTEAD_OF_KISS_WARNING_BECAUSE_LAZY_# ://    // [109]
                                                                // [109]
        if( i_len <= 0 ){ ERR("[#YSMITF#:U32]" ); };            // [109]
                                                                // [109]
        var                o_arr = "[nil][f_car_u32]" ;         // [109]
                           o_arr =(                             // [109]
                                                                // [109]
            F_ARR_U32.apply( null , arguments )                 // [109]
        );;                                                     // [109]
        //- Object.freeze( o_arr ); #KFNFR# -//                 // [109]
        return(            o_arr );                             // [109]
    };;                                                         // [109]

//:==========================================:U32_ARRAY:[109]://
//:U08_ARRAY:[075]:==========================================://

    //:TAG[ new uint8 array | NEW_U08 | NEW_ARR_U08 ]           // [109]
                                                                // [---]
    const F_U08_ARR ="[FIX:F_ARR_U08]";                         // [111]
                                                                // [---]
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
    const F_U08_CAR ="[FIX:F_CAR_U08]";                         // [111]
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
//:MONKEY_WRENCH_MACROS:[108]:===============================://

    //:CTRL_F_TAGS[ #illegal# ]                          ://     // [063] 
    //:TAG[ disallowed | its wrong carl | monkey wrench ]://     // [085]
    //:TAG[ its-wrong-carl | itswrongcarl | wrong_carl  ]://     // [086]
    //:TAG[ its_wrong_carl .............................]://     // [086]
    //:TAG[ illegal-section | illegal-section | illegals]://     // [109]
    //:TAG[ illegal section | illegalsection | illsec   ]://     // [109]
                                                                 // [---]
    const d_hi9_duc = "[FIX:d_hi9_dcx && d_hi9_dcy]" ;           // [128]
                                                                 // [128]
    const c_hxy_dc0 = "[FIX:c_dch_xy0]" ;                        // [128]
    const c_hxy_dc1 = "[FIX:c_dch_xy1]" ;                        // [128]
    const c_hxy_dc2 = "[FIX:c_dch_xy2]" ;                        // [128]
                                                                 // [128]
    const c_xy0_dch = "[FIX:c_dch_xy0]" ;                        // [128]
    const c_xy1_dch = "[FIX:c_dch_xy1]" ;                        // [128]
    const c_xy2_dch = "[FIX:c_dch_xy2]" ;                        // [128]
                                                                 // [128]
    const c_duc_c_x_hi0 = "[FIX:d_hi9_dcx]" ;                    // [128]
    const c_duc_c_y_hi0 = "[FIX:d_hi9_dcy]" ;                    // [128]
                                                                 // [128]
    const c_duc_c_x_hi1 = "[FIX:d_hi9_dcx]" ;                    // [128]
    const c_duc_c_y_hi1 = "[FIX:d_hi9_dcy]" ;                    // [128]
                                                                 // [---]
    const d_camerah_maxunit = "[FIX:ITS_A_CONSTANT_FOOL!]";      // [113]
                                                                 // [---]
    const i_eom = ( "[FIX:i_oem(Optional_Error_Message)]" );     // [110]
                                                                 // [110]
    const F_VITALDO =( "[FIX:VITALDO](Hoisted_Function)"  );     // [109]
    const F_MAYBEDO =( "[FIX:MAYBEDO](Hoisted_Function)"  );     // [109]
    const c_bug     =( "[FIX:d_bug]"                      );     // [109]
    const c_eci     =( "[FIX:d_eci]"                      );     // [109]
    const c_eco     =( "[FIX:d_eco]"                      );     // [109]
    const   ECI     =( "[THIS_ISNT_YOUR_C_CODE_USE:c_eci]");     // [109]
    const   ECO     =( "[THIS_ISNT_YOUR_C_CODE_USE:c_eco]");     // [109]
                                                                 // [109]
    const c_camerah_zeb_du0 =( "[FIX:c_camerah_zeb_dut]" );      // [109][108]
    const c_camerah_zeb_du6 =( "[FIX:c_camerah_zeb_dut]" );      // [109][108]
                                                                 // [109]
    const d_camerah_zeb_du0 =( "[DOUBLY_WRONG]" );               // [109]
    const d_camerah_zeb_du6 =( "[DOUBLY_WRONG]" );               // [109]
                                                                 // [109]
    const d_camerah_zeb_dut =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_du1 =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_du2 =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_du3 =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_du4 =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_du5 =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_dur =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_duh =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]
    const d_camerah_zeb_dum =( "[FIX:CONST_NOT_DATAVAR]" );      // [109]

    const c_camerah_zebasis_du0 ="[DOUBLY_WRONG]";               // [108]
    const c_camerah_zebasis_du6 ="[DOUBLY_WRONG]";               // [108]
    const c_camerah_cir_cum_off ="[FIX:cir_cum_not]" ;           // [108]
                                                                 // [108]
    const c_camerah_zebasis_dut =("[FIX:c_camerah_zeb_dut]");    // [108]
    const c_camerah_zebasis_du1 =("[FIX:c_camerah_zeb_du1]");    // [108]
    const c_camerah_zebasis_du2 =("[FIX:c_camerah_zeb_du2]");    // [108]
    const c_camerah_zebasis_du3 =("[FIX:c_camerah_zeb_du3]");    // [108]
    const c_camerah_zebasis_du4 =("[FIX:c_camerah_zeb_du4]");    // [108]
    const c_camerah_zebasis_du5 =("[FIX:c_camerah_zeb_du5]");    // [108]
    const c_camerah_zebasis_dur =("[FIX:c_camerah_zeb_dur]");    // [108]
    const c_camerah_zebasis_duh =("[FIX:c_camerah_zeb_duh]");    // [108]
    const c_camerah_zebasis_dum =("[FIX:c_camerah_zeb_dum]");    // [108]
                                                                 
    const d_fps =( "[MORE_SENSIBLE::c_fps]" );                   // [085]
    const i_tim =( "[REFACTORED_USE:d_tik]" );                   // [085]
    const d_tim =( "[YOU_MEAN:::::::d_tik]" );                   // [085]
    const d_cligame_tik =( "[FIX:d_tik]"    );                   // [085]
                                                                 // [085]
    const c_cligame_t_0 =( "[FIX:NOT_CONST:d_cligame_t_0]" );    // [085]
    const c_cligame_t_1 =( "[FIX:NOT_CONST:d_cligame_t_1]" );    // [085]
    const c_cligame_mil =( "[FIX:NOT_CONST:d_cligame_mil]" );    // [085]
    const c_cligame_ams =( "[FIX:NOT_CONST:d_cligame_ams]" );    // [085]
    const d_cligame_tms =( "[IS_CONSTANT:::c_cligame_tms]" );    // [085]
                                                                 
    const idv =( "[FIX:vid]" );                                  // [071]
    const idf =( "[FIX:fid]" );                                  // [071]
    const idp =( "[FIX:pid]" );                                  // [071]
                                                                 // [071]
    const fss =( "[FIX:ssf]" );                                  // [071]
    const vss =( "[FIX:ssv]" );                                  // [071]
    const P_F =( "[FIX:MSG]( P_F == MSG )" );                    // [071]

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

//:===============================:MONKEY_WRENCH_MACROS:[108]://
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

    //:XXXXXXXX_WHAT_DOES_MARCELLUS_WALLUS_LOOK_LIKE_XXXXXXXX:// // [090]

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

//: __ARTDUDE__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]
                                                                         
    /** NOTHING_HERE_YET **/                                     // [103]
                                                                         
//: __ARTGIRL__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103][064]://

    /** Shader Attribute AND Uniform Locations. **/              // [086][077]
                                                                 // [077]
        const c_artgirl_loc_pos =( 0 /** #S_POS# **/ );          // [077]
        const c_artgirl_loc_tex =( 1 /** #S_TEX# **/ );          // [077]
        const c_artgirl_loc_tik =( "[#NO_LOC_TIK#]"  );          // [086]

    /** What Version Of WebGl Are We Using? **/

        const c_artgirl_wgl_tag =("#version 300 es");            // [074]
        const c_artgirl_wgl_ask =(         "webgl2");            // [074]
                                                                 
    /** WebGL Surface Quad Macros ********* **/                  // [066] 
                                                                 // [066] 
        const c_artgirl_vbd_len =( 20 );                         // [066] 
                                                                          
    /** *********************************** **/                  // [064] 
    /** Different Rendering Pipelines [064] **/                  // [064] 
    /** *********************************** **/                  // [064] 
                                                                 // [064] 
    //:--------------------------------------------------://     // [085]
    //:TAG[ shader types | shader type | slotted shaders]://     // [085]
    //:TAG[ reserved shaders | shader enums | shader id ]://     // [085]
    //:TAG[ shaders on the table | planned shaders      ]://     // [085]
    //:TAG[ shader identifiers | renderers | rendernums ]://     // [085]
    //:TAG[ slotted renderers | slated renderers        ]://     // [085]
    //:--------------------------------------------------://     // [085]
                                                                          
    const c_artgirl_ren_000 = "[DONT_USE:000]" ;                 // [068] 
    const c_artgirl_ren_bad = ( 0 ); //:Select:ren_def       :// // [068] 

    const c_artgirl_ren_001 = ( 1 ); //:FLAT_CYAN_COLOR      :// // [081][068]
    const c_artgirl_ren_002 = ( 2 ); //:FLAT_LIME_COLOR      :// // [081][068]
    const c_artgirl_ren_003 = ( 3 ); //:GradientQuad         :// // [081][068]
    const c_artgirl_ren_004 = ( 4 ); //:FlashingScreen       :// // [081][068]
    const c_artgirl_ren_005 = ( 5 ); //:Sectors_Colored      :// // [081][068]
    const c_artgirl_ren_006 = ( 6 ); //:Sectors_Numbered     :// // [081][068]
    const c_artgirl_ren_007 = ( 7 ); //:SolidColorTiles      :// // [081][068]
    const c_artgirl_ren_008 = ( 8 ); //:@HEXASET1STAMP@      :// // [081][068]
    const c_artgirl_ren_009 = ( 9 ); //:@HEXASET1AUSET@      :// // [081][068]
                                                                 
    const c_artgirl_ren_tot = ( 9 ); //:#RenderPipelines#    :// // [081][068]
                                                                
    const c_artgirl_ren_def = (      //:Default_Render       :// // [068]    
          c_artgirl_ren_001    );;   //:Pipeline_To_Use      :// // [068]    

//: __CAMERAH__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [108]
                                                                 // [---]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [129]
    //: TAG[ zero_basis_enumerations | zero_basis_enums ]://     // [129]
    //: TAG[ zero basis enumerations | zero basis enums ]://     // [129]
    //: TAG[ zero-basis-enumerations | zero-basis-enums ]://     // [129]
    //: TAG[ zeb_enums | zeb-enums | zebenums           ]://     // [129]
    //: TAG[ zeb_enumerations | zeb-enumerations        ]://     // [129]
    //: TAG[ zebenumerations | ZEB_ENU | zeb_enu        ]://     // [129]
    //: RELATED[ zero_basis_lookup_table ] < < < < < < < ://     // [129]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [129]
                                                                 // [---]
    const c_camerah_zeb_dut =( 0 );   //:FOR[ #ZEBASIS# ]://     // [108]
    const c_camerah_zeb_du1 =( 1 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_du2 =( 2 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_du3 =( 3 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_du4 =( 4 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_du5 =( 5 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_dur =( 6 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_duh =( 7 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
    const c_camerah_zeb_dum =( 8 );   //:FOR[ ^^^^^^^^^ ]://     // [108]
                                                                 // [---]
    const c_camerah_zeb_m_i =( 8 );   //:ZeroBasis_MaxDex://     // [129]
                                                                 // [---]
    //:#_HOW_TO_USE_ZERO_BASIS_GEOMETRIC_ELEMENTS_#://           // [108]
                                                                 // [108]
    const c_camerah_cir_cum_inn =( 1 );     //:INN_SCRIBE://     // [108]
    const c_camerah_cir_cum_out =( 2 );     //:OUT_SCRIBE://     // [108]
    const c_camerah_cir_cum_not =( 3 );     //:NOT_SCRIBE://     // [108]

    //: #_WHY_MAXUNIT_MINUS_TWO_# ://                            // [111]
    const c_camerah_maxunit =( c_dum - 1 - 1 );                  // [111]
    ASS(  c_camerah_maxunit == c_dum -(  2  ));                  // [111]

//: __SEXYCAM__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [125]

    /** NOTHING_HERE_YET **/                                     // [125]
    
//: __ASERVER__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]
                                                                         
    /** NOTHING_HERE_YET **/                                     // [103]
                                                                         
//: __DABITCH__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]
                                                                         
    /** NOTHING_HERE_YET **/                                     // [103]
                                                                         
//: __EDIGAME__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]
                                                                             
    const c_edigame_mod = "[FIX:d_edigame_mod]" ;                // [103]
    const c_edigame_tog = "[FIX:USE_BOTH:tog_001:AND:tog_002]";  // [103]
                                                                 // [103]
    const c_edigame_tog_001 =( "~" /** [edi||gam]? **/ );        // [103]
    const c_edigame_tog_002 =( "`" /** [edi||gam]? **/ );        // [103]
                                                                 // [103]
    const c_edigame_edi =( 1   /** edigame as EDItor * * **/ );  // [103]
    const c_edigame_gam =( 2   /** edigame as GAMe   * * **/ );  // [103]
                                                                         
//: __KEYMAST__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]

    const c_keymast_ark_top =( "[FIX:ark_upp]" );                // [114]
    const c_keymast_ark_bot =( "[FIX:ark_dow]" );                // [114]
                                                                 // [114]
    const c_keymast_ark_k_0 =( 37 ); //: key0 : FIRST ://        // [114]
    const c_keymast_ark_k_1 =( 40 ); //: key1 : LAST  ://        // [114]
                                                                 // [114]
    const c_keymast_ark_lef =( 37 );                             // [114]
    const c_keymast_ark_upp =( 38 );                             // [114]
    const c_keymast_ark_rig =( 39 );                             // [114]
    const c_keymast_ark_dow =( 40 );                             // [114]
                                                                         
//: __SERGAME__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103]
                                                                         
    /** NOTHING_HERE_YET **/                                     // [103]
                                                                         
//: __CLIGAME__ V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V_V:// // [103][085]
                                                                 // [103][085]
    const c_cligame_tms =( 1000 / c_fps ); /**Target_MIL sec**/  // [103][085]

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

    //: TAG[fragment_shaders|fragment-shaders|fragshader]://    // [093]
    //: TAG[fragment shaders|frag shaders | frag_shaders]://    // [093]
    //: TAG[shader-code | shader_code | shadercode      ]://    // [095]

    //: TAG[fragshader5 | frag5 | fragmentshader5 ]      ://    // [122]

    #define F32 float      //: Shorthand Type == U_CASE  ://    // [089]
    #define U32 uint       //: Shorthand Type == U_CASE  ://    // [089]
    #define I32  int       //: Shorthand Type == U_CASE  ://    // [099]
    #define UNI uniform    //: Shorthand Type == U_CASE  ://    // [089]
    #define UV2 uvec2      //: U32 Vector , 2 elements.  ://    // [095]
    #define FV2  vec2      //: F32 Vector , 2 elements.  ://    // [095]
    #define FV4  vec4      //: F32 Vector , 4 elements.  ://    // [095]
    #define UV4 uvec4      //: Shorthand Type == U_CASE  ://    // [089]
                                                                // [089]
    #define x_0  ( 0 )     //: Accessors[ vpc,vp0,vp1 ]  ://    // [089]
    #define x_1  ( 1 )     //: Accessors[ vpc,vp0,vp1 ]  ://    // [089]
    #define y_0  ( 2 )     //: Accessors[ vpc,vp0,vp1 ]  ://    // [089]
    #define y_1  ( 3 )     //: Accessors[ vpc,vp0,vp1 ]  ://    // [089]
                                                                // [089]
    #define u_0   U32( 0 ) //: Default is SIGNED integer.://    // [089]
    #define u_1   U32( 1 ) //: Default is SIGNED integer.://    // [089]
    #define u_2   U32( 2 ) //: Default is SIGNED integer.://    // [097]
    #define u_3   U32( 3 ) //: Default is SIGNED integer.://    // [099]
    #define u_4   U32( 4 ) //: Default is SIGNED integer.://    // [097]
    #define u_5   U32( 5 ) //: Default is SIGNED integer.://    // [099]
    #define u64   U32(64 ) //: Default is SIGNED integer.://    // [099]
    #define i_255 I32(255) //: Default is SIGNED integer.://    // [099]
    #define u_255 U32(255) //: Default is SIGNED integer.://    // [089]
    #define f_255 F32(255) //: Default is SIGNED integer.://    // [089]
    #define f_2   F32( 2 ) //: Default is SIGNED integer.://    // [124]
                                                                // [089]
    #define f_raw_fcx   ( gl_FragCoord.x )                      // [089]
    #define f_raw_fcy   ( gl_FragCoord.y )                      // [089]
                                                                // [089]
    #define F_NAW_FCX (F32(u_fcx-((u_fcx/u_255)*u_255))/f_255)  // [089]
    #define F_NAW_FCY (F32(u_fcy-((u_fcy/u_255)*u_255))/f_255)  // [089]
                                                                // [089]
    #define F_NOR_FCX (F32(u_fcx) / F32(d_vpc[x_1]))            // [089]
    #define F_NOR_FCY (F32(u_fcy) / F32(d_vpc[y_1]))            // [089]

    UNI U32 d_tik     ;  //: TICKER   : Logic Frame      ://    // [122][089]
    UNI UV4 d_vpc     ;  //: Viewport : CANVAS/CLIENT    ://    // [122][089]
    UNI UV4 d_vp0     ;  //: Viewport : DEST/SCREEN      ://    // [122][089]
    UNI UV4 d_vp1     ;  //: Viewport : DATA/SELECT      ://    // [122][089]
    UNI UV4 d_camwall ;  //: Camera Stress Feedback      ://    // [122]
                                                                // [089]
    //:--------------------------------------------------://    // [089]
    //:Shader Variable Prefixes :                        ://    // [089]
    //:#_DO_NOT_COMBINE_PREFIXES_# !!!!!!!!!!!!!!!!!!!!! ://    // [089]
    //:--------------------------------------------------://    // [089]
    //: d_ : Global Data / Variable                      ://    // [089]
    //: f_ : Float32 Variable (includes vectors)         ://    // [089]
    //: u_ : Uint32  Variable (includes vectors)         ://    // [089]
    //: i_ : Int32   Variable (includes vectors)         ://    // [089]
    //: o_ : DO NOT USE "o_" for output in shader        ://    // [089]
    //: p_ : DO NOT USE "p_" for percent.(use f_)        ://    // [095]
    //:                                                  ://    // [089]
    //:out_: output variable of function.                ://    // [089]
    //:inn_: innput variable of function.                ://    // [089]
    //:--------------------------------------------------://    // [089]
                 
                                                                        
    precision mediump float ;                                   // [074]
                                                                // [074]
    in  vec2  i_o_tex ; //: @i_o_tex@ :#_I_O_TEX_POINTLESS_#:// // [074]
    out vec4  out_f_c ; //: @out_f_c@ ://                       // [074]
                                                                // [074]
    void main(){  //////////////////////////////////////////////// [074]
                                                                // [095]
        U32  u_fcx ; //: FragCoord.X             ://            // [095]
        U32  u_fcy ; //: FragCoord.Y             ://            // [095]
        UV2  u_v0l ; //: VP0 local XY Position   ://            // [095]
        UV2  u_mv0 ; //: Magnitude: VP0          ://            // [095]
        FV2  f_v0l ; //: VP0 local XY PERCENTAGE ://            // [095]
                                                                // [---]
        //: #_DISCRETE_UNITS_IN_VIEWPORT_NOTE_#      ://        // [097]
                                                                // [097]
        UV2  u_duv    ; //: DiscreteUnits:VIEWPORT   ://        // [097]
        UV2  u_dup    ; //: DiscreteUnits:PIXEL      ://        // [097]
        UV2  u_mv1    ; //: Magnitude: VP1           ://        // [097]
        UV2  u_ds0    ; //: DiscreteSample: MIN      ://        // [097]
        UV2  u_ds1    ; //: DiscreteSample: MAX      ://        // [097]
        U32  u_dsa[8] ; //: DiscreteSample: ARRAY    ://        // [097]
        UV2  u_dsc    ; //: DiscreteSample: CURRENT  ://        // [097]
        U32  u_tk4    ; //: TICK, 4 values[0,1,2,3]  ://        // [097]
                                                                // [---]
        u_fcx = (       u_0   + U32( f_raw_fcx - 0.5 ));        // [095][089]
        u_fcy = (d_vpc[ y_1 ] - U32( f_raw_fcy - 0.5 ));        // [095][089]
                                                                // [095]
        if( u_fcx < d_vp0[x_0]                                  // [095]
        ||  u_fcx > d_vp0[x_1]                                  // [095]
        ||  u_fcy < d_vp0[y_0]                                  // [095]
        ||  u_fcy > d_vp0[y_1]                                  // [095]
        ){                                                      // [095]
            //:#_BLACKSECTION_OF_LETTERBOX_#://                 // [095]
            out_f_c = vec4(0,0,0,1);                            // [095]
            return;                                             // [095]
        };;                                                     // [095]
        u_v0l = UV2( u_fcx-d_vp0[x_0]                           // [095]
                ,    u_fcy-d_vp0[y_0] );;                       // [095]

                                                                // [095]
        u_mv0 = UV2( d_vp0[x_1]-d_vp0[x_0]+u_1                  // [095]
                ,    d_vp0[y_1]-d_vp0[y_0]+u_1 );;              // [095]

        //:determine_sample_point:[097]:---------------------://// [097]
                                                                // [097]
        //:#_MV1_IS_MAGNITUDE_OF_VP1_THE_DATA_VIEWPORT_#://     // [107]
        u_mv1 = UV2( d_vp1[x_1]-d_vp1[x_0]+u_1                  // [107][BUG][097]
                ,    d_vp1[y_1]-d_vp1[y_0]+u_1 );;              // [107][BUG][097]
                                                                // [097]
        u_duv = u_mv1 ; //:@SYNONYMOUS_VARIABLES@://            // [097]
                                                                // [097]
    //:#u_dup#://                                               // [097]
    //: u_dup =( DiscreteUnitSelection )/( NumPixelsOnScreen ); // [097]
        u_dup =(         u_duv         )/(       u_mv0       ); // [097]
                                                                // [097]
        u_ds0 =UV2(       //:SEE_DIAGRAM[ #_DIA_U_DS0_# ]://    // [097]
            d_vp1[x_0]+( u_v0l.x * u_dup.x )+(         u_0 )    // [097]
        ,   d_vp1[y_0]+( u_v0l.y * u_dup.y )+(         u_0 )    // [097]
        );;                                                     // [097]
        u_ds1 =UV2(       //:SEE_DIAGRAM[ #_DIA_U_DS1_# ]://    // [097]
            d_vp1[x_0]+( u_v0l.x * u_dup.x )+( u_dup.x-u_1 )    // [097]
        ,   d_vp1[y_0]+( u_v0l.y * u_dup.y )+( u_dup.y-u_1 )    // [097]
        );;                                                     // [097]
                                                                // [097]
        //:#_ROTATING_SAMPLE_POINT_#://                         // [097]
                                                                // [097]
        u_dsa[ 0 ]= u_ds0.x ; //:[ * ][ _ ]://                  // [097]
        u_dsa[ 1 ]= u_ds0.y ; //:[ _ ][ _ ]://                  // [097]
                                                                // [097]
        u_dsa[ 2 ]= u_ds1.x ; //:[ _ ][ * ]://                  // [097]
        u_dsa[ 3 ]= u_ds0.y ; //:[ _ ][ _ ]://                  // [097]
                                                                // [097]
        u_dsa[ 4 ]= u_ds1.x ; //:[ _ ][ _ ]://                  // [097]
        u_dsa[ 5 ]= u_ds1.y ; //:[ _ ][ * ]://                  // [097]
                                                                // [097]
        u_dsa[ 6 ]= u_ds0.x ; //:[ _ ][ _ ]://                  // [097]
        u_dsa[ 7 ]= u_ds1.y ; //:[ * ][ _ ]://                  // [097]
                                                                // [097]
        u_tk4 =(d_tik-(d_tik/u_4*u_4)); //:MOD4://              // [097]
                                                                // [097]
                                                                // [099]
        //:::::::::::::::::::::::::::::::::::::::://            // [099]
        //: @u_dsc@/@dsc@ : Discrete_Sample_Point://            // [099]
        //:::::::::::::::::::::::::::::::::::::::://            // [099]
                                                                // [099]
        u_dsc.x = u_dsa[ (u_tk4*u_2) + u_0 ];                   // [097]
        u_dsc.y = u_dsa[ (u_tk4*u_2) + u_1 ];                   // [097]
                                                                // [097]
        //:---------------------:determine_sample_point:[097]://// [097]
        //:use_the_sample_point:[099]:-----------------------://// [099]
                                                                // [099]
            //:::::::::::::::::::::::::::::::::::::::::::://    // [099]
            //: Number of discrete units in different    ://    // [099]
            //: geometric elements of our render space.  ://    // [099]
            //:::::::::::::::::::::::::::::::::::::::::::://    // [099]
                                                                // [099]
            #define c_dum  U32( ${c_dum} )//:  0x7FFF80  ://    // [099]
            #define c_duh  U32( ${c_duh} )//:  0x2AAA80  ://    // [099]
            #define c_dur  U32( ${c_dur} )//:  0x088880  ://    // [099]
            #define c_dut  U32( ${c_dut} )//:  0x002222  ://    // [099]
                                          //:  --------  ://    // [099]
            #define c_du0  U32( ${c_du0} )//:  0x002222  ://    // [099]
            #define c_du1  U32( ${c_du1} )//:  0x004444  ://    // [099]
            #define c_du2  U32( ${c_du2} )//:  0x008888  ://    // [099]
            #define c_du3  U32( ${c_du3} )//:  0x011110  ://    // [099]
            #define c_du4  U32( ${c_du4} )//:  0x022220  ://    // [099]
            #define c_du5  U32( ${c_du5} )//:  0x044440  ://    // [099]
            #define c_du6  U32( ${c_du6} )//:  0x088880  ://    // [099]
                                                                // [099]
            //::::::::::::::::::::::::::::::::::::::::::::://   // [099]
            //: @u_h03@/@h03@ : Hotel Coord X&Y [0- 2]    ://   // [099]
            //: @u_r05@/@r05@ : Room  Coord X&Y [0- 4]    ://   // [099]
            //: @u_t64@/@t64@ : Tile  Coord X&Y [0-63]    ://   // [099]
            //::::::::::::::::::::::::::::::::::::::::::::://   // [099]
                                                                // [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
            //: What things does the sample point belong to? ://// [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
                                                                // [099]
            UV2 u_h03 =( u_dsc / c_duh );   //:@TMMC@://        // [099]
            UV2 u_r05 =( u_dsc / c_dur );   //:@TMMC@://        // [099]
            UV2 u_t64 =( u_dsc / c_dut );   //:@TMMC@://        // [099]
                                                                // [099]
            //:::::::::::::::::::::::::::::::::::://            // [099]
            //: Modulate/Wrap within Bounds      ://            // [099]
            //:::::::::::::::::::::::::::::::::::://            // [099]
                                                                // [099]
            u_h03 =  u_h03-((u_h03 / u_3)* u_3 );//:MOD3 ://    // [099]
            u_r05 =  u_r05-((u_r05 / u_5)* u_5 );//:MOD5 ://    // [099]
            u_t64 =  u_t64-((u_t64 / u64)* u64 );//:MOD64://    // [099]
                                                                // [099]
                                                                // [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
            //: Convert XY Coordinates To 1D Index Coords    ://// [099]
            //: (Not used yet, but will be used to fetch )   ://// [099]
            //: (data eventually. )                          ://// [099]
            //:... We are probably converting to 1D TOO SOON ://// [099]
            //:... and these calculations will get scrapped. ://// [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
                                                                // [099]
            U32 h09 = u_h03.x + ( u_h03.y * u_3 ) ;             // [099]
            U32 r25 = u_r05.x + ( u_r05.y * u_5 ) ;             // [099]
            U32 t4k = u_t64.x + ( u_t64.y * u64 ) ;             // [099]
                                                                // [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
            //: #_BRANCHLESS_CHECKERBOARD_#                  ://// [099]
            //:::::::::::::::::::::::::::::::::::::::::::::::://// [099]
                                                                // [099]
            //::::::::::::::::::::::::::::::::::::::::::::://   // [099]
            //: @i_h02@/@h02@ : Hotel Coord As [ 0 || 1 ] ://   // [099]
            //: @i_r02@/@r02@ : Room  Coord As [ 0 || 1 ] ://   // [099]
            //: @i_t02@/@t02@ : Tile  Coord As [ 0 || 1 ] ://   // [099]
            //::::::::::::::::::::::::::::::::::::::::::::://   // [099]
                                                                // [099]
            I32 i_h02 =abs(                                     // [099]
                I32( u_h03.x -(( u_h03.x / u_2)*u_2)) //:MOD2://// [099]
            -   I32( u_h03.y -(( u_h03.y / u_2)*u_2)) //:MOD2://// [099]
            );;                                                 // [099]
            I32 i_r02 =abs(                                     // [099]
                I32( u_r05.x -(( u_r05.x / u_2)*u_2)) //:MOD2://// [099]
            -   I32( u_r05.y -(( u_r05.y / u_2)*u_2)) //:MOD2://// [099]
            );;                                                 // [099]
            I32 i_t02 =abs(                                     // [099]
                I32( u_t64.x -(( u_t64.x / u_2)*u_2)) //:MOD2://// [099]
            -   I32( u_t64.y -(( u_t64.y / u_2)*u_2)) //:MOD2://// [099]
            );;                                                 // [099]
                                                                // [099]
            out_f_c =FV4(                                       // [099]
                                                                // [099]
                F32(   F32( i_255 * i_h02 ) / f_255 )           // [099]
            ,   F32(   F32( i_255 * i_r02 ) / f_255 )           // [099]
            ,   F32(   F32( i_255 * i_t02 ) / f_255 )           // [099]
            ,   1.0                                             // [099]
            );;                                                 // [099]

            //: #_OUT_OF_BOUNDS_DIAGNOSIS_#://                  // [106]
            if( u_dsc.x > ( c_dum - u_1 )                       // [106]
            ||  u_dsc.y > ( c_dum - u_1 )                       // [106]
            ){                                                  // [106]
                out_f_c.x /= 4.0 ;                              // [106]
                out_f_c.y /= 4.0 ;                              // [106]
                out_f_c.z /= 4.0 ;                              // [106]
            };;                                                 // [106]

            //:#_CAMERA_STRESS_FEEDBACK_#:---------------://    // [---][122]
                                                                // [---][122]
            #define c_w     d_camwall                           // [---][122]
            #define e_lef ( c_w[ x_0 ] /**#_NOW_MAG_#**/ )      // [124][122]
            #define e_top ( c_w[ y_0 ] /**#_NOW_MAG_#**/ )      // [124][122]
            #define e_rig ( c_w[ x_1 ] /**#_NOW_MAG_#**/ )      // [124][122]
            #define e_bot ( c_w[ y_1 ] /**#_NOW_MAG_#**/ )      // [124][122]
                                                                // [124]
                /** @u_c_m@ : U32 d_camwall [MPV]        **/    // [124]
                /** @f_c_m@ : F32 d_camwall [MPV]        **/    // [124]
                /** @f_lef@ : F32 Edge Thickness - LEFT  **/    // [124]
                /** @f_top@ : F32 Edge Thickness - TOP   **/    // [124]
                /** @f_rig@ : F32 Edge Thickness - RIGHT **/    // [124]
                /** @f_bot@ : F32 Edge Thickness - BOTTOM**/    // [124]
                                                                // [124]
                U32 u_c_m =( c_dum / u_2 ); /**#FIX_002#**/     // [124][FIX][124]
                F32 f_c_m =F32(   u_c_m  );                     // [124]
                F32 f_lef =( F32(e_lef) / f_c_m );              // [124]
                F32 f_top =( F32(e_top) / f_c_m );              // [124]
                F32 f_rig =( F32(e_rig) / f_c_m );              // [124]
                F32 f_bot =( F32(e_bot) / f_c_m );              // [124]
                                                                // [124]
                F32 f_vp1_wid_haf =(    //:#VP1_NOT_VPC#://     // [124]
                                                                // [124]
                    F32( d_vp1[ x_1 ] - d_vp1[ x_0 ] + u_1 )    // [124]
                    /                                           // [124]
                    f_2                                         // [124]
                );;                                             // [124]
                F32 f_vp1_hig_haf =(    //:#VP1_NOT_VPC#://     // [124]
                                                                // [124]
                    F32( d_vp1[ y_1 ] - d_vp1[ y_0 ] + u_1 )    // [124]
                    /                                           // [124]
                    f_2                                         // [124]
                );;                                             // [124]
                                                                // [124]
                #define f_w_h ( f_vp1_wid_haf )                 // [124]
                #define f_h_h ( f_vp1_hig_haf )                 // [124]
                         //://///////////////////////////://    // [124]
                         //: +---[ #VP1_NOT_VPC# ]       ://    // [124]
                         //: |                           ://    // [124]
                         //: V                           ://    // [124]
                U32 u_lef =d_vp1[x_0]+U32(f_lef*(f_w_h))-u_1;   // [124]
                U32 u_top =d_vp1[y_0]+U32(f_top*(f_h_h))-u_1;   // [124]
                U32 u_rig =d_vp1[x_1]-U32(f_rig*(f_w_h))+u_1;   // [124]
                U32 u_bot =d_vp1[y_1]-U32(f_bot*(f_h_h))+u_1;   // [124]
                         //: ^                           ://    // [124]
                         //: |                           ://    // [124]
                         //: +---[ #VP1_NOT_VPC# ]       ://    // [124]
                         //://///////////////////////////://    // [124]
                #undef  f_w_h                                   // [124]
                #undef  f_h_h                                   // [124]
                                                                // [---]
                U32 u_wal =( u_0 );                             //      [122]
                                                                //      [122]
                if( d_camwall[ x_0 ] > u_0 ){                   //      [122]
                                                                //      [122]
                    if( u_fcx <= u_lef ){ //:@edg_lef@://       //      [122]
                                                                //      [122]
                        u_wal =( u_1 );                         // [124][122]
                    };;                                         //      [122]
                };;                                             //      [122]
                if( d_camwall[ x_1 ] > u_0 ){                   //      [122]
                                                                //      [122]
                    if( u_fcx >= u_rig ){ //:@edg_rig@://       //      [122]
                                                                //      [122]
                        u_wal =( u_2 );                         // [124][122]
                    };;                                         //      [122]
                };;                                             //      [122]
                if( d_camwall[ y_0 ] > u_0 ){                   //      [122]
                                                                //      [122]
                    if( u_fcy <= u_top ){ //:@edg_top@://       //      [122]
                                                                //      [122]
                        u_wal =( u_3 );                         // [124][122]
                    };;                                         //      [122]
                                                                //      [122]
                };;                                             //      [122]
                if( d_camwall[ y_1 ] > u_0 ){                   //      [122]
                                                                //      [122]
                    if( u_fcy >= u_bot ){ //:@edg_bot@://       //      [122]
                                                                //      [122]
                        u_wal =( u_4 );                         // [124][122]
                    };;                                         //      [122]
                };;                                             //      [122]
                                                                //      [122]
                if( u_wal >= u_1 ){                             //      [122]
                                                                // [---][---]
                    //:#_MONOCHROME_STRESS_#:------------://    //      [123]
                                                                //      [123]
                    F32 lum =( out_f_c.r                        //      [123]
                             + out_f_c.g                        //      [123]
                             + out_f_c.b                        //      [123]
                             ) / ( 3.0 );;                      //      [123]
                                                                //      [---]
                        if( u_1 == u_wal ){                     // [124][---]
                            out_f_c.r =( lum );                 // [124][123]
                            out_f_c.g =( 0.0 );                 // [124][123]
                            out_f_c.b =( 0.0 );                 // [124][123]
                        };;                                     // [124]
                        if( u_2 == u_wal ){                     // [124]
                            out_f_c.r =( 0.0 );                 // [124]
                            out_f_c.g =( lum );                 // [124]
                            out_f_c.b =( 0.0 );                 // [124]
                        };;                                     // [124]
                        if( u_3 == u_wal ){                     // [124]
                            out_f_c.r =( 0.0 );                 // [124]
                            out_f_c.g =( 0.0 );                 // [124]
                            out_f_c.b =( lum );                 // [124]
                        };;                                     // [124]
                        if( u_4 == u_wal ){                     // [124]
                            out_f_c.r =( lum );                 // [124]
                            out_f_c.g =( lum );                 // [124]
                            out_f_c.b =( lum );                 // [124]
                        };;                                     // [124]
                                                                // [---][123]
                    //:------------:#_MONOCHROME_STRESS_#://    // [---][123]
                                                                // [---]
                };;                                             // [122]
                                                                // [122]
            #undef  c_w    //:---------------------------://    // [122]
            #undef  e_lef  //:---------------------------://    // [122]
            #undef  e_top  //:---------------------------://    // [122]
            #undef  e_rig  //:---------------------------://    // [122]
            #undef  e_bot  //:---------------------------://    // [122]
            //:---------------:#_CAMERA_STRESS_FEEDBACK_#://    // [122]


                                                                // [099]
        //:-----------------------:use_the_sample_point:[099]://// [099]
                                                                // [---]
                                                                // [095]
    }   ////////////////////////////////////////////////////////// [074]                                                       
                                                                        
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
if( /** __ARTDUDE__ **/ notnode ){                              // [102]
                                                                // [102]
    //:Art Assets Go Here://                                    // [102]
                                                                // [102]
};;                                                             // [102]
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
    });;                                                        //      [063] 
                                                                //      [065] 
    console.log( d_artgirl );                                   //      [065] 
                                                                //      [065] 
};;                                                             //      [063] 
if( /** __CAMERAH__ **/ notnode ){                               // [108]
                                                                 // [108]
    var d_camerah_use =( 1 ); //:UseHighLevelCamera? ://         // [117][115][108]
    var d_camerah_dir =( 1 ); //:DirtyFlagInitallySet://         // [115]
                                                                 // [---]
    //: @FUCK_YOUR_GARBAGE_COLLECTOR@ ://                        // [---]
    var d_camerah_org = F_ARR_I32( 4 , 0,0,0,0 ); //:@SIGNED@:// // [118][111]
    var d_camerah_vp1 = F_ARR_I32( 4 , 0,0,0,0 ); //:@SIGNED@:// // [118]
                                                                 // [---]
    var d_camerah ={ laxcoma:"[HACK]"                            // [108]
                                                                 // [108]
        ,   zebasis : c_camerah_zeb_dut                          // [108]
        ,   camsnap : 0  //: IsCameraSnapOn?        ://          // [108]
        ,   camdu_x : 0  //: Camera Discrete Unit X ://          // [108]
        ,   camdu_y : 0  //: Camera Discrete Unit Y ://          // [108]
        ,   camzoom : 0.0//: 0 === NEUTRAL ZOOM     ://          // [108]
                                                                 // [108]
            //:#_CIR_CUM_DIAGRAM_#://                            // [108]
                                                                 // [108]
        ,   cir_cum : c_camerah_cir_cum_inn                      // [108]
                                                                 // [---]
            //: #_WHAT_IS_NOPAN_FOR_# ://                        // [113]
                                                                 // [113]
        ,   nopan_x : 0 //: It is __NOT__ a "lock" ://           // [113]
        ,   nopan_y : 0 //: It is __NOT__ a "lock" ://           // [113]
                                                                 // [---]
    };;                                                          // [108]
                                                                 // [---]

    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [129]
    //: TAG[ zero_basis_lookup_table | zeb_lookup_table ]://     // [129]
    //: TAG[ zero basis lookup table | zeb lookup table ]://     // [129]
    //: TAG[ zerobasislookuptable    | zeblookuptable   ]://     // [129]
    //: RELATED[ zero_basis_enumerations ]               ://     // [129]
    //: RELATED[ d_sexycam_not_zeb       ]               ://     // [129]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://     // [129]

    ASS( c_dut != c_du1 , "[DUT_EQ_DU1]" );                      // [130]
    ASS( c_du1 != c_du2 , "[DU1_EQ_DU2]" );                      // [130]
    ASS( c_du2 != c_du3 , "[DU2_EQ_DU3]" );                      // [130]
    ASS( c_du3 != c_du4 , "[DU3_EQ_DU4]" );                      // [130]
    ASS( c_du4 != c_du5 , "[DU4_EQ_DU5]" );                      // [130]
    ASS( c_du5 != c_dur , "[DU5_EQ_DUR]" );                      // [130]
    ASS( c_dur != c_duh , "[DUR_EQ_DUH]" );                      // [130]
    ASS( c_duh != c_dum , "[DUH_EQ_DUM]" );                      // [130]
    ASS( c_dum != c_dut , "[DUM_EQ_DUT]" );                      // [130]

    var d_camerah_zeb_zes = F_SHUTARR( F_CAR_U32( 9              // [109]
                                                                 // [109]
    ,   c_dut    //: ZErobasis_Span ( in @D_U@ ) : [dut] ://     // [109]
    ,   c_du1    //: ZErobasis_Span ( in @D_U@ ) : [du1] ://     // [109]
    ,   c_du2    //: ZErobasis_Span ( in @D_U@ ) : [du2] ://     // [109]
    ,   c_du3    //: ZErobasis_Span ( in @D_U@ ) : [du3] ://     // [109]
    ,   c_du4    //: ZErobasis_Span ( in @D_U@ ) : [du4] ://     // [109]
    ,   c_du5    //: ZErobasis_Span ( in @D_U@ ) : [du5] ://     // [109]
    ,   c_dur    //: ZErobasis_Span ( in @D_U@ ) : [dur] ://     // [109]
    ,   c_duh    //: ZErobasis_Span ( in @D_U@ ) : [duh] ://     // [109]
    ,   c_dum    //: ZErobasis_Span ( in @D_U@ ) : [dum] ://     // [109]
    ));;                                                         // [109]
    let            zeb_zes =( d_camerah_zeb_zes );               // [109]
                                                                 // [109]
    if(  c_dut  != zeb_zes[ c_camerah_zeb_dut ] ){               // [109]
                                                                 // [109]
        MSG("");                                                 // [109]
        MSG( "[You_Are_Going_To_Crash]" );                       // [109]
        LOG( "[c_dut]:" , c_dut );                               // [109]
        LOG( "[..zes]:" , zeb_zes[ c_camerah_zeb_dut ] );        // [109]
        MSG("");                                                 // [109]
    };;                                                          // [109]
    ASS( c_dut === zeb_zes[ c_camerah_zeb_dut ],"[ZEB_DUT]" );   // [109]
                                                                 // [109]
    ASS( c_du1 === zeb_zes[ c_camerah_zeb_du1 ],"[ZEB_DU1]" );   // [109]
    ASS( c_du2 === zeb_zes[ c_camerah_zeb_du2 ],"[ZEB_DU2]" );   // [109]
    ASS( c_du3 === zeb_zes[ c_camerah_zeb_du3 ],"[ZEB_DU3]" );   // [109]
    ASS( c_du4 === zeb_zes[ c_camerah_zeb_du4 ],"[ZEB_DU4]" );   // [109]
    ASS( c_du5 === zeb_zes[ c_camerah_zeb_du5 ],"[ZEB_DU5]" );   // [109]
                                                                 // [109]
    ASS( c_dur === zeb_zes[ c_camerah_zeb_dur ],"[ZEB_DUR]" );   // [109]
    ASS( c_duh === zeb_zes[ c_camerah_zeb_duh ],"[ZEB_DUH]" );   // [109]
    ASS( c_dum === zeb_zes[ c_camerah_zeb_dum ],"[ZEB_DUM]" );   // [109]
                                                                 // [---]
};; //:END_OF_DATA_SECTION[ CAMERAH ]:::::::::::::::::::::::::// // [125][108]
if( /** __SEXYCAM__ **/ notnode ){                               // [125]
                                                                 // [125]
    var d_sexycam ={ laxcoma : "[HACK]"                          // [125]
                                                                 // [125]
    ,   but_num : (0-1) //: Button Number Press          ://     // [125]
    ,   but_not : ( 0 ) //: NumberOftimes(in row)Pressed ://     // [125]
    };;                                                          // [125]
    Object.seal( d_sexycam );                                    // [125]
                                                                 // [---]
    //:--------------------------------------------------://     // [127]
    //:                 c_x:0     c_x:1     c_x:2        ://     // [127]
    //:                   |         |         |          ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:               | [_7_] | | [_8_] | | [_9_] |      ://     // [127]
    //:     c_y == 0  |-------| |-------| |-------|      ://     // [127]
    //:               |  hi0  | |  hi1  | |  hi2  |      ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:               | [_4_] | | [_5_] | | [_6_] |      ://     // [127]
    //:     c_y == 1  |-------| |-------| |-------|      ://     // [127]
    //:               |  hi3  | |  hi4  | |  hi5  |      ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:               | [_1_] | | [_2_] | | [_3_] |      ://     // [127]
    //:     c_y == 2  |-------| |-------| |-------|      ://     // [127]
    //:               |  hi6  | |  hi7  | |  hi8  |      ://     // [127]
    //:               +-------+ +-------+ +-------+      ://     // [127]
    //:--------------------------------------------------://     // [127]
    //:#NUMPAD_TO_HOTEL_CELL_INDEX_LUT#:[127]:-----------://     // [127]
                                                                 // [127]
        const laxcoma_numpad_values ="[HACK]"                    // [127]
        ,   _1_ =( 1 )  , hi0 =( 0 )                             // [127]
        ,   _2_ =( 2 )  , hi1 =( 1 )                             // [127]
        ,   _3_ =( 3 )  , hi2 =( 2 )                             // [127]
        ,   _4_ =( 4 )  , hi3 =( 3 )                             // [127]
        ,   _5_ =( 5 )  , hi4 =( 4 )                             // [127]
        ,   _6_ =( 6 )  , hi5 =( 5 )                             // [127]
        ,   _7_ =( 7 )  , hi6 =( 6 )                             // [127]
        ,   _8_ =( 8 )  , hi7 =( 7 )                             // [127]
        ,   _9_ =( 9 )  , hi8 =( 8 )                             // [127]
        ;;;;;;;;;;;;;;;;;;;;;;;;;;;;                             // [127]
                                                                 // [127]
        var d_sexycam_pad_hi9 =[ 0x00                            // [127]
        ,   hi6 //: pad( 1 )===>( hi6 ) , cel[ 0,2 ] ://         // [127]
        ,   hi7 //: pad( 2 )===>( hi7 ) , cel[ 1,2 ] ://         // [127]
        ,   hi8 //: pad( 3 )===>( hi8 ) , cel[ 2,2 ] ://         // [127]
                                                                 // [127]
        ,   hi3 //: pad( 4 )===>( hi3 ) , cel[ 0,1 ] ://         // [127]
        ,   hi4 //: pad( 5 )===>( hi4 ) , cel[ 1,1 ] ://         // [127]
        ,   hi5 //: pad( 6 )===>( hi5 ) , cel[ 2,1 ] ://         // [127]
                                                                 // [127]
        ,   hi0 //: pad( 7 )===>( hi0 ) , cel[ 0,0 ] ://         // [127]
        ,   hi1 //: pad( 8 )===>( hi1 ) , cel[ 1,0 ] ://         // [127]
        ,   hi2 //: pad( 9 )===>( hi2 ) , cel[ 2,0 ] ://         // [127]
        ];;                                                      // [127]
                                                                 // [127]
        let pad_hi9 = d_sexycam_pad_hi9 ;                        // [127]
                                                                 // [127]
        ASS( hi0 === pad_hi9[ _7_ ] , "[hi0]" );                 // [127]
        ASS( hi1 === pad_hi9[ _8_ ] , "[hi1]" );                 // [127]
        ASS( hi2 === pad_hi9[ _9_ ] , "[hi2]" );                 // [127]
                                                                 // [127]
        ASS( hi3 === pad_hi9[ _4_ ] , "[hi3]" );                 // [127]
        ASS( hi4 === pad_hi9[ _5_ ] , "[hi4]" );                 // [127]
        ASS( hi5 === pad_hi9[ _6_ ] , "[hi5]" );                 // [127]
                                                                 // [127]
        ASS( hi6 === pad_hi9[ _1_ ] , "[hi6]" );                 // [127]
        ASS( hi7 === pad_hi9[ _2_ ] , "[hi7]" );                 // [127]
        ASS( hi8 === pad_hi9[ _3_ ] , "[hi8]" );                 // [127]
                                                                 // [127]
    //:-----------:#NUMPAD_TO_HOTEL_CELL_INDEX_LUT#:[127]://     // [---]
    //:#TIMES_PRESSED___TO___ZEB_ENU#:[129]:-------------://     // [---]
                                                                 // [129]
    var d_sexycam_not_zeb = F_SHUTARR( F_CAR_U32( 9+1            // [129]
    ,    0xFFFFFFFF        //: 0 : -------- : Unused  :::://     // [129]
    ,    c_camerah_zeb_dum //: 1 : -------- : THE_DUM :::://     // [129]
    ,    c_camerah_zeb_duh //: 2 : -------- : HOTEL   :::://     // [129]
    ,    c_camerah_zeb_dur //: 3 : te7 == 6 : ROOM    :::://     // [129]
    ,    c_camerah_zeb_du5 //: 4 : te7 == 5 : ------- :::://     // [129]
    ,    c_camerah_zeb_du4 //: 5 : te7 == 4 : ------- :::://     // [129]
    ,    c_camerah_zeb_du3 //: 6 : te7 == 3 : ------- :::://     // [129]
    ,    c_camerah_zeb_du2 //: 7 : te7 == 2 : ------- :::://     // [129]
    ,    c_camerah_zeb_du1 //: 8 : te7 == 1 : ------- :::://     // [129]
    ,    c_camerah_zeb_dut //: 9 : te7 == 0 : ------- :::://     // [129]
    ));;                                                         // [129]
                                                                 // [129]
    //:-------------:#TIMES_PRESSED___TO___ZEB_ENU#:[129]://     // [---]
                                                                 // [---]
                                                                 // [125]
};; //:END_OF_DATA_SECTION[ SEXYCAM ]:::::::::::::::::::::::::// // [125]
                                                                 // [---]
if( /** __ASERVER__ **/ yesnode ){                               // [102]
                                                                 // [102]
    //:NO_DATA://                                                // [102]
};;                                                              // [102]
if( /** __DABITCH__ **/ notnode ){                               // [102]
                                                                 // [102]
    //: TODO: Move DABITCH SQL STRINGS INTO HERE ://             // [102]
};;                                                              // [102]
if( /** __EDIGAME__ **/ notnode ){                               // [102]
                                                                 // [---]
    //:#_WHAT_IS_EDIGAME_#://                                    // [103]
                                                                 // [103]
    var d_edigame_mod =( c_edigame_edi );                        // [103]
                                                                 // [103]
    var d_edigame_edi ={ laxcoma:"[HACK]"                        // [103]
                                                                 // [103]
        /** Members when acting as EDITOR **/                    // [103]
                                                                 // [103]
    };;                                                          // [103]
    var d_edigame_gam ={ laxcoma:"[HACK]"                        // [103]
                                                                 // [103]
        /** Members when acting as GAME   **/                    // [103]
                                                                 // [103]
    };;                                                          // [103]
                                                                // [---]
};;                                                             // [102]
if( /** __KEYMAST__ **/ notnode ){                              // [102]
                                                                // [102]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [114]
    //: TAG[ keymast data | keymastdata | keymast-data ] ://    // [114]
    //: TAG[ keymast_data | keyboard master data       ] ://    // [114]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [114]
                                                                // [114]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [114]
    //: @ark@ : ARow Key           | @lef@ @rig@: X-Axis ://    // [114]
    //: @dvx@ : Direction Vector X | @upp@ @dow@: Y-Axis ://    // [114]
    //: @dvy@ : Direction Vector Y |                     ://    // [114]
    //:::::::::::::::::::::::::::::::::::::::::::::::::::://    // [114]
                                                                // [114]
    var d_keymast_ark_dvx = F_CAR_I32(  4                       // [114]
        , ( 0 - 1 )     //: @ark_lef@ : Arrow Key Left   ://    // [114]
        , (   0   )     //: @ark_upp@ : Arrow Key Upward ://    // [114]
        , ( 0 + 1 )     //: @ark_rig@ : Arrow Key Right  ://    // [114]
        , (   0   )     //: @ark_dow@ : Arrow Key Down   ://    // [114]
    );;                                                         // [114]
    var d_keymast_ark_dvy = F_CAR_I32(  4                       // [114]
        , (   0   )     //: @ark_lef@ : Arrow Key Left   ://    // [114]
        , ( 0 - 1 )     //: @ark_upp@ : Arrow Key Upward ://    // [114]
        , (   0   )     //: @ark_rig@ : Arrow Key Right  ://    // [114]
        , ( 0 + 1 )     //: @ark_dow@ : Arrow Key Down   ://    // [114]
    );;                                                         // [114]
                                                                // [114]
    let k0 =( c_keymast_ark_k_0 );                              // [114]
                                                                // [114]
    ASS((0-1)===d_keymast_ark_dvx[ c_keymast_ark_lef -k0 ]);    // [114]
    ASS(( 0 )===d_keymast_ark_dvx[ c_keymast_ark_upp -k0 ]);    // [114]
    ASS((0+1)===d_keymast_ark_dvx[ c_keymast_ark_rig -k0 ]);    // [114]
    ASS(( 0 )===d_keymast_ark_dvx[ c_keymast_ark_dow -k0 ]);    // [114]
                                                                // [114]
    ASS(( 0 )===d_keymast_ark_dvy[ c_keymast_ark_lef -k0 ]);    // [114]
    ASS((0-1)===d_keymast_ark_dvy[ c_keymast_ark_upp -k0 ]);    // [114]
    ASS(( 0 )===d_keymast_ark_dvy[ c_keymast_ark_rig -k0 ]);    // [114]
    ASS((0+1)===d_keymast_ark_dvy[ c_keymast_ark_dow -k0 ]);    // [114]
                                                                // [---]
};;                                                             // [102]
if( /** __SERGAME__ **/ yesnode ){                              // [102]
                                                                // [102]
    //:NO_DATA://                                               // [102]
};;                                                             // [102]
if( /** __CLIGAME__ **/ notnode ){                              // [102][085]
                                                                // [102][085]
    /** Frame Rate Control **/                                  // [102][085]
                                                                // [102][085]
        var   d_cligame_t_0 ; //:TimeStampBeforeWork://         // [102][085]
        var   d_cligame_t_1 ; //:TimeStampAfterWork ://         // [102][085]
        var   d_cligame_mil ; //:ElapsedMilliseconds://         // [102][085]
        ///   d_cligame_tms ; //:Target Millisecs   ://         // [102][085]
        var   d_cligame_ams ; //:Adjusted/LeftoverMS://         // [102][085]
                                                                // [102][085]
        ASS(  c_cligame_tms === ( 1000 / c_fps ) , "[TMS]" );   // [102][085]
                                                                // [102][085]
                                                                // [102][085]
};;                                                             // [102][085]

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

    function YEL( i_msg ){                                      // [098]
                                                                // [098]
        if( notnode ){ window.alert( i_msg ); };                // [098]
        console.log( "[YEL_MSG]:" ,  i_msg );                   // [098]
    };;                                                         // [098]
    function ASS( i_obj , i_oem ){                              // [098][071]
                                                                // [071]
        if( !HAS( i_obj ) ){                                    // [071]
                                                                // [071]
            MSG( "[MSG:ASSFAIL]"+( i_oem || "" ) );             // [098][071]
            YEL( "[YEL:ASSFAIL]"+( i_oem || "" ) );             // [098]
            ERR( "[ERR:ASSFAIL]"+( i_oem || "" ) );             // [098]
        };;                                                     // [071]
                                                                // [071]
        return(   i_obj );                                      // [071]
    };;                                                         // [071]

    function ASS_NUM( i_num , i_oem ){                           // [109]
                                                                 // [109]
        if( "number" != typeof i_num ){                          // [109]
                                                                 // [109]
            MSG( "[MSG:ASSFAIL]"+( i_oem || "" ) );              // [109]
            YEL( "[YEL:ASSFAIL]"+( i_oem || "" ) );              // [109]
            ERR( "[ERR:ASSFAIL]"+( i_oem || "" ) );              // [109]
        };;                                                      // [109]
                                                                 // [109]
        return( i_num );                                         // [109]
    };;                                                          // [109]

    function ASS_TRINARY( i_num , i_oem ){                       // [115]
                                                                 // [115]
        if( 1                                                    // [115]
        &&  ((0+1) !== i_num )                                   // [115]
        &&  ((0-1) !== i_num )                                   // [115]
        &&  (( 0 ) !== i_num )                                   // [115]
        ){                                                       // [115]
            MSG( "[MSG:NOT_TRINARY]"+( i_oem || "" ) );          // [115]
            YEL( "[YEL:NOT_TRINARY]"+( i_oem || "" ) );          // [115]
            ERR( "[ERR:NOT_TRINARY]"+( i_oem || "" ) );          // [115]
        };;                                                      // [115]
        return( i_num );                                         // [115]
    };;                                                          // [115]

    function ASS_NNI( i_num , i_oem ){                           // [122]
                                                                 // [122]
        //:::::::::::::::::::::::::::::::::::::::::::://         // [122]
        //:[ATF]: Assert Non Negative Integer :[ATF] ://         // [122]
        //:::::::::::::::::::::::::::::::::::::::::::://         // [122]
                                                                 // [122]
        var nni =( 1 /**@INNOCENT_UNTIL_PROVEN_GUILTY@**/ );     // [122]
        if(  i_num <  0  ){                  nni =( 0 );  };     // [122]
        if(!(i_num >= 0 )){                  nni =( 0 );  };     // [122]
        if( Math.floor( i_num ) !== i_num ){ nni =( 0 );  };     // [122]
                                                                 // [122]
        if( nni <= 0 ){                                          // [122]
                                                                 // [122]
            MSG( "[MSG:NOT_NNI]"+( i_oem || "" ) );              // [122]
            YEL( "[YEL:NOT_NNI]"+( i_oem || "" ) );              // [122]
            ERR( "[ERR:NOT_NNI]"+( i_oem || "" ) );              // [122]
        };;                                                      // [122]
        return( i_num );                                         // [122]
    };;                                                          // [122]

    function ASS_CTE( i_n01 , i_n02 , i_oem ){                   // [110]
                                                                 // [110]
        //:::::::::::::::::::::::::::::::::::://                 // [110]
        //: @ASS_CTE@ : ASSert Close_To_Zero ://                 // [110]
        //:::::::::::::::::::::::::::::::::::://                 // [110]
                                                                 // [110]
        var msg =( "[ASS_CTE]" +( i_oem || "" ) );               // [110]
                                                                 // [110]
        if( "number" != typeof i_n01                             // [110]
        ||  "number" != typeof i_n02                             // [110]
        ){                                                       // [110]
            msg =( "[ASS_CTE_NAN]" + msg );                      // [110]
            MSG( msg ); YEL( msg ); ERR( msg );                  // [110]
        };;                                                      // [110]
                                                                 // [110]
        var dif =( i_n01 - i_n02 );                              // [110]
        if( dif < 0 ){ dif = 0 - dif ; };                        // [110]
                                                                 // [110]
        //:----------------------------------------------://     // [110]
        //: 32bits in float32 , 23 bits decimal/mantissa ://     // [110]
        //: 32-23 === 9                                  ://     // [110]
        //: 9 - 1 === 8 , no more than 8 zeros to be safe://     // [110]
        //:----------------------------------------------://     // [110]
                                                                 // [110]
        //:.......0.__ppp : per of per of per of per ....://     // [110]
        if( dif > 0.00001 ){ //:0.00001 === TOLERANCE    ://     // [110]
        //:.......0.12345://                                     // [110]
                                                                 // [110]
            MSG( msg ); YEL( msg ); ERR( msg );                  // [110]
        };;                                                      // [110]
    };;                                                          // [110]

    function VITALDO( i_msg ){                                   // [109]
                                                                 // [109]
        var  msg_vitaldo =( "[VITALDO]:" + i_msg );              // [109]
        MSG( msg_vitaldo );                                      // [109]
        ASS_NUM( c_crash_on_vital_todo , "[?VITALDO?]" );        // [109]
        if(      c_crash_on_vital_todo >= 1 ){                   // [109]
                                                                 // [109]
            YEL( msg_vitaldo );                                  // [109]
            ERR( msg_vitaldo );                                  // [109]
        };;                                                      // [109]
    };;                                                          // [109]
    function MAYBEDO( i_msg ){                                   // [109]
                                                                 // [109]
        var  msg_maybedo =( "[MAYBEDO]:" + i_msg );              // [109]
        MSG( msg_maybedo );                                      // [109]
        ASS_NUM( c_crash_on_maybe_todo , "[?MAYBEDO?]" );        // [109]
        if(      c_crash_on_maybe_todo >= 1 ){                   // [109]
                                                                 // [109]
            YEL( msg_maybedo );                                  // [109]
            ERR( msg_maybedo );                                  // [109]
        };;                                                      // [109]
    };;                                                          // [109]
                                                                                                       
//:=============================:FUNC_BOILERPLATE:[028]+[035]://
//:FUNC_RESIZE_VP0_BOXVIEW:[094]:============================://

    const   F_RES_VP0_BOXVIEW = function                        // [094]
    PRIVATE_F_RES_VP0_BOXVIEW(                                  // [094]
        /**NOARGS**/                                            // [094]
    ){                                                          // [094]
        //:[ATF]:----------------------------------------://    // [094]
        //:                                              ://    // [094]
        //: Take the SHORTER screen dimension and        ://    // [094]
        //: divide it by[ rat (ratio) ], to create a     ://    // [094]
        //: "letter boxxing" effect in our render.       ://    // [094]
        //:                                              ://    // [094]
        //:  VPC : Viewport CANVAS/CLIENT                ://    // [094]
        //:  VP0 : Viewport DEST(inside of VPC)          ://    // [094]
        //:                                              ://    // [094]
        //:----------------------------------------:[ATF]://    // [094]
                                                                // [094]
        var rat =( d_rendopt_boxview_rat );                     // [094]
                                                                // [094]
        var v_wid = d_vpc[x_1]-d_vpc[x_0]+1;   //:vpc_wid://    // [094]
        var v_hig = d_vpc[y_1]-d_vpc[y_0]+1;   //:vpc_hig://    // [094]
                                                                // [094]
        var b_wid =( v_wid );                  //:box_wid://    // [094]
        var b_hig =( v_hig );                  //:box_hig://    // [094]
                                                                // [094]
        if( v_wid > v_hig ){ b_hig=( b_wid / rat ); }else       // [094]
        if( v_hig > v_wid ){ b_wid=( b_hig / rat ); }else       // [094]
        if( v_wid===v_hig ){ b_wid=( v_wid *  1  );             // [094]
                             b_hig=( v_hig / rat ); }else       // [094]
        { ERR("[@EDCL@:2022_07_26]"); };;                       // [094]
                                                                // [094]
        //: #_UNLIKELY_BUT_MATHEMATICALLY_POSSIBLE_# ://        // [094]
        if( b_wid > v_wid ){ b_wid = v_wid ; };                 // [094]
        if( b_hig > v_hig ){ b_hig = v_hig ; };                 // [094]
                                                                // [094]
        var iw2 =( v_wid - b_wid );  //:Inset_Wid * 2://        // [094]
        var ih2 =( v_hig - b_hig );  //:Inset_Hig * 2://        // [094]
        ASS(iw2 >= 0 , "[IW2]"   );                             // [094]
        ASS(ih2 >= 0 , "[IH2]"   );                             // [094]
                                                                // [094]
        var i_w = Math.floor( iw2 / 2.0 ); //: Inset_Wid ://    // [094]
        var i_h = Math.floor( ih2 / 2.0 ); //: Inset_Hig ://    // [094]
                                                                // [094]
        d_vp0[ x_0 ] = ( d_vpc[ x_0 ] + i_w );                  // [094]
        d_vp0[ x_1 ] = ( d_vpc[ x_1 ] - i_w );                  // [094]
        d_vp0[ y_0 ] = ( d_vpc[ y_0 ] + i_h );                  // [094]
        d_vp0[ y_1 ] = ( d_vpc[ y_1 ] - i_h );                  // [094]
    };;                                                         // [094]
//:============================:FUNC_RESIZE_VP0_BOXVIEW:[094]://
//:FUNC_RESIZE_CANVAS:[032]+[035]:===========================://

    //:@BAD_DEP_ORD@ #_RES_CAN_BEFORE_CAMERAH_INCLUDED_#://      // [125]

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
                                                                // [---]
            d_camerah_dir  =(1) ;                               // [120]
        if( d_camerah_use >= 1 ){                               // [120]
                             //:-------------------://          // [120]
            F_CAMERAH_VP1(); //: CAMERAH ==> d_vp1 ://          // [125][120]
        };;                  //:-------------------://          // [120]
                                                                // [---]
        if( HAS( a_g.wgl ) ){                                   // [080]

            d_vpc[ x_0 ]=( 0 );                                 // [092]
            d_vpc[ y_0 ]=( 0 );                                 // [092]
            d_vpc[ x_1 ]=( wid - 1 /**@INC_REC@**/ );           // [092]
            d_vpc[ y_1 ]=( hig - 1 /**@INC_REC@**/ );           // [092]
                                                                // [092]
            console.log("[VPC_UPDATE]");                        // [092]
            a_g.wgl.viewport(                                   // [---][080]
                ( d_vpc[ x_0 ]                    )  //:@org@://// [092][080]
            ,   ( d_vpc[ y_0 ]                    )  //:@org@://// [092][080]
            ,   ( d_vpc[ x_1 ] - d_vpc[ x_0 ] + 1 )  //:@wid@://// [092][080]
            ,   ( d_vpc[ y_1 ] - d_vpc[ y_0 ] + 1 )  //:@hig@://// [092][080]
            );;                                                 // [---][080]    

            //:#_INSET_VP0_WITHIN_VPC_TO_LETTERBOX_#://         // [094]
                                                                // [094]
            d_vp0[ x_0 ]=( d_vpc[ x_0 ] );                      // [094]
            d_vp0[ y_0 ]=( d_vpc[ y_0 ] );                      // [094]
            d_vp0[ x_1 ]=( d_vpc[ x_1 ] );                      // [094]
            d_vp0[ y_1 ]=( d_vpc[ y_1 ] );                      // [094]
            if( d_rendopt_boxview_onn >= 1 ){                   // [094]
                F_RES_VP0_BOXVIEW();                            // [094]
            };;                                                 // [094]
        };;                                                     // [080]
                                                                // [---]
        //- TOO LATE TO FLAG HERE : d_camerah_dir =( 1 );-//    // [120]
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
                                    //:###DTICK_INITED###://    // [090]
       
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

    const   F_ARTGIRL_UNI_PUT = function                        // [121]
    PRIVATE_F_ARTGIRL_UNI_PUT(                                  // [121]
                                                                // [121]
        /** VOID **/                                            // [121]
    ){                                                          // [121]
        let wgl = d_artgirl.wgl ;                               // [121]
                                                                // [121]
        wgl.uniform1ui(      d_tik_loc , d_tik     );           // [121][091]
        wgl.uniform4uiv(     d_vpc_loc , d_vpc     );           // [121][091]
        wgl.uniform4uiv(     d_vp0_loc , d_vp0     );           // [121][091]
        wgl.uniform4uiv(     d_vp1_loc , d_vp1     );           // [121][091]
        wgl.uniform4uiv( d_camwall_loc , d_camwall );           // [121]
    };;                                                         // [121]

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
                a_g.ren_pin=( i_ren );                          //      [086]
                                                                //      [---]
                var act_pid =( a_g.arr_pid[ a_g.ren_pin ] );    //      [091]
                ASS(act_pid === pid , "[XP8:GETAWAY]"     );    //      [091]
                let GUL = wgl.getUniformLocation.bind( wgl);    //      [091]
                                                                //      [---]
                F_RES_CAN();    //:#CPU_UPDATE_B4_GPUSYNC#://   //      [092]
                                                                //      [---]
                d_tik_loc     = GUL(  pid , "d_tik"     );      // [121][091]
                d_vpc_loc     = GUL(  pid , "d_vpc"     );      // [121][091]
                d_vp0_loc     = GUL(  pid , "d_vp0"     );      // [121][091]
                d_vp1_loc     = GUL(  pid , "d_vp1"     );      // [121][091]
                d_camwall_loc = GUL(  pid , "d_camwall" );      // [121]
                                                                // [---]
                F_ARTGIRL_UNI_PUT();  //:PUT_ONTO_GPU://        // [121]
                                                                // [---]
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
                                                                // [---]
            //:[#NOW_OPTIMIZED#][#PMOITROAE#]://                // [091][086]
                                                                // [091]
                F_ARTGIRL_UNI_PUT();  //:PUT_ONTO_GPU://        // [121]
                                                                // [---]
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
//|09|09|09|09|09|09|09|09|09|SUBS|09|09|09|09|09|09|09|09|09|// // [109]
//|[ @$$$$$@ ]                                               |// // [109]
//|__CAMERAH__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |// // [109]
//|[ @$$$$$@ ]                                               |// // [109]
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [109]
    //:LOCAL_INDEX:==========================================:// // [113]
    //:                                                      :// // [113]
    //:     CAMERAH_UPDATE                                   :// // [113]
    //:     CAMERAH_VP1                                      :// // [113]
    //:     CAMERAH_PAN    ( pan  / panning )                :// // [117][113]
    //:     CAMERAH_ZOM    ( zoom / zooming )                :// // [117]
    //:                                                      :// // [113]
    //:==========================================:LOCAL_INDEX:// // [113]

    const   F_CAMERAH_ZOOM = "[FIX:CAMERAH_ZOM]" ;               // [117]

    const     F_CAMERAH_ZOM = function                           // [117]
    F_PRIVATE_F_CAMERAH_ZOM(                                     // [117]
                                                                 // [117]
        i_ioo   //: @ioo@ : In_Or_Out? ://                       // [117]
    ){                                                           // [117]
        if( d_eci >= 1 ){                                        // [117]
                                                                 // [117]
            ASS_TRINARY( i_ioo , "[i_ioo]" );                    // [117]
        };;                                                      // [117]
                                                                 // [117]
        d_camerah_dir =( 1 ); //:@_DIRTY_FLAG_@://               // [117]
                                                                 // [117]
        var perstep = ( 0.01 * i_ioo );                          // [117]
        var per_new =( d_camerah.camzoom + perstep );            // [117]
                                                                 // [117]
        if( per_new < ( 0 - 1.0 ) || per_new > ( 0 + 1.0 ) ){    // [117]
                                                                 // [117]
            //: DO_NOTHING_PERCENT_OUT_OF_BOUNDS ://             // [117]
        }else{                                                   // [117]
                                                                 // [117]
            d_camerah.camzoom = per_new ;                        // [117]
        };;                                                      // [117]
    };;                                                          // [117]

    const   F_CAMERAH_MOV = "[FIX:CAMERAH_PAN]" ;                // [117]

    const     F_CAMERAH_PAN = function                           // [113]
    F_PRIVATE_F_CAMERAH_PAN(                                     // [113]
                                                                 // [113]
        i_pax //: INPUT.Pan.X ://                                // [113]
    ,   i_pay //: INPUT.Pan.Y ://                                // [113]
    ){                                                           // [113]
        if( d_eci >= 1 ){                                        // [113]
                                                                 // [113]
            ASS((0-1)===i_pax                                    // [113]
            ||  (0+1)===i_pax                                    // [113]
            ||  ( 0 )===i_pax , "[I_PAX]" );;                    // [113]
                                                                 // [113]
            ASS((0-1)===i_pay                                    // [113]
            ||  (0+1)===i_pay                                    // [113]
            ||  ( 0 )===i_pay , "[I_PAY]" );;                    // [113]
        };;                                                      // [113]
                                                                 // [---]
        d_camerah_dir =( 1 ); //:@_DIRTY_FLAG_@://               // [115]
                                                                 // [---]
        let     cam =( d_camerah /**@CAM_PAN@**/          );     // [113]
        let     b_0 =( 0 /**LowerDiscreteUnitBound**/     );     // [113]
        let     b_1 =( c_camerah_maxunit /**UpperBou**/   );     // [113]
        var pan_fac =( 1 ); //:SEE[ @pan_fac@ ]://               // [113]
        var zebspan =( d_camerah_zeb_zes[ cam.zebasis ]   );     // [113]
        var n_x,n_y ; //: @n_x@@n_y@ : NewX , NewY       ://     // [113]
        /// n_a     ; //: @n_a@: New[x|y]ABSOLUTEVALUE   ://     // [113]
        /// c_s     ; //: @c_s@: Camera Shake            ://     // [113]
                                                                 // [113]
        //:Calc_Pan_Speed_Factor:[113]:------------------://     // [113]
                                                                 // [113]
            if( cam.camsnap >= 1 ){                              // [113]
                                                                 // [113]
                pan_fac =( zebspan * 1 );                        // [113]
            }else                                                // [113]
            if( cam.camsnap <= 0 ){                              // [113]
                                                                 // [113]
                pan_fac =( zebspan / 8 );                        // [113]
            }else{                                               // [113]
                ERR("[CAMPANPROBLEMS]");                         // [113]
            };;                                                  // [113]
        //:------------------:Calc_Pan_Speed_Factor:[113]://     // [113]
        //:Translate_Camera_Org:[113]:-------------------://     // [113]
                                                                 // [113]
            //:::::::::::::::::::::::::::::::::::::::::::://     // [113]
            //: @nopan_x@ : No Panning Happened X-axis   ://     // [113]
            //: @nopan_y@ : No Panning Happened Y-axis   ://     // [113]
            //:           : 0 : nopan flag === NOT_SET   ://     // [113]
            //:           :0-1: nopan flag === MIN_HIT   ://     // [113]
            //:           :0+1: nopan flag === MAX_HIT   ://     // [113]
            //:::::::::::::::::::::::::::::::::::::::::::://     // [113]
                                                                 // [113]
            let   M_F = Math.floor ;                             // [122]
            n_x = M_F( cam.camdu_x + ( i_pax * pan_fac ) );      // [122][113]
            n_y = M_F( cam.camdu_y + ( i_pay * pan_fac ) );      // [122][113]
                                                                 // [---]
            //:#_CAMERA_STRESS_CODE_DIDNT_BELONG_HERE_#://       // [123]
                                                                 // [---]
            if( n_x < b_0 || n_x > b_1 ){  //:#_OOB_CAM_#://     // [!#!][119][118][113]
                                                                 // [113]
                if( n_x < b_0 ){ cam.nopan_x =( 0 - 1 );  };     // [113]
                if( n_x > b_1 ){ cam.nopan_x =( 0 + 1 );  };     // [113]
            }else{                                               // [113]
                cam.nopan_x =(  0  );                            // [113]
                cam.camdu_x =( n_x );                            // [113]
            };;                                                  // [113]
            if( n_y < b_0 || n_y > b_1 ){  //:#_OOB_CAM_#://     // [!#!][119][118][113]
                                                                 // [113]
                if( n_y < b_0 ){ cam.nopan_y =( 0 - 1 ); };      // [113]
                if( n_y > b_1 ){ cam.nopan_y =( 0 + 1 ); };      // [113]
            }else{                                               // [113]
                cam.nopan_y =(  0  );                            // [113]
                cam.camdu_y =( n_y );                            // [113]
            };;                                                  // [113]
         //:------------------:Translate_Camera_Org:[113]://     // [113]
    };;                                                          // [113]

    const   F_CAMERAH_START       = "[FIX:CAMERAH_HOSTART]" ;    // [117][109]
    const   F_CAMERAH_BEGIN       = "[FIX:CAMERAH_HOSTART]" ;    // [117][109]
    const   F_CAMERAH_TELEPORT    = "[FIX:CAMERAH_HOSTART]" ;    // [117][109]
    const   F_CAMERAH_HOTEL_START = "[FIX:CAMERAH_HOSTART]" ;    // [117][109]

    const   F_CAMERAH_HOSTART = function                         // [109]
    PRIVATE_F_CAMERAH_HOSTART(                                   // [109]
                                                                 // [109]
        /**VOID**/                                               // [109]
    ){                                                           // [109]
        //:[ATF]:----------------------------------------://     // [109]
        //: Eventually Level Packs Will Encode A Default ://     // [109]
        //: start point for when you teleport into one.  ://     // [109]
        //: For now, just arbitrarily hard code a point. ://     // [109]
        //:----------------------------------------:[ATF]://     // [109]
                                                                 // [109]
        d_camerah.camdu_x =Math.floor(  c_dum / 2  );            // [109]
        d_camerah.camdu_y =Math.floor(  c_dum / 2  );            // [109]
    };;                                                          // [109]
                                                                 // [109]
    const F_CAMERAH_UPDATE           = "[FIX:F_CAMERAH_VP1]" ;   // [109]
    const F_CAMERAH_UPDATE_VIEWPORTS = "[FIX:F_CAMERAH_VP1]" ;   // [109]
                                                                 // [109]
    const   F_CAMERAH_VP1 = function                             // [109]
    PRIVATE_F_CAMERAH_VP1(                                       // [109]
                                                                 // [109]
        /**VOID**/                                               // [109]
    ){                                                           // [109]
        //:[ATF]:----------------------------------------://     // [109]
        //:                                              ://     // [109]
        //:     Modifies[ VP1 ]on[ CPU_SIDE_ONLY ]       ://     // [109]
        //:     to make[ VP1 ] reflect the state         ://     // [109]
        //:     of [ d_camerah ].                        ://     // [109]
        //:                                              ://     // [109]
        //:----------------------------------------:[ATF]://     // [109]
        if( d_eci >= 1 ){                                        // [111]
                                                                 // [111]
            if( d_camerah.camdu_x > c_camerah_maxunit            // [111]
            ||  d_camerah.camdu_y > c_camerah_maxunit            // [111]
            ||  d_camerah.camdu_x < (  0  )                      // [111]
            ||  d_camerah.camdu_y < (  0  )                      // [111]
            ){                                                   // [111]
                //: #_OOB_CAM_# ://                              // [118]
                ERR("[CAMERA_ORIGIN_OUT_OF_BOUNDS]");            // [111]
            };;                                                  // [111]
        };;                                                      // [111]
                                                                 // [---]
        var bou_fix =( 0 /**TrueIfBoundCorrectionMade**/ );      // [118]
        let new_vp1 = d_camerah_vp1 ; //:@POINTER@://            // [118]
        let cam_org = d_camerah_org ; //:@POINTER@://            // [118]
                                                                 // [---]
        //:Figure out "ZeroSize" ://                             // [109]
                                                                 // [109]
        var zes =( 0 ); //: @zes@ : zero span in @D_U@   ://     // [109]
        zes = d_camerah_zeb_zes[ d_camerah.zebasis ];            // [109]
                                                                 // [---]
                                                                 // [110]
        var  zom = d_camerah.camzoom ;                           // [110]
        ASS( zom >= (0 - 1.0) ); //:MAX_ZOOM_OUT://              // [110]
        ASS( zom <= (0 + 1.0) ); //:MAX_ZOOM_INN://              // [110]
                                                                 // [110]
                   //:@dun@::::::::::::::::::::::::::://         // [110]
        var  dun ; //:DiscreteUnitsOfMajorOrMinorAxis://         // [110]
                   //:We don't actually know yet.    ://         // [110]
                   //::::::::::::::::::::::::::::::::://         // [110]
                                                                 // [110]
        var  dun_wid =( 0-666 ); //:UNKNOWN://                   // [110]
        var  dun_hig =( 0-666 ); //:UNKNOWN://                   // [110]
                                                                 // [110]
        //:Uknown_VP1_Edge_Length:[110]:-----------------://     // [110]
                                                                 // [110]
            if( 0.0 === zom ){ //:NEUTRAL_ZOOM://                // [110]
                                                                 // [110]
                dun =( zes );                                    // [110]
            }else                                                // [110]
            if( zom > 0.0   ){     //:ZOOM_INN://                // [110]
                                                                 // [110]
                dun =( zes - ( zom * zes ) );                    // [110]
                if( dun <= 0 ){ dun = 2 ; };                     // [110]
            }else                                                // [110]
            if( zom < 0.0   ){     //:ZOOM_OUT://                // [110]
                                                                 // [110]
                //:@lov@ : LeftOVer://                           // [110]
                var lov =( c_dum - zes );                        // [110]
                dun =( zes + ( (0.0-zom) * lov ) );              // [110]
            }else{                                               // [110]
                ERR("[WTF:EDCL:2022_08_05]");                    // [110]
            };;                                                  // [110]
        //:-----------------:Uknown_VP1_Edge_Length:[110]://     // [110]
        //:Inscribe_Circumscribe_None:[110]:-------------://     // [110]
                                                                 // [110]
            let c_c = d_camerah.cir_cum ;                        // [110]
                                                                 // [110]
            var vp0_wid = d_vp0[ x_1 ] - d_vp0[ x_0 ] + 1 ;      // [110]
            var vp0_hig = d_vp0[ y_1 ] - d_vp0[ y_0 ] + 1 ;      // [110]
            var vp0_map =(0-666); //:@vp0_map@://                // [110]
                                                                 // [110]
            if( 0+c_c+0 === c_camerah_cir_cum_inn ){             // [110]
                                                                 // [110]
                //:--------------------------------------://     // [110]
                //:                                      ://     // [110]
                //: The LONGEST AXIS of[ VP0 ] is the    ://     // [110]
                //: axis of[ VP1 ]that will be set       ://     // [110]
                //: to[ dun ].                           ://     // [110]
                //:                                      ://     // [110]
                //: +--------+--------+--------+         ://     // [110]
                //: |                          |         ://     // [110]
                //: |                          |         ://     // [110]
                //: |                          |         ://     // [110]
                //: ++-------+--------+-------++         ://     // [110]
                //: ||       |        |       ||         ://     // [110]
                //: ||       |        |       ||  [HOR]  ://     // [110]
                //: ++-------+--------+-------++         ://     // [110]
                //: ||<-------- dun --------->||         ://     // [110]
                //: ||<-------- zeb --------->||         ://     // [110]
                //: |                          |         ://     // [110]
                //: +--------+--------+--------+         ://     // [110]
                //:                                      ://     // [110]
                //: +--------+--------+--------+         ://     // [110]
                //: |        +--------+ --- ---|         ://     // [110]
                //: |        |        |  ^   ^ |         ://     // [110]
                //: |        |        |  |   | |         ://     // [110]
                //: +        +--------+  |   | +         ://     // [110]
                //: |        |        |  |   | |         ://     // [110]
                //: |        |        | dun zeb|  [VER]  ://     // [110]
                //: +        +--------+  |   | +         ://     // [110]
                //: |        |        |  |   | |         ://     // [110]
                //: |        |        |  V   V |         ://     // [110]
                //: |        +--------+ --- ---|         ://     // [110]
                //: +--------+--------+--------+         ://     // [110]
                //:--------------------------------------://     // [110]
                                                                 // [110]
                if( vp0_wid >= vp0_hig ){   //:HORIZONTAL://     // [110]
                                                 //:[HOR]://     // [110]
                    vp0_map =( vp0_hig / vp0_wid );              // [110]
                    ASS( vp0_map >= 0.0 && vp0_map <= 1.0 );     // [110]
                                                                 // [110]
                    dun_wid = ( dun           );//:@MAJA@://     // [110]
                    dun_hig = ( dun * vp0_map );//:@MINA@://     // [110]
                }else                                            // [110]
                if( vp0_hig  > vp0_wid ){     //:VERTICAL://     // [110]
                                                 //:[VER]://     // [110]
                    vp0_map =( vp0_wid / vp0_hig );              // [110]
                    ASS( vp0_map >= 0.0 && vp0_map <= 1.0 );     // [110]
                                                                 // [110]
                    dun_wid = ( dun * vp0_map );//:@MINA@://     // [110]
                    dun_hig = ( dun           );//:@MAJA@://     // [110]
                }else{                                           // [110]
                    ERR("[EDCL:CIR_CUM_INN]");                   // [110]
                };;                                              // [110]
                                                                 // [110]
            }else                                                // [110]
            if( 0+c_c+0 === c_camerah_cir_cum_out ){             // [110]
                //:----------------+---------------------://     // [110]
                //:                |                     ://     // [110]
                //:                |  +---+              ://     // [110]
                //:                |  |   |              ://     // [110]
                //: +---+---+---+  |  +---+              ://     // [110]
                //: |   |[ ]|   |  |  |[ ]|  [VER]       ://     // [110]
                //: +---+---+---+  |  +---+              ://     // [110]
                //:                |  |   |              ://     // [110]
                //:     [HOR]      |  +---+              ://     // [110]
                //:----------------+---------------------://     // [110]
                                                                 // [110]
                if( vp0_wid >= vp0_hig ){   //:HORIZONTAL://     // [110]
                                                 //:[HOR]://     // [110]
                    let fac ; //:ScaleFactor://                  // [110]
                                                                 // [110]
                    //:::::::::::::::::::::::::::::::::::://     // [110]
                    //: vp0_hig * fac === dun            ://     // [110]
                    //: fac === dun / vp0_hig            ://     // [110]
                    //:                                  ://     // [110]
                    //: vp0_hig * fac === dun_hig        ://     // [110]
                    //: vp0_wid * fac === dun_wid        ://     // [110]
                    //:::::::::::::::::::::::::::::::::::://     // [110]
                                                                 // [110]
                    fac = dun / vp0_hig ;                        // [110]
                                                                 // [110]
                    dun_wid = ( vp0_wid * fac );//:SCALED://     // [110]
                    dun_hig = ( dun           );//:AS__IS://     // [110]
                                                                 // [110]
                    ASS_CTE( vp0_hig * fac , dun_hig ,"[HOR]");  // [110]
                }else                                            // [110]
                if( vp0_hig  > vp0_wid ){     //:VERTICAL://     // [110]
                                                 //:[VER]://     // [110]
                    let fac ; //:ScaleFactor://                  // [110]
                                                                 // [110]
                    //:---------------------------://            // [110]
                    //: vp0_wid * fac === dun     ://            // [110]
                    //: fac === dun / vp0_wid     ://            // [110]
                    //:                           ://            // [110]
                    //: vp0_wid * fac === dun_wid ://            // [110]
                    //: vp0_hig * fac === dun_hig ://            // [110]
                    //:---------------------------://            // [110]
                                                                 // [110]
                    fac = dun / vp0_wid ;                        // [110]
                                                                 // [110]
                    dun_wid = ( dun           );//:AS__IS://     // [110]
                    dun_hig = ( vp0_hig * fac );//:SCALED://     // [110]
                                                                 // [110]
                    ASS_CTE( vp0_wid * fac , dun_wid ,"[VER]");  // [110]
                                                                 // [110]
                }else{                                           // [110]
                    ERR("[EDCL:CIR_CUM_INN]");                   // [110]
                };;                                              // [110]
                                                                 // [110]
            }else                                                // [110]
            if( 0+c_c+0 === c_camerah_cir_cum_not ){             // [110]
                                                                 // [110]
                //:::::::::::::::::::::::::::::::::::::::://     // [110]
                //: VP1 is going to end up perfectly     ://     // [110]
                //: square, and very likely your         ://     // [110]
                //: render will be squashed or           ://     // [110]
                //: stretched.                           ://     // [110]
                //:::::::::::::::::::::::::::::::::::::::://     // [110]
                                                                 // [110]
                dun_wid = dun ;                                  // [110]
                dun_hig = dun ;                                  // [110]
            }else{                                               // [110]
                ERR("[INVALID_CIR_CUM_ENUM]");                   // [110]
            };;                                                  // [110]
        //:-------------:Inscribe_Circumscribe_None:[110]://     // [110]
        //:Camera_Snapping:[111]:------------------------://     // [111]
                                                                 // [111]
            let a_x =( 0-666 ); //: @a_x@ : Adjusted X   ://     // [111]
            let a_y =( 0-666 ); //: @a_y@ : Adjusted Y   ://     // [111]
                                                                 // [111]
            if( d_camerah.camsnap <= 0 ){                        // [111]
                                                                 // [111]
                a_x =( d_camerah.camdu_x );                      // [111]
                a_y =( d_camerah.camdu_y );                      // [111]
            }else                                                // [111]
            if( d_camerah.camsnap >= 1 ){                        // [111]
                //:::::::::::::::::::::::::::::::::::::::://     // [111]
                //: @t_x@@t_y@ : TileX , TileY           ://     // [111]
                //: @h_z@ : Half zes (zerospan)          ://     // [111]
                //: @sox@@soy@ : SnappedOrigin( x|y )    ://     // [111]
                //:::::::::::::::::::::::::::::::::::::::://     // [111]
                                                                 // [111]
                let c_h = d_camerah ;                            // [111]
                let t_x = Math.floor( c_h.camdu_x / zes );       // [111]
                let t_y = Math.floor( c_h.camdu_y / zes );       // [111]
                let h_z = Math.floor(         zes /  2  );       // [111]
                                                                 // [111]
                a_x = ( t_x * zes )+(h_z)-( 1 ); //:@sox@://     // [111]
                a_y = ( t_y * zes )+(h_z)-( 1 ); //:@soy@://     // [111]
                                                                 // [111]
                //:--------------------------------------://     // [111]
                //:                                      ://     // [111]
                //:  |<----- 4 ----->| @EXAMPLE_PROBLEM@ ://     // [111]
                //:  |<---- zes ---->|                   ://     // [111]
                //:  |               |                   ://     // [111]
                //:  +---+---+---+---+                   ://     // [111]
                //:  | 0 | 1 | 2 | 3 |                   ://     // [111]
                //:  +---+---+---+---+                   ://     // [111]
                //:        ^                             ://     // [111]
                //:        |                             ://     // [111]
                //:        +---( 0 * 4 )+( 2 )-( 1 );    ://     // [111]
                //:            (t_x*zes)+(h_z)-( 1 );    ://     // [111]
                //:--------------------------------------://     // [111]
            }else{                                               // [111]
                                                                 // [111]
                ERR("[ONONONONONONO]");                          // [111]
            };;                                                  // [111]
                                                                 // [111]
            //:[ d_camerah_org ]AKA[ cam_org ]://                // [118]
            cam_org[ x_0 ]=( a_x + 0 );                          // [118][111]
            cam_org[ y_0 ]=( a_y + 0 );                          // [118][111]
            cam_org[ x_1 ]=( a_x + 1 );                          // [118][111]
            cam_org[ y_1 ]=( a_y + 1 );                          // [118][111]
                                                                 // [111]
        //:------------------------:Camera_Snapping:[111]://     // [111]
        //:- - - - - - - - - - - -- - - - - - - - - - - -://     // [---][---] 
        //:Put_It_All_Together:[112]:--------------------://     //      [112]
            {                                                    //      [112]
                let m =( c_dum );                                //      [112]
                if( dun_wid <= 0 ){ ERR("[DUN_WID::0]" ); };     //      [112]  
                if( dun_hig <= 0 ){ ERR("[DUN_HIG::0]" ); };     //      [112]
                if( dun_wid  > m ){ ERR("[DUN_WID::m]" ); };     //      [112]
                if( dun_hig  > m ){ ERR("[DUN_HIG::m]" ); };     //      [112]
            }                                                    //      [112]
                                                                 //      [112]
            let h_w =Math.floor( dun_wid / 2 );  //:@h_w@://     //      [112]
            let h_h =Math.floor( dun_hig / 2 );  //:@h_h@://     //      [112]
                                                                 //      [112]
                //:--------------------------------------://     //      [112]
                //:  Example: dun_wid == dun_hig == 04   ://     //      [112]
                //:  Then   : h_w == 2 , h_h == 2 .      ://     //      [112]
                //:                                      ://     //      [112]
                //:         +1         -1                ://     //      [112]
                //:          |          |                ://     //      [112]
                //:      [2][+] [0][ ] [ ][ ]            ://     //      [112]
                //:      [ ][ ] [ ][1] [-][2]            ://     //      [112]
                //:       |  |          |  |             ://     //      [112]
                //:      -2  |          | +2             ://     //      [112]
                //:          |<-- 04 -->|                ://     //      [112]
                //:--------------------------------------://     //      [112]
                                                                 //      [112]
            //:[ d_camerah_org ]AKA[ cam_org ]://                //      [118]
            new_vp1[ x_0 ] =( cam_org[ x_0 ] - h_w+1 );          // [119][118][112]
            new_vp1[ y_0 ] =( cam_org[ y_0 ] - h_h+1 );          // [119][118][112]
            new_vp1[ x_1 ] =( cam_org[ x_1 ] + h_w-1 );          // [119][118][112]
            new_vp1[ y_1 ] =( cam_org[ y_1 ] + h_h-1 );          // [119][118][112]
                                                                 //      [112]
        //:--------------------:Put_It_All_Together:[112]://     //      [112]
        //:#_NOPAN_CAMWALL_MAG_#:[121]:------------------://     //      [121]
        {                                                        //      [122]  
                                                                 // [---]
            let b_0 =(   0   );  //: @b_0@ : INC_BOU_MIN ://     // [123]
            let b_1 =(c_dum-1);  //: @b_1@ : INC_BOU_MAX ://     // [123]
            let c_w = d_camwall; //: @SHORTHAND_MACRO@   ://     // [123][122]
                                                                 // [---]
            c_w[ x_0 ]=( 0 );   ASS(0===d_camwall[ x_0 ]);       // [123][122][121]
            c_w[ x_1 ]=( 0 );   ASS(0===d_camwall[ x_1 ]);       // [123][122][121]
            c_w[ y_0 ]=( 0 );   ASS(0===d_camwall[ y_0 ]);       // [123][122][121]
            c_w[ y_1 ]=( 0 );   ASS(0===d_camwall[ y_1 ]);       // [123][122][121]
                                                                 // [---]
            let e_l =( new_vp1[ x_0 ] );  //:@edg_lef@://        // [123]
            let e_r =( new_vp1[ x_1 ] );  //:@edg_rig@://        // [123]
            let e_t =( new_vp1[ y_0 ] );  //:@edg_top@://        // [123]
            let e_b =( new_vp1[ y_1 ] );  //:@edg_bot@://        // [123]
                                                                 // [---]
            //: @ASS_NNI@ : Assert Non-Negative-Int ://          // [122]
            let A =( ASS_NNI /**[WAI]:CameraStress**/ );         // [123]
                                                                 // [---]
            if( e_l < b_0 ){ c_w[x_0]=A(b_0-e_l);};              // [123][122][121]
            if( e_r > b_1 ){ c_w[x_1]=A(e_r-b_1);};              // [123][122][121]
                                                                 // [---]
            if( e_t < b_0 ){ c_w[y_0]=A(b_0-e_t);};              // [123][122][121]
            if( e_b > b_1 ){ c_w[y_1]=A(e_b-b_1);};              // [123][122][121]
                                                                 // [---]
        }                                                        //      [122]
        //:------------------:#_NOPAN_CAMWALL_MAG_#:[121]://     //      [121]
        //:VP1_Out_Of_Bounds_Shift:[112]:----------------://     //      [112]
        {                                                        //      [112]
            let  b_0 =(   0   ); //: @b_0@ : INC_BOU_MIN ://     //      [112]
            let  b_1 =(c_dum-1); //: @b_1@ : INC_BOU_MAX ://     //      [112]
            let  duo =( 0-666 ); //: @duo@ : @D_U@Overflo://     //      [112]
                                                                 //      [112]
            if( new_vp1[ x_0 ] < b_0                             // [119][112]
            &&  new_vp1[ x_1 ] > b_1                             // [119][112]
            ){  ERR("[IM_FUCKING_POSSIBLE:AXIS_X]"); };          //      [112]
            if( new_vp1[ y_0 ] < b_0                             // [119][112]
            &&  new_vp1[ y_1 ] > b_1                             // [119][112]
            ){  ERR("[IM_FUCKING_POSSIBLE:AXIS_Y]"); };          //      [112]
                                                                 //      [112]
            //:VP1_SHIFT:LEF_RIG:[112]:------------------://     //      [112]
                                                                 //      [112]
                if( new_vp1[ x_0 ] < b_0 ){    //:OOB_LEF://     // [119][112]
                                           //:#_OOB_CAM_#://     //      [118]
                    duo =( b_0 - new_vp1[ x_0 ] );               // [119][112]
                    ( new_vp1[ x_0 ] )+=(  duo  );               // [119][112]
                    ( new_vp1[ x_1 ] )+=(  duo  );               // [119][112]
                                                                 //
                    bou_fix=( 1 );                               //      [118]
                }else                                            //      [112]
                if( new_vp1[ x_1 ] > b_1 ){    //:OOB_RIG://     // [119][112]
                                           //:#_OOB_CAM_#://     //      [118]
                    duo =( new_vp1[ x_1 ] - b_1 );               // [119][112]
                    ( new_vp1[ x_0 ] )-=(  duo  );               // [119][112]
                    ( new_vp1[ x_1 ] )-=(  duo  );               // [119][112]
                                                                 //
                    bou_fix=( 1 );                               //      [118]
                }else{                                           //      [112]
                    //: O_K:DO_NOTHING:X_AXIS://                 //      [112]
                };;                                              //      [112]
            //:------------------:[112]:VP1_SHIFT:LEF_RIG://     //      [112]
            //:VP1_SHIFT:TOP_BOT:[112]:------------------://     //      [112]
                                                                 //      [112]
                if( new_vp1[ y_0 ] < b_0 ){    //:OOB_TOP://     // [119][112]
                                           //:#_OOB_CAM_#://     //      [118]
                    duo =( b_0 - new_vp1[ y_0 ] );               // [119][112]
                    ( new_vp1[ y_0 ] )+=(  duo  );               // [119][112]
                    ( new_vp1[ y_1 ] )+=(  duo  );               // [119][112]
                                                                 //
                    bou_fix=( 1 );                               //      [118]
                }else                                            //      [112]
                if( new_vp1[ y_1 ] > b_1 ){    //:OOB_BOT://     // [119][112]
                                           //:#_OOB_CAM_#://     //      [118]
                    duo =( new_vp1[ y_1 ] - b_1 );               // [119][112]
                    ( new_vp1[ y_0 ] )-=(  duo  );               // [119][112]
                    ( new_vp1[ y_1 ] )-=(  duo  );               // [119][112]
                                                                 //      [119]
                    bou_fix=( 1 );                               //      [118]
                }else{                                           //      [112]
                    //: O_K:DO_NOTHING:Y_AXIS://                 //      [112]
                };;                                              //      [112]
            //:------------------:VP1_SHIFT:TOP_BOT:[112]://     //      [112]
        }                                                        //      [112]
        //:----------------:VP1_Out_Of_Bounds_Shift:[112]://     //      [112]
        //:Optional_Logging:[118]:-----------------------://     //      [---]
                                                                 //      [118]
            if( bou_fix >= 1 ){                                  //      [118]
                                                                 //      [118]
                console.log( "[VP1_BOUNDS_FIXED]" );             //      [118]
            };;                                                  //      [118]
        //:-----------------------:Optional_Logging:[118]://     //      [---]
        //:SAVE_CHANGES_TO_VP1:[119]:--------------------://     // [119]
        {                                                        // [119]
            if( d_bug >= 1 ){                                    // [119]
                let u =( c_dum-1 );  //: U : Upper Bound ://     // [119]
                let E =( ERR );                                  // [119]
                                                                 // [119]
                if( new_vp1[ x_0 ] < 0 ){ E("[NV1:x_0]"); };     // [119]
                if( new_vp1[ y_0 ] < 0 ){ E("[NV1:y_0]"); };     // [119]
                if( new_vp1[ x_1 ] > u ){ E("[NV1:x_1]"); };     // [119]
                if( new_vp1[ y_1 ] > u ){ E("[NV1:y_1]"); };     // [119]
            };;                                                  // [119]
                                                                 // [119]
            d_vp1[ x_0 ]=( new_vp1[ x_0 ] );                     // [119]
            d_vp1[ y_0 ]=( new_vp1[ y_0 ] );                     // [119]
            d_vp1[ x_1 ]=( new_vp1[ x_1 ] );                     // [119]
            d_vp1[ y_1 ]=( new_vp1[ y_1 ] );                     // [119]
        }                                                        // [119]
        //:--------------------:SAVE_CHANGES_TO_VP1:[119]://     // [119]
        //:Sanity_Check:[118]:---------------------------://     //      [118]
                                                                 //      [118]
        ASS(d_camerah_org[ x_0 ]===cam_org[ x_0 ],"[COX0]");     //      [118]
        ASS(d_camerah_org[ x_1 ]===cam_org[ x_1 ],"[COX1]");     //      [118]
        ASS(d_camerah_org[ y_0 ]===cam_org[ y_0 ],"[COY0]");     //      [118]
        ASS(d_camerah_org[ y_1 ]===cam_org[ y_1 ],"[COY1]");     //      [118]
                                                                 //      [---]
        ASS(d_camerah_vp1[ x_0 ]===new_vp1[ x_0 ],"[V_X0]");     // [119]
        ASS(d_camerah_vp1[ x_1 ]===new_vp1[ x_1 ],"[V_X1]");     // [119]
        ASS(d_camerah_vp1[ y_0 ]===new_vp1[ y_0 ],"[V_Y0]");     // [119]
        ASS(d_camerah_vp1[ y_1 ]===new_vp1[ y_1 ],"[V_Y1]");     // [119]
                                                                 //      [118]
        //:---------------------------:Sanity_Check:[118]://     //      [118]
        
        //:#_SHAKE_WHEN_PRESSED_#:[113]:=================://     // [113]
                                                                 // [113]
        //: X_X < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < < <   VITALDO( "[Translate_Or_Shake]" );   NOTICE_ME_SENPAI                // [117][113]
                                                                 // [113]
        //:=================:#_SHAKE_WHEN_PRESSED_#:[113]://     // [113]



        //+  "[WE_ARE_FINISHED_WRITING_THIS_FUNCTION!]"  +//     // [112][111][110][109]
    };; //:[F_CAMERAH_VP1]:::::::::::::::::::::::::::::::://     // [113][109]

    const   F_CAMERAH_TIK = function                             // [115]
    PRIVATE_F_CAMERAH_TIK(                                       // [115]
                                                                 // [115]
        /**VOID**/                                               // [115]
    ){                                                           // [115]
        if( d_camerah_dir && d_camerah_use ){                    // [115]
            d_camerah_dir =( 0 );                                // [115]
                                                                 // [115]
            F_CAMERAH_VP1();                                     // [115]
        };;                                                      // [115]
    };;                                                          // [115]

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [109]
//|                                               [ @$$$$$@ ]|// // [109]
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __CAMERAH__|// // [109]
//|                                               [ @$$$$$@ ]|// // [109]
//|09|09|09|09|09|09|09|09|09|SUBS|09|09|09|09|09|09|09|09|09|// // [109]
//|10|10|10|10|10|10|10|10|10|SUBS|10|10|10|10|10|10|10|10|10|// // [125]
//|[ @$$$$$@ ]                                               |// // [125]
//|__SEXYCAM__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |// // [125]
//|[ @$$$$$@ ]                                               |// // [125]
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [125]

    const   F_SEXYCAM_PAD_NUM = function                         // [126]
    PRIVATE_F_SEXYCAM_PAD_NUM(                                   // [126]
                                                                 // [126]
        i_pad_num                                                // [126]
    ){                                                           // [126]
        console.log( "[i_pad_num]" , i_pad_num );                // [126]
                                                                 // [---]
        if( i_pad_num >= 1 && i_pad_num <= 9 ){                  // [127]
                                                                 // [127]
            let pad_hi9 = d_sexycam_pad_hi9 ;                    // [127]
                                                                 // [127]
            var hi9 =( pad_hi9[ i_pad_num ] );                   // [129][FIX][127]
            ASS(hi9 >= 0 && hi9 <= 8 , "[HI9_OOB]" );            // [127]
                                                                 // [127]
            //:::::::::::::::::::::::::::::::::::://             // [127]
            //: @hox@ : HOtel cell X : - - - - - ://             // [127]
            //: @hoy@ : HOtel cell Y : - - - - - ://             // [127]
            //:::::::::::::::::::::::::::::::::::://             // [127]
                                                                 // [127]
            var hox =(          ( hi9 % 3 ) );                   // [127]
            var hoy =(Math.floor( hi9 / 3 ) );                   // [127]
                                                                 // [127]
            var dcx = d_hi9_dcx[ hi9 ]; //:DISCRETE_CEN_X://     // [129]
            var dcy = d_hi9_dcy[ hi9 ]; //:DISCRETE_CEN_Y://     // [129]
                                                                 // [129]
            var zeb_m_i =( c_camerah_zeb_m_i + 0 );              // [129]
            var not_m_i =( c_camerah_zeb_m_i + 1 );              // [129]
                                                                 // [129]
            d_camerah.camzoom =( 0.0 );  //:@DEFAULTZOOM@://     // [129]
            d_camerah.camdu_x =( dcx );                          // [129]
            d_camerah.camdu_y =( dcy );                          // [129]
                                                                 // [129]
            //:#_NUMPAD_CYCLE_#:[129]:-------------------://     // [129]
                                                                 // [129]
                if( i_pad_num === d_sexycam.but_num ){           // [129]
                                                                 // [129]
                    d_sexycam.but_not ++ ;                       // [129]
                }else{                                           // [129]
                                                                 // [129]
                    d_sexycam.but_not=( 1 );                     // [129]
                };;                                              // [129]
                d_sexycam.but_num =( i_pad_num );                // [129]
                                                                 // [129]
                if( d_sexycam.but_not > not_m_i ){               // [129]
                    d_sexycam.but_not =( 1 );                    // [129]
                };;                                              // [129]
            //:-------------------:#_NUMPAD_CYCLE_#:[129]://     // [129]
            //:#_SEXYCAM_SETS_ZEROBASIS_#:[129]:---------://     // [129]
                                                                 // [129]
                var zeb_enu =( d_sexycam_not_zeb[                // [129]
                               d_sexycam.but_not                 // [129]
                ]);;                                             // [129]
                ASS(zeb_enu >= (  0  ) , "[ZEB_ENU:NEG]"  );     // [129]
                ASS(zeb_enu <= zeb_m_i , "[ZEB_ENU:OOB]"  );     // [129]
                                                                 // [---]
                d_camerah.zebasis =( zeb_enu );                  // [130]
                d_camerah_dir =(        1    );                  // [130]
                LOG( "[zeb_enu]" , zeb_enu   );                  // [130]
                                                                 // [---]
            //:---------:#_SEXYCAM_SETS_ZEROBASIS_#:[129]://     // [129]
        };;                                                      // [127]
                                                                 // [---]
    };; //:ENDFUNC[ F_SEXYCAM_PAD_NUM ]::::::::::::::::::://     // [130][126]

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [125]
//|                                               [ @$$$$$@ ]|// // [125]
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __SEXYCAM__|// // [125]
//|                                               [ @$$$$$@ ]|// // [125]
//|10|10|10|10|10|10|10|10|10|SUBS|10|10|10|10|10|10|10|10|10|// // [125]
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

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [102]
//|                                               [ @$$$$$@ ]|// // [102]
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __DABITCH__|// // [102]
//|                                               [ @$$$$$@ ]|// // [102]
//|02|02|02|02|02|02|02|02|02|SUBS|02|02|02|02|02|02|02|02|02|// // [102]
//|08|08|08|08|08|08|08|08|08|SUBS|08|08|08|08|08|08|08|08|08|// // [102]
//|[ @$$$$$@ ]                                               |// // [102]
//|__EDIGAME__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |// // [102]
//|[ @$$$$$@ ]                                               |// // [102]
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [102]

    const   F_EDIGAME_MOD_LOG = function                         // [103]
    PRIVATE_F_EDIGAME_MOD_LOG(                                   // [103]
                                                                 // [103]
        i_edigame_mod                                            // [103]
    ){                                                           // [103]
        if( c_edigame_edi === i_edigame_mod ){                   // [103]
                                                                 // [103]
            MSG("[EDIGAME:Acting_As:EDITOR]"  );                 // [103]
        }else                                                    // [103]
        if( c_edigame_gam === i_edigame_mod ){                   // [103]
                                                                 // [103]
            MSG("[EDIGAME:Acting_As:GAME]"    );                 // [103]
        }else{                                                   // [103]
            MSG("[EDIGAME:Acting_As:UNKNOWN]" );                 // [103]
        };;                                                      // [103]
    };;                                                          // [103]

//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [102]
//|                                               [ @$$$$$@ ]|// // [102]
//| ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ __EDIGAME__|// // [102]
//|                                               [ @$$$$$@ ]|// // [102]
//|08|08|08|08|08|08|08|08|08|SUBS|08|08|08|08|08|08|08|08|08|// // [102]
//|03|03|03|03|03|03|03|03|03|SUBS|03|03|03|03|03|03|03|03|03|// // [102]
//|[ @$$$$$@ ]                                               |// // [102]
//|__KEYMAST__ VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV |// // [102]
//|[ @$$$$$@ ]                                               |// // [102]
//|--|--|--|--|--|--|--|--|--|SUBS|--|--|--|--|--|--|--|--|--|// // [102]

    //:------------------------------------------------------://
    //: @_G_@ : Generally                                    :// // [068] 
    //: @_S_@ : Specifically                                 :// // [068] 
    //: @a_k@ : @asc_key@ : Ascii(_G_) Key(_S_)              :// // [068] 
    //: @e_k@ : @evt_key@ : Event(_G_) Key(_S_)              :// // [068] 
    //:------------------------------------------------------://

    const   F_KEYMAST_EVT_ASC = function                        // [068] 
    PRIVATE_F_KEYMAST_EVT_ASC(                                  // [068] 
                                                                // [068] 
        i_evt_key //:( i_evt_key )=>( o_asc_key )://            // [068] 
    ){                                                          // [068] 
                                                                // [---]
        //:#_OLD_EVT_ASC_LOGIC_DOESNT_WORK_FOR_PLUS_MINUS_#://  // [093]
                                                                // [093]
        var o_asc_key =(                                        // [093]
            String.prototype.toUpperCase.call(                  // [093]
            (                                                   // [093]
                i_evt_key.key                                   // [093]
                                                                // [093]
            )||"[nil][o_asc_key]" ));;                          // [093]
                                                                // [---]
        return( o_asc_key );                                    // [068] 
    };;                                                         // [068] 
                                                                // [---]

    const   F_KEYMAST_ZOM = function                             // [115]
    PRIVATE_F_KEYMAST_ZOM(                                       // [115]
                                                                 // [115]
        i_ioo //: @ioo@ : In_Or_Out? ://                         // [115]
    ){                                                           // [115]
        //:::::::::::::::::::::::::::::::::::::::::::::::://     // [115]
        //: use <= 0 : Raw Low Level VP1 Direct Control  ://     // [115]
        //: use >= 1 : High Level Camera Modifies VP1    ://     // [115]
        //:::::::::::::::::::::::::::::::::::::::::::::::://     // [115]
                                                                 // [115]
        if( d_camerah_use <= 0 ){   //: #_LOW_L_CAM_C_#  ://     // [115]
                                                                 // [115]
            if( (0+1) === i_ioo ){                               // [115]
                                                                 // [---]
                //:::::::::::::::::::::::::::::::::::://         // [115][093]
                //: ZOOM_INN ===> MAKE[ VP1 ]SMALLER ://         // [115][093]
                //:::::::::::::::::::::::::::::::::::://         // [115][093]
                                                                 // [115][093]
                //:    [x_0] > > > [+] < < < [x_1]   ://         // [115][093]
                //:    [y_0] > > > [+] < < < [y_1]   ://         // [115][093]
                                                                 // [115][093]
                let new_x_0 = d_vp1[ x_0 ] + c_dut ;             // [115][093]
                let new_x_1 = d_vp1[ x_1 ] - c_dut ;             // [115][093]
                let new_y_0 = d_vp1[ y_0 ] + c_dut ;             // [115][093]
                let new_y_1 = d_vp1[ y_1 ] - c_dut ;             // [115][093]
                                                                 // [115][093]
                if( ( new_x_0 > new_x_1 )                        // [115][093]
                ||  ( new_y_0 > new_y_1 )                        // [115][093]
                ){  //:::::::::::::::::::::::::::::::::::://     // [115][093]
                    //: DO_NOTHING. Viewport Is Max      ://     // [115][093]
                    //: Smallness. Any smaller and we    ://     // [115][093]
                    //: enter the upside  down world.    ://     // [115][093]
                    //:::::::::::::::::::::::::::::::::::://     // [115][093]
                    console.log("[CANNOT_ZOOM_IN_ANYMORE]");     // [115][093]
                }else{                                           // [115][093]
                    d_vp1[ x_0 ]=( new_x_0 );                    // [115][093]
                    d_vp1[ x_1 ]=( new_x_1 );                    // [115][093]
                    d_vp1[ y_0 ]=( new_y_0 );                    // [115][093]
                    d_vp1[ y_1 ]=( new_y_1 );                    // [115][093]
                };;                                              // [115][093]
            }else                                                // [115]
            if( (0-1) === i_ioo ){                               // [115]
                                                                 // [---]
                //:::::::::::::::::::::::::::::::::::://         // [115][093]
                //: ZOOM_OUT ===> MAKE[ VP1 ]BIGGER  ://         // [115][093]
                //:::::::::::::::::::::::::::::::::::://         // [115][093]
                                                                 // [115][093]
                //:    [x_0] < < < [-] > > > [x_1]   ://         // [115][093]
                //:    [y_0] < < < [-] > > > [y_1]   ://         // [115][093]
                                                                 // [115][093]
                let new_x_0 = d_vp1[ x_0 ] - c_dut ;             // [115][093]
                let new_x_1 = d_vp1[ x_1 ] + c_dut ;             // [115][093]
                let new_y_0 = d_vp1[ y_0 ] - c_dut ;             // [115][093]
                let new_y_1 = d_vp1[ y_1 ] + c_dut ;             // [115][093]
                                                                 // [115][093]
                if( ( new_x_0 < 0 || new_x_1 > (c_dum-1) )       // [115][093]
                ||  ( new_y_0 < 0 || new_y_1 > (c_dum-1) )       // [115][093]
                ){  //:::::::::::::::::::::::::::::::::::://     // [115][093]
                    //: DO_NOTHING. Viewport is Max      ://     // [115][093]
                    //: Bigness. Any larger and we       ://     // [115][093]
                    //: we will have integer overlow.    ://     // [115][093]
                    //: Nothing lays beyond[ THE_DUM ].  ://     // [115][093]
                    //:::::::::::::::::::::::::::::::::::://     // [115][093]
                    console.log("[CANNOT_ZOOM_OUT_ANYMORE]");    // [115][093]
                }else{                                           // [115][093]
                    d_vp1[ x_0 ]=( new_x_0 );                    // [115][093]
                    d_vp1[ x_1 ]=( new_x_1 );                    // [115][093]
                    d_vp1[ y_0 ]=( new_y_0 );                    // [115][093]
                    d_vp1[ y_1 ]=( new_y_1 );                    // [115][093]
                };;                                              // [115][093]
                                                                 // [---]
            }else{                                               // [115]
                ERR("[NOT_ZOOM_IN_OR_OUT]");                     // [115]
            };;                                                  // [115]
        }else                                                    // [115]
        if( d_camerah_use >= 1 ){   //: #_HIG_L_CAM_C_#  ://     // [115]
                                                                 // [---]
            F_CAMERAH_ZOM( i_ioo );                              // [117]
                                                                 // [---]
        }else{                                                   // [115]
            ERR("[INVALID_CAMERA_SETTING]");                     // [115]
        };;                                                      // [115]
    };;                                                          // [115]

    const   F_KEYMAST_PAN = function                             // [115]
    PRIVATE_F_KEYMAST_PAN(                                       // [115]
                                                                 // [115]
        i_dvx                                                    // [115]
    ,   i_dvy                                                    // [115]
    ){                                                           // [115]
        if( d_eci >= 1 ){                                        // [115]
            ASS_TRINARY( i_dvx , "[i_dvx]" );                    // [115]
            ASS_TRINARY( i_dvy , "[i_dvy]" );                    // [115]
        };;                                                      // [115]
                                                                 // [115]
        if( d_camerah_use <= 0 ){   //: #_LOW_L_CAM_C_#  ://     // [115]
                                                                 // [---]
            let o_x =( i_dvx * c_dut );  //:#_1TILE_PAN_#://     // [116]
            let o_y =( i_dvy * c_dut );  //:#_1TILE_PAN_#://     // [116]
                                                                 // [116]
            var new_x_0 =( d_vp1[ x_0 ] + o_x );                 // [116]
            var new_x_1 =( d_vp1[ x_1 ] + o_x );                 // [116]
            var new_y_0 =( d_vp1[ y_0 ] + o_y );                 // [116]
            var new_y_1 =( d_vp1[ y_1 ] + o_y );                 // [116]
                                                                 // [116]
            if( new_x_0 < 0 || new_x_1 >( c_dum - 1 ) ){         // [116]
                                                                 // [116]
                //:DO_NOTHING_BECAUSE_OUT_OF_BOUNDS://           // [116]
                console.log( "[REFUSE_TO_PAN:VP1.X]" );          // [116]
            }else{                                               // [116]
                                                                 // [116]
                d_vp1[ x_0 ]= new_x_0 ;                          // [116]
                d_vp1[ x_1 ]= new_x_1 ;                          // [116]
            };;                                                  // [116]
            if( new_y_0 < 0 || new_y_1 >( c_dum - 1 ) ){         // [116]
                                                                 // [116]
                //:DO_NOTHING_BECAUSE_OUT_OF_BOUNDS://           // [116]
                console.log( "[REFUSE_TO_PAN:VP1.Y]" );          // [116]
            }else{                                               // [116]
                                                                 // [116]
                d_vp1[ y_0 ]= new_y_0 ;                          // [116]
                d_vp1[ y_1 ]= new_y_1 ;                          // [116]
            };;                                                  // [116]
                                                                 // [---]
        }else                                                    // [115]
        if( d_camerah_use >= 1 ){   //: #_HIG_L_CAM_C_#  ://     // [115]
                                                                 // [115]
            F_CAMERAH_PAN( i_dvx , i_dvy );                      // [115]
        }else{                                                   // [115]
            ERR("[INVALID_FLAG_2022_08_06:1125PM]");             // [115]
        };;                                                      // [115]
    };;                                                          // [115]

    const   F_KEYMAST_PAD_NUM = function                         // [126]
    PRIVATE_F_KEYMAST_PAD_NUM(                                   // [126]
                                                                 // [126]
        i_pad_num                                                // [126]
    ){                                                           // [126]
        if( i_pad_num >= 1 && i_pad_num <= 9 ){                  // [126][105]
                                                                 // [126]
            if( d_camerah_use >= 1 ){                            // [126]
                                                                 // [126]
                F_SEXYCAM_PAD_NUM( i_pad_num );                  // [126]
            }else                                                // [126]
            if( d_camerah_use <= 0 ){                            // [126]
                                                                 // [105]
                const laxcoma="[HACK]" /////////////////         // [105]
                                                                 // [105]
                ,   t_l =( 7 ) , top =( 8 ) , t_r =( 9 )         // [105]
                ,   m_l =( 4 ) , mid =( 5 ) , m_r =( 6 )         // [105]
                ,   b_l =( 1 ) , bot =( 2 ) , b_r =( 3 )         // [105]
                                                                 // [105]
                ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;         // [105]
                                                                 // [105]
                let cel =[ 0x00 , 0x00 //:@camsnap_cel@://       // [105]
                                                                 // [105]
                ,   0 , 2  //:[ B_L ]( 1 )://                    // [105]
                ,   1 , 2  //:[ BOT ]( 2 )://                    // [105]
                ,   2 , 2  //:[ B_R ]( 3 )://                    // [105]
                                                                 // [105]
                ,   0 , 1  //:[ M_L ]( 4 )://                    // [105]
                ,   1 , 1  //:[ MID ]( 5 )://                    // [105]
                ,   2 , 1  //:[ M_R ]( 6 )://                    // [105]
                                                                 // [105]
                ,   0 , 0  //:[ T_L ]( 7 )://                    // [105]
                ,   1 , 0  //:[ TOP ]( 8 )://                    // [105]
                ,   2 , 0  //:[ T_R ]( 9 )://                    // [105]
                ];;                                              // [105]
                                                                 // [105]
                let c_x =( cel[ (i_pad_num*2)+0 ] );             // [126][105]
                let c_y =( cel[ (i_pad_num*2)+1 ] );             // [126][105]
                                                                 // [105]
                ASS( c_duh * 3 === c_dum , "[!DUH_DUM!]" );      // [105]
                                                                 // [105]
                d_vp1[ x_0 ]=( c_x * c_duh )+(    0    );        // [105]
                d_vp1[ y_0 ]=( c_y * c_duh )+(    0    );        // [105]
                d_vp1[ x_1 ]=( c_x * c_duh )+( c_duh-1 );        // [105]
                d_vp1[ y_1 ]=( c_y * c_duh )+( c_duh-1 );        // [105]
            }else{                                               // [126]
                ERR( "[WTF_PAD_NUM_SWITCH]" );                   // [126]
            };;                                                  // [126]
                                                                 // [126]
        };;                                                      // [105]
    };; //:END[ F_KEYMAST_PAD_NUM ]:::::::::::::::::::::::::::// // [126]

    const   F_KEYMAST_DOW_EDI = function                        // [104]
    PRIVATE_F_KEYMAST_DOW_EDI(                                  // [104]
                                                                // [104]
        i_evt_key                                               // [104]
    ){                                                          // [104]
        //:#_DOWN_HANDLER_WHEN_BEHAVING_AS_AN_EDITOR_#://       // [104]

        var asc_key = F_KEYMAST_EVT_ASC( i_evt_key );           // [104] 
        let a_k     =( asc_key /** Key Down **/ );              // [104] 

        var oh_my_god_its_the_numpad=( 0 );                     // [105]
        var pad_num=( 0-1 );                                    // [105]
        if( i_evt_key.keyCode >=  96  //:numpad0://             // [105]
        &&  i_evt_key.keyCode <= 105  //:numpad9://             // [105]
        ){                                                      // [105]
            oh_my_god_its_the_numpad=( 1 );                     // [105]
            pad_num=( i_evt_key.keyCode - 96 );                 // [105]
        };;                                                     // [105]

        var oh_my_god_its_the_arrow_keys=( 0 );                 // [114]
        var ark_num =( 0-1 );   //:@ark_num@:ArrowKeyEnum://    // [114]
        ASS( c_keymast_ark_k_0 === 37 ,    "[@ARK_K_0@]"  );    // [114]
        ASS( c_keymast_ark_k_1 === 40 ,    "[@ARK_K_1@]"  );    // [114]
        if( i_evt_key.keyCode  >=  37    //: @ARK_LEF@   ://    // [114]
        &&  i_evt_key.keyCode  <=  40    //: @ARK_DOW@   ://    // [114]
        ){                                                      // [114]
            oh_my_god_its_the_arrow_keys=( 1 );                 // [114]
            ark_num=( i_evt_key.keyCode - 37 );                 // [114]
        };;                                                     // [114]
                                                                // [114]
        if( oh_my_god_its_the_arrow_keys ){                     // [114]
                                                                // [114]
            //: @dvx@ : Direction_Vector.X  ://                 // [114]
            //: @dvy@ : Direction_Vector.Y  ://                 // [114]
                                                                // [114]
            ASS( ark_num >= 0 && ark_num <=(4-1) );             // [114]
            let dvx = d_keymast_ark_dvx[ ark_num ];             // [114]
            let dvy = d_keymast_ark_dvy[ ark_num ];             // [114]
                                                                // [---]
            F_KEYMAST_PAN( dvx , dvy );                         // [115]
                                                                // [---]
        }else                                                   // [114]
        if( oh_my_god_its_the_numpad ){                         // [105]
                                                                // [105]
            F_KEYMAST_PAD_NUM( pad_num );                       // [126]
        }else                                                   // [105]
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
        }else                                                   // [104]
        if( "R" == a_k ){                            //:[068]://// [104]
                                                                // [104]
            //:[061]:----------------------------------------://// [104]
            F_XHR( "GET" , "DABITCH/R/TAB_HEX/RED" )            // [104]
            .then((i_saywhat)=>{                                // [104]
                                                                // [104]
                console.log( "[what?]:" + i_saywhat );          // [104]
            });;                                                // [104]
            //:----------------------------------------:[061]://// [104]
        }else                                                   // [093][068] 
        if( "+" === a_k || "=" === a_k ){                       // [093]
                                                                // [---]
            F_KEYMAST_ZOM( 0+1 ); //: ZOOM IN  ://              // [115]
                                                                // [---]
        }else                                                   // [093]
        if( "-" === a_k || "_" === a_k ){                       // [093]
                                                                // [---]
            F_KEYMAST_ZOM( 0-1 ); //: ZOOM OUT ://              // [115]
                                                                // [---]
        }else                                                   // [093]
        if( "L" == a_k ){                                       // [096]
                                                                // [096]
            F_TOG( window , "d_rendopt_boxview_onn" );          // [096]
            F_RES_CAN(); //:UpdateViewportSizes://              // [096]
        }else                                                   // [096]
        {                                                       // [068] 
            LOG( "[UNBOUND_KEY]" , a_k );                       // [068] 
        };;                                                     // [068] 
    };;                                                         // [104]
    const   F_KEYMAST_DOW_GAM = function                        // [104]
    PRIVATE_F_KEYMAST_DOW_GAM(                                  // [104]
                                                                // [104]
        i_evt_key                                               // [104]
    ){                                                          // [104]
        //:#_DOWN_HANDLER_WHEN_BEHAVING_AS_A_GAME_#://          // [104]
                                                                // [104]
        console.log("[no_game_control_bindings_yet]");          // [104]
    };;                                                         // [104]

    const   F_KEYMAST_DOW = function                            // [057] 
    PRIVATE_F_KEYMAST_DOW(                                      // [057] 
        i_evt_key                                               // [068] 
    ){                                                          // [057] 
        //:#_HIGHEST_LEVEL_KEYBOARD_DOWN_HANDLER_#://           // [104]

        var asc_key = F_KEYMAST_EVT_ASC( i_evt_key );           // [068] 
        let a_k     =( asc_key /** Key Down **/ );              // [068] 

        ASS( "~" === c_edigame_tog_001 );                       // [103]
        ASS( "`" === c_edigame_tog_002 );                       // [103]
        if( 0                                                   // [103]
        ||  c_edigame_tog_001 === a_k                           // [103]
        ||  c_edigame_tog_002 === a_k                           // [103]
        ){                                                      // [103]
            //:::::::::::::::::::::::::::::::::::://            // [103]
            //: Are controls behaving like an    ://            // [103]
            //: __EDITOR__ or like a __GAME__ ?  ://            // [103]
            //:::::::::::::::::::::::::::::::::::://            // [103]
                                                                // [103]
            F_CYC( window , "d_edigame_mod"                     // [103]
            ,   [                                               // [103]
                    c_edigame_edi //:#enu_edi#://               // [103]
                ,   c_edigame_gam //:#enu_gam#://               // [103]
                ]                                               // [103]
            );;                                                 // [103]
            F_EDIGAME_MOD_LOG( d_edigame_mod );                 // [103]
        };;                                                     // [103]

        if( c_edigame_edi === d_edigame_mod ){                  // [104]
            F_KEYMAST_DOW_EDI( i_evt_key );                     // [104]
        }else                                                   // [104]
        if( c_edigame_gam === d_edigame_mod ){                  // [104]
            F_KEYMAST_DOW_GAM( i_evt_key );                     // [104]
        }else{                                                  // [104]
            ERR("[INVALID_EDIGAME_MODE]");                      // [104]
        };;                                                     // [104]
    };; //:[F_KEYMAST_DOW]:----------------------------:[057]://

    const   F_KEYMAST_UPP = function                             // [057] 
    PRIVATE_F_KEYMAST_UPP(                                       // [057] 
        i_evt_key                                                // [068] 
    ){                                                           // [057] 
        if( d_keymast_log_upp >= 1 ){                            // [118]
            console.log( "[LOG_UPP]:" + i_evt_key );             // [118][068] 
        };;                                                      // [118]
    };;                                                          // [057] 

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
                F_CAMERAH_TIK( /**VOID**/ );                    // [115]
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

    TODO001 : <REMOVED,IT WAS A BULLSHIT NOTION>                 // [118][067]

    TODO002 : Finish reading :                                   // [118][067]
            : http://learnwebgl.brown37.net                      // [118][067]
            :       /the_big_picture/3d_rendering.html           // [118][067]

*** *************************************************** TODO **/  
/** TAG_SECTION ******************************************** *** // [088]
*** CTRL_F_HELP ******************************************** *** // [088]
TAG[ tag_section | tag-section | tag_section ]BEG -------------- // [088]
TAG[ tag section | tagsection | tagsec | tag-sec | tag_sec ]---- // [109]

    TAG[ fs_001 | frag_001 | ssf_001 ]FIX[  d_artgirl_ssf_001 ]  // [123]
    TAG[ fs_002 | frag_002 | ssf_002 ]FIX[  d_artgirl_ssf_002 ]  // [123]
    TAG[ fs_003 | frag_003 | ssf_003 ]FIX[  d_artgirl_ssf_003 ]  // [123]
    TAG[ fs_004 | frag_004 | ssf_004 ]FIX[  d_artgirl_ssf_004 ]  // [123]
    TAG[ fs_005 | frag_005 | ssf_005 ]FIX[  d_artgirl_ssf_005 ]  // [123]
    TAG[ fs_006 | frag_006 | ssf_006 ]FIX[  d_artgirl_ssf_006 ]  // [123]
    TAG[ fs_007 | frag_007 | ssf_007 ]FIX[  d_artgirl_ssf_007 ]  // [123]
    TAG[ fs_008 | frag_008 | ssf_008 ]FIX[  d_artgirl_ssf_008 ]  // [123]
    TAG[ fs_009 | frag_009 | ssf_009 ]FIX[  d_artgirl_ssf_009 ]  // [123]
 
                                                   
    TAG[ out of bounds camera corrections | oob-cam | cam-oob ]  // [118]
    TAG[ out_of_bounds_camera_corrections | oob_cam | cam_oob ]  // [118]
    TAG[ out_of_bounds|camera_corrections | oob cam | cam oob ]  // [118]
   GOTO[ #_OOB_CAM_# ]RELATED[ c_camerah_maxunit ]               // [118]


    TAG[ error check inputs | error-check-inputs ]               // [109]
    TAG[ error_check_inputs | errorcheckinputs   ]               // [109]
    FIX[ d_eci ]ALSO_SEE[ d_eco && d_bug ]                       // [109]
                                                                 // [109]
    TAG[ error check outputs | error-check-outputs ]             // [109]
    TAG[ error_check_outputs | errorcheckoutputs   ]             // [109]
    FIX[ d_eco ]ALSO_SEE[ d_eci && d_bug ]                       // [109]
                                                                 // [109]
    TAG[ debug mode | debug_mode | debugmode | debugflag ]       // [109]
    TAG[ debug_flag | debug-flag | debug flag | dbgflag  ]       // [109]
    FIX[ d_bug ]                                                 // [109]
         
    TAG[ d_cam | d-cam | camera variable | camera var ]          // [088]
    FIX[ d_vp0 | d_vp1 | d_vpc | c_dum | d_dut ]                 // [088]
                                                                 // [088]
    TAG[ plank_units | plankunit | plank-units | plank units ]   // [088]
    FIX[ c_dum | c_dut ]                                         // [088]

    TAG[ canvas-resize | canvas_resize | canvasresize ]          // [092]
    TAG[ resize-canvas | resize_canvas | resizecanvas ]          // [092]
   GOTO[ F_RES_CAN ]( Function _ RESize _ CANvas )               // [092]
                                                                 // [092]
    TAG[ glViewport ]FIX[ wgl.viewport ]                         // [092]

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
    TAG[ LOG_SECTION ]                                          // [097]

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

    [088] : Added Variables For Camera & Plank Units               [089][088]
          : ( Plank Units == Discrete Units )                      [089][088]

    [089] : Added Camera Vars [ vp0 , vp1 , vpc ]                  [090][089]
          : to shader code, but have not wired them                [090][089]
          : up in the CPU code yet.                                [090][089]

    [090] : Added variables for uniform locations of               [091][090]
          : [ d_tik , d_vp0 , d_vp1 , d_vpc ]                      [091][090]
          : [ d_tik_loc , d_vp0_loc , d_vp1_loc , d_vpc_loc ]      [091][090]

    [091] : GPU/CPU sync of [ d_tik , d_vp0 , d_vp1 , d_vpc ]      [092][091]

    [092] : [ d_vpc ]is now size of wgl.viewport , and resizes     [093][092]
          : correctly when user resizes the window.                [093][092]

    [093] : Added the logic for zooming in and out.                [094][093]
          : HOWEVER... Nothing can be observed yet,                [094][093]
          : because the fragment shader code does                  [094][093]
          : __NOT__ make use of[ d_vp1 ]yet.                       [094][093]
          : ( d_vp1 === Data Selection Viewport Rectangle )        [094][093]

    [094] : Added letter boxing math so that we can                [095][094]
          : verify rendering code uses[ vp0 ]and[ vpc ]            [095][094]
          : correctly.                                             [095][094]

    [095] : Added letter boxing to shader code.                 // [096][095]

    [096] : "L" Key To Toggle Letter Boxing.                    // [097][096]

    [097] : Figured Out Sample Coordinate For Data Set.         // [098][097]
          : HOWEVER:                                            // [098][097]
          : 1. Not using sample coord yet.                      // [098][097]
          : 2. Don't have any data yet.                         // [098][097]
          : Next thing to do: Use sample coord to               // [098][097]
          : visualize the space we are in.                      // [098][097]

    [098] : 1 : _____FIXED_____  "Discrete_Unit" constants.     // [099][098]
          : 2 : Added  __MORE__  "Discrete_Unit" constants.     // [099][098]

    [099] : Basic space visualization coded, however the        // [100][099]
          : camera math is __NOT__ 100% correct. Seems the      // [100][099]
          : bottom-right corner of the camera is "pinned".      // [100][099]
          :                                                     // [100][099]
          : Suspect error is in [GLSL/GPU] code , and           // [100][099]
          : __NOT__ cpu code.                                   // [100][099]
          :                                                     // [100][099]
          : TODO:                                               // [100][099]
          : Make a CPU debug button that                        // [100][099]
          : snaps camera exactly onto a 1 tile in the           // [100][099]
          : game to help diagnose problem.                      // [100][099]


    [100] : GO TO THE NEXT PLAYLIST FOR VIDEO # 101 :           // [101][100]
          : www.tinyurl.com/BOMB-PLAYLIST-002                   // [101][100]

    [101] : No code changes. The first video of each playlist   // [102][101]
          : will be used to DEMO/PREVIEW all of the work done   // [102][101]
          : in that playlist. So video 101 summarizes           // [102][101]
          : videos[ 101 - to - 200 ].                           // [102][101]

    [102] : Organizing code before we stubb in                  // [103][102]
          : EDIGAME container which will contain high           // [103][102]
          : level camera controls. (among other things )        // [103][102]
          :                                                     // [103][102]
          : Will use these high level camera controls           // [103][102]
          : to help debug the incorrect rendering code.         // [103][102]

    [103] : Stubbed in EDIGAME controls. Pressing               // [104][103]
          : [ tilde(~) / backtick(`) ] switches between         // [104][103]
          : "editor mode" and "game mode" style                 // [104][103]
          : controls.                                           // [104][103]
          :                                                     // [104][103]
          : Will be plagerizing parts of                        // [104][103]
          : HOTEL13.JS('s)[ d_hotel13_sam ]object to            // [104][103]
          : populate[ d_edigame_edi ], so updated               // [104][103]
          : HOTEL13.JS snapshot to be latest revision.          // [104][103]

    [104] : Trivial refactoring, keyboard down handler          // [105][104]
          : now split into two sub functions. One for           // [105][104]
          : when[ AIM ]is behaving as an __EDITOR__ ,           // [105][104]
          : the other for when[ AIM ]is behaving as             // [105][104]
          : a __GAME__.                                         // [105][104]

    [105] : Numpad keys snap camera to respective levelpacks    // [106][105]
          : of @THE_DUM@. We are doing this to figure out       // [106][105]
          : where bug is in our RENDERING(GLSL) code.           // [106][105]
          : ( BUG NOT FOUND YET , 2022_08_03 )                  // [106][105]

    [106] : Sample points outside of[ THE_DUM ]are now          // [107][106]
          : darkened. This greatly helps diagnose the           // [107][106]
          : error in our fragment shader code.                  // [107][106]

    [107] : Found bug in our renderer, our code for             // [108][107]
          : calculating[ u_mv1 ]was... [TRASH/WRONG/INCORRECT]. // [108][107]

    [108] : Created "CameraH" struct and supporting              // [109][108]
          : constants. Also wrote some diagrams to               // [109][108]
          : explain how the camera will be used.                 // [109][108]
          :                                                      // [109][108]
          : NO FUNCTIONS WERE WRITTEN THIS VIDEO ,               // [109][108]
          : just focusing on the data structures                 // [109][108]
          : because a problem well defined is a                  // [109][108]
          : problem half solved. 2022_08_03                      // [109][108]

    [109] : 1 : Wrote a VERY SMALL chunk of high level           // [110][109]
          :   : camera FUNCTION code.                            // [110][109]
          : 2 : A LOOKUP TABLE for high level camera             // [110][109]
          :   : [ zebasis ==> @D_U@ Span ].                      // [110][109]
          : 3 : Boiler plate configuration section.              // [110][109]
          : 4 : Boiler plate: MAYBEDO , VITALDO , ASS_NUM        // [110][109]
          : 5 : F_ARR_U32 , F_CAR_U32 helper functions.          // [110][109]

    [110] : 1 : Added Assert Close To Equal Function             // [111][110]
          : 2 : Camera Zoom Code Calculates Final VP1 Size       // [111][110]
          NEXT: Figure out translation of VP1                    // [111][110]

    [111] : Added Camera Snapping Calculations to                // [112][111]
          : function that uses[ d_camerah ]to alter[ vp1 ].      // [112][111]
          : ( F_CAMERAH_VP1 )                                    // [112][111]

    [112] : F_CAMERAH_VP1 function is DONE!                      // [113][112]
          : 1. Alters VP1 Size And Translation                   // [113][112]
          : 2. Makes sure VP1 within[ c_dum ]bounds.             // [113][112]

    [113] : Camera Panning Function                              // [114][113]
          : ( F_CAMERAH_PAN )                                    // [114][113]

          :---:--------------------------------------------:     // [115][114]
    [114] : 1 :  Added Arrow Key Detection To KEYMAST ,    :     // [115][114]
          :---:--------------------------------------------:     // [115][114]
          :   : 1.1 :  ARR_I32 , CAR_I32                   :     // [115][114]
          :   : 1.2 :  c_keymast_ark_[lef|rig|upp|dow]     :     // [115][114]
          :   : 1.3 :  ark_dvx , ark_dvy lookup tables     :     // [115][114]
          :   : 1.4 :  oh_my_god_its_the_arrow_keys        :     // [115][114]
          :---:--------------------------------------------:     // [115][114]
          : # : __NOT__YET__ : ArrowKey ==> PanFunc( )     :     // [115][114]
          :---:--------------------------------------------:     // [115][114]

    [115] : 1 : Turned off CAMERAH usage ( d_camerah_use )       // [116][115]
          : 2 : F_KEYMAST_ZOM ( keymaster - zoom    )            // [116][115]
          : 3 : F_KEYMAST_PAN ( keymaster - panning )            // [116][115]
          : 4 : ASS_TRINARY                                      // [116][115]
          : 5 : F_CAMERAH_TIK                                    // [116][115]

    [116] : Low Level Panning Code Finished.                     // [117][116]

    [117] : DONE : Added High Level Camera Zoom Function.        // [118][117]
          : ---- :                                               // [118][117]
          : NEXT : Dirty Flag When Toggle Letterboxing           // [118][117]
          : NEXT : Fix bugs in camera code, currently we         // [118][117]
          : ---- : are rendering out of bounds.                  // [118][117]

    [118] : Misc Code In Lots Of Random Spots To Identify        // [119][118]
          : why[ VP1 ]bounds correction code is not              // [119][118]
          : working properly.                                    // [119][118]
          : FOUND_PROBLEM : d_vp1 is UNSIGNED and thus the       // [119][118]
          : [ vp1 < 0 ]check can never be true.                  // [119][118]

    [119] : DONE : Camera No Longer Renders Out Of Bounds.       // [120][119]
          : NEXT : Larger Camera Corrections === Stronger        // [120][119]
          :      : screen shaking or something...                // [120][119]
          :      : ORRRR..... Larger and larger red              // [120][119]
          :      : boarder around screen for how far the         // [120][119]
          :      : camera was leaking off a given edge!!!        // [120][119]

    [120] : DONE : Letterboxing toggle no longer distorts.       // [121][120]
          : NEXT : Red Boarder Feedback For Camera Correction.   // [121][120]

    [121] : Preparing shader uniforms on CPU-side to give        // [122][121]
          : us feedback in shader for how strongly               // [122][121]
          : "pressed into the wall" the high level camera        // [122][121]
          : is. DATE[ 2022_08_08 ]KANJICODER( 539AM )            // [122][121]

    [122] : Camera Out Of Bound Feedback is PARTIALLY            // [123][122]
          : written on both[ CPU ]and[ GPU ]side.                // [123][122]
          :                                                      // [123][122]
          : The[ CPU ]side code is INCORRECT and in              // [123][122]
          : the wrong location. But it is __CLOSE__              // [123][122]
          : to being CORRECT.                                    // [123][122]

          :---:                                                  // [124][123]
    [123] : 1 : d_camwall calculations are correct now.          // [124][123]
          : 2 : d_camwall calcs in the correct location.         // [124][123]
          : 3 : d_camwall code tints MONOCHROME RED in shader.   // [124][123]
          :---:                                                  // [124][123]
          : 4 : SHADER code is __NOT__ using d_camwall           // [124][123]
          : . : values correctly. Specifically , shader          // [124][123]
          : . : logic is mixing "frag coord" units and           // [124][123]
          : . : "discrete plank units" together.                 // [124][123]
          :---:                                                  // [124][123]

          :---------------------------------------------------:  // [125][124]
    [124] : DONE : Edited Shader Code To Show Camera Stress.  :  // [125][124]
          :      : It appears to "sort of work" but doesn't   :  // [125][124]
          :      : feel like code is 100% correct yet..       :  // [125][124]
          :------:                                            :  // [125][124]
          : NEXT : Add Camera Snapping Code for high level    :  // [125][124]
          :      : camera that is wired to NUMPAD.            :  // [125][124]
          :      : Save fixing camera stress code for         :  // [125][124]
          :      : AFTER WE HAVE NUMPAD CAMERA CONTROLS.      :  // [125][124]
          :      : Because we are wasting lots of time        :  // [125][124]
          :      : trying to navigate camera into position.   :  // [125][124]
          :---------------------------------------------------:  // [125][124]

    [125] : Stubbing In[ SEXYCAM ]Hotkey System.                 // [126][125]

    [126] : Added : F_KEYMAST_PAD_NUM                            // [127][126]
          : Added : F_SEXYCAM_PAD_NUM                            // [127][126]
          : NEXT  : Body/Logic of F_SEXYCAM_PAD_NUM              // [127][126]

    [127] : 1 : Added Lookup Table Mapping Numkeys To            // [128][127]
          :   : Hotel Index.                                     // [128][127]
          : 2 : Derived Hotel Cell X & Y In SEXYCAM_PAD_NUM      // [128][127]

    [128] : 1 : Added Consts For Discrete Centers Of Hotels      // [129][128]
          : 2 : Added hi9 ===> discrete center x , L.U.T.        // [129][128]
          : 3 : Added hi9 ===> discrete center y , L.U.T.        // [129][128]

          :---------------------------------------------------:  // [130][129]
    [129] : 1 : Detect Times In Row For Numpad Press          :  // [130][129]
          : 2 : Get Correct ZeroBasis                         :  // [130][129]
          : 3 : Focus Camera Into Center Of Levelpack         :  // [130][129]
          : . : with ZERO zoom , but create punchy            :  // [130][129]
          : . : zoom-effect by cycling to more coarse         :  // [130][129]
          : . : zero basis enums with each successive         :  // [130][129]
          : . : press of the same number key.                 :  // [130][129]
          : 4 : d_sexycam_not_zeb lookup table to help        :  // [130][129]
          : . : with item #3 in this list.                    :  // [130][129]
          :---------------------------------------------------:  // [130][129]

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
        const c_dum = 0x7FFF80 ;//: DiscreteUnits -THEDUM://   :   [098][087]
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
        +--------------------------------------------------+   :   [098][087]
        |                                                  |   :   [098][087]
        |  0x7F_FF80 / 960u == 0x2222                      |   :   [098][087]
        |  0x7F_FF80 / 960u ==  8,738                      |   :   [098][087]
        |                                                  |   :   [098][087]
        +--------------------------------------------------+   :   [098][087]
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
        const c_dum = 0x7FFF80 ;//: DiscreteUnits -THEDUM://   :   [098][087]
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

    @NOR_FCX@ : NORMALIZE : FCX inline function                    [089]
    @NOR_FCY@ : NORMALIZE : FCY inline function                    [089]
                                                                   [089]
    @raw_fcx@ : RAW(unedited) gl frag coord x axis, float.         [089]
    @raw_fcy@ : RAW(unedited) gl frag coord y axis, float.         [089]
                                                                   [089]
    @u_fcx@ : FragCoord.X - Unisgned 32bit integer version.        [089]
    @u_fcy@ : FragCoord.Y - Unsigned 32bit integer version.        [089]
                                                                   [089]
    @F_NOR_FCX@ : "F_" for "returns Float" here. norm(fcx)         [089]
    @F_NOR_FCY@ : "F_" for "returns Float" here. norm(fcy)         [089]
                                                                   [089]
    [U_CASE]: Upper Case / UpperCase / UpperCased                  [089]
                                                                   [089]
    @F_NAW_FCX@ : Normalized And Wrapped , frag coord x            [089]
    @F_NAW_FCY@ : Normalized And Wrapped , frag coord y            [089]
                                                                   [089]
    #_I_O_TEX_POINTLESS_# :                                        [089]
                                                                   [089]
        If we can just use "gl_FragCoord" was the                  [089]
        whole texture gradient quad setup pointless?               [089]
        ... maybe ... oh well.                                     [089]
                                                                   [089]
    #_NOR_CURRENTLY_DIVISION_BY_ZERO_# :                           [089]
                                                                   [089]
        The uniforms haven't been wired in yet,                    [089]
        so if we see a black screen instead of yellow,             [089]
        that would probably be okay because division               [089]
        by zero is undefined behavior.                             [089]
                                                                   [089]
    #_DO_NOT_COMBINE_PREFIXES_# :                                  [089]
                                                                   [089]
        Do not combine "hungarian notation" prefixes.              [089]
        If two prefixes are valid, use your descretion             [089]
        to pick the one that is "most important to know".          [089]
                                                                   [089]
        For example:                                               [089]
                                                                   [089]
            d_tik  -vs-  u_tik :                                   [089]
                                                                   [089]
            Probably more important to know that it is             [089]
            a piece of global data that exists on the              [089]
            CPU and GPU , so we should probably                    [089]
            stick with the name[ d_tik ]and NEVER                  [089]
            EVER write[ u_tik ]even though it is                   [089]
            indeed an unsigned 32 bit integer.                     [089]
                                                                   [089]
            WRITE[ d_tik ]NOT[ u_tik    ||     du_tik ]            [089]
            INVALID_BECAUSE_COMBINES_PREFIXES[ du_tik ]            [089]

    #DTICK_INITED# : Marking where[ d_tik ]initialized.            [090]

    #NOW_OPTIMIZED# : The code we wrote in an un-optimized         [091]
                    : way for our first draft has now              [091]
                    : been optimized.                              [091]

    #CPU_UPDATE_B4_GPUSYNC# :                                      [092]
                                                                   [092]
        Update[ d_vpc ]on the CPU side before doing all            [092]
        of your[ gpu/cpu ]sync calls.                              [092]

    @INC_REC@ : The variable is an "INClusive RECtangle"           [092]

    #_OLD_EVT_ASC_LOGIC_DOESNT_WORK_FOR_PLUS_MINUS_#            // [093]
                                                                // [093]
        The code below will __NOT__ work for the "+" and "-"    // [093]
        keys, so we have changed it.                            // [093]
                                                                // [093]
        var o_asc_key =(                                        // [093][068] 
            String.prototype.toUpperCase.call(                  // [093][068] 
            String.fromCharCode(                                // [093][068] 
                                                                // [093][068] 
                i_evt_key.keyCode                               // [093][068] 
                                                                // [093][068] 
            )||"[nil][o_asc_key]" ));;                          // [093][068] 
               
    u_fcx : Uint32 FragCoord.X , top-left origin.               // [094]
    u_fcy : Uint32 FragCoord.Y , top-left origin.               // [094]
    u_fc  : Denoting[ u_fcx /or/ u_fcy ]IN_DIAGRAM              // [094]
                                                                // [094]
    [     u_fc    ] [     u_fc    ] [     u_fc    ]             // [094]
    [A][ ][ ][ ][ ] [ ][ ][B][ ][ ] [ ][ ][ ][ ][C] <--THE_DUM  // [094]
                                                                // [094]
    Thinking if the frag coords were over this small of         // [094]
    a range, that [A],[B],[C] would be the discrete units       // [094]
    from "THE_DUM" I would pick. In this diagram                // [094]
    "THE_DUM" is only 15 discrete units in span.                // [094]
                                                                // [094]
    #_INSET_VP0_WITHIN_VPC_TO_LETTERBOX_# :                     // [094]
                                                                // [094]
        Right now VP0 === VPC , but if we ever want             // [094]
        to "letterbox" our rendering, all we need               // [094]
        to do is INSET[ VP0 ]within[ VPC ]instead of            // [094]
        make them an identical size.                            // [094]
                                                                // [094]
    @EDCL@: Expected_Dead_Code_Line (AKA:Unreachable)           // [094]
                                                                // [094]
    #_UNLIKELY_BUT_MATHEMATICALLY_POSSIBLE_# :----------------: // [094]
                                                              : // [094]
        It is possible that by taking the SMALLER             : // [094]
        axis of screen, and trying to make it 1/3             : // [094]
        of the larger axis, that we accidentially             : // [094]
        make the [1/3] axis LARGER than the                   : // [094]
        length of the screen on that axis.                    : // [094]
                                                              : // [094]
        A perfect case :                                      : // [094]
        9 x 3 ==> 9 x 3                                       : // [094]
                                                              : // [094]
        [ ][ ][ ] [ ][ ][ ] [ ][ ][ ]                         : // [094]
        [ ][ ][ ] [ ][ ][ ] [ ][ ][ ]                         : // [094]
        [ ][ ][ ] [ ][ ][ ] [ ][ ][ ]                         : // [094]
                                                              : // [094]
        The edge case I am worried about :                    : // [094]
        9 x 2 ==> 9 x 3 ( 9x3 isn't possible )                : // [094]
                                                              : // [094]
        [ ][ ][ ] [ ][ ][ ] [ ][ ][ ]                         : // [094]
        [ ][ ][ ] [ ][ ][ ] [ ][ ][ ]                         : // [094]
                                                              : // [094]
        This scenario will only happen if our client          : // [094]
        screen space is THINNER than 3x1 ratio.               : // [094]
    :---------------------------------------------------------: // [094]

    #_BLACKSECTION_OF_LETTERBOX_# :                             // [095]
                                                                // [095]
        We are in the non-render area of the shader             // [095]
        fragment coordinates. Just render black.                // [095]
        MAYBE UI STUFF here in future?                          // [095]
        UI stuff here probably a BAD IDEA since                 // [095]
        letterboxing varies depending on user's                 // [095]
        screen size.                                            // [095]

    @duh@ : DiscreteUnits (in) HOTEL (levelpack)                // [097]
    @dur@ : DiscreteUnits (in) ROOM  (level)                    // [097]
    @duf@ : USE[ dup ]                                          // [097]
    @dup@ : DiscreteUnits (in) PIXEL                            // [097]
    @duv@ : DiscreteUnits (in) [ VP0 || VP1 ]( du0 === du1 )    // [097]
    @du0@ : DiscreteUnits (in) VP0 Unit (DESTINATION VIEWPORT)  // [097]
    @du1@ : DiscreteUnits (in) VP1 Unit (       DATA VIEWPORT)  // [097]
                                                                // [097]
    #_DISCRETE_UNITS_IN_VIEWPORT_NOTE_# :                       // [097]
                                                                // [097]
        The total number of discrete (plank) units in           // [097]
        VP0 and VP1 should be IDENTICAL because we are          // [097]
        mapping a selection of data points selected             // [097]
        by VP1 onto the [ screen / VP0 ].                       // [097]
                                                                // [097]
        I reserve right to change code... But I __THINK__       // [097]
        we only need a[ u_duv ]in shader code and               // [097]
        __NOT__ [ u_du0 ]and[ u_du1 ].                          // [097]
                                                                // [097]
        DATE[ 2022_07_26 ]311PM[ KANJICODER ]                   // [097]
                                                                // [097]
    @SYNONYMOUS_VARIABLES@ :                                    // [097]
                                                                // [097]
        Variables tagged with this are the exact same           // [097]
        variable. Possibly should optimize using                // [097]
        #define in the code.                                    // [097]
                                                                // [097]
    #_ROTATING_SAMPLE_POINT_# :                                 // [097]
                                                                // [097]
        Instead of multi-sampling, we are going to              // [097]
        rotate our sample point around the extreme              // [097]
        corners of where a valid sample point can               // [097]
        lay. If a pixel [animate(s)/shimmer(s)] ,               // [097]
        we know that the pixel covers discrete                  // [097]
        units that belong to different                          // [097]
        [ partitions/materials/etc ].                           // [097]
                                                                // [097]
    #_DIA_U_DS0_# / #_DIA_U_DS1_# :---------------------------: // [097]
                                                              : // [097]
        A single pixel has many different [discrete/plank]    : // [097]
        units it could map to. We are doing all of our        : // [097]
        math with DISCRETE UNITS so we know EXACTLY WHAT      : // [097]
        THE FUCK WE ARE RENDERING. If we just lazily map      : // [097]
        one thing onto another using floating point           : // [097]
        percentages, solving anti-aliasing problems will      : // [097]
        be harder in the future because we have "FUZZY"       : // [097]
        logic for what we are actually rendering.             : // [097]
                                                              : // [097]
        |<------#u_dup#----------->|                          : // [097]
        |<------ u_dup.x --------->|                          : // [097]
         @u_ds0@ : DiscreteSample_MIN                         : // [097]
        +--|-----------------------+ ---=---   --=--          : // [097]
        | [0][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] | ONE_PIXEL  u_dup.y       : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][ ] |    |        |            : // [097]
        | [ ][ ][ ][ ][ ][ ][ ][1] |    |        |            : // [097]
        +-----------------------|--+ ---=---   --=--          : // [097]
                              @u_ds1@ : DiscreteSample_MAX    : // [097]
                                                              : // [097]
        0 ===means===> [ MIN / FIRST ]                        : // [097]
        1 ===means===> [ MAX / LAST  ]                        : // [097]
                                                              : // [097]
        Think parametric functions where                      : // [097]
        "t" goes from t_0 to t_1 .                            : // [097]
    :---------------------------------------------------------: // [097]

    #_FIXING_YOUR_FUCKUP_VIDEO_098_# :------------------------: // [098]
                                                              : // [098]
        #_WE_MAY_NEED_TO_REVISE_THIS_FOR_EVEN_DIVISIBILITY_#::: // [098]
                                                              : // [098]
            0x7FFFFF == all 23 usable bits set.               : // [098]
                        THIS IS WRONG FOR[ c_dum ]BECAUSE IT  : // [098]
                        IS NOT EVENLY DIVISIBLE When Doing:   : // [098]
                        c_dut =( 0x7FFFFF / 3 / 5 / 64 )      : // [098]
                                                              : // [098]
                        THIS IS:                              : // [098]
                        c_dut =( 0x7FFF80 / 3 / 5 / 64 )      : // [098]
                                                              : // [098]
            c_dum =( 0x7FFF80 ); //:THE_DUM://                : // [098]
            c_duh =( 0x2AAA80 ); //:HOTEL  ://                : // [098]
            c_dur =( 0x88880  ); //:ROOM   ://                : // [098]
            c_dut =( 0x2222   ); //:TILE   ://                : // [098]
                                                              : // [098]
        #_DEFINE_ALL_DISCRETE_PLANK_CONSTANTS_#:::::::::::::::: // [098]
                                                              : // [098]
            I am taking back what I said back in              : // [098]
            Tutorial[087]... We should define _ALL_           : // [098]
            of the discrete unit constants, even if           : // [098]
            it is more stuff to memorize, because I           : // [098]
            fucked up their values the first time             : // [098]
            I tried to make them.                             : // [098]
                                                              : // [098]
                      2*2*2*2*2*2 === 64                      : // [098]
            0x88880 / 2/2/2/2/2/2 === 0x2222                  : // [098]
                                                              : // [098]
            @DUA@ : Discrete_Unit_Assert                      : // [098]
    :---------------------------------------------------------: // [098]

    @i_oem@ : INPUT - On_Error_Message                          // [098]
    @oem@   :         On_Error_Message                          // [098]

    [MOD2]  @MOD2@  #MOD2#  : Doing Modulo  2 ( %2  ) by hand   // [099]
    [MOD3]  @MOD3@  #MOD3#  : Doing Modulo  3 ( %3  ) by hand   // [099]
    [MOD5]  @MOD4@  #MOD5#  : Doing Modulo  5 ( %5  ) by hand   // [099]
    [MOD64] @MOD64@ #MOD64# : Doing Modulo 64 ( %64 ) by hand   // [099]
                                                                // [099]
    @TMMC@: Tile Map Math Collision                             // [099]
                                                                // [099]
        Figure out what cell a given [pixel||unit] is within    // [099]
        by doing "tile map math collision". AKA: What cell      // [099]
        is the unit "colliding/overlapping" with.               // [099]
                                                                // [099]
    #_BRANCHLESS_CHECKERBOARD_# :-----------------------------: // [099]
                                                              : // [099]
        //:::::::::::::::::::::::::::::::::::::::::::::::://  : // [099]
        //: Figure Out The Checkerboard Value Of XY      ://  : // [099]
        //: coordinate of different geometry elements.   ://  : // [099]
        //: Calculations are BRANCHLESS way to calculate ://  : // [099]
        //: if BOTH ARE ODD ( 1 == 1 ) or BOTH ARE EVEN  ://  : // [099]
        //: ( 0 === 0 ).                                 ://  : // [099]
        //:                                              ://  : // [099]
        //:   X  &  Y ==> abs( X - Y ) ==>( 0 || 1 )     ://  : // [099]
        //:   -------                                    ://  : // [099]
        //:   0  &  1 ==> abs( 0 - 1 ) ==> 1             ://  : // [099]
        //:   1  &  0 ==> abs( 1 - 0 ) ==> 1             ://  : // [099]
        //:   0  &  0 ==> abs( 0 - 0 ) ==> 0             ://  : // [099]
        //:   1  &  1 ==> abs( 1 - 1 ) ==> 0             ://  : // [099]
        //:::::::::::::::::::::::::::::::::::::::::::::::://  : // [099]
                                                              : // [099]
        i_h02 =abs(                                           : // [099]
            I32( u_h03.x -(( u_h03.x / u_2)*u_2)) //:MOD2://  : // [099]
        -   I32( u_h03.y -(( u_h03.y / u_2)*u_2)) //:MOD2://  : // [099]
        );;                                                   : // [099]
                                                              : // [099]
    :---------------------------------------------------------: // [099]
    #_BE_CONSISTENT_WITH_VARIABLE_CONVENTIONS_# :-------------: // [099]
                                                              : // [099]
        @i_h01@/@h01@ : Did_You_Mean[ h02 /AKA/ i_h02 ] :     : // [099]
        @i_r01@/@r01@ : Did_You_Mean[ r02 /AKA/ i_r02 ] :     : // [099]
        @i_t01@/@t01@ : Did_You_Mean[ t02 /AKA/ i_t02 ] :     : // [099]
                                                              : // [099]
            If we are going to be consistent with or naming   : // [099]
            convention, a variable that is either a[ 0 ]      : // [099]
            or[ 1 ]gets a "02" postfix, not a "01" postfix.   : // [099]
            ( Because there are "2 total possible values" )   : // [099]
    :---------------------------------------------------------: // [099]

    #_WHAT_IS_EDIGAME_# :                                       // [103]
                                                                // [103]
        //:----------------------------------------------://    // [103]
        //: @d_edigame_edi@ : Editor State               ://    // [103]
        //: @d_edigame_gam@ : Game   State               ://    // [103]
        //:                                              ://    // [103]
        //: Member variable names based on:              ://    // [103]
        //: d_hotel13_sam from HOTEL13.                  ://    // [103]
        //:                                              ://    // [103]
        //: For simplicity, any shared state is simply   ://    // [103]
        //: COPIED OVER from "edi" <==> "gam" when       ://    // [103]
        //: switching modes, rather than putting shared  ://    // [103]
        //: state in yet a 3rd object.                   ://    // [103]
        //:----------------------------------------------://    // [103]
                                                                // [103]
    #enu_edi# : Enumeration - EDItor mode                       // [103]
    #enu_gam# : Enumeration - GAMe   mode                       // [103]
                                                                // [103]
    #_WHY_NOT_CALL_IT_NEXT_# :                                  // [103]
                                                                // [103]
        From past experience I find it really annoying          // [103]
        for "next" (NEX) and "back" (BAK) commands to           // [103]
        infinitely loop rather than stop at the end.            // [103]
                                                                // [103]
        So if we are going to infinitely cycle                  // [103]
        through options, that needs to be it's own              // [103]
        command with that behavior, and we only                 // [103]
        cycle in ONE DIRECTION to limit how confusing           // [103]
        the behavior is.                                        // [103]
                                                                // [103]
        We will call the function[ F_CYC ]for "Cycle".          // [103]

    #_DOWN_HANDLER_WHEN_BEHAVING_AS_A_GAME_# :                  // [104]
                                                                // [104]
        Main key down handler for when[ AIM ]project is         // [104]
        behaving as a __GAME__.                                 // [104]
                                                                // [104]
    #_DOWN_HANDLER_WHEN_BEHAVING_AS_AN_EDITOR_# :               // [104]
                                                                // [104]
        Main key down handler for when[ AIM ]project is         // [104]
        behaving as a __EDITOR__.                               // [104]
                                                                // [104]
    #_HIGHEST_LEVEL_KEYBOARD_DOWN_HANDLER_# :                   // [104]
                                                                // [104]
        The keyboard handler that routes to either the          // [104]
        "EDITOR MODE" keyboard handler or the "GAME MODE"       // [104]
        keyboard handler, depending on the state of the         // [104]
        [ d_edigame_mod ]flag.                                  // [104]

    @camsnap_cel@ : What cell of 3x3 levelpack grid is          // [105]
                  : the numberkey associated with?              // [105]
                  : camsnap_cel == CameraSnap - Cell            // [105]

    #_OUT_OF_BOUNDS_DIAGNOSIS_# :                               // [106]
                                                                // [106]
        Darken the pixels if the sample point is                // [106]
        out of bounds, so that we can fix our                   // [106]
        rendering math.                                         // [106]
                                                                // [106]
        Looks like the TOP_LEFT origin is actually              // [106]
        correct, and the BOTTOM_RIGHT origin is                 // [106]
        stretching out too far. Probably because we             // [106]
        are calculation the "discrete units per pixel"          // [106]
        or whatever we called it, incorrectly.                  // [106]

    #_MV1_IS_MAGNITUDE_OF_VP1_THE_DATA_VIEWPORT_# :             // [107]
                                                                // [107]
        Why am I screaming about this? Because the line         // [107]
        of code under this comment was __WRONG__ and we         // [107]
        are fixing it now. So I am screaming with commentary    // [107]
        so that you know in NO UNCERTAIN TERMS what             // [107]
        we are supposed to be calculating here.                 // [107]
                                                                // [107]
        The magnitude (aka length) of VIEWPORT ONE (VP1).       // [107]
        VP1 == off screen data selection viewport.              // [107]

    #ZEBASIS# :                                                 // [108]
                                                                // [108]
        @zebasis@ == Zero Basis                                 // [108]
        The geometric element type that defines what it         // [108]
        means for the camera (camerah) to be __NEITHER__        // [108]
        zoomed-in nor zoomed-out.                               // [108]
                                                                // [108]
        For example, if the ZEBASIS is[ c_camerah_dut ],        // [108]
        then the camera is NEUTRAL when VP1 data viewport       // [108]
        is selecting exactly 1 game sized tile.                 // [108]
                                                                // [108]
        If ZEBASIS is[ c_camerah_dur ], the camera is           // [108]
        NEUTRAL when VP1 is selecting exactly an entire         // [108]
        [ ROOM / LEVEL ] worth of data.                         // [108]
                                                                // [108]
        The camera position itself is a discrete unit           // [108]
        in [worldspace/dumspace] that may or may not            // [108]
        snap to a geometric unit of the active ZEBASIS          // [108]
        type.                                                   // [108]
                                                                // [108]
    @zeb@ : ZEB == ZEBASIS , ZEBASIS == Zero Basis              // [108]
                                                                // [108]
    #_HOW_TO_USE_ZERO_BASIS_GEOMETRIC_ELEMENTS_# :              // [108]
                                                                // [108]
        Tells us how to rectify the issue that, the             // [108]
        geometric element we are using as a ZERO BASIS,         // [108]
        is a PERFECT SQUARE, yet the camera is most             // [108]
        likely a NON-SQUARE RECTANGLE.                          // [108]
                                                                // [108]
        Do we create our rectangle by INSCRIBING the            // [108]
        zero-basis shape? Or by CIRCUMSCRIBING the              // [108]
        zero-basis shape? Or do we perform NO ACTION,           // [108]
        and allow the rendering to become squashed              // [108]
        or stretched on a given axis?                           // [108]
                                                                // [108]
    #_CIR_CUM_DIAGRAM_# :-------------------------------------: // [108]
                                                              : // [108]
                +---=---+     +---=---++---=---++---=---+     : // [108]
                |       |     |       ||       ||       |     : // [108]
                |zebasis|     |<----------vp0---------->|     : // [108]
                |       |     |       ||       ||       |     : // [108]
                +---=---+     +---=---++---=---++---=---+     : // [108]
                                                              : // [108]
                +---=---+                                     : // [108]
                +=======+                                     : // [108]
                |       | <---------- c_camerah_cir_cum_inn   : // [108]
                +=======+                                     : // [108]
                +---=---+                                     : // [108]
                                                              : // [108]
        +=======================+                             : // [108]
        |       +---=---+       |                             : // [108]
        |       |       |       |                             : // [108]
        |       |       |       | <-- c_camerah_cir_cum_out   : // [108]
        |       |       |       |                             : // [108]
        |       +---=---+       |                             : // [108]
        +=======================+                             : // [108]
                                                              : // [108]
              +===========+                                   : // [108]
              | +---=---+ |                                   : // [108]
              | |       | |                                   : // [108]
              | |zebasis| | <-------- c_camerah_cir_cum_not   : // [108]
              | |       | |                                   : // [108]
              | +---=---+ |                                   : // [108]
              +===========+                                   : // [108]
                                                              : // [108]
    :---------------------------------------------------------:

    @zes@ : Zero Span In Discrete Units                          // [109]
    @D_U@: Discrete Units ( AKA: Plank Units )                   // [109]
    #Necessary#    : A necessary non-negotiable feature.         // [109]
    #FeatureCreep# : A "nice to have" but we don't have to.      // [109]
    #CAR# / @CAR@  : Constant_ARray (const array of consts)      // [109]

    @vp0_map@ : VP0 , Minor_Axis_Percentage                      // [110]
    @MAJA@    : MAJor Axis                                       // [110]
    @MINA@    : MINor Axis                                       // [110]

    #_WHY_MAXUNIT_MINUS_TWO_# :-------------------------------:  // [111]
                                                              :  // [111]
        We need to scale VP1 around an origin...              :  // [111]
        But if that origin is a "single discrete point"       :  // [111]
        that would mean our camera will always be an          :  // [111]
        ODD_NUMBER_OF_UNITS , that sounds fucking horrible.   :  // [111]
                                                              :  // [111]
        So, our "origin" of the camera is ACTUALLY            :  // [111]
        a 2x2 rectangle of discrete rendering units.          :  // [111]
                                                              :  // [111]
        [ camdu_x , camdu_y ] is the top-left cell            :  // [111]
        of this 2x2 rectangle.                                :  // [111]
                                                              :  // [111]
        +---=---=---+---=---=---+                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        |  camdu_x  |           |                             :  // [111]
        |  camdu_y  |           |                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        +---=---=---+---=---=---+                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        |           |           |                             :  // [111]
        +---=---=---+---=---=---+                             :  // [111]
                                                              :  // [111]
        If the camera origin was a POINT :  ( it's __NOT__ )  :  // [111]
                                                              :  // [111]
            THEN: c_camerah_maxunit === ( c_dum - 1 )         :  // [113][BUG][111]
                                                              :  // [111]
        If the camera origin was a 2X2 RECT : ( it __IS___ )  :  // [111]
                                                              :  // [111]
            THEN: c_camerah_maxunit === ( c_dum - 2 )         :  // [113][BUG][111]
                                                              :  // [111]
    :---------------------------------------------------------:  // [111]
                                                                 // [111]
    @EXAMPLE_PROBLEM@ : The diagram in the comments              // [111]
                      : represents an example case so            // [111]
                      : you don't go "WTF?" when wondering       // [111]
                      : why the formula looks the way            // [111]
                      : it does.                                 // [111]
                                                                 // [111]
    @sox@ : Snapped X                                            // [111]
    @soy@ : Snapped Y                                            // [111]
                                                                 // [111]
    @FUCK_YOUR_GARBAGE_COLLECTOR@ :                              // [111]
                                                                 // [111]
        Code exists to subvert garbage collection.               // [111]
        A very often-re-used temp variable probably.             // [111]
                                                                 // [112]
    @h_w@ : Half Width   ( 2022_08_05 )                          // [112]
    @h_h@ : Half Height  ( 2022_08_05 )                          // [112]
    @duo@ : Discrete_Units_Overflow                              // [112]
                                                                 // [---]
    @CAM_PAN@ : Camera Reference For Panning Operataion.         // [113]
    @PAN_CAM@ : You_Mean[ CAM_PAN ]( general to specific )       // [113]
                                                                 // [113]
    #Translate_Or_Shake# :------------------------------------:  // [113]
                                                              :  // [113]
        When the high level camera get's close enough to      :  // [113]
        the edge of the screen, there will start to be        :  // [113]
        NO VISIBLE CHANGE to the screen even though the       :  // [113]
        camera origin [ camdu_x , camdu_y ] is still moving   :  // [113]
        because of the corrections to[ VP1 ]that prevent      :  // [113]
        it from leaking outside of @THE_DUM@ (c_dum).         :  // [113]
                                                              :  // [113]
        To give a bit of feeback , I am going to add a        :  // [113]
        [ cam.shake_x , cam.shake_y ]modifier flag that       :  // [113]
        will make the camera shake if you are forcing         :  // [113]
        it further and further into the edge of               :  // [113]
        the renderable space. Maybe make it shake             :  // [113]
        harder and harder depending on how deep               :  // [113]
        into the edge you are... Yes... Do that.              :  // [113]
                                                              :  // [113]
        Hmm... But the PANNING function is __NOT__ the place  :  // [113]
        to apply that kind of shake feedback. That would      :  // [113]
        be something for[ CAMERAH_VP1 ].                      :  // [113]
                                                              :  // [113]
        Keep this code for reference, it is not               :  // [113]
        quite correct.                                        :  // [113]
                                                              :  // [113]
            b_0 & b_1 should not be the HARD LIMITS,          :  // [113]
            but the limits for when VP1 is going to           :  // [113]
            leak over edge.                                   :  // [113]
                                                              :  // [113]
            --------------------------------------------------:  // [113]
                                                              :  // [113]
            n_x = cam.camdu_x + ( i_pax * pan_fac );          :  // [113]
            n_y = cam.camdu_y + ( i_pay * pan_fac );          :  // [113]
                                                              :  // [113]
            if( n_x < b_0 || n_x > b_1 ){                     :  // [113]
                                                              :  // [113]
                n_a = ( n_x >= 0 ? n_x : (0-n_x) );           :  // [113]
                c_s = ( n_a % 2 );                            :  // [113]
                if( n_x < b_0 ){ cam.shake_x =( 0 + c_s );};  :  // [113]
                if( n_x > b_1 ){ cam.shake_x =( 0 - c_s );};  :  // [113]
            }else{                                            :  // [113]
                cam.shake_x =(  0  );                         :  // [113]
                cam.camdu_x =( n_x );                         :  // [113]
            };;                                               :  // [113]
            if( n_y < b_0 || n_y > b_1 ){                     :  // [113]
                                                              :  // [113]
                n_a = ( n_y >= 0 ? n_y : (0-n_y) );           :  // [113]
                c_s = ( n_a % 2 );                            :  // [113]
                if( n_y < b_0 ){ cam.shake_y =( 0 + c_s );};  :  // [113]
                if( n_y > b_1 ){ cam.shake_y =( 0 - c_s );};  :  // [113]
            }else{                                            :  // [113]
                cam.shake_y =(  0  );                         :  // [113]
                cam.camdu_y =( n_y );                         :  // [113]
            };;                                               :  // [113]
                                                              :  // [113]
    :---------------------------------------------------------:  // [113]
                                                                 // [113]
    #_SHAKE_WHEN_PRESSED_# :----------------------------------:  // [113]
                                                              :  // [113]
        When panning into the boundaries of the world ,       :  // [113]
        we should shake the camera.                           :  // [113]
        SEE[ #Translate_Or_Shake# ]                           :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |           +---=---=---=---+           |             :  // [113]
        |           |               |           |             :  // [113]
        |           |       +       |           |             :  // [113]
        |           |               |           |             :  // [113]
        |           +---=---=---=---+           |             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |               +---=---=---=---+       |             :  // [113]
        |               |               |       |             :  // [113]
        |               |       +       |       |             :  // [113]
        |               |               |       |             :  // [113]
        |               +---=---=---=---+       |             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |                   +---=---=---=---+   |             :  // [113]
        |                   |               |   |             :  // [113]
        |                   |       +       |   |             :  // [113]
        |                   |               |   |             :  // [113]
        |                   +---=---=---=---+   |             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        |                      |               ||             :  // [113]
        |                      |       +       ||             :  // [113]
        |                      |               ||             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        KEEP PANNING RIGHT WILL SHAKE SCREEN ON X AXIS :      :  // [113]
                                                              :  // [113]
        Because[ camdu_x , camdu_y ]is still moving,          :  // [113]
        but the resulting[ VP1 ]is not changing because       :  // [113]
        we are already pressed up against the boarder.        :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        |                      |               ||             :  // [113]
        |                      |           +   ||             :  // [113]
        |                      |               ||             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        |                      |               ||             :  // [113]
        |                      |              +||             :  // [113]
        |                      |               ||             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
        [ @nopan_x@ , @nopan_y@ ]                             :  // [113]
                                                              :  // [113]
        Try to pan RIGHT ( > > > ) one more time will         :  // [113]
        turn the[ nopan ] flag on. This should also           :  // [113]
        give us some type of feedback, but I don't            :  // [113]
        know what yet.                                        :  // [113]
                                                              :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        |                      |              !||             :  // [113]
        |                      |   > > > > >  +||             :  // [113]
        |                      |              !||             :  // [113]
        |                      +---=---=---=---+|             :  // [113]
        +---=---=---=---=---=---=---=---=---=---+             :  // [113]
                                                              :  // [113]
    :---------------------------------------------------------:  // [113]
                                                                 // [113]
                                                                 // [113]
    #nopan_x#  &&  #nopan_y# :                                   // [113]
                                                                 // [113]
        Non-zero when a panning action was IGNORED because       // [113]
        it was going to make[ camdu_x , camdu_y ] go out         // [113]
        of bounds.                                               // [113]
                                                                 // [113]
        This will be used in a similiar way to the notes         // [113]
        in[ #_SHAKE_WHEN_PRESSED_# ].                            // [113]
                                                                 // [113]
        Not implementing yet because we have already             // [113]
        written enough code for video #113                       // [113]
                                                                 // [113]
                                                                 // [113]
    #_WHAT_IS_NOPAN_FOR_# :                                      // [113]
                                                                 // [113]
        [ nopan_x , nopan_y ]is used to let the                  // [113]
        camera remember that it "ignored" the last               // [113]
        pan command because it would put the camera              // [113]
        origin out of bounds.                                    // [113]
                                                                 // [113]
        We will use this for some type of user feeback.          // [113]
        RELATED_NOTE[ #_SHAKE_WHEN_PRESSED_# ]                   // [113]
                                                                 // [113]
    #[ cam.shake_x ]# :                                          // [113]
    #[ cam.shake_y ]# :                                          // [113]
                                                                 // [113]
        DO NOT DO THIS FOR THE FORESEEABLE FUTURE.               // [113]
                                                                 // [113]
        The shaking I want to do is built into                   // [113]
        [ F_CAMERAH_VP1 ]at a lower level than this.             // [113]
                                                                 // [113]
        Eventually we will probably want an environmental        // [113]
        screen shake for when bombs go off. That                 // [113]
        MIGHT entail adding[ cam.shake_x , cam.shake_y ]...      // [113]
                                                                 // [113]
        But the "tactile feedback" I want for when               // [113]
        user pushes the camera into the bounds of the            // [113]
        words is __NOT__ going to use any camera                 // [113]
        state [ members / variables ] to achieve this.           // [113]
                                                                 // [113]
    @pan_fac@ : PANning scalefactor to affect panning speed.     // [113]
    @fac_pan@ : YOU_MEAN[ pan_fac ]( @P_O_A_S_T_I@ )             // [113]
    @P_O_A_S_T_I@ : Pick One And Stick To It                     // [113]
                                                                 // [---]
    @ARK_K_0@ : ARrowKey - FIRST                                 // [114]
    @ARK_K_1@ : ARrowKey - LAST                                  // [114]
    @ARK_LEF@ : ARrowKey - LEFT                                  // [114]
    @ARK_DOW@ : ARrowKey - DOWN                                  // [114]
    @ARK_UPP@ : ARrowKey - UPP                                   // [114]
    @ARK_RIG@ : ARrowKey - RIGHT                                 // [114]

    #_LOW_L_CAM_C_# :  Low Level Camera Controls                 // [115]
    #_HIG_L_CAM_C_# : High Level Camera Controls                 // [115]
    @F_KEYMAST_ZOM@ : KeyboardMaster - ZOOM handler.             // [115]
    @i_dvx@ : INPUT( to function ) : Direction_Vector_X          // [115]
    @i_dvy@ : INPUT( to function ) : Direction_Vector_Y          // [115]
    @_DIRTY_FLAG_@ : If something is dirty it means that it      // [115]
                   : has been altered in some way that           // [115]
                   : requires us to update other parts of        // [115]
                   : the system for those changes to             // [115]
                   : be fully applied. Basically it means        // [115]
                   : we have a "cache coherency" problem         // [115]
                   : that is in need of being fixed.             // [115]

    #_1TILE_PAN_# : Pan by 1 tile offset in low level code.      // [116]

    @d_camerah_vp1@ : Added because we need to calculate a       // [118]
                    : SIGNED[ vp1 ]value if we are to do         // [118]
                    : bounds checking.                           // [118]
                                                                 // [118]
    @POINTER@ : Tagging reference types where I                  // [118]
              : expect pointer-like behavior.                    // [118]
                                                                 // [118]
    @SIGNED@  : Tagging Variable As SIGNED (can be negative )    // [118]
                                                                 
    [!#!] : Denotes a delta where I put the                      // [119]
          : WRONG NUMBER ( [###] ) in a previous tutorial.       // [119]

    @d_camwall@ : A global telling us how "hard" the             // [121]
                : camera is pressed into the "wall"              // [121]
                : of the [ world / dum / renderable region ]     // [121]
                : Used to give better feedback.                  // [121]

    #_CAMERA_STRESS_FEEDBACK_# :                                 // [122]
                                                                 // [122]
        How "hard" is the camera pushed into the boundaries      // [122]
        of the renderable region? The greater the value          // [122]
        in[ d_camwall[ x_0 | x_1 | y_0 | y_1 ], the              // [122]
        more firmly you are pressed into the respective          // [122]
        sides.                                                   // [122]
                                                                 // [122]
    @INNOCENT_UNTIL_PROVEN_GUILTY@ :                             // [122]
                                                                 // [122]
        Flag defaults to "true" and we try to disprove it.       // [122]
                                                                 // [122]
    @nni@ : Non_Negative_Integer                                 // [122]

    #_CAMERA_STRESS_CODE_DIDNT_BELONG_HERE_# :                   // [123]
                                                                 // [123]
        The section of code labeled[ _NOPAN_CAMWALL_MAG_ ]       // [123]
        used to be here. We moved it into                        // [123]
        the[ CAMERAH_VP1 ]function where it belongs.             // [123]
                                                                 // [123]
    @SHORTHAND_MACRO@ : The variable only exists to save         // [123]
                      : column space in our code.                // [123]
                                                                 // [123]
    [WAI] / #WAI# / @WAI@ :-----------------------------------:  // [123]
                                                              :  // [123]
        WAI === " Where Am I ? "                              :  // [123]
                                                              :  // [123]
        When writing "WAI" in comments write it:              :  // [123]
        ----------------------------------------              :  // [123]
                                                              :  // [123]
            [WAI]                                             :  // [123]
                                                              :  // [123]
        ----------------------------------------              :  // [123]
        Because it is used in a similiar manner               :  // [123]
        as [ATF] ( About This Function )                      :  // [123]
                                                              :  // [123]
        "WAI" is used so when we do a "find in files"         :  // [123]
        search, we can see the "use case summary" of          :  // [123]
        a short hand variable.                                :  // [123]
                                                              :  // [123]
        EXAMPLE :                                             :  // [123]
                                                              :  // [123]
            let A =( ASS_NNI ///[WAI]:CameraStress/// );      :  // [123]
                                                              :  // [123]
            This means that you are in a section of code      :  // [123]
            where we are calculating "CameraStress" and       :  // [123]
            the shorthand variable "A" is being used          :  // [123]
            for these "CameraStress" calculations.            :  // [123]
    :---------------------------------------------------------:  // [123]
                                                                 // [123]
    #_MONOCHROME_STRESS_# :                                      // [123]
                                                                 // [123]
        Rather than tinting pixels red, lets make                // [123]
        pixels mono-chrome red based on their lumonosity.        // [123]
        Reason? To make it more OBVIOUS what I am looking at.    // [123]
                      
    @u_c_m@ : U32 - c_m , c_m == d_camwall MAX POSSIBLE VALUE    // [124]
    @f_c_m@ : F32 - c_m , c_m == d_camwall MAX POSSIBLE VALUE    // [124]
    @MPV@ / #MPV# / [MPV] :  Max Possible Value (Like:"m_i")     // [124]
                                                                 // [124]
    #_NOW_MAG_# : The variables here are now magnitudes rather   // [124]
                : than edge boundary markers as they were        // [124]
                : in video #122.                                 // [124]
                                                                 // [124]
    @RIGHTOUS@ : I can't spell, it's spelled:"RIGHTEOUS"         // [124]
                                                                 // [124]
    #FIX_001# : SEE[ #GFD_001# ]For Fix#1 notes.                 // [124]
                                                                 // [124]
    #FIX_002# :-----------------------------------------------:  // [124]
                                                              :  // [124]
        [WRONG/EVIL/INCORRECT  ] : U32 u_c_m =( c_dut / u_2 );:  // [124]
        [GOOD/RIGHTEOUS/CORRECT] : U32 u_c_m =( c_dum / u_2 );:  // [124]
                                                              :  // [124]
        u_c_m === U32 c_m , where c_m == d_camwall max value. :  // [124]
                                                              :  // [124]
        It is the "max stress value" that can exist on        :  // [124]
        any edge of the high level camera. By accidentially   :  // [124]
        making it the size of ONE TILE ( c_dut ) instead      :  // [124]
        of the size of the entire renderable space ( c_dum ), :  // [124]
        we end up calculating values that are in excess of    :  // [124]
        80,000% instead of values in the range 0 to 100 %.    :  // [124]
                                                              :  // [124]
        ( ( 0x7FFF80 / 2 ) / 0x002222 ) === 8738 === 0x1E0    :  // [124]
                                                              :  // [124]
        ( ( 0x7FFF80 / 2 ) / ( 0x002222 / 2 )  ) === 0x3C0    :  // [124]
          |<--ActualMax->|   |<-c_dut / 2 ->|                 :  // [124]
    :---------------------------------------------------------:  // [124]
                                                                 // [124]
    #VP1_NOT_VPC# :                                              // [124]
        We made the mistake of using "VPC" magnitude here        // [124]
        when it should have been "VP1". Noticable bug            // [124]
        where toggling letterboxing on/off changes render        // [124]
        can be observed when using "VPC" instead of "VP1".       // [124]
                                                                 // [124]
    #_WE_ARE_CLOSE_RANT_# :                                      // [124]
                                                                 // [124]
          :---------------------------------------------------:  // [124]
          : We are close, but the shader code is              :  // [124]
          : still [ WRONG / INCORRECT ].                      :  // [124]
          :                                                   :  // [124]
          : ------------------------------------------------- :  // [124]
          :                                                   :  // [124]
          : I cannot think straight. It is [12:38] PM.        :  // [124]
          : I got up at 10PM yesterday. That is...            :  // [124]
          : 14 hours of mostly coding with short breaks       :  // [124]
          : in-between. There is no way in hell I can         :  // [124]
          : make "10 videos per day".                         :  // [124]
          :                                                   :  // [124]
          : 1 video per day === 999 days to 999 videos.       :  // [124]
          : 999 days is very roughly 3 years...               :  // [124]
          :                                                   :  // [124]
          : I'd very much like to be faster than that...      :  // [124]
          : 100 videos per month is what?                     :  // [124]
          : 100 / 30 === 3.333 videos per day...              :  // [124]
          :                                                   :  // [124]
          : I think "4 videos per day" is managable.          :  // [124]
          :---------------------------------------------------:  // [124]
                                                                 // [124]
          :---------------------------------------------------:  // [124]
    [124] : Edited shader code. VP1 Camera stress             :  // [124]
    [OLD] : boundary markers move way too fucking             :  // [124]
          : fast and exceed the halfway point of              :  // [124]
          : the screen.                                       :  // [124]
          :                                                   :  // [124]
          : #_WE_ARE_CLOSE_RANT_#                             :  // [124]
          :                                                   :  // [124]
          : Editor's note :                                   :  // [124]
          :     This was the original delta comment (#124#)   :  // [124]
          :     but I started finding the bugs as I was       :  // [124]
          :     filming the summary video.                    :  // [124]
          :---------------------------------------------------:  // [124]

    @BAD_DEP_ORD@ : Bad Dependency Ordering ,                    // [125]
                  : means the source code is written in          // [125]
                  : the wrong order.                             // [125]
                                                                 // [125]
    #_RES_CAN_BEFORE_CAMERAH_INCLUDED_# :                        // [125]
                                                                 // [125]
        Looking at the code, [ F_RES_CAN ]is written in          // [125]
        the wrong location now. It references a function         // [125]
        before that function is declared. We should              // [125]
        possibly fix this if we can.                             // [125]
        ( F_RES_CAN references F_CAMERAH_VP1 before )            // [125]
        ( the VP1 functions section occurs.         )            // [125]

    #NUMPAD_TO_HOTEL_CELL_INDEX_LUT# :                           // [127]
                                                                 // [127]
        Takes a number key represented by values                 // [127]
        1 to 9 and maps them to the hotel cell index.            // [127]
        The[ hi9 ]value is the 1D value representing             // [127]
        a [ hotel / levelpack ]location in the                   // [127]
        3x3 grid of [ hotel/levelpack(s) ]within                 // [127]
        THE_DUM ( the renderable region of worldmap ).           // [127]

    STOP_FUCKING_UP_YOUR_FOOTNOTES_PLACEHOLDER_128               // [128]

    @zeb_m_i@ : ZEroBasis (enum) Max_Index                       // [129]
                                                                 // [129]
    #_NUMPAD_CYCLE_# :                                           // [129]
                                                                 // [129]
        Sequential presses of the same number key                // [129]
        should cycle the "but_not" value.                        // [129]
        ( but_not == Button _ NumberOfTimes (pressed) )          // [129]
                                                                 // [129]
        "but_not" will help us cycle through zerobasis(zeb)      // [129]
        values.                                                  // [129]
                                                                 // [129]
    #_SEXYCAM_SETS_ZEROBASIS_# :                                 // [129]
                                                                 // [129]
        The state of sexycam is used to modify the               // [129]
        camerah zerobasis value, this creates a snappy           // [129]
        "zoom in" effect.                                        // [129]
                                                                 // [129]
    #TIMES_PRESSED___TO___ZEB_ENU# :                             // [129]
                                                                 // [129]
        Convert number of times in a row a numberkey             // [129]
        on the numpad was pressed to the corresponding           // [129]
        zero basis enumeration we should use.                    // [129]
                                                                 // [129]
        We want to progressively "zoom in" deeper and            // [129]
        deeper with successive presses of the __SAME__           // [129]
        number key, so this is basically a table                 // [129]
        that inverts the zero basis and makes it                 // [129]
        count down instead of up.                                // [129]
                                                                 // [129]
    @DEFAULTZOOM@ : Default Zoom Level, which is ZERO            // [129]
                  : because it is "NEUTRAL"                      // [129]
                  : (neither zoomed in or zoomed out )           // [129]
                                                                 // [129]
    STOP_FUCKING_UP_YOUR_FOOTNOTES_PLACEHOLDER_129               // [129]

*** ******************************************************** **/
//:==========================:HASHTAG_OR_ATTED_COMMENTS:[085]://
//:THIS_COMMITS_DELTA_NOTE:[085]:============================://
/** ******************************************************** ***
            
    [130] : Finished F_SEXYCAM_PAD_NUM , smaller zero            // [130]
          : basis values seem to make the render SHAKE,          // [130]
          : especially while holding the zoom("+"/"-")           // [130]
          : keys.... Figure that out sometime, it looks          // [130]
          : horrible. DATE[ 2022_08_09 ]TIME[10:20]AM            // [130]

*** ******************************************************** **/
//:============================:THIS_COMMITS_DELTA_NOTE:[085]://


