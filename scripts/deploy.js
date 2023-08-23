const hre = require('hardhat');
const {tokenEthAddress1} = require('../constants/constants');

    async function main() {
      const bridgeEth = await hre.ethers.getContractFactory('BridgeEth');
      const _bridgeEth = await bridgeEth.deploy(tokenEthAddress1);
      console.log(
          'BirdgeEth Token deployed to:',
          _bridgeEth.address,
      );
      
    }
    
main().
  then(() => process.exit(0)).
      catch((error) => {
          console.error(error);
          process.exit(1);
  });
