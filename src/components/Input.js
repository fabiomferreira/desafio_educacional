import React from 'react';
import styled from 'styled-components';
import {spacing, fontSize, inputBorderRadius} from '../assets/styles';

const StyledInput = styled.input`
  padding: ${spacing.small} ${spacing.base};
  font-size: ${fontSize.info};
  border-radius: ${inputBorderRadius};
  border: none;
  border: 2px solid #edeef3;
  flex-basis: ${props => props.width ? props.width * 80 : 80}%;

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
  display: flex;
`;
const LabelWrapper = styled.div`
  flex-basis: 20%;
  display: inline-block;
  margin-right: ${spacing.base};
  text-align: right;
  align-self: center;
`;
const InputLabel = styled.label`
  font-size: ${fontSize.info};
`;

export default function Input({value, onChange, label, textarea, rows, width}) {
  return(
    <InputWrapper>
      <LabelWrapper>
        <InputLabel>
          {label}
        </InputLabel>
      </LabelWrapper>
      {
        textarea ?
        <StyledTextArea
          value={value}
          onChange={onChange}
          rows={rows}
        /> :       
        <StyledInput
          value={value}
          onChange={onChange}
          width={width}
        />
      }
    </InputWrapper>
  )
}
