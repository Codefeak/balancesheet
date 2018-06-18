import React from 'react';
import './form.css';

const Form=(props)=>{
		return(
			<div className="input-container">
				<form action="" onSubmit={props.submit}>
			        <input  type="text" 
			                  placeholder="Description"
			                  name="description"  
			                  onChange={props.update} 
			                  />
			        <input  type="text" 
			                  placeholder = "Amount" 
			                  name ="amount"  
			                  onChange={props.update}
			                  />
			        <select onChange={props.update} name ="type" >
			            <option name="Income" >Income</option>
			            <option name="Expenses" >Expenses</option>
			        </select>
			        <input type="date" name= 'eventDate' onChange ={props.update}/>
			        <button type='Submit'>Add</button>
			        <button onClick={props.button} 
			        		className ={`view ${!props.display}`}>View BalanceSheet</button>
		        </form> 
			</div>
		)
}


export default Form;