

    ##[2022_07_18]##############################################

    ############################################################
    ##                                                        ##
    ##  ECHO_PIT : Prevents heroku from blabbing about        ##
    ##           : the confidential[ CID ]and[ C_S ]          ##
    ##           : values I just set.                         ##
    ##                                                        ##
    ##           : "echo off" does __NOT__ prevent this.      ##
    ##                                                        ##
    ############################################################

    git add .

    git commit -m "[VIP_AUTO_COMMIT:KanjiCoder]"

    VAR_REDACTED="[REDACTED]"

    VAR_IMGUR_KANJICODER_CID=$(cat "./VIP/001/API_IMGUR/CID._")
    VAR_IMGUR_KANJICODER_C_S=$(cat "./VIP/001/API_IMGUR/C_S._")

    echo "[VAR_IMGUR_KANJICODER_CID]:"$VAR_REDACTED
    echo "[VAR_IMGUR_KANJICODER_C_S]:"$VAR_REDACTED

    ECHO_PIT=""

    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
                   "VAR_IMGUR_CID"=$VAR_IMGUR_KANJICODER_CID )
    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_CID"=$VAR_IMGUR_KANJICODER_CID )

    ## echo $ECHO_PIT

    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
                   "VAR_IMGUR_C_S"=$VAR_IMGUR_KANJICODER_C_S )
    ECHO_PIT=$( heroku config:set --app aim-hotel13 \
        "VAR_IMGUR_KANJICODER_C_S"=$VAR_IMGUR_KANJICODER_C_S )

    ## echo $ECHO_PIT

    git push GIT_SSH master
    git push HER_OKU master

    ##############################################[2022_07_18]##