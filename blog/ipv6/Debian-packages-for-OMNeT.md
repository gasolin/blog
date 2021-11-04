---
title: Debian packages for OMNeT++
tags:
  - OMNET++
date: 2005-08-30 14:18:25
---

From Tom Parker:

They are available by adding the following lines to your /etc/apt/sources.list

deb http://tevp.net/debian/ binary/
deb-src http://tevp.net/debian/ source/

and then running "apt-get update", followed by "apt-get install omnetpp-static".
As the name suggests, the package only currently has static library versions of
OMNeT++ not the shared versions, but I will be expanding this to include shared
versions at a later date.