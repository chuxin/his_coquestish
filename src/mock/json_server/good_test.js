function goods_list44 () {
    var goods = {
        status: 0,
        data: []
    };
    for (let i = 1; i <= 5; i++) {
        let good = {
            "productId": i,
            "productName": `小米${i}`,
            "prodcutPrice": "24" + i,
            "prodcutImg": "mi6.jpg"
        };
        goods.data.push(good);
    }

    return goods;
}

module.exports = {
    goods_list: goods_list44()
};
