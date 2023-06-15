import React, { useState, useEffect } from "react";
import "../assets/css/Datos2023.css";

const Nav = () => {
  return (
    <nav className="Panel-navegacion">
      <ul className="panel-navegacion-item">
        <li className="panel-navegacion-lista">Inicio</li>
        <li className="panel-navegacion-lista">Categorias</li>
        <li className="panel-navegacion-lista">Contacto</li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>Derechos de autor Yury Ramirez Edwin Pinzon &copy; 2023</p>
    </footer>
  );
};

const Datos2023 = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/divipola')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.log('La respuesta no es un array:', data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, inputValue]);
    setInputValue('');
  };

  return (
    <div className="documento">
      <Nav />
      <main className="">
        <img src="" alt="" />
      <h1 className="Regional-Salud">Regional salud</h1>
      <form className="formulario"  onSubmit={handleSubmit} >
        <input  type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Datos2023;
