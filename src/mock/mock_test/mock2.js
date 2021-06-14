import Mock from 'mockjs'

Mock.mock('/api/user/login', {
    "status": 0,
    "msg": "成功啦",
    "my_data": {
        "id|1001-1100": 0,
        "username": "xxx - @cname",
        "email": "@email",
        "phone|1-9": 0,
        "role": 0,
        "createTime": 1524545121218
    }
});

Mock.mock('/user', 'post', {
    "status": 0,
    my_data: [
        {
            name: "张三_user",
            sex: "男_user"
        },
        {
            name: "李四_user",
            sex: "女_user"
        }
    ]
});

Mock.mock("/list", "post", () => {
    return {
        status: 0,
        my_data: [
            {
                name: "张三_list",
                sex: "男_list"
            },
            {
                name: "李四_list",
                sex: "女_list"
            }
        ]
    }
});
