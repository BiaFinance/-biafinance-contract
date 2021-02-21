const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "avast natural ghey bird manic supper beehive indexsuit nanny dancer flubber config...";

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: 5777
      },
      xDai: {
        provider: () => new HDWalletProvider(mnemonic, 'https://xdai.poanetwork.dev'),
        network_id: 100,
        confirmations: 2,
        gas: 500000,
        gasPrice: 1000000000,
        skipDryRun: true
      },
    //  test: {
    //    host: "127.0.0.1",
    //    port: 7545,
    //    network_id: "*"
    //  }
    //}
    },
    compilers: {
      solc: {
        version: "0.6.12"
      }
    }
  };