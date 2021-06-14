<template>
    <div>
        我是登录页
        <a href="#" @click="redirectToAdmin">登录</a>
    </div>
</template>

<script>
export default {
    name: 'loginsss',
    methods: {
        redirectToAdmin() {
            this.$router.push({
                name: 'Admin'
            });
        }
    }
}
</script>

