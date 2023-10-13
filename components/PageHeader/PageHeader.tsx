import { PageHeaderProps } from "./PageHeaderProps";

const PageHeader = ({ children }: PageHeaderProps) => {
  return <h1 className="text-3xl my-4">{children}</h1>;
};

export default PageHeader;
