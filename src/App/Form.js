import React from 'react'

class Form extends React.Component {
	constructor() {
		super();
	}
	
	render() {
        return (
            <div>
                <input onChange={this.props.onChange1.bind(this)} type="text" placeholder="Наименование" /><br/>
                <input onChange={this.props.onChange2.bind(this)} type="text" placeholder="Цена"/><br/>
                <input onChange={this.props.onChange3.bind(this)} type="text" placeholder="Стоимость"/><br/><br/>
                <input onClick={this.props.addItem.bind(this)} type="submit" value="addItem" />
            </div>
        )
	}
}

export default Form;