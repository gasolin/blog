---
title: Compiling Python for Android Scripting Environment
tags:
  - python
  - Android
date: 2009-08-13 13:05:08
---

<div>Android Scripting Environment (ASE) is the scripting language (BeanShell, Python, Lua, Ruby) environment for Android Operating System.</div><div>
This article is about how to compile python for ASE.

</div>The following instructions are according to the discussion from [ASE group](http://groups.google.com/group/android-scripting/browse_thread/thread/6a2fcc058fc7a5b1).

<span style="font-weight: bold;">Compile python</span>** for host
**To compile python for ASE, you need a Linux machine, then here goes:

Download proper python source distribution (according to the python version in ase/python/src) from [http://www.python.org/](http://www.python.org/)

Extract the source and run the following command:

> $ cd Python-2.6.2
> $ ./configure
> $ make
Then you have a clean python compiled for your PC (called host system).

<span style="font-weight: bold;">Compile python</span>** for target
**Now we can go to compile python for your Android device (called target system).

Copy the python executable file and the pgen file into ase/python/src folder

> $ cd ~
> $ cp Python-2.6.2/python ase/python/src/hostpython
> $ cp Python-2.6.2/Parser/pgen ase/python/src/Parser/hostpgen
Then we should prepare the compile tools.

First checkout the android source from [http://source.android.com/](http://source.android.com/) (name as mydroid), we'll use the cross compile gcc in it's "prebuilt/linux-x86/toolchain/arm-eabi-4.2.1/bin" folder. Another tool is located in "ase/tools/agcc".

Edit .bashrc , add a line to include those compile tools:
> export PATH=${PATH}:~/mydroid/prebuilt/linux
> -x86/toolchain/arm-eabi-4.2.1/bin:~/ase/tools/agcc
Then start compile python for ASE.

$ cd ase/python
$ ./build.py

**Done!
**