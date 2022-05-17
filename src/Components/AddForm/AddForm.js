import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddForm = (props) => {
    const navigate = useNavigate();

    const onTrigger = (e) => {
        e.preventDefault()
        props.handleFormAdd(list)
        navigate('/');
    }
    const list=[...props.rowData]
    const handleInputChange =(e,index)=>{
        const {value,name}= e.target;
        list[index][name]=value;
    }
    return (
        <Form className="home_form" onSubmit={onTrigger}>
            {list.map((row,index) => {
                return (
                    <Row key={index}>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Id</Form.Label>
                                <Form.Control name="id" type="text" placeholder="Product Id"  onChange={(e) => handleInputChange(e,index)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Product Name" onChange={(e) => handleInputChange(e,index)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control name="quantity" type="number" placeholder="Quantity" onChange={(e) => handleInputChange(e,index)} />
                            </Form.Group>
                        </Col>
                    </Row>
                )
            })}

            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default AddForm