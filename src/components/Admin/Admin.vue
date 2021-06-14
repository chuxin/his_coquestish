<template>
    <div id="app">

        <el-container>
            <el-header class="my_header">
                <navheader></navheader>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <navmenu></navmenu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

        <el-button @click="addRow">点击新增</el-button>

        <ul>
            <li v-for="(value, key, index) in non_mock_res" :key="index">{{key}} -- {{index}} -- {{value.username}}</li>
        </ul>

        <pre>{{has_mock_res}}</pre>

    </div>
</template>

<script>
    import NavMenu from '@/components/Admin/NavMenu'
    import NavHeader from '@/components/Admin/NavHeader'

    export default {
        name: 'App',
        components: {
            'navmenu': NavMenu,
            'navheader': NavHeader
        },
        data() {
            return {
                non_mock_res:{},
                has_mock_res:{}
            }
        },
        methods: {
            getTestJson() {
                // https://api.coindesk.com/v1/bpi/currentprice.json
                this.axios.get('/static/mock/test.json').then((res) => {
                    this.non_mock_res = res;
                    console.log(res);
                });
            },
            addRow() {
                // json-server  用post方式，新增数据   有问题？？？ 新增的这条记录替换了所有历史记录
                this.axios.post('http://localhost:3000/tables', {'data': [{
                        "id": 13,
                        "date": "2021-06-14T16:00:00.000Z",
                        "name": "aaa",
                        "email_addr": "e",
                        "evaluation": "g"
                    }]}).then((res) => {
                    this.$message({
                        type:"success",
                        message:"添加信息成功"
                    })
                    console.log(333);
                    console.log(res);

                }).catch(err => {
                    console.error(err);
                });
            }
        },
        mounted() {
            // ① mock数据，方法一    最简单，没有http地址
            // this.getTestJson();

            // ② mock数据，方法二    设置http地址，用的全局安装的 json-server
            // this.axios.get('/api/user/login').then((res) => {
            //   this.has_mock_res = res;
            //   console.log(res);
            // });
            //
            // this.axios.post('/user').then((res) => {
            //   console.log(res);
            // });
            //
            // this.axios.post('/list').then((res) => {
            //   console.log(res);
            // });
            //
            // this.axios.get('http://localhost:3000/posts').then((res) => {
            //     console.log("我是json-server，接口地址是我这边提供的");
            //     console.log(res);
            // });

            // ③ mock数据，方法三     设置http地址，用的局部安装的 json-server
            // this.axios.get('http://localhost:3000/login').then((res) => {
            //     console.log(res);
            // });

        }
    }
</script>

<style>
    .el-aside {
        overflow: hidden;
    }
    .my_header {
        background-color: #409EFF;
        color: #fff;
        line-height: 60px;
    }
</style>