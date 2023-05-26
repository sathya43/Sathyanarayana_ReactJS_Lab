import React, { useState } from 'react'
import { postItem } from '../../../services/items'
import { useNavigate } from 'react-router-dom'

type Props = {
  onTrue: any
  onClose: any
}

const AddExpenseItemFrom = ({ onTrue, onClose }: Props) => {
  const [payeeName, setPayeeName] = useState('')
  const [product, setProductName] = useState('')
  const [price, setPriceValue] = useState(0)
  const [setDate, setSetDateValue] = useState(getCurrentDate())
  const navigate = useNavigate()

  function getCurrentDate() {
    let today = new Date()
    return `${today.getFullYear}- ${('0' + today.getMonth + 1).slice(-2)}-${(
      '0' +
      today.getDate +
      1
    ).slice(-2)}`
  }

  function setPayee(event: React.ChangeEvent<HTMLSelectElement>) {
    setPayeeName(event.target.value)
  }

  function setProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setProductName(event.target.value)
  }

  function setPrice(event: React.ChangeEvent<HTMLInputElement>) {
    setPriceValue(parseInt(event.target.value))
  }

  function setDateInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSetDateValue(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const finalItem = { payeeName, product, price, setDate }
    postItem(finalItem)
    onTrue()
    navigate('/')
  }

  function handleCancel() {
    onClose()
    navigate('/')
  }

  return (
    <>
      <section>
        <header>
          <h1>Add New Item</h1>
          <p>Read the below instructions before proceeding: </p>
          <br />
          Make sure you fill all the details where * is marked
        </header>
        <form onSubmit={handleSubmit}>
          <article>
            <p>Name</p>
            <select
              name='name'
              id='name'
              required
              value={payeeName}
              onChange={setPayee}
            >
              <option value='choose' defaultChecked>
                Choose
              </option>
              <option value='Rahul'>Rahul</option>
              <option value='Ramesh'>Ramesh</option>
            </select>
          </article>
          <article>
            <p>Product</p>
            <input
              type='text'
              name='product'
              id='product'
              onChange={setProduct}
              required
              value={product}
            />
          </article>
          <article>
            <p>Price</p>
            <input
              type='number'
              name='price'
              id='price'
              onChange={setPrice}
              required
              value={price}
            />
          </article>
          <article>
            <p>Date</p>
            <input
              type='date'
              name='date'
              id='date'
              onChange={setDateInput}
              required
              value={setDate}
            />
          </article>

          <article>
            <button className='form-button' onClick={handleCancel}>
              Close
            </button>
            <button className='form-button' onSubmit={onTrue}>
              Submit
            </button>
          </article>
        </form>
      </section>
    </>
  )
}

export default AddExpenseItemFrom
