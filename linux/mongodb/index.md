


## 登陆mongodb
    mongo 10.66.116.135:27017

## 创建用户
    use crm
    db.createUser({
        user: "db",
        pwd: "123456",
        roles: [ { role: "readWrite", db: "crm" } ]})

## mongodb role类型

#### 数据库用户角色（Database User Roles）：

    read：授予User只读数据的权限
    readWrite：授予User读写数据的权限
#### 数据库管理角色（Database Administration Roles）：

    dbAdmin：在当前dB中执行管理操作
    dbOwner：在当前DB中执行任意操作
    userAdmin：在当前DB中管理User
#### 备份和还原角色（Backup and Restoration Roles）：

    backup
    restore

#### 跨库角色（All-Database Roles）：

    readAnyDatabase：授予在所有数据库上读取数据的权限
    readWriteAnyDatabase：授予在所有数据库上读写数据的权限
    userAdminAnyDatabase：授予在所有数据库上管理User的权限
    dbAdminAnyDatabase：授予管理所有数据库的权限
#### 集群管理角色（Cluster Administration Roles）：

    clusterAdmin：授予管理集群的最高权限
    clusterManager：授予管理和监控集群的权限，A user with this role can access the config and local databases, which are used in sharding and replication, respectively.
    clusterMonitor：授予监控集群的权限，对监控工具具有readonly的权限
    hostManager：管理Server