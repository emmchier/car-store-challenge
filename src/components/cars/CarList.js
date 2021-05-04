import React from 'react';
import { useFetchCars } from '../../hooks/useFetchCars';
import { CarItem } from './CarItem';

export const CarList = () => {

    const { data, loading } = useFetchCars();

    return (
        <>
        {
            loading && 'Loading...'
        }
        <div className="row">
        {   
            data.map( car => (
                <CarItem
                    key={ car.id }
                    { ...car }
                />
            ))
        }
        </div>
        </>
    )
}
