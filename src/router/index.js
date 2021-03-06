// 官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

// 自訂元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu';

// 啟用
Vue.use(VueRouter);

// 匯出給 entry (main.js) 使用，定義路徑
export default new VueRouter({
    // mode: 'history' // 須配合後端
    linkActiveClass: 'active',
    routes: [{
        name: '首頁',
        path: '/index', // 對應的虛擬路徑
        component: Home, // 對應的元件
    }, {
        // name: '頁面',
        path: '/page',
        //component: Page,
        components: {
            default: Page, // 對應無使用name的router-view from app.vue
            menu: Menu, //對應到router-view的name 為menu from app.vue
        },
        children: [{
                name: 'Card 1',
                path: '',
                component: child
            },
            {
                name: 'Card 2',
                path: 'child2',
                component: child2
            },
            {
                name: 'Card 3',
                path: 'child3',
                component: child3
            }
        ]
    }]
});