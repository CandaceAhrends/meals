import React, { useState } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeletableList from './DeletableList';
 
import InputAdornment from '@material-ui/core/InputAdornment';
import './addList.scss';

const AddList = ({listItems = []}) => {
    const [item, setItem] = useState('');
    const [list, setList] = useState(listItems);

    const removeFromList = (item) =>{
        
        setList( list.filter( listItem=>listItem !==item));

    }
    const addToList = () => {
        setList( [...list, item]);
        setItem('');
         
    }    
    return(
        <>
        <Paper style={{ margin: 16, padding: 16 }}>     
        
            <Grid container>
                <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        variant="outlined"
                        className="text-field"
                        placeholder="Add Email"
                        name='item'
                        value={item}
                        onChange={ evt=> {setItem(evt.target.value)}}
                        fullWidth
                        InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                                  <Button variant="contained" 
                                        onClick={addToList}
                                          color="primary" >
        
                                    <AddIcon/>
                               </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                </Grid>
              
                </Grid>
                <Grid md={12}>
                        <DeletableList items={list} removeHandler={removeFromList}></DeletableList>
                </Grid>
        </Paper>
       
     </>

    );
}

export default AddList;