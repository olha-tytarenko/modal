import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import red from '@material-ui/core/colors/red';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { roomTypes } from './constants';

const styles = () => ({
  closeIcon: {
    color: red[600],
    fontSize: '40px',
  },
  closeButton: {
    backgroundColor: red[50],
    borderRadius: '50%',
    padding: 0,
    '&:hover': {
      backgroundColor: red[100],
    },
  },
  listItem: {
    padding: 0,
  },
});

const renderInputField = ({
  input,
}) => (
  <Input
    type="number"
    {...input}
  />
);
const renderOption = val => <MenuItem value={val} key={val}>{val}</MenuItem>;
const renderSelectField = ({
  input,
}) => (
  <Select
    {...input}
    onChange={event => input.onChange(event.target.value)}
  >
    {roomTypes.map(renderOption)}
  </Select>
);


const renderRoomList = ({ fields, classes }) => (
  <div>
    <List>
      {fields.map((room, index) => (
        <ListItem key={index} className={classes.listItem}>
          <Field
            name={`${room}.type`}
            component={renderSelectField}
          />
          <Field
            name={`${room}.quantity`}
            component={renderInputField}
          />
          <Button
            type="button"
            title="Remove room"
            onClick={() => fields.remove(index)}
            className={classes.closeButton}
          >
            <SvgIcon color="action" className={classes.closeIcon}>
              <path xmlns="http://www.w3.org/2000/svg" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </SvgIcon>
          </Button>
        </ListItem>
      ))
      }
    </List>
    <Button onClick={() => fields.push({})} color="primary">Add</Button>
  </div>
);

const RoomControlForm = (props) => {
  const { handleSubmit, handleCancel } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="rooms" component={withStyles(styles)(renderRoomList)} />
      <div>
        <Button variant="contained" color="primary">Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'RoomControlForm',
  initialValues: {
    rooms: [{}],
  },
})(RoomControlForm);
