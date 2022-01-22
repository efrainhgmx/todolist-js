import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css'; 

export const todoList = new TodoList();

//todoList.forEach( todo => crearTodoHtml( todo ));
//Esta linea es la misma que la anterior. solo si se pasa un argumento.
todoList.forEach ( crearTodoHtml );