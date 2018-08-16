const express = require('express');
// path是node自带的模块，不需要安装
// path对象主要控制和路径相关的API
const path = require('path');
const user = require('./router/user')
const app = express();
// app.use是express“调用中间件的方法” 过滤
app.use(express.static(path.join(__dirname, "public")))

// urlencoded用来解析客户端传递的数据，格式：?loginName=dsh&password=123456, 称为查询字符串
app.use(express.urlencoded({extended:false}));
app.use(express.json());// json()用来解析JSON格式的字面对象数据

app.use(user);

app.listen(8000,function(){
    console.log("server is running ，please printf http://localhost:8000");
})