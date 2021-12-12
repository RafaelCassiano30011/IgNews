import { query } from "faunadb";
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({ children, activeClassName, ...rest }: ActiveLinkProps) => {
  const { pathname, query } = useRouter();

  const className = pathname === rest.href ? activeClassName : "";

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
