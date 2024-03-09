import { Flex, Highlight, Image, Text } from "@chakra-ui/react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const properties = {
    brandName: "Brand Name",
    smallPrint:
      "© 2024 Brand Name All rights reserved. Unauthorized use or copying of this brand is strictly prohibited. No part of this website may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of Brand Name, except in the case of brief quotations embodied in critical reviews and certain other non-commercial uses permitted by copyright law.",
    query: "Brand Name",
  };
  return (
    <Flex w="100%" justify="center" bg="brand.footer-bg">
      <Flex align="center" justify="center" py="25px" w="70%" gap="50px">
        <Flex align="center" gap="24px" minW="300px">
          <Image src={logo} alt="Logo" />
          <Text
            fontFamily="Exo"
            fontSize="24px"
            fontWeight="semibold"
            lineHeight="31.9px"
            letterSpacing="0.07em"
            color="brand.footer-brand-name"
            w="100%"
          >
            {properties.brandName}
          </Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontWeight="normal"
          fontSize="11px"
          lineHeight="13.31px"
          letterSpacing="0.07em"
        >
          <Highlight query={properties.query} styles={{ fontWeight: "bold" }}>
            {properties.smallPrint}
          </Highlight>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
