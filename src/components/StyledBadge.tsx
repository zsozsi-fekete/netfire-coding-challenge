import { Badge, BadgeProps, Text, TextProps } from "@chakra-ui/react";

interface Props {
  textProps?: TextProps;
  badgeProps?: BadgeProps;
}

const StyledBadge = ({ textProps, badgeProps }: Props) => {
  return (
    <Badge
      bg="brand.badge-bg"
      py={3}
      px={5}
      borderRadius="12px"
      borderWidth="1px"
      borderColor="brand.badge-border"
      {...badgeProps}
    >
      <Text
        color="white"
        fontFamily="Exo"
        size="xs"
        letterSpacing="0.07rem"
        {...textProps}
      />
    </Badge>
  );
};

export default StyledBadge;
