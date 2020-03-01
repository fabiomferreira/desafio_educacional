import React, {useState, useEffect} from 'react';
import DataTable from '../components/DataTable';
import Card from '../components/Card';
import ButtonLink from '../components/ButtonLink';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import axios from 'axios';
import {API_URL} from '../config';
import {useHistory} from 'react-router-dom';
import {useFormInput} from '../hooks';

export default function List(props) {
  const [rows, setRows] = useState([]);
  const search = useFormInput('', fetchProducts);
  const history = useHistory();
  const columns = [
    'Nome',
    "Preço",
    'Descrição',
  ];

  const actions = [
    {
      name: 'Remover',
      icon: '',
      action: (id) => {
        if (window.confirm("Deseja remover o produto?")) {
          axios.delete(`${API_URL}/products/${id}`)
            .then(res => fetchProducts())
            .catch(err => alert(err))
        }
      },
    },
    {
      name: 'Editar',
      icon: '',
      action: (id) => {
        history.push(`/form/${id}`);
      },
    },
  ];

  function fetchProducts(query) {
    axios.get(`${API_URL}/products?title=${query || ''}`)
      .then(res => setRows(res.data))
      .catch(err => alert(err))
  }

  useEffect(() => {
    fetchProducts();
  },[])

  return (
    <Card m={1} p={1}>
      <PageTitle>Produtos</PageTitle>
      <Input label="Busca" placeholder="Busca..." {...search} />
      <ButtonLink to="/form/">Novo Produto</ButtonLink>
      <DataTable columns={columns} rows={rows} actions={actions}/>
    </Card>
  )
}
