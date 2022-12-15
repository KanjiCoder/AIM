################################################################
IID="###" ;                           ### Example: IID="999" ###
################################################################
A_T_GIT="git@github.com:KanjiCoder" ;
PID=$(( 1 + ( $IID / 100 ) ))
PID=00$PID
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