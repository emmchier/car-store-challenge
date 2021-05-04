import React, { useState } from 'react';
import { CarList } from '../cars/CarList';

export const StoreScreen = () => {

    const [ cars ] = useState( [ '' ] );

    return (
        <section>
            <div className="container">
                <h2>Store Screen</h2>
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
