const nebulachain_whisperer = require('nebulachain-whisperer');
const converser_nebula = require('converser-nebula');
const dotenv = require('dotenv');
const firebase = require('firebase');
const jest = require('jest');
const chalk = require('chalk');
const enzyme = require('enzyme');
const supertest = require('supertest');

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello from main thread' });
  worker.on('message', message => {
    console.log('Received message from worker:', message);
  });
} else {
  parentPort.postMessage('Hello from worker thread');
}

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const buf = Buffer.from('runoob', 'ascii');
console.log(buf.toString('hex'));

const querystring = require('querystring');
const qs = querystring.parse('name=Node.js&company=NodeSource');
console.log(qs);

// Listen for new blocks mined on the Ethereum network
web3.eth.subscribe('newBlockHeaders', (err, block) => {
  if (!err) {
    console.log('New block:', block);
  } else {
    console.error('Error subscribing to new blocks:', err);
  }
});

// Estimate gas cost for a transaction
web3.eth.estimateGas({
  from: senderAddress,
  to: receiverAddress,
  value: amountToSend
}).then(gasEstimate => {
  console.log('Gas estimate:', gasEstimate);
}).catch(err => {
  console.error('Error estimating gas:', err);
});

console.log('Logging a message to the console.');

// Get the number of transactions for an address
const address = '0xaddress';
web3.eth.getTransactionCount(address).then(count => {
  console.log('Transaction count:', count);
}).catch(err => {
  console.error('Error getting transaction count:', err);
});

const zlib = require('zlib');
const input = 'Compress me!';
zlib.gzip(input, (err, buffer) => {
  if (!err) {
    console.log('Compressed data:', buffer.toString('base64'));
  }
});

// Get information about an Ethereum block by hash
const blockHash = '0xblockHash';
web3.eth.getBlock(blockHash).then(block => {
  console.log('Block details by hash:', block);
}).catch(err => {
  console.error('Error getting block details by hash:', err);
});