import { Badge, Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const StyledBadge = ({ text }: Props) => {
  return (
    <Badge
      bg="brand.badge-bg"
      py={3}
      px={5}
      borderRadius="12px"
      borderWidth="1px"
      borderColor="brand.badge-border"
    >
      <Text color="white" fontFamily="Exo" size="xs" letterSpacing="0.07rem">
        {text}
      </Text>
    </Badge>
  );
};

export default StyledBadge;
