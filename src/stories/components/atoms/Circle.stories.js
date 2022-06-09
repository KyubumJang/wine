import React from 'react';

import { Circle } from '../../../components/atoms/';

export default {
  title: 'Example/Circle',
  component: Circle,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Circle {...args} />;

export const Defualt = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
