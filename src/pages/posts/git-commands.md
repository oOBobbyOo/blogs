---
title: Git Commands
date: 2023-06-25T05:00:00.000+00:00
lang: zh
duration: 15min
---

## git config

```bash
# 显示当前的Git配置
git config -l (--list)

# 设置全局用户名和邮箱
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# 设置当前仓库的用户名和邮箱
git config --local user.name "Your Name"
git config --local user.email "your@email.com"
```

## git init

```bash
# 初始化一个空的Git仓库
git init

# 新建一个目录，将其初始化为Git代码库
git init [project-name]
```

## git clone

```bash
# 克隆一个远程仓库到本地
git clone [url]

# 克隆一个远程仓库到本地，并指定本地仓库的名称
git clone [url] [local-repo-name]
```

## git add

```bash
# 添加当前目录的所有文件到暂存区
git add .

# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]
```

## git commit

```bash
# 提交暂存区中的所有文件到本地仓库
git commit -m "commit message"

# 提交暂存区中的指定文件到本地仓库
git commit [file1] [file2] ... -m "commit message"

# 提交工作区自上次commit之后的变化，直接到本地仓库
git commit -a

# 提交时显示所有diff信息
git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
git commit --amend [file1] [file2] ...
```

## git cherry-pick

```bash
# 合并指定commit到当前分支
git cherry-pick [commit]
```

## git push

```bash
# 推送本地仓库的指定分支到远程仓库
git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送本地仓库的所有分支到远程仓库
git push [remote] --all

# 推送本地仓库的指定标签到远程仓库
git push [remote] [tag]

# 推送本地仓库的所有标签到远程仓库
git push [remote] --tags

# 删除远程仓库的指定分支
git push [remote] :[branch]

# 删除远程仓库的指定标签
git push [remote] :[tag]

```

## git pull

```bash
# 取回远程仓库的变化，并与本地分支合并
git pull [remote] [branch]
```

## git branch

```bash
# 列出所有本地分支
git branch

# 列出所有远程分支
git branch -r

# 列出所有本地分支和远程分支
git branch -a

# 新建一个分支，但依然停留在当前分支
git branch [branch]

# 修改分支名称
git branch -m [old-branch] [new-branch]

# 强制修改分支名称
git branch -M [old-branch] [new-branch]

# 新建一个分支，指向指定commit
git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
git branch --track [branch] [remote/branch]

# 建立追踪关系，在现有分支与指定的远程分支之间
git branch --set-upstream [branch] [remote/branch]

# 删除分支
git branch -d [branch]

# 强制删除指定的本地分支
git branch -D [branch]

# 删除远程分支
git push origin --delete [branch]
git branch -dr [remote/branch]
```

## git checkout

```bash
# 切换到指定分支，并更新工作区
git checkout [branch]

# 新建一个分支，并切换到该分支, 保留所有的提交记录
git checkout -b [branch]

# 切换到上一个分支
git checkout -

# 创建并切换到指定的分支，删除所有的提交记录
git checkout --orphan [branch]

# 建立追踪关系，在现有分支与指定的远程分支之间
git checkout --track [remote/branch]
```

## git rm

```bash
# 删除工作区文件，并且将这次删除放入暂存区
git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
git mv [file-original] [file-renamed]
```

## git remote

```bash
# 显示所有远程仓库
git remote -v (--verbose)

# 显示某个远程仓库的信息
git remote show [remote]

# 添加远程仓库
git remote add [shortname] [url]

# 修改远程仓库的别名
git remote rename [shortname] [newname]

# 删除指定名称的远程仓库
git remote rm [shortname]

# 修改远程仓库的 URL 地址
git remote set-url [shortname] [newurl]
```

## git diff

```bash
# 显示暂存区和工作区的差异
git diff

# 显示暂存区和上一个commit的差异
git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
git diff HEAD

# 显示两次提交之间的差异
git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
git diff --shortstat "@{0 day ago}"
```

## git reset

```bash
# 回退到上一个版本
git reset --hard HEAD^

# 回退到上上一个版本
git reset --hard HEAD^^

# 回退到上100个版本
git reset --hard HEAD~100

# 回退到指定版本
git reset --hard [commit]

# 回退到上一次commit，并保存暂存区修改
git reset HEAD^ --soft

# 回退到上一次commit，并删除暂存区修改
git reset HEAD^ --hard

# 回退到上一次commit，并撤销工作区修改
git reset HEAD^ --mixed
```

## git revert

```bash
# 回退到指定版本
git revert [commit]

# 回退到上一次commit，并保存暂存区修改
git revert HEAD^ --soft

# 回退到上一次commit，并删除暂存区修改
git revert HEAD^ --hard

# 回退到上一次commit，并撤销工作区修改
git revert HEAD^ --mixed
```

## git merge

```bash
# 合并指定分支到当前分支
git merge [branch]

# 合并指定分支到当前分支，禁用Fast forward模式
git merge --no-ff -m "merge with no-ff" [branch]
```

## git rebase

```bash
# 合并指定分支到当前分支
git rebase [branch]
```

## git tag

```bash
# 列出所有tag
git tag

# 新建一个tag在当前commit
git tag [tag]

# 新建一个tag在指定commit
git tag [tag] [commit]

# 删除本地tag
git tag -d [tag]

# 删除远程tag
git push origin :refs/tags/[tagName]

# 查看tag信息
git show [tag]

# 提交指定tag
git push [remote] [tag]

# 提交所有tag
git push [remote] --tags

# 新建一个分支，指向某个tag
git checkout -b [branch] [tag]
```

## git log

```bash
# 查看提交历史
git log

# 查看提交历史，并显示每次提交发生变更的文件
git log --stat

# 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的简略的统计信息
git log --shortstat

# 查看提交历史，并显示每次提交发生变更的文件，以及每次提交的详细统计信息
git log --stat -p

# 查看提交历史，并显示每次提交的简略的统计信息
git log --shortstat --numstat

# 查看提交历史，并显示每次提交的详细统计信息
git log --stat -p --numstat

# 查看提交历史，并显示每次提交的作者和提交者
git log --pretty=format:"%h - %an, %ar : %s"

# 查看提交历史，并显示每次提交的简略的统计信息
git log --pretty=format:"%h - %s" --abbrev-commit
```
  
## git reflog

```bash
# 查看所有操作记录
git reflog

# 查看所有操作记录，并显示每次操作的简略的统计信息
git reflog --pretty=format:"%h - %s"

# 查看所有操作记录，并显示每次操作的详细统计信息
git reflog --pretty=format:"%h - %s" --abbrev-commit
```

## git stash

```bash
# 保存当前工作区的内容
git stash

# 保存当前工作区的内容，并添加备注信息
git stash save "备注信息"

# 列出所有stash
git stash list

# 恢复最近一次stash的内容
git stash apply

# 恢复指定stash的内容
git stash apply stash@{0}

# 删除最近一次stash的内容
git stash drop

# 删除指定stash的内容
git stash drop stash@{0}

# 恢复最近一次stash的内容，并删除stash内容
git stash pop

# 恢复指定stash的内容，并删除stash内容
git stash pop stash@{0}
```
