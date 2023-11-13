import { Input } from "@chakra-ui/react";

interface IProps {
  placeholder: string;
  type: string;
  setState: any;
  handleChange:any;
}

function CustomInput(props: IProps) {
  const { placeholder, type,setState, handleChange } = props;
  return (
    <Input
      placeholder={placeholder}
      type={type}
      backgroundColor="white"
      borderRadius="full"
      size="lg"
      onChange={el => handleChange(el, setState)}
    />
  );
}

export default CustomInput;
