
const drawerWidth = 180;

export const styles = theme => ({
    root: {
      display: 'flex',
     
    },
    drawer: {
     
    },
    conentWrapper: {
      position: 'relative'
    },
    menuLink:{
      textDecoration: 'none',
      display: 'flex',
      color: '#620OEE',
      padding: '5px'
      
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuList:{
      zIndex: '999999',
      border: 'solid purple'
    },
    drawerPaper: {
      width: drawerWidth,
      top: '59px',
      zIndex: '100'
    },
    content: {
      flexGrow: 1,
      marginLeft: '241px'
    },
  });