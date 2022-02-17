import React, { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {
    const initialValues = ['Dragon Ball']
    const [categories, setCategories] = useState(initialValues)
    return (
        <>
            <h2>GifExpertAPP</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            {categories.map( category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    )
}

export default GifExpertApp;