---
title: template.js
tags:
  - html
  - Mozilla
  - FirefoxOS
  - webframework
date: 2014-01-13 04:07:19
---

From [<span class="GC2AS1XDAWB" id="t-t">Template library from Messages app now available in shared/js</span>](https://groups.google.com/forum/#!topic/mozilla.dev.gaia/wQ8JLkYi7EI)

Rick <span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">Waldron post the new [template.js](https://github.com/gasolin/gaia/blob/master/shared/js/template.js) library that works originally for gaia/cummunication apps. Now it's widely adopted for other apps such as settings.</span></span>
<span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">
</span></span><span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">The [template.js](https://github.com/gasolin/gaia/blob/master/shared/js/template.js) library is pretty small and stable for general use. just copy it and put in your library to use it.</span></span>
<span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">
</span></span><span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">The syntax is no magic, just inject an single id tag into main html file. And the 'template' is just the commented code. It allows general parameters replacement and prevent </span></span><span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">innerHTML pollution.</span></span>
<span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">
</span></span><span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">Here's the post from Rick:</span></span>
<span class="_username"><span class="GIPOEOIOPB g-hovercard" data-name="Rick Waldron" data-userid="117712031197469669749" style="color: #222222;">
</span></span>
Using the Template library is simple:

1\. Add &lt;script src="shared/js/template.js"&gt;&lt;/script&gt; to your index.html

2\. Create your template as a comment node inside of any type of element,
place in index.html:

&nbsp;&nbsp;&lt;span id="emphasis-template"&gt;
&nbsp;&nbsp;&lt;!-- &lt;${tag}&gt;${value}&lt;/${tag}&gt; --&gt;
&nbsp;&nbsp;&lt;/span&gt;

&nbsp;&nbsp;&lt;span id="greeting-template"&gt;
&nbsp;&nbsp;&lt;!-- Hello ${name}! --&gt;
&nbsp;&nbsp;&lt;/span&gt;

3\. In your JavaScript code, initialize an instance of this template:

&nbsp;&nbsp;// Template will accept either an id string or a node!
&nbsp;&nbsp;var emphasis = new Template('emphasis-template');
&nbsp;&nbsp;var greeting = new Template(document.getElementById('greeting-template'));

4\. Generate a safe markup string with specified values by calling the `interpolate` method of the template object:

&nbsp;&nbsp;greeting.interpolate({
&nbsp;&nbsp; &nbsp;name: 'World'
&nbsp;&nbsp;});

&nbsp;&nbsp;// Hello World!

Simple partial nesting is supported, just tell `interpolate` which properties are "safe":

&nbsp;&nbsp;var name = emphasis.interpolate({
&nbsp;&nbsp; &nbsp;tag: 'b',
&nbsp;&nbsp; &nbsp;value: 'World'
&nbsp;&nbsp;});

&nbsp;&nbsp;// we know that the value of 'name' has already been escaped :)
&nbsp;&nbsp;greeting.interpolate({ name: name }, { safe: ['name'] });

&nbsp;&nbsp;// Hello &lt;b&gt;World&lt;/b&gt;!

Markup strings produced by Template are innerHTML safe (unless explicitly
marked otherwise, as shown above):

&nbsp;&nbsp;greeting.interpolate({
&nbsp;&nbsp; &nbsp;name: '&lt;script&gt;alert("hi!")' + '&lt;/script&gt;'
&nbsp;&nbsp;});

&nbsp;&nbsp;// &amp;lt;script&amp;gt;alert(&amp;quot;hi!&amp;quot;)&amp;lt;/script&amp;gt;

Template instances disallow modification of the template string once the
object is initialized, but the toString() method will return the raw
template as a string:

&nbsp;&nbsp;greeting.toString();

&nbsp;&nbsp;// Hello ${name}!

&nbsp;&nbsp;emphasis.toString();

&nbsp;&nbsp;// &lt;${tag}&gt;${value}&lt;/${tag}&gt;

It's important to remember that Template and WebComponent are not at odds
with each other and exist to serve to different purposes; read more here:
<span class="Object" id="OBJ_PREFIX_DWT2203_com_zimbra_url">[https://bugzilla.mozilla.org/show_bug.cgi?id=908950#c6](https://bugzilla.mozilla.org/show_bug.cgi?id=908950#c6)</span>