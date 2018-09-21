import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

// import RoomControlModal from '../src/components/room-control-modal/room-control-modal';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

// const rootReducer = combineReducers({
//   form: formReducer,
// });

// const store = createStore(rootReducer);

// storiesOf('RoomControlModal', module)
//   .addDecorator(story => <Provider store={store}>{story()}</Provider>)
//   .add('RoomControlModal opened', () => (
//     <RoomControlModal
//       isOpen
//       onClose={action('form close')}
//       onSubmit={action('form submit')}
//     />
//   ));
