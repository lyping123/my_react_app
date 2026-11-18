import React, { useState, useEffect } from 'react';
import Table from './components/table.jsx';
export default function Fruits() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(fruits);
    }, []);

    const fruits = [
        { id: 1, name: 'Apple', price: '$1.00' },
        { id: 2, name: 'Banana', price: '$0.50' },
        { id: 3, name: 'Cherry', price: '$2.00' },
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