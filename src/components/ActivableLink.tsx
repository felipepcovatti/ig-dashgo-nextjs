import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react';

interface ActivableLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActivableLink({ children, shouldMatchExactHref, ...rest }: ActivableLinkProps) {
  const router = useRouter();

  const isActive =
    (router.asPath === rest.href || router.asPath === rest.as)
    || (!shouldMatchExactHref && (router.asPath.startsWith(String(rest.href)) || router.asPath.startsWith(String(rest.as))));

  return (
    <Link {...rest}>
      {
        cloneElement(children, {
          color: isActive ? 'pink.400' : 'gray.50'
        })
      }
    </Link>
  )
}