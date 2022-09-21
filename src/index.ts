// import { createApp } from 'vue';
import { defineCustomElement } from 'vue';
import App from '@/App.vue';
import '@/assets/styles/main.scss';

// const app = createApp(App)

// app.mount('#app')

customElements.define('weather-widget', defineCustomElement(App))