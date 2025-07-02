import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [form, setForm] = useState({
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  useEffect(() => {
    if (itemToEdit) {
      setForm({
        nombre: itemToEdit.nombre,
        asignatura: itemToEdit.asignatura,
        promedio: itemToEdit.promedio
      });
    } else {
      setForm({ nombre: '', asignatura: '', promedio: '' });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.nombre && form.asignatura && form.promedio) {
      addOrUpdateItem(form);
      setForm({ nombre: '', asignatura: '', promedio: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
      />
      <input
        name="asignatura"
        placeholder="Asignatura"
        value={form.asignatura}
        onChange={handleChange}
      />
      <input
        name="promedio"
        type="number"
        placeholder="Promedio"
        value={form.promedio}
        onChange={handleChange}
      />
      <button type="submit">
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;
