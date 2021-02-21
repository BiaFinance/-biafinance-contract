🍺
# BiaFinance

https://Bia.Finance - The best yield farming on BSC for more then beer money...

## Contracts

- BEER Token - https://bscscan.com/address/0x1f0E19d0Da1DD6B5415196d8E9B765CA8Aefdd58
- HOPSBar Token - https://bscscan.com/address/0x02A80F812050aFd4FEa654d061cAfc26767AB2Cd
- MasterChef - https://bscscan.com/address/0x82D17267760c4fB818D77b38B70D91f245Ea1e56
- SmartPool - https://bscscan.com/address/0x658307A1B3f13e82c1c84888C557f384c1D4dfcf
- BeerLover Token - https://bscscan.com/address/0x3DB50bFDb911591Bc5ba9088dd00505E9B0437aB
- Timelock - https://bscscan.com/address/0x2a40a7929df5e9Fd1aA40e0d42726e7eBd367AF7
- Migrations - https://bscscan.com/address/0x458f353278aF9548Bc8c8D68f47816D7B348053c
### (All contracts have been verified on https://bscscan.com)



Starting migrations...
======================
> Network name:    'BSC'
> Network id:      56
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x3c727da2d0b477ca5c2a030701c98749304ee9627e1e0f97c28d51dba9569a9a
   > Blocks: 1            Seconds: 4
   > contract address:    0x458f353278aF9548Bc8c8D68f47816D7B348053c
   > block number:        5064880
   > block timestamp:     1613889061
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.9952661
   > gas used:            159195 (0x26ddb)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0031839 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0031839 ETH


2_deploy_contracts.js
=====================

   Deploying 'Timelock'
   --------------------
   > transaction hash:    0x9d408f6c6fdfcfc6e6f46416448491e2a6cb9405dc900ae65cb33f9460407706
   > Blocks: 1            Seconds: 4
   > contract address:    0x2a40a7929df5e9Fd1aA40e0d42726e7eBd367AF7
   > block number:        5064887
   > block timestamp:     1613889082
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.9579765
   > gas used:            1822142 (0x1bcdbe)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03644284 ETH


   Deploying 'BeerToken'
   ---------------------
   > transaction hash:    0x9caa896844669fbf0100afb9ddbdd2a24e679ac913b45edcbb935810fb7ed470
   > Blocks: 1            Seconds: 4
   > contract address:    0x1f0E19d0Da1DD6B5415196d8E9B765CA8Aefdd58
   > block number:        5064890
   > block timestamp:     1613889091
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.89917254
   > gas used:            2940198 (0x2cdd26)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05880396 ETH


   Deploying 'HOPSBar'
   -------------------
   > transaction hash:    0xe23e6942a08b6828717d0509f178604431f9505e552d88e924d88e88a6b1be3a
   > Blocks: 3            Seconds: 9
   > contract address:    0x02A80F812050aFd4FEa654d061cAfc26767AB2Cd
   > block number:        5064894
   > block timestamp:     1613889103
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.83464944
   > gas used:            3226155 (0x313a2b)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0645231 ETH


   Deploying 'MasterChef'
   ----------------------
   > transaction hash:    0x0edab9674de9a1b7954e79045cf229b7adc380bec27b785e090bca08a320da89
   > Blocks: 3            Seconds: 9
   > contract address:    0x82D17267760c4fB818D77b38B70D91f245Ea1e56
   > block number:        5064900
   > block timestamp:     1613889121
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.76917646
   > gas used:            3273649 (0x31f3b1)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06547298 ETH


   Deploying 'BeerLoverToken'
   --------------------------
   > transaction hash:    0xd7cdcd816835bc77735b8316ae3bcee642d399da52bfee42da10c8220cd48c11
   > Blocks: 3            Seconds: 9
   > contract address:    0x3DB50bFDb911591Bc5ba9088dd00505E9B0437aB
   > block number:        5064908
   > block timestamp:     1613889145
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.7103725
   > gas used:            2940198 (0x2cdd26)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.05880396 ETH


   Deploying 'SmartChef'
   ---------------------
   > transaction hash:    0x910c61e7746c05ceaab1de73454765cb7eb79c633c3ed818075c13a780d29603
   > Blocks: 3            Seconds: 8
   > contract address:    0x658307A1B3f13e82c1c84888C557f384c1D4dfcf
   > block number:        5064913
   > block timestamp:     1613889160
   > account:             0x90666AA2BD74514b9CA4e0F952fcC64bC4F27dA5
   > balance:             0.66996206
   > gas used:            2020522 (0x1ed4aa)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.04041044 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.32445728 ETH


Summary
=======
> Total deployments:   7
> Final cost:          0.32764118 ETH