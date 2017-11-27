>  本项目是众人科技移动端线上项目。
###首先

***
> 
（请用chrome的手机模式预览）
>  *本项目地址[github地址](http://m.people2000.net/)


### 项目技术架构
***
*  vue-cli
*  vue
*  vue-axios
*  vue-router
*  vue-infinite-scroll
*  vue-awesome-swiper
*  stylus
*  webpack
*  es6



###安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/xiaoyaopai/elm.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:8080)

```
npm run dev
```
发布代码

```
npm run build
```
### 安装注意
安装 vue-cli
```
npm install -g vue-cli
```
安装 vue-cli eslint
```
npm install -g eslint
```
安装依赖 friendly-errors-webpack-plugin
```
npm install friendly-errors-webpack-plugin --save-dev
```
###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 滚动加载
* 前端路由
* 图片判断自适应
* js蜂巢图
* 图片左右滑动
* 等等