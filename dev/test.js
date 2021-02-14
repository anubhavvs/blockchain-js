const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'IDIFUHUFHAIFA245FUFFDF1';
const currentBlockData = [
    {
        amount: 10,
        sender: 'ABCD',
        recipient: 'EFGH'
    },
    {
        amount: 50,
        sender: 'XYZD',
        recipient: 'UYHH'
    },
    {
        amount: 45,
        sender: 'KJJS',
        recipient: 'POIU'
    }
];

const nounce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nounce));
