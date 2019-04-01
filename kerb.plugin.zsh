local PLUGIN_DIR="$( cd "$( dirname "${(%):-%x}" )" && pwd )"

# $( cd "$PLUGIN_DIR" && npm install )
[ ! -d "$PLUGIN_DIR/node_modules" ] && npm install

alias kerb="$PLUGIN_DIR/bin/kerbside"