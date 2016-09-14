---
title: Future proved Javascript and CSS
tags:
  - webapp
  - FirefoxOS
  - webframework
date: 2015-02-28 17:42:32
---

<iframe allowfullscreen="" frameborder="0" height="440" mozallowfullscreen="" msallowfullscreen="" oallowfullscreen="" src="https://www.flickr.com/photos/ikimuled/16354509187/in/pool-backtothefuture/player/" webkitallowfullscreen="" width="500"></iframe>

[This time, its different](http://dailyjs.com/2015/02/26/babel/). The transpilers are build-time polyfills that fill the gap of current browser/server implementation and the newest JS/CSS specs.

Transpilers trans-compile Javascript and CSS to current workable version, so developers could be more productive with JS/CSS latest features and transpilers would translate them into current supported version of code.

From my opinion the most useful es6 feature is [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (=&gt;) which comes from coffeescript. This syntax sugar bind the this value automatically, so developer wont forgot the binding anymore. 

The original code is

> (function() {
> &nbsp; 'use strict';
> &nbsp; document.addEventListener('DocumentLocalized', **function()** {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> &nbsp;&nbsp;&nbsp;&nbsp; // App.init();
> &nbsp; }.bind(this));
> }());
We can use arrow function to replace `function() {}.bind(this)` to `() =&gt; {}`

> (function() {
> &nbsp; 'use strict';
> &nbsp; document.addEventListener('DocumentLocalized', **() =&gt;** {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> &nbsp;&nbsp;&nbsp;&nbsp; // App.init();
> &nbsp; });
> }());Currently the arrow functions [only default enabled on Firefox](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Browser_compatibility). So developer could not use this directly on their project. With [babel](https://babeljs.io/) javascript transpiler the js could be translated to current workable version automatically. 

> (function() {
> &nbsp; 'use strict';
> &nbsp; document.addEventListener('DocumentLocalized', **function()** {&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
> &nbsp;&nbsp;&nbsp;&nbsp; // App.init();
> &nbsp; });
> }());The transpiler will know the content does not need 'this' reference and skip the binding. Note the Javascript transpiler still stick into [vanilla javascript](http://vanilla-js.com/). It does not invent new syntax, but it make new specs could be used or experiment in current environment.

From CSS perspective,&nbsp; [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) brings variables into CSS. Pre-define some color and use everywhere on project is possible. 

The origin style is

> a {
> &nbsp; color: **#847AD1**;
> }
> 
> pre {
> &nbsp; padding: **10px**;
> }It's frustrated when the stylesheets expand larger and we need to change the new color or size everywhere.

We can use CSS variables to predefine the changeable stuff into pseudo ':root' element.

> :root {
> &nbsp; --**maincolor**: #847AD1;
> &nbsp; --**size**: 10px;
> }
> 
> a {
> &nbsp; color: var(--**maincolor**);
> }
> 
> pre {
> &nbsp; padding: var(--**size**);
> }Looks good. But the same situation occurred. Currently the CSS variables [only support on Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables#Browser_compatibility). So developer could not use this directly on their project. With [myth](http://www.myth.io/) CSS transpiler the CSS could be translated to current workable version automatically. 
> a {
> &nbsp; color: **#847AD1**;
> }
> 
> pre {
> &nbsp; padding: **10px**;
> }Note the CSS transpiler still stick into CSS specs. It does not invent new syntaxes like LESS or SASS does. It just make new CSS specs could be used or experiment in current environment.

Besides the feature polyfill, running transpiler before deploy also help developer catch out the error since transpiler will traverse the source and parsing syntaxes. Transpiler will bark you when any error in your source.

You may wonder setup an environment with above JS/CSS transpiler seems take some time. [webapplate](https://github.com/webapplate/webapplate) 2.3.0 already integrated with [babel](https://babeljs.io/)&nbsp; and&nbsp;[myth](http://www.myth.io/) grunt tasks to auto transpile your JS/CSS code to current workable version. [webapplate](https://github.com/webapplate/webapplate) jshint/githook also support [es6 syntax](https://github.com/webapplate/webapplate/blob/master/.jshintrc#L17) validation (yes the .jshintrc is exactly borrowed from gaia project), so your project is future proved and keep maintainable.