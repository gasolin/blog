---
title: 'Jythonroid: Jython runs successfully on Android Emulator'
tags:
  - python
  - Android
date: 2008-11-17 06:10:45
---

<span style="font-weight: bold;">What is jythonroid</span>

Jythonroid is a project for porting jython on Android platform. Created by ClassFoo.

Jythonroid is for console-only at this time. It means oneday Android has console/terminal app in device, you could use jython on real android phone. (or please point me if there's an exist console/terminal app for Android)

Jythondroid was worked on m5-build but outdated when 1.0 SDK comes out. Now Jythonroid (branch) works on 1.0 SDK &amp; Android Emulator again. Since there's no GUI yet, you could checked out the code, run the emulator(install in emulator), and use adb shell on PC to try jythonroid.

<span style="font-weight: bold;">Project Url</span>

[http://jythonroid.googlecode.com](http://jythonroid.googlecode.com/)

<span style="font-weight: bold;">Howto </span>

1\. check out the source

use svn to check out the project source

> $ svn co http://jythonroid.googlecode.com/svn/branches/Jythonroid jythonroid

2\. import project

In Eclipse, select "File > Import > Existing Projects into Workspace" in tool bar to import jythonroid project into your workspace.

3\. setup emulator and run

setup debug settings and press "Debug/Run" button to install jythonroid into Emulator.

4\. Run with adb shell

WARN: Since jythonroid is in its early phase, at this time it could only be evaluated on dalvik vm/emulator.

open adb shell, enter data/app folder, and run jythonroid

> $ adb shell
> # cd data/app
> # dalvikvm -classpath org.classfoo.apk org.python.util.jython
Here's the screenshot:

[![](http://2.bp.blogspot.com/_2xGPUuRo1sg/SSEGsza7S7I/AAAAAAAAAXw/k57NuDV-LQY/s400/%E5%9C%96%E7%89%87+1.png)](http://2.bp.blogspot.com/_2xGPUuRo1sg/SSEGsza7S7I/AAAAAAAAAXw/k57NuDV-LQY/s1600-h/%E5%9C%96%E7%89%87+1.png)