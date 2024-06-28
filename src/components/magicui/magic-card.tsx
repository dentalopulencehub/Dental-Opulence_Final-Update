import React, { ReactNode } from "react";

export const MagicCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <div className={className} >{children}</div>;
};

export const MagicContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return children;
};
