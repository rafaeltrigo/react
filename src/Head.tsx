import React from 'react';
// @ts-ignore
import Logo from './assets/react.svg';

const name: string = "Rafael"
const lastName: string = "Trigo"

// Function get Full Year
function Fullname() {
  return name + ' ' + lastName
}

function date() {
  return (
    <div>
      <p>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</p>
      <p>Time: {new Date().getHours()}:{new Date().getUTCMinutes()}</p>
      <p>Week :{new Date().toLocaleString('pt-BR', { weekday: 'long' })}</p>
      <p>Complete Date :{new Date().toLocaleString()}</p>
    </div>
  )
}
// Estilo do Button
const styles = {
  textAlign: "center" as const,
  fontSize:"20px",
  color: "white",
  backgroundColor: "hsl(200, 100%, 50%)",
  padding: "10px 10px",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.5s",
}

// Função Principal
export default function Header() {

  return (

    <div>
      <img src={Logo} alt="Vite" />
      <p>Name : {name}</p>
      <p>Last name Upercase: {lastName.toUpperCase()}</p>
      <p>Full Name :{Fullname()}</p>
      <hr></hr>
      <p>{date()}</p>
      <hr></hr>
      <button style={styles} type="button">Click here</button>

    </div>
  );
}