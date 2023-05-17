import React, {useState,useEffect} from 'react'
import Employees from './Products'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import Products from './Products'


function Edit() {

const [productName, setProductName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
const [id, setId] = useState("")

let history = useNavigate();

var index = Employees.map(function (e) {
    return e.id
}).indexOf(id);


const handleSubmit = (e) => {
    e.preventDefault();

    let a = Products[index];
    a.productName = productName;
    a.description = description;
    a.price = price;


    history("/")

}

useEffect(() => {
    setProductName(localStorage.getItem('Product Name'))
    setDescription(localStorage.getItem('Description'))
    setPrice(localStorage.getItem('Price'))
    setId(localStorage.getItem('Id'))

}, [])


  return (
    <div>
          <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
            <Form.Group className='mb-4' controlId='product_mname'>
                <Form.Control type='text' placeholder='Enter Product Name' value={productName} required onChange={(e) => setProductName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4' controlId='description'>
                <Form.Control type='text' placeholder='Enter description' value={description} required onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4' controlId='price'>
                <Form.Control type='text' placeholder='Enter price' value={price} required onChange={(e) => setPrice(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit' >Update</Button>
            </Form.Group>

        </Form>
      
    </div>
  )
}

export default Edit
