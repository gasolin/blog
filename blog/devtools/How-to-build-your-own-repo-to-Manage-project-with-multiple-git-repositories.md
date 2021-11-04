---
title: How to build your own 'repo' to Manage project with multiple git repositories
tags:
  - repo
  - git
  - Android
  - FirefoxOS
date: 2013-07-29 08:57:09
---

[![](http://source.android.com/images/git-repo-1.png)](http://source.android.com/images/git-repo-1.png)

'[repo](http://source.android.com/source/developing.html)' is a good tool to manage project with multiple git repositories. Its developed to serve the need to manage Android Open Source Project (AOSP), which counts on bunch of open source projects. Then the 'repo' tool is used for chromium and chromium OS (known as open source version of Chrome browser and Chrome OS). Now Mozilla Boot-to-Gecko (B2G, known as Firefox OS) also adpot the 'repo' tool to manage multiple git repositories.

For a short time of experiment, I find its pretty simple to setup your own 'repo' that can help you manage multiple git repositories. Here is my findings.

To install 'repo' command, you can refer to [Installing repo](http://source.android.com/source/downloading.html#installing-repo).

## Make your own repo 
All you have to do is:

1\. setup an accessible git repository
2\. Put a 'default.xml' file in it
3\. Use 'repo init' command to access this&nbsp; git repository.

Done!

Here is the default.xml sample, there are three main tags:

```
<div class="highlight">> <span class="cp">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
> <span class="nt">&lt;manifest&gt;</span>
> <span class="c">&lt;!-- define hosts --&gt;</span>
> <span class="nt">&lt;**remote**</span> <span class="na">name=</span><span class="s">"b2g"</span> <span class="na">fetch=</span><span class="s">"https://github.com/mozilla-b2g/"</span><span class="nt">/&gt;</span>
> <span class="c">&lt;!-- default settings  --&gt;</span>
> <span class="nt">&lt;**default**</span> <span class="na">sync-j=</span><span class="s">"4"</span><span class="nt">/&gt;</span> <span class="c"><!-- projects -->**project** remote="b2g" revision="refs/heads/master" name="gaia" path="."</manifest>Look at the 'project' tag. It describes that we'd like to sync the 'gaia' repository's 'master' branch from remote 'b2g' host.
```

###  Explaination

```html
<?xml version="1.0" encoding="UTF-8">
<manifest>
 ...
</manifest>
```

The 'default.xml' syntax is wrapped by 'manifest' tag.
It contains three parts of definition:

#### Hosts

```html
<remote name="b2g" fetch="https://github.com/mozilla-b2g/"/>
```

remote' tag is used to define the hosts that we'd like to use in projects.
Note that it's not the actual git URL, but where the git hosted on.We can specify the actual git URL in 'project' tag.

#### Projects

```html
<project 
  remote="b2g" 
  revision="refs/heads/master" 
  name="gaia"
  path="."/>
```

The file describes that we'll like to sync the 'gaia' repository's 'master' branch from remote 'b2g' host.

The 'revision' path is defined within the original .git folder. To switch to branch like "v1.0.1", we could change&nbsp; "refs/heads/master" to "refs/heads/v1.0.1".

It's almost the same as we have to do with git command.

By the way, default.xml itself is in a git repository, so you can specify versions by branch or whatever you like.

Defaults `<default sync-j="4" />`

In default tag we can specify the default values in project tag. ex: revisions, default repositories..., etc.
'sync-j' means with this setting, 'repo' command will download 4 resources at the same time.

## The usage

Create a folder, switch in it, and run the following command:

```
> $ repo init -u https://&lt;your own git URL&gt;.gitThen, fetch the resources with command

> $ repo syncTo fetch a branch, run command
> $ repo init -u https://&lt;your own git URL&gt;.git **-b** &lt;branch&gt;
```

Read [Git and repo cheatsheet](http://source.android.com/source/developing.html#git-and-repo-cheatsheet) for more details about how git and repo tool work together. &nbsp; 

## Sample

Here is a working sample that able you to sync Mozilla Gaia repositorie, and automatically put vendor customization folder into its 'distribution/' sub-folder to ease the customization work. 

[https://github.com/gasolin/gaia-custom-repo](https://github.com/gasolin/gaia-custom-repo)

Update at 7/29:

A workable process elaboration in slide format [http://gasolin.github.io/gaia-repo/ ](http://gasolin.github.io/gaia-repo/)
