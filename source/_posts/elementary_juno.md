---
title: Tuning for my daily Elementary OS Juno
tags:
  - linux
date: 2019-02-22 14:30:46
---

I've been use Elementary OS as my primary laptop OS over a year and have been [written some posts](https://blog.gasolin.idv.tw/2018/02/25/advanced_elementary_os_usage/) for it.
I Upgraded to Elementary OS Juno at December last year. Juno is based on Ubuntu 18.04, the experience is very positive. Most things works fine and not much things need to tune for daily usage.

Here's my setup for my Dell XPS 13-9360 laptop.

## 1. Package installer

1. Insatll `Eddy` on AppCenter instead of `sudo apt install gdebi`
2. install essentials

  ```sh
  sudo apt install software-properties-common git
  ```

##　2. Setup Fonts

```sh
$ apt instsall firacode
```

## 3. Bluetooth, Touchpad and Mouse

The Bluetooth connectoin is basically stable. No need for extra setup.

To [make right click works for Touchpad](https://elementaryos.stackexchange.com/questions/16548/touchpad-right-button-not-working-for-right-click-on-juno), go `Settings >　Mouse & TouchPad`, select from `MultiTouch` to `TouchPad` in `Physical Click` section.

To use logitech mouse with unifying USB dongle, you can do `sudo apt install solaar solaar-gnome3` and there will be `solaar-cli` command line tool and the GUI tool available.

To [customize the extra buttons in mouse](https://www.ralf-oechsner.de/opensource/page/logitech_performance_mx), install `xbindkeys`

```
sudo apt-get install xbindkeys xautomation x11-utils
```

Then create the config file using `xbindkeys --defaults > $HOME/.xbindkeysrc`.

## 4. Saving Power

tlp is a good tool for auto power management and now it can be installed through the default repo.

```
sudo apt-get install tlp
sudo tlp start
```

## 5. Auto adjust color temperature

It's build-in now.

Go `Settigns > Monitor > Night Light` to toggle it on.

## 6. Chinese Input Method

Instead of [configure by yourself](https://blog.gasolin.idv.tw/2017/11/04/chinese-in-elementary-os/). It's build-in now.

1. Select `Traditional Chinese` during install Elementary OS.
2. Enter `System >　Language & Area > Keyboard Setting > Input Method Settings`.
3. Remove all other IME except `新酷音` and it just works.

## 7. Tweaks

Can use elementary-tweaks to easily change system font to `Noto Sans CJK TC regular` instead of `Open Sans`

```sh
sudo add-apt-repository ppa:philip.scott/elementary-tweaks
sudo apt update
sudo apt install elementary-tweaks
```

Then open `Tweaks` in System Settigns panel.
