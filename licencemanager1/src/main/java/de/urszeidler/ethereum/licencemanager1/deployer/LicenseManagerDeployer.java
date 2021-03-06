/**
 * 
 */
package de.urszeidler.ethereum.licencemanager1.deployer;

import static org.ethereum.util.ByteUtil.bigIntegerToBytes;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.keystore.FileSecureKey;
import org.adridadou.ethereum.propeller.keystore.SecureKey;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.EthData;
import org.adridadou.ethereum.propeller.values.EthValue;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.OptionGroup;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
import org.apache.commons.io.IOUtils;
import org.bouncycastle.util.encoders.Hex;
import org.ethereum.crypto.ECKey;
import org.ethereum.crypto.ECKey.ECDSASignature;

import com.google.common.primitives.Bytes;

import de.urszeidler.ethereum.licencemanager1.EthereumInstance;
import de.urszeidler.ethereum.licencemanager1.EthereumInstance.DeployDuo;
import de.urszeidler.ethereum.licencemanager1.contracts.LicenseIssuer;
import de.urszeidler.ethereum.licencemanager1.contracts.LicenseIssuerIssuedLicense;
import de.urszeidler.ethereum.licencemanager1.contracts.LicenseManager;

/**
 * @author
 *
 */
public class LicenseManagerDeployer {

	public static final long FINNEY_TO_WEI = 1000000000000000L;

	private EthereumFacade ethereum;
	private ContractsDeployer deployer;
	private long millis;
	private EthAccount sender;
	private DeployDuo<LicenseManager> licenseManager;

	private interface DoAndWaitOneTime<T> {
		boolean isDone();

		CompletableFuture<T> doIt();
	}

	public LicenseManagerDeployer() {
		super();
		ethereum = EthereumInstance.getInstance().getEthereum();
		deployer = new ContractsDeployer(ethereum, "/contracts/combined.json", true);
	}

	public static byte[] createMessageHash(String message) throws NoSuchAlgorithmException {
		MessageDigest md = MessageDigest.getInstance("SHA-256");
		return md.digest(message.getBytes());
	}

	public static String toPublicKeyString(EthAccount account1) {
		byte[] encoded = account1.getPublicKey().getEncoded(false);
		return Hex.toHexString(encoded);
	}

