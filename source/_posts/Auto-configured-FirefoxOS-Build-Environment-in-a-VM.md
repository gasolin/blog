---
title: Auto-configured FirefoxOS Build Environment in a VM
tags:
  - FirefoxOS
date: 2014-02-10 02:26:02
---

I'm pleased to release [first FoxBox version ](https://github.com/gasolin/foxbox/releases)that may save a lot of time for people who wants to give [FirefoxOS](http://www.mozilla.org/firefox/os/) development a try.

For web developer who wants to contribute to gaia might meet a serious problem that they might have limit knowledge of *nix system. But to build gaia, the command line and make script is essential.

For developer who wants to contribute to B2G project, a bunch of [per-requisite](https://developer.mozilla.org/en-US/Firefox_OS/Preparing_for_your_first_B2G_build) settings must be configured well before really digging into the code.

<div class="markdown-body">FoxBox could help (currently I mainly focus on) B2G/gaia developer quickly setup a working environment in VM.

Generally FoxBox 0.4 provide a [Vagrantfile](http://www.vagrantup.com/) which automatically configure a VM  with bunch of tools you need for building FirefoxOS and gaia  development.

FoxBox have put a comprehend list of USB vendors, so any Android/FirefoxOS smartphone plugged can be identified.

With vagrant's NFS shared folder, developer can use their favorite editor to code.

FoxBox also bundled with a minimum GUI environment that enable you to  test FirefoxOS in VM. [Firefox Nightly](http://nightly.mozilla.org/) will be pre-installed for you as  well!

Read [README](http://github.com/gasolin/foxbox/blob/master/README.md) for more detail.

Happy Hacking!

Disclaim: Though I work for mozilla, [FoxBox](http://github.com/gasolin/foxbox) is not an official project of Mozilla. Currently its just my side project create around Chinese New Year's holiday.

</div>