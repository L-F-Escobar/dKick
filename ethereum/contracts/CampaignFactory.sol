pragma solidity ^0.4.24;

import { Campaign } from "./Campaign.sol";

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string name, string description) public {
        address newCampaign = new Campaign(minimum, msg.sender, name, description);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[] memory) {
        return deployedCampaigns;
    }
}