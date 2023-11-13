"use client";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Table from "../components/MainMenu/Table";
import MenuHover from "../components/MainMenu/MenuHover";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { profileAtom } from "../atoms/atoms";
import { getUserAddress } from "../services/address";

function AddressMenu() {
  const [tableData, setTableData] = useState([]);
  const [profile, setProfile] = useAtom(profileAtom);

  useEffect(() => {
    if (profile?.id) {
      getUserAddress(profile?.id, setTableData);
    }
  }, [profile]);

  return (
    <Flex
      backgroundColor="#D7DED8"
      h="100vh"
      w="100%"
      flexDir="column"
      textAlign="center"
    >
      <Stack
        backgroundColor="#B0AB9F"
        w="100%"
        p="2"
        pb="8"
        textAlign="start"
        gap={6}
      >
        <Text as="b" fontSize="3xl" p="2">
          Endereços Salvos
        </Text>
        <Stack flexDir="row">
          <MenuHover />
        </Stack>
      </Stack>
      <Box>
        <Table {...{ tableData }} />
      </Box>
    </Flex>
  );
}

export default AddressMenu;
