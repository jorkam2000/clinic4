import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['doctor', 'patient'].map((text, index) => (
          //<Link key={text} style={{ textDecoration: 'none' }}>
          <Link to={`/${text}`} key={text} className="link" >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { displayIcons(text) }
              </ListItemIcon>
              <ListItemText primary={text.toUpperCase()} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const displayIcons = (text) => {
    if (text === 'doctor') {
      return <MonitorHeartIcon />;
    } else if (text === 'patient') {
      return <DirectionsRunIcon />;
    }
  };

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
