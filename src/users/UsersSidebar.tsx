import React from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '170px',
    background: 'lightgray'
  },
  button: {
    display: 'flex',
    justifyContent: 'end'
  }
}));

interface UsersSidebarProps {
  closeSidebar: () => void;
  search?: string;
  setSearch: (value: string) => void;
}

const UsersSidebar: React.FC<UsersSidebarProps> = ({ closeSidebar, setSearch, search }) => {
  const classes = useStyles();

  return (<div className={classes.container}>
    <div className={classes.button}>
      <Button  onClick={() => closeSidebar()}>X</Button>
    </div>
    <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
  </div>);
}

export default UsersSidebar;