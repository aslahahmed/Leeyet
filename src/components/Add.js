import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import Products from './Products'


function Add() {

  
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = productName;
        let b = description;
        let c = price;

        Products.push({id : uniqueId, productName : a, description : b, price : c});

        history("/")

    }

    return <div>
        <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
            <Form.Group className='mb-4' controlId='produc_tname'>
                <Form.Control type='text' placeholder='Enter Product Name' required onChange={(e) => setProductName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4' controlId='description'>
                <Form.Control type='text' placeholder='Enter Description' required onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='mb-4' controlId='price'>
                <Form.Control type='text' placeholder='Enter Price' required onChange={(e) => setPrice(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit' >Submit</Button>
            </Form.Group>

        </Form>
    </div>

}

export default Add
