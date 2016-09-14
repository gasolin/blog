---
title: Hello Hexo
---
I just migrated my blog from Blogger to [Hexo](https://hexo.io/)! Because I'd like use Markdown to write things efficiently, and think if I can integrate blog as part of my homepage.

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

Since I have about 600 articles in this blog, make sure you have enough memory if you run the command in VM.

The template comes from [http://theme-next.iissnan.com/ next] with great document.


