import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import RoomControlForm from './room-control-form';
import { CloseIcon } from '../icons/close-icon';

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'base-line',
    backgroundColor: grey[200],
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    padding: '16px 0 16px 16px',
  },
  closeButton: {
    padding: 0,
    boxShadow: 'none',
    backgroundColor: grey[200],
    '&:hover': {
      backgroundColor: grey[200],
    },
  },
});

class RoomControlModal extends Component {
  state = {
    isOpen: false,
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isOpen}
          onClose={this.handleClose}
          disableAutoFocus
        >
          <div className={classes.paper}>
            <div className={classes.modalHeader}>
              <Typography variant="headline">Room structure</Typography>
              <Button
                onClick={this.handleClose}
                className={classes.closeButton}
              >
                <CloseIcon />
              </Button>
            </div>
            <RoomControlForm
              onSubmit={console.log}
              handleCancel={this.handleClose}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(RoomControlModal);
