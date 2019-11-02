import React from 'react';
import { connect } from 'react-redux';

const Alert = ({errorMessage}) =><div>{errorMessage}</div>;         

const mapStateToProps = (state) => {
   
    return {
        errorMessage: state.errorReducer.errorMessage
    }
};
 
 export default connect(mapStateToProps)(Alert);
 
