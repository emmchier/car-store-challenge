import React from 'react';

import { Link } from 'react-router-dom';
import { getString } from '../../strings/getString';

export const DetailTopBar = ({ carModel }) => {

    return (
        <div className="detail__top-bar">
            <div className="container">
                <div className="detail__top-bar-content alignX">
                    <Link 
                        to="/store">
                        <span className="detail__btn-back alignX">
                            <i className="material-icons arrow-back-icon">arrow_backward</i>
                            <span className="arrow_text">{ getString.detail_top_bar_back }</span> 
                        </span>
                    </Link>
                    <span className="slash-sep">/</span> 
                    <span className="res alignX">
                        <h2 className="detail__top-bar-car-name">{ carModel }</h2>
                        <span className="slash-sep">/</span>
                        <p> { getString.detail_top_bar_send_email }</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
