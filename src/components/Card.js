import styled from 'styled-components';
import {boxShadow, borderRadius} from '../assets/styles';

const Card = styled.div`
  box-shadow: ${boxShadow.base};
  border-radius: ${borderRadius};
  margin: ${props => `${props.m}rem` || 0};
  padding: ${props => `${props.p}rem` || 0};
  background: white;
`;

export default Card;
