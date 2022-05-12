import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddForm = (props) => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState(0);
    const onTrigger =(e)=>{
        e.preventDefault()
        props.handleFormAdd(productId,productName,productQuantity)
    }
    return (
        <Form className='home_form' onSubmit={onTrigger}>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Id</Form.Label>
                        <Form.Control type="text" placeholder="Product Id" onChange={(e) => setProductId(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" placeholder="Quantity" onChange={(e) => setProductQuantity(Number(e.target.value))} />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default AddForm
