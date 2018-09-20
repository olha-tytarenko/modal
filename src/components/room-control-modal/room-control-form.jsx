import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import { FieldArray, reduxForm } from 'redux-form';
import { renderRoomList } from './room-list';

const styles = () => ({
  closeIcon: {
    color: red[600],
  },
  deleteButton: {
    backgroundColor: red[50],
    padding: 0,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: red[100],
    },
  },
  listItem: {
    padding: 0,
    maxWidth: '160px',
    justifyContent: 'space-between',
    marginLeft: '16px',
    paddingTop: '8px',
  },
});

const renderRoomListWithStyles = withStyles(styles)(renderRoomList);

const RoomControlForm = ({ handleSubmit, handleCancel }) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="rooms" component={renderRoomListWithStyles} />
    <div style={{ marginLeft: '16px' }}>
      <Button variant="contained" color="primary">Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  </form>
);

export default reduxForm({
  form: 'RoomControlForm',
  initialValues: {
    rooms: [{}],
  },
})(RoomControlForm);
