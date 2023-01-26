import React, { useState, useCallback } from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
  },
  sideBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '170px',
    backgroundColor: 'lightblue'
  },
  button: {
    display: 'flex',
    justifyContent: 'end'
  }
}));

interface SidebarProps {
  children(isOpen: boolean, toggleSidebar: () => void, search: string)
}

const RenderPropsSidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isOpen ,setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const classes = useStyles();

  const toggleSidebar = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className={classes.container}>
      {isOpen && <div className={classes.sideBarContainer}>
        <div className={classes.button}>
          <Button onClick={() => toggleSidebar()}>X</Button>
        </div>
        <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>}
      {children(isOpen, toggleSidebar, search)}
    </div>
  )
}

export default RenderPropsSidebar;