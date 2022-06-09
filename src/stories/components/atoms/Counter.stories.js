import React from 'react';

import { Counter } from '../../../components/atoms/';

export default {
  title: 'Example/Counter',
  component: Counter,
  argTypes: { onIncrease: { action: 'clicked' } },
};

const Template = (args) => <Counter {...args} />;

export const Defualt = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
