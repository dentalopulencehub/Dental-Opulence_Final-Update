import React from "react";
import Link from "next/link";

interface PrimaryLinkProps {
  title: string;
  href: string;
  style: string;
}

const PrimaryLink = ({ href, title, style }: PrimaryLinkProps) => {
  return (
    <Link href={href} className={style}>
      {title}
    </Link>
  );
};

export default PrimaryLink;
