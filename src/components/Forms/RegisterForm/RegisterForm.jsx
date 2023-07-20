import { useState } from 'react';
import TextField from '../../common/TextField/TextField';
import Button from 'components/common/Button/Button';
import { useWindowSize } from 'hooks/useResize';
import { registerFields } from './registerFields';

import { Form, SubmBtnWrap } from '../LoginForm/LoginForm.styled';

const RegisterForm = () => {
  const screenWidth = useWindowSize();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFormSsubmit = e => {
    e.preventDefault();
  };

  const clickHandler = () => {};

  const inputs = registerFields.map(
    ({ name, type, text, icon, placeholder }) => (
      <TextField
        key={name}
        name={name}
        id={name}
        value={name}
        type={type}
        text={text}
        Icon={icon}
        changeHandler={name === 'email' ? setEmail : setPassword}
        placeholder={placeholder}
      />
    )
  );

  return (
    <Form onSubmit={onFormSsubmit}>
      <div>{inputs}</div>
      <SubmBtnWrap>
        <Button
          type="submit"
          text="Register"
          onClick={clickHandler}
          width={screenWidth < 767 ? '280px' : '300px'}
        />
      </SubmBtnWrap>
    </Form>
  );
};

export default RegisterForm;
