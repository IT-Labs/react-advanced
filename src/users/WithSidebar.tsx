import React, { useState, useCallback } from 'react';
import { User } from 'Apis/UsersApi';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

interface Props {
  users: User[]
}

interface ComponentProps extends Props { 
  isOpen: boolean;
  openSidebar: () => void;
}

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

const withSidebar = (Component: React.ComponentType<ComponentProps>, { users }: Props) => {
  const displayName = 'withSidebarHOC';

  const WithSidebar = () => {
    const [isOpen ,setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const classes = useStyles();

    const toggleSidebar = useCallback(() => {
      setIsOpen((prevState) => !prevState);
    }, []);
    
  const filteredUsers = users.filter((u) => u.email.includes(search) || u.name.includes(search));
  
    return (
      <div className={classes.container}>
        {isOpen && <div className={classes.sideBarContainer}>
          <div className={classes.button}>
            <Button onClick={() => toggleSidebar()}>X</Button>
          </div>
          <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>}
        <Component isOpen={isOpen} openSidebar={toggleSidebar} users={filteredUsers} />
      </div>
    );
  };

  WithSidebar.displayName = displayName;
  return WithSidebar;
}

export default withSidebar;