import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import  { useState} from "react";
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

export default function Footer({ screenConfig }) {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const make = {
    right: 0,
    left: 0,
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <Box>
      <BottomNavigation
        style={make}
        showLabels
        value={screenConfig[0]}
        onChange={(event, newValue) => {
          screenConfig[1](newValue);
        }}
      >
  <BottomNavigationAction label="Worlsd" icon={<RestoreIcon />} />
        <BottomNavigationAction onClick= {handleClick(TransitionLeft)} label="Country" icon={<FavoriteIcon />} />
        <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Stay Home Stay Safe"
        key={transition ? transition.name : ''}
      />
      </BottomNavigation>
    </Box>
  );
}
