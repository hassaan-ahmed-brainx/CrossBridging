// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

import "./TokenBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenBsc is TokenBase, Ownable {
    constructor() TokenBase("BSC Token", "BTK") {}
}
