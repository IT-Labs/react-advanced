import React from 'react';
import { ListItem, Link as MuiLink } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import { usePermissions } from 'Permissions';


const useStyles = makeStyles(() => ({
  item: {
    height: '60px'
  },
  selectedItem: {
    height: '60px',
    background: 'orange'
  }
}))

interface Items {
  title: string,
  link: string,
}

const items: Items[] = [{
  title: 'Users',
  link: '/users'
}, {
  title: 'Products',
  link: '/products'
}]

const Sidebar: React.FC<{}> = () => {
  const { canAdd } = usePermissions();

  const location = useLocation();
  const classes = useStyles();
  return (<>
    {items.map(({ title, link}) => {
      const isActive = link === location.pathname;
      return (
        <ListItem key={title} className={isActive ? classes.selectedItem : classes.item}>
          <MuiLink underline="none" component={Link} to={link}>
            {canAdd ? `${title} Can Add` : title}
          </MuiLink>
        </ListItem>
      );
    })}
    </>
  )
};

export default Sidebar;