	public static String createSignature(EthAccount account1, String message) throws NoSuchAlgorithmException {
		byte[] messageHash = createMessageHash(message);
		ECKey private1 = ECKey.fromPrivate(account1.getBigIntPrivateKey());
		ECDSASignature signature = private1.sign(messageHash);

		return signature.toHex();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Options options = createOptions();
		CommandLineParser parser = new DefaultParser();
		int returnValue = 0;
		boolean dontExit = false;
		try {
			CommandLine commandLine = parser.parse(options, args);
			if (commandLine.hasOption("h")) {
				printHelp(options);
				return;
			}
			if (commandLine.hasOption("de"))
				dontExit = true;

			String senderKey = null;
			String senderPass = null;
			if (commandLine.hasOption("sk"))
				senderKey = commandLine.getOptionValue("sk");
			if (commandLine.hasOption("sp"))
				senderPass = commandLine.getOptionValue("sp");

			LicenseManagerDeployer manager = new LicenseManagerDeployer();
			
			try {
				manager.init(senderKey, senderPass);

				long currentMili = 0;
				EthValue balance = null;
				if(commandLine.hasOption("calcDeploymendCost")){
					currentMili = System.currentTimeMillis();
					balance = manager.ethereum.getBalance(manager.sender);
				}
				if(commandLine.hasOption("observeBlock")){
					manager.ethereum.events().observeBlocks().subscribe(b-> System.out.println("Block: "+b.blockNumber+" "+b.receipts  ));
				}
				

				if (commandLine.hasOption("f")) {
					String[] values = commandLine.getOptionValues("f");

					String filename = values[0];
					String isCompiled = values[1];
					manager.deployer.setContractSource(filename, Boolean.parseBoolean(isCompiled));
				}
				if (commandLine.hasOption("millis")) {
					manager.setMillis(Long.parseLong(commandLine.getOptionValue("millis")));
				}

				if (commandLine.hasOption("c")) {
					String[] values = commandLine.getOptionValues("c");
					if (values == null || values.length != 2) {
						System.out.println("Error. Need 2 parameters: paymentAddress,name");
						System.out.println("");
						printHelp(options);
						return;
					}

					String paymentAddress = values[0];
					String name = values[1];
					manager.deployLicenseManager(EthAddress.of(paymentAddress), name);
				} else if (commandLine.hasOption("l")) {
					String contractAddress = commandLine.getOptionValue("l");
					if (contractAddress == null) {
						System.out.println("Error. Need 1 parameters: contract address");
						System.out.println("");
						printHelp(options);
						return;
					}
					manager.setManager(EthAddress.of(contractAddress));
					manager.listContractData(EthAddress.of(contractAddress));
				} else if (commandLine.hasOption("cic")) {
					String[] values = commandLine.getOptionValues("cic");
					if (values == null || values.length != 6) {
						System.out.println("Error. Need 6 itemName, textHash, url, lifeTime, price");
						System.out.println("");
						printHelp(options);
						return;
					}
					String contractAddress = values[0];
					String itemName = values[1];
					String textHash = values[2];
					String url = values[3];
					String lifeTime = values[4];
					String price = values[5];

					manager.setManager(EthAddress.of(contractAddress));
					manager.createIssuerContract(itemName, textHash, url, Integer.parseInt(lifeTime),
							Integer.parseInt(price));
				} else if (commandLine.hasOption("bli")) {
					String[] values = commandLine.getOptionValues("bli");
					if (values == null || values.length < 2 || values.length > 3) {
						System.out.println(
								"Error. Need 2-3 issuerAddress, name, optional an address when not use the sender.");
						System.out.println("");
						printHelp(options);
						return;
					}
					String issuerAddress = values[0];
					String name = values[1];
					String address = values.length>2 ? values[2] : null;

					manager.buyLicense(issuerAddress, name, address);
				} else if (commandLine.hasOption("v")) {
					String[] values = commandLine.getOptionValues("v");

					String issuerAddress = values[0];
					String message = values[1];
					String signature = values[2];
					String publicKey = values[3];

					manager.verifyLicense(issuerAddress, message, signature, publicKey);
				} else if (commandLine.hasOption("cs")) {
					String message = commandLine.getOptionValue("cs");
					if (message == null) {
						System.out.println("Error. Need 1 parameter: message");
						System.out.println("");
						printHelp(options);
						return;
					}
					String signature = createSignature(manager.sender, message);
					String publicKeyString = toPublicKeyString(manager.sender);
					System.out.println("The signature for the message is:");
					System.out.println(signature);
					System.out.println("The public key is:");
					System.out.println(publicKeyString);
				} else if (commandLine.hasOption("co")) {
					String[] values = commandLine.getOptionValues("co");
					if (values == null || values.length != 2) {
						System.out.println("Error. Need 2 parameters: contractAddress, newOwnerAddress");
						System.out.println("");
						printHelp(options);
						return;
					}

					String contractAddress = values[0];
					String newOwner = values[1];

					manager.changeOwner(EthAddress.of(contractAddress), EthAddress.of(newOwner));
				} else if (commandLine.hasOption("si")) {
					String contractAddress = commandLine.getOptionValue("si");
					if (contractAddress == null) {
						System.out.println("Error. Need 1 parameters: contract address");
						System.out.println("");
						printHelp(options);
						return;
					}
					manager.setManager(EthAddress.of(contractAddress));
					manager.stopIssue(contractAddress);
				} else if (commandLine.hasOption("ppuk")) {
					System.out.println("Public key: "+toPublicKeyString(manager.sender));
				}
				
				if (manager.licenseManager != null && commandLine.hasOption("wca")) {
					String[] values = commandLine.getOptionValues("wca");
					String filename = values[0];

					File file = new File(filename);
					IOUtils.write(
							!commandLine.hasOption("cic")?							
							manager.licenseManager.contractAddress.withLeading0x() :
							manager.licenseManager.contractInstance.contracts(manager.licenseManager.contractInstance.contractCount()-1).withLeading0x()		
									, new FileOutputStream(file),
							"UTF-8");
				}
				
				if(commandLine.hasOption("calcDeploymendCost")){
					balance = balance.minus(manager.ethereum.getBalance(manager.sender));
					   BigDecimal divide = new BigDecimal(balance.inWei()).divide(BigDecimal.valueOf(1_000_000_000_000_000_000L)); 
					
					System.out.println("Deployment cost: "+(divide)+" in wei:"+balance.inWei()+" time need: "+(System.currentTimeMillis()-currentMili));
				}
					
			} catch (Exception e) {
				System.out.println(e.getMessage());
				printHelp(options);
				returnValue = 10;
			}

		} catch (ParseException e1) {
			System.out.println(e1.getMessage());
			printHelp(options);
			returnValue = 10;
		}
		if (!dontExit)
			System.exit(returnValue);
	}

