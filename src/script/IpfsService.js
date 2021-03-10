// add to Ipfs - this can be a string, a Buffer, a stream of Buffers, etc
// returns the hash
import config from '../config';
const IpfsHttpClient  = require('ipfs-http-client');
// const globSource = require('ipfs-utils/src/files/glob-source')
// const IPFS = require('ipfs-core')

// const IPFS_URL = '/ip4/127.0.0.1/tcp/5001';

class IpfsService {
    
    constructor() {     
        // const gg =new URL(IPFS_URL);
        this.IpfsHttpC = IpfsHttpClient({ host: config.host, port: config.port, protocol: config.protocol });        
        const p =0;
    }



    async  addToIpfs( buffer) {
        return　await this.IpfsHttpC.add(buffer);
    }

    // get from Ipfs
    // returns Blob
    async  getFromIpfs(ipfsNode, hash) {
        return new Blob([await ipfsNode.cat(hash)]);
    }
}

export default new IpfsService()