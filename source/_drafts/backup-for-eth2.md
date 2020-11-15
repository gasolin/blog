---
title: 沒時間了，快上車！備份 Ethereum 2.0 驗證節點
tags:
  - ethereum
date: 2020-07-04 17:06:46
---

前篇從安裝ＲＯＭ到實際運行節點，

這篇要討論節點維護的心得

歷經測試網停擺
https://www.facebook.com/groups/taipei.ethereum.meetup/permalink/1484788958380940/?__cft__[0]=AZV0Nx0j5j_3vWLOVt_u78sz7JI8nK9eQijRAJmpU41OsoMU8lHmP5zvVccX9OaaWpVk1yeCdmHAgmjdl1b2asLC9ztuPlvEeDCIljUADM-nBVWAbtL_IWXKML_3doNxtVkh5NQlS3HKFPyOFvkAX39S3iDm_H4k2KuTkOEgm1x0cx-hV99ParhvfqfF6t44EO4&__tn__=%2CO%2CP-R


新 ROM ，包含

https://www.reddit.com/r/ethereum/comments/ikgp1z/ethereum_on_arm_new_eth20_raspberry_pi_4_image/

## 啟動 beacon chain
```sh
sudo systemctl enable prysm-beacon
sudo systemctl start prysm-beacon
```

## 帳號回復

```sh
/usr/bin/validator wallet-v2 recover
```


多種 ETH 2 客戶端設定
Teku https://medium.com/@SomerEsat/guide-to-staking-on-ethereum-2-0-ubuntu-medalla-teku-170e2c52bd23
LightHouse https://medium.com/@SomerEsat/guide-to-staking-on-ethereum-2-0-ubuntu-medalla-lighthouse-c6f3c34597a8
Prysm https://medium.com/@SomerEsat/guide-to-staking-on-ethereum-2-0-ubuntu-medalla-prysm-4d2a86cc637b


安全驗證
https://github.com/diglos/pi-gen/tree/ethraspbian2.0/

Failback Plan

Exit Plan

postmotem
重開後找不到validator資訊 --> 重開beacon service解決


$ validator accounts status

ls /etc/systemd/system/

sudo systemctl status prysm-validator
sudo systemctl status prysm-beacon
sudo systemctl status geth

不同版型的 grafana dashboard
https://github.com/metanull-operator/eth2-grafana

運行的服務
/etc/systemd/system/prysm-validator.service

要備份的
/etc/ethereum/prysm-validator.conf
~/.eth2validators

FAQ
https://docs.prylabs.network/docs/faq/

check my validator public key
$ validator accounts keys


Improve peer-to-peer connectivity
https://docs.prylabs.network/docs/prysm-usage/p2p-host-ip

how prysm works
  https://docs.prylabs.network/docs/how-prysm-works/architecture-overview

eth2 resources
https://docs.prylabs.network/docs/reading/eth2

保養
- 週期性重啟服務
- 定期軟體升級

備援
- 效益 (成本)
- 斷電/斷線/不穩, 設備壞掉, 設備/系統當機, 程式當機

- 網路設備壞掉 (低)
- 網路設備當機 (中)
- SD 卡壞掉 -> sdcard backup
- 主機當機
- Raspberry Pi 壞掉 backup rpi (6 hr-1 day)
- SSD 壞掉 -> ssd sync

## 帳號回復

```sh
/usr/bin/validator wallet-v2 recover
```

## run 2nd validator

Run an Ethereum 2 validator could got a badge
https://beaconcha.in/poap

## new dashboard

Copy and paste the dashboard at https://raw.githubusercontent.com/metanull-operator/eth2-grafana/master/eth2-grafana-dashboard-single-source.json into the "Import via panel json" text box on the screen.

or https://raw.githubusercontent.com/GuillaumeMiralles/prysm-grafana-dashboard/master/less_10_validators.json

## badge

到 https://beaconcha.in/poap 取得 graffiti code

vi /etc/ethereum/prysm-validator.conf
add `--graffiti "graffiti code"`

## LightHouse

https://lighthouse-book.sigmaprime.io/become-a-validator.html

https://github.com/stefa2k/prysm-docker-compose

https://github.com/sigp/lighthouse-docker


## IOTStack

https://sensorsiot.github.io/IOTstack/Getting-Started/


- What technical problems you might have running a validator?
https://www.reddit.com/r/ethstaker/comments/iqyx8s/what_technical_problems_you_might_have_running_a/
