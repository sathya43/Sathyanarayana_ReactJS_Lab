import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Header from '../Header/Header'
import AddExpenseItemFrom from '../ExpenseTracker/ExpenseItem/AddExpenseItemFrom'

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route
            path='/add'
            element={
              <AddExpenseItemFrom onTrue={undefined} onClose={undefined} />
            }
          ></Route>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
