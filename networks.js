var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('f9beb4d9'),
  addressVersion: 0x00,
  privKeyVersion: 128,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('6FE28C0AB6F1B372C1A6A246AE63F74F931E8365E15A089C68D6190000000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 2083236893,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1231006505,
    bits: 486604799,
  },
  dnsSeeds: [
    'seed.bitcoin.sipa.be',
    'dnsseed.bluematt.me',
    'dnsseed.bitcoin.dashjr.org',
    'seed.bitcoinstats.com',
    'seed.bitnodes.io',
    'bitseed.xf2.org'
  ],
  defaultClientPort: 8333
};

exports.mainnet = exports.livenet;

//exports.testnet = {
//  name: 'testnet',
//  magic: hex('0b110907'),
//  addressVersion: 0x6f,
//  privKeyVersion: 239,
//  P2SHVersion: 196,
//  hkeyPublicVersion: 0x043587cf,
//  hkeyPrivateVersion: 0x04358394,
//  genesisBlock: {
//    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
//    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
//    height: 0,
//    nonce: 414098458,
//    version: 1,
//    prev_hash: buffertools.fill(new Buffer(32), 0),
//    timestamp: 1296688602,
//    bits: 486604799,
//  },
//  dnsSeeds: [
//    'testnet-seed.bitcoin.petertodd.org',
//    'testnet-seed.bluematt.me'
//  ],
//  defaultClientPort: 18333
//};
exports.testnet = {
  name: 'testnet',
  magic: hex('fabfb5da'), /* bitcoind with -regtest uses "testnet" magic */
  addressVersion: 0x6f, /* same */
  privKeyVersion: 239, /* same */
  P2SHVersion: 196, /* same */
  hkeyPublicVersion: 0x043587cf, /* insight specific */
  hkeyPrivateVersion: 0x04358394, /* insight specific */
  genesisBlock: {
    hash: hex('06226e46111a0b59caaf126043eb5bbf28c34f3a5e332a1fc7b2b73cf188910f'), /* edited, reversed */
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'), /* same */
    height: 0,
    nonce: 2, /* edited */
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602, /* same */
    bits: 545259519, /* 0x207fffff in decimal */
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18444
};