import { Icon, Link as ChakraLink, LinkProps as chakraLinkProps, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface navLinkProps extends chakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink( { icon, children, href,...rest }: navLinkProps ) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}