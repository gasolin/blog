---
title: Automatically deploy new commit to github pages via Travis CI
tags:
  - web
  - travis
  - automation
date: 2017-01-03 13:24:46
---

![](http://i.imgur.com/Q1hDoPLm.png)

After  migrated [my blog](make/hello-world.md) from blogger to [github](https://github.com/gasolin/blog/),
at the end of 2016, I've migrated [my blog](make/hello-world.md) and [home page](http://www.gasolin.idv.tw/) to host on [github](https://github.com/gasolin/gasolin.github.io) as well.

Both sites are fully stored in github and deployed automatically via [Travis CI](https://travis-ci.org/gasolin/gasolin.github.io).

## Before auto deploy

Before apply auto deploy method, the usual workflow to hosting web page on github are 2 steps:

First, user commit changes to local git master branch.

```mermaid
graph LR
user(User)
master[Local:master]
user -- commits* --> master
```

Then, user run the build process to generate contents for deploy.

```mermaid
graph LR
user(User)
dist[dist/]
user -- build --> dist
```

Then, use git commands to push generated contents to github `gh-pages` branch

```mermaid
graph LR
user(User)
ghpages[Github:gh-pages]
user -- deploy --> ghpages
```

At this time, our source code is still stored in local machine, we have to push the changes to github as well for safety.

```mermaid
graph LR
user(User)
master[Github:master]
user -- push --> master
```

Of course the manual works can be improved. After apply auto deploy method, all I have to do is
commit to github and let the web services do the rest.


## After auto deploy

Here's what my current workflow looks like

```mermaid
graph LR
master[Github:master]
travis[Travis CI]
ghpages[Github:gh-pages]
User -- commit --> master
master -. auto build .-> travis
travis -.  auto deploy .-> ghpages
```

The dot line process are automatically done for you.

## Github page auto deploy to rescue

After auto deploy, I am able to run test, do lint check, and build source with a few changes on `.travis.yml`(The travis configuration file),
**the only thing I need to care about is the content**.
The bonus is github now become my online web page editor. Web page is auto updated after each commit.

All these automation only needs one time setup, which is a pretty good deal to save foreseeable deploy time.
For security concern, my current workflow add the github token into Travis environment variables(to let Travis able to commit gh-pages), and make the actual git push quiet to prevent showing the token on Travis.

To not reinvent wheels myself, I distilled the auto deploy scripts and instructions into [ghpage-auto-deploy](https://github.com/gasolin/ghpage-auto-deploy) project.
you can use it to deploy your next web page as well.

[Fork the ghpage-auto-deploy project](https://github.com/gasolin/ghpage-auto-deploy#fork-destination-box) to get start, feel free to add new issues to send suggestions or pull request to me if you want to imporove it.
