function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBLockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBLockHash: previousBLockHash
    }

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;
}

Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

module.exports = Blockchain;