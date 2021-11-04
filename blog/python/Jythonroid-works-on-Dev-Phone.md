---
title: Jythonroid works on Dev Phone!
tags:
  - python
  - Android
date: 2009-01-18 15:50:20
---

[![](http://2.bp.blogspot.com/_2xGPUuRo1sg/SXNIc0PVM6I/AAAAAAAAAcQ/odAxGXphfSs/s400/jythonroid.png.jpg)](http://2.bp.blogspot.com/_2xGPUuRo1sg/SXNIc0PVM6I/AAAAAAAAAcQ/odAxGXphfSs/s1600-h/jythonroid.png.jpg)

Just got my Dev Phone 1 and tried to run [Jythonroid](http://inet6.blogspot.com/2008/11/jythonroid-jython-runs-successfully-on.html) on it.

The procedure is

1\. download sourcecode

$ svn co -r 51 http://jythonroid.googlecode.com/svn/branches/Jythonroid

2\. import project into eclipse

3\. connect Dev Phone and computer with USB

4\. setup eclipse debug setting to run jythonroid in real Dev Phone

Now I got jythonroid installed in Dev Phone. Here's how to play with jythonroid:

1\. Install Terminal Emulator to use the shell

2\. just follow the screenshot to say 'Hello Android!' :)

[![](http://1.bp.blogspot.com/_2xGPUuRo1sg/SXNIr2LQ6kI/AAAAAAAAAcY/LGX1fEmJ1Rs/s400/helloandroid.png.jpg)](http://1.bp.blogspot.com/_2xGPUuRo1sg/SXNIr2LQ6kI/AAAAAAAAAcY/LGX1fEmJ1Rs/s1600-h/helloandroid.png.jpg)

in java we import Toast widget with

> import android.widget.Toast;In jython(roid), just type in interpreter:
> >>> from android.widget import ToastPython rocks!