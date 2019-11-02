import React, {useState} from 'react'; 
import Select from 'react-select'; 
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';  
import ListItem from '@material-ui/core/ListItem'; 
import './lookahead.scss';
 
 
function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
      <TextField
        fullWidth
        className='textField'
        variant= 'outlined'
        InputProps={{
         
          inputComponent,
          inputProps: {
           className: 'input',
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps,
          },
        }}
        {...props.selectProps.textFieldProps}
      />
    );
}
function NoOptionsMessage(props) {
    return (
      <Typography
        className="no-options"
      color="textSecondary"
       
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  } 
 
function Menu(props) {
    console.log("inner props", props.innerProps);
    return (
      <Paper 
        className='paper'
        square  
        {...props.innerProps}>
        {props.children}
      </Paper>
      
    );
  }
  function Placeholder(props) {
    return (
      <Typography
        color="textSecondary"
      
        {...props.innerProps}
      >
        {props.children}
      </Typography>
    );
  }
  function Option(props) {
    return (
      <ListItem
        
        selected={props.isFocused}
        component="div"
        style={{
          fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}
      >
        {props.children}
      </ListItem>
    );
  }
  function SingleValue(props) {
    return (
      <Typography   {...props.innerProps}>
        {props.children}
      </Typography>
    );
  }
  const components = {
    Control,
    Menu,
    SingleValue,
    NoOptionsMessage,
    Option,
    Placeholder,
    
  }; 
const Autosearch = ({suggestions, placeholder} ) => {
 
    const { selectedOption, setSelectedOption} = useState(null);
     
 
        return (
          <div className='root'  >
            <NoSsr>
              <Select
               
                options={suggestions}
                components={components}
                value={selectedOption}
                onChange={setSelectedOption}
                placeholder={placeholder}
                isClearable
              />
              <div   />
              
            </NoSsr>
          </div>
        );
     
    }
export default Autosearch;