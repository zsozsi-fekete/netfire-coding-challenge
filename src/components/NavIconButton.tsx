import { IconButton, Image } from "@chakra-ui/react";

interface Props {
  label: string;
  src: string;
  onClick?: () => void;
}

const NavIconButton = ({ label, src, onClick }: Props) => {
  return (
    <IconButton
      aria-label={label}
      w="43px"
      h="43px"
      border="1px"
      borderColor="brand.nav-button-border"
      borderRadius="50%"
      bg="brand.nav-button-bg"
      icon={<Image src={src} alt={`${label} icon`} />}
      onClick={onClick}
    />
  );
};

export default NavIconButton;
