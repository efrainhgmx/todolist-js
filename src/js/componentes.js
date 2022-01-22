import { Todo } from '../classes';

import { todoList } from '../index';

//Referencias HTML

const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');


export const crearTodoHtml = ( todo ) => {
    
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed': ''}" data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${(todo.completado) ? 'cheked' : ''}>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append( div );


    return div.firstChild;
}


//Events

txtInput.addEventListener('keyup', ( event ) => {
	
	if( event.keyCode === 13 && (txtInput.value.length)) {
		const nuevoTodo = new Todo(txtInput.value);
		todoList.nuevoTodo( nuevoTodo );

		crearTodoHtml( nuevoTodo );
		txtInput.value = "";
	}

});


divTodoList.addEventListener('click', ( event ) => {

	const nombreElemento = event.target.localName; //input, label, button;
	const todoElemento = event.target.parentElement.parentElement;
	const todoId = todoElemento.getAttribute('data-id');
console.log(divTodoList);
	if( nombreElemento.includes('input') ) {
		todoList.marcarCompletado( todoId );
		todoElemento.classList.toggle('completed');
	} else if( nombreElemento.includes('button')) {
		todoList.eliminarTodo(todoId);
	}

});

btnBorrar.addEventListener('click', () => {

	todoList.eliminarCompletados();

	for(let i = divTodoList.children.length - 1; i >= 0; i--) {
		const elemento = divTodoList.children[i];
		
		if(elemento.classList.contains('completed')) {
			divTodoList.removeChild(elemento);
		}
	}
});

ulFiltros.addEventListener('click', (event) => {
	const filtro = event.target.text;

	if(!filtro) return;

	for( const elemento of divTodoList.children ) {
		elemento.classList.remove('hidden');
		const completado = elemento.classList.contains('completed');

		switch( filtro ) {

			case 'Pendientes': 
				if( completado ) {
					elemento.classList.add('hidden');
				}
				break;
			
			case 'Completados': 
				if( !completado ) {
					elemento.classList.add('hidden');
				}
				break;
				
		}
	}
})
