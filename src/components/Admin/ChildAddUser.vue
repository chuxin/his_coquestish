<template>
    <div>
        <el-dialog title="新增用户信息" :visible.sync="dialogFormVisible" :before-close="handleClose">
            <el-form ref="my_formss" :model="form" :rules="form_rules" label-width="100px">
                <el-form-item label="日期" prop="date">
                    <el-date-picker
                            v-model="form.date"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email_addr">
                    <el-input v-model="form.email_addr" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="评价" prop="evaluation">
                    <el-input v-model="form.evaluation" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="resetForm('my_formss')">取 消</el-button>
                <el-button type="primary" @click="addOneRow('my_formss')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'ChildAddUser',
    props: {
        dialogFormVisible: Boolean
    },
    data () {
        return {
            form: {
                date: '',
                name: '',
                email_addr: '',
                evaluation: '',
            },
            form_rules: {
                date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'blur' }],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                email_addr: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
                evaluation: [{ required: true, message: '请输入评价', trigger: 'blur' }]
            }
        }
    },
    computed: {
        // 定义一个临时 key， 通知父组件修改 dialogFormVisible 的值。 注意：子组件是不能修改 props 过来的值的
        dialogFormVisible__: {
            get() {
                return this.dialogFormVisible;
            },
            set (val) {
                this.$emit("on-change-dialogFormVisible");      // 通知父组件，修改 dialogFormVisible = false;
            }
        }
    },
    methods: {
        addOneRow(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("这里用json-server有问题，post提交，会替换mock里的所有数据");
                    console.log(this.form);
                    this.dialogFormVisible__ = false;
                    this.$emit('doAdding');
                    this.form  = {};        // 清空字段值
                    return false;

                    // 上面说的有问题就是这里的post， 有问题
                    this.axios.post('http://localhost:3000/tables', this.form).then(res => {
                        this.$message({
                            type:"success",
                            message:"添加信息成功"
                        });
                        this.dialogFormVisible__ = false;
                        this.$emit('doAdding');
                    })
                    this.form  = {};        // 清空字段值
                } else {
                    alert('error submit!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();     // 清空字段值
            this.dialogFormVisible__ = false;
        },
        handleClose () {
            this.$confirm('确认关闭？').then(_ => {
                this.dialogFormVisible__ = false;   // 这里不能用dialogFormVisible， 不能直接改变props中参数的值
            }).catch(_ => {
                console.log("关闭弹窗出错啦");
            });
        }
    }
}
</script>
