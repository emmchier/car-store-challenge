import React from 'react';

import { useParams } from 'react-router';
import { useFetchCarById } from '../../hooks/useFetchCarById';
import { getString } from '../../strings/getString';
import { DetailForm } from '../detail/DetailForm';
import { DetailSlider } from '../detail/DetailSlider';
import { DetailTopBar } from '../detail/DetailTopBar';
import { InfoItem } from '../ui/customs/InfoItem';

import TachometerIcon from './../../assets/icons/icon-tachometer.svg';
import FileIcon from './../../assets/icons/icon-file.svg';
import BranchIcon from './../../assets/icons/icon-branch.svg';
import CarIcon from './../../assets/icons/icon-car.svg';
import { mock } from '../../api/mock';
import { Link } from 'react-router-dom';

export const DetailScreen = () => {

    const { carId } = useParams(); 

    // válido con la API trayendo datos
    const car = useFetchCarById( carId );

    const {
        model,
        gallery,
        detail,
        isMock
    } = mock[carId];

    return (
        <section className="detail-screen">

            {/* <DetailTopBar carModel={ isMock ? model : car.model } /> */}
            <DetailTopBar carModel={ model } />

            <div className="container">
                <div className="row">
                    <div className="col-sm col-md-6">
                        {/* <h2 className="detail__silder-car-name">{ isMock ? detail.version_code : car.detail.version_code }</h2> */}
                        <h2 className="detail__silder-car-name">{ detail.version_code }</h2>
                        <DetailSlider 
                            // con la API trayendo datos: 
                            gallery={ gallery }
                        />
                        <hr></hr>
                        <div className="detail__slider-car-info">
                            <div className="row">
                                <div className="col-sm col-md-6">
                                    <InfoItem
                                        classes={ 'icon-mark' }
                                        icon={ TachometerIcon }
                                        // info={ isMock ? detail.characteristics.engine : car.detail.characteristics.engine }
                                        info={ detail.characteristics.engine }
                                    />
                                </div>
                                <div className="col-sm col-md-6">
                                    <InfoItem
                                        classes={ 'icon-file' }
                                        icon={ FileIcon }
                                        // info={ isMock ? detail.characteristics.warranty : car.detail.characteristics.warranty }
                                        info={ detail.characteristics.warranty }
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-md-6">
                                    <InfoItem
                                        classes={ 'icon-branch' }
                                        icon={ BranchIcon }
                                        // info={ isMock ? detail.characteristics.gas_type : car.detail.characteristics.gas_type }
                                        info={ detail.characteristics.gas_type }                              
                                    />
                                </div>
                                <div className="col-sm col-md-6">
                                    <InfoItem
                                        classes={ 'icon-car' }
                                        icon={ CarIcon }
                                        // info={ isMock ? detail.characteristics.body : car.detail.characteristics.body }
                                        info={ detail.characteristics.body }
                                    />
                                </div>
                            </div>
                        </div>
                        <hr className="detail__sep-bottom"></hr>
                        <div className="detail__bottom-actions alignX">
                            <Link
                            to={ '#!' }>
                            { getString.detail_slider_btn_data }
                            </Link>
                            <span>|</span>
                            <Link
                            to={ '#!' }>
                            { getString.detail_slider_btn_gallery }
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm col-md-6">
                        <h2 className="detail__form-header">{ getString.detail_form_title }</h2>
                        <p className="detail__form-desc">{ getString.detail_form_description }</p>
                        <DetailForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
