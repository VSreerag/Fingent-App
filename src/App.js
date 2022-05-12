import React, { useState, useEffect } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//Bootstrap installation

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//Components
import TableComponent from './Components/Table/Table'
import AddForm from './Components/AddForm/AddForm';
import DeleteForm from './Components/DeleteForm/DeleteForm';

function App() {
  const inventoryList = [{
    id: "1",
    name: "Shoe",
    quantity: 3
  },
  {
    id: "2",
    name: "Bag",
    quantity: 2
  }
    ,
  {
    id: "3",
    name: "Sandal",
    quantity: 4
  }                                  
  ]
  const [inventory, setInventory] = useState(inventoryList);
  const [productQuantity, setProductQuantity] = useState(0);

  //Add form

  const handleFormAdd = (receivedId, receivedName, receivedQuantity) => {
    let formData = {
      id: receivedId,
      name: receivedName,
      quantity: receivedQuantity
    }
    const selectedInventory = inventory.filter(function (el) {
      return (
        el.id === receivedId) 
    }
    );
    const unSelectedInventory = inventory.filter(function (el) {
      return (
        el.id !== receivedId) 
    }
    );
    if (selectedInventory.length === 0) {
      const list = [...inventory];
      list.push(formData)
      setInventory(list)
      alert("Product Added")
    }
    else if(selectedInventory.length > 0){
      selectedInventory[0].quantity += receivedQuantity;
      setInventory([...unSelectedInventory, ...selectedInventory])
      alert(`Product Id - ${selectedInventory[0].id} quantity increased`)
      console.log(selectedInventory[0])
    }


  }

  //Delete Form
  const handleDeleteFormSubmit = (receivedId, receivedQuantity) => {
    const unSelectedInventory = inventory.filter(function (el) {
      return (
        el.id !== receivedId)
    }
    );
    const selectedInventory = inventory.filter(function (el) {
      return (
        el.id === receivedId)
    }
    );
    if (selectedInventory[0].quantity > receivedQuantity) {
      selectedInventory[0].quantity -= receivedQuantity;
      setInventory([...unSelectedInventory, ...selectedInventory])
      alert(`Product Id - ${selectedInventory[0].id} quantity decreased`)
    }
    else if (selectedInventory[0].quantity <= receivedQuantity) {
      setInventory(unSelectedInventory)
      alert(`Product Id - ${selectedInventory[0].id} deleted`)
    }
  }
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <br />
          <h2 className='fingent'>Fingent-App</h2>
          <Row>
            <div className='home_btn'>
              <Col >
                <Link to="/add"><Button  variant="success">Add Product</Button></Link></Col>
              <Col>
                <Link to="/delete">
                  <Button variant="danger">Remove Product</Button>
                </Link></Col>
              <Col>
                <Link to="/">
                  <Button variant="info">List Product</Button></Link></Col>
            </div>
          </Row>
          <br />
          <Routes>
            <Route exact path='/' element={<TableComponent tableData={inventory} />}></Route>
            <Route exact path='/add' element={<AddForm handleFormAdd={handleFormAdd} />}></Route>
            <Route exact path='/delete' element={<DeleteForm handleFormDelete={handleDeleteFormSubmit} />}></Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
