import './App.css';
import  React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import 'bootstrap/dist/css/bootstrap.min.css'

import TokenField from './components/TokenField';

const UNI_TOKEN_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
const USDC_TOKEN_ADDRESS = '0x6f14C02Fc1F78322cFd7d707aB90f18baD3B54f5'
const WRAPPED_ETHER_ADDRESS = '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14'

// contracts for icons
const WETH_COINGECKO_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

const ERC20ABI = require('./abi.json')

function App() {
  const [walletAddress, setWalletAddress] = useState(undefined)
  const [ether, setEther] = useState(0)
  const [uni, setUni] = useState(0)
  const [usdc, setUsdc] = useState(0)
  const [weth, setWeth] = useState(0)

  useEffect( ()=> {
    const onLoad = async () => {
      const provider = await new ethers.providers.Web3Provider(window.ethereum)

      provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()

      let ether;
      ether = await signer.getBalance()
      ether = ethers.utils.formatEther(ether, 18)
      setEther(ether)

      const walletAddress = await signer.getAddress()
      setWalletAddress(walletAddress)

    }
    onLoad()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome, { walletAddress?.substring(0,10) }...
         </p>
         <div>
          <TokenField 
              contractAddress={WETH_COINGECKO_ADDRESS}
              tokenName="ETH"
              balance={ether} 
          />
          <TokenField 
              contractAddress={WETH_COINGECKO_ADDRESS}
              tokenName="ETH"
              balance={ether} 
          />
          <TokenField 
              contractAddress={WETH_COINGECKO_ADDRESS}
              tokenName="ETH"
              balance={ether} 
          />
        </div>

      </header>
    </div>
  );
}

export default App;
