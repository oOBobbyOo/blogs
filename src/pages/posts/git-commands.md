---
title: Git Commands
date: 2023-06-25T05:00:00.000+00:00
lang: zh
duration: 15min
---

# git config

```bash
# 全局设置提交代码时的用户信息
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

# git add

```bash
# 添加当前目录的所有文件到暂存区
git add .

# 添加指定文件到暂存区
git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
git add [dir]

# 添加指定文件模式到暂存区
git add --patch [file1]
```

# git commit

```bash
# 提交暂存区中的文件到仓库区
git commit -m "Commit Message"
```
