import React from 'react';
import { useFetchGifs } from './../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    

    const { data, loading } = useFetchGifs(category)
    
 

    return (
    <div>
        <h3>{ category }</h3>
        {
            loading && 'Cargando...'
        }
        {
            data.map( img => (
                <GifGridItem 
                    key={img.id}
                    { ...img }
                />
            ) )
        }
    </div>
    );
};

export default GifGrid;
