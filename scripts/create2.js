// https://hackernoon.com/using-ethereums-create2-nw2137q7

// DFX Token Bytecode - 0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b506040518060400160405280600981526020016822232c102a37b5b2b760b91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600981526020016822232c102a37b5b2b760b91b815250604051806040016040528060038152602001620888cb60eb1b8152508160039080519060200190620000cb92919062000225565b508051620000e190600490602084019062000225565b50506005805460ff1916601217905550815160208084019190912082519183019190912060c082905260e08190527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200013a620001b9565b60a0526200014a818484620001bd565b60805261010052506000935062000165925050620002219050565b600780546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620002c1565b4690565b6000838383620001cc620001b9565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026857805160ff191683800117855562000298565b8280016001018555821562000298579182015b82811115620002985782518255916020019190600101906200027b565b50620002a6929150620002aa565b5090565b5b80821115620002a65760008155600101620002ab565b60805160a05160c05160e05161010051610120516118ae6200030b60003980610a825250806112115250806112535250806112325250806111b85250806111e852506118ae6000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063715018a6116100b2578063a457c2d711610081578063d505accf11610066578063d505accf14610415578063dd62ed3e14610473578063f2fde38b146104ae57610136565b8063a457c2d7146103a3578063a9059cbb146103dc57610136565b8063715018a61461032f5780637ecebe00146103375780638da5cb5b1461036a57806395d89b411461039b57610136565b8063313ce5671161010957806339509351116100ee578063395093511461028857806340c10f19146102c157806370a08231146102fc57610136565b8063313ce567146102625780633644e5151461028057610136565b806306fdde031461013b578063095ea7b3146101b857806318160ddd1461020557806323b872dd1461021f575b600080fd5b6101436104e1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017d578181015183820152602001610165565b50505050905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f1600480360360408110156101ce57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610596565b604080519115158252519081900360200190f35b61020d6105b3565b60408051918252519081900360200190f35b6101f16004803603606081101561023557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356105b9565b61026a61065a565b6040805160ff9092168252519081900360200190f35b61020d610663565b6101f16004803603604081101561029e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610672565b6102fa600480360360408110156102d757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106cd565b005b61020d6004803603602081101561031257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661076c565b6102fa610794565b61020d6004803603602081101561034d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610894565b6103726108c8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101436108e4565b6101f1600480360360408110156103b957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610963565b6101f1600480360360408110156103f257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109d8565b6102fa600480360360e081101561042b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356109ec565b61020d6004803603604081101561048957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c25565b6102fa600480360360208110156104c457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c5d565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b505050505090505b90565b60006105aa6105a3610de8565b8484610dec565b50600192915050565b60025490565b60006105c6848484610f33565b610650846105d2610de8565b61064b856040518060600160405280602881526020016117e36028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061061d610de8565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190611103565b610dec565b5060019392505050565b60055460ff1690565b600061066d6111b4565b905090565b60006105aa61067f610de8565b8461064b8560016000610690610de8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549061127e565b6106d5610de8565b60075473ffffffffffffffffffffffffffffffffffffffff90811691161461075e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61076882826112f9565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61079c610de8565b60075473ffffffffffffffffffffffffffffffffffffffff90811691161461082557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60075460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600780547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604081206108c29061142a565b92915050565b60075473ffffffffffffffffffffffffffffffffffffffff1690565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058b5780601f106105605761010080835404028352916020019161058b565b60006105aa610970610de8565b8461064b85604051806060016040528060258152602001611854602591396001600061099a610de8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190611103565b60006105aa6109e5610de8565b8484610f33565b83421115610a5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff871660009081526006602052604081207f000000000000000000000000000000000000000000000000000000000000000090899089908990610ab19061142a565b89604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012090506000610b348261142e565b90506000610b4482878787611495565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610be057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8a166000908152600660205260409020610c0e9061168c565b610c198a8a8a610dec565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b610c65610de8565b60075473ffffffffffffffffffffffffffffffffffffffff908116911614610cee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117316026913960400191505060405180910390fd5b60075460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610e58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806118306024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ec4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117576022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061180b6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661100b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061170e6023913960400191505060405180910390fd5b611016838383611695565b611060816040518060600160405280602681526020016117796026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190611103565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220939093559084168152205461109c908261127e565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156111ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611171578181015183820152602001611159565b50505050905090810190601f16801561119e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60007f00000000000000000000000000000000000000000000000000000000000000006111df61169a565b141561120c57507f0000000000000000000000000000000000000000000000000000000000000000610593565b6112777f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061169e565b9050610593565b6000828201838110156112f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661137b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61138760008383611695565b600254611394908261127e565b60025573ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020546113c7908261127e565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b5490565b60006114386111b4565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611510576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061179f6022913960400191505060405180910390fd5b8360ff16601b148061152557508360ff16601c145b61157a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117c16022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156115d6573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661168357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546001019055565b505050565b4690565b60008383836116ab61169a565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050604051602081830303815290604052805190602001209050939250505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c756545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209d447b87aab2ad3790c60ff67da0922a30c4eeea252abd4b5920ba5d055a381f64736f6c63430007030033

