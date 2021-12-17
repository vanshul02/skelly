import React from 'react';
import { useField } from 'formik';

import './RadioBtn.css';


const RadioBtn = ({ label, val, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className='radio-form-control'>

            <input type="radio" className={`radio-control ${meta.touched}`} {...props} {...field} value={val} />
            <label htmlFor={props.id} className='radio-label'> {label}</label>
        </div>
    )
}

export default RadioBtn;
