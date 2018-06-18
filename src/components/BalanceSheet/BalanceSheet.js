import React from 'react';
import ExpensesList from './ExpensesList/ExpensesList';
import IncomeList from './IncomeList/IncomeList';
import './balanceSheet.css';

const BalanceSheet=(props)=>{
	
		return(
			<div className={`balance-sheet-container ${props.display}`}>
				<span onClick={props.button} >X</span>
				<div className="income-container">
					<h1>Income</h1>
					<IncomeList data ={props.incomeList}/>
				</div>
				<div className="expenses-container">
					<h1>Expenses</h1>
					<ExpensesList data={props.expensesList}/>
				</div>
				<p>Balance</p><p>{props.balance}</p>
			</div>
		)
}

export default BalanceSheet;