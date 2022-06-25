import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Better Call Kim', 'Better Call Saul', 'Breaking Bad']);

    const addCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //setCategories(categories => [newCategory, ...categories])
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={addCategory} />

            {
                categories.map( (category) => (
                    <GifGrid 
                    key={category} 
                    category={category} />
                ))
            }

        </>
    )
}
