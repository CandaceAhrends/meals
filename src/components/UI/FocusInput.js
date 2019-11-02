import React , {useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RootRef from '@material-ui/core/RootRef';
import InputBase from '@material-ui/core/InputBase';

const FocusInput = () =>{

    let nameRef = useRef();

    
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      });
    
      const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      const handleClick = evt => {
          console.log("evt", nameRef.current);
            nameRef.current.focus();
      }
    
    return (
        <form>

             <Button variant="outlined" onClick={handleClick} >Default</Button>
              

        <InputBase
        id="standard-name"
        label="Name"
        variant="outlined"
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        
      />
       
    
     
     
      <InputBase
        inputRef={nameRef}
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        variant="outlined"
        margin="normal"
      />
    
      <InputBase
        inputRef={nameRef}
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello focus here"
        variant="outlined"
        margin="normal"
        
      />
     </form>
    );
}

export default FocusInput;