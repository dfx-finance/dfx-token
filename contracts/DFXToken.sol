pragma solidity 0.7.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ERC20Permit.sol";

contract DFXToken is ERC20, ERC20Permit, Ownable {
    constructor() public ERC20("DFX Token", "DFX") ERC20Permit("DFX Token") {}

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }
}