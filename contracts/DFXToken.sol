pragma solidity 0.7.3;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DFXToken is ERC20("DFX Token", "DFX"), Ownable {
    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }
}