const inputBytecode =
  "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b506040518060400160405280600981526020016822232c102a37b5b2b760b91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600981526020016822232c102a37b5b2b760b91b815250604051806040016040528060038152602001620888cb60eb1b8152508160039080519060200190620000cb92919062000225565b508051620000e190600490602084019062000225565b50506005805460ff1916601217905550815160208084019190912082519183019190912060c082905260e08190527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200013a620001b9565b60a0526200014a818484620001bd565b60805261010052506000935062000165925050620002219050565b600780546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620002c1565b4690565b6000838383620001cc620001b9565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026857805160ff191683800117855562000298565b8280016001018555821562000298579182015b82811115620002985782518255916020019190600101906200027b565b50620002a6929150620002aa565b5090565b5b80821115620002a65760008155600101620002ab565b60805160a05160c05160e05161010051610120516118ae6200030b60003980610a825250806112115250806112535250806112325250806111b85250806111e852506118ae6000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063715018a6116100b2578063a457c2d711610081578063d505accf11610066578063d505accf14610415578063dd62ed3e14610473578063f2fde38b146104ae57610136565b8063a457c2d7146103a3578063a9059cbb146103dc57610136565b8063715018a61461032f5780637ecebe00146103375780638da5cb5b1461036a57806395d89b411461039b57610136565b8063313ce5671161010957806339509351116100ee578063395093511461028857806340c10f19146102c157806370a08231146102fc57610136565b8063313ce567146102625780633644e5151461028057610136565b806306fdde031461013b578063095ea7b3146101b857806318160ddd1461020557806323b872dd1461021f575b600080fd5b6101436104e1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017d578181015183820152602001610165565b50505050905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f1600480360360408110156101ce57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610596565b604080519115158252519081900360200190f35b61020d6105b3565b60408051918252519081900360200190f35b6101f16004803603606081101561023557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356105b9565b61026a61065a565b6040805160ff9092168252519081900360200190f35b61020d610663565b6101f16004803603604081101561029e57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610672565b6102fa600480360360408110156102d757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106cd565b005b61020d6004803603602081101561031257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661076c565b6102fa610794565b61020d6004803603602081101561034d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610894565b6103726108c8565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101436108e4565b6101f1600480360360408110156103b957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610963565b6101f1600480360360408110156103f257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356109d8565b6102fa600480360360e081101561042b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356109ec565b61020d6004803603604081101561048957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610c25565b6102fa600480360360208110156104c457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c5d565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058b5780601f106105605761010080835404028352916020019161058b565b820191906000526020600020905b81548152906001019060200180831161056e57829003601f168201915b505050505090505b90565b60006105aa6105a3610de8565b8484610dec565b50600192915050565b60025490565b60006105c6848484610f33565b610650846105d2610de8565b61064b856040518060600160405280602881526020016117e36028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061061d610de8565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190611103565b610dec565b5060019392505050565b60055460ff1690565b600061066d6111b4565b905090565b60006105aa61067f610de8565b8461064b8560016000610690610de8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c16815292529020549061127e565b6106d5610de8565b60075473ffffffffffffffffffffffffffffffffffffffff90811691161461075e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61076882826112f9565b5050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b61079c610de8565b60075473ffffffffffffffffffffffffffffffffffffffff90811691161461082557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60075460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600780547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006602052604081206108c29061142a565b92915050565b60075473ffffffffffffffffffffffffffffffffffffffff1690565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561058b5780601f106105605761010080835404028352916020019161058b565b60006105aa610970610de8565b8461064b85604051806060016040528060258152602001611854602591396001600061099a610de8565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190611103565b60006105aa6109e5610de8565b8484610f33565b83421115610a5b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff871660009081526006602052604081207f000000000000000000000000000000000000000000000000000000000000000090899089908990610ab19061142a565b89604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012090506000610b348261142e565b90506000610b4482878787611495565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610be057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8a166000908152600660205260409020610c0e9061168c565b610c198a8a8a610dec565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b610c65610de8565b60075473ffffffffffffffffffffffffffffffffffffffff908116911614610cee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806117316026913960400191505060405180910390fd5b60075460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff8316610e58576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806118306024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ec4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117576022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061180b6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661100b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061170e6023913960400191505060405180910390fd5b611016838383611695565b611060816040518060600160405280602681526020016117796026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190611103565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220939093559084168152205461109c908261127e565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156111ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611171578181015183820152602001611159565b50505050905090810190601f16801561119e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60007f00000000000000000000000000000000000000000000000000000000000000006111df61169a565b141561120c57507f0000000000000000000000000000000000000000000000000000000000000000610593565b6112777f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000061169e565b9050610593565b6000828201838110156112f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff821661137b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61138760008383611695565b600254611394908261127e565b60025573ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020546113c7908261127e565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b5490565b60006114386111b4565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611510576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061179f6022913960400191505060405180910390fd5b8360ff16601b148061152557508360ff16601c145b61157a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806117c16022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156115d6573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811661168357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546001019055565b505050565b4690565b60008383836116ab61169a565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050604051602081830303815290604052805190602001209050939250505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c756545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209d447b87aab2ad3790c60ff67da0922a30c4eeea252abd4b5920ba5d055a381f64736f6c63430007030033";

const ethers = require("ethers");

// 0xff ++ deployingAddress is fixed:
const string1 = "0xffcc6b626faba67507d2328364085e9c614879fbd5";

// Hash of the bytecode is fixed. Calculated with eth.keccak256():
const string2 = ethers.utils.keccak256(inputBytecode).substr(2);

// In each loop, i is the value of the salt we are checking
for (let i = 0; i < 72057594037927936; i++) {
  // 1. Convert i to hex, and it pad to 32 bytes:
  const saltToBytes = i.toString(16).padStart(64, "0");

  // 2. Concatenate this between the other 2 strings
  const concatString = string1.concat(saltToBytes).concat(string2);

  // 3. Hash the resulting string
  const hashed = ethers.utils.keccak256(concatString);

  // 4. Remove leading 0x and 12 bytes
  // 5. Check if the result contains badc0de
  if (("0x" + hashed.toLowerCase().substr(26)).includes("0x8888888")) {
    console.log(saltToBytes, "0x" + hashed.substr(26), `0x${hashed}`);
    break;
  }
}


// i = 000000000000000000000000000000000000000000000000000000001face2d4