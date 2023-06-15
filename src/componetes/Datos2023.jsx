import React, { useState } from "react";
import "../assets/css/Datos2023.css"

const Datos2023 = ()=>
{
    const [codDepartament,nomDepar,SUCRE,nomMuni,tipo,Municipio]= useState([]);
    fetch ('https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/divipola')
    .then (Response=> Response.json())
    .then (data=> console.log(data))
    .catch(Error=> console.log(Error))

}
export default Datos2023;
