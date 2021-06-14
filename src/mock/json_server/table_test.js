var Mock22 = require('mockjs');

function table_list() {
    var Random = Mock22.Random;
    var data_example = Mock22.mock({
        'data|6': [{
            'id|+1': 1,
            date: Random.date('yyyy-MM-dd'),        // 这里生成的数据是一样的？？？ 我要不一样的
            name: "xxx - @cname",
            email_addr: "yyy - @email",
            evaluation: Random.cparagraph(1,3)      // 这里生成的数据是一样的？？？ 我要不一样的
        }]
    });

    return {
        "status": 0,
        "data": data_example.data
    }
}

module.exports = {
    table_list: table_list()
};
