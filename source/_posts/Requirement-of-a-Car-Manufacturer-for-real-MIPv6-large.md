---
title: Requirement of a Car Manufacturer for real MIPv6 large
tags: []
date: 2005-06-06 01:53:21
---

These slides are digested and organized from [this](http://www1.ietf.org/mail-archive/web/nemo/current/msg02525.html) mail, which was posted in NEMO group:

Edouard LASNIER REDDAN, Telecom Solution for Telematics, RENAULT, on May
2nd, 2005

Keyword: MIPv6, Tunnel, NAT mapping

Quote: MIPv6 with a NAT traversal feature is urgent.
The HA should Independent from telecom operators.

* RENAULT is involved in several research projects dealing with IP mobility since 2001
* RENAULT Laguna "IPv6 Car", supporting Mobile IPv6.
** Received the "Murai Award" in 2003 in Tokyo
** Capability to support GPRS (2G European cellular network) / Wifi vertical handover
** Using Mobile IPv6 with IPv4 NAT traversal feature

DOORS:
* The NAT traversal function,
* Developed by Cisco Systems
* Provide efficient results
* Compatible with our deployment constraints for further commercial exploitations.

Mobile IPv6
* Is considered by the car manufacturers as a key technology for
** Deployment of next generation Telematic services
*** Remote diagnosis
*** Fleet management

GST
* Global System for Telematics
** RENAULT, BMW, DAIMLER CHRYSLER,FIAT
** Other actors of the Telematic Industry
* IPv6 is now part of the core specification for a European standard for telematics, mainly because of its mobility features.

Challenges for the car manufacturers
* Be deployed soon on top of existing cellular networks, all based
on IPv4.
* It is mandatory to deploy Mobile IPv6 with a NAT traversal support,
to remain independent from the mobile telecom operator.

Note: If it is agreed by the automotive industry that IPv6 paves the future of the
telematic market, the existing constraints on the deployment of Mobile IPv6
makes the finalization of the standard very sensitive:

Note: If the car manufacturers have to setup technical agreements with the mobile telecom operators to deploy MIPv6, then many other solutions can be considered.
Dependence toward the mobile telecom operators is not acceptable.

Note: MIPv6 should enable the actors of the value chain to define their business model,
it means that MIPv6 should be flexible and not compel the Home Agent to be directly connected to the Internet.

NAT traversal
* NAT traversal is a required feature
* Technical solution defined at the IETF should take into consideration the deployment constraints.
* <span style="font-weight: bold;">The Home Agent is in many cases in existing small networks dedicated to pilot
experiments initially designed for IPv4, with NAT boxes on the Internet interface.
</span>** This constraint is a fact, and is valid for many projects.

Long term perspective: HA consideration
* Car manufacturers - or any actors from the telematic industry supplying IP mobility support for the cars
* Will deploy MIPv6 on their enterprise networks.
* Those networks are secured, designed for IPv4, and most probably the Home Agent will not be directly interfaced with the Internet
* It will be a secured equipment in the core of the network, behind NATs.

Note: This problem is in fact very common as enterprise networks are connected to
the Internet behind NATs in general.

Multiple IPv4 Network Address Translation
* Mobile IPv6 should support it
* In the access networks, and in front of the Home network.
* The Home Agent may be deployed on IPv4 networks behind NAT access to the Internet.

Conclution:
If the deployment of Mobile IPv6 requires re-designing the car manufacturers networks because security policies and existing NAT features are not supported, then Mobile IPv6 will remain a beautiful idea that no company will be able to deploy.
I could deploy MIPv6 for real if the IPv4 NAT traversal would be normalized and enable Home
Agent to be connected to the internet behind NATs and other boxes.