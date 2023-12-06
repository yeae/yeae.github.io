---
title: hexo_github
date: 2023-06-09 08:09:39
tags:
---
安装node git 
hexo安装  npm install -g hexo-cli
在博客文件夹里
1 hexo init 
生成一系列文件
2安装npm
npm install
3、启动服务站点
hexo g 
hexo server

1. 生成SSH添加到GitHub
git config --global user.name "yeae"
git config --global user.email "raoraofeng@qq.com"
for a check 
git config user.name
git config user.email

SSH
ssh-keygen -t rsa -C "raoraofeng@qq.com"
ssh -T git@github.com

将hexo部署到GitHub
for _config.yml

deploy:
  type: git
  repo: https://github.com/yeae/yeae.github.io.git
  branch: master

npm install hexo-deployer-git --save

hexo clean
hexo generate
hexo deploy


npm install hexo-blog-encrypt
---
title: Hello World
date: 2016-03-30 21:18:02
password: hello
---

