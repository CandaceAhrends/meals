import React from 'react';
import TextField from '@material-ui/core/TextField';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
 
import FocusInput from './FocusInput';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { testReactive } from './reactive';
import { Test } from 'abutton';

testReactive();


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
   
  },
  conentWrapper: {
    position: 'relative'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    marginLeft: '241px'
  },
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    expanded: 'one'
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
       
      </div>
    );

  
    const handleChange = panel => (event, newExpanded) => {
   this.setState( { expanded: panel} );
  };

    return (
      <div className={classes.root}>
        <CssBaseline />
       
        <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
        <main className={classes.content}>
        <Grid style={ { position:'fixed' }} container spacing={24}>
        <Grid item xs={12}>
        <Paper square>
        

          </Paper>
        </Grid>
        </Grid>
      <Grid container spacing={24} className={classes.conentWrapper}>
        <Grid item xs={12}>
       
        <ExpansionPanel  expanded={this.state.expanded === 'one'} onChange={handleChange('one')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
              FOCUS
          </Typography>
          <FocusInput/>

<Test/>


        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={this.state.expanded === 'two'} onChange={handleChange('two')}>
        <ExpansionPanelSummary  >
          <Typography>Collapsible Group Item #1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

               </Grid>
               </Grid>
        
        </main>
      </div>
    );
  }
}

 
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);