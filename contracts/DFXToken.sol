pragma solidity 0.7.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./ERC20Permit.sol";
import "./Ownable.sol";

contract DFXToken is ERC20, ERC20Permit, Ownable {
    constructor(address owner) public ERC20("DFX Token", "DFX") ERC20Permit("DFX Token") Ownable(owner) {}

    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }
}