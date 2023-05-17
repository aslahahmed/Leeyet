import React, { Fragment } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import Products from './Products';



function Home() {

    let history = useNavigate();

    const handleEdit = (id, productName, description, price) => {
        localStorage.setItem('Product Name', productName)
        localStorage.setItem('Descripton', description)
        localStorage.setItem('Price', price)
        localStorage.setItem('Id', id)

    }

    const handleDelete = (id) => {
        var index = Products.map(function (e) {
            return e.id
        }).indexOf(id);

        Products.splice(index,1);

        history('/');
    }

    return (
        <Fragment>
            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>
                                <h5>Name</h5>
                            </th>
                            <th>
                                <h5>Description</h5>
                            </th>
                            <th>
                                <h5>Price</h5>
                            </th>
                            <th>
                                <h5>Action</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Products && Products.length > 0
                                ?
                                Products.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.productName}
                                            </td>
                                            <td>
                                                {item.description}
                                            </td>
                                            <td>
                                                {item.price}
                                            </td>
                                            <td>
                                                <Link to={'/edit'}>
                                                <Button onClick={() => handleEdit(item.id, item.productName, item.description, item.price)}>Edit</Button>
                                                </Link>
                                                &nbsp;
                                                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                                

                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "no data available"
                        }

                    </tbody>

                </Table>
                <br></br>
                <Link className='d-grid gp-2 ' to='/create'>
                        <Button size='lg'>Create</Button>
                </Link>
            </div>

        </Fragment>
    )
}

export default Home
