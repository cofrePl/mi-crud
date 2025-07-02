import React from 'react';
import Item from './item';

function List({ items, deleteItem, editItem, calcularApreciacion }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
          calcularApreciacion={calcularApreciacion}
        />
      ))}
    </ul>
  );
}

export default List;