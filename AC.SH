################################################################
##  AC.SH == Auto_Commit.SH , for less typing.  ################
################################################################
IID="####" ;                         ### Example: IID="1234" ###
################################################################

    IID=${PWD: -4}

################################################################
A_T_GIT="git@github.com:KanjiCoder" ;
PID=$(( 1 + ( $IID / 100 ) ))
PID=0$PID
if [ -d .git ]; then
    git add .
    git commit -m "($IID)(www.tinyurl.com/BOMB-PLAYLIST-$PID)"
    git remote remove GIT_SSH
    git remote add    GIT_SSH $A_T_GIT/AIM_$IID.git
    git push          GIT_SSH master
else
    git init .
fi;
################################################################