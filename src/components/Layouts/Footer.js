import {
  Text,
  Stack,
  HStack,
  Box,
  Container,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={5}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={{ base: "column", md: "row" }} fontWeight={"medium"}>
          <Text>&copy; 2024 CUBIC HUB. Designed By</Text>
          <Text
            as={"a"}
            href={"https://www.linkedin.com/"}
            target={"_blank"}
            color={"blue.600"}
          >
            Teja Gulagani
          </Text>
        </Stack>

        <Stack direction={"row"} spacing={6}>
          <IconButton
            isRound
            as="a"
            href="https://api.whatsapp.com/send?phone=916304390656"
            target="_blank"
            colorScheme={"green"}
          >
            <FaWhatsapp />
          </IconButton>
          <IconButton
            isRound="true"
            as={"a"}
            href={"https://www.linkedin.com/"}
            target="_blank"
            colorScheme={"blue"}
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            isRound="true"
            as={"a"}
            href={"https://www.instagram.com/"}
            target="_blank"
            colorScheme={"pink"}
          >
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
