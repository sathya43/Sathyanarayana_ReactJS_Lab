import React, { useEffect, useState } from 'react'
import { getItems } from '../../../services/items'
import { Spinner, Alert, Row, Col } from 'react-bootstrap'
import { IProduct } from '../../../models/IProduct'
import '../../../css/App.css'
import AddExpenseItemFrom from '../ExpenseItem/AddExpenseItemFrom'

const ExpenseItemsList = () => {
  const [items, setItems] = useState([] as IProduct[])
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState<boolean>(false)
  const [sum, setSum] = useState<number | null>(0)
  const [rahulSpent, setRahulSpent] = useState<number>(0)
  const [rameshSpent, setRameshSpent] = useState<number>(0)

  const success = () => {
    setShowForm(false)
  }

  const cancel = () => {
    setShowForm(false)
  }

  useEffect(() => {
    const helper = async () => {
      try {
        let data = await getItems()
        setItems(data)
        setSum(data.reduce((acc: any, each: IProduct) => (acc + each.price, 0)))
        calculateShare(data)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }
    helper()
  })

  const calculateShare = (data: IProduct[]) => {
    let rahulExpense = 0
    let rameshExpense = 0
    data.map((eachProduct) => {
      if (eachProduct.payeeName === 'Rahul') {
        rahulExpense += eachProduct.price
      }
      if (eachProduct.payeeName === 'Ramesh') {
        rameshExpense += eachProduct.price
      }
    })
    setRahulSpent(rahulExpense)
    setRameshSpent(rameshExpense)
    setSum(rahulExpense + rameshExpense)
  }

  return (
    <>
      {loading && <Spinner animation='border' />}
      {!loading && error && <Alert variant='danger'>{error.message}</Alert>}
      {!loading && !error && items && (
        <>
          <button id='Add-Button' onClick={() => setShowForm(true)}>
            Add
          </button>
          {showForm && (
            <div className='form'>
              <AddExpenseItemFrom onTrue={success} onClose={cancel} />
            </div>
          )}
          <div className='use-inline date header-color'>Date</div>
          <div className='use-inline header-color'>Product purchased</div>
          <div className='use-inline price header-color'>Price</div>
          <div className='use-inline header-color' style={{ width: 112 }}>
            Payee
          </div>
          {items.map((eachItem: IProduct, ind) => (
            <div key={ind}>
              <div className='use-inline date'>{eachItem.setDate}</div>
              <div className='use-inline'>{eachItem.product}</div>
              <div className='use-inline price'>{eachItem.price}</div>
              <div className='use-inline' style={{ width: 112 }}>
                {eachItem.payeeName}
              </div>
            </div>
          ))}
          <hr />
          <div className='use-inline'>Total:</div>
          <span className='use-inline total'>{sum}</span> <br />
          <div className='use-inline'>Rahul Paid:</div>
          <span className='use-inline total Rahul'>{rahulSpent}</span> <br />
          <div className='use-inline'>Ramesh Paid:</div>
          <span className='use-inline total Ramesh'>{rameshSpent}</span> <br />
          <span className='use-inline payable'>
            {rahulSpent > rameshSpent ? 'Pay Rahul' : 'Pay Ramesh'}
          </span>{' '}
          <span className='use-inline payable'>
            {Math.abs(rahulSpent - rameshSpent) / 2}
          </span>
        </>
      )}
    </>
  )
}

export default ExpenseItemsList
