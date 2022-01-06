// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const UpgradableBox = await ethers.getContractFactory('UpgradableBox');
  console.log('Deploying Box...');
  const box = await upgrades.deployProxy(UpgradableBox, [42], { initializer: 'store' });
  await box.deployed();
  console.log('Box deployed to:', box.address);
}

main();
