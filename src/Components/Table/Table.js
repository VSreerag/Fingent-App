import React from 'react'
import Table from 'react-bootstrap/Table';

const TableComponent = ({ tableData }) => {
    const theadData = ["Product Id", "Product Name", "Quantity"];
    const tbodyData = [];
    const tbodyDataCreate = tableData.forEach((element) => {
        let item = { id: element.id, items: [element.id, element.name, element.quantity] }
        tbodyData.push(item)
    });

    return (
        <Table striped bordered hover>
            <thead onClick={() => console.log(tbodyData)}>
                <tr>
                    {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </Table>
    )
}

const TableHeadItem = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

const TableRow = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableComponent;

