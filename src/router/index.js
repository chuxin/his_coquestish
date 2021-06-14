import Vue from 'vue'
import Router from 'vue-router'
import menus from '../../config/menu-config'

Vue.use(Router)

var routes = [];
menus.forEach((item) => {
    var onePiece = {
        path: '/' + (item.componentName == 'Login' ? '' : item.componentName),
        name: item.componentName,
        component: () => import(`@/components/${item.componentName}/${item.componentName}`)
    };
    if (Array.isArray(item.children)) {
        onePiece.children = [];
        item.children.forEach((children_item) => {
            children_item.sub.forEach((sub_item) => {
                onePiece.children.push({
                    path: `${sub_item.componentName}`,
                    name: sub_item.componentName,
                    component: () => import('@/components/' + item.componentName + "/" + sub_item.componentName) // 或者写成 `@/components/${sub_item.componentName}`
                });
            });
        })
    }
    routes.push(onePiece);
});

console.log(routes);

export default new Router({
  routes: routes
})

/*
routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'AdminIndex',
        component: AdminIndex,
        children: [
            {
                path: 'product',
                name: 'ProductManage',
                component: ProductManage
            },
            {
                path: 'client',
                name: 'ClientManage',
                component: ClientManage
            }
        ]
    }
]
*/
