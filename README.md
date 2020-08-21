#SailsLibrary 图书管理系统

## Introduction 项目介绍
This is a [Sails v1](https://sailsjs.com) application.Use mysql.
这是一个基于Sais v1的图书管理系统。使用mysql数据库。这个图书管理系统的主要功能有：图书的增删改查、用户的登录注册、图书借阅、维护图书封面、统计图书分组等。

## Run Steps 运行步骤
### 1. 安装框架
+ npm install sails -g
### 2. 运行
+ cd test02
+ sails lift

## API 接口设计
| No. | url | description 功能描述 |
| :-----|  :-----| :-----|
| 1 | POST /api/v1/book/borrow/:bookId| 根据bookId借一本图书 |
| 2 | POST /api/v1/user/login | 用户登录 |
| 3 | POST /api/v1/user/register | 用户注册 |
| 4 | POST /api/v1/book | 添加一本图书 |
| 5 | DELETE /api/v1/book/:bookId | 删除一本图书 |
| 6 | PUT /api/v1/book/:bookId | 根据bookId修改一本图书 |
| 7 | GET /api/v1/book/:bookId | 根据bookId查询一本图书 |
| 8 | GET /api/v1/book | 查询所有图书 |
| 9 | POST /api/v1/book/:bookId/cover | 添加图书封面 |
| 10 | GET /api/v1/book/:bookId/cover | 获得图书封面 |
| 11 | GET /api/v1/stats | 获得分组数据 |


## Links 参考资料

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


## Version info 版本信息

This app was originally generated on Wed Mar 11 2020 15:53:06 GMT+0800 (GMT+08:00) using Sails v1.2.3.

<!-- Internally, Sails used [`sails-generate@1.16.13`](https://github.com/balderdashy/sails-generate/tree/v1.16.13/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