	private void stopIssue(String contractAddress) throws IOException, InterruptedException, ExecutionException {
		LicenseIssuer issuerProxy = deployer.createLicenseIssuerProxy(sender, EthAddress.of(contractAddress));
		issuerProxy.stopIssuing();
	}

	private void changeOwner(EthAddress contract, EthAddress newOwner)
			throws IOException, InterruptedException, ExecutionException {
		LicenseManager licenseManagerProxy = deployer.createLicenseManagerProxy(sender, contract);

		licenseManagerProxy.changeOwner(newOwner);
		listContractData(contract);
	}

	public void verifyLicense(String issuerAddress, String message, String signature, String publicKey)
			throws IOException, InterruptedException, ExecutionException, NoSuchAlgorithmException {
		System.out.println("Verify license: [" +message+"] "+signature+" puk: "+publicKey);
		
		LicenseIssuer licenseIssuer = deployer.createLicenseIssuerProxy(sender, EthAddress.of(issuerAddress));
		if (!licenseIssuer.getIssuable())
			throw new RuntimeException("The license is no longer issuable.");

		byte[] messageHash = createMessageHash(message);
		byte[] decode_Signature = Hex.decode(signature);
		byte[] pub = Hex.decode(publicKey);

		byte v = decode_Signature[64];
		byte[] r = new byte[32];
		byte[] s = new byte[32];
		System.arraycopy(decode_Signature, 0, r, 0, 32);
		System.arraycopy(decode_Signature, 32, s, 0, 32);
		ECDSASignature ecdSignature = ECDSASignature.fromComponents(r, s, v);

		if (!ECKey.verify(messageHash, ecdSignature, pub)) {
			throw new RuntimeException("Message did not match signature.");
		}

		// special case when v is 0 it was properly 27 see
		// org.ethereum.crypto.ECKey.ECDSASignature.toByteArray()
		if (v == 0)
			v = 27;

		if (!licenseIssuer.checkLicense(EthData.of(messageHash), (int) v, EthData.of(r), EthData.of(s)))
			throw new RuntimeException("The license is not valid.");
	}

	public void buyLicense(String issuerAddress, String name, String address)
			throws IOException, InterruptedException, ExecutionException {
		LicenseIssuer licenseIssuer = deployer.createLicenseIssuerProxy(sender, EthAddress.of(issuerAddress));
		if (!licenseIssuer.getIssuable())
			throw new RuntimeException("The license is no longer issuable.");

		EthAddress eaddress = (address == null || address.isEmpty()) ? EthAddress.empty() : EthAddress.of(address);
		BigInteger licencePrice = licenseIssuer.licencePrice();

		Integer licenseCount = licenseIssuer.licenseCount();
		doAndWait("Buying license " + licenseIssuer.licensedItemName() + " for " + licencePrice + " wei",
				new DoAndWaitOneTime<Void>() {

					@Override
					public boolean isDone() {
						return licenseIssuer.licenseCount() == licenseCount + 1;
					}

					@Override
					public CompletableFuture<Void> doIt() {
						return licenseIssuer.buyLicense(eaddress, name)
								.with(EthValue.wei(licencePrice));
					}
				});
	}

