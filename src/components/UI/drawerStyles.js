
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
    progress: {
      margin: theme.spacing.unit * 2,
    },
    drawerPaper: {
      width: drawerWidth,
      top: '50px',
      zIndex: '-1'
    },
    content: {
      flexGrow: 1,
      marginLeft: '241px'
    },
  });