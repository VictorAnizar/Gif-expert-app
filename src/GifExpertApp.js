import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['']);

    

    return (
    <>
    <h2>GifExpertApp</h2>
    <hr/>
    {/* <button onClick={handleAdd}>Agregar</button> */}
    < AddCategory setCategories={setCategories}/>
    <ul>
        {categories.map((cat, i)=>{
            return (<GifGrid category={cat} key={i}/>)
        })}
    </ul>
    </>
    )
}

export default GifExpertApp;