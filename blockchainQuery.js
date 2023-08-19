const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/49461c8004904342a479d98cb80d051a"
);
const interactWithBlockchain = async () => {
  //current block number of mainnet
  const blockNum = await provider.getBlockNumber();
  console.log(`block number rn is ${blockNum}`);

  // get account balance
  const balance = await provider.getBalance(
    "0xd2090025857b9c7b24387741f120538e928a3a59"
  );
  console.log("Account Balance In Big number:", balance);
  console.log(`balance in ethers is ${ethers.utils.formatEther(balance)}`);

  console.log("---------------------------------");
  console.log("---------------------------------");
  console.log("---------------------------------");

  const balanceEther = ethers.utils.formatEther(balance);
  console.log("Account Balance In Ether:", balanceEther);

  const balanceWei = ethers.utils.parseEther(balanceEther);
  console.log("Account Balance In Wei:", balanceWei);
};
interactWithBlockchain();
