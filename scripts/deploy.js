
const hre = require('hardhat');
    async function main() {
      const rewardToken = await hre.ethers.getContractFactory('BridgeEth');
      const _rewardToken = await rewardToken.deploy('0x262c2cf1Ea48482702D5208d1f593E3F8305797D');
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
