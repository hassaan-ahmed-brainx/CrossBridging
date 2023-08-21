const { ethers } = require("hardhat");

async function main() {
  const [sender] = await ethers.getSigners();

  const tokenEthAddress = "0x262c2cf1Ea48482702D5208d1f593E3F8305797D"; 

  const TokenEth = await ethers.getContractFactory("TokenEth");
  const tokenEth = await TokenEth.attach(tokenEthAddress);

  const balance = await tokenEth.balanceOf(sender.address);
  console.log(balance.toString());
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
