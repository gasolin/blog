---
title: 沒時間了，快上車！遷移到 Ethereum 2.0 測試網
tags:
  - ethereum
date: 2020-08-07 20:35:46
---

在前篇發布後至今一個月，以太坊官方的 Modalla 測試網已經啟動，ETH 2 的[驗證者啟動頁面(launchpad)](https://medalla.launchpad.ethereum.org)也首次就緒。雖然尚未有新版的 EthereumOnARM ROM，但做完以下設定後，我也順利遷移到了新測試網。

![Imgur](https://i.imgur.com/wFgjt9W.png)

## 0. 準備

照著[前一篇](https://blog.gasolin.idv.tw/2020/07/04/prepare-for-eth2/) 的教學安裝好樹莓派，按照[設定驗證者 (Validator) 資訊](https://blog.gasolin.idv.tw/2020/07/04/prepare-for-eth2/#%E8%A8%AD%E5%AE%9A%E9%A9%97%E8%AD%89%E8%80%85-Validator-%E8%B3%87%E8%A8%8A) 一節做完後，跟著本篇做 Modalla 測試網的設定。

接著打開 https://medalla.launchpad.ethereum.org 網頁，我們將跟著一步步完成驗證者的設定 (使用 prysm 客戶端)。

![Imgur](https://i.imgur.com/DGLt9SC.png)

## 1. 存入 32 (test) ETH

![Imgur](https://i.imgur.com/uZDaq2d.png)

從 https://faucet.goerli.mudit.blog/ 取得 > 32 goerli (測試網) ETH

![Imgur](https://i.imgur.com/xl0VVgD.png)

請及早準備好 32 ETH，移到 ETH 2 網路預計需要花8小時以上。

## 2. 設定樹莓派

ssh 登入樹莓派，確認相關的軟體都升級到最新版本

```sh
$ sudo apt update && sudo apt upgrade
```

## 3. 產生驗證者所需檔案

下載並執行 eth2.0-deposit-cli 命令，以產生驗證者所需檔案[^3]

```
cd ~
sudo apt-get install python3-pip
git clone https://github.com/ethereum/eth2.0-deposit-cli.git
cd eth2.0-deposit-cli
sudo ./deposit.sh install
./deposit.sh --num_validators 1 --chain medalla
```

將產生的檔案(`/eth2.0-deposit-cli/validator_keys`)從樹莓派複製到本機[^4]

```sh
scp ethereum@192.168.50.214://home/ethereum/misc/eth2.0-deposit-cli/validator_keys/deposit_data-1596511852.json deposit_data-1596511852.json
```

將檔案上傳到 Launchpad https://medalla.launchpad.ethereum.org/upload-validator

![Imgur](https://i.imgur.com/DTt0rFs.png)

## 4. 設定 validator

在樹莓派上，將產生的驗證者檔案匯入 prysm

```sh
$ /usr/bin/validator accounts-v2 import --keys-dir=$HOME/misc/eth2.0-deposit-cli/validator_keys
Enter a wallet directory (default: /home/ethereum/.eth2validators/prysm-wallet-v2):

Directory where passwords will be stored (default: /home/ethereum/.eth2validators/prysm-wallet-v2-passwords):

[2020-08-04 12:14:33]  INFO accounts-v2: Successfully created new wallet wallet-path=/home/ethereum/.eth2validators/prysm-wallet-v2
Importing accounts: 0x945fc73b7547

Enter the password for your imported accounts: Importing accounts, this may take a while...
Finished importing 0x945fc73b7547
 100% [=================================================================================================================================================================]  [2s:0s]Successfully imported 1 accounts, view all of them by running accounts-v2 list
 ```

## 5. 啟動 beacon 網路

如果你和我一樣有跑之前的測試網，需要先清空之前測試網的資料庫紀錄，才能順利啟動 beacon 服務。

```sh
/usr/bin/beacon-chain --force-clear-db
```

接著啟動 beacon 服務 (用的是 EthereumOnARM ROM 提供的 service)

```
sudo systemctl start prysm-beacon
```

運行順暢後，再啟動 validator 服務

```
sudo systemctl start prysm-validator
```

要查看各服務的狀態，可以用以下命令

```sh
sudo systemctl status prysm-beacon
sudo systemctl status prysm-validator
sudo systemctl status geth.service
```

## 參考資料

- [1] Eth2 launchpad onboarding https://docs.prylabs.network/docs/testnet/medalla/
- [2] eth2 validator launchpad https://blog.ethereum.org/2020/07/27/eth2-validator-launchpad/
- [3] https://github.com/metanull-operator/eth2-ubuntu#make-validator-deposits-and-install-keys
- [4] scp 指令用法 https://blog.gtwang.org/linux/linux-scp-command-tutorial-examples/
