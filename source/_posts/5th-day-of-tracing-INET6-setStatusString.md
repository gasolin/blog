---
title: '5th day of tracing INET6: setStatusString()'
tags:
  - IPv6
  - OMNET++
date: 2005-05-09 04:45:18
---

void TCPGenericCliAppBase::setStatusString(const char *s)
{
    if (ev.isGUI()) displayString().setTagArg("t", 0, s);
}

void TCPGenericCliAppBase::socketEstablished(int, void *)
{
    // *redefine* to perform or schedule first sending
    ev << "connected\n";
    setStatusString("connected");
}