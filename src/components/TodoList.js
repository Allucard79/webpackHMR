import React from 'react';
import Todo from './Todo';
import style from './TodoList.css'

const TodoList = props => {
	const items = props.items.map(item =>
		<Todo item={item} key={item.id} remove={props.remove} />
	);
	return <ul className={style.TodoList}>{items}</ul>
}


export default TodoList;