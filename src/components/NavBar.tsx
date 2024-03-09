import cart from "@/assets/cart.svg";
import logo from "@/assets/logo.svg";
import user from "@/assets/user.svg";
import search from "@/assets/search.svg";
import { Flex, HStack, Image } from "@chakra-ui/react";
import NavIconButton from "./NavIconButton";
import NavLink from "./NavLink";

const NavBar = () => {
  const links = [
    {
      label: "Home",
      href: "#",
      isActive: true,
    },
    {
      label: "About",
      href: "#",
    },
    {
      label: "Products",
      href: "#",
    },
  ];

  return (
    <Flex
      as="header"
      w="100%"
      h="101px"
      bg="brand.grey-2"
      justify="space-around"
      align="center"
      pos="relative"
    >
      <HStack as={"nav"} spacing="15px" display="flex">
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} isActive={link.isActive}>
            {link.label}
          </NavLink>
        ))}
      </HStack>
      <Image src={logo} alt="Logo" pos="absolute" />
      <HStack spacing="17px" display="flex">
        <NavIconButton label="Cart" src={cart} />
        <NavIconButton label="User" src={user} />
        <NavIconButton label="Search" src={search} />
      </HStack>
    </Flex>
  );
};

export default NavBar;
