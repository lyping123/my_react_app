import Table from './components/table.jsx';
export default function Fish() {
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

    return (
        <>
            <h1>Fish List</h1>
            <Table data={fish} columns={columns} />
        </>
    )
}