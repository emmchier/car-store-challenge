import React from 'react';

export const InfoItem = ({ classes, icon, info }) => {
    return (
        <div className={ `info-item alignX ${ classes }` }>
            <img 
                className="info-item__icon"
                src={ icon }
                alt="show a tachometer icon"
            />
            <p className="info-item__info">
                { info }
            </p>
        </div>
    )
}
