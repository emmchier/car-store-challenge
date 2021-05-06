import React from 'react';

export const FilterFormItem = ({
    showFormHeader,
    formHeader, 
    showFormLabel, 
    formForLabel,
    formTitleLabel, 
    formInputType,
    formInputClasses,
    formInputId,
    formInputPlaceholder 
}) => {
    return (
        <div class="form-group">
            {
                showFormHeader &&
                <h4>{ formHeader }</h4>
            }
            {
                showFormLabel &&
                <label for={ formForLabel }>{ formTitleLabel }</label>
            }
            <input 
                type={ formInputType } 
                class={ formInputClasses } 
                id={ formInputId } 
                placeholder={ formInputPlaceholder }
                autoComplete="off" />
        </div>
    )
}
