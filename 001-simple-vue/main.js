const { createApp, ref } = Vue;

const App = {
    setup() {
        const msg = ref('Привіт, світе!');
        return { msg };
    },
    template: `
        <div>
            <h1>{{ msg }}</h1>
        </div>
    `
}

createApp(App).mount('#app');