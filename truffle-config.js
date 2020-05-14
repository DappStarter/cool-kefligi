require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food rent rebel random coconut hard light army gasp'; 
let testAccounts = [
"0x3e20ebb3f4a3231433b6cb5e66d5cf07e884a7948e0d4d507f12d5ef9481968a",
"0xb567f8811024b3a15e43808528e989c7bbc686d5abf65ec2ffa7c13d68d2cb8f",
"0x616fb95583a8d8b0a65bd25ba2b5ce622a7e859cf4890f2acb6811d91826a465",
"0xa97d563d1d40a18b6d7f7438fa03d7404a287cdd29a9223841a513202abbdcac",
"0x91e822611c7c98195a3b9cb383c960134581d3ea8ba433c8dad6496fca63b6cf",
"0x3997c13ae504137c97922d28f7150c06227d63a11b8c8cba7aba6fafebe25487",
"0x1b7fea0de13ee00896e4a4148c583aa675bc04d135d23a1de9b25e2e9566877e",
"0x711695d287cfbfbf44e3406b24b8e359a8a8279ca926c52412c6a5fc7fe72841",
"0xc691edeaff9063b6a4d788bcf315613946bb6088d885604a89230e36d60e2119",
"0x2ddbccb1b352ed4b092c0d12b1a26cb862600da9136b6167d450f36c448626b5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
