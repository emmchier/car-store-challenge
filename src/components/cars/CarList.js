import React from 'react';

import { useFetchCars } from '../../hooks/useFetchCars';
import { CarItem } from './CarItem';

import { mock } from '../../api/mock';

export const CarList = () => {

    const { data } = useFetchCars();

    console.log(data);
    
    return (
        <>
            <div className="car-list">
                <div className="row">
                    {   
                        !data 
                        ? mock.map( (car, key) => (
                            <CarItem
                                key={ key }
                                { ...car }
                            />
                        ))
                        : data.map( (car, key) => (
                            <CarItem
                                key={ key }
                                { ...car }
                                isMock={ false }
                            />
                        ))
                    }
                </div>
            </div> 
        </>
    )
}
