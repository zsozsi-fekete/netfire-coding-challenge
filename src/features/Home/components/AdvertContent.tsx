import { Highlight, Text } from "@chakra-ui/react";

const AdvertContent = () => {
  const properties = {
    text: "NEW CUSTOMERS GET 15% OFF! USE CODE WELCOME15",
    query: "WELCOME15",
  };

  return (
    <Text
      fontFamily="Inter"
      fontSize="sm"
      fontWeight="medium"
      letterSpacing="0.07rem"
    >
      <Highlight
        query={properties.query}
        styles={{ color: "brand.advert-highlight" }}
      >
        {properties.text}
      </Highlight>
    </Text>
  );
};

export default AdvertContent;
