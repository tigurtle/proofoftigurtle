import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
import Web3 from 'web3';



const AccountDetails = ({ accountAddress, accountBalance }) => {
  const [value, setValue] = useState('');
  const [signature, setSignature] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const signMessage = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];
      const message = value; // The message you want to sign
      const signedMessage = await web3.eth.personal.sign(message, account, '');
      setSignature(signedMessage);
      return signedMessage;
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  const handleClick = async () => {
    if (value !== '') {
      const key = uuidv4();
      const data = {
        key: key,
        value: value,
        accountAddress: accountAddress
      };

      // Call the signTransaction function to generate the signature
      const signature = await signMessage(data);

      // Attach the signature to the payload
      data.signature = signature;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      // Send the data to the server and get the response
      const response = await fetch(url, requestOptions);
      const responseData = await response.text();
      alert(responseData);
    } else {
      console.error('Please enter a value');
    }
  };


  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">The Tigurtle Network DAPP</h1>
        <div class="card col-md-12" >
          <div class="card-body">

                      <hr className="my-4" />
                      <p>
                        Account Address: {accountAddress}
                      </p>
                      <hr className="my-4" />
                      <div>
                        <h1>Welcome to Tigurtle Bot Network!</h1>
                        <h2>Powered by TFNlab.com</h2>
                        <h3>Create Engaging Posts in 3 Easy Steps:</h3>
                        <ol>
                          <li>Gather your thoughts for an engaging post.</li>
                          <li>Provide concise AI instruction, like "Create a tweeter post about Tigurtle taking over the world of blockchain."</li>
                          <li>Click "Publish" and let AI handle the rest!</li>
                        </ol>
                        <p>Unleash the power of AI on our @Tigurtle social media accounts now!</p>
                      </div>
                      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter message here" style={{width: '100%'}} />

                      <br className="my-2" />
                      <br className="my-2" />
                      <button onClick={handleClick}>Publish</button>
                      <hr className="my-4" />

                                  <input
                                    type="text"
                                    value={signature}
                                    readOnly
                                    placeholder="Signature"
                                    style={{ width: '100%' }}
                                  />
                      <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
