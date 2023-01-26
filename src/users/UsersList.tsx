import React, { memo } from 'react';
import { ListItem, List, ListItemAvatar, Avatar, ListItemText, Typography, Button } from '@mui/material';
import { User } from '../Apis/UsersApi';
import { usePermissions } from 'Permissions';

export interface UsersListProps {
  users: User[];
  isOpen: boolean;
  openSidebar: () => void;
};

const UserItem: React.FC<User> = memo(({ image, name, id, email }) => { 
  
  const { canAdd } = usePermissions();
  
  return (
  <ListItem alignItems="flex-start" key={id}>
    {canAdd && (
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={image} />
      </ListItemAvatar>
    )}
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
  </ListItem>
)});

const UsersList: React.FC<UsersListProps> = ({ users, isOpen, openSidebar }) => {
  if (!users.length) {
    return <>'No data ...'</>;
  }
  return (<div>
    {!isOpen && <Button onClick={openSidebar}>Open Sidebar</Button>}
    <List>
      {users.map((user) => (
        <UserItem {...user} />)
      )}
    </List>
  </div>)
}

export default UsersList;