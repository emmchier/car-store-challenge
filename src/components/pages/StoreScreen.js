import React from 'react';

import { useFetchCars } from '../../hooks/useFetchCars';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { getString } from '../../strings/getString';
import { CarList } from '../cars/CarList';
import { FilterBar } from '../filterbar/FilterBar';
import { CustomBtn } from '../ui/customs/CustomBtn';

import { mock } from '../../api/mock';
import { Loading } from '../ui/Loading';

export const StoreScreen = () => {

    const { data } = useFetchCars();

    const { isMobile } = useMediaQueries();

    return (
        <section className="store-screen">
            <div className="store__banner">
                <div className="container">
                    <h2>{ getString.store_banner_title }</h2>
                </div>
            </div>
            <div className="container">

                <div className="store__top-bar pushAside alignX">
                    <h4 className="store__vehicles"> 
                        { !data ? mock.length : data.length } { getString.store_vehicles_text }
                    </h4>
                    { 
                        isMobile && 
                        <CustomBtn 
                            btnTitle={ getString.store_btn_filter_title }
                            classes={ 'btn-filter-res' }
                            isHover={ false }
                        /> 
                    }
                </div>
                
                { !isMobile && <FilterBar /> }

                <CarList />

                <p className="store__store-footer-description">
                    { getString.store_prices_description }
                </p>

            </div>
        </section>
    )
}
