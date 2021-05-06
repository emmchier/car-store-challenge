import { getString } from "../strings/getString";

// base url API
const BASE_URL = getString.productsBaseUrl;
const TOKEN = getString.token;

// headers
const headers = new Headers();
headers.append( 'Content-Type', 'application/json' );
headers.append( 'Accept', 'application/json' );
headers.append( 'Authorization', `Bearer ${TOKEN}` );

// get car list
export const getCars = async() => {

    const parameters = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const results = await fetch(`${ BASE_URL }/product`, parameters);
        const data = await results.json();
    
        const products = data.results.map( car => {
            return {
                id: car.id, // id
                model: car.model, // name = March
                year: car.year, // year = 2020
                amount: car.amount, // 15990.00
                currency: car.currency, // usd (dollars)
                gallery: car.gallery, // [0:{thumbnail, large, medium},1,2,3]
                detail: car.detail,
                // { characteristics: {body, engine, gas_type, warranty},
                //   colors: [{0:{hex, code, name, model_code}, 1, 2, 3, 4}]
                //   description,
                //   main_description,
                //   main_image: {thumbnail, large, medium},
                //   price: {amount, currency},
                //   version_code
                // }
                specs: car.specs //  {description, technical_details{...}}
            }
        });
        return products;
    } catch (error) {
        console.log('error get car list', error);
    }
};

// get car by id
export const getCarById = async ( carId ) => {

    const parameters = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    try {
        const result = await fetch(`${ BASE_URL }/product/${ carId }`, parameters);
        const car = await result.json();
        return {
            id: car.id,
            model: car.model,
            year: car.year,
            amount: car.amount,
            currency: car.currency,
            gallery: car.gallery,
            detail: car.detail,
            specs: car.specs
        }
        
    } catch (error) {
        console.log('error get car by id', error);
    }
};