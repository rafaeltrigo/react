import React from 'react';
// @ts-ignore
import Logo from './assets/react.svg';

const name: string = "Rafael"
const lastName: string = "Trigo"

// Function get Full Year
function Fullname() {
  return name + ' ' + lastName
}
// Function Pegar data
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
// array
function List(){
  const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
  const listItens = fruits.map(fruta=><li>{fruta}</li>)
  return <ol>{listItens}</ol>
}
// Function with parameter
function ShowContent(valor:number){
  const show:number = valor *5
    return show

}
// Função Objetos
function ListObject({ filterById }){
  const people:any = [
    {id:1,name:"Rafael",age:42},
    {id:2,name:"Eliete",age:45},
    {id:3,name:"Gabriella",age:13}
  ]
  const filteredPeople:any = filterById !== 0 ? people.filter(e => e.id === filterById) : people;

  const peopleList:any = filteredPeople.map(e=>
    // o Key é a chave unica necessaria
  <li key={e.id1}> {e.name}- {e.age} anos</li>)
  return <ol>{peopleList}</ol>
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
export default function Example1() {

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
      <hr></hr>
      <i>Exemplo de Array</i>
      <div>{List()}</div>
      <hr></hr>
      <i>Chamando uma funcao com parametro</i>
      <div>Resultado :{ShowContent(5)}</div>
      <hr></hr>
      <h2>Lista de Pessoas</h2>
      <ListObject filterById={0} />
       <h2>Lista de Pessoas com ID 2</h2>
      {/* Filtrar por ID 2 */}
      <ListObject filterById={3} />


    </div>
  );

}