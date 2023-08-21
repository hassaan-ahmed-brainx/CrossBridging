const { ethers } = require("hardhat");

async function main() {
  const [signer] = await ethers.getSigners();

  const bridgeEthAddress = "0x86Ac3d27Ee013E10cfA3D36D048d9C62B63Db4D5";

  const BridgeEth = await ethers.getContractFactory("BridgeEth");
  const bridgeEth = await BridgeEth.attach(bridgeEthAddress);

  const recipient = signer.address;

  const eventRes = await bridgeEth.burn(recipient, 100000000000);
  console.log({eventRes})
  console.log("Burn transaction completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
