const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(112, 'ASJFIJF342SFJ', 'ADSF7342HAFO');
bitcoin.createNewBlock(554, 'ASJFIG341ASFJ', 'ADSF7GASDHAFO');
bitcoin.createNewBlock(658, 'KKSDJF342SFJ', 'AIFU17SSSF9AFO');

console.log(bitcoin);