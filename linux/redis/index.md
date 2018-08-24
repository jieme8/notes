# redis操作

## 1.安装redis
    yum -y install redis    //安装redis软件
    service redis start     //运行redis
    ps -ef | grep redis     //查询redis的运行进程

## 2.进入redis
    redis-cli -p 127.0.0.1 -h 6379


## 3.操作redis (https://jingyan.baidu.com/article/14bd256e245316bb6d2612ee.html)

### 1.设置一个string类型的key和value：（重复添加值会覆盖）命令：set  
    set name tom

### 2.设置一个key的值string类型的value，key值不存在则添加，key值存在则返回0：命令：setnx

    setnx name tom

### 3.设置一个键值的有效期：命令：setex #nil  表示为空，没有的意思、不存在
    setex col 5 red
    git col

### 4.设置指定key的value值的子字符串：命令：setrange
    set name aaa
    setrange name ll bbb
    get name

### 5.获取key对应的value值(nil)
    get [name]


## 查看redis连接数(connected_clients:158)
    info clients

## 获取keys
    keys *

## 使用