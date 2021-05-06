import React from 'react';
import { Link } from 'react-router-dom';

export const FilterItem = ({to = '/#', onClick, itemTitle}) => {
    return (
        <Link 
            className="dropdown-item" 
            to={ to }
            onClick={ onClick }>
                { itemTitle }
        </Link>
    )
}
