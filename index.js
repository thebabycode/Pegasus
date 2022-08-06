// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        console.log("hellos");
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
    console.log (window.web3.currentProvider)
  
  // contractAddress and abi are setted after contract deploy
  var contractAddress ="0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB";


  const userData =[
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Rent_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rentno",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "RoomAddresss",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "tenantAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "landlordAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "RoomAgreement_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "RoomAddresss",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "securityDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockInPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "tenantAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "landlordAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Room_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "roomaddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "securityDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "vacant",
          "type": "bool"
        },
        {
          "internalType": "address payable",
          "name": "landlord",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "currentTenant",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_roomaddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_rentcost",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_securitydeposit",
          "type": "uint256"
        }
      ],
      "name": "addRoom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "agreementCompleted",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "agreementTerminated",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "howManyRoomsNow",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_agreement",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_rent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_rooms",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "payRent",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "signAgreement",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  //var abi = JSON.parse('[{"constant":true,"inputs":[],"name":"getInfo","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_info","type":"string"}],"name":"setInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]' );
  

  var abi=JSON.parse(JSON.stringify(userData),(key, value) => {
    console.log(key); // log the current property name, the last is "".
    return value;     // return the unchanged property value.
  });
  console.log(JSON.stringify(userData));
  //contract instance
  console.log("Connected with smart contract");
  contract = new window.web3.eth.Contract([
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Rent_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "rentno",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "RoomAddresss",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "tenantAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "landlordAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "RoomAgreement_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "Roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "RoomAddresss",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "securityDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lockInPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "tenantAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "landlordAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "Room_by_No",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "roomid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "agreementid",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "roomaddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rent_per_month",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "securityDeposit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "vacant",
          "type": "bool"
        },
        {
          "internalType": "address payable",
          "name": "landlord",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "currentTenant",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_roomname",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_roomaddress",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_rentcost",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_securitydeposit",
          "type": "uint256"
        }
      ],
      "name": "addRoom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "agreementCompleted",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "agreementTerminated",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "howManyRoomsNow",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_agreement",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_rent",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "no_of_rooms",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "payRent",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "signAgreement",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ],'0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB');
  });
  
  //contract=new window.ethereum.Contract(abi,contractAddress);
  
  // Accounts
  var account;
  
  web3.eth.getAccounts(function(err, accounts) {
    if (err != null) {
      alert("Error retrieving accounts.");
      return;
    }
    if (accounts.length == 0) {
      alert("No account found! Make sure the Ethereum client is configured properly.");
      return;
    }
    account = accounts[0];
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
  });
  
  //Smart contract functions
  function registerSetInfo() {
    //contract = new web3.eth.Contract(abi,contractAddress);
    info = $("#newInfo").val();
    //senting a number to function 
    contract.methods.signAgreement (info).send({from:"0xeE6E76f12c6fac560B1eCa027628327E8db910CF"}).then( function(tx) {
      console.log("Transaction: ", tx);
    });
    $("#newInfo").val('');
  }
  
  function registerGetInfo() {
    //contract = new web3.eth.Contract(abi,contractAddress);
    contract.methods.howManyRoomsNow().call().then( function( info ) {
      console.log("Rooms available now: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    });
  }

//Metamast implemantataion

  // web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });