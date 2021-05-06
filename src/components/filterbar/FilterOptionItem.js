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
                class="filter-option-input form-check-input" 
                type={ optionInputType } 
                name={ optionInputId } 
                id={ optionInputId } 
                value={ optionInputId } />
            <label 
                class="filter-option-label form-check-label" 
                for={ optionInputId }>
                    { optionLabelTitle }
            </label>
        </div>
    )
}
