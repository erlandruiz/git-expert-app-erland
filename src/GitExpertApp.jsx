import { useState } from "react";
import { AddCategory , GifGrid} from "./components";


export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newcategory) => {
    if (categories.includes(newcategory)) return;
    // console.log(newcategory);
    setCategories([newcategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <AddCategory setCategories = {setCategories}/> */}

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol> */}

     
      {
        categories.map((category) => (
          <GifGrid 
            key={category} 
            category={category} 
          />
        ))
        
      }
      
    </>
  );
};
