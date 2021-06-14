function login33(config) {
    return {
        "status": 0,
        "data": [
            {
                "id": 1,
                "title": "我是局部安装的json-server服务",
                "content": "我是内容",
                userName: "hello",
                mobile: "13888888888"
            }
        ]
    }
}

module.exports = {
    login_info: login33()
};
