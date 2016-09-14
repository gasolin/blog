---
title: Compiling Android Scripting Environment
tags:
  - python
  - Android
date: 2009-08-06 12:28:58
---

<div>Android Scripting Environment (ASE) is the scripting language (BeanShell, Python, Lua, Ruby) environment for Android Operating System.</div><div>
</div>The following instructions are according to the discussion from [ASE group](http://groups.google.com/group/android-scripting/browse_thread/thread/07905d5d088d237b#).

**Prerequisites**<div>**
**To compile ASE, you need a Linux machine, then here goes:

</div><div>1\. Get Android source (read [http://source.android.com/download](http://source.android.com/download) to fetch the source) and
name the folder as 'mydroid'(or else you prefer). In the following instructions I assume all the folders are in user's home folder(~) .

</div><div>2\. Get Android SDK (download from [http://developer.android.com/](http://developer.android.com/)) and
extract it as "android_sdk"(or else you prefer).

</div><div>3\. Get Android Scripting Environment source (hg clone from [http://code.google.com/p/android-scripting/source/](http://code.google.com/p/android-scripting/source/)) as "ase"(or else you prefer).

</div><div>4\. Enter ase/tools folder and execute "fix_android_sdk.py"
to patch the "android_sdk".</div><div>
> $ cd ase/tools
> $ python fix_android_sdk.py ~/mydroid ~/android_sdk
> Copying source from .....mydroid to .....android_sdk/platforms/android-[verison]/sources
> Adding android.os.Exec to android.jar
> Compiling android.os.Exec to....
> Done!
</div><div>In addition to modifying the SDK by adding android.os.Exec, the script
will also copy the source files into the SDK so that they can be
browsed in Eclipse.</div><div>
**Import Project into Eclipse**

</div><div>After executing the script, follow the instructions for developing in
Eclipse in the [Android developer guide](http://developer.android.com/guide/developing/eclipse-adt.html) to setup a workable Android
development environment.

Change the project build path and specify the BeanShell path to (project
path)/beanshell/bsh-[version].jar</div><div>
Compile it, done!

</div><div>
</div><div>PS: Python and Lua are precompiled and already put in res/raw folder. You
don't need to setup the cross compile environment unless you want to
also compile Lua and Python yourself.</div>