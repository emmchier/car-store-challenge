import React from 'react';
import { getString } from '../../strings/getString';
import { CustomBtn } from '../ui/customs/CustomBtn';

export const CarItem = ( props ) => {

    const {
        id,
        model,
        amount,
        gallery
    } = props;
    
    return (
        <div className="col-sm col-md-4">
           <div className="card">
                <img 
                    src={ getString.imagesBaseUrl + gallery[1].large } 
                    className="card-img-top" 
                    alt="imagen ilustrativa del auto" 
                />
                <div className="card-body">
                    <h2 className="card-title item__car-model">{ model }</h2>
                    <hr></hr>
                    <div className="item_car-amount-container alignX pushAside">
                        <p>{ getString.item_price_since }</p>
                        <p className="card-text">{ getString.item_currency } { amount }</p>
                    </div>
                    <hr></hr>
                    <CustomBtn 
                        btnTitle={ getString.item_btn_detail_title }
                        isHover={ false }
                        classes={ 'btn-detail' }
                        to={ `./cars/${ id }` }
                        btnIcon={ 'arrow_forward' }
                        isIconVisible={ true }
                    />
                    <p className="card-text">{ getString.item_image_description }</p>
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
