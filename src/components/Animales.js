import React, {useEffect,useState} from 'react';
import './ObtenerInfo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { specialChars } from '@testing-library/user-event';


const Animales = ()=>{
   const [personajes, setPersonajes] = useState([]);
   const url = "https://rickandmortyapi.com/api/character";
   

   const fetchApi =() =>{
    fetch(url).then((response)=> response.json())
              .then((data)=> setPersonajes(data.results))
              .catch((error)=> console.log(error))
      console.log(personajes)

   }
  



useEffect(()=>{
  fetchApi(url)
},[])


      const style={
  color:"blueviolet"
}

const [texto, setTexto]= useState("")

    const identificar = (item) => {
   
     
     setTexto(`Localidad: ${item.location.name}` + "/"+ item.status )    

       console.log( item);
  
     
  
 
  
    }





return (


<div className='cont-padre'>

<h1 className='titulo'> Los Personajes  </h1>

{

personajes.map((item,index)=>{
    
  return <div className="container-fluid"  key={index}>

<div className=' cont-todos ' id='todos'  >

<div className='  cont-personajes ' id='personajes' >  

    
    <h1> {item.name} </h1>
  <span id='especie'>  {item.species} </span>
  <img src={item.image} />
  
<button  onClick={()=>{

const newPersonajes = [...personajes];   //copia del arreglo original que es el primer estado//
newPersonajes[index].texto = `Localidad: ${item.location.name}` + "/ "+ item.status   // Agregar el texto al objeto correspondiente
setPersonajes(newPersonajes); // Actualizar el estado con el arreglo modificado



}} > Mas Info </button>

<p style={style} > {item.texto} </p>  {/* mostrar el texto agregado */ }

</div>



</div>
  </div>
})

}
</div>



)

 

}

export default Animales;



