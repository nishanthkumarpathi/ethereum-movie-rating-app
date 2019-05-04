import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

const ratingABI = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"movieNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

const ratingAddress = '0xacd7b9882d9d69f10bc946af4ff9affce32fb0ae';
web3.eth.defaultAccount = web3.eth.accounts[0];

const ratingContract = web3.eth.contract(ratingABI).at(ratingAddress);

export { ratingContract };
