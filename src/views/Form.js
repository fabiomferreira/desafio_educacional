import React, {useState, useEffect} from 'react';
import Card from '../components/Card';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import {useParams} from 'react-router-dom';

export default function Form(props) {
  const {id} = useParams();
  const title = useFormInput('');
  const price = useMoneyInput('R$ 0,00');
  const description = useFormInput('');

  useEffect(() => {
    if(id) {
      // todo
    }
  })

  return(
    <Card p={1} m={1}>
      <PageTitle>Novo Produto</PageTitle>
      <form>
        <Input label="Título" {...title} />
        <Input label="Preço" {...price} />
        <Input label="Descrição" {...description} />
        <ButtonLink type="link" to="/">Voltar</ButtonLink>
        <Button>Salvar</Button>
      </form>
    </Card>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleValueChange
  };
}

function useMoneyInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    const value = e.target.value;
    const onlyNumbersValue = value.replace(/\D/g, "") || "0";
    const moneyValue = (parseFloat(onlyNumbersValue) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    setValue(moneyValue)
  }

  return {
    value,
    onChange: handleValueChange
  };
}
