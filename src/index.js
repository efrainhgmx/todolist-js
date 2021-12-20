import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css'; 
const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
console.log(tarea);

todoList.nuevoTodo( tarea );

console.log( todoList);

crearTodoHtml( tarea );