import React, {useState, useEffect} from 'react';
import SpinnerService from '../services/spinnerService';
import CircularProgress from '@material-ui/core/CircularProgress';

const appSpinner = SpinnerService.getInstance();

const Spinner = () =>{
 
    const [showSpinner, setShowSpinner]  = useState( false);

  

    useEffect(
        ()=>{
            const spinnerSubscription = appSpinner.subject.subscribe( v=>{
                setShowSpinner(v);
            });

            return () => {
                spinnerSubscription.unsubscribe();
            }
        },
            [appSpinner]
    );

    return   showSpinner?<CircularProgress   />:'';
}

export default Spinner;