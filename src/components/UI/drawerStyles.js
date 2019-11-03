
const drawerWidth = 240;

export const styles = theme => ({
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
    menuList:{
      zIndex: '999999',
      border: 'solid purple'
    },
    drawerPaper: {
      width: drawerWidth,
      top: '50px',
      zIndex: '100'
    },
    content: {
      flexGrow: 1,
      marginLeft: '241px'
    },
  });