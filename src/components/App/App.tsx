import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Header from '../Header/Header'
import AddExpenseItemFrom from '../ExpenseTracker/ExpenseItem/AddExpenseItemFrom'

const App = () => {
  let dummy = () => {}
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path='/add'
            element={<AddExpenseItemFrom onTrue={dummy} onClose={dummy} />}
          ></Route>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
