import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// 라우터와 부트스트랩은 꼭 설치하기
// 라우터 : npm install vue-route@4
// 부트스트랩 : npm install bootstrap

const app = createApp(App);

app.use(router);

app.mount('#app');
