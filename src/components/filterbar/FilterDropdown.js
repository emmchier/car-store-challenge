import React from 'react';
import { FilterFormItem } from './FilterFormItem';
import { FilterItem } from './FilterItem';
import { FilterOptionItem } from './FilterOptionItem';

export const FilterDropdown = (props) => {

    const {
        filterTitle, 
        filterHeader, 
        showHeader,
        filterForms, 
        showForms,
        alignForms,
        filterOptions, 
        showOptions,
        filterItems,
        showItems } = props;

    return (
        <div className="dropdown">

            {/* Dropdown Button */}
            <button 
                className="btn btn-secondary dropdown-toggle" 
                id="dropdownMenuButton" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false">
                { filterTitle }
            </button>

            {/* Dropdown Content */}
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
           
                {   /* header */
                    showHeader && <h4>{ filterHeader }</h4> 
                }
                {   /* forms */
                    showForms &&
                    <form class={ `filter-form ${ alignForms }` }>
                        {   
                            filterForms.map( (form, key) => (
                                <FilterFormItem
                                    key={ key }
                                    showFormHeader={ form.showFormHeader }
                                    formHeader={ form.formHeader }
                                    showFormLabel={ form.showFormLabel }
                                    formInputType={ form.formInputType }
                                    formInputClasses={ form.formInputClasses }
                                    formInputId={ form.formInputId }
                                    formInputPlaceholder={ form.formInputPlaceholder }
                                />
                            ))
                        }
                    </form>
                }
                {   /* options */
                    showOptions &&
                    filterOptions.map( (option, key) => (
                        <FilterOptionItem
                            key={ key }
                            optionInputType={ option.optionInputType }
                            optionInputId={ option.optionInputId }
                            optionLabelTitle={ option.optionLabelTitle }
                        />
                    ))
                }
                {   /* items */
                    showItems &&
                    filterItems.map( (item, key) => (
                        <FilterItem
                            key={ key }
                            itemTitle={ item.itemTitle }
                            onClick={ item.onClick }
                        />
                    ))
                }
            </div>
        </div>
    )
}
