import React from 'react';
import { useParams } from 'react-router';
import { useFetchCarById } from '../../hooks/useFetchCarById';

export const DetailScreen = () => {

    const { carId } = useParams(); 

    const car = useFetchCarById( carId );

    const { 
        id,
        model,
        year,
        amount,
        currency,
        gallery,
        detail,
        specs
     } = car;

    

    const imageBaseUrl = 'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/';

    if (!detail) {
        return <section>cargando</section>;
    }

    console.log(detail);

    return (
        <section>
            <div className="container">
              
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                {/* <img src={ `${imageBaseUrl + detail.main_image.thumbnail}` } alt="imagen ilustrativa del auto" /> */}

                <p> { detail.main_description } </p>
                <p> { model } </p>
                <p> { year } </p>
                <p> { amount } </p>
                <p> { currency } </p>
                <p> { detail.main_description } </p>
                <p> { detail.description } </p>
                <p> { detail.price.amount } </p>
                <p> { detail.version_code } </p>
              
                
            </div>
        </section>
    )
}
