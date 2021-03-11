const Web3 = require('web3')
const Web3Utils = require('web3-utils')
const { sendTx, sendRawTx, getReceipt } = require('./helper/sendTx')
console.log("Dsa")
const PROOFOEXISTENCE_ABI = require('../contracts/ProofOfExistence')


const USER_ADDRESS = '0x4B7b9a134b1F18595751AE32C008D96e69e2894B'
const USER_ADDRESS_PRIVATE_KEY ='c676a5326805d483b7014d26b4e3ae9348932cdcc3733096616d4f4bbb473316'
const PROOFOEXISTENCE_ADDRESS = '0xCC28a55Ab549345F13c18bB9808f282f7162a4ce'
const RPC_URL = 'http://127.0.0.1:7545'

      const web3Provider = new Web3.providers.HttpProvider(RPC_URL)
      const web3Instance = new Web3(web3Provider)
      const proofofexistence = new web3Instance.eth.Contract(PROOFOEXISTENCE_ABI.abi, PROOFOEXISTENCE_ADDRESS)

    async function storeData() {
    
      
      const poe = await proofofexistence.methods
          .storeHash('0x1221c3biccngdddsa')
          .encodeABI({ from: USER_ADDRESS })
      
      const tx = {
            to: PROOFOEXISTENCE_ADDRESS,
            data: poe,
            from: USER_ADDRESS
          };

      const gas = await Math.round((await web3Instance.eth.estimateGas(tx)) * 1);
      tx.gas =gas;
      console.log(gas)

      
      const account = web3Instance.eth.accounts.privateKeyToAccount(USER_ADDRESS_PRIVATE_KEY);
      console.log(account)
      const signedTx = await account.signTransaction(tx);
      const res = await  web3Instance.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log(res)
    }

    storeData()