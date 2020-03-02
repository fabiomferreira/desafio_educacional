import React from 'react';
import styled from 'styled-components';
import {spacing, fontSize, inputBorderRadius} from '../assets/styles';

const StyledInput = styled.input`
  padding: ${spacing.small} ${spacing.base};
  font-size: ${fontSize.info};
  border-radius: ${inputBorderRadius};
  border: none;
  border: 2px solid #edeef3;
`;
const StyledTextArea = styled.textarea`
  padding: ${spacing.small} ${spacing.base};
  font-size: ${fontSize.info};
  border-radius: ${inputBorderRadius};
  border: none;
  border: 2px solid #edeef3;
`;
const InputWrapper = styled.div`
  padding: ${spacing.small};
  width: 100%;
`;
const LabelWrapper = styled.div`
  width: 100px;
  display: inline-block;
`;
const InputLabel = styled.label`
`;

export default function Input({value, onChange, label, textarea}) {
  return(
    <InputWrapper>
      <LabelWrapper>
        <InputLabel>
          {label}
        </InputLabel>
      </LabelWrapper>
      {
        textarea ?
        <StyledTextArea value={value} onChange={onChange} /> :       
        <StyledInput value={value} onChange={onChange} />
      }
    </InputWrapper>
  )
}
