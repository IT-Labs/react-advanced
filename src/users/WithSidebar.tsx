import React, { useCallback, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@mui/material';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    display: 'flex',
    width: '170px',
    flexDirection: 'column',
    background: 'lightgray'
  },
  button: {
    display: 'flex',
    justifyContent: 'end'
  }
}));

const withSidebar = (Component, { data }) => {
  const WithSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [search, setSearch] = useState('');

    const toggleSidebar = useCallback(() => {
      setIsOpen(prevState => !prevState);
    }, []);

    const classes = useStyles();
    const filteredUsers = useMemo(() => data.filter((u) => u.name.includes(search) || u.email.includes(search)), [search]);
    return (<div className={classes.container}>
      {isOpen && (
        <div className={classes.sidebar}>
          <div className={classes.button}>
            <Button  onClick={() => toggleSidebar()}>X</Button>
          </div>
          <TextField label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      )}
      <Component users={filteredUsers} isOpen={isOpen} openSidebar={toggleSidebar} />
    </div>);
  }

  return WithSidebar;
}

export default withSidebar;