local PLUGIN_DIR="$( cd "$( dirname "${(%):-%x}" )" && pwd )"

## If node modules not already installed
[ ! -d "$PLUGIN_DIR/node_modules" ] && npm --prefix $PLUGIN_DIR install

alias kerb="$PLUGIN_DIR/bin/kerbside"
alias kerbtoday="$PLUGIN_DIR/bin/kerbside -t"