---
title: Advanced tuning for my daily Elementary OS usage
tags:
  - linux
date: 2018-02-25 16:30:46
---

I'm a happy Elementary OS user and use it as my default desktop OS (~95%) several month. There are some useful tweakings that help me live with the Linux desktop.

## 1. Package installer

Elementary OS does not provide deb installer by default, need install manually:

```sh
sudo apt install gdebi
sudo apt install software-properties-common
```

And you can download `ubuntu software center` as well(optional).

## 2. Setup Fonts

List system supported fonts

```sh
fc-list | cut -f2 -d: | sort -u
```

Setup fonts

```sh
gsettings set org.pantheon.terminal.settings font 'Roboto Mono'
gsettings set org.gnome.desktop.interface font-name 'Open Sans 9'
gsettings set org.gnome.desktop.interface document-font-name 'Open Sans 10'
```

## 3. Pairing Bluetooth Mouse

I can't use GUI Bluetooth manager to pair with bluetooth device, but these commandline works well for me.

```sh
$ bluetoothctl
$ agent on
$ default-agent
$ pairable on
$ scan on
$ devices (to see the devices and macs that you want to pair)
$ pair <dev mac>
$ trust <dev mac>
$ connect <dev mac>
```

## 4. Saving Power

`tlp` is a good tool for auto power management

```
sudo add-apt-repository ppa:linrunner/tlp
sudo apt-get update
sudo apt-get install tlp
sudo tlp start
```

## 5. Auto adjust color temperature

[redshift](http://jonls.dk/redshift/) is by far the great f.lux like app for linux.

```sh
$ sudo apt-get install redshift redshift-gtk
$ redshift-gtk
```

Then configue it as auto start in task bar.

### 6. Touchpad indicator

Sometimes you may found the cursor is moving to the wrong place. Install Touchpad indicator solved this issue.

```sh
sudo add-apt-repository ppa:atareao/atareao
sudo apt-get update
sudo apt-get install touchpad-indicator
```

and Toggle `Disable Touchpad on typing`.

## 7. Dropbox icon

Install Dropbox from its website, then [configue to fix the missing icon](http://sandeepbhardwaj.github.io/2016/11/13/missing-dropbox-icons-on-elementary-loki.html).

## 參考資料

* Tweaking fonts https://adam.merrifield.ca/2016/11/12/tweaking-fonts-in-elementary-os/
* Ubuntu 16.04 LTS: get bluetooth mouse to work https://askubuntu.com/questions/839014/ubuntu-16-04-lts-cant-get-bluetooth-mouse-to-work?rq=1
* http://refugeeks.com/use-tlp-to-optimize-the-power-consumption-in-ubuntu/
* https://elementaryos.stackexchange.com/questions/1090/how-to-optimize-elementary-os-for-maximal-battery-life-time-on-laptops
* https://itsfoss.com/night-shift-flux-ubuntu-linux/
* Top 10 Best Things To Do After Installing Elementary OS 0.4.1 Loki
* https://www.ubuntupit.com/top-10-best-things-installing-elementary-os/
