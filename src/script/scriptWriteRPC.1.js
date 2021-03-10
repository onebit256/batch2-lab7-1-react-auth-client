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
      const chainId = await sendRawTx({
        url: RPC_URL,
        params: [],
        method: 'net_version'
      })
    
      let nonce = await sendRawTx({
        url: RPC_URL,
        method: 'eth_getTransactionCount',
        params: [USER_ADDRESS, 'latest']
      })
    
      nonce = Web3Utils.hexToNumber(nonce)
    
      
      const poe = await proofofexistence.methods
          .storeHash('0x123')
          .encodeABI({ from: USER_ADDRESS })
    
      try {
        const txHash = await sendTx({
          rpcUrl: RPC_URL,
          privateKey: USER_ADDRESS_PRIVATE_KEY,
          data: poe,
          nonce,
          gasPrice: '1',
          amount: '0',
          gasLimit: 1000000,
          to: PROOFOEXISTENCE_ADDRESS,
          web3: web3Instance,
          chainId: chainId
        })
    
        const txReceipt = await getReceipt(txHash, RPC_URL)
        if (txReceipt.status == '0x1') {
          console.log('transaction succeeded: ', txHash)
        }
      } catch (e) {
        console.log(e)
      }
    }

    storeData()