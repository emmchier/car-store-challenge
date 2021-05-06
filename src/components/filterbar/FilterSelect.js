import React from 'react';
import { FilterSelectItem } from './FilterSelectItem';

export const FilterSelect = ({ filterSelects }) => {

    return (
        <select class="filter-selects custom-select my-1 mr-sm-2">
            {   
                filterSelects.map( (select, key) => (
                    <FilterSelectItem
                        key={ key }
                        isSelected={ select.isSelected }
                        selectItemTitle={ select.selectItemTitle }
                        selectValue={ select.selectValue }
                    />
                ))
            }
        </select>
    )
}
