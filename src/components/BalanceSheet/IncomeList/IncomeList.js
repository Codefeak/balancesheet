import React from 'react';

class IncomeList extends React.Component{

	sum=()=>{
		this.props.data.map(item=>{return item +=Number(item)})
	}
	render(){
		return(
			<div>
				<table>
					<tbody>
						<tr>
							<th>Description</th>
							<th>Date of Events</th>
							<th>Time of Entry</th>
							<th>Amount</th>
						</tr>
						{this.props.data.map(item=>{
							return(<tr key={Math.random()}>
										<td>{item.description}</td>
										<td>{item.date}</td>
										<td>{item.time}</td>
										<td>{item.amount}</td>
									</tr>
									)
						})}
						<tr>
							<th>Total Income</th>
							<th></th>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default IncomeList;