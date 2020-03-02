import styled from 'styled-components';
import {colors, spacing, borderRadius, fontSize} from '../assets/styles';

const Button = styled.button`
  background: ${props => props.link ? 'white' : colors.success};
  padding: ${spacing.medium} ${spacing.base};
  border: none;
  font-weight: bold;
  color: ${props => props.link ? colors.grey : 'white'};
  border-radius: ${borderRadius};
  font-size: ${fontSize.info};
  cursor: pointer;

  &:hover {
    filter: contrast(0.9); 
  }
`;

export default Button;


