const jsonServer = require('json-server');
// var Mock = require('mockjs');

// 接口模拟数据
var userApi = require('./json_server/user_test');
var goodApi = require('./json_server/good_test');
var tableApi = require('./json_server/table_test');
var api_list = {
    login: userApi.login_info,
    goods: goodApi.goods_list,
    tables: tableApi.table_list
};

// 接口地址
var routes_list = {
    // 为什么下面这两个不行 ？？？
    // '/login': '/my_login',
    // '/goods': '/goodsList'
    "/user/login": "/login",
    "/goods/list": "/goodsList",
    "/tables/list": "/tablesList"
};

const port = 3000;
const server = jsonServer.create();
const router = jsonServer.router(api_list);
const middlewares = jsonServer.defaults();
const rewriters = jsonServer.rewriter(routes_list);

server.use(middlewares);

server.use((request, res, next) => {
    // 将 POST 请求转为 GET
    // request.method = 'GET';
    // if (request.method.toLowerCase() == 'post') {
    //     res.header('Content-Type', 'application/json');
    // }
    next();
});

server.use(rewriters);  // 注意：rewriters 的设置一定要在 router 设置之前
server.use(router);

server.listen(port, () => {
   console.log(`open mock server at http://localhost:${port}`);
});
