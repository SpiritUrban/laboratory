const { ref } = Vue;

window.TodoList = {
    template: '#todo-list-template',
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
    }
};
