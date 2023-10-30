import { PageHeader } from "@/components";
import React, { ReactNode } from "react";

const AnalysisPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PageHeader>Analysis page</PageHeader>
      {children}
    </div>
  );
};

export default AnalysisPageLayout;
