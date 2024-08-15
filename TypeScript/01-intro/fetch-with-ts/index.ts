import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/todos/5`;

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(id, finished, title);

})

const logTodo = (id, completed, title ) => {
    
    console.log(`
        TODO ID: ${id}
        WHAT TO DO? ${title}
        IS IT FINISHED? ${completed}
    `)

}