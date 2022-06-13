import { Box, Text, Stack, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  RiDashboardLine,
  RiContactsLine
} from "react-icons/ri";

interface navSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection ({ title, children }: navSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="strech">
        {children}
      </Stack>
    </Box>
  );
}