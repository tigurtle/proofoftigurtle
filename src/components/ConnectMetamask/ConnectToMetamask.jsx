import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');

  const url = 'https://net.bnetly.com/post.jsp'; // replace with your target URL

  const handleClick = () => {
    if (value !== '') {
      const key = uuidv4(); // Generate a UUID key using the v4 function
      const data = { key: key, value: value }; // Include the key and value in the payload
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Error:', error));
    } else {
      console.error('Please enter a value');
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Tigurtle.com
        </h1>
        <hr className="my-4" />
        <div>
          <h1>
          The Next Generation Blockchain, Infused with the Spirit of Tiger and Turtle, Powered by AI Code Generation!
          </h1>
          <p>
            Introducing the future of blockchain technology - Tigurtle! Combining the powerful forces of Artificial Intelligence (AI) with the remarkable attributes of Tiger and Turtle, Tigurtle is set to revolutionize the way we perceive and interact with blockchain systems.
          </p>
          <h2>What is Tigurtle?</h2>
          <p>
            Tigurtle is a groundbreaking advancement in the world of blockchain, representing the convergence of two cutting-edge technologies: AI and the animal-inspired concepts of Tiger and Turtle. This unique blend creates a dynamic and adaptive blockchain ecosystem that surpasses the limitations of traditional blockchains.
          </p>
          <h3>1. Artificial Intelligence at its Core</h3>
          <p>
            At the heart of Tigurtle lies the exceptional prowess of Artificial Intelligence. This advanced AI system is designed to make autonomous decisions, learn from vast data streams, and optimize the entire blockchain network's performance. By incorporating AI into Tigurtle, we unlock the potential for self-regulation, continuous improvement, and unparalleled efficiency.
          </p>
          <h3>2. Inspired by Tiger - Strength and Security</h3>
          <p>
            Just like the mighty Tiger, Tigurtle brings strength and security to the blockchain ecosystem. Tigers are known for their predatory instincts, protecting their territory fiercely. Similarly, Tigurtle safeguards the blockchain network against potential threats, attacks, and unauthorized access. The combination of AI and Tiger-inspired attributes fortifies Tigurtle, making it a robust and secure platform.
          </p>
          <h3>3. Inspired by Turtle - Stability and Consistency</h3>
          <p>
            Turtles are renowned for their slow and steady approach, providing a sense of stability and consistency in their actions. In the same vein, Tigurtle ensures a stable blockchain environment, preventing sudden fluctuations and maintaining a reliable infrastructure. The AI-powered system continually monitors and balances the network, fostering a harmonious and predictable blockchain experience.
          </p>
          <h2>The Key Features of Tigurtle:</h2>
          <ul>
            <li>Decentralization and Transparency: Tigurtle retains the fundamental principles of blockchain, offering a decentralized and transparent ledger where every transaction is visible and traceable.</li>
            <li>Enhanced Scalability: With AI optimizations, Tigurtle can adapt to varying workloads and scale efficiently, ensuring seamless handling of large-scale transactions and smart contracts.</li>
            <li>Efficient Consensus Mechanism: Tigurtle employs an advanced consensus mechanism, enabled by AI decision-making, to achieve faster and more accurate consensus on the network.</li>
            <li>Adaptive Security Measures: The Tiger-inspired security features combined with AI-powered threat detection fortify Tigurtle against potential cyber-attacks and vulnerabilities.</li>
            <li>Smart Contract Automation: Tigurtle's AI integration allows for the automation and self-execution of smart contracts, streamlining processes and reducing the need for human intervention.</li>
          </ul>
          <h2>Embrace the Future with Tigurtle:</h2>
          <p>
            Tigurtle represents a remarkable leap forward in blockchain technology, driven by the synergy of Artificial Intelligence, the strength of the Tiger, and the consistency of the Turtle. As this next-generation blockchain matures, it will unlock a myriad of possibilities across various industries, paving the way for a smarter, more secure, and interconnected world. Embrace the future with Tigurtle and be a part of the revolutionary transformation in blockchain technology!
          </p>
        </div>

        <hr className="my-4" />
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x5dc653d6d0f10cf748f498015a8e11710dcb7db0" >
          <img src="images/logo.png" width="100%" alt="Bnetly" />
        </a>
        <hr className="my-4" />
        <button
          onClick={connectToMetamask}
          className="btn btn-primary d-flex align-items-center"
          style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
        >
          Connect Wallet
        </button>
        <hr className="my-4" />

        <a href="https://twitter.com/tigurtle" >
          Twitter.com/tigurtle
        </a>
        <hr className="my-4" />

        <a href="https://github.com/tigurtle" >
          Github.com/tigurtle
        </a>
        <hr className="my-4" />
      </div>
      <hr className="my-4" />

      <div className="container">
        <hr className="my-4" />
        Tigurtle.com &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
