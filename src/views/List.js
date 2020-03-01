import React, {useState, useEffect} from 'react';
import DataTable from '../components/DataTable';
import Card from '../components/Card';
import ButtonLink from '../components/ButtonLink';
import PageTitle from '../components/PageTitle';
import {API_URL} from '../config';

const columns = [
  'Nome',
  "Preço",
  'Descrição',
];

const actions = [
  {
    name: 'Remover',
    icon: '',
    action: () => {

    }
  }
]

export default function List(props) {
  const [rows, setRows] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/products`,{method: 'GET'})
      .then(res => res.json())
      .then(result => setRows(result))
  })

  return (
    <Card m={1} p={1}>
      <PageTitle>Produtos</PageTitle>
      <ButtonLink to="/form/">Novo Produto</ButtonLink>
      <DataTable columns={columns} rows={rows} actions={actions}/>
    </Card>
  )
}
