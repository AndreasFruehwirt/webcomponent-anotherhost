const merge = require('webpack-merge');
const webpack = require('webpack');

exports.default = {
  pre: function(builderConfig) {
  },


  config: function (cfg) {
    const strategy = merge.strategy({
      'devtool': 'replace',
    });

    return strategy(cfg, {
      devtool: "eval-source-maps",
      output: {
        devtoolNamespace: "kontoData"
      }
    });
  },

  post: function(builderConfig) {
  }

}
