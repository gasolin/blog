---
title: Interact Bitfinex API with Node-RED
tags:
  - bitfinex
  - nodered
date: 2019-01-07 14:33:42
---

![Imgur](https://i.imgur.com/BDWezQx.png)

```
Anticipate how API choices and abstractions impact the way other people would solve the problem
```
  - [Designing very large (JavaScript) applications](http://bit.ly/2Fflnpz)

There are many ways to access Bitfinex API to get most of Bitfinex exchange functionalities. For example, you can access REST API, websocket API, or call the language specific API library to eaze the interaction efforts. But in my opinion interact via Node-RED Bitfinex function block is the most easiest one.

## Getting start with Node-RED and Bitfinex API

To get start, you can 

1. install Node-RED `npm install -g node-red`.
2. Start Node-RED via `node-red` command, then go `settings > Palette > Install` tab in node-red
3. search `bitfinex` to install this module.

## Interact with Node-RED

Node-RED is a great way to interact with everything online, with a more intuitive interface.

To simplify the interaction with Bitfinex, 
I wrapped the [Bitfinex function block for Node-RED](https://www.npmjs.com/package/node-red-contrib-bitfinex), which makes bitfinex API very easy to access in Node-RED. You can visually show exchange data in node-red's dashboard, mashup with other services, or trade from weird objects around your house.

For example, you can follow the screenshot to make below REST API work.

![Imgur](https://i.imgur.com/ivFAJWH.gif)

Access websocket API is very simple as well

![Imgur](https://i.imgur.com/ecJV6Io.gif)

You can use configuration block to put your apiKey and apiSecret.

![Imgur](https://i.imgur.com/0eVeu4I.png)

## Visualize data with Node-RED dashboard

Once you got the data via bitfinex function block, it's pretty easy to visualize value and diagram with [Node-RED dashboard](https://flows.nodered.org/node/node-red-dashboard)

![Imgur](https://i.imgur.com/mow1AUX.gif)

![Imgur](https://i.imgur.com/1Y9ooGD.gif)


## One more thing

`You may not know` the [tickers api](https://docs.bitfinex.com/v2/reference#rest-public-tickers) allow query multiple symbols at once, like `rest.tickers(['tETHUSD', 'tBTCUSD'])` and this functoin block supports multiple outputs as well!

![Imgur](https://i.imgur.com/MLS7sCq.gif)

If you make something interesting with Bitfinex API and node-RED, please let me know! (You can share to https://github.com/gasolin/node-red-contrib-bitfinex/issues)


## Other way to interact with Bitfinex API

For reference, You can learn more ways to access the Bitfinex API below.

### Inreact with the REST API

We could read the [API doc](https://docs.bitfinex.com/v2/reference#rest-public-tickers`
) and find we can get the recent ETH/USD pair states via open the browser and visit https://api.bitfinex.com/v2/tickers?symbols=tETHUSD

We'll get an minimal array as the returned data. Refer to the doc we know each column means:

```
[
// on trading pairs (ex. tBTCUSD)
  [
    SYMBOL,
    BID, 
    BID_SIZE, 
    ASK, 
    ASK_SIZE, 
    DAILY_CHANGE, 
    DAILY_CHANGE_PERC, 
    LAST_PRICE, 
    VOLUME, 
    HIGH, 
    LOW
  ],
]
```

Then we can process the array to get what we want. For example, to access the last price of ETH/USD, we could find the result from `array[0][7]` (The first item in returned array denotes ETH/USD result array, the 8th item(the array count from 0 so its 7) in ETH/USD result array is the LAST_PRICE)

### Interact with API library

But for more complicated interaction like place an order with authenticated API, we generally prefer to call language specific library to simplify the process.

The [Bitfinex official doc](https://docs.bitfinex.com/v2/docs/open-source-libraries) listed several open source language specific libraries for developers.

For example, we can use nodejs/javascript to access Bitfinex API via [Bitfinex's nodejs API library](https://github.com/bitfinexcom/bitfinex-api-node)

To install the library, call

```sh
$ npm install bitfinex-api-node
```

Then you can edit a `demo.js` file with content:

```js
const BFX = require('bitfinex-api-node')
const bfx = new BFX()
const rest = bfx.rest(2)
rest.tickers(['tETHUSD']).then(tickers => {
  console.log(tickers)
})
```

to get same result as directly call the REST API on the browser.

Though You may not know the node API build-in the data model mapping, which saves you from manually parsing the returned result.

All you need to do is pass `{ transform: true}` parameter when access the `bfx.rest` method:

```js
const rest = bfx.rest(2, { transform: true })
```

Then you can get value via `ticker.lastPrice`, `ticker.high`...

If you want to access authenticated APIs, just pass the `apiKey` and `apiSecret` when construct the `bfx` api instance.

```js
const bfx = new BFX({
  apiKey: '...',
  apiSecret: '...',
})
```

The API call seems not hard but it did require some effort to make all works.



**Disclosure:** I am currently working on Bitfinex. [Node-red-contrib-bitfinex](https://github.com/gasolin/node-red-contrib-bitfinex) is the personal project though.
