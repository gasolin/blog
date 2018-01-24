My personal Blog source, follow [Creative Common Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

[![Build Status](https://travis-ci.org/gasolin/blog.png)](https://travis-ci.org/gasolin/blog) [![Dependency Status](https://gemnasium.com/gasolin/blog.svg)](https://gemnasium.com/gasolin/blog)

## Manual Setup

```sh
$ npm install -g hexo
$ git clone https://github.com/gasolin/blog.git
$ cd blog
$ git submodule update --init
$ npm install
$ hexo generate --deploy --debug
```

## Upgrade theme

```sh
$ rm -Rf theme/next
$ git submodule update --remote
```
