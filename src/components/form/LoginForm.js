
import React, { useState } from 'react';
import FormField from './FormField';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { NavLink } from 'react-router-dom'
import ValidatorService from '../../services/formValidatorService';

import './form.scss';


const RegisterForm = ({ submitHandler }) => {
    const [formErrors, setFormErrors] = useState({
        user: '',
        pwd: ''
    });
    const [formValues, setFormValues] = useState({
        user: '',
        pwd: ''
    });
    const onChangeForm = (evt) => {
        evt.preventDefault();
        setFormErrors({
            user: '',
            pwd: ''
  
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
        console.log("validator", validator);
        const errors = Object.entries(formValues).reduce((r, [key, val]) => {
            r[key] = validator.isEmpty(val);
            return r;
        }, {});
        const hasErrors = Object.values(errors).filter(v => v.length).length;
        console.log("form values ",errors, hasErrors);

        if (hasErrors) {
            console.log("form values ",errors, hasErrors);

            setFormErrors(
                errors
            );
        }
        else {
            console.log("form formValues ",errors, formValues);

            const user = { "user": formValues.user, "pwd": formValues.pwd };
            submitHandler(user);
        }


    }

    return (
        <>


            <div className="login-form">
                <div>
                    <i className="material-icons lrg-icon">account_circle</i>
                    <p>Sign In</p>
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
                <Button onClick={validateForm} variant="contained" color="primary">
                    Sign In
                </Button>
                <NavLink to="/register">
                    Register for an account
                </NavLink>


            </div>

        </>
    )
}

export default RegisterForm;