import React, { useState, useEffect } from 'react';
import Table from './components/table.jsx';
export default function Fruits() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(fruits);
    }, []);

    const fruits = [
        { id: 1, name: 'Apple', price: '$1.00', color: 'red' },
        { id: 2, name: 'Banana', price: '$0.50', color: 'yellow' },
        { id: 3, name: 'Cherry', price: '$2.00', color: 'red' },
        { id: 4, name: 'Date', price: '$3.00', color: 'brown' },
    ];
    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Fruit Name', accessor: 'name' },
        { header: 'Price', accessor: 'price' },
    ];

    const onRemove = (item) => {
        const updatedData = tableData.filter((row) => row.id !== item.id);
        setTableData(updatedData);
    }

    return (
        <>
            <h1>Fruits List</h1>
            <Table data={tableData} columns={columns} onRemove={onRemove} />
        </>
    )
}