import React, { Component } from 'react';
import Form from './components/Form/Form';
import AllList from './components/AllList/AllList';
import BalanceSheet from './components/BalanceSheet/BalanceSheet';


import './App.css';

class App extends Component {
	state={
          name:"",
          description:"",
          amount:"",
          type:"Income",
          eventDate:"",
          isUpdate:false,
          IncomeList:[],
          ExpensesList:[],
          List:[],
          balance:0,
          display:false,
		}

	handleSubmit=(e)=>{
	e.preventDefault();
	this.setState({isUpdate:true});	
	this.createList();
 	}

 	componentDidUpdate(prevProps, prevState){
		if(this.state.List.length!==prevState.List.length){
			this.balance();
		}
 	}

 	createList=()=>{
 		const it={};
		it.amount=this.state.amount;
		it.description = this.state.description;
		it.type = this.state.type;
		it.eventDate = this.state.eventDate;
		this.setState({List:[...this.state.List].concat(it)});
		this.state.type ==='Income' 
		? this.setState({IncomeList:[...this.state.IncomeList].concat(it)})
		: this.state.type === 'Expenses' && this.setState({ExpensesList:[...this.state.ExpensesList].concat(it)});
 	}

 	balance=()=>{
 		[...this.state.IncomeList].filter(item=>{
 			let sum = this.state.balance;
			return this.setState({balance: sum+=Number(item.amount)})
 		});
 		[...this.state.ExpensesList].filter(item=>{
 			let difference = this.state.balance;
 			return this.setState({balance:difference-=Number(item.amount)})
 		})
 	}


  	updateInput=(e)=>{
	    this.setState({[e.target.name]:e.target.value});

  	}

  	viewBalanceSheet=(e)=>{
		e.preventDefault();
  		this.setState({display:this.state.display===false && true})
  	}
  
  	render() {
    	return (
	      <div className="App">
	      <h1>BalanceSheet Application</h1>
	        <Form submit={this.handleSubmit} 
	        	update ={this.updateInput}
	        	button={this.viewBalanceSheet}
	        	display = {this.state.display}
	        	/>
	        <AllList 
	        	data={this.state.List} 
	        	balance={this.state.balance}
	        	/>
	        <BalanceSheet 
	        	data={this.state.List}
	        	incomeList ={this.state.IncomeList}
	        	expensesList = {this.state.ExpensesList}
	        	button={this.viewBalanceSheet}
	        	balance={this.state.balance}
	        	display = {this.state.display}
	        	/>
	      </div>
    	);
  	}
}

export default App;
