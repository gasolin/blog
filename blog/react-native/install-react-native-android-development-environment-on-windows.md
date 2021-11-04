---
title: Install react-native for android environment on windows
tags:
  - web
  - mobile
  - react-native
  - chocolatey
date: 2016-12-13 17:59:25
---


You may think its pretty hard to setup everything on windows. But after I found [chocolatey](http://chocolatey.org/) the process is deadly simple.
Chocolatey is the package manager for windows. Like homebrew for Mac, you can use Chocolatey to install all react-native dependencies and let chocolatey setup system PATH for you automatically.

Sounds good? let's install react-native on windows.

The very first step is install chocolatey via [following its instuction]https://chocolatey.org/install).

Then install git, node, android-sdk

```
C:\> choco install git nvm android-sdk
```

And you can download the [latest node version](https://nodejs.org/en/download/current/) via command

```
nvm install 8.4.0
```

Note that Java Development Kit (JDK) is also installed when you install `android-sdk`, neat!
As I mentioned earlier, the SYSTEM PATH are automatically set so you can run `android` command on `cmd` or the alternative to open up the SDK manager after install is complete! 

Once you can open android SDK manager, check [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#3-install-the-android-6-0-marshmallow-sdk) section in React Native doc to find out which android SDK versions to download.

You can also check Chocolatey's [package list](https://chocolatey.org/packages) to install a editor.
Since its windows, I'll give Visual Studio Code a try:

```
c:\> choco install visualstudiocode
```

Now you are on the fast track to install react-native, its all node related instructions now.

```
c:\> npm install -g create-react-native-app
c:\> create-react-native-app sample
c:\> cd sample
c:\sample> npm start
```

Happy coding!

## Reference:

* [Getting Started with React Native Development on Windows](https://shift.infinite.red/getting-started-with-react-native-development-on-windows-90d85a72ae65#.pnkm80tv7)
