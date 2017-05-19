---
title: MIPL
tags:
  - IPv6
date: 2005-07-14 05:50:46
---

[http://www.mobile-ipv6.org/](http://www.mobile-ipv6.org/)
MIPL Mobile IPv6 for Linux is an implementation of Mobility support in IPv6\. Mobility support allows a mobile device to be tracked as it migrates between networks or even ISPs, allowing packets to be forwarded to where the device is currently located.

<pre style="margin: 0em;">Download the stuff at these locations:

[mipv6-2.0-rc2.tar.gz](http://mobile-ipv6.org/software/download/mipv6-2.0-rc2.tar.gz) (Latest **USER SPACE** part)

[mipv6-2.0-rc2-linux-2.6.8.1.patch.gz](http://mobile-ipv6.org/software/download/mipv6-2.0-rc2-linux-2.6.8.1.patch.gz) (Latest **KERNEL** part)

Remember, you need both of those. First is the user space daemon, and the other is a patch to enable MIPv6 in the kernel. INSTALL and INSTALL.kernel should get you started.

<a name="nemo">The NEPL NEMO Platform for Linux is a NEMO implementation based on the MIPL 2 architecture.</a>
It aims to be fully RFC 3963 compliant supporting both implicit and explicit mode signalling.
Version 0.1 only supports static routing between the HA and MR.

[nemo-0.1.tar.gz](http://www.mobile-ipv6.org/software/download/nemo-0.1.tar.gz) (NEMO Basic Support Protocol (RFC 3963) and MIPv6 userspace daemon, works with the patched 2.6 kernel)
[
radvd-0.7.2-NEMO.tar.gz](http://www.mobile-ipv6.org/software/download/radvd-0.7.2-NEMO.tar.gz) (Modified router advertisement daemon needed for proper operation of a NEMO Home Agent)
