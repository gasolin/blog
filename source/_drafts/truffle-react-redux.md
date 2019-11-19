---
title: React/Redux Truffle Template for DApp
tags:
  - web
  - ethereum
  - dapp
---


```mermaid
graph LR

subgraph User
Browser[DApp Compatible Browser]
Wallet
subgraph Frontend
web[Web App]
end
end

subgraph Ethereum
Contract[Contract]
end

web -->Wallet
Wallet -- ABI --> Contract
Contract -- ABI --> web
web --- Browser
```


How `truffle-react-redux` looks like:

```mermaid
graph LR
subgraph User
Browser
Wallet
end

subgraph Truffl-React-Redux
subgraph web
webapp[Web App]
end
subgraph cotracts
Contract
end
end

webapp --> Wallet
Wallet -- ABI --> Contract
Contract -- ABI --> webapp
webapp --- Browser
```


```sh
truffle unbox gasolin/truffle-react-redux
Downloading...
Unpacking...
Setting up...
Unbox successful. Sweet!

Commands:

  Install sub project dependencies (already ran after unpack): npm run bootstrap
  Compile contracts:                                           npm run compile
  Migrate contracts:                                           npm run migrate
  Runs the web dapp in the development mode:                   npm start
  Pump sub project packages version:                           npm run publish
  ```
