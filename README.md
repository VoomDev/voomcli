voom
====

Voom CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/voom.svg)](https://npmjs.org/package/voom)
[![Downloads/week](https://img.shields.io/npm/dw/voom.svg)](https://npmjs.org/package/voom)
[![License](https://img.shields.io/npm/l/voom.svg)](https://github.com/voomteam/voom/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g voom
$ voom COMMAND
running command...
$ voom (-v|--version|version)
voom/0.0.0 darwin-x64 node-v14.9.0
$ voom --help [COMMAND]
USAGE
  $ voom COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voom date`](#voom-date)
* [`voom hello`](#voom-hello)
* [`voom help [COMMAND]`](#voom-help-command)
* [`voom time`](#voom-time)

## `voom date`

Shows current date.

```
USAGE
  $ voom date

DESCRIPTION
  Shows current date.
```

_See code: [src/commands/date.js](https://github.com/voomteam/voom/blob/v0.0.0/src/commands/date.js)_

## `voom hello`

Says hello. Add -n=YOUR NAME to hello you instead of "person"

```
USAGE
  $ voom hello

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  Says hello. Add -n=YOUR NAME to hello you instead of "person"
```

_See code: [src/commands/hello.js](https://github.com/voomteam/voom/blob/v0.0.0/src/commands/hello.js)_

## `voom help [COMMAND]`

display help for voom

```
USAGE
  $ voom help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `voom time`

Shows the current time

```
USAGE
  $ voom time

DESCRIPTION
  Shows the current time
```

_See code: [src/commands/time.js](https://github.com/voomteam/voom/blob/v0.0.0/src/commands/time.js)_
<!-- commandsstop -->
