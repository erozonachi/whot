import React from 'react';
import { SideBarContainer } from './StyledComponents';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import StarRateIcon from '@material-ui/icons/StarRate';
import SubjectIcon from '@material-ui/icons/Subject';
import AboutIcon from '@material-ui/icons/WbIncandescent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    fontSize: 32,
  },
});


function SideBar() {
  const classes = useStyles();

  return(
    <SideBarContainer>
      <a href='#'>
        <AccountCircleIcon className={classes.icon} />
        <strong>James Eneh</strong>
      </a>
      <a href='#'>
        <SettingsIcon className={classes.icon} />
        <strong>Settings</strong>
      </a>
      <a href='#'>
        <StarRateIcon className={classes.icon} />
        <strong>Play History</strong>
      </a>
      <a href='#'>
        <SubjectIcon className={classes.icon} />
        <strong>Game Guide</strong>
      </a>
      <a href='#'>
        <AboutIcon className={classes.icon} />
        <strong>About</strong>
      </a>
    </SideBarContainer>
  );
}

export default SideBar;
