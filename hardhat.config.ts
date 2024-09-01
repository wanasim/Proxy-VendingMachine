import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: vars.get("ALCHEMY_SEPOLIA_URL"),
      accounts: [vars.get("SEPOLIA_PRIVATE_KEY") as string],
    },
  },
  etherscan: {
    apiKey: vars.get("ETHERSCAN_KEY"),
  },
};

export default config;
