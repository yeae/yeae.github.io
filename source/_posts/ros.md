---
title: ros
date: 2022-09-21 10:40:32
tags:
---

### vscode
cd xxx
sudo dpkg -i xxx.deb
sudo apt-get install -f # Install dependencies

### terminator
sudo apt install terminator

### create package
cd
mkdir test_ws/src-p
cd test_ws/src
catkin create pkg test1 roscpp #创建一个ros package 功能包 添加依赖
cd..
catkin make
source devel/setup.bash         #刷新环不境。仅限于当前终端窗口，若希望每次默认加载，需要配置到~.bashrc文件中
roscd testl                     #验证程序包是否成功编译安装，如果能跳转专到test1目录下，即为成功


catkin 编译之前需要回到工作空间目录，catkin make 在其他路径下编译不会成功。编译完成后，
一定要使用 source命令刷新环境，使得系统能够找到新生成的 ROS 可执行文件，否则将出现无法找到可执行文件等错误。

仅编译某个包：
catkin_ make -pkg ROS 包名

编译好并配置环境的package包能够使用ros文件系统工具roscd（相当于cd的改进版）找到。
rosed ROS包名 可以跳转到ros包的目录下，且输入10s包名时，支持TAB键自动补齐



### topic
catkin_make
roscore
rosrun package2 publish  让具体的文件运行起来 区别于launch
rostopic echo chatter      rosrun package^^^ 节点名称
rosrun package2 subscribe

### service
rosservice call sound[space][Tab]

### turtle
cd
roscore
rosrun turtlesim turtlesim_node 
cd ros_ws
rosrun package2 publish_turtle
rosrun package2 subscribe_turtle

https://blog.csdn.net/csdnmll/article/details/95949370

http://www.voycn.com/article/rosbiji38-xbox360shoubingkongzhiyidong

passwd -d root





