import React, { useState } from 'react';
import { CarList } from '../cars/CarList';

export const StoreScreen = () => {

    const [ cars ] = useState( [ '' ] );

    return (
        <section className="store-screen">
            <div className="store__banner">
                <div className="container">
                    <h2>¿CUÁL VA A SER TU PRÓXIMO NISSAN?</h2>
                </div>
            </div>
            <div className="container">
                {
                    cars.map( car => 
                        <CarList 
                            key={ car }
                            category={ car } />
                    )
                }
            </div>
        </section>
    )
}
