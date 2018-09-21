import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import { roomTypes } from './constants';
import { CloseIcon } from '../icons/close-icon';

const styles = () => ({
  inputField: {
    maxWidth: '40px',
  },
});

const renderInputField = ({
  input,
  classes,
}) => (
  <Input
    type="number"
    {...input}
    className={classes.inputField}
  />
);
const renderOption = val => <MenuItem value={val} key={val}>{val}</MenuItem>;
const renderSelectField = ({
  input,
}) => (
  <Select
    {...input}
    onChange={event => input.onChange(event.target.value)}
    autoWidth
  >
    {roomTypes.map(renderOption)}
  </Select>
);

const renderInputFieldWithStyles = withStyles(styles)(renderInputField);

export const renderRoomList = ({
  fields, classes: {
    listItem, closeIcon, deleteButton, addButton,
  },
}) => (
  <div>
    <List>
      {fields.map((room, index) => (
        <ListItem key={index} className={listItem}>
          <Field
            name={`${room}.type`}
            component={renderSelectField}
          />
          <Field
            name={`${room}.quantity`}
            component={renderInputFieldWithStyles}
          />
          <Button
            type="button"
            variant="fab"
            mini
            title="Remove room"
            onClick={() => fields.remove(index)}
            className={deleteButton}
          >
            <CloseIcon color="action" classes={closeIcon} />
          </Button>
        </ListItem>
      ))
      }
    </List>
    <Button onClick={() => fields.push({})} color="primary" className={addButton}>Add</Button>
  </div>
);
