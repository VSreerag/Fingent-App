import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DeleteForm = (props) => {
    const [productId, setProductId] = useState("")
    const [productQuantity, setProductQuantity] = useState("")

    const onTrigger = (e) => {
        e.preventDefault()
        props.handleFormDelete(productId, productQuantity)
    }
    return (
        <Form onSubmit={onTrigger}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Id</Form.Label>
                        <Form.Control type="text" placeholder="Product Id" onChange={(e) => setProductId(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Product Quantity" onChange={(e) => setProductQuantity(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default DeleteForm