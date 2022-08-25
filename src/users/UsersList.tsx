import React from 'react';
import { ListItem, List, ListItemAvatar, Avatar, ListItemText, Typography, Button } from '@mui/material';

const UsersList = ({ users, isOpen, openSidebar }) => {
  if (!users.length) {
    return 'No data ...';
  }

  return (<div>
    {!isOpen && <Button onClick={openSidebar}>Open Sidebar</Button>}
    <List>
      {users.map(({ image, name, email, id }) => (
        <ListItem alignItems="flex-start" key={id}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {email}
            </Typography>
          }
        />
      </ListItem>)
      )}
    </List>
  </div>)
}

export default UsersList;