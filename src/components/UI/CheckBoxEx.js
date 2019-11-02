import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import CheckBox from '@material-ui/core/Checkbox';
import Backup from '@material-ui/icons/Backup';


const CheckBoxGroup = ( {values, label, onChange}) => (
    <FormControl component ="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
    
    <FormGroup>
        {values.map( (val, idx) => (
         <FormControlLabel key={idx} control={<CheckBox
            checked ={val.checked}
            onChange={onChange}
            icon={<Backup font-size='small' />}
            checkedIcon={<Backup />}
            name={idx} ></CheckBox>
            }
            label={val.label}
            />

         )
        )}
    </FormGroup>
    </FormControl>
);

export default CheckBoxGroup;
