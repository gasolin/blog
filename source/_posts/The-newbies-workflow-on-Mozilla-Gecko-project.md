---
title: The newbies workflow on Mozilla Gecko project
tags:
  - Mozilla
date: 2016-08-09 06:35:24
---

As our recent development focus shifting from Firefox OS to Firefox, we need to contribute to gecko repository directly instead of contributing to Gaia repository on github.
The most of the works are related to Javascript. The main change is the workflow and API difference.&nbsp; In Gaia we work between Bugzilla and github; In gecko, we have Bugzilla and mozReview.

Once you have setup the environment, the workflow could also be based on git(or hg), and most things are dealt automatically. 
Mozilla is a pretty open workplace, so I can share my workflow with the world. Here is a reference to how I did for per patch/weekly/per setup/one-time workflow.

## Do it One time

To become a mozilla committer, read [https://www.mozilla.org/en-US/about/governance/policies/commit/](https://www.mozilla.org/en-US/about/governance/policies/commit/)

Create Bugzilla API key[https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey](https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey)
 and ssh key [https://login.mozilla.com/ssh_keys_index](https://login.mozilla.com/ssh_keys_index)


## Do at every Setup

You may check MDN as a start point, with Developer Guide [https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide) and especially the source code page
[https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Source_Code](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Source_Code)

I will do the setup flow every time I got a new laptop.

### 1. Update git

Use the [PPA](https://launchpad.net/%7Egit-core/+archive/ubuntu/ppa) from the maintainers of `git` on Ubuntu: 

```sh
$ sudo apt-add-repository ppa:git-core/ppa
$ sudo apt-get update
$ sudo apt-get install git
```

### 2. Install git-cinnarbar

Gecko itself managed via mercurial, we need install [git-cinnarbar](https://github.com/glandium/git-cinnabar) to help us deal with mercurial codebase via git.Check [http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install-git.html#mozreview-install-git](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install-git.html#mozreview-install-git)&nbsp;`[](https://github.com/glandium/git-cinnabar/wiki/Mozilla:-A-git-workflow-for-Gecko-development)

```sh
$ sudo apt-get install mercurial
$ git clone https://github.com/glandium/git-cinnabar.git
```

Then set git-cinnabar into system PATH

```sh
$ gedit ~/.bashrc
```


```bash
export PATH=$PATH:absolute_path_to/git-cinnabar
```

```sh
$ . ~/.bashrc
```

Then follow `[Mozilla: A git workflow for Gecko development](https://github.com/glandium/git-cinnabar/wiki/Mozilla:-A-git-workflow-for-Gecko-development) to checkout gecko via git.

Make sure you follow the Firefox build guide [https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build) to setup Firefox build environment.

You can `install style check related libraries via the following command:`

```sh
$ ./mach eslint --setup
```

You may want install mozreview which improves the overall experience of review with Bugzilla[ http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install.html](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install.html)` `

```sh
$ ./mach mercurial-setup
```

Will clone `version-control-tools` into `~/.mozbuild/version-control-tools`. We need update system PATH

```sh
$ gedit ~/.bashrc
```

```bash
export PATH=$PATH:absolute_path_to/git-cinnabar:/path/to/.mozbuild/version-control-tools/git/commands
```

```sh
$ . ~/.bashrc
$ git config --global bz.username someone@example.com
$ git config --global bz.apikey [your bugzilla key]
$ git config --global mozreview.nickname mynick
$ git mozreview configure
```

Then, run bootstrap script to install required build environment

```sh
$ ./mach bootstrap
```

Then, **the most time-saving advice**: setup mozconfig for [artifact builds](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Artifact_builds) if possible. When you only work for front-end related work (non c++), Artifact build will download compiled platform code to save you lots of build time.


## Weekly workflow

Because of build takes more time, I usually do the following command only twice a week if necessary.

We need update Gecko repository regularly:

```sh
$ git remote update
```

Then merge recent updates into current repo with

```
$ git rebase central/default
```

Checkout a new bug and then rebuild the stack

```sh
$ ./mach build
```

The command will compile the whole gecko.


## Per patch workflow

When I work on a new bug, I'll checkout a new branch (on mac)

```sh
$ git checkout -b bugxxxxxxx inbound/branches/default/tip
```

or (on Ubuntu)

```sh
$ git checkout -b bugxxxxxxx inbound/default
```

Usually, the bug is focused on a component of gecko, such as `browser/components/customizableui`. To make .js/.jsm changes work, we don't need to rebuild gecko. But to make some C++ code or new test code works, we need to rebuild this part of source via

```sh
$ ./mach build browser/components/customizableui
```

Once we have some progress for the patch, we can test code via the command: 

```sh
$ ./mach test browser/components/customizableui/test
```

Once the patch is ready, commit it as normal git commit, with a [structured syntax](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/commits.html#mozreview-commits):
`Bug xxxxxxx - description. ;r=?reviewer_bugzilla_alias`.

Then, use git mozreview command to push the commit onto Bugzilla for review.

```sh
$ git mozreview push
```

Oh, you also need to make sure you've followed the JS code style [https://wiki.mozilla.org/DevTools/CodingStandards#Code_style ](https://wiki.mozilla.org/DevTools/CodingStandards#Code_style)and CSS code style [https://wiki.mozilla.org/Firefox/CSS_Tips](https://wiki.mozilla.org/Firefox/CSS_Tips)

You can use try chooser[ http://trychooser.pub.build.mozilla.org/](http://trychooser.pub.build.mozilla.org/) to select test suites that run automatically on the test server. Treeherder is Mozilla's test server hosted on AWS (Amazon Web Service). Push code there and everyone will have the same base to validate if your code works well on anyone's computer.

The reference try script (credit from :Gijs) for `browser/component` is

```sh
try: -b od -t none -p win32,win64,macosx64,linux,linux64,linux64-asan -u mochitest-bc,mochitest-e10s-bc,marionette,marionette-e10s
```

You can manipulate the script based on what you need to test.

## Reference

* https://sny.no/2016/03/geckogit
