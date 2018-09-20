import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export const CloseIcon = ({ classes, color }) => (
  <SvgIcon color={color} className={classes}>
    <path xmlns="http://www.w3.org/2000/svg" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
);
