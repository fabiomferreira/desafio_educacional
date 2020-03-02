import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DataTable from '../components/DataTable';
import Card from '../components/Card';
import ButtonLink from '../components/ButtonLink';
import PageTitle from '../components/PageTitle';
import SearchInput from '../components/SearchInput';
import {colors} from '../assets/styles';
import axios from 'axios';
import {API_URL, PUBLIC_URL} from '../config';
import {useHistory} from 'react-router-dom';
import {useFormInput} from '../hooks';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
      name: 'Editar',
      icon: faEdit,
      color: colors.info,
      action: (id) => {
        history.push(`/form/${id}`);
      },
    },
    {
      name: 'Remover',
      icon: faTimes,
      color: colors.danger,
      action: (id) => {
        if (window.confirm("Deseja remover o produto?")) {
          axios.delete(`${API_URL}/products/${id}`)
            .then(res => fetchProducts())
            .catch(err => alert(err))
        }
      },
    },
  ];

  useEffect(() => {
    document.title = 'Produtos';
    fetchProducts();
  },[])

  function fetchProducts(query) {
    axios.get(`${API_URL}/products?title=${query || ''}`)
      .then(res => setRows(res.data))
      .catch(err => console.error(err))
  }

  return (
    <Card m={1} p={1}>
      <Header>
        <PageTitle>Produtos</PageTitle>
        <ButtonLink
          to={`${PUBLIC_URL}/form/`}
        >
          Novo Produto
        </ButtonLink>
      </Header>
      <SearchInput
        {...search}
      />
      <DataTable columns={columns} rows={rows} actions={actions}/>
    </Card>
  )
}
