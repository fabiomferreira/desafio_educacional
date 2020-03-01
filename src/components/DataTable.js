import React from 'react';
import styled from 'styled-components';

const HeaderCell = styled.th``;
const TableRow = styled.tr``;
const TableCell = styled.td``;

export default function DataTable({columns, rows, actions}) {
  function renderHeader() {
    return columns.map((col, key) => <HeaderCell key={key}>{col}</HeaderCell>)
  }

  function renderRows() {
    return rows.map(row => 
      <TableRow key={row.id}>
        {renderRow(row)}
        {!!actions.length && renderActions(row.id)}
      </TableRow>
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
      <td>
        {
          actions.map(action => 
            <button
              key={action.name + id}
              onClick={() => action.action(id)}>{action.name}
            </button>
          )
        }
      </td>
    )
  }
  return (
    <table>
      <thead>
        <tr>
          {renderHeader()}
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

