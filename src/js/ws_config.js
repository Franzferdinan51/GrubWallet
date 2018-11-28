var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'MagiXWallet';
config.appDescription = 'MagiX Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'Grub.wallet.shll';
config.appGitRepo = 'https://github.com/Franzferdinan51/turtle-wallet-electron';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11898;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'twl';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'Magi-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v0.9.4";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://grubmine.govps.com/GRUB-block-explorer/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '209.188.25.74';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '74.140.171.96:11898',
    '144.217.45.40:11898',
    
];

// your currency name
config.assetName = 'GrubMine';
// your currency ticker
config.assetTicker =  'Magi';
// your currency address prefix, for address validation
config.addressPrefix =  'Xw';
// standard wallet address length, for address validation
config.addressLength = 99;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.2;
// minimum amount for sending transaction
config.mininumSend = 1.0;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 3;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
    { name: 'FrenziedFire',
      address: 'gRUBKxWpLy4AhpGwX26mdE6bHnUsTm98MdGz3xZFa6duZ3cvk3W5KfHQ3ugCsmkbBpX9tHGKGtN4Kj1eDATYhZue7UYS5XLmKr',
      paymentId: '', 
    },
 
];

module.exports = config;
