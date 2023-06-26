const { createApp, ref } = Vue;

import  TodoList  from "./TodoList.js";
import UsersTable from "./UsersTable.js";


createApp({
    components: {
        TodoList,
        UsersTable
    }
}).mount('#app');
