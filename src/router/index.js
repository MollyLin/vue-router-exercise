// 官方元件
import Vue from 'vue';
import VueRouter from 'vue-router';

// 自訂元件
import Home from '@/components/HelloWorld';

// 啟用
Vue.use(VueRouter);

// 匯出給 entry (main.js) 使用，定義路徑
export default new VueRouter({
    routes: [{
        name: '首頁',
        path: '/index', // 對應的虛擬路徑
        component: Home, // 對應的元件
    }]
});