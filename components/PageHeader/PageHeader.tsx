import { PageHeaderProps } from "./PageHeaderProps";

export const PageHeader = ({ children }: PageHeaderProps) => {
  return <h1 className="text-3xl my-4">{children}</h1>;
};
