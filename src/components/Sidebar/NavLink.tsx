import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActivableLink } from "../ActivableLink";
interface NavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActivableLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActivableLink>
  )
}