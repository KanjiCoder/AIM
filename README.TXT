[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]
[LIKE_AND_FOLLOW]

Plans For The Future :

    1. We need to get the renderer rendering out
       the basic space, but not the tiles yet.

    2. Once the space is rendered out, we start to
       focus on sockets and rendering different players
       as point sprites.

    3. We need to pay explicit attention to how we
       "pull the fast one" to emulate an open world.

       Worldpace is a 3x3 grid of level packs.

       You are ALWAYS IN THE CENTRAL LEVEL PACK.

       Hence, when you transition from one level pack
       to another, we need to "pull the fast one" and
       do some trickery to maintain a smooth experience.

       Camera should be no futher zoomed out than
       ONE LEVEL PACK in size when the "fast one" is
       pulled, otherwise we will break the illusion
       of an open world.