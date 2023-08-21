const { ethers } = require("hardhat");

async function main() {
  const [sender] = await ethers.getSigners();

  const tokenEthAddress = "0x9ea2C419d843Cc95422C5d9958Ec1C0384b92Ba9"; 

  const TokenEth = await ethers.getContractFactory("TokenBsc");
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
