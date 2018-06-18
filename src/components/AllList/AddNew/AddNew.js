import React from 'react';

const AddNew = (props)=>{
	return( 

		props.data.map(item=>{return(
									<tr key={Math.random()}>
										<td>{item.description}</td>
										<td>{item.amount}</td>
										<td>{item.type}</td>
										<td>{item.eventDate}</td>
										<td></td>
									</tr>)
		})

	)
}

export default AddNew;