import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const DeleteForm = (props) => {
    const navigate = useNavigate();

    const list = [...props.rowData]
    const handleInputChange = (e, index) => {
        const { value, name } = e.target;
        list[index][name] = value;
    }

    const onTrigger = (e) => {
        e.preventDefault()
        props.handleFormDelete(list)
        navigate('/');
    }
    const invList = props.inventory;
    return (
        <Form className="home_form" onSubmit={onTrigger}>
            {list.map((row, index) => {
                return (
                    <Row>
                        <Col>
                            <Form.Label>Product Id</Form.Label>
                            <Form.Select name="id" className="mb-3" onChange={(e) => handleInputChange(e, index)}>
                                <option>Open this select menu</option>
                                {invList.map((inv) => {
                                    return (<option key={inv.id} value={inv.id}>{inv.id}</option>)
                                })}
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Quantity</Form.Label>
                                <Form.Control name="quantity" type="number" placeholder="Product Quantity" onChange={(e) => handleInputChange(e, index)} />
                            </Form.Group>
                        </Col>
                    </Row>
                )
            })}
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default DeleteForm