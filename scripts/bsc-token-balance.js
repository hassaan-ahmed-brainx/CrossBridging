const { ethers } = require("hardhat");
const {
  tokenEthAddress,
  ethAddress,
  contractAddress,
  bridgeEthAddress,
} = require('../constants/constants');

async function main() {
  const [sender] = await ethers.getSigners();
  const TokenBsc = await ethers.getContractFactory("TokenBsc");
  const tokenBsc = await TokenBsc.attach(tokenEthAddress);
  const balance = await tokenBsc.balanceOf(sender.address);
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
