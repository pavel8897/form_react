import React from 'react'

class Table extends React.Component {
	constructor() {
		super();
	}
	
	render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.count}</td>
                <td>{this.props.count * this.props.price} р</td>
                <td><input type="submit" value="del" onClick={this.props.deleteItem.bind(null, this.props.index)} /></td>
            </tr>
        )
	}
}

export default Table;