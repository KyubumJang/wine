import LoginForm from '../../../components/molecules/Form/LoginForm';

export default {
  title: 'Component/molecules/LoginForm',
  component: LoginForm,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
};

export const Defualt = (args) => {
  return <LoginForm {...args} />;
};
