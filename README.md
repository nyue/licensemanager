# licensemanager

Some smart contracts for the etherum blockchain to manage a licenseable item. 
The license are strored transparent on the blockchain and can be reviewed.

The uml model is used to generate the solidity code with the [uml2solidity](https://github.com/UrsZeidler/uml2solidity) plugin for eclispe.

![use-case](licensemanager/doc/Package_use-cases_UseCaseDiagram.PNG)

There are two contracts, the LicenseManager creates the issuer contracts and is able to controll them, while the LicenseIssuer 
contracts are responsible to issue and hold the assigned licenses. 

![class](licensemanager/doc/Package_contracts_ClassDiagram.PNG)

There is a [generated model doc](licensemanager/mix/contracts.md) describing the underlying model.

