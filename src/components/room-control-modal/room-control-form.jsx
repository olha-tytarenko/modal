import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FieldArray, reduxForm } from 'redux-form';
import { renderRoomList } from './room-list';
import { styles } from './styles/room-control-form-styles';

const renderRoomListWithStyles = withStyles(styles)(renderRoomList);

const RoomControlForm = ({ handleSubmit, handleCancel }) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="rooms" component={renderRoomListWithStyles} />
    <div style={{ marginLeft: '16px' }}>
      <Button variant="contained" color="primary" type="submit">Save</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  </form>
);

RoomControlForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'RoomControlForm',
  initialValues: {
    rooms: [{}],
  },
})(RoomControlForm);
