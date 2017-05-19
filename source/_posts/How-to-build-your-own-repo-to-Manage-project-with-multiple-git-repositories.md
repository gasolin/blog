---
title: How to build your own 'repo' to Manage project with multiple git repositories
tags:
  - repo
  - git
  - Android
  - FirefoxOS
date: 2013-07-29 08:57:09
---

<div class="separator" style="clear: both; text-align: center;">[![](http://source.android.com/images/git-repo-1.png)](http://source.android.com/images/git-repo-1.png)</div>

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

<div class="highlight">> <span class="cp">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
> <span class="nt">&lt;manifest&gt;</span>
> <span class="c">&lt;!-- define hosts --&gt;</span>
> <span class="nt">&lt;**remote**</span> <span class="na">name=</span><span class="s">"b2g"</span> <span class="na">fetch=</span><span class="s">"https://github.com/mozilla-b2g/"</span><span class="nt">/&gt;</span>
> <span class="c">&lt;!-- default settings  --&gt;</span>
> <span class="nt">&lt;**default**</span> <span class="na">sync-j=</span><span class="s">"4"</span><span class="nt">/&gt;</span> <span class="c">&lt;!-- projects --&gt;</span>
> <span class="nt">&lt;**project**</span> <span class="na">remote=</span><span class="s">"b2g"</span> <span class="na">revision=</span><span class="s">"refs/heads/master"</span> <span class="na">name=</span><span class="s">"gaia"</span> <span class="na">path=</span><span class="s">"."</span><span class="nt">/&gt;</span>
> <span class="nt">&lt;/manifest&gt;</span><span class="nt">Look at the 'project' </span><span class="nt">tag. It describes that we'd like to sync the 'gaia' repository's 'master' branch from remote 'b2g' host. </span></div>

###  <span class="nt">Explaination</span>
> <span class="cp">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>> <span class="nt">&lt;manifest&gt;</span>
> ...
> <span class="nt">&lt;/manifest&gt;</span><span class="nt">The 'default.xml' syntax is wrapped by 'manifest' tag.</span>
<span class="nt">It contains three parts of definition:</span>

#### <span class="nt">Hosts</span><span class="nt">
</span>

> <span class="nt">&lt;**remote**</span> <span class="na">name=</span><span class="s">"b2g"</span> <span class="na">fetch=</span><span class="s">"https://github.com/mozilla-b2g/"</span><span class="nt">/&gt;</span><span class="nt">'remote' tag is used to define the hosts that we'd like to use in projects.</span>
<span class="nt">Note that it's not the actual git URL, but where the git hosted on.</span>
<span class="nt">We can specify the actual git URL in 'project' tag.</span>

#### <span class="nt">Projects</span>
> <span class="nt">&lt;**project**</span> <span class="na">remote=</span><span class="s">"b2g"</span> <span class="na">revision=</span><span class="s">"refs/heads/master"</span> <span class="na">name=</span><span class="s">"gaia"</span> <span class="na">path=</span><span class="s">"."</span><span class="nt">/&gt;</span>
<span class="nt">The file describes that we'll like to sync the 'gaia' repository's 'master' branch from remote 'b2g' host.</span>

<span class="nt">The </span><span class="nt"><span class="na">'revision'</span> path is defined within the original .git folder. To switch to branch like "v1.0.1", we could change&nbsp; </span><span class="s">"refs/heads/master" to </span><span class="s">"refs/heads/v1.0.1".</span>
<span class="nt">It's almost the same as we have to do with git command.</span><span class="s">&nbsp;</span>

<span class="s">By the way, </span><span class="s">default.xml itself is in a git repository, so you can specify versions by branch or whatever you like.</span>

<span class="nt">Defaults</span>
> <span class="nt">&lt;**default**</span> <span class="na">sync-j=</span><span class="s">"4"</span><span class="nt">/&gt;</span>In default tag we can specify the default values in project tag. ex: revisions, default repositories..., etc.
'sync-j' means with this setting, 'repo' command will download 4 resources at the same time.<span class="nt"></span>

## The usage&nbsp; 
Create a folder, switch in it, and run the following command:

> $ repo init -u https://&lt;your own git URL&gt;.gitThen, fetch the resources with command

> $ repo syncTo fetch a branch, run command
> $ repo init -u https://&lt;your own git URL&gt;.git **-b** &lt;branch&gt;
Read [Git and repo cheatsheet](http://source.android.com/source/developing.html#git-and-repo-cheatsheet) for more details about how git and repo tool work together. &nbsp; 

## Sample
Here is a working sample that able you to sync Mozilla Gaia repositorie, and automatically put vendor customization folder into its 'distribution/' sub-folder to ease the customization work. 

[https://github.com/gasolin/gaia-custom-repo](https://github.com/gasolin/gaia-custom-repo)

Update at 7/29:

A workable process elaboration in slide format [http://gasolin.github.io/gaia-repo/ ](http://gasolin.github.io/gaia-repo/)
