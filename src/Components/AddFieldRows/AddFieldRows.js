import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const AddFieldRows = (props) => {
    const [rows, setRows] = useState("")
    const navigate = useNavigate();

    const onFormTrigger =(e)=>{
        e.preventDefault()
        props.handleRowsMultiply(rows)
        navigate('/add');
        
    }
    return (
        <Form className="home_form" className="home_form" onSubmit={onFormTrigger}>
            <Form.Group className="mb-3">
                <Form.Label>Number of products</Form.Label>
                <Form.Control type="number" placeholder="Product number" onChange={(e) => setRows(e.target.value)} />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default AddFieldRows