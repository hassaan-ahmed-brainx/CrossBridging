const hre = require('hardhat');
const {tokenEthAddress1} = require('../constants/constants');

    async function main() {
      const rewardToken = await hre.ethers.getContractFactory('BridgeEth');
      const _rewardToken = await rewardToken.deploy(tokenEthAddress1);
      console.log(
          'BirdgeEth Token deployed to:',
          _rewardToken.address,
      );
      
    }
    
main().
  then(() => process.exit(0)).
      catch((error) => {
          console.error(error);
          process.exit(1);
  });
