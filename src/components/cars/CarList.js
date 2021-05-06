import React from 'react';
import { useFetchCars } from '../../hooks/useFetchCars';
import { FilterBar } from '../ui/FilterBar';
import { CarItem } from './CarItem';

export const CarList = () => {

    const { data, loading } = useFetchCars();

    return (
        <>
            {
                loading && 'Loading...'
            }
            <h4> { data.length } VEHÍCULOS </h4>

            <FilterBar />
            
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
