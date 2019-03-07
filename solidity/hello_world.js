var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "word",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x2f64d386"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newWord",
        "type": "string"
      }
    ],
    "name": "Set",
    "type": "event",
    "signature": "0xde696604ac839ef8a5d0fcb2310ea48463357a6247e0d961d77c41d136a5d946"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6d4ce63c"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newWord",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4ed3885e"
  }
];
var address = "0xBbc3218a01e7b87EE02B5c124821db2B7d0f7C53"; // コントラクトアドレス
   
window.onload = function() {
    var contract = web3.eth.contract(abi).at(address);
    contract.get((error, result) => {
        document.getElementById("contract_result").textContent = result;
    });

    web3Local = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    var eventContract = web3Local.eth.contract(abi).at(address);
    eventContract.Set((error, data) => {
        console.log("event callback.");
        document.getElementById("contract_result").textContent = data.args.newWord;
    });

    document.getElementById("button_set").onclick = () => {
        let time = Math.floor(new Date().getTime() / 1000);
        var name = document.getElementById('name').value;
        console.log(time);
        console.log(name);
        contract.set("" + name, (error, txid) => {
            console.log(txid);
        });
    };
};