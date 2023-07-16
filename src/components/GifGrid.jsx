

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

import PropTypes from 'prop-types';





export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
  console.log({images, isLoading})



    

  return (
    <>
    <h3>{category}</h3>

    {
      isLoading && (<h2>Cargando..</h2>)
     
    }
    




    <div className="card-grid">
      {
        // images.map((image)=>(
        //  <GifItem 
        //  key={image.id}
        //  title= {image.title}
        //  url={image.url}/>
        // )

        images.map((image)=>(
          <GifItem 
            key={image.id}
            {...image}
          
          />
        ))
        
        
      }
   
     
      
    </div>
   
    {/* <button onClick={()=> setCounter(counter+1)}>+1</button> */}


    {/* <p>Hola Erland</p> */}
    {/* {

    arrayNumeros.map(
        (numero) => (
        <p key = {numero}>{numero} </p>))
    
    } */}
    </>
  )
}

GifGrid.propTypes ={
  category: PropTypes.string.isRequired
}
