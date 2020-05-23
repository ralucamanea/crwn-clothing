import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input"
            onChange={handleChange}
            {...otherProps}>
        </input>
        {label ?
        //if the user has already typed something in we show something else
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
            >{label}</label>
            :
            null}
    </div>
)

export default FormInput;