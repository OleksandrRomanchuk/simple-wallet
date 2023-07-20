import styled from 'styled-components';

const FormContainer = styled.div`
  position: relative;

  z-index: 2;

  transform-style: preserve-3d;
  perspective: 800px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 533px;
    height: 616px;

    border-radius: 20px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${({ theme }) => theme.space[2] * 5 + 'px'};
`;

const Wrapper3D = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  transform-style: preserve-3d;
  transition: all 600ms ease-out;

  transform: ${({ rotate }) => rotate && 'rotateY(180deg)'};

  border-radius: 20px;
`;

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;

  position: absolute;
  left: 0;
  top: 0;

  transform-style: preserve-3d;
  backface-visibility: hidden;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 20px;
  }
`;

const RegisterWrapper = styled(LoginWrapper)`
  transform: rotateY(180deg);
`;

const Cont = styled.div`
  position: absolute;
  top: 50%;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.space[6] - 2 + 'px'};
    padding-top: ${({ theme }) => theme.space[3] * 5 + 'px'};
    padding-bottom: ${({ theme }) => theme.space[3] * 5 + 'px'};

    border-radius: 20px;
  }
`;

const FormPosit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding-top: ${({ theme }) => theme.space[6] - 4 + 'px'};
`;

export {
  FormContainer,
  BtnWrapper,
  Wrapper3D,
  LoginWrapper,
  RegisterWrapper,
  Cont,
  FormPosit,
};
