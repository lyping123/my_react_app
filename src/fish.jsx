import React, { useState, useEffect } from 'react';
import Table from './components/table.jsx';
export default function Fish() {
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        setTableData(fish);
    }, []);

    const fish = [
        { id: 1, name: 'Salmon', price: '$10.00' },
        { id: 2, name: 'Tuna', price: '$12.00' },
        { id: 3, name: 'Trout', price: '$8.00' },

    ];
    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Fish Name', accessor: 'name' },
        { header: 'Price', accessor: 'price' },

    ];

    const onRemove = (item) => {
        const updatedData = tableData.filter((row) => row.id !== item.id);
        setTableData(updatedData);
    }

    return (
        <>
            <h1>Fish List</h1>
            <Table data={tableData} columns={columns} onRemove={onRemove} />
        </>
    )
}