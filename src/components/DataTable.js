import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  colors,
  spacing,
  fontSize,
  borderRadius,
} from '../assets/styles';

const Table = styled.table`
  width: 100%;
  margin: ${spacing.small}
`

const HeaderCell = styled.th`
  color: ${colors.tableHeaderFont};
  padding: ${spacing.base} ${spacing.base};
  text-align: left;
  text-transform: uppercase;
  font-size: ${fontSize.label};
  font-weight: bold;
  background: ${colors.tableHeaderBg};
  &:first-child {
    color: ${colors.dark};
    border-radius: ${borderRadius} 0 0 ${borderRadius};
  }
  &:last-child {

    border-radius: 0 ${borderRadius} ${borderRadius} 0;
  }
`;
const TableCell = styled.td`
  padding: ${spacing.big} ${spacing.base};
  border-bottom: 1px solid ${colors.tableBorder};
  min-width: 100px;

  &:first-child {
    font-size: ${fontSize.title};
  }

  &:last-child {
    text-align: right;
  }
`;

const IconButton = styled.button`
  color: ${props => props.color};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export default function DataTable({columns, rows, actions}) {
  function renderHeader() {
    return columns.map((col, key) => <HeaderCell key={key}>{col}</HeaderCell>)
  }

  function renderActionsHeader() {
    return <HeaderCell />;
  }

  function renderRows() {
    return rows.map(row => 
      <tr key={row.id}>
        {renderRow(row)}
        {!!actions.length && renderActions(row.id)}
      </tr>
    )
  }

  function renderRow(row) {
    return Object.keys(row).map(objKey => {
      if(objKey === 'id') return null;

      return (
        <TableCell key={objKey}>{row[objKey]}</TableCell>
      )
    })
  }

  function renderActions(id) {
    return (
      <TableCell>
        {
          actions.map(action => 
            <IconButton
              key={action.name + id}
              onClick={() => action.action(id)}
              color={action.color}
            >
              <FontAwesomeIcon
                icon={action.icon}
              />
            </IconButton>
          )
        }
      </TableCell>
    )
  }

  return (
    <Table>
      <thead>
        <tr>
          {renderHeader()}
          {!!actions.length && renderActionsHeader()}
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
  )
}

