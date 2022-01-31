import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['pepe']);

    

    return (
    <div className="container" >
    <h2>GifExpertApp</h2>
    <hr/>
    {/* <button onClick={handleAdd}>Agregar</button> */}
    < AddCategory setCategories={setCategories}/>
    <>
        {categories.map((cat, i)=>{
            return (<GifGrid category={cat} key={i}/>)
        })}
    </>
    </div>
    )
}

export default GifExpertApp;