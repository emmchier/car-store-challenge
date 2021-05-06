import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CustomBtn = ({ onClick, btnTitle, isHover, classes, to, btnIcon, isIconVisible }) => {
    
    const [hover, setHover] = useState(true);
    
    return (
        <Link 
            className={
                hover 
                ? `btn btn-primary custom-btn pushAside hover-active ${ classes }`
                : `btn btn-primary custom-btn pushAside ${ classes }`
            }
            onMouseEnter={() => { setHover( isHover ) }}
            onClick={ onClick }
            to={ to }>
            { btnTitle }
            { isIconVisible && <i className="material-icons btn-icon"> { btnIcon } </i> }
        </Link>
    )
}
