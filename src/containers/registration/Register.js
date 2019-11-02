
import React from 'react';
import './register.scss';
import { connect } from 'react-redux';
import {  attemptRegistration } from './registerActions';
import RegisterForm from '../../components/form/RegisterForm'; 

class Register extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};
       
    }
    componentWillUnmount(){
        
    }
    register = (user) => {        
        this.props.register(user); 
    } 
     
    componentDidUpdate(prevProps, prevState, snapshot){
       
        if(this.props.registered){
           
            this.props.history.push('/login');
        }
    }

    render() {
       
      
        return (
            <div >
             
             <p className="error">{this.props.msg}</p>

                <RegisterForm submitHandler={this.register}>                           
                </RegisterForm>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("mapping registrationReducer state", state);
    return {
        registered: state.registerReducer.registered,     
        msg: state.registerReducer.msg
    }
};
const mapDispatchToProps = dispatch => {
    return {
         
        register: (user) => dispatch( attemptRegistration(user) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);