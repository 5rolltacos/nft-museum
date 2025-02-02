const { ethers } = require("hardhat");

//contract address and abi missing
const address = "contract address";
const abi = "abi";

document.addEventListener("DOMContentLoaded", function(event) {

    if (window.ethereum) {

      ethereum.request({ method: "eth_requestAccounts"})
      //"count" ID placeholder must grab from html
      .then(() => document.getElementById("count").click()) 
      .catch((err) => console.error(err.message));

      ethereum.on("chainChanged", () => window.location.reload());

      ethereum.on("accountsChanged", (accounts) => {
          if (accounts.length > 0) { 
            console.log(`Using account ${accounts[0]}`)
          } else {
              console.error("0 accounts.");
          }
      });

      ethereum.on("message", (message) => console.log(message));

      ethereum.on("connect", (info) => {
        console.log(`Connected to network ${info}`);
      });

      ethereum.on("disconnect", (error) => {
        console.log(`Disconnected from network ${error}`);
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();

      const contract = new ethers.Contract(address, abi, signer);


    } else {
        console.error("Install MetaMask.");
    }
});
