"use client";
import { Alert, AlertIcon, Box, Flex, Stack } from "@chakra-ui/react";
import CustomInput from "../chakra/CustomInput";
import CustomButton from "../chakra/CustomButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUserLogin, sendUserLogin } from "@/app/services/login";
import { useAtom } from "jotai";
import { profileAtom, routeAtom } from "@/app/atoms/atoms";
function FormLogin(props) {
  const { firstLabel, secondLabel, buttonURL, messageForm, isLogin } = props;

  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alertRender, setAlertRender] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const [hasError, setHasError] = useState(false);
  const errorMessage = requestFailed
    ? "Ocorreu um erro ao processar sua requisição!"
    : messageForm;
  const [profile, setProfile] = useAtom(profileAtom);
  const [route, setRoute] = useAtom(routeAtom);

  function handleChange(el, setState) {
    setRequestFailed(false);
    setHasError(false);
    setAlertRender(false);
    setState(el.target.value);
  }

  async function validateSubmit() {
    if (user === "" || password === "") {
      setAlertRender(true);
      return setMessage(user === "" ? "Usuário" : "Senha");
    }
    const response = isLogin
      ? await getUserLogin(user, password)
      : await sendUserLogin(user, password);
    if (response?.success) {
      setProfile({
        userName: user,
        password,
        id: response?.data?.id,
      });
      setRoute("Grid");
      const url = isLogin ? "/MainMenu" : "../MainMenu";
      return router.push(url);
    } else if (response?.success === false) {
      setRequestFailed(false);
      setHasError(true);
      return setAlertRender(true);
    } else {
      setRequestFailed(true);
      setHasError(true);
      setAlertRender(true);
    }
  }

  return (
    <Box p="6">
      {alertRender && (
        <Alert status="error" mb="8">
          <AlertIcon />
          {hasError ? errorMessage : `Por favor, insira ${message}!`}
        </Alert>
      )}
      <Stack spacing={4}>
        <CustomInput
          placeholder="Usuário"
          type=""
          setState={setUser}
          handleChange={handleChange}
        />
        <CustomInput
          placeholder="Senha"
          type="password"
          setState={setPassword}
          handleChange={handleChange}
        />
      </Stack>
      <Flex display="flex" flexDir="column" paddingTop={6} gap={3}>
        <CustomButton
          bgColor="#1C2424"
          textColor="white"
          hoverColor="#384848"
          onClick={() => validateSubmit()}
        >
          {firstLabel}
        </CustomButton>
        <CustomButton
          bgColor="#9FB0A2"
          textColor="black"
          hoverColor="#BBC7BD"
          onClick={() => router.push(buttonURL)}
        >
          {secondLabel}
        </CustomButton>
      </Flex>
    </Box>
  );
}

export default FormLogin;
