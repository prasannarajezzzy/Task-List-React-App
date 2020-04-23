import React,{Component} from 'react';


class AddTodo extends Component{
	state={
		content:''
	}
	handleChange=(e)=>{
		this.setState({
			content:e.target.value
		})



	}
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state);
		this.props.addtodo(this.state);
		this.setState({
			content: ''
		})
	}
	render(){
		return (
			<div>
			<form onSubmit={this.handleSubmit}>
			<label>Add A task</label>
			<input type="text" onChange={this.handleChange}/>
			</form>
			</div>)
	}



}
export default AddTodo