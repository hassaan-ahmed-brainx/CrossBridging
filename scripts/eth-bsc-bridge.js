const PrivKey = '';
const ethers = require("ethers");
const ABI = [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":true,"internalType":"enum BridgeBase.Step","name":"step","type":"uint8"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"otherChainNonce","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"processedNonces","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
const ABI1 =  [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonce","type":"uint256"},{"indexed":true,"internalType":"enum BridgeBase.Step","name":"step","type":"uint8"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"otherChainNonce","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"processedNonces","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IToken","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
require("dotenv").config();
const {Web3} = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');


async function getTransfer() {
    const ethAddress = "0x86Ac3d27Ee013E10cfA3D36D048d9C62B63Db4D5";
    const provider = new ethers.providers.WebSocketProvider(
      `wss://sepolia.infura.io/ws/v3/6618a602d5e141de9ac09abf770d0108`
    );

    
  
    const provider2 = new HDWalletProvider(
      '',
      'https://data-seed-prebsc-2-s2.binance.org:8545'
    );
  
    const web3 = new Web3(provider2);
    var accounts = await web3.eth.getAccounts();


    const contractAddress = '0xA87CA89D4D26Af64eC1349FBfA1E8b4C1178a19B';
    const contract2 = new web3.eth.Contract(ABI1, contractAddress);
    
    const contract = new ethers.Contract(ethAddress, ABI, provider);
  
    const transferListener = async (from, to, value, nonce, event) => {
      let transferEvent = {
        from: from,
        to: to,
        value: value,
        eventData: event,
      };
  
      const tx = await contract2.methods.mint(to, Number(value), Number(nonce)).send({ from: accounts[0]});;
      console.log(tx);
    };
  
    contract.on("Transfer", transferListener);
  }
  
  getTransfer();
  