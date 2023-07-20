import styled from 'styled-components';

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  max-height: 50px;
  padding: ${({ theme }) => theme.space[4] - 4 + 'px'} 0;

  text-transform: uppercase;
  color: ${({ theme, type }) =>
    type === 'submit' ? theme.colors.white : theme.colors.violet};

  background-color: ${({ theme, type }) =>
    type === 'submit' ? theme.colors.green : theme.colors.white};
  border-radius: 20px;
  border: ${({ theme, type }) =>
    type === 'submit' ? 'none' : '1px solid ' + theme.colors.violet};

  transition: box-shadow 250ms ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    box-shadow: ${({ theme, type }) =>
      type === 'submit' ? theme.boxShadows.green : theme.boxShadows.violet};
  }
`;

export { Btn };
