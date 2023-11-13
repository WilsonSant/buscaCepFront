import { routeAtom } from "@/app/atoms/atoms";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { UilBars } from "@iconscout/react-unicons";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

function MenuHover() {
  const [route, setRoute] = useAtom(routeAtom);
  const router = useRouter();
  function handleSearchMenu() {
    if (route !== "Grid") {
      setRoute("Grid");
      return router.push("../MainMenu");
    }
  }
  function handleSavedMenu() {
    if (route === "Grid") {
      setRoute("AddressMenu");
      router.push("../AddressMenu");
    }
  }

  return (
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<UilBars />}
          variant="outline"
          background="white"
        />
        <MenuList>
          <MenuItem onClick={handleSearchMenu}>Pesquisar</MenuItem>
          <MenuItem onClick={handleSavedMenu}>Endereços Salvos</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuHover;
