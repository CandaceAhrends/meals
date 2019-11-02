import React, { useState } from "react";
 
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const DeletableList = ({items, removeHandler}) =>{
 
    return(
        <List>
            {
                items.map( (item, idx) =>(
                    <ListItem key={idx}
                       >
                        <ListItemText primary={item}>
                            </ListItemText>   
                            <ListItemIcon>
                                <DeleteIcon   
                                 onClick={ ()=>removeHandler(item)}/>
                            </ListItemIcon>
                    </ListItem>
                ) )
            }
        </List>
    )
}
export default DeletableList;
