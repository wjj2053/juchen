const {
    override, //需要加载他下面的模块 ，专门暴露配置向的

    fixBabelImports,//用来实现Ant中的css样式的

    addWebpackAlias//创建别名的

} = require('customize-cra');//按需加载的函数和别名配置的函数都是在这里来的
const path = require("path");
module.exports = override(

    //按需加载antd
    fixBabelImports('import', {

        libraryName: 'antd-mobile',//模块的名称        
        libraryDirectory: 'es',
        style: 'css', //拿到上方模块中的css样式
    }),

    //别名配置
    addWebpackAlias({
        "@": path.resolve(__dirname, "./src"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@components": path.resolve(__dirname, "./src/components")
    })
);