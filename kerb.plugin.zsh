local PLUGIN_DIR="$( cd "$( dirname "${(%):-%x}" )" && pwd )"

$( cd "$PLUGIN_DIR" && npm install )

alias kerb="$PLUGIN_DIR/bin/kerbside"