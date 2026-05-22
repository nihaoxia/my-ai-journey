# Git

- 开发目录
- 多人协作，如何分布式存储
   github
   gitee 
   gitlab
中央仓库，A/B/C...
- 操作的冲突
   文件的版本
   一个文件，多个版本
   文件系统 -> 版本控制系统
   回溯项目版本，更安全，好评估

## learn_git
目前是一个空的项目文件夹
   代码文件（如果硬盘坏了或者改了忘了、多人协作）
   本地文件 分布式、版本管理
   让git 接管他，成为代码仓库
   - github 中央仓库
   - git init 本地仓库（文件版本（快照））

   - git init
   完成项目 ->仓库的转变
   .git 仓库隐藏目录  安全，不能随便操作 要按照git的约束执行 不能乱删或者乱改 否则就不是是仓库了

   git bash 微型的 linux bash 环境
   shell 脚本
   

   文件 1：n 文件版本（快照）

   - git status
     常用，做任何git操作之前
     明确当前的仓库状态
     
   - git add readme.md
     readme.md  文件 untracted
     将一个**未被仓库跟踪**的文件，先添加到**暂存区（stage）**
     to be commited 等待提交
   - git commit -m 'wrote a readme file'
       存储到了.git仓库中，有了第一个快照
       2 insertions 新增内容两行  
   - git 配置
      git config --global user.name ""
      git config --global user.email "" 

   - repo 仓库
