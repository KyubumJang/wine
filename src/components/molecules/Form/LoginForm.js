import Input from '../../atoms/Input/Input';
import styled from 'styled-components';

const CardForm = styled.form`
  width: 400px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  padding: 16px;
`;

const LoginForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit();
  };
  return (
    <CardForm onSubmit={handleSubmit}>
      Name: <Input type="text" name="name" block />
      Password: <Input type="password" name="password" block />
      <button type="submit">Login</button>
    </CardForm>
  );
};

export default LoginForm;
