# cryptoBuddy
Sperax Internship Full Stack Project

##Objective:
Develop a single-page application (SPA) named, where users can:
1. Add tokens to their watch list.
2. View their current balance for each token.
3. View the historical balance of each token based on date.
4. Check their token allowance.
5. Perform operations on the token, ex: transfer to another address, approve token.
Requirements:
1. Wallet Connection:
○ Users should be able to connect their own Metamask or any other wallet.
○ Alternatively, users should be able to provide a wallet address as an input.
2. Watch List:
○ Users can add various tokens to their watch list.
○ Display the current balance of each token in the watch list.
3. Historical Data:
○ Fetch and display the historical balance of each token.
○ Provide a date picker for users to select the date range.
4. Allowance:
○ Users should be able to check their token allowance for different smart contracts.
5. Token Transfer:
○ Implement a functionality that allows users to transfer tokens to another address.
○ Include form fields for the recipient address and amount to be transferred.
6. Visual Representations:
○ Use tables, charts, and graphs to represent token balances, historical data, and
allowances.
○ Be as creative as possible with the visual representation of data.

The project is developed using Node.js, React, MongoDB, and Express, Ether.js, etc.

To start the project, clone the repository and run the commands in the client and  server directory, for frontend and backend respectively.
```bash
git clone https://github.com/gwydion67/cryptobuddy.git
```

The frontend is hosted on localhost:5173 and backed on localhost:3000.

The database used is mongodb, you will need to put the mongodb url in the .env file, use the .env.example as a template.

Thank you.
