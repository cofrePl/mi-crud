import React, { useState, useEffect } from 'react';
import Form from './components/form';
import List from './components/list';
import './App.css';

function App() {
  const [alumnos, setAlumnos] = useState(() => {
    const data = localStorage.getItem('alumnos');
    return data ? JSON.parse(data) : [];
  });

  const [alumnoAEditar, setAlumnoAEditar] = useState(null);

  // Guarda los alumnos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  // Calcula la escala de apreciación según el promedio
  const calcularApreciacion = (promedio) => {
    const nota = parseFloat(promedio);
    if (nota >= 1 && nota <= 3.9) return 'Deficiente';
    if (nota >= 4.0 && nota <= 5.5) return 'Con mejora';
    if (nota >= 5.6 && nota <= 6.4) return 'Buen trabajo';
    if (nota >= 6.5 && nota <= 7.0) return 'Destacado';

  return 'Promedio fuera de rango';
};
    

  // Agrega o actualiza un alumno
  const addOrUpdateItem = (item) => {
    if (alumnoAEditar) {
      // Editar
      const nuevos = alumnos.map((al) =>
        al.id === alumnoAEditar.id ? { ...item, id: alumnoAEditar.id } : al
      );
      setAlumnos(nuevos);
      setAlumnoAEditar(null);
    } else {
      // Agregar
      const nuevo = { ...item, id: Date.now() };
      setAlumnos([...alumnos, nuevo]);
    }
  };

  // Elimina un alumno por su id
  const deleteItem = (id) => {
    const filtrados = alumnos.filter((al) => al.id !== id);
    setAlumnos(filtrados);
  };

  // Cargar alumno en modo edición
  const editItem = (alumno) => {
    setAlumnoAEditar(alumno);
  };

  return (
    <div className="App">
      <h1>Evaluación de Alumnos</h1>
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={alumnoAEditar} />
      <List
        items={alumnos}
        deleteItem={deleteItem}
        editItem={editItem}
        calcularApreciacion={calcularApreciacion}
      />
    </div>
  );
}




export default App;