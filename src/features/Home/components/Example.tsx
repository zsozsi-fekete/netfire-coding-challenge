import StyledBadge from "@/components/StyledBadge";
import { Box, Flex, Link, Mark, Text, useHighlight } from "@chakra-ui/react";

const Example = () => {
  const properties = {
    badgeText: "EXAMPLE SECTION",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis eget. Morbi vitae libero in nunc sodales.",
    query:
      "ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel",
    seeMore: "SEE MORE",
  };
  const chunks = useHighlight({
    text: properties.text,
    query: properties.query,
  });
  return (
    <Flex w="100%" justify="center" bg="brand.example-bg">
      <Flex
        align="center"
        justify="center"
        direction="column"
        py="70px"
        w="70%"
        gap="28px"
      >
        <StyledBadge
          textProps={{
            children: properties.badgeText,
            color: "brand.badge-text",
          }}
        />
        <Box>
          <Text
            fontSize="32px"
            fontFamily="Exo"
            fontWeight="semibold"
            lineHeight="40px"
            letterSpacing="-0.05em"
            color="brand.example-text"
          >
            {chunks.map((chunk) => {
              if (!chunk.match) return chunk.text;
              return (
                <Mark layerStyle="accent" bgClip="text">
                  {chunk.text}
                </Mark>
              );
            })}
          </Text>
        </Box>
        <Link
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="semibold"
          textDecoration="underline"
          color="brand.see-more-link"
          letterSpacing="0.07em"
          mt="17px"
        >
          {properties.seeMore}
        </Link>
      </Flex>
    </Flex>
  );
};

export default Example;
