
import React, { useState } from 'react';
import FormField from './FormField';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
 
import ValidatorService from '../../services/formValidatorService';

import './form.scss';


const RegisterForm = ({ submitHandler }) => {
    const [formErrors, setFormErrors] = useState({
        user: '',
        pwd: '',
        email: ''
    });
    const [formValues, setFormValues] = useState({
        user: '',
        pwd: '',
        email: ''
    });
    const onChangeForm = (evt) => {
        evt.preventDefault();
        setFormErrors({
            user: '',
            pwd: '',
            email: ''
           
        });
        const v = evt.target.value;
        const n = evt.target.name;
        setFormValues({
            ...formValues, [n]: v
        });
        console.log("form values ", formValues);

    }
    const validateForm = (evt) => {
        const validator = ValidatorService.getInstance();
        const errors = Object.entries(formValues).reduce((r, [key, val]) => {
            r[key] = validator.isEmpty(val);
            return r;
        }, {});
        const hasErrors = Object.values(errors).filter(v => v.length).length;
        

        if (hasErrors) {
            console.log("form values ",errors, hasErrors);

            setFormErrors(
                errors
            );
        }
        else {
            console.log("form formValues ",errors, formValues);

            const user = { "user": formValues.user, "pwd": formValues.pwd, "email": formValues.email };
            submitHandler(user);
        }


    }

    return (
        <>


            <div className="register-form">
                <div>
                    <i className="material-icons lrg-icon">account_circle</i>
                    <p>Register</p>
                </div>

                <InputLabel htmlFor="user">User</InputLabel>
                <FormField errorMessage={formErrors.user}>
                    <TextField
                        name="user"
                        type="text"
                        value={formValues.user}
                        onChange={onChangeForm}
                        error={formErrors.user.length > 0}
                        required
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <i className="material-icons">perm_identity</i>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormField>
                <InputLabel htmlFor="user">Password</InputLabel>
                <FormField errorMessage={formErrors.pwd}>
                    <TextField
                        name="pwd"
                        type="password"
                        value={formValues.pwd}
                        onChange={onChangeForm}
                        error={formErrors.pwd.length > 0}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <i className="material-icons">lock</i>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormField>
                <InputLabel htmlFor="user">Email</InputLabel>
                <FormField errorMessage={formErrors.email}>
                    <TextField
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={onChangeForm}
                        error={formErrors.email.length > 0}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <i className="material-icons">email</i>
                                </InputAdornment>
                            ),
                        }}
                    />
                </FormField>
                <Button onClick={validateForm} variant="contained" color="primary">
                    Register
                </Button>
                

            </div>

        </>
    )
}

export default RegisterForm;