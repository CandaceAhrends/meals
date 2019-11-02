import './nav.scss';
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux';
import { attemptLogout } from '../../actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
 
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.logoutUser = this.logoutUser.bind(this);
    }
    state = {
        open: false,
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    componentDidMount() {
        this.props.getUser();
        console.log("getting user");
    }
    logoutUser(router) {
        this.props.logout();
        this.props.history.push('/login');

    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar} >
                    <Toolbar className={classes.toolbar} disableGutters={!open}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    
                    >
                    <MenuIcon />
                    </IconButton>
                    {this.props.loggedIn?                       
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                             Welcome {this.props.user}        
          
                        </Typography>:''}

                     {this.props.loggedIn?    
                        <Button onClick={this.logoutUser} color="inherit">Log out</Button>
                     :<p>Diet Challenge</p>}
                    </Toolbar>
                   
          
        
                </AppBar>
                <Drawer
              
                variant="persistent"
                anchor="left"
                open={open}
                
                >
              
        
      
                </Drawer>
            </div>
        );
    }
}

//  return (<NavLink to="/logout" activeClassName="active">Log out</NavLink>);
const mapStateToProps = (state) => {
    console.log("mapping NAV state", state);
    return {
        loggedIn: state.loginReducer.authenticated,
        user: state.loginReducer.user

    }
};
const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch({ type: 'USER' }),
        logout: (user) => dispatch(attemptLogout())
    }
};

const styles = {
    root: {
      flexGrow: 1,
      'z-index': '999999',
      display: 'flex'
    },
    grow: {
      flexGrow: 2,
    },
    appBar:{
        'z-index': '999999'

    },
    toolbar: {
        width   : '100%'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav)));