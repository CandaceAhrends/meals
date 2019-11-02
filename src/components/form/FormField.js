
import React from 'react';



const FormField = ({ errorMessage, children }) => {
    return (
        <div className="form-field">

            {children}
            <div className="error-message" >{errorMessage}</div>
        </div>
    )
}

export default FormField;