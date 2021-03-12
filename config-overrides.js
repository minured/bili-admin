const { override, fixBabelImports } = require("customize-cra");



module.exports = override(
  // 按需引入css
  fixBabelImports("import", {
    libraryName: "antd",
    style: "css",
  }),
  // 
  // addLessLoader({
  //   lessOptions: {
  //     javascriptEnabled: true,
  //     modifyVars: { "@primary-color": "#aaaaaa" },
  //   },
  // })


);