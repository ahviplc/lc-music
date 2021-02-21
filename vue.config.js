module.exports = {
    devServer: {
        // 这里可以修改项目启动端口 注意本地开发环境 使用localhost时 这边修改了端口 src/utils/axios.js:3 这里也要修改成对应端口
        // 这样操作的话 就不需要自己在本地环境中将 网易云音乐api接口项目【https://github.com/Binaryify/NeteaseCloudMusicApi】举起来了
        // 当然在生产环境中部署 使用80端口 或者其他端口 请对应做好端口映射
        port: 3000,
        disableHostCheck: true,
        proxy: { //解决跨域问题
            '/api': {
                // 此处的写法，目的是为了 将 【http://localhost:3000/api】中 所有带有【/api】替换成【https://autumnfish.cn/】
                // 也可以替换成大佬自己服务器 根据上面 网易云音乐接口项目 部署 提供的【http://8.129.133.120:3000/】
                // pathRewrite【 '^/api': ''】可达到上述说法
                // target: 'https://autumnfish.cn/',
                target: 'http://8.129.133.120:3000/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
