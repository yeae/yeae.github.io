---
title: Archlinux
date: 2022-11-16 13:15:02
tags:
---
[基本安装教程](https://blog.csdn.net/takashi77/article/details/118927109)
[详细](https://arch.icekylin.online/prologue.html)

### 桌面
[Desktop environment](https://wiki.archlinux.org/title/Desktop_environment_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))


[ArchLinux安装后图形界面安装教程](https://www.viseator.com/2017/05/19/arch_setup/)
### 网络连接失败

运行dhcpcd并且设置开机启动
systemctl start dhcpcd
systemctl enable dhcpcd

### 安装vscode
git clone https://aur.archlinux.org/visual-studio-code-bin.git
cd visual-studio-code-bin
makepkg -si

arch安装时没有设置密码，安装完成后无法登录、
或者启动时添加启动参数 init=/usr/bin/bash  然后修改密码

ERROR: Running makepkg as root is not allowed as it can cause permanent, catastrophic damage to your system.
Um, the problem is exactly as the errors say. You need to give yourself write permissions on that directory, and you should not run makepkg as root.

下面介绍一些在命令模式下常用的命令：

:wq —— 保存退出
:q! —— 不保存，强制退出
dd —— 删除一行
2dd —— 删除两行
gg —— 回到文本第一行
shift + g —— 转到文本最后一行
/xxx —— 在文中搜索 xxx 内容。回车 Enter 搜索，按 n 键转到下一个
?xxx —— 反向搜索
:w   保存文件但不退出vi
:w!   强制保存，不推出vi
:wq  保存文件并退出vi
:wq! 强制保存文件，并退出vi
:q 不保存文件，退出vi
:q! 不保存文件，强制退出vi
