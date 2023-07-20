import styled from 'styled-components';

const Label = styled.label`
  position: relative;

  display: block;
  width: 100%;

  color: ${({ theme }) => theme.colors.placeholderColor};

  &:not(:first-child) {
    margin-top: 40px;
  }

  & svg {
    position: absolute;
    bottom: 8px;
    left: 11px;

    fill: ${({ theme }) => theme.colors.borderGrey};

    transition: fill 300ms ${({ theme }) => theme.transition.main};
  }

  & input:hover ~ svg,
  & input:focus ~ svg {
    fill: ${({ theme }) => theme.colors.violet};
  }
`;

const Input = styled.input`
  width: 100%;
  padding-left: ${({ theme }) => theme.space[4] * 3 + 2 + 'px'};
  padding-bottom: ${({ theme }) => theme.space[3] + 'px'};

  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderGrey};
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:not(:placeholder-shown) ~ span {
    transform: translate(-18px, -27px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 410px;
  }
`;

const Text = styled.span`
  position: absolute;
  bottom: 7px;
  left: 50px;

  transition: transform 250ms ${({ theme }) => theme.transition.main};

  pointer-events: none;
`;

export { Text, Label, Input };
