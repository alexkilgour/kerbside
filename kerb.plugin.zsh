local PLUGIN_DIR="$( cd "$( dirname "${(%):-%x}" )" && pwd )"

function kerbside(){
    echo $PLUGIN_DIR
}

alias kerb="kerbside"