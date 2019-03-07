pragma solidity ^0.5.0;


contract JobOrder {
  string public word;
  
  event Set(address sender, string newWord);

  constructor() public {
    word = "Hello World!!";
  }
  
  function get() public view returns(string memory){
    return word;
  }

  function set(string memory newWord) public {
    word = newWord;
    emit Set(msg.sender, newWord);
  }
}
