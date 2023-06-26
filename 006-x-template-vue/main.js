const { createApp } = Vue;

createApp({
    components: {
        TodoList: window.TodoList,
        UsersTable: window.UsersTable
    }
}).mount('#app');
