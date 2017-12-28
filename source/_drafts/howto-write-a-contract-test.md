---
title: 如何撰寫智能合約(Smart Contract)?(IV)加入測試
tags:
  - ethereum
  - solidity
  - javascript
date: 2017-09-12 00:47:31
---

## 加入測試

我們講到智能合約安全性極端重要，要避免基礎錯誤，完整地自動測試是必需的。

接續上一篇建立`SimpleToken`合約，在`test/`目錄下加入`test_simple_token.js`測試檔案，

```js
var SimpleToken = artifacts.require('SimpleToken');

contract('HelloWorld', function(accounts) {
  it('should assert true', function(done) {
    var hello_world = HelloWorld.deployed();
    assert.isTrue(true);
    done();
  });
});

```

## 用 Promise

```js
var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 100000;
let _totalSupply;

contract('HelloToken', function(accounts) {
  it('should met initial supply', function() {
    var contract;
    HelloToken.deployed().then((instance) => {
        contract = instance;
        return contract.totalSupply.call();
    }).then((totalSupply) => {
        _totalSupply = totalSupply;
        assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
        return contract.balanceOf(accounts[0]);
    }).then((senderBalance) => {
        assert.equal(_totalSupply.toNumber(), senderBalance.toNumber());
    });
  });
});
```


## 用 async/await 改寫

```js
var HelloToken = artifacts.require('HelloToken');

const INITIAL_SUPPLY = 100000;

contract('HelloToken', function(accounts) {
  it('should met initial supply', async function() {
    let contract = await HelloToken.deployed();
    let totalSupply = await contract.totalSupply.call();
    let senderBalance = await contract.balanceOf(accounts[0]);
    assert.equal(totalSupply.toNumber(), INITIAL_SUPPLY);
    assert.equal(totalSupply.toNumber(), senderBalance.toNumbe());
  });
});
```

再接著加入轉帳測試

```js
  it('should have right balance after transfer', async function() {
    const AMOUNT = 123;
    let contract = await HelloToken.deployed();
    // check init balance
    let account0Balance = await contract.balanceOf(accounts[0]);
    let account1Balance = await contract.balanceOf(accounts[1]);
    assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY);
    assert.equal(account1Balance.toNumber(), 0);
    // check balance after transferred
    await contract.transfer(accounts[1], AMOUNT);
    account0Balance = await contract.balanceOf(accounts[0]);
    account1Balance = await contract.balanceOf(accounts[1]);
    assert.equal(account0Balance.toNumber(), INITIAL_SUPPLY - AMOUNT);
    assert.equal(account1Balance.toNumber(), AMOUNT);
  });
```

# 參考資料

[1] Writing Tests in Javascript http://truffleframework.com/docs/getting_started/javascript-tests
