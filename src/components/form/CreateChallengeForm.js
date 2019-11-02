import React, { useState } from 'react';
 
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import InputLabel from '@material-ui/core/InputLabel';
import { MuiPickersUtilsProvider,  InlineDatePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';

import OutlinedInput from '@material-ui/core/OutlinedInput';

import SpinnerService from '../../services/spinnerService';
import FormField from './FormField';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
 
 
import './form.scss';


const Spinner = SpinnerService.getInstance();
 

const CreateChallengeForm = (props) => {
 
    const [formValues, setFormValues] = useState({
        name: '',
        startDate: new Date(),
        duration: 0,
        durationType: 0,
        description: ''
    });
    const [formErrors, setFormErrors] = useState( {
        name: '',
        startDate: '',
        duration: '',
        description: ''});
    const [progress, setProgress] = useState( {loading: false});

    const handleDateChange = (date) => {
        console.log("date ", date);

        setFormValues({ ...formValues, startDate: date });
    }
    const validateChanges = () => {
       
        return true;
    }
    const handleChecked = (evt) => {
        evt.preventDefault();
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.checked
        })
        console.log("fv", formValues);
    }
    const handleChange = (evt) => {
        console.log("evt ", evt);
        evt.preventDefault();
        if(!validateChanges()){
            return;
        }

        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        })

        console.log("form v", formValues);
    }
    const setDurationType =(evt, type) => {
        setFormValues({
            ...formValues,
            durationType: type}
        );
        console.log("form v", formValues);
    }
    const createChallenge = () => {
        console.log(formValues);
        Spinner.toggleShow();
        setTimeout( ()=>{
            Spinner.toggleShow();
        }, 3000);

    } 
    const durationPeriods = Array.from( new Array(7), (n,idx)=>idx+1); 

    return (

        <>
           
        <form className="challenge-form">
            <InputLabel htmlFor="startDate">Start date</InputLabel>
            <MuiPickersUtilsProvider utils={MomentUtils}>
           
                <InlineDatePicker
                        keyboard
                        clearable
                        className="fld"
                        name="startDate"
                        variant="outlined"
                        value={formValues.startDate}
                        onChange={handleDateChange}
                        format={"MM/DD/YYYY"}
                        mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
                    />
                </MuiPickersUtilsProvider>
               
                <InputLabel htmlFor="startDate">Challenge name</InputLabel>
                <FormField errorMessage={formErrors.name}>
                    <TextField
                        className="fld"
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                        error={true}
                        required
                        helperText="helper text"
                        variant="outlined"
                        
                    />
                </FormField>
                <Tabs
                    value={formValues.durationType}
                    onChange={setDurationType}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                  
                    className="fld"
                    >
                    <Tab   label="Hours" />
                    <Tab   label="Days" />
                    <Tab   label="Weeks" />
                    <Tab   label="Months" />
                </Tabs> 
                  
           
                    <InputLabel htmlFor="startDate">Challenge duration</InputLabel>
                    <FormControl variant="outlined" className="formControl">
                        <Select
                            className="fld"
                            value={formValues.duration}
                            onChange={handleChange}
                            name='duration'
                            input={
                                <OutlinedInput name="duration" labelWidth={0}>
                                </OutlinedInput>}
                        >
                            {durationPeriods.map((durationTime, idx) =>
                                <MenuItem key={idx} value={idx} >{durationTime}</MenuItem>)
                            }

                        </Select>
                        </FormControl>
                        <InputLabel htmlFor="startDate">Description</InputLabel>
                        <TextField
                            name="description"
                            className="fld"
                            onChange={handleChange}
                            value={formValues.description}
                            placeholder=""
                            multiline={true}
                            rows={2}
                            rowsMax={4}
                            />
                <Button onClick={createChallenge} color="inherit">Create Challenge</Button>
            
            </form>
        </>
    )
}

export default (CreateChallengeForm);