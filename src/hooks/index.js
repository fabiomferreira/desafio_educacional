import {useState} from 'react';

function useFormInput(initialValue, callback) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e) {
    setValue(e.target.value)
    if(callback) {
      callback(e.target.value);
    }
  }

  return {
    value,
    setValue,
    onChange: handleValueChange,
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
    setValue,
    onChange: handleValueChange
  };
}

export {
  useFormInput,
  useMoneyInput,
};
