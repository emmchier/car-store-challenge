import React from 'react';
import { Link } from 'react-router-dom';

export const CarItem = ( props ) => {

    const {
        id,
        model,
        year,
        amount,
        currency,
        gallery,
        detail,
        specs
    } = props;

    const imageBaseUrl = 'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/';

    return (
        <div className="col-sm col-md-4">
           <div className="card">
                <img src={ `${imageBaseUrl + detail.main_image.thumbnail}` } className="card-img-top" alt="imagen ilustrativa del auto" />
                <div className="card-body">
                    <h5 className="card-title">{ model }</h5>
                    <p className="card-text">{ detail.main_description }</p>
                    <Link to={ `./cars/${ id }` } className="btn btn-primary">VER DETALLES DEL MODELO</Link>
                </div>
            </div>
        </div>
    )
}

// carId: car.id, // id
// carModel: car.model, // name = March
// carYear: car.year, // year = 2020
// carAmount: car.amount, // 15990.00
// carCurrency: car.currency, // usd (dollars)
// carGallery: car.gallery, // [0:{thumbnail, large, medium},1,2,3]
// carDetail: car.detail,
// // { characteristics: {body, engine, gas_type, warranty},
// //   colors: [{0:{hex, code, name, model_code}, 1, 2, 3, 4}]
// //   description,
// //   main_description,
// //   main_image: {thumbnail, large, medium},
// //   price: {amount, currency},
// //   version_code
// // }
// carSpecs: car.specs //  {description, technical_details{...}}
