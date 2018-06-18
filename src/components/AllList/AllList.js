import React from 'react';
import AddNew from './AddNew/AddNew';
import './AllList.css';

class AllList extends React.Component{
	// AddNew(){
	// 	let temp = [...this.state.list,this.props.data];
	// 		this.props.data.isUpdate && this.setState({list:temp})
	// 		console.log(this.props.data, this.state.list);	
	// }

	// componentDidUpdate(prevProps,prevState){
	// 	if(prevState.list.length!==this.state.list.length)
	// 	this.balance();
	// }

	render(){
	console.log(this.props.balance)

		return(
			<div className="list-container">
			<h2>Entries List</h2>
				<table>
					<tbody>
						<tr>
							<th>Description</th>
							<th>Amount</th>
							<th>Type</th>
							<th>Date of Events</th>
							<th>Time of Entry</th>
						</tr>
						<AddNew data={this.props.data}/>
						<tr>
							<th>Balance</th>
							<td>{this.props.balance}</td>
						</tr>		
					</tbody>
				</table>
			</div>
		)
	}
}

export default AllList;
