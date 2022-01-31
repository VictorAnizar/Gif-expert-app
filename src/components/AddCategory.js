import React, { useState } from "react";
import  PropTypes  from "prop-types";
const AddCategory = ({setCategories}) => {

    const [inputText, setInputText] = useState('Hola mundo');

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            (inputText !== '') ? setCategories(prev=>[...prev, inputText]) : alert("Entrada incorrecta");

        }}>
            <input 
            value={inputText}
            onChange={(e)=>{
                setInputText(e.target.value)
            }}
            
            type="text"
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;