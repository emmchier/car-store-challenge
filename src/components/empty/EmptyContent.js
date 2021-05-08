import React from 'react';

import EmptyIcon from './../../assets/icons/icon-empty.svg';

export const EmptyContent = () => {

    return (
        <>
            <div className="row empty-container">
                <div className="col col-md-6 centerMiddle">
                    <img src={ EmptyIcon } alt="icon representing empty list" />
                </div>
                <div className="col col-md-6 centerMiddle">
                    <div className="container">
                        <h4 className="
                            animate__animated 
                            animate__fadeInUp
                            animate__faster">
                            Hubo un error
                        </h4>

                        <p 
                            className="
                                animate__animated 
                                animate__fadeInUp
                                animate__fast">
                                No están llegando los datos del servidor.
                                Intenta nuevamente más tarde.
                        </p>
                     
                    </div>
                </div>
            </div>
        </>
    )
}
