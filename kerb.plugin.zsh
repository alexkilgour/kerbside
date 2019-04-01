local PLUGIN_DIR="$( cd "$( dirname "${(%):-%x}" )" && pwd )"
local PLUGIN_STR="https-COLON--SLASH--SLASH-github.com-SLASH-alexkilgour-SLASH-kerbside"

# $( cd "$PLUGIN_DIR" && npm install )
[ ! -d "$PLUGIN_DIR/$PLUGIN_STR/node_modules" ] && cd $PLUGIN_DIR/$PLUGIN_STR && npm install

alias kerb="$PLUGIN_DIR/bin/kerbside"