import React from "react";
import "./login.scss";
import { connect } from "react-redux";
import { attemptLogin } from "./loginActions";
import LoginForm from "../../components/form/LoginForm";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loggedIn: false,
      msg: ""
    };

    this.login = this.login.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        user: "test"
      });
    }, 5000);
  }
  componentWillUnmount() {}
  login(user) {
    this.props.login(user);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.loggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
     
        <div className="login-error"><p className="error">{this.props.msg}</p></div>
        <div className="login-wrapper">
          <LoginForm submitHandler={this.login}></LoginForm>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("mapping login state", state);
  return {
    loggedIn: state.loginReducer.authenticated,
    msg: state.loginReducer.msg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(attemptLogin(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
