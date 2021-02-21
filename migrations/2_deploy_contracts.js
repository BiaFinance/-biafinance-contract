const BeerToken = artifacts.require("BeerToken");
const BeerLoverToken = artifacts.require("BeerLoverToken");
const HOPSBar = artifacts.require("HOPSBar");
const MasterChef = artifacts.require("MasterChef");
const SmartChef = artifacts.require("SmartChef");
const Timelock = artifacts.require("Timelock");
let admin = "0x0Fe18f369c7F34208922cAEBbd5d21E131E44692"
let startBlock = 4684770
let BeerLoverStartBlock = 4742360
let BeerLoverEndBlock = BeerLoverStartBlock + 432000 // for 15 days
let useBeerLover = true
let BeerLoverRewardPerBlock = '25000000000000000' // 0.025 BEER per block


module.exports = async function (deployer) {
  // 1st deployment
  const Time = await deployer.deploy(Timelock, admin, 43200)
  const Beer = await deployer.deploy(BeerToken)
  const HOPS = await deployer.deploy(HOPSBar, Beer.address)
  const Master = await deployer.deploy(MasterChef, Beer.address, HOPS.address, admin, "500000000000000000", startBlock)
  if (useBeerLover) {
    const BeerLover = await deployer.deploy(BeerLoverToken)
    const SmartBeerLover = await deployer.deploy(SmartChef, BeerLover.address, Beer.address, BeerLoverRewardPerBlock, BeerLoverStartBlock, BeerLoverEndBlock)
  }
  HOPS.transferOwnership(Master.address)
}