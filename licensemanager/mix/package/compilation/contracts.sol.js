/*
Generated by Mix
Mi. Juli 13 18:49:48 2016 GMT+0200
*/

var LicenseIssuer = {
	"abi": "[{\"constant\":true,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"}],\"name\":\"checkLicense\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licenseManager\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licenseCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licencePrice\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getIssuable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"stopIssuing\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licenseUrl\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newPaymentAddress\",\"type\":\"address\"}],\"name\":\"changePaymentAddress\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"factHash\",\"type\":\"bytes32\"},{\"name\":\"v\",\"type\":\"uint8\"},{\"name\":\"sig_r\",\"type\":\"bytes32\"},{\"name\":\"sig_s\",\"type\":\"bytes32\"}],\"name\":\"checkLicense\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licenseTextHash\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licenseLifetime\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"licenseOwners\",\"outputs\":[{\"name\":\"licenseOwnerAdress\",\"type\":\"address\"},{\"name\":\"licenseOwnerName\",\"type\":\"string\"},{\"name\":\"issuedDate\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"licensedItemName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"issuedLicenses\",\"outputs\":[{\"name\":\"licenseOwnerAdress\",\"type\":\"address\"},{\"name\":\"licenseOwnerName\",\"type\":\"string\"},{\"name\":\"issuedDate\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"issuable\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_address\",\"type\":\"address\"},{\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"buyLicense\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[{\"name\":\"itemName\",\"type\":\"string\"},{\"name\":\"textHash\",\"type\":\"string\"},{\"name\":\"url\",\"type\":\"string\"},{\"name\":\"lifeTime\",\"type\":\"uint256\"},{\"name\":\"price\",\"type\":\"uint256\"},{\"name\":\"_pa\",\"type\":\"address\"}],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"ownerAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"succesful\",\"type\":\"bool\"}],\"name\":\"LicenseIssued\",\"type\":\"event\"}]",
	"codeHex": "0x6060604052604051611526380380611526833981016040528080518201919060200180518201919060200180518201919060200180519060200190919080519060200190919080519060200190919050505b8560006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a057805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518260005055916020019190600101906100b2565b5b5090506100fc91906100de565b808211156100f857600081815060009055506001016100de565b5090565b50508460016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014d57805160ff191683800117855561017e565b8280016001018555821561017e579182015b8281111561017d57825182600050559160200191906001019061015f565b5b5090506101a9919061018b565b808211156101a5576000818150600090555060010161018b565b5090565b50508360026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101fa57805160ff191683800117855561022b565b8280016001018555821561022b579182015b8281111561022a57825182600050559160200191906001019061020c565b5b5090506102569190610238565b808211156102525760008181506000905550600101610238565b5090565b505066038d7ea4c6800082026003600050819055508260046000508190555080600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506001600660006101000a81548160ff0219169083021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508560006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061033357805160ff1916838001178555610364565b82800160010185558215610364579182015b82811115610363578251826000505591602001919060010190610345565b5b50905061038f9190610371565b8082111561038b5760008181506000905550600101610371565b5090565b50508460016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103e057805160ff1916838001178555610411565b82800160010185558215610411579182015b828111156104105782518260005055916020019190600101906103f2565b5b50905061043c919061041e565b80821115610438576000818150600090555060010161041e565b5090565b50508360026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061048d57805160ff19168380011785556104be565b828001600101855582156104be579182015b828111156104bd57825182600050559160200191906001019061049f565b5b5090506104e991906104cb565b808211156104e557600081815060009055506001016104cb565b5090565b505066038d7ea4c6800082026003600050819055508260046000508190555080600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506001600660006101000a81548160ff0219169083021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b505050505050610f9a8061058c6000396000f3606060405236156100e2576000357c01000000000000000000000000000000000000000000000000000000009004806303a7c9e4146100e45780630ad51144146101125780632fbccc271461014b578063317b17bd1461016e578063375dce691461019157806344d7e4ed146101b657806352aa7efe146101c55780637124d613146102405780637216b95c146102585780638dee8950146102a1578063968c4c561461031c578063abd193891461033f578063db05145d14610411578063e8eb8f361461048c578063eba0184f1461055e578063fefb049514610583576100e2565b005b6100fa60048080359060200190919050506105e2565b60405180821515815260200191505060405180910390f35b61011f600480505061066e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101586004805050610694565b6040518082815260200191505060405180910390f35b61017b600480505061069d565b6040518082815260200191505060405180910390f35b61019e60048050506106a6565b60405180821515815260200191505060405180910390f35b6101c360048050506106c2565b005b6101d2600480505061073a565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025660048080359060200190919050506107db565b005b6102896004808035906020019091908035906020019091908035906020019091908035906020019091905050610866565b60405180821515815260200191505060405180910390f35b6102ae6004805050610954565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561030e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61032960048050506109f5565b6040518082815260200191505060405180910390f35b61035560048080359060200190919050506109fe565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104005780601f106103d557610100808354040283529160200191610400565b820191906000526020600020905b8154815290600101906020018083116103e357829003601f168201915b505094505050505060405180910390f35b61041e6004805050610a50565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561047e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104a26004808035906020019091905050610af1565b604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505094505050505060405180910390f35b61056b6004805050610b43565b60405180821515815260200191505060405180910390f35b6105e06004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610b56565b005b60006000600960005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005090506000816002016000505414156106305760009150610668565b60016004600050541080610651575080600201600050544260046000505401105b1561065f5760019150610668565b60009150610668565b50919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056000505481565b60036000505481565b6000600660009054906101000a900460ff1690506106bf565b90565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561071e57610002565b6000600660006101000a81548160ff021916908302179055505b565b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107d35780601f106107a8576101008083540402835291602001916107d3565b820191906000526020600020905b8154815290600101906020018083116107b657829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561083757610002565b80600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b60006000600060018787878760405180856000191681526020018460ff16815260200183600019168152602001826000191681526020019450505050506020604051808303816000866161da5a03f115610002575050604051805190602001509150600960005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000509050600081600201600050541415610912576000925061094a565b60016004600050541080610933575080600201600050544260046000505401105b15610941576001925061094a565b6000925061094a565b5050949350505050565b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ed5780601f106109c2576101008083540402835291602001916109ed565b820191906000526020600020905b8154815290600101906020018083116109d057829003601f168201915b505050505081565b60046000505481565b60096000506020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101600050908060020160005054905083565b60006000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae95780601f10610abe57610100808354040283529160200191610ae9565b820191906000526020600020905b815481529060010190602001808311610acc57829003601f168201915b505050505081565b60086000506020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101600050908060020160005054905083565b600660009054906101000a900460ff1681565b6000600060036000505434141580610b7b5750600660009054906101000a900460ff16155b15610b8557610002565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610bc05733935083505b600960005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050549150600082141515610c0757610002565b826008600050600060056000505481526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c7557805160ff1916838001178555610ca6565b82800160010185558215610ca6579182015b82811115610ca5578251826000505591602001919060010190610c87565b5b509050610cd19190610cb3565b80821115610ccd5760008181506000905550600101610cb3565b5090565b50504260086000506000600560005054815260200190815260200160002060005060020160005081905550600860005060006005600050548152602001908152602001600020600050600960005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060018201600050816001016000509080546001816001161561010002031660029004828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610df55780548555610e32565b82800160010185558215610e3257600052602060002091601f016020900482015b82811115610e31578254825591600101919060010190610e16565b5b509050610e5d9190610e3f565b80821115610e595760008181506000905550600101610e3f565b5090565b5050600282016000505481600201600050559050506005600081815054809291906001019190505550600660019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600034604051809050600060405180830381858888f1935050505090507f502f71372a7be8bec66c9bf5962152ee73a8386c5ae4be3005029fb0bb84d620848483604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018060200183151581526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610f845780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b5050505056",
	"name": "LicenseIssuer"
}

var LicenseManager = {
	"abi": "[{\"constant\":true,\"inputs\":[],\"name\":\"issuerName\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"licenseId\",\"type\":\"uint256\"}],\"name\":\"stopIssuing\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"contracts\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newPaymentAddress\",\"type\":\"address\"},{\"name\":\"licenseId\",\"type\":\"uint256\"}],\"name\":\"changePaymentAddress\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"itemName\",\"type\":\"string\"},{\"name\":\"textHash\",\"type\":\"string\"},{\"name\":\"url\",\"type\":\"string\"},{\"name\":\"lifeTime\",\"type\":\"uint256\"},{\"name\":\"price\",\"type\":\"uint256\"}],\"name\":\"createIssuerContract\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newPaymentAdress\",\"type\":\"address\"}],\"name\":\"changePaymentAddress\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"inputs\":[{\"name\":\"_paymentAddress\",\"type\":\"address\"},{\"name\":\"_name\",\"type\":\"string\"}],\"type\":\"constructor\"}]",
	"codeHex": "0x60606040526040516120e73803806120e7833981016040528080519060200190919080518201919060200150505b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508060026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a757805160ff19168380011785556100d8565b828001600101855582156100d8579182015b828111156100d75782518260005055916020019190600101906100b9565b5b50905061010391906100e5565b808211156100ff57600081815060009055506001016100e5565b5090565b505081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555033600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508060026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101aa57805160ff19168380011785556101db565b828001600101855582156101db579182015b828111156101da5782518260005055916020019190600101906101bc565b5b50905061020691906101e8565b8082111561020257600081815060009055506001016101e8565b5090565b505081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5050611ea3806102446000396000f36060604052361561008a576000357c0100000000000000000000000000000000000000000000000000000000900480632e9868f81461008c57806340426fb014610107578063474da79a1461011f5780635e601fed1461016157806367eb9bab146101825780637124d613146102785780638736381a146102905780638da5cb5b146102b35761008a565b005b61009960048050506102ec565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156100f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61011d600480803590602001909190505061038d565b005b6101356004808035906020019091905050610484565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61018060048080359060200190919080359060200190919050506104bc565b005b6102766004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190803590602001909190803590602001909190505061067e565b005b61028e60048080359060200190919050506108c3565b005b61029d600480505061094e565b6040518082815260200191505060405180910390f35b6102c06004805050610957565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103855780601f1061035a57610100808354040283529160200191610385565b820191906000526020600020905b81548152906001019060200180831161036857829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156103e957610002565b6004600050600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166344d7e4ed604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506000604051808303816000876161da5a03f115610002575050505b50565b600460005060205280600052604060002060009150909054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561051857610002565b6004600050600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663375dce69604051817c01000000000000000000000000000000000000000000000000000000000281526004018090506020604051808303816000876161da5a03f115610002575050506040518051906020015015156105c457610002565b6004600050600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637124d61383604051827c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303816000876161da5a03f115610002575050505b5050565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156106da57610002565b8484848484600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516115268061097d833901808060200180602001806020018781526020018681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184810384528a8181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561079c5780820380516001836020036101000a031916815260200191505b508481038352898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156107f55780820380516001836020036101000a031916815260200191505b508481038252888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561084e5780820380516001836020036101000a031916815260200191505b509950505050505050505050604051809103906000f060046000506000600360005054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060036000818150548092919060010191905055505b5050505050565b3373ffffffffffffffffffffffffffffffffffffffff16600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561091f57610002565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b60036000505481565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681566060604052604051611526380380611526833981016040528080518201919060200180518201919060200180518201919060200180519060200190919080519060200190919080519060200190919050505b8560006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a057805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518260005055916020019190600101906100b2565b5b5090506100fc91906100de565b808211156100f857600081815060009055506001016100de565b5090565b50508460016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061014d57805160ff191683800117855561017e565b8280016001018555821561017e579182015b8281111561017d57825182600050559160200191906001019061015f565b5b5090506101a9919061018b565b808211156101a5576000818150600090555060010161018b565b5090565b50508360026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101fa57805160ff191683800117855561022b565b8280016001018555821561022b579182015b8281111561022a57825182600050559160200191906001019061020c565b5b5090506102569190610238565b808211156102525760008181506000905550600101610238565b5090565b505066038d7ea4c6800082026003600050819055508260046000508190555080600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506001600660006101000a81548160ff0219169083021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055508560006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061033357805160ff1916838001178555610364565b82800160010185558215610364579182015b82811115610363578251826000505591602001919060010190610345565b5b50905061038f9190610371565b8082111561038b5760008181506000905550600101610371565b5090565b50508460016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103e057805160ff1916838001178555610411565b82800160010185558215610411579182015b828111156104105782518260005055916020019190600101906103f2565b5b50905061043c919061041e565b80821115610438576000818150600090555060010161041e565b5090565b50508360026000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061048d57805160ff19168380011785556104be565b828001600101855582156104be579182015b828111156104bd57825182600050559160200191906001019061049f565b5b5090506104e991906104cb565b808211156104e557600081815060009055506001016104cb565b5090565b505066038d7ea4c6800082026003600050819055508260046000508190555080600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506001600660006101000a81548160ff0219169083021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b505050505050610f9a8061058c6000396000f3606060405236156100e2576000357c01000000000000000000000000000000000000000000000000000000009004806303a7c9e4146100e45780630ad51144146101125780632fbccc271461014b578063317b17bd1461016e578063375dce691461019157806344d7e4ed146101b657806352aa7efe146101c55780637124d613146102405780637216b95c146102585780638dee8950146102a1578063968c4c561461031c578063abd193891461033f578063db05145d14610411578063e8eb8f361461048c578063eba0184f1461055e578063fefb049514610583576100e2565b005b6100fa60048080359060200190919050506105e2565b60405180821515815260200191505060405180910390f35b61011f600480505061066e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101586004805050610694565b6040518082815260200191505060405180910390f35b61017b600480505061069d565b6040518082815260200191505060405180910390f35b61019e60048050506106a6565b60405180821515815260200191505060405180910390f35b6101c360048050506106c2565b005b6101d2600480505061073a565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025660048080359060200190919050506107db565b005b6102896004808035906020019091908035906020019091908035906020019091908035906020019091905050610866565b60405180821515815260200191505060405180910390f35b6102ae6004805050610954565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561030e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61032960048050506109f5565b6040518082815260200191505060405180910390f35b61035560048080359060200190919050506109fe565b604051808473ffffffffffffffffffffffffffffffffffffffff168152602001806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156104005780601f106103d557610100808354040283529160200191610400565b820191906000526020600020905b8154815290600101906020018083116103e357829003601f168201915b505094505050505060405180910390f35b61041e6004805050610a50565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561047e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104a26004808035906020019091905050610af1565b604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018060200183815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561054d5780601f106105225761010080835404028352916020019161054d565b820191906000526020600020905b81548152906001019060200180831161053057829003601f168201915b505094505050505060405180910390f35b61056b6004805050610b43565b60405180821515815260200191505060405180910390f35b6105e06004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610b56565b005b60006000600960005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005090506000816002016000505414156106305760009150610668565b60016004600050541080610651575080600201600050544260046000505401105b1561065f5760019150610668565b60009150610668565b50919050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60056000505481565b60036000505481565b6000600660009054906101000a900460ff1690506106bf565b90565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561071e57610002565b6000600660006101000a81548160ff021916908302179055505b565b60026000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107d35780601f106107a8576101008083540402835291602001916107d3565b820191906000526020600020905b8154815290600101906020018083116107b657829003601f168201915b505050505081565b3373ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561083757610002565b80600660016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b50565b60006000600060018787878760405180856000191681526020018460ff16815260200183600019168152602001826000191681526020019450505050506020604051808303816000866161da5a03f115610002575050604051805190602001509150600960005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000509050600081600201600050541415610912576000925061094a565b60016004600050541080610933575080600201600050544260046000505401105b15610941576001925061094a565b6000925061094a565b5050949350505050565b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109ed5780601f106109c2576101008083540402835291602001916109ed565b820191906000526020600020905b8154815290600101906020018083116109d057829003601f168201915b505050505081565b60046000505481565b60096000506020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101600050908060020160005054905083565b60006000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ae95780601f10610abe57610100808354040283529160200191610ae9565b820191906000526020600020905b815481529060010190602001808311610acc57829003601f168201915b505050505081565b60086000506020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101600050908060020160005054905083565b600660009054906101000a900460ff1681565b6000600060036000505434141580610b7b5750600660009054906101000a900460ff16155b15610b8557610002565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610bc05733935083505b600960005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050549150600082141515610c0757610002565b826008600050600060056000505481526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c7557805160ff1916838001178555610ca6565b82800160010185558215610ca6579182015b82811115610ca5578251826000505591602001919060010190610c87565b5b509050610cd19190610cb3565b80821115610ccd5760008181506000905550600101610cb3565b5090565b50504260086000506000600560005054815260200190815260200160002060005060020160005081905550600860005060006005600050548152602001908152602001600020600050600960005060008673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060018201600050816001016000509080546001816001161561010002031660029004828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610df55780548555610e32565b82800160010185558215610e3257600052602060002091601f016020900482015b82811115610e31578254825591600101919060010190610e16565b5b509050610e5d9190610e3f565b80821115610e595760008181506000905550600101610e3f565b5090565b5050600282016000505481600201600050559050506005600081815054809291906001019190505550600660019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600034604051809050600060405180830381858888f1935050505090507f502f71372a7be8bec66c9bf5962152ee73a8386c5ae4be3005029fb0bb84d620848483604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018060200183151581526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610f845780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a15b5050505056",
	"name": "LicenseManager"
}

