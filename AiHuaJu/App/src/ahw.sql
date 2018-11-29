#设置编码方式为utf-8，删除数据库yd，如果存在，创建数据库，进入数据库
SET NAMES UTF8;
DROP DATABASE IF EXISTS yd;
CREATE DATABASE yd CHARSET=UTF8;
USE yd;

#创建用户信息表--yd_user;
CREATE TABLE yd_user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,  #用户编码
    uname VARCHAR(32),                          #用户姓名
    upwd VARCHAR(32),                           #用户密码
    email VARCHAR(64),                          #用户邮箱
    phone VARCHAR(16)                           #联系方式
);
INSERT INTO yd_user VALUES
(NULL,'dalin','123456','dalin@qq.com',15685469685),
(NULL,'doudou','123456','doudou@qq.com',13965423654),
(NULL,'meimei','123456','meimei@qq.com',18854632568),
(NULL,'feifei','123456','feifei@qq.com',13311526847);

#创建首页轮播图表：yd_index_carousel
CREATE TABLE yd_index_carousel(
    Lid INT PRIMARY KEY AUTO_INCREMENT,           #图片编码
    img VARCHAR(128),                              #图片
    title VARCHAR(64)                              #标题
);
INSERT INTO yd_index_carousel VALUES
(NULL,'http://127.0.0.1:2000/img/index1.jpg',NULL),
(NULL,'http://127.0.0.1:2000/img/index2.jpg',NULL),
(NULL,'http://127.0.0.1:2000/img/index3.jpg',NULL),
(NULL,'http://127.0.0.1:2000/img/index4.jpg',NULL),
(NULL,'http://127.0.0.1:2000/img/index5.jpg',NULL);


#创建商品类别表：yd_laptop_family
CREATE TABLE yd_laptop_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,     #商品类别编码
    fname VARCHAR(32)                        #商品类别名称
);
INSERT INTO yd_laptop_family VALUES
(NULL,'特惠'),
(NULL,'火爆热销'),
(NULL,'恋人鲜花'),
(NULL,'新品上架'),
(NULL,'生日鲜花');


#创建商品类别明细表：yd_family_child
CREATE TABLE yd_family_child(
    cid  INT PRIMARY KEY AUTO_INCREMENT,          #商品小编码
    cname  VARCHAR(32),                            #商品小名称
    fid  VARCHAR(32)                               #商品类别编码
);



