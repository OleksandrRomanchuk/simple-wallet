import { Btn } from './Button.styled';

const Button = ({ type, text, clickHandler, width }) => {
  return (
    <Btn type={type} onClick={clickHandler} width={width}>
      {text}
    </Btn>
  );
};

export default Button;
