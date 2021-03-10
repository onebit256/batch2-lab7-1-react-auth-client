import config from '../config';
const Web3 = require('web3')
const Web3Utils = require('web3-utils')
console.log("Dsa")
const PROOFOEXISTENCE_ABI = require('../abis/ProofOfExistence')


const USER_ADDRESS = config.USER_ADDRESS
const USER_ADDRESS_PRIVATE_KEY = config.USER_ADDRESS_PRIVATE_KEY
const PROOFOEXISTENCE_ADDRESS = config.PROOFOEXISTENCE_ADDRESS
const RPC_URL = config.RPC_URL

     
class ChainDataService {
    
        constructor() {     
          const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
          this.web3Instance = new Web3(web3Provider)
          this.proofofexistence = new this.web3Instance.eth.Contract(PROOFOEXISTENCE_ABI.abi, PROOFOEXISTENCE_ADDRESS)
    
        }

    async storeData(ipfshash) {
      const poe = await this.proofofexistence.methods
          .storeHash(ipfshash)
          .encodeABI({ from: USER_ADDRESS })
      
      const tx = {
            to: PROOFOEXISTENCE_ADDRESS,
            data: poe,
            from: USER_ADDRESS
          };

      const gas = await Math.round((await this.web3Instance.eth.estimateGas(tx)) * 1);
      tx.gas =gas;
      console.log(gas)

      
      const account = this.web3Instance.eth.accounts.privateKeyToAccount(USER_ADDRESS_PRIVATE_KEY);
      console.log(account)
      const signedTx = await account.signTransaction(tx);
      const res = await  this.web3Instance.eth.sendSignedTransaction(signedTx.rawTransaction);
      return res
    }
  }

  export default new ChainDataService()