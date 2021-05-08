import React from 'react';

import { Link } from 'react-router-dom';
import { getString } from '../../strings/getString';
import { CustomBtn } from '../ui/customs/CustomBtn';

import ImageCar from './../../assets/hardcode-info/hardcode-list/versa.jpeg';

export const CarItem = ( props ) => {

    const {
        id,
        model,
        amount,
        gallery,
        isMock
    } = props;
    
    return (
        <div className="col-sm col-md-4">
            <Link 
                to={ `./cars/${ id }` }
                className="card car-item">
                <img 
                    src={
                        isMock 
                        ? ImageCar
                        : getString.imagesBaseUrl + gallery[1].large 
                        } 
                    className="card-img-top" 
                    alt="imagen ilustrativa del auto" 
                />
                <div className="card-body">
                    <h2 className="card-title item__car-model">{ model }</h2>
                    <hr></hr>
                    <div className="item_car-amount-container alignX pushAside">
                        <p className="item_car-amount-title">{ getString.item_price_since }</p>
                        <p className="item_car-amount-price">{ getString.item_currency } { amount }</p>
                    </div>
                    <hr></hr>
                    <CustomBtn 
                        btnTitle={ getString.item_btn_detail_title }
                        isHover={ false }
                        to={ `./cars/${ id }` }
                        classes={ 'btn-detail' }
                        btnIcon={ 'arrow_forward' }
                        isIconVisible={ true }
                    />
                    <p className="card-text item__footer-description">{ getString.item_image_description }</p>
                </div>
            </Link>
        </div>
    )
}
