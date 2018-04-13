# lrzsz 安装

## 1. 安装lrzsz

    brew install lrzsz



## 2.下载事件文件

    下载 iterm2-recv-zmodem.sh 及 iterm2-send-zmodem.sh 保存到 /usr/local/bin/


下载地址:[github下载]

[github下载]: https://github.com/mmastrac/iterm2-zmodem 

## 3. 配置iterm2

打开 iterm2 -> profiles -> open profiles -> Edit Profiles -> Advanced

找到 Triggers 选择 Edit 添加以下配置

    Regular expression: rz waiting to receive.\*\*B0100
    Action: Run Silent Coprocess
    Parameters: /usr/local/bin/iterm2-send-zmodem.sh
    Instant: checked

    Regular expression: \*\*B00000000000000
    Action: Run Silent Coprocess
    Parameters: /usr/local/bin/iterm2-recv-zmodem.sh
    Instant: checked

## 4. 重启iterm2
