import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCarById } from '../../api/service';

export const DetailScreen = () => {

    const carId = useParams();

    const [ state, setState ] = useState({});

    useEffect( ()=> {
        getCarById(carId)
            .then( car => {
                setState({
                    data: car
                });
            })
    }, []);

    console.log(state);

    return (
        <section>
            <div className="container">
                <h2>hola</h2>
            </div>
        </section>
    )
}
