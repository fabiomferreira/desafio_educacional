import React, {useEffect} from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import {API_URL, PUBLIC_URL} from '../config';
import {useFormInput, useMoneyInput} from '../hooks';

export default function Form(props) {
  const {id} = useParams();
  const title = useFormInput('');
  const price = useMoneyInput('R$ 0,00');
  const description = useFormInput('');
  const history = useHistory();

  useEffect(() => {
    if(id) {
      axios.get(`${API_URL}/products/${id}`)
        .then(res => {
          const {data} = res;
          setFormValues(data);
        })
        .catch(err => alert('Não foi possível encontrar o produto!'));
    }
  },[id])

  function setFormValues(data) {
      title.setValue(data.title);
      price.setValue(data.price);
      description.setValue(data.description);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: title.value,
      price: price.value,
      description: description.value
    };

    if(id) {
      axios.put(`${API_URL}/products/${id}`, payload)
        .then(res => history.goBack())
        .catch(err => alert(err));

      return;
    }
    axios.post(`${API_URL}/products`, payload)
      .then(res => history.goBack())
      .catch(err => alert(err));
  }

  return(
    <Card p={1} m={1}>
      <PageTitle>Novo Produto</PageTitle>
      <form onSubmit={handleSubmit}>
        <Input label="Título" {...title} />
        <Input label="Preço" {...price} />
        <Input textarea label="Descrição" {...description} />
        <ButtonLink link to={`${PUBLIC_URL}/`}>Voltar</ButtonLink>
        <Button>Salvar</Button>
      </form>
    </Card>
  )
}
