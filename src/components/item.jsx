import React from 'react';

function Item({ item, deleteItem, editItem, calcularApreciacion }) {
  return (
    <div style={styles.card}>
      <h3>{item.nombre}</h3>
      <p><strong>Asignatura:</strong> {item.asignatura}</p>
      <p><strong>Promedio:</strong> {item.promedio}</p>
      <p><strong>Apreciación:</strong> <em>{calcularApreciacion(item.promedio)}</em></p>
      <div style={styles.botones}>
        <button onClick={() => editItem(item)}>Editar</button>
        <button onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: '#ecf0f1',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  botones: {
    marginTop: '0.5rem',
    display: 'flex',
    gap: '0.5rem'
  }
};

export default Item;