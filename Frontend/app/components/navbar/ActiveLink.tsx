import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';

interface IProps {
  children: ReactElement;
  activeClassName: string;
  href: string;
}

const ActiveLink = ({ children, activeClassName, href }: IProps) => {
  const [asPath, setAsPath] = useState('');
  useEffect(() => {
    // We'll call useRouter inside useEffect which runs after the component mounts
    const { asPath } = useRouter();
    setAsPath(asPath);
  }, []);
  const childClassName = children.props.className ?? '';

  const className =
    asPath === href
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className: className ?? null,
      })}
    </Link>
  );
};

export default ActiveLink;