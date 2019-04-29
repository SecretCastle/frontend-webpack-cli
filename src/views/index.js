import '@babel/polyfill';
import Vue from 'vue';
import App from '@/pages/index';
import '@/assets/style/index';

new Vue({
	el: '#app',
	render: h => h(App)
});

// 热加载
if (module.hot) {
    module.hot.accept();
}
