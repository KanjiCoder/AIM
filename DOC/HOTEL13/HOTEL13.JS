
    window.alert( "[TODO:FLAME_TRIP_ADJUSTMENT]" );
    window.alert( "[TRIPPED_BOMBS_MUST_ANIMATE_FIRST]" );
    window.alert( "[Create OBE : fractal_OBliteratE_Tile]" );
    window.alert( "[make laser propegantion _DET function first]"    );

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


    const d_hotel13_yes_aim =( 0
    ||  (!( "undefined" === typeof notnode ))  
    ||  (!( "undefined" === typeof yesnode ))  
    );;
    const d_hotel13_not_aim =( 
        (!d_hotel13_yes_aim)  );;
        
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
                alert( "[err:msg]:" + msg );
                throw( "[err:msg]:" + msg );
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
            //:check_above:------------------------------://    // [CAP_H13]
            if( o_hit <= 0 ){                                   // [CAP_H13]
                                                                // [CAP_H13]
                //:#_DIBAMIS_DIV_#://                           // [CAP_H13]
                                                                // [CAP_H13]
                //:  LOOP_DIRECTION[ _UP_ ] ------------ ://    // [CAP_H13]
                for( te7 = i_te7+1 ; te7 <=(7-1) ; te7++ ){     // [CAP_H13]
                                                                // [CAP_H13]
                    dia = d_hotel13_te7_dia[ te7 ];             // [CAP_H13]
                    lat = d_hotel13_te7_lat[ te7 ];             // [CAP_H13]
                                                                // [CAP_H13]
                    chk    =(d_hotel13_te7_lat[6-(te7-i_te7)]); // [CAP_H13]
                    dibamis=(d_hotel13_te7_peb[  (te7-i_te7)]); // [CAP_H13]
                    ASS( chk === dibamis , "[chk:dibamis]");    // [CAP_H13]
                                                                // [CAP_H13]
                    //: ttx == tx0 == tx1                       // [CAP_H13]
                    //: tty == ty0 == ty1                       // [CAP_H13]
                    ttx = Math.floor( t_x / dibamis );          // [CAP_H13]
                    tty = Math.floor( t_y / dibamis );          // [CAP_H13]
                                                                // [CAP_H13]
                //:NOLOOP:===============================://    // [CAP_H13]
                //:NOLOOP:===============================://    // [CAP_H13]
                                                                // [CAP_H13]
                    //:almost_a_cutpaste:002_of_003:-----://    // [CAP_H13]
                                                                // [CAP_H13]
                    dpx =ldx+dia+(lmx*lat)+ttx ;                // [CAP_H13]
                    dpy =ldy+dia+(lmy*lat)+tty ;                // [CAP_H13]
                    dpi =( dpx + ( dpy * 2048 ) );              // [CAP_H13]
                    dci =( 4 * dpi );                           // [CAP_H13]
                                                                // [CAP_H13]
                    u32=(( 0x00                                 // [CAP_H13]
                    |   ( d_pix2048[ dci + 0 ] << 24 )          // [CAP_H13]
                    |   ( d_pix2048[ dci + 1 ] << 16 )          // [CAP_H13]
                    |   ( d_pix2048[ dci + 2 ] <<  8 )          // [CAP_H13]
                    |   ( d_pix2048[ dci + 3 ] <<  0 )          // [CAP_H13]
                    )>>> 0 );;                                  // [CAP_H13]
                    //:...u32.&.0x12345678...............://    // [CAP_H13]
                    v16 =( u32 & 0xF0000000 ) >>>( 28 );        // [CAP_H13]
                    tik =( u32 & 0x0FFFFFFF ) >>>(  0 );        // [CAP_H13]
                                                                // [CAP_H13]
                    if( v16 >(   0  )  ){                       // [CAP_H13]
                                                                // [CAP_H13]
                        o_hit =( 1 );                           // [CAP_H13]
                    };;                                         // [CAP_H13]
                    //:-----:almost_a_cutpaste:002_of_003://    // [CAP_H13]
                                                                // [CAP_H13]
                //:===============================:NOLOOP://    // [CAP_H13]
                //:===============================:NOLOOP://    // [CAP_H13]
                };;                                             // [CAP_H13]
            };;                                                 // [CAP_H13]
            //:------------------------------:check_above://    // [CAP_H13]
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

    //:   console.log("[d_hotel13_mil]:"
    //:                ,d_hotel13_mil );;
    //:   console.log("[d_hotel13_tms]:"
    //:                ,d_hotel13_tms );;
    

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
    
        F_HOTEL13_SAM_TIKLOOP(); //:LoopForever://
    };;
    
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

        ASS( g_x >= 0 && g_x <=( 5-1 ) , "[AGX]" );
        ASS( g_y >= 0 && g_y <=( 5-1 ) , "[AGY]" );

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
    
    const   F_HOTEL13_SAM_MOU_CLK = function
    PRIVATE_F_HOTEL13_SAM_MOU_CLK(
        evt_clk
    ){
        var clk_p_x = evt_clk.offsetX ;
        var clk_p_y = evt_clk.offsetY ;
        
        F_HOTEL13_SAM_EDI_CLK(
            clk_p_x
        ,   clk_p_y
        );;
    
        console.log( "[evt_clk]:" , evt_clk );
    };;
    const   F_HOTEL13_SAM_MOU_MOV = function
    PRIVATE_F_HOTEL13_SAM_MOU_MOV(
        evt_mov
    ){
        if( 1 == 1 /**Always**/  ){

            /** Update Cursor Position **/

            F_HOTEL13_SAM_EDI_MOU(
                evt_mov.offsetX
            ,   evt_mov.offsetY
            );;
        };;
        if( sam.edi_mod_hol >= 1 ){
        
            F_HOTEL13_SAM_EDI_CLK(
                evt_mov.offsetX
            ,   evt_mov.offsetY
            );;
        };;
    
        //////////////////console.log( "[evt_mov]:" , evt_mov );
    };;
    
    
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
    
    
    
    
    const   F_HOTEL13_SAM_KEY_DOW = function
    PRIVATE_F_HOTEL13_SAM_KEY_DOW(
        evt_key
    ){
        let sam = d_hotel13_sam ;
        var asc = F_HOTEL13_EVT_ASC( evt_key );

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
    if( d_hotel13_not_aim ){
    
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
    
    }else{
        ERR("[unexpectedcase:2022_07_05]");
    };;
    //:========================:HOTEL13_STAND_ALONE_SETUP://




/** BOMB_LASER_ECHOBOX_SPARKPIN **************************** ***

    TAG[ bomb-types | bomb types | types-of-bombs ]
    TAG[ types of bombs ]

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
   
*** ******************************************************** **/

