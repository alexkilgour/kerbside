# kerbside
Get the traders from various kerb locations

```
USAGE
    kerbside <args>
      -l, --location <n>    Location number (default: 0)
      -d, --days <n>        Number of days to show (default: all)
      -t, --today <b>       Show traders for ONLY today (default: false)
      -j, --json <b>        Display as JSON (default: false)
      -h, --help            Show this help message

TRADERS
    0: kings-cross
    1: gherkin
    2: st-kats
    3: west-india-quay
```

#### ZSH plugin

```sh
# print to CLI with default options
$ kerb

# display the result of kerbside -t
$ kerbtoday
```