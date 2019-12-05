import React from 'react';
import List from "@material-ui/core/List";
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const Instructions = ({ instructions }) => {
  return (
    <List style={{ textAlign: "start", height: '300px' }}>
      {instructions.map((instruction, idx) => (
        <ListItemText
          key={idx}
          primary={instruction.name}
          secondary={`  ${instruction.step}`}
        />
      ))}
    </List>
  );
};
Instructions.propTypes = {
  instructions: PropTypes.array
}
export default Instructions;