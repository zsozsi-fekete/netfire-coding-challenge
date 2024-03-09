import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  isActive?: boolean;
}

const NavLink = ({ children, href, isActive }: Props) => {
  return (
    <Box
      as="a"
      px={6}
      py={2}
      rounded={"md"}
      border="1px"
      borderColor="brand.nav-button-border"
      borderRadius="6px"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
      bg={`brand.nav-button-bg${isActive ? "-active" : ""}`}
    >
      <Text
        fontFamily="Exo"
        fontWeight={isActive ? 600 : 500}
        fontSize="sm"
        color={`brand.nav-button-text${isActive ? "-active" : ""}`}
        textTransform="uppercase"
        letterSpacing="0.07rem"
      >
        {children}
      </Text>
    </Box>
  );
};

export default NavLink;
