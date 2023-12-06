---
title: yolov5
date: 2023-07-07 12:43:22
tags:
---
### 数据集划分
安装labelimg
~ pip install labelimg -i https://pypi.tuna.tsinghua.edu.cn/simple
A：切换到上一张图片

D：切换到下一张图片

W：调出标注十字架

del ：删除标注框框

Ctrl+u：选择标注的图片文件夹

Ctrl+r：选择标注好的label标签存在的文件夹

### 获得预训练权重
https://github.com/ultralytics/yolov5/releases

### 目录结构

dataset/
│   dataset.yaml
│
└───images/
│       └────train/           train 目录存放的是训练的图片
│       │      └────1.jpg   
│       │      └────2.jpg
│       │       ...
│       └────val/             val 目录存放的是交叉验证集的图片
│   
└───labels/
        └────train/
        │      └────1.txt     txt 文件里是对应同名的 images 里的图片标注，每一行为一个标注框
        │      └────2.txt     例：0     0.88                 0.79                  0.09           0.07
        │       ...              类别  标注框中心 x 轴相对坐标  标注框中心 y 轴相对坐标  标注框相对宽度    标注框相对高度
        └────val/  

### 修改模型配置文件
由于该项目使用的是yolov5s.pt这个预训练权重，所以要使用models目录下的yolov5s.yaml文件中的相应参数（因为不同的预训练权重对应着不同的网络层数，所以用错预训练权重会报错）。同上修改data目录下的yaml文件一样，我们最好将yolov5s.yaml文件复制一份，然后将其重命名，我将其重命名为yolov5_hat.yaml。
————————————————

### 训练过程
训练自己的模型需要修改如下几个参数就可以训练了。首先将weights权重的路径填写到对应的参数里面，然后将修好好的models模型的yolov5s.yaml文件路径填写到相应的参数里面，最后将data数据的hat.yaml文件路径填写到相对于的参数里面。这几个参数就必须要修改的参数。
————————————————
    parser.add_argument('--weights', type=str, default='weights/yolov5s.pt', help='initial weights path')
    parser.add_argument('--cfg', type=str, default='models/yolov5s_hat.yaml', help='model.yaml path')
    parser.add_argument('--data', type=str, default='data/hat.yaml', help='data.yaml path')



### 可视化
tensorboard --logdir=runs/train

tensorboard --logdir=runs

# 查看
run目录下

### 推理测试
detect.py

parser.add_argument('--weights', nargs='+', type=str, default='runs/train/exp/weights/best.pt', help='model.pt path(s)')
 parser.add_argument('--source', type=str, default='000295.jpg', help='source') 
摄像头进行测试只需将路径改写为0
