import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

storiesOf('Test', module)
  .addDecorator()
  .add('test', () => (
    <div></div>
  ))
