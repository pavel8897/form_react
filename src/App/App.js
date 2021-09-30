import React from 'react'
import Table from './Table'
import Form from './Form'
import './App.css'

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			users: [
				{name: 'помидор', price: '130', count: 20},
				{name: 'огурец', price: '70', count: 10},
				{name: 'картошка', price: '30', count: 40},
			], name: '', price: '', count: ''
		};
	}

	deleteItem(item){
		this.state.users.splice(item, 1)
		this.setState({users: this.state.users})
	}
	
	onChange1(e){
		this.setState({name: e.target.value})
	}

	onChange2(e){
		this.setState({price: e.target.value})
	}

	onChange3(e){
		this.setState({count: e.target.value})
	}

	addItem(){
		let item = {name: this.state.name, price: this.state.price, count: this.state.count}
		this.state.users.push(item)
		this.setState({users: this.state.users})
	}

	render() {
		let table = this.state.users.map((item, index) => {
			return <Table
				name={item.name}
				price={item.price}
				count={item.count}
				index={index}
				item={item}
				deleteItem={this.deleteItem.bind(this)}
			/>
		})

		return (
			<div>
				<table>
					<tbody>
						{table}
					</tbody>
				</table>
				<br/>				
				<Form
					onChange1={this.onChange1.bind(this)}
					onChange2={this.onChange2.bind(this)}
					onChange3={this.onChange3.bind(this)}
					addItem={this.addItem.bind(this)}
					name={this.state.name}
					price={this.state.price}
					count={this.state.count}
				/>
			</div>
		)
	}
}

export default App;