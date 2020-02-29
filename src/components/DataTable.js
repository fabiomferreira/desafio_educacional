import React from 'react';

export default function DataTable({columns, rows}) {
  return (
    <table>
      <thead>
        <tr>
          {renderColumns(columns)}
        </tr>
      </thead>
      <tbody>
        {renderRows(rows)}
      </tbody>
    </table>
  )
}

function renderColumns(columns) {
  return columns.map((col, key) => <th key={key}>{col}</th>)
}

function renderRows(rows) {
  return rows.map(row => 
    <tr key={row.id}>
      {renderRow(row)}
    </tr>
  )
}

function renderRow(row) {
  return Object.keys(row).map(objKey => {
    if(objKey === 'id') return null;

    return (
      <td key={objKey}>{row[objKey]}</td>
    )
  })
}
