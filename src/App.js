import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Toast } from 'bootstrap';
import ToastContainer from 'bootstrap'

import TableComponent from './Components/Table/Table';
import AddForm from './Components/AddForm/AddForm';
import DeleteForm from './Components/DeleteForm/DeleteForm';
import AddFieldRows from './Components/AddFieldRows/AddFieldRows';
import DeleteFIeldRows from './Components/DeleteFIeldRows/DeleteFIeldRows';
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
  const [productAddRows, setProductAddRows] = useState(1)

  const handleRowsMultiply = (receivedRows) => {
    setProductAddRows(Number(receivedRows))
  }
  // Array(x) = array of x blank elements
  let addedRows = [...Array(productAddRows)].map((el) => (
    { id: "", name: "", quantity: 0 }
  )
  )
  let deletedRows = [...Array(productAddRows)].map((el) => (
    { id: "", quantity: 0 }
  )
  )
  // Add inventory function
  const handleFormAdd = (receivedList) => {
    const lists = [...inventory];
    const newInventory = lists.forEach((li, index) => {
      receivedList.forEach((rl, i) => {
        if (li.id === rl.id) {
          lists[i]["quantity"] += Number(rl.quantity)
          receivedList.splice(i, 1)
          console.log(receivedList)
        }
        else (
          setInventory([...lists, ...receivedList,])
        )
      })
    })
    // navigate('/');
  }
  // Delete inventory function
  const handleDeleteFormSubmit = (receivedList) => {
    console.log("receivedList", receivedList)
    const invList = [...inventory]
    const unSelectedInventory = invList.forEach((element, i) => {
      receivedList.forEach((el) => {
        if (element.id === el.id) {
          invList[i]["quantity"] -= Number(el.quantity)
          console.log("invList is", invList)
          console.log("invList.Quantity is", invList[i].quantity)
          // setInventory(invList)
        }

        if (invList[i]["quantity"] <= 0) {
          alert(`${element.name} is Removed`)
          invList.splice(i, 1)
          setInventory(invList)
        }
      })
    });
  }
  return (
    <Router>
      <div className="App">
        <Container fluid>
          <br />
          <h2 className="fingent">Fingent-App</h2>
          <Row className="home_btn  ">
            <Col>
              <Link to="/add-rows"><Button variant="success">Add Product</Button></Link></Col>
            <Col>
              <Link to="/delete-rows">
                <Button variant="danger">Delete Product</Button>
              </Link></Col>
            <Col>
              <Link to="/">
                <Button variant="info">List Product</Button></Link></Col>
          </Row>
          <br />
          <Routes>
            <Route exact path='/' element={<TableComponent tableData={inventory} />}></Route>
            <Route exact path='/add-rows' element={<AddFieldRows handleRowsMultiply={handleRowsMultiply} />}></Route>
            <Route exact path='/add' element={<AddForm rowData={addedRows} handleFormAdd={handleFormAdd} />}></Route>
            <Route exact path='/delete-rows' element={<DeleteFIeldRows handleRowsMultiply={handleRowsMultiply} />}></Route>
            <Route exact path='/delete' element={<DeleteForm inventory={inventory} rowData={deletedRows} handleFormDelete={handleDeleteFormSubmit} />}></Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
