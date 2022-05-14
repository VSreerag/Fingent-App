import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const DeleteFIeldRows = (props) => {
    const [rows, setRows] = useState("")
    const navigate = useNavigate();

    const onFormTrigger = (e) => {
        e.preventDefault()
        props.handleRowsMultiply(rows)
        navigate('/delete');

    }
    return (
        <Form className="home_form" onSubmit={onFormTrigger}>
            <Form.Group className="mb-3">
                <Form.Label>Number of products</Form.Label>
                <Form.Control type="number" placeholder="Product number" onChange={(e) => setRows(e.target.value)} />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}

export default DeleteFIeldRows