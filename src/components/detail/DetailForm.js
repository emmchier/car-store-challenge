import React from 'react';
import { getString } from '../../strings/getString';
import { CustomBtn } from '../ui/customs/CustomBtn';
import { FormField } from '../ui/customs/FormField';

export const DetailForm = () => {
    return (
        <form id="detail-form" className="detail-form">
            <FormField 
                formInputType={ 'text' }
                formInputClasses={ 'form-control detail__form-name-field' }
                formInputId={ 'name' }
                formInputName={ 'name' }
                ariaDescribedby={ 'nameField' }
                formInputPlaceholder={ getString.detail_form_name }
            />
            <FormField 
                formInputType={ 'email' }
                formInputClasses={ 'form-control detail__form-email-field' }
                formInputId={ 'email' }
                formInputName={ 'email' }
                ariaDescribedby={ 'emailField' }
                formInputPlaceholder={ getString.detail_form_email }
            />
            <FormField 
                formInputType={ 'number' }
                formInputClasses={ 'form-control detail__form-phone-field' }
                formInputId={ 'phone' }
                formInputName={ 'phone' }
                ariaDescribedby={ 'phoneField' }
                formInputPlaceholder={ getString.detail_form_phone }
            />
            <CustomBtn 
                btnTitle={ getString.detail_form_send_title }
                classes={ 'btn-submit' }
                isIconVisible={ false }
                btnType={ 'submit' }
            />
        </form>
    )
}
