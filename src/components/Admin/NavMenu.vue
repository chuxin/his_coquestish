<template>

    <el-row class="tac">
        <el-col :span="24">
            <el-menu  router
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu v-for="item in menu.children" :index="item.name" :key="item.name">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group class="small_problem" v-for="sub_item in item.sub" :key="sub_item.componentName">
                        <el-menu-item :index="'/' + menu.componentName + '/' + sub_item.componentName" v-text="sub_item.name"></el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>

</template>

<script>
    import menu from '../../../config/menu-config'
    export default {
        data() {
            var newMenu = [];
            const rootPath = 'Admin';
            menu.forEach((value, key) => {
                if (value.componentName == rootPath) {
                    newMenu = value;
                }
            });
            return {
                menu: newMenu
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .small_problem {
        overflow: hidden;
    }
</style>