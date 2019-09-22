var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'OSLWallet';
config.appDescription = 'OSLWallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'Grub.wallet.shll';
config.appGitRepo = 'https://github.com/Franzferdinan51/GrubWallet';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11246;

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
config.remoteNodeDefaultHost = '74.130.176.161';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = 'null';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
    '74.130.176.161:11246',
    
];

// your currency name
config.assetName = 'Oscillate';
// your currency ticker
config.assetTicker =  'OSL';
// your currency address prefix, for address validation
config.addressPrefix =  '0x271072';
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
      address: 'hannwTwkdksdprzZnmJw8qes4dBbpYfx2Mvw3Qu6RJJwKeTsHJP3s2xgEK1WKDJiY5XQSwxRyGZn3Hj6HeZkek42XStBj5ZQAwu',
      paymentId: '', 
    },
 
];

module.exports = config;
