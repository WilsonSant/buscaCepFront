"use client";
import { Center, Flex, Image, Text, VStack } from "@chakra-ui/react";
import ArrowButton from "./ArrowButton";
import FormLogin from "./FormLogin";

interface IProps {
  title: string;
  firstLabel: string;
  secondLabel: string;
  messageForm:string;
  isLogin: boolean;
  buttonURL: string;
}

function LoginPage(props: IProps) {
  const { title, isLogin } = props;
  return (
    <>
      {!isLogin && <ArrowButton />}
      <Flex
        backgroundColor="#D7DED8"
        minHeight="100vh"
        minWidth="100vw"
        justifyContent="center"
        align={!isLogin && "start"}
        paddingTop={!isLogin && "10"}
      >
        <Center>
          <VStack spacing={4} alignItems="center">
            <Text as="b" fontSize="5xl">
              {title}
            </Text>
            <FormLogin {...props} />
            {isLogin && (
              <Image alt="Login Image" boxSize="300px" src="/login.svg" />
            )}
          </VStack>
        </Center>
      </Flex>
    </>
  );
}

export default LoginPage;
