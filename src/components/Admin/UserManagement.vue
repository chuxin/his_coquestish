<template>
    <div>
        <el-row>
            <el-col :span="20" :push="2">
                <div>
                    <el-form ref="small_form" :inline="true" :model="small_form" >
                        <el-form-item label="查询用户信息" style="float:left;">
                            <el-input v-model="keyWord"></el-input>
                        </el-form-item>
                        <el-form-item style="float:right;">
                            <el-button type="primary" icon="el-icon-circle-plus" @click="addUserInfo">添加记录</el-button>
                        </el-form-item>
                    </el-form>
                </div>

                <div>
                    <el-table
                            :data="searchUserList(keyWord)"
                            height="400"
                            border
                            style="width: 100%">
                        <el-table-column
                                type="index"
                                label="序号"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="date"
                                label="日期"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                label="姓名"
                                width="180">
                            <template slot-scope="scope">
                                <span>{{scope.row.name}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="邮箱"
                                width="180">
                            <template slot-scope="scope">
                                <span>{{scope.row.email_addr}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="评价">
                            <template slot-scope="scope">
                                <span>{{scope.row.evaluation}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                                label="操作">
                            <template slot-scope="scope">
                                <el-button size="mini" @click="editUserInfo(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="mini" type="danger" @click="deleteUserInfo(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-col>
        </el-row>

        <ChildAddUser :dialogFormVisible="showDialogAdd" @on-change-dialogFormVisible="changeDialogFormVisible" @doAdding="getUserInfo">我是新增弹框啦啦啦</ChildAddUser>
        <ChildEditUser :dialogFormVisible="showDialogEdit" :editForm="currentRow" @on-change-dialogFormVisible="changeDialogFormVisibleEdit" @doUpdating="getUserInfo">我是编辑弹框啦啦啦</ChildEditUser>
    </div>
</template>

<script>
import ChildAddUser from './ChildAddUser'
import ChildEditUser from './ChildEditUser'

// let aa = "1980-06-03";
// console.log(new Date(aa));

export default {
    name: "UserManagement",
    data () {
        return {
            keyWord: '',
            small_form: {
                name: ''
            },
            tableData: [],
            showDialogAdd: false,
            showDialogEdit: false,
            currentRow: {}
        }
    },
    components: {
        ChildAddUser: ChildAddUser,
        ChildEditUser: ChildEditUser,
    },
    methods: {
        searchUserList(keyWord) {
            if (keyWord == '') {
                return this.tableData;
            }
            return this.tableData.filter((value, key) => {
                if (value.name.indexOf(keyWord) !== -1) {
                    return true;
                }
                return false;
            });
        },
        getUserInfo() {
            console.log("获取用户信息列表");
            this.axios.get("http://localhost:3000/tables").then((res) => {
                this.tableData = res;
            });
        },
        addUserInfo() {
            this.showDialogAdd = true;
        },
        editUserInfo(index, row) {
            this.showDialogEdit = true;
            // console.log(row);
            // console.log(Object.assign({}, row));     // 返回的对象没有 访问器属性
            this.currentRow = Object.assign({}, row);
        },
        deleteUserInfo(index, row) {
            // json-server  删除操作没成功
            this.axios.delete(`http://localhost:3000/tables/${row.id}`).then((res) => {
                this.$message({
                    type: "success",
                    message: "删除记录成功"
                });
                this.getUserInfo();
            }).catch(err => {
                console.error(err);
            });
        },
        changeDialogFormVisible (value) {
            this.showDialogAdd = value;
        },
        changeDialogFormVisibleEdit (value) {
            this.showDialogEdit = value;
        }
    },
    created() {
        this.axios.get("http://localhost:3000/tables").then((res) => {
            this.tableData = res;
            console.log(res);
        });
    }
}
</script>

<style>

</style>