#创建商品详情表：yd_laptop
CREATE TABLE yd_laptop(
    pid INT PRIMARY KEY AUTO_INCREMENT,            #商品编码/商品货号
    fid  INT,                                      #商品类别编码
    style VARCHAR(128),                            #类别
    title VARCHAR(128),                            #标题
    price DECIMAL(10,2),                           #价格
    oldprice DECIMAL(10,2),                        #折前价格
    count INT,                                     #已售
    img VARCHAR(128)
);
INSERT INTO yd_laptop VALUES
(NULL,1,'爱的宣言','折扣',168.00,215.40,53561,'http://127.0.0.1:2000/img/1_320.jpg'),
(NULL,1,'真爱如初','折扣',236.00,240.40,53561,'img/1_321.jpg'),
(NULL,1,'执子之手','折扣',188.00,215.40,53561,'img/1_322.jpg'),
(NULL,1,'玫瑰之恋','折扣',168.00,215.40,53561,'img/1_323.jpg'),
(NULL,1,'幸福听得见','折扣',166.00,215.40,53561,'img/1_324.jpg'),
(NULL,1,'往后余生','折扣',188.00,215.40,53561,'img/1_325.jpg'),
(NULL,2,'小幸运','爆款',222.00,240.40,53561,'img/1_326.jpg'),
(NULL,2,'遇见','爆款',520.00,550.40,53561,'img/1_327.jpg'),
(NULL,2,'浪漫时光','爆款',520.00,550.40,53561,'img/1_328.jpg'),
(NULL,2,'捧在手心','爆款',520.00,550.40,53561,'img/1_329.jpg'),
(NULL,2,'温暖','爆款',520.00,550.40,53561,'img/2_320.jpg'),
(NULL,2,'爱如阳光','爆款',520.00,550.40,53561,'img/2_321.jpg'),
(NULL,3,'钟爱一生','新品',229.00,294.00,18501,'img/3_320.jpg'),
(NULL,3,'与你有关','新品',249.00,319.00,12571,'img/3_321.jpg'),
(NULL,3,'浪漫之旅','新品',259.00,332.00,17031,'img/3_322.jpg'),
(NULL,3,'甜蜜蜜','新品',276.00,354.40,19852,'img/3_323.jpg'),
(NULL,3,'缘定三生','新品',199.00,236.40,23658,'img/3_324.jpg'),
(NULL,3,'浓情蜜意','新品',166.00,199.90,22658,'img/3_325.jpg'),
(NULL,4,'温馨问候','精品',188.00,220.00,36254,'img/4_320.jpg'),
(NULL,4,'浪漫香气','精品',288.00,312.88,18965,'img/4_321.jpg'),
(NULL,4,'感恩时刻','精品',256.00,288.66,25463,'img/4_322.jpg'),
(NULL,4,'携手永恒','精品',188.00,210.36,17635,'img/4_323.jpg'),
(NULL,4,'夏日柔情','精品',199.00,220.66,15364,'img/4_324.jpg'),
(NULL,4,'生日快乐','精品',288.00,320.88,22898,'img/4_325.jpg'),
(NULL,5,'永远年轻','热卖',288.00,320.88,22898,'img/5_320.jpg'),
(NULL,5,'18岁','热卖',288.00,320.88,22898,'img/5_321.jpg'),
(NULL,5,'不离不弃','热卖',288.00,320.88,22898,'img/5_322.jpg'),
(NULL,5,'魅力甜心','热卖',288.00,320.88,22898,'img/5_323.jpg'),
(NULL,5,'温馨祝福','热卖',288.00,320.88,22898,'img/5_324.jpg'),
(NULL,5,'开心丸子','热卖',288.00,320.88,22898,'img/5_325.jpg');


#创建首页商品图表：yd_index_product
CREATE TABLE yd_index_product(
    mid INT PRIMARY KEY AUTO_INCREMENT,            #编号
    img VARCHAR(128),                               #图片
    title VARCHAR(64),                              #标题
    href VARCHAR(128)
);


#创建商品图片表：yd_product_pic
CREATE TABLE yd_product_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,       #图片编号
    product_id INT,                          #所属商品编码
    zid INT,                                   #类别码
    sm  VARCHAR(128),                          #小图
    md  VARCHAR(128),                          #中图
    lg VARCHAR(128),                            #大图
    big VARCHAR(128)                            #放大镜图
);

#创建用户订单表：yd_order
CREATE TABLE yd_order(
    did INT PRIMARY KEY AUTO_INCREMENT,         #订单编号
    order_id INT,                                #订单编号
    product_id INT,                              #产品编号
    count INT                                   #购买数量
);

#创建用户购物车表：yd_shopping_cart
CREATE TABLE yd_shopping_cart(
tid INT PRIMARY KEY AUTO_INCREMENT,         #编码
user_id INT,                                 #用户编码
product_id INT,                              #商品编码
count INT,                                   #数量
is_checked bool                               #是否勾选
);
INSERT INTO yd_shopping_cart VALUES
(1,1,3,2,NULL),
(NULL,4,1,1,NULL),
(NULL,2,2,1,NULL),
(NULL,3,3,2,NULL);


#创建商品页表：yd_products
CREATE TABLE yd_products(
    sid INT PRIMARY KEY AUTO_INCREMENT,            #列表编码
    product_id INT,                                #商品编码/商品货号
    cid INT,                                        #编码
    img  VARCHAR(128),                              #图片
    sm  VARCHAR(128),                               #小图
    image VARCHAR(128),                             #鼠标移入图片
    title VARCHAR(128),                             #标题
    price VARCHAR(32),                              #价格
    href VARCHAR(128)                               #跳转路径
);