	/**
	 * Create a new issuer contract.
	 * 
	 * @param itemName
	 * @param textHash
	 * @param url
	 * @param lifeTime
	 * @param price
	 * @throws InterruptedException
	 * @throws ExecutionException
	 * @throws IOException
	 */
	public void createIssuerContract(String itemName, String textHash, String url, Integer lifeTime, Integer price)
			throws InterruptedException, ExecutionException, IOException {
		Integer contractCount = licenseManager.contractInstance.contractCount();
		doAndWait("Create a new issuer contract: " + itemName + " the hash: " + textHash, new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return licenseManager.contractInstance.contractCount() == contractCount + 1;
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return licenseManager.contractInstance.createIssuerContract(itemName, textHash, url, lifeTime, price);
			}
		});
		listContractData(null);
	}

	/**
	 * List the LicenseMangager and data.
	 * 
	 * @param contractAddress
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public void listContractData(EthAddress contractAddress)
			throws IOException, InterruptedException, ExecutionException {
		System.out.println("\nLicensManager: " + licenseManager.contractInstance.issuerName());
		System.out.println("Address: " + licenseManager.contractAddress);
		System.out.println("Payment Address: " + licenseManager.contractInstance.paymentAddress());
		System.out.println("Contracts: " + licenseManager.contractInstance.contractCount() + " owner: "
				+ licenseManager.contractInstance.owner());
		for (int i = 0; i < licenseManager.contractInstance.contractCount(); i++) {
			EthAddress address = licenseManager.contractInstance.contracts(i);
			LicenseIssuer licenseIssuer = deployer.createLicenseIssuerProxy(sender, address);
			System.out.println(" --------------------------------- ");
			System.out.println(" License:      " + licenseIssuer.licensedItemName());
			System.out.println(" Price:        " + licenseIssuer.licencePrice());
			System.out.println(" Address:      " + address);
			System.out.println(" Url:          " + licenseIssuer.licenseUrl());
			System.out.println(" text hash:    " + licenseIssuer.licenseTextHash());
			System.out.println(" issueable:    " + licenseIssuer.issuable() + " " + licenseIssuer.licenseLifetime());

			System.out.println(" LicenseCount: " + licenseIssuer.licenseCount());
			for (int j = 0; j < licenseIssuer.licenseCount(); j++) {
				LicenseIssuerIssuedLicense issuedLicenses = licenseIssuer.issuedLicenses(j);
				System.out.println("  Issued License " + issuedLicenses.getLicenseOwnerName() + " "
						+ issuedLicenses.getLicenseOwnerAdress() + " " + issuedLicenses.getIssuedDate());
			}
		}

	}

	/**
	 * Deploy a new License Manager.
	 * 
	 * @param _paymentAddress
	 * @param _name
	 * @throws IOException
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public void deployLicenseManager(EthAddress _paymentAddress, String _name)
			throws IOException, InterruptedException, ExecutionException {
		licenseManager = deployer.createLicenseManager(sender, _paymentAddress, _name);
		listContractData(null);
	}

	private void setManager(EthAddress contractAddress) throws IOException, InterruptedException, ExecutionException {
		licenseManager = new DeployDuo<LicenseManager>(contractAddress, null);
		licenseManager.contractInstance = deployer.createLicenseManagerProxy(sender, contractAddress);
	}

	private void init(String senderKey, String senderPass) throws Exception {
		ethereum = EthereumInstance.getInstance().getEthereum();
		String property = System.getProperty("EthereumFacadeProvider");
		// testnetProvider
		if (property != null && (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
				|| property.equalsIgnoreCase("InfuraRopsten"))) {

			millis = 2000L;
		} else if (property != null && property.equalsIgnoreCase("private")) {
			sender = AccountProvider.fromPrivateKey(BigInteger.valueOf(100000L));
			millis = 100L;
		} else {
			sender = AccountProvider
					.fromPrivateKey((Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			millis = 10L;
		}

		if (senderKey != null && !senderKey.isEmpty() && sender == null) {
			sender = unlockAccount(senderKey, senderPass);
		}
		deployer = new ContractsDeployer(ethereum, "/contracts/combined.json", true);
	}

	/**
	 * Unlocks an account.
	 * 
	 * @param pathname
	 *            the key file
	 * @param pass
	 *            the pass to unlocl
	 * @return the account
	 * @throws Exception
	 */
	private EthAccount unlockAccount(String pathname, String pass) throws Exception {
		SecureKey key2 = new FileSecureKey(new File(pathname));
		System.out.println("unlock key: " + pathname);
		EthAccount decode = key2.decode(pass);
		String senderAddressS = decode.getAddress().withLeading0x();
		EthValue balance = ethereum.getBalance(decode);
		System.out.println("Sender address and amount:" + senderAddressS + "->" + balance);
		return decode;
	}

	private void doAndWait(String message, DoAndWaitOneTime<?> action) throws InterruptedException, ExecutionException {
		System.out.println(message);
		doAndWait(action);
	}

	private void doAndWait(DoAndWaitOneTime<?> action) throws InterruptedException, ExecutionException {
		int timeOut = 0;
		if (!action.isDone()) {
			action.doIt().get();
			while (!action.isDone() && timeOut++ < 200)
				synchronized (this) {
					System.out.print(".");
					wait(millis);
				}
		}
		System.out.println();
		if (timeOut >= 200)
			System.out.println("Timeout:" + action);
	}

	private static Options createOptions() {
		Options options = new Options();

		options.addOption(Option//
				.builder("de")//
				.desc("Don't exit the programm.")//
				.longOpt("dontExit")//
				.hasArg(false)//
				.build());
		options.addOption(Option//
				.builder("calcDeploymendCost")//
				.desc("Calc the deployment cost.")//
//				.longOpt("calcDeploymendCost")//
				.hasArg(false)//
				.build());
		options.addOption(Option//
				.builder("observeBlock")//
				.desc("Observes the blocks.")//
//				.longOpt("calcDeploymendCost")//
				.hasArg(false)//
				.build());
		options.addOption(Option//
				.builder("f")//
				.desc("Set the contract source or the compiled json.")//
				.longOpt("file")//
				.hasArg(true)//
				.argName("file alreadyCompiled").numberOfArgs(2).build());
		options.addOption(Option//
				.builder("sk")//
				.desc("Set the sender key file.")//
				.longOpt("senderKey")//
				.hasArg(true)//
				.argName("keyFile")//
				.numberOfArgs(1).build());
		options.addOption(Option//
				.builder("sp")//
				.desc("Set the pass of the key of the sender.")//
				.longOpt("senderPass")//
				.hasArg(true)//
				.argName("password").numberOfArgs(1).build());
		options.addOption(Option//
				.builder("millis")//
				.desc("The millisec to wait between checking the action.")//
				.hasArg(true)//
				.argName("millisec").numberOfArgs(1).build());
		options.addOption(Option//
				.builder("wca")//
				.longOpt("writeContractAddress")//
				.desc("Write contract to file.")//
				.hasArg()//
				.argName("filename").numberOfArgs(1).build());

		OptionGroup actionOptionGroup = new OptionGroup();
		actionOptionGroup.setRequired(true);
		actionOptionGroup.addOption(Option.builder("h")//
				.longOpt("helps").desc("show help and usage")//
				.hasArg(false).build());
		actionOptionGroup.addOption(Option.builder("c")//
				.desc("Deploys the contract on the blockchain").longOpt("create")//
				.hasArg(true)//
				.numberOfArgs(2)//
				.argName("paymenAddress, name")//
				.build());
		actionOptionGroup.addOption(Option.builder("l")//
				.desc("List contract data")//
				.hasArg()//
				.argName("contractAddress")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("cic")//
				.desc("Create issuer contract. The price is in Finney")//
				.hasArg()//
				.numberOfArgs(6)//
				.argName("contractAddress, itemName, textHash, url, lifeTime, price")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("bli")//
				.desc("Buy license for address.")//
				.hasArg()//
				.numberOfArgs(2)//
				.argName("issuerAddress, name, address")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("v")//
				.desc("Verify a licence.")//
				.hasArg()//
				.numberOfArgs(4)//
				.argName("issuerAddress, message, signature, publicKey")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("cs")//
				.desc("Create a signature from a given text for the given Key.")//
				.hasArg()//
				.numberOfArgs(1)//
				.argName("message")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("co")//
				.longOpt("changeOwner")//
				.desc("Change owner")//
				.hasArg()//
				.numberOfArgs(2)//
				.argName("contractAddress newOwnerAddress")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("si")//
				.longOpt("stopIssuing")//
				.desc("Stop issuing  license on this license isuer.")//
				.hasArg()//
				.numberOfArgs(1)//
				.argName("contractAddress")//
				.build()//
		);
		actionOptionGroup.addOption(Option.builder("ppuk")//
				.longOpt("Print the public key.")//
				.desc("Stop issuing  license on this license isuer.")//
				.build()//
		);

		options.addOptionGroup(actionOptionGroup);
		return options;
	}

	/**
	 * @param options
	 */
	private static void printHelp(Options options) {
		System.out.println("used EthereumFacadeProvider:" + System.getProperty("EthereumFacadeProvider") + "\n\n");

		StringBuffer buffer = new StringBuffer();
		buffer.append("change the ethereum client via -DEthereumFacadeProvider=<type>\n")//
				.append("type : main - the main net\n")//
				.append("       test - the test net\n")//
				.append("       ropsten - the ropsten net\n")//
				.append("       private - the private net\n")//
				.append("       InfuraRopsten - the ropsten net via Infrua\n")//
				.append("       InfuraMain - the main net via Infrua\n")//
				.append("           -DapiKey=<key> - the the api key for the service\n")//
				.append("       rpc - connect via rpc\n")//
				.append("          -Drpc-url=<url> - the url of the rpc server\n")//
				.append("          -Dchain-id=<id> - the chain id (0 for the main chain and 3 for ropsten)\n")//
				.append("\n");

		HelpFormatter formatter = new HelpFormatter();
		String header = "\nA deployer and manager for for a version database on the blockchain. (c) Urs Zeidler 2017n";
		String footer = "\nexample: \n\n" + buffer.toString();
		formatter.printHelp(150, "checksum database on the blockchain", header, options, footer, true);
	}

	// private static Byte[] toByteArray(byte[] byteArray) {
	// List<Byte> asList = Bytes.asList(byteArray);
	// return asList.toArray(new Byte[] {});
	// }
	//

	public void setMillis(long millis) {
		this.millis = millis;
	}

	public DeployDuo<LicenseManager> getLicenseManager() {
		return licenseManager;
	}

	public void setSender(EthAccount sender) {
		this.sender = sender;
	}

}
