import React from 'react';

import { getString } from '../../strings/getString';
import { FilterDropdown } from './FilterDropdown';
import { FilterSelect } from './FilterSelect';

export const FilterBar = () => {

    return (
        <div className="filter-bar alignX pushAside">
            <div className="filter-group alignX">
                <FilterDropdown
                    filterTitle={ getString.filter_drop1_title } 
                    showHeader={ true }
                    filterHeader={ getString.filter_drop1_header }
                    showForms={ false }
                    showOptions={ true }
                    filterOptions={[
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_sedan_lower,
                            optionLabelTitle: getString.filter_sedan_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_pickup_lower,
                            optionLabelTitle: getString.filter_pickup_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_suv_lower,
                            optionLabelTitle: getString.filter_suv_upper
                        }
                    ]}
                    showItems={ false }
                />
                <FilterDropdown
                    filterTitle={ getString.filter_drop2_title } 
                    showHeader={ true }
                    filterHeader={ getString.filter_drop2_header }
                    showForms={ false }
                    showOptions={ true }
                    filterOptions={[
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_versa_lower,
                            optionLabelTitle: getString.filter_versa_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_frontier_lower,
                            optionLabelTitle: getString.filter_frontier_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_newversa_lower,
                            optionLabelTitle: getString.filter_newversa_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_kicks_lower,
                            optionLabelTitle: getString.filter_kicks_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_newsentra_lower,
                            optionLabelTitle: getString.filter_newsentra_upper
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: getString.filter_qashqai_lower,
                            optionLabelTitle: getString.filter_qashqai_upper
                        }
                    ]}
                    showItems={ false }
                />
                <FilterDropdown
                    filterTitle={ getString.filter_drop3_title } 
                    showHeader={ true }
                    filterHeader={ getString.filter_drop3_header }
                    showForms={ true }
                    alignForms={ 'alignX' }
                    filterForms={[
                        { 
                            showFormHeader: true,
                            formHeader: getString.filter_drop3_form_header1,
                            showFormLabel: false,
                            formInputType: 'text',
                            formInputClasses: 'form-filter-item',
                            formInputId: 'form-filter-item',
                            formInputPlaceholder: 'US$'
                        },
                        { 
                            showFormHeader: true,
                            formHeader: getString.filter_drop3_form_header2,
                            showFormLabel: false,
                            formInputType: 'text',
                            formInputClasses: 'form-filter-item',
                            formInputId: 'form-filter-item',
                            formInputPlaceholder: getString.item_currency
                        }
                    ]}
                    showOptions={ true }
                    filterOptions={[
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: 'filterPrice1',
                            optionLabelTitle: getString.filter_drop3_form_prices1
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: 'filterPrice2',
                            optionLabelTitle: getString.filter_drop3_form_prices2
                        },
                        { 
                            optionInputType: getString.filter_drop_type,
                            optionInputId: 'filterPrice3',
                            optionLabelTitle: getString.filter_drop3_form_prices3
                        }
                    ]}
                    showItems={ false }
                />
            </div>
            
            <div className="filter-order-by alignX">
                <h4>ORDENAR:</h4>
                <FilterSelect 
                   filterSelects={[
                        { 
                            isSelected: true,
                            selectItemTitle: getString.filter_select_option1
                        },
                        { 
                            isSelected: false,
                            selectItemTitle: getString.filter_select_option2,
                            selectValue: '1' 
                        },
                        { 
                            isSelected: false,
                            selectItemTitle: getString.filter_select_option3,
                            selectValue: '2' 
                        },
                        { 
                            isSelected: false,
                            selectItemTitle: getString.filter_select_option4,
                            selectValue: '3' 
                        }
                   ]}
                />
            </div>
        </div>
    )
}
