# Aip User Conter

基于 Ant Design Pro 开发的用户中心项目，使用Ant Design Pro + umi ui。

umi4 不支持 [umi](https://so.csdn.net/so/search?q=umi&spm=1001.2101.3001.7020) ui，如果你使用的是 Ant Design Pro 官网最新版本，按照官方文档创建项目时，官方的脚手架不提供 umi3 的版本。



旧版本安装

~~~bash
npm i @ant-design/pro-cli@3.1.0 -g
~~~



查看版本

~~~bash
pro -v
~~~



创建项目

myapp是项目名称，你可以改成你喜欢的

~~~shell
pro create myapp
~~~



选择 umi@3 的版本

```shell
? 🐂 使用 umi@4 还是 umi@3 ? (Use arrow keys)
❯ umi@4
  umi@3
```



> 如果选择了 umi@4 版本，暂时还不支持全量区块。

如果选择了 umi@3，还可以选择 pro 的模板，pro 是基础模板，只提供了框架运行的基本内容，complete 包含所有区块，不太适合当基础模板来进行二次开发

```shell
? 🚀 要全量的还是一个简单的脚手架? (Use arrow keys)
❯ simple
  complete
```



项目创建好后，在 WebStorm 中打开，管理员模式下执行如下命令：

添加umi ui

```bash
yarn add @umijs/preset-ui -D
```



安装依赖

~~~shell
npm install
~~~

或

```shell
yarn
```



如果你的node.js 是17+，找到项目的`package.json`文件，找到start相关，将对应系统的命令粘贴在其前面，加上`&&`，写到启动项目的配置里面。

`build`加不加都无所谓。

> Linux & Mac OS：

```bash
export NODE_OPTIONS=--openssl-legacy-provider 
```

> windows命令提示符:

```bash
set NODE_OPTIONS=--openssl-legacy-provider 
```

例如：

```json
"scripts": {
  ...,
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && cross-env UMI_ENV=dev umi dev",
  ...
},
```
