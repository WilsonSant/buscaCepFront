import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  bgColor: string;
  textColor: string;
  hoverColor: string;
  children: ReactNode;
  onClick?: any;
}

function CustomButton(props: IProps) {
  const { bgColor, textColor, hoverColor, children, onClick } = props;
  
  return (
    <Button
      size="lg"
      backgroundColor={bgColor}
      textColor={textColor}
      rounded="full"
      onClick={onClick}
      _hover={{ bg: `${hoverColor}` }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
