import React from 'react';
import styled from 'styled-components';

const HeaderCell = styled.th``;
const TableRow = styled.tr``;
const TableCell = styled.td``;

export default function DataTable({columns, rows, actions}) {
  return (
    <table>
      <thead>
        <tr>
          {renderHeader(columns)}
          {renderActionHeader(actions)}
        </tr>
      </thead>
      <tbody>
        {renderRows(rows, actions)}
      </tbody>
    </table>
  )
}

function renderHeader(columns) {
  return columns.map((col, key) => <HeaderCell key={key}>{col}</HeaderCell>)
}

function renderRows(rows) {
  return rows.map(row => 
    <TableRow key={row.id}>
      {renderRow(row)}
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

function renderActionHeader(actions) {
  if(actions.length) {
    return <HeaderCell></HeaderCell>
  }
}

function renderActions(actions) {
  return (
    <td>
      {
        actions.map(action => <button onClick={action.action}>{action.name}</button>)
      }
    </td>
  )
}
