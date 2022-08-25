import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@mui/material';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    width: '170px'
  },
  button: {
    display: 'flex',
    justifyContent: 'end'
  }
}));

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [search, setSearch] = useState('');

  const toggleSidebar = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, [])

  const classes = useStyles();
  return (<div className={classes.container}>
    {isOpen && (
      <div className={classes.sidebar}>
        <div className={classes.button}>
          <Button  onClick={() => toggleSidebar()}>X</Button>
        </div>
        <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    )}
    {children(isOpen, toggleSidebar, search)}
  </div>);
}

export default Sidebar;