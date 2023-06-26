const { createApp, ref } = Vue;

const App = {
    setup() {
        const newTask = ref('');
        const taskList = ref([]);

        const addTask = () => {
            if (newTask.value !== '') {
                taskList.value.push(newTask.value);
                newTask.value = '';
            }
        };

        return { newTask, taskList, addTask };
    },
    template: `
        <div>
            <h1>Мій ToDo List</h1>
            <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Введіть нове завдання" />
            <button @click="addTask">Додати завдання</button>
            <ul>
                <li v-for="(task, index) in taskList" :key="index">{{ task }}</li>
            </ul>
        </div>
    `
};

createApp(App).mount('#app');
