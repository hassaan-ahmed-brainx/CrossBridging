const { ethers } = require("hardhat");
const {tokenEthAddress1} = require('../constants/constants');

async function main() {
  const [sender] = await ethers.getSigners();
  const TokenEth = await ethers.getContractFactory("TokenEth");
  const tokenEth = await TokenEth.attach(tokenEthAddress1);

  const balance = await tokenEth.balanceOf(sender.address);
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
