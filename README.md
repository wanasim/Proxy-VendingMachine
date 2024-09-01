# Proxy Vending Machine

A simple example of a Transparent Proxy Contract with Hardhat + Viem. For more information go to: https://hardhat.org/ignition/docs/guides/upgradeable-proxies

## Environment Variables

This project makes use of Hardhat vars to environment variables. For more info: https://hardhat.org/hardhat-runner/docs/guides/configuration-variables

Key env variables: 1. ALCHEMY_SEPOLIA_URL 2. SEPOLIA_PRIVATE_KEY 3. ETHERSCAN_KEY

## Deploying

To deploy the an example proxy contract against the ephemeral Hardhat network:

```shell
npx hardhat ignition deploy ./ignition/modules/ProxyModule.ts
```

To deploy an example of a proxy contract being upgraded against the ephemeral Hardhat network:

```shell
npx hardhat ignition deploy ./ignition/modules/UpgradeModule.ts
```
