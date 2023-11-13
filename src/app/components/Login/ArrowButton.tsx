import { Box } from "@chakra-ui/react";
import { UilAngleLeft } from "@iconscout/react-unicons";
import Link from "next/link";

function ArrowButton() {
  return (
    <Box pos="absolute">
      <Link href="../">
        <UilAngleLeft size="100" />
      </Link>
    </Box>
  );
}

export default ArrowButton;
