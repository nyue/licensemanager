package de.urszeidler.ethereum.licencemanager1.contracts;

import org.junit.runners.Suite;
import org.junit.runner.RunWith;

@RunWith(Suite.class)
@Suite.SuiteClasses({
LicenseManagerTest.class
,LicenseIssuerTest.class
//Start of user code customTests    
,de.urszeidler.ethereum.licencemanager1.deployer.LicenseManagerDeployerTest.class
//End of user code
})
public class AllContractsTestSuite {
}
