import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space[3] * 5 + 'px'};

  width: 100%;
  height: 100%;

  @media screen and (max-width: 767px) {
    padding: 0 ${({ theme }) => theme.space[2] * 6 + 'px'};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 410px;
  }
`;

const SubmBtnWrap = styled.div`
  justify-self: center;
  align-self: end;
`;

export { Form, SubmBtnWrap };
