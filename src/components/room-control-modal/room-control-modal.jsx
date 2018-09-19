import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

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
});

class RoomControlModal extends Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
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
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <div>

            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const RoomControlModalWrapped = withStyles(styles)(RoomControlModal);

export default RoomControlModalWrapped;
