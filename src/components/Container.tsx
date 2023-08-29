import { ReactNode } from "react";

type ChildrenNodes = {
  children: ReactNode;
};

export const Container = ({ children }: ChildrenNodes) => {
  return <div className="container">{children}</div>;
};
