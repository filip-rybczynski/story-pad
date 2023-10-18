import { PageHeader } from "@/components";
import React, { ReactNode } from "react";

const EditorPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <PageHeader>Editor page</PageHeader>
      {children}
    </div>
  );
};

export default EditorPageLayout;
