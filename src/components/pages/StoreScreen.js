import React from 'react';
import { useFetchCars } from '../../hooks/useFetchCars';
import { getString } from '../../strings/getString';
import { CarList } from '../cars/CarList';
import { FilterBar } from '../filterbar/FilterBar';

export const StoreScreen = () => {

    const { data } = useFetchCars();

    return (
        <section className="store-screen">
            <div className="store__banner">
                <div className="container">
                    <h2>{ getString.store_banner_title }</h2>
                </div>
            </div>
            <div className="container">

                <h4> { data.length } { getString.store_vehicles_text }</h4>

                <FilterBar />

                <CarList />

                <p className="store__store-footer-description">
                    { getString.store_prices_description }
                </p>

            </div>
        </section>
    )
}
