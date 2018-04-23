
[文档地址]https://vuepress.docschina.org/   

[文档地址]: https://vuepress.docschina.org/     


# 起步
# 全局安装（Global Installation）
如果你只是想玩玩 VuePress，你可以在全局安装它：



# 全局安装
    npm install -g vuepress

# 创建一个 markdown 文件
    echo "# Hello VuePress" > README.md

# 开始写作
    vuepress dev

# 构建
    vuepress build
# 在现有项目中（Inside an Existing Project）
    如果你有一个现有的项目并希望将文档保存在项目中，就应该将 VuePress 安装为本地依赖项。此设置还允许你使用 CI 或 Netlify 等服务在推送时自动部署。

# 安装为本地依赖项
    npm install -D vuepress

# 创建一个 docs 目录
    mkdir docs
# 创建一个 markdown 文件
    echo "# Hello VuePress!" > docs/README.md

# 开始写作
    npx vuepress dev docs
    或者, 给 package.json 添加一些脚本：

{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
然后你就可以开始写作：

npm run docs:dev
要生成静态资产，请运行：

npm run docs:build
默认情况下，构建的文件将位于 .vuepress/dist 中，该文件可以通过 .vuepress/config.js 中的 dest 字段进行配置。构建的文件可以部署到任何静态文件服务器。有关部署到常用服务的指南，请参阅部署教程。