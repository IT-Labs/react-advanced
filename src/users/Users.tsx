import React, { useState, useEffect } from 'react';
import { getUsers, User } from '../Apis/UsersApi';
import useStyles from './Users.styels';
import UsersList from './UsersList';
import UsersSidebar from './UsersSidebar';
import { Button } from '@mui/material';
import withSidebar from './withSidebar';
import RenderPropsSidebar from './RenderPropsSidebar';
import { usePermissions } from 'Permissions';
import useLoadData from './useLoadData';

interface UsersProps {
  
}

const Users: React.FC<UsersProps> = () => {
  const { isLoading, data } = useLoadData({ loadApi: getUsers });
  const { canAdd } = usePermissions();

  const classes = useStyles();

  if (isLoading) {
    return <div>
      {'Loading....'}
    </div>;
  }

  // const WithSidebarHOC = withSidebar(UsersList, { users: data });
  // return <WithSidebarHOC />

  return (
    <RenderPropsSidebar>
      {(isOpen, toggleSidebar, search) => {
          const filteredUsers = data.filter(u => u.name.includes(search) || u.email.includes(search));
          return (
            <>
              <UsersList users={filteredUsers} isOpen={isOpen as boolean} openSidebar={toggleSidebar as () => void} />
              {canAdd && <Button>Add more</Button>}
            </>
          )
      }}
    </RenderPropsSidebar>
  )

  // return (
  //   <div className={classes.container}>
  //     {isOpen && <UsersSidebar closeSidebar={toggleSidebar} search={search} setSearch={setSearch} />}
  //     <UsersList users={filteredUsers} isOpen={isOpen} openSidebar={toggleSidebar}/>
  //     <Button onClick={addMore}>Add more</Button>
  //   </div>
  // );
}

export default Users;