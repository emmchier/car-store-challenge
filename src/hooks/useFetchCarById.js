import { useEffect, useState } from "react";
import { getCarById } from "../api/service";

export const useFetchCarById = ( carId ) => {

    const [car, setCar] = useState({});

    useEffect( ()=> {
        getCarById(carId)
            .then( item => {
                setCar(item);
            });
    }, [carId]);

    return car;
}
