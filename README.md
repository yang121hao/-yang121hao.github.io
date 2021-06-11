###  我的个人博客
[预览地址](https://yangyuhou.com)

###  构建工具🔨

- [Hexo](<https://hexo.io/zh-cn/index.html>)
- [Github](<https://github.com/>)
- [Netlify](<https://www.netlify.com/>)

### 构建方法
  我的博客在曾经的很长一段时间以内,我都是将博客静态页面托管到[Github pages](<https://pages.github.com/>)进行渲染的,但是大家都知道,我们国内访问GitHub如果不挂~~翻墙~~的话,访问速度非常慢☹️.虽然我的博客一直以来都没有太多的访问量,但是作为一个追求极致体验的人,怎么忍受得了呢 🤟.<!-- more -->

###  寻找方案

  于是我在网上搜索最优化的解决方案.我想的是,生成博客的渲染框架还是使用[Hexo](<https://hexo.io/zh-cn/>),但是页面托管我得重新找一个托管商,于是我在vue的官网,知道了[Netlify](<https://www.netlify.com/>)这个神器.Netlify是什么：

> Netlify is a unified platform that automates your code to create high-performant, easily maintainable sites and web apps.

我看了官网的介绍,总结一下,它有如下功能：

- 可以托管静态资源
- 可以将静态网站部署到CDN上
- Continuous Deployment 持续部署,当你提交改变到git 仓库,它就会自动运行build command,进行自动部署
- 可以添加自定义域名
- **可以启用免费的TLS证书,启用HTTPS**

Oh my God!!,这可比Git pages好太多了👏我们来对比一下Github pages：

- github虽然没有被墙,但是那个访问速度非常的慢,对国内访问的用户来说体验极差

- 百度无法抓取,众所周知国内用百度的还是多,如果你写的文章,无法被百度抓取收录,那还是有点坑的

- 配置繁琐,使用不友好.https证书配置这一项就麻烦的要死

- 无法做CDN加速.未备案域名服务器,无法使用国内的cnd加速服务

所以,我准备采用Netlify作为我的页面托管商.下面我们即将开始搭建博客咯！

###  开始动手

​    第一步,我们需要安装[Hexo](<https://hexo.io/zh-cn/>)

​    安装hexo之前需要安装一下环境：

- [Node.js](http://nodejs.org/)
- [Git](https://git-scm.com/)

安装完node后安装npm:

```js
$ npm -g install npm
```

不能翻墙的同学,可使用npm淘宝镜像cnpm:

```js
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

> 注：安装了淘宝源的镜像cnpm之后,接下来所有的npm 开头的命令均使用`cnpm`来代替

接着我们来安装Hexo：

```js
$ npm install -g hexo-cli
```

测试一下是否安装成功：

```
$ hexo version
```

然后在我们的电脑上,选择一个目录：

```
$ hexo init "博客目录" #使用hexo命令在指定的<folder>文件夹下初始化创建一个博客项目
$ cd "博客目录"         #进入创建好的项目目录
$ npm install         #使用npm安装所需依赖.
```

这个新建的"博客目录"就是用来作为你以后存放博客的目录,这其中包括博客的配置、文章等等的一切.新建完成之后,我们用任何一个代码编辑器打开我们刚刚新建的目录,有如下目录结构：

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

> 注：这里会涉及一些[hexo cli](<https://hexo.io/zh-cn/docs/commands>)的指令,请自行学习一下,以后都会用到的.

然后我们试着跑一下,看是否能够成功启动:

```
$ hexo clean #清理各种缓存和旧文件
$ hexo g     #生成静态文件
$ hexo s     #开启服务器预览
```

执行完 `hexo s` 后命令行窗口将提示您如下信息:

```
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

打开http://localhost:4000 即可预览你的第一篇hexo博文.

### 部署

  接下来才是重头戏：进入部署环节.在正式进行部署之前,我先来讲一下什么是部署：

 当我们使用 `hexo g` 和 `hexo s` 命令生成并开启服务后,我们本地访问的测试域名-http://localhost:4000 实际是指向了我们当前目录下的 public 目录,也就是说 `hexo g` 命令会生成 public 目录,这个目录下面装着我们的静态页面文件和相关依赖,部署的过程就是将这个 public 目录下的文件放到我们的服务器上这样就完成了部署.

好了接下来我们来进行部署：

#### 同步到Github

先到GitHub新建一个repository:

![![image-20210531173616231](/images/image-20210531173616231.png))

复制你刚刚新建的repository的地址,像这样: 

```
  https://github.com/xieyezi/your-Repository.git
```

  回到项目根目录,将你的本地项目和新建的repository联系起来:

```
  git remote add origin https://github.com/xieyezi/your-Repository.git
```

  在当前根目录下新建.gitignore文件
  将不需要同步的文件和目录写到.gitignore:

```
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
themes/
.deploy*/
```

  完成之后,到根目录:

```
  git add ./
```

```
  git commit -m 'commit information'
```

  接着推送到GitHub:

```
 git push --set-upstream origin master
```

到这里,我们已经讲我们的项目推送到GitHub的master分支下面了.接下来我们要对hexo进行一些配置:

打开hexo根目录的`_config.yml`文件找到deploy项：

```
deploy:
  type: git #部署方式
  repository: git@github.com:xieyezi/your-Repository.git #关联github仓库
  branch: run-page #部署分支
```

在这里,我们将在这个项目仓库下新建一个`run-page`分支,至于有什么用,我等一下会解释,先跟着我操作起来.

配置好了之后,保存退出,我们重新执行一下:

```
$ hexo clean #清理各种缓存和旧文件
$ hexo g     #生成静态文件
```

最后,我们将public目录同步到Github:

```
$ hexo d #部署应用
```

在执行这个命令的时候,我们可能会出现如下错误：

```
$ ERROR Deployer not found: git
```

那是因为我们缺少一个依赖,我们安装一下:

```
npm install hexo-deployer-git --save
```

然后再次执行一下,执行完成我们到Github 会发现我们的项目多了一个`run-page`,这个分支就是我们后面要用来生成我们到静态页面的.

#### 托管到Netlify
[查看此博主文档](https://www.cnblogs.com/37Y37/p/12551839.html)

