---
title: Dual boot Elementary OS & Windows 10 on XPS 13 (9360)
tags:
  - linux
date: 2017-10-25 14:40:48
---

I just successfully installed Elementary OS Luna (0.4.1) along side with Windows 10 on my Dell XPS 9360 machine.

Comparing XPS 13 `9360 (8th Gen i7)` with my previous model `9343 (5th Gen i7)`, the CPU way faster(like 3 times faster), the wireless works well and the signal is stronger (which I was encountered some issues in XPS 13 9343), and the battery life did last longer in 9360.

Several settings are trickier than early days when I try to install *nux on Notebook. Here's the self reference guide and hope it could help others.

## Settings on Windows

### Login to Microsoft account

It's necessary to bind your account with the device, so you can get recovery key later.

### Flash Elementary OS to the USB disk

I download the OS image from [Elementary OS web site](http://elementary.io/) and use [Unetbootin](https://unetbootin.github.io/) to flash the image into the disk.

### Shrink the disk space

I have the 256GB SSD, I use [Partition Wizard](https://www.partitionwizard.com/) to slice ~100GB for Elementary OS. 

I have 8GB RAM so I [reference](https://askubuntu.com/questions/49109/i-have-16gb-ram-do-i-need-32gb-swap
) the recommend swap size and left ~8GB for swap.

### Disable fast startup

I also need to follow the instructions to [disable the fast startup](https://www.tenforums.com/tutorials/4189-turn-off-fast-startup-windows-10-a.html) on Windows.

### Switch SATA operation mode from RAID to AHCI

Here's the most tricky part. It takes me a while to figure out how to switch the SATA storage from RAID to AHCI. The trick is doing this procedure with [Windows safe mode](http://triplescomputers.com/blog/uncategorized/solution-switch-windows-10-from-raidide-to-ahci-operation/).

## Settings on BIOS

Press `F12` during booting.

* Don't need to turn off the security boot.
* Follow above link's instructions to config SATA storage.
* Save the configureation before exit.

Reboot to windows and make sure windows runs nicely in safemode. Then follow above link's instructions to jump out of safemode.

Now I'm prepared and able to install Elementary OS.

## Install Elementary OS through USB disk

Install Elementary OS as usual Ubuntu distribution.

First connect to wifi and allow install 3rd party softwares. 

Add the left space as `/`(root) with `Ext4` format. And set the left ~8GB as `SWAP` format.

Then continue the auto install process.

Now I have a clean Elementary OS.

## Recover Windows with BitLocker recovery keys

After restart I can see an option menu with Elementary OS and Windows Boot Manager.

I can boot to Elementary OS without major issue.

Well, I met the problem that AppCenter can't start correctly, so I do `sudo apt update && sudo apt upgrade` then `sudo apt purge appcenter && sudo apt purge packagekit` then restart and run `sudo apt install appcenter && sudo apt install packagekit` to make it work normally.

The input method and bluetooth pairing seems not work out of box, but I can live with that.

Then when I boot to Windows, I need to enter the BitLocker recovery keys. That could be solved by [following the FAQ from microsoft](https://support.microsoft.com/en-us/help/17133/windows-8-bitlocker-recovery-keys-frequently-asked-questions
). I need to login to Microsoft Account and find the recovery key.

Enter the recovery key then everything works.
