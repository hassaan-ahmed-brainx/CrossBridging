const { ethers } = require("hardhat");
const { bridgeEthAddress, valueToBurn } = require('../constants/constants');


async function main() {
  const [signer] = await ethers.getSigners();
  const BridgeEth = await ethers.getContractFactory("BridgeEth");
  const bridgeEth = await BridgeEth.attach(bridgeEthAddress);

  const recipient = signer.address;

  const eventRes = await bridgeEth.burn(recipient, valueToBurn);
  console.log({eventRes})
  console.log("Burn transaction completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
