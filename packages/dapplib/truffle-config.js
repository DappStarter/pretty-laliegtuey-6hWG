require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name renew mad minor grace desert bubble slam'; 
let testAccounts = [
"0x27021fd956f1efbe1ff94859ed6c7d1b4174da063d98a3be841b6cbac340ab60",
"0x49086107a872ab158eb2111d14d512f26357f6776d8a2e4bbc0969d884746b56",
"0x03af98df58d102cbd8a631a84789a1b90a9cc04dfa27e39e01e22f1a55169ad0",
"0xd5a164fd7f531897e0c8838f718cc3ec39b992c4504891ac4767e66700c38a3a",
"0x57c03a221e3bd73a9e1e73aa07d14b9de4d8f71e377599e25d0a579c13f2b4cd",
"0x11eb7bb04db438802e50a8c47efb06ddeb5b03cfd76d1fc495c9459e9e7ad17e",
"0xa16e5b51c433dd09afd1f1abd7c582f4843f7225b34308fadb666cd6a4a92a42",
"0x79bde5f63465a0f0737fb0b5e958a9f4e0ac65eeb5f0016a64caceaf0e7da109",
"0x22717c787a60e22d5f63d6d8bbfa0fc59a0ca2ce983a3706dfae53196f5570e9",
"0xac3e2c1e216be94193c8293889ac3896f4b5f900576c17fea190a034bce7a5de"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

