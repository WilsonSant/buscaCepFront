import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { UilSearchAlt } from "@iconscout/react-unicons";
import { UilSave } from "@iconscout/react-unicons";
import MenuHover from "./MenuHover";
import { useAtom } from "jotai";
import { profileAtom } from "@/app/atoms/atoms";
import { sendAddress } from "@/app/services/address";
import { useState } from "react";
function Header(props) {
  const { state, setState, handleClick, alert, setAlert, tableData } = props;

  const [profile, setProfile] = useAtom(profileAtom);
  const [errorSave, setErrorSave] = useState(false);
  const [successSave, setSuccessSave] = useState(false);

  function handleChange(value) {
    value = value.replace(/[^0-9]/g, "");
    setErrorSave(false);
    setSuccessSave(false);
    setAlert(false);
    setState(value);
  }
  async function saveAddress() {
    setErrorSave(false);
    setSuccessSave(false);
    setAlert(false);
    const address = tableData[0];
    const body = { ...address, userId: profile?.id };
    const data = await sendAddress(body);
    if (!data.success) {
      setErrorSave(true);
      setAlert(true);
    } else {
      setSuccessSave(true);
      setAlert(true);
    }
  }

  return (
    <Stack
      backgroundColor="#B0AB9F"
      w="100%"
      p="2"
      pb="8"
      textAlign="start"
      gap={6}
    >
      {alert && successSave && (
        <Alert status="success" mb="8">
          <AlertIcon />
          Salvo com sucesso!
        </Alert>
      )}
      {alert && !successSave && (
        <Alert status="error" mb="8">
          <AlertIcon />
          {errorSave ? "Endereço já existe!" : "Erro ao Pesquisar Endereço"}
        </Alert>
      )}
      <Text as="b" fontSize="3xl" p="2">
        Pesquisar Endereço
      </Text>
      <Stack flexDir="row">
        <MenuHover />
        <Box>
          <InputGroup>
            <InputLeftElement>
              <UilSearchAlt />
            </InputLeftElement>
            <Input
              value={state}
              backgroundColor="white"
              onChange={(el) => handleChange(el.target.value)}
            />
          </InputGroup>
        </Box>
        <Box>
          <Button
            backgroundColor="#1C2424"
            textColor="white"
            _hover={{ bg: "#384848" }}
            onClick={handleClick}
          >
            Envio
          </Button>
        </Box>
      </Stack>
      {tableData.length > 0 && (
        <Button
          w="12%"
          backgroundColor="#9FB0A2"
          _hover={{ bg: "#BBC7BD" }}
          onClick={saveAddress}
        >
          <UilSave />
          Salvar Endereço
        </Button>
      )}
    </Stack>
  );
}

export default Header;
