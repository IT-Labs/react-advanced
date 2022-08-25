import React from 'react';
import { getUsers } from '../Apis/UsersApi.tsx';
import useStyles from './Users.styels';
import UsersList from './UsersList.tsx';
import Sidebar from '../sidebar/Sidebar.tsx';
import useSearch from './useSearch.tsx';

interface UsersProps {
  
}

const Users: React.FC<UsersProps> = () => {
  const [isLoading, data ] = useSearch(getUsers, []);

  const classes = useStyles();

  if (isLoading) {
    return <div>
      {'Loading....'}
    </div>;
  }
  //const WithSidebarHOC = withSidebar(UsersList, { data: users });
  return (
    <div className={classes.container}>
      <Sidebar>
        {(isOpen, toggleSidebar, search) => {
          const filteredUsers = data.filter(u => u.name.includes(search) || u.email.includes(search));
          return (<UsersList users={filteredUsers} isOpen={isOpen} openSidebar={toggleSidebar}>
            </UsersList>)
        }}
      </Sidebar>
    </div>
  );
}

export default Users;