---
title: Current Progress of Netmonitor.html
tags:
  - web
  - devtools
---

Firefox Devtools is in progress of `modernize` its infrastructure to use the same toolset that modern web developers are used to. For `modern` web developers' toolset, I mean `React`, `Redux`, `Immutablejs`, and `npm` modules.

## What Firefox Devtools team have done

[Debugger.html](https://hacks.mozilla.org/2016/09/introducing-debugger-html/) is the very first attempt for Firefox Devtools team.

Debugger.html has [its own repository hosted on Github](https://github.com/devtools-html/debugger.html), developer could use `git clone` to get the repository, and then do `yarn install`, `yarn start`(similar to npm command) to debug the debugger.html with any browser's devtools! 

{% mermaid %}
graph LR
clone[git clone] --> install[yarn install]
install --> start[yarn start]
{% endmermaid %}

Debugger.html support different remote debugging protocols, so it could be used to debug Firefox, Chrome, or even Node!

{% mermaid %}
graph LR
Firefox --> mozilla-rdp --> debugger(Debugger.html)
Chrome -- chrome-rdp --> debugger
Node -- chrome-rdp --> debugger
{% endmermaid %}

Since Debugger.html's pure web stack nature, you can imagine oneday the debugger.html can be embeded into editor(Atom, Visual Studio Code) as plugins, or even in other browser!

{% mermaid %}
graph LR
debugger(Debugger.html) --> Firefox
debugger --> browsertab[Browser Tab]
debugger --> Editor
debugger --> other[Other Browser]
{% endmermaid %}

## What we have done

Firefox Devtools was no different with Firefox its self, the Devtools panels are written by `XUL`, which is a HTML-like syntax language, and use several Firefox internal API called `XPCOM` or `Chrome privilliged API`(Nothing related to Chrome Browser).

In last year, Firefox Devtools team's main goal is convert the code base from XUL to pure HTML. The second goal is convert each tool with React/Redux structure. Debugger, Inspector, Web Console are the first batch in the conversion progress.

New Debugger and Web Console are now available in Firefox [Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)

Inspector is a more complicated tool to convert, so its still half React and half plain Javascript.

## Why Netmonitor.html?

Ricky Chien and I joined the effort of converting inspector from XUL to HTML, and then we start focus on convert the next important Devtool: `Netmonitor`. With Honza, Janda, Steve Chung, and other contributors' help, we converted the whole Netmonitor panel from XUL to HTML. With `React`, `Redux`, `Immutablejs`.

## Replacing the Jet Engine While Still Flying



## What we plan to do

We just finished the Netmonitor workweek (Fred, Honza, Ricky) in Taiwan, plenty of discussions have occurred, and we have good progress for what's should be going on for the Netmonitor.

Here they are:

* We have two different(!) Prove-Of-Concept branches to prove we can run netmonitor on browser tab
* We stop Netmonitor.html phase I work immediately (convert XUL to HTML, MVP 100% completed)
* We'll start Netmonitor.html phase II (To run Netmonitor on a browser tab, so we can debug Netmonitor with any browser's devtool)
  * plan and file bugs
  * bring phase I reserved bugs into phase II
  * All phase II bugs are filed in the [Meta-bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1348737)
* We decide to put every change inside of `gecko/devtools/client/netmonitor` repo. As a result, developer would able to run `yarn start` command to debugging Netmonitor with gecko repo. (No need to choose to use Mono or separate repo on github at this moment.)
* We have 2 options to host our code base inside of gecko (generate bundle for both env, or only do `yarn start` for running on a browser tab), Currently we prefer the 2nd plan
* We’ve triaged all new Netmonitor bugs
* We agree that we should re-triage webconsole:http-inspector related bugs to Netmonitor
* Have a meeting with jlaster and we'll land Netmonitor related modules into `devtool-module`
