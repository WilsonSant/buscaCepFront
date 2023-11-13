"use client";
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { profileAtom } from "../atoms/atoms";
import { useAtom } from "jotai";
import Header from "../components/MainMenu/Header";
import { useState } from "react";
import { getAddress } from "../services/address";
import Table from "../components/MainMenu/Table";

function MainMenu() {
  const [user, setUser] = useAtom(profileAtom);
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState({});
  const [alert, setAlert] = useState(false);
  async function handleClick() {
    const data = await getAddress(search);
    if (data) {
      return setTableData(data);
    }
    return setAlert(true);
  }

  return (
    <Flex
      backgroundColor="#D7DED8"
      h="100vh"
      w="100%"
      flexDir="column"
      textAlign="center"
    >
      <Header
        state={search}
        setState={setSearch}
        {...{ handleClick, alert, setAlert, tableData }}
      />
      <Box>
        <Table {...{ tableData }} />
      </Box>
    </Flex>
  );
}

export default MainMenu;
