const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  `https://sepolia.infura.io/v3/49461c8004904342a479d98cb80d051a`
);

const walletAddress = "0xb254bc63b7d63397ab62266a36b055ac002d227b";
const walletAbi = [
  {
    inputs: [],
    name: "sendEthContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "sendEthUser",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "accountBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
let heading = document.getElementById("name");

const readFromContract = async () => {
  const walletContract = new ethers.Contract(
    walletAddress,
    walletAbi,
    provider
  );
  const contractName = await walletContract.name();
  console.log("Contract Name:", contractName);
  heading.innerText = contractName;

  const num = await walletContract.getValue();
  console.log("Number Value:", String(num));

  const contractBalance = await walletContract.contractBalance();
  const balethContract = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance:", balethContract);

  const userBalance = await walletContract.accountBalance(
    "0xBE4024Fa7461933F930DD3CEf5D1a01363E9f284"
  );
  const balethUser = ethers.utils.formatEther(userBalance);
  console.log("User Balance:", balethUser);
};
readFromContract();
