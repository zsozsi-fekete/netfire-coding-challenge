import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdvertBar = ({ children }: Props) => {
  return (
    <Flex h="62px" justify="center" align="center" bg="brand.grey-1">
      {children}
    </Flex>
  );
};

export default AdvertBar;
