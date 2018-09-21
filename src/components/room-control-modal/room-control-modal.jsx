import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import RoomControlForm from './room-control-form';
import { CloseIcon } from '../icons/close-icon';
import { styles } from './styles/room-control-modal-styles';

const RoomControlModal = ({
  classes, isOpen, onClose, onSubmit,
}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={isOpen}
    onClose={onClose}
    disableAutoFocus
  >
    <div className={classes.paper}>
      <div className={classes.modalHeader}>
        <Typography variant="headline">Room structure</Typography>
        <Button
          onClick={onClose}
          className={classes.closeButton}
        >
          <CloseIcon />
        </Button>
      </div>
      <RoomControlForm
        onSubmit={onSubmit}
        handleCancel={onClose}
      />
    </div>
  </Modal>
);

RoomControlModal.propTypes = {
  classes: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

RoomControlModal.defaultProps = {
  classes: {},
  isOpen: false,
};

export default withStyles(styles)(RoomControlModal);
