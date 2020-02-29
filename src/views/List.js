import React, {useState, useEffect} from 'react';
import DataTable from '../components/DataTable';
import Card from '../components/Card';

const columns = [
  'Nome',
  'Descrição',
  "Preço",
];

export default function List(props) {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/products',{method: 'GET'})
      .then(res => res.json())
      .then(result => setRows(result))
  })

  return (
    <Card m={1} p={1}>
      <DataTable columns={columns} rows={rows}/>
    </Card>
  )
}
