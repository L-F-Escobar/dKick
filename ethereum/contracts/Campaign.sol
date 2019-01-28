pragma solidity ^0.4.24;


contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    string public campaignName;
    string public campaignDescription;

    address public manager;
    uint public minimum_contribution;
    mapping(address => bool) public approvers; 
    Request[] public requests;
    uint public approversCount;

    modifier _minimumContribution() {
        require(msg.value >= minimum_contribution, "Minimum contribution not met");
        _;
    }

    modifier _restricted() {
        require(msg.sender == manager, "Only contract manager allowed.");
        _;
    }

    constructor(uint minimum, address creator, string name, string description) public {
        // require(minimum >= 0, "Minimum must be greater than 0.");
        manager = creator;
        minimum_contribution = minimum;
        campaignName = name;
        campaignDescription = description;
    }

    function contribute() public payable _minimumContribution(){
        approvers[msg.sender] = true;
        approversCount++;
    }


    function createRequest(string description, uint value, address recipient) public _restricted() {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage localRequest = requests[index];

        require(approvers[msg.sender] == true, "Contribution is required to vote on this project.");
        require(localRequest.approvals[msg.sender] == false, "You have voted already.");

        localRequest.approvals[msg.sender] = true;
        localRequest.approvalCount++;
    }

    function finalizeRequest(uint index) public _restricted() {
        Request storage localRequest = requests[index];

        require(this.balance >= localRequest.value, "Contract total is too little.");
        require(!localRequest.complete, "This request has already been finalized.");
        require(localRequest.approvalCount > (approversCount/2), "This request has already been finalized.");

        localRequest.recipient.transfer(localRequest.value);

        localRequest.complete = true;
    }

    function getSummary() public view returns(uint, uint, uint, uint, address) {
        return (
            minimum_contribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }

}