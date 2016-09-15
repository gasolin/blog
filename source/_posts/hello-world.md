---
title: Hello Hexo
---
I just **migrated my blog** from Blogger to Github (via [Hexo](https://hexo.io/))! Because I'd like use Markdown to write things efficiently, and think if I can integrate blog as part of my homepage (which soon or later will be hosted on github).

## Migrate from blogger

To migrate from blogger, I use these instructions: 

```lang=shell
$ npm install -g hexo-cli
$ mkdir blog && cd blog
$ npm install --save hexo-migrator-rss
$ hexo migrate rss https://www.blogger.com/feeds/xxxxxxx/posts/default?max-results=600
```

`xxxxxxx` is your blog id which can be found from url bar of blogger's admin panel.

To test render result locally, run

```
hexo s --debug
```

To generate static file then update to github, run

```
hexo generate --deploy --debug
```

If you have amount of articles like me (about 600 articles), make sure you have allocate enough memory if you run the command in VM.

The template comes from [next](http://theme-next.iissnan.com/) with great document.

## Github related configurations

Make sure you've follow ["Setting up a custom subdomain"](https://help.github.com/articles/setting-up-a-custom-subdomain/) , and install `hexo-generator-cname` to generate CNAME file for your static web site.

```
npm install --save hexo-generator-cname
```

Add `cname` property in `_config.yml`:

```
cname: blog.gasolin.idv.tw
```

You can check [_config.yml](https://github.com/gasolin/blog/blob/master/_config.yml) and [themes/next/_config.yml](https://github.com/gasolin/blog/blob/master/themes/next/_config.yml) for my site configurations.

