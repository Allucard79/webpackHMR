import React from 'react';
import style from './TodoForm.css';
class TodoForm extends React.Component {
	constructor(){
        super();
		this.state = {
			value: ''
		};
		this.addTodo = this.addTodo.bind(this);
		this.updateInput = this.updateInput.bind(this);
	}

	addTodo (event) {
		event.preventDefault();
		this.props.addTodo(this.state.value);
		this.setState ({
			value: ''
		});
	}

	updateInput(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<form className={style.TodoForm} onSubmit={this.addTodo}>
				<input type="text" onChange={this.updateInput} value={this.state.value} placeholder="New Task" />
				<button type="submit">+</button>
			</form>
		)
	}
}

export default TodoForm;