import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RoomControlModal from '../src/components/room-control-modal/room-control-modal';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

storiesOf('RoomControlModal', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('RoomControlModal closed', () => (
    <RoomControlModal
      onClose={action('form close')}
      onSubmit={action('form submitted')}
    />
  ))
  .add('RoomControlModal opened', () => (
    <RoomControlModal
      isOpen
      onClose={action('form close')}
      onSubmit={action('form submitted')}
    />
  ));
