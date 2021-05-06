import React from 'react';

export const FilterSelectItem = (props) => {

    const {
        isSelected,
        selectItemTitle,
        selectValue
    } = props;

    return (
        <>
            {
                isSelected
                ? <option selected>{ selectItemTitle }</option>
                : <option value={ selectValue }>{ selectItemTitle }</option>
            }       
        </>
    )
}
