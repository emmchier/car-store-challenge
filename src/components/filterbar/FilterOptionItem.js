import React from 'react';

export const FilterOptionItem = (props) => {

    const {
        optionInputType,
        optionInputId,
        optionLabelTitle
    } = props;

    return (
        <div class="form-check">
            <input 
                className="filter-option-input form-check-input" 
                type={ optionInputType } 
                name={ optionInputId } 
                id={ optionInputId } 
                value={ optionInputId } />
            <label 
                className="filter-option-label form-check-label" 
                htmlFor={ optionInputId }>
                    { optionLabelTitle }
            </label>
        </div>
    )
}
