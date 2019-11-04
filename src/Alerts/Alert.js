import React from 'react';
import { connect } from 'react-redux';
import './alert.scss';

const Alert = ({errorMessage}) =><div className="alert">{errorMessage}</div>;         

const mapStateToProps = (state) => {
   
    return {
        errorMessage: state.errorReducer.errorMessage
    }
};
 
 export default connect(mapStateToProps)(Alert);
 
