import React from 'react';
import styled from 'styled-components';
import {
  spacing,
  fontSize,
  inputBorderRadius,
  colors,
} from '../assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${spacing.base};
`;

const StyledInput = styled.input`
  padding: ${spacing.small} ${spacing.base} ${spacing.small} ${spacing.huge};
  font-size: ${fontSize.info};
  border-radius: ${inputBorderRadius};
  border: none;
  border: 2px solid #edeef3;
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${colors.dark};
  position: absolute;
  top: 10px;
  left: 10px;
`;

export default function SearchInput(props) {
  return(
    <Wrapper>
      <Icon icon={faSearch} />
      <StyledInput {...props} placeholder="Digite sua busca..." />
    </Wrapper>
  );
}
