const { ethers } = require("hardhat");
const {
  tokenEthAddress,
  ethAddress,
  contractAddress,
  bridgeEthAddress,
} = require('../constants/constants');

async function main() {
  const [sender] = await ethers.getSigners();
  const TokenEth = await ethers.getContractFactory("TokenBsc");
  const tokenEth = await TokenEth.attach(tokenEthAddress);
  const balance = await tokenEth.balanceOf(sender.address);
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
