var contract;
$(document).ready(function () {
    web3 = new Web3(web3.currentProvider);
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "Votingresults",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint40",
                    "name": "",
                    "type": "uint40"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "adh_and_key",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "AVoting_Start",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "candidateA",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "candidateB",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "candidateC",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "endvoting",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint40",
                    "name": "AdharNumber",
                    "type": "uint40"
                }
            ],
            "name": "GenerateId",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "VotingResult",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_yourId",
                    "type": "bytes32"
                }
            ],
            "name": "writeId",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "voteA",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "voteB",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "voteC",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "yourId",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const address = "0x770F33343ceEaCC73CD65541f57673C0472425b3";
    contract = new web3.eth.Contract(abi, address);
    console.log(contract);

    var id;
    //admin dashboard
    $('#StartVoting').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.AVoting_Start().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#EndVoting').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.endvoting().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#VotingResult').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.VotingResult().send({ from: acc });
        }).then(function (tx) {
            console.log(tx.events.Votingresults.returnValues[0]);
            console.log(tx.events.Votingresults.returnValues[1]);
            id = tx.events.Votingresults.returnValues[0];
            cd = tx.events.Votingresults.returnValues[1];


            $('#result').html(id);
            $('#result2').html(cd);
        }).catch(function (tx) {
            console.log(tx);
        })
    })


    //ID Generation
    $('#Generateid').click(function () {
        var AdharNumber = 0;
        AdharNumber = parseInt($('#Adharnumber').val());

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.GenerateId(AdharNumber).send({ from: acc });
        }).then(function (tx) {
            console.log(tx.events.adh_and_key.returnValues[1]);
            id = tx.events.adh_and_key.returnValues[1];
            $('#showid').html(id);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#uniqueid').click(function () {
        var _yourId = 0;
        _yourId = $('#uniqeidname').val();

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.writeId(_yourId).send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })

    $('#StartVoting').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.AVoting_Start().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#EndVoting').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.endvoting().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#VotingResult').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.VotingResult().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })

    $('#candidateA').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.candidateA().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#candidateB').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.candidateB().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })
    $('#candidateC').click(function () {

        web3.eth.getAccounts().then(function (accounts) {
            var acc = accounts[0];
            return contract.methods.candidateC().send({ from: acc });
        }).then(function (tx) {
            console.log(tx);
        }).catch(function (tx) {
            console.log(tx);
        })
    })

    document.getElementById("uniqueid").onclick = function () {
        this.disabled = true;
    }

})



var web3;
async function Connect() {

    await window.web3.currentProvider.enable();
    web3 = new Web3(window.web3.currentProvider);
    setTimeout(() => {
        let address = web3.currentProvider;
        let acl = Object.values(address);
        addresskey = acl[5]; console.log(addresskey)
        $('#connected').html(addresskey);
    }, 1000)
}