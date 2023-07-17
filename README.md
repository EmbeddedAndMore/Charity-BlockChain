# CharityFund

## Table of Contents

- [CharityFund](#charityfund)
  - [Table of Contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
    - [Install dependencies](#install-dependencies)
    - [Run project](#run-project)
  - [Keys features](#keys-features)

## Tech Stack

- Thirdweb React this project Vite.js as a frontend framework.
- Tailwind CSS with Vite.js for decorating.
- Hardhat to deploy smart contract.

### Run project

1. go to https://metamask.io/
2. download and install chrom extention
3. Click on *I agree ...* and then create new wallet.
4. Click on *I agree*
5. Create password and and confirmation and click on **Create a new wallet**
6. Watch the video, and then click **Secure my wallet**.
7. Click **Reveal Secret Recovery Phrase.**
8. Save 12 words somewhere
9. fill security question
10. Now the wallet is created
11. Open the  MetaMask page.
12. Click on **Ethereum Mainnet**
![networks](imgs/network.png)
13. Enable **Show test networks**
14. Click on **Sepolia**
15. Copy the wallet key and go to https://sepoliafaucet.com/
![networks](imgs/copy-wallet-address.png)
16. Log in, enter your key and click **Send Me ETH**
17. After a few seconds a few ETH should be transfered to your account.
18. In MetaMask page, click on **Account 1** then click on 3 dots on right side of the **Accound 1** and click **Account Details**
![networks](imgs/account-for-private-key.png)
![networks](imgs/account-details.png)
19. click **Show Private Key**
20. Enter password and copy the private key
21. inside **charityfund** folder create a **.env** file and fill it with the following format:
```
PRIVATE_KEY={COPIED_PRIVATE_KEY}
```
22. Inside **charityfund** directory 
```
npm install
npm run deploy
```
23. In this step after successful deploy you have to see a link in the command line
24. Open the link  and go to the ThirdWeb website
25. Click **connect wallet** (if not connected before)
26. Click **Deploy Now** keep eye on notification in MetaMask's extension (you probably need to click 2 times on **Config**), this will take a several seconds.
27. in the ThirdWeb website in the **contracts** menu you should be able to see you contract (CharityFund). copy the contract address.
28. go to client folder in the `src/context/index.jsx` in line 15 replace your contract address with the existing one.
29. in clinet folder run
```
npm install
npm run dev
```
30. open the browser using the given link in the terminal and now try to **connect** and create charity campaign or donate exisiting ones.


## Keys features

1. **publishCampaign:** Users can create your own campaign
2. **getCampaigns:** see all the campaign published on the website
3. **getUserCampaigns:** Get your own campaign
4. **donate:** Donate campaign
5. **getDonations:** Explore donators on each campaign
6. **refundDonations:** Refund donation if votes are enough
