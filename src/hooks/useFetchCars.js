import { useEffect, useState } from "react";
import { getCars } from "../api/service";

export const useFetchCars = () => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        getCars()
            .then( cars => {
                setState({
                    data: cars,
                    loading: false
                });
            })
    }, []);

    return state;
}
