import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors, spacing, borderRadius, fontSize} from '../assets/styles';

const ButtonLink = styled(Link)`
  background: ${props => props.link ? 'white' : colors.success};
  padding: ${spacing.medium} ${spacing.base};
  border: none;
  font-weight: bold;
  color: ${props => props.link ? colors.grey : 'white'};
  border-radius: ${borderRadius};
  font-size: ${fontSize.info};

  &:hover {
    filter: contrast(0.9); 
  }
`;

export default ButtonLink;
