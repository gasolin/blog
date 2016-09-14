---
title: The newbies workflow on Mozilla Gecko project
tags:
  - Mozilla
date: 2016-08-09 06:35:24
---

As our recent development focus shifting from Firefox OS to Firefox, we need contribute to gecko repository directly instead of contribute to gaia repository. The most of works are still related with Javascript, the main change is the workflow and API difference.&nbsp; In Gaia we works between Bugzilla and github; In gecko, we have Bugzilla and mozReview.

Once you have setup the environment, the workflow could be still based on git, and most thing are dealt automatically. Mozilla is a pretty open workplace so I can share my workflow with the world. Here are a reference about how I did for per patch/weekly/per setup/one time workflow.

**Per patch workflow**

When I work on a new bug, I'll checkout a new branch (on mac)

> $ git checkout -b bugxxxxxxx inbound/branches/default/tipor (on ubuntu)
> $ git checkout -b bugxxxxxxx inbound/defaultUsually the bug is focus on a component of gecko, such as `browser/components/customizableui`. To make .js/.jsm changes work, we don't need to rebuild gecko. But to make some C++ code or new test code works, we need to rebuild this part of source via

> $ ./mach build browser/components/customizableui
Once we have some progress for the patch, we can test code via command: 
> $ ./mach test browser/components/customizableui/testOnce the patch is ready, commit it as normal git commit, with a [structured syntax](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/commits.html#mozreview-commits):
`Bug xxxx - description. ;r=?reviewer_bugzilla_alias`.

Then, use git mozreview command to push the commit onto bugzilla for review.
> $ git mozreview pushOoh, you also need to make sure you've followed the JS code style [https://wiki.mozilla.org/DevTools/CodingStandards#Code_style ](https://wiki.mozilla.org/DevTools/CodingStandards#Code_style)and CSS code style [https://wiki.mozilla.org/Firefox/CSS_Tips](https://wiki.mozilla.org/Firefox/CSS_Tips)

You can use try chooser[ http://trychooser.pub.build.mozilla.org/](http://trychooser.pub.build.mozilla.org/)
&nbsp;to select test suites that runs automatically on the test server. Treeherder is Mozilla's test server hosted on AWS (Amazon Web Service). Push code there and everyone will have the same base to validate if your code works well on anyone's computer.

The reference try script (credit from :Gijs) for `browser/component` is
> try: -b od -t none -p win32,win64,macosx64,linux,linux64,linux64-asan -u mochitest-bc,mochitest-e10s-bc,marionette,marionette-e10s
You can manipulate the script based on what you need to test.

**Weekly workflow **

Because build takes more time, I usually do the following command only twice a week if necessary.

We need update gecko repository regularly:

> $ git remote update
Checkout a new bug and then rebuild the stack

> $ ./mach build
The command will compile the whole gecko.

&nbsp;**Do at every Setup **

You may check MDN as a start point, with Developer Guide [https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide) and especially the source code page
[https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Source_Code](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Source_Code)

I will do the setup flow everytime I got a new laptop.

1\. Update git

Use the [PPA](https://launchpad.net/%7Egit-core/+archive/ubuntu/ppa) from the maintainers of `git` on Ubuntu: 
> $ sudo apt-add-repository ppa:git-core/ppa`</pre><pre>`$ sudo apt-get update
>     $ sudo apt-get install git&nbsp;`</pre><pre>`&nbsp;2\. Install git-cinnarbar`</pre><pre>`
    `</pre><pre>`gecko itself managed via mercurial, we need install [git-cinnarbar](https://github.com/glandium/git-cinnabar) to help us deal with mercurial codebase via git.`</pre>Check `[http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install-git.html#mozreview-install-git](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install-git.html#mozreview-install-git)&nbsp;`[](https://github.com/glandium/git-cinnabar/wiki/Mozilla:-A-git-workflow-for-Gecko-development)

    > $ sudo apt-get install mercurial
>     $ git clone https://github.com/glandium/git-cinnabar.git&nbsp;Then set git-cinnabar into system PATH

    > $ gedit ~/.bashrc
> 
>     export PATH=$PATH:absolute_path_to/git-cinnabar
> 
>     $ . ~/.bashrc`Then follow `[Mozilla: A git workflow for Gecko development](https://github.com/glandium/git-cinnabar/wiki/Mozilla:-A-git-workflow-for-Gecko-development) to checkout gecko via git.

    Make sure you follow the firefox build guide [https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build) to setup firefox build environment.

    You can `install style check related libraries via following command:`

    > `$ ./mach eslint --setup`
    You may want install mozreview which is improve the overall experience of review with Bugzilla[ http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install.html](http://mozilla-version-control-tools.readthedocs.org/en/latest/mozreview/install.html)` `
    > <pre>`$ ``<span class="pre">./mach</span> <span class="pre">mercurial-setup</span>`</pre><pre>`<span class="pre"><code class="docutils literal"><span class="pre">Will clone </span>`</span></code>`<span class="pre"><code class="docutils literal"><span class="pre"><code class="docutils literal"><span class="pre"><code class="docutils literal"><span class="pre">version-control-tools into `</span>`</span></code>~/.mozbuild/version-control-tools`. We need update system PATH</span></code></span></code></pre>> <pre>$ gedit ~/.bashrc</pre>> <pre>export PATH=$PATH:absolute_path_to/git-cinnabar:/path/to/`<span class="pre"><code class="docutils literal"><span class="pre">.mozbuild/version-control-tools</span>`</span></code>/git/commands </pre>> <pre>$ . ~/.bashrc</pre><pre>$ git config --global bz.username someone@example.com
>     $ git config --global bz.apikey as3r123hj325hjld3</pre><pre>$ git config --global mozreview.nickname mynick</pre><pre>$ git mozreview configure</pre>Then, run bootstrap script to install required build environment

    > $ ./mach bootstrap<pre>&nbsp;</pre><pre>Then, **the most time saving advice**: setup mozconfig for [artifact builds](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Artifact_builds) if possible.&nbsp;</pre><pre>When you only work for front-end related work (non c++), Artifact build will download compiled platform code to save you lots of build time.</pre><pre></pre><pre></pre><pre>**`Do One time`**</pre><pre>`&nbsp;
<pre>`Become committer
[https://www.mozilla.org/en-US/about/governance/policies/commit/](https://www.mozilla.org/en-US/about/governance/policies/commit/)
<code>`</code></pre><pre>&nbsp;</pre><pre>Create Bugzilla API key</pre><pre>[https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey](https://bugzilla.mozilla.org/userprefs.cgi?tab=apikey)</pre><pre></pre><pre>`M`anage ssh
[https://login.mozilla.com/ssh_keys_index](https://login.mozilla.com/ssh_keys_index)</pre>