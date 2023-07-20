import { useState } from 'react';
import Logo from 'components/common/Logo/Logo';
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import Button from 'components/common/Button/Button';
import { useWindowSize } from 'hooks/useResize';

import {
  FormContainer,
  BtnWrapper,
  Wrapper3D,
  LoginWrapper,
  RegisterWrapper,
  Cont,
  FormPosit,
} from './AuthenticationForms.styled';

const AuthenticationForms = () => {
  const [changeForm, setChangeForm] = useState(false);
  const screenWidth = useWindowSize();

  const onChangeMethodBtnClick = () => {
    setChangeForm(prevState => !prevState);
  };

  return (
    <FormContainer>
      <Wrapper3D rotate={changeForm}>
        <LoginWrapper>
          <Cont>
            <Logo />
            <FormPosit>
              <LoginForm />
            </FormPosit>
            <BtnWrapper>
              <Button
                type="button"
                text="Register"
                clickHandler={onChangeMethodBtnClick}
                width={screenWidth < 767 ? '280px' : '300px'}
              />
            </BtnWrapper>
          </Cont>
        </LoginWrapper>
        <RegisterWrapper>
          <Cont>
            <Logo />
            <FormPosit>
              <RegisterForm />
            </FormPosit>
            <BtnWrapper>
              <Button
                type="button"
                text="Log in"
                clickHandler={onChangeMethodBtnClick}
                width={screenWidth < 767 ? '280px' : '300px'}
              />
            </BtnWrapper>
          </Cont>
        </RegisterWrapper>
      </Wrapper3D>
    </FormContainer>
  );
};

export default AuthenticationForms;
