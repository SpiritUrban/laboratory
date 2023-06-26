function App() {
    const [newTask, setNewTask] = React.useState('');
    const [taskList, setTaskList] = React.useState([]);

    const addTask = (event) => {
        event.preventDefault();
        if (newTask !== '') {
            setTaskList([...taskList, newTask]);
            setNewTask('');
        }
    };

    return (
        <div>
            <h1>Мій ToDo List</h1>
            <form onSubmit={addTask}>
                <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Введіть нове завдання" />
                <button type="submit">Додати завдання</button>
            </form>
            <ul>
                {taskList.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
