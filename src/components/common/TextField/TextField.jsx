import { Label, Input, Text } from './TextField.styled';

const TextField = ({
  name,
  value,
  text,
  type,
  placeholder,
  Icon,
  changeHandler,
}) => {
  return (
    <Label htmlFor={name}>
      <Input
        name={name}
        id={name}
        // value={value}
        type={type}
        onChange={changeHandler}
        placeholder={placeholder}
      />
      <Text>{text}</Text>
      {Icon && Icon}
    </Label>
  );
};

export default TextField;
