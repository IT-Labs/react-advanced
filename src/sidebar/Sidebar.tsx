import React from 'react';
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

export interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSearch: (value: string) => void;
  search: string;
}

const Sidebar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar, setSearch, search }) => {

  const classes = useStyles();
  return (<div className={classes.container}>
    {isOpen && (
      <div className={classes.sidebar}>
        <div className={classes.button}>
          <Button  onClick={toggleSidebar}>X</Button>
        </div>
        <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    )}
  </div>);
}

export default Sidebar;