#  挂载 bucket（对象存储）
### https://cloud.tencent.com/document/product/436/6883


## 1.环境安装  

    Ubuntu
    sudo apt-get install automake autotools-dev g++ git libcurl4-gnutls-dev libfuse-dev libssl-dev libxml2-dev make pkg-config fuse

    CentOS
    sudo yum install automake gcc-c++ git libcurl-devel libxml2-devel fuse-devel make openssl-devel


## 2.安装工具
    git clone https://github.com/tencentyun/cosfs /usr/cosfs

## 3.进入到该目录，编译安装
    cd /usr/cosfs
    ./autogen.sh
    ./configure
    make
    sudo make install

## 4.配置文件
    echo <bucketname>:<SecretId>:<SecretKey> > /etc/passwd-cosfs
    chmod 640 /etc/passwd-cosfs

    例：echo topkid-1231233432:AKID8ILGzYjHMG23hGtnlX7Vi4KOGxRqg1aa:LWVJqIagbFm8IG4sNlr11Sn5DLI3dCYi > /etc/passwd-cosfs
    chmod 640 /etc/passwd-cosfs

## 5.运行工具

    cosfs your-bucketname your mount-point -ourl=cos-domain-name -odbglevel=info

    例：
    cosfs topkid-125338827 /pub -ourl=http://cos.ap-shanghai.myqcloud.com -odbglevel=info

