import React, { Component } from 'react';

/* Arrow function defined with the name "TableHead" */
const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Precos</th>
        <th></th>
      </tr>
    </thead>
  )
}

const TableBody = props => { /* Note that instead of () it receives "props" */
  const linhas = props.autores.map((linha, index) => {
    /* Each element must have an unique key */
    return (
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td><button onClick= { () => { props.removeAutor(index) }} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
      </tr>
    )
  })

  return (
    <tbody>
      { linhas }
    </tbody>
  )
}

class Tabela extends Component {
  render() {
    const { autores, removeAutor } = this.props; /* Destructure (ES6) */

    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody autores = { autores } removeAutor = { removeAutor } />
      </table>
    )
  }
}

export default Tabela
