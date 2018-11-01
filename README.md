## git 的使用

1. 安装 git
  1.1 安装好之后，需要配置 git 的用户名 与 邮箱
  git config --global user.email 'sz-liwei@1000phone.com'
  git config --global user.name 'will'

2. 验证是否安装成功

3. 对本地某个项目做 git 初始化
```
// 项目的 根目录下 执行 
git init
```

4. 在项目根目录下新建一个 .gitignore 文件, 配置需要让 git 忽略的文件

5. 做一次初识提交 
  5.0 git status   -  查看状态  红色的就是修改的，蓝色的就是在暂存区
  5.1 git add <file>  git add .  - 添加到暂存区
  5.2 git commit -m '注释'

6. 查看 commit 的记录   git log [-num]
7. 将代码推送到远程仓库
  git remote add origin xxxx
  git push -u origin master (第一次的 需要加上  -u origin master)



---- 以上是一个循环


分支：常用的几个分支

1. master   (主分支)   不要再master 上直接写代码
2. develop
3. release
4. bugfix
5. hotfix


<!-- 写了2个小时 -->

<!-- 写了2个小时 -->


合并分支：

A分支

B分支

1. 如果要将 B分支 合并到 A分支
    需要在  A 分支 上  使用  git merge B分支
