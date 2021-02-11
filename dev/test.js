const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(112, 'ASJFIJF342SFJ', 'ADSF7342HAFO');
bitcoin.createNewTransaction(100, 'ALEX93JFIOJFF', 'JENFIJIQ984OJOF');
bitcoin.createNewBlock(452, 'ASJFIJA1A2SFJ', 'ADSFI38FO');

console.log(bitcoin.chain[1]);