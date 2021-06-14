module.exports = [
    {
        name: '登录页',
        componentName: 'Login'
    },
    {
        name: 'Coquettish后管首页',
        componentName: 'Admin',
        children: [
            {
                name: '布局基础',
                sub: [{
                    name: '布局111',
                    componentName: 'BasicLayoutFirst'
                }, {
                    name: '用户信息管理',
                    componentName: 'UserManagement'
                }]
            },
            {
                name: 'Form表单',
                sub: [{
                    name: '单选框',
                    componentName: 'SingleRadio'
                }, {
                    name: '多选框',
                    componentName: 'MultiCheckbox'
                }]
            },
            {
                name: '其它测试',
                sub: [{}]
            }
        ]
    }
];