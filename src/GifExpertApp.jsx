import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpetApp = () => {

    const [ categories, setCategories ] = useState([ 'One punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory 
                // setCategories={ setCategories }
                // COMPLETE FORM 
                // onNewCategory={ (event) => onAddCategory(event) }
                onNewCategory={ onAddCategory }
            />

            {/* <p>{ categories }</p> */}

            { 
                categories.map( ( category ) => ( 
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                )) 
            }

        </>
    )